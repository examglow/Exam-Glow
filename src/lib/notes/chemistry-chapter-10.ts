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

const waterArt = artPanel([
  {
    src: "ch10-hard-water-limescale.webp",
    alt: "Cross-section of a kettle element encrusted with white limescale deposits",
    caption: "Chalky limescale coating a heating element",
  },
  {
    src: "ch10-water-treatment-works.webp",
    alt: "Aerial view of a water treatment works with round settling tanks and a filtering basin",
    caption: "Treatment works supply the water we use",
  },
]);

const airArt = artPanel([
  {
    src: "ch10-greenhouse-effect-earth.webp",
    alt: "Earth wrapped in a thin atmospheric shell with incoming light and reflected heat arrows",
    caption: "The atmosphere traps outgoing heat",
  },
  {
    src: "ch10-acid-rain-forest.webp",
    alt: "A hillside of bare drooping trees under grey clouds with a lifeless stream below",
    caption: "Acid rain strips a hillside bare",
  },
]);

const resourcesArt = artPanel([
  {
    src: "ch10-plastic-bottles-recycling.webp",
    alt: "A triangular recycling arrow symbol enclosing a bundle of crushed plastic bottles",
    caption: "Recycling plastic bottles conserves feedstock",
  },
  {
    src: "ch10-catalytic-converter.webp",
    alt: "Cutaway of an exhaust canister showing a honeycomb ceramic core cleaning the fumes",
    caption: "Catalytic converters clean exhaust fumes",
  },
]);

export const CHEMISTRY_CHAPTER_10: Chapter = {
  number: 10,
  title: "Chemistry of the Environment",
  intro: `Clean air, pure water and the minerals in the Earth's crust are the resources all life depends on.\n\nThis chapter tests and treats water, removes its hardness, and examines pollution of rivers and the air.\n\nIt closes with fertilisers, the carbon and nitrogen cycles, and the sustainable use of our shared resources.`,
  subheadings: [
    {
      title: "Water: Composition, Testing and Making It Safe to Drink",
      body: `## The Simple Formula

Water is the compound H₂O: two hydrogen atoms bonded to one oxygen atom. Its relative formula mass is 18, since 2 + 16 = 18.

Pure water boils at exactly 100 °C and freezes at 0 °C at sea level.

## Testing for Water

Two reagents give quick colour tests for water. White anhydrous copper(II) sulfate turns blue as it takes up water to form the hydrated salt.

Blue cobalt chloride paper turns pink when it is wetted. These changes are reversible, so they detect water but do not prove a liquid is pure.

## Making Potable Water

A natural source such as a lake holds mud, microbes and dissolved impurities. Sedimentation adds calcium hydroxide, which makes fine particles clump and settle out.

The water then passes through sand beds, and filtration traps the remaining solids. Chlorination adds a little chlorine to kill the harmful microbes.

The result is safe drinking water, but these stages leave dissolved salts behind.

## Desalination by Distillation

Sea water can be made drinkable by distillation. The sea water is boiled and the steam is cooled back to pure liquid water.

The dissolved salts do not evaporate, so they are left behind. Distillation works but needs a very large supply of energy to boil the water.

That high energy cost is why desalination is used mainly where fresh water is scarce.

## Separate Supplies

Drinking water and sewer water travel through separate pipes. Keeping them apart stops untreated sewage from contaminating the supply.

A cross-connection between the two systems would be a serious health risk.`,
      groups: [
        {
          subTitle: "Composition and the Two Water Tests",
          bullets: [
            "Water has the formula H₂O, so each molecule holds two hydrogen atoms and one oxygen atom.",
            "Its relative formula mass is 18, found by adding the masses of the hydrogen and oxygen.",
            "Anhydrous copper(II) sulfate is white and turns blue when water is added.",
            "Cobalt chloride paper is blue and turns pink in the presence of water.",
            "These tests detect water but cannot show whether the water is pure.",
            "Pure water boils at 100 °C and freezes at 0 °C under normal atmospheric pressure.",
          ],
        },
        {
          subTitle: "The Three Main Treatment Stages",
          bullets: [
            "Sedimentation adds calcium hydroxide so fine particles clump together and settle.",
            "Filtration through sand beds removes the remaining insoluble solids.",
            "Chlorination kills the harmful microbes that cause water-borne disease.",
            "These stages remove solids and microbes but leave dissolved salts behind.",
            "The treated water must stay separate from sewer water in its own pipes.",
          ],
        },
        {
          subTitle: "Removing the Salt from Sea Water",
          bullets: [
            "Distillation boils sea water and then condenses the steam to leave the salts behind.",
            "Only pure water evaporates, so the residue contains all the dissolved salts.",
            "Distillation is expensive because boiling the water needs a large energy supply.",
            "It is used mainly in hot, dry regions where fresh water is scarce.",
          ],
        },
      ],
      examinerTips: [
        "Give the observations as colour changes: white to blue for copper(II) sulfate, blue to pink for cobalt chloride.",
        "Name the treatment stages in order, then say chlorination kills microbes rather than that it 'cleans' water.",
        "For desalination, always mention the high energy cost as the reason it is not used everywhere.",
        "Write that sedimentation uses calcium hydroxide, not just a vague 'chemical', to secure the mark.",
      ],
      commonMistakes: [
        "Confusing the two tests: copper(II) sulfate turns blue, whereas cobalt chloride paper turns pink.",
        "Claiming filtration removes salt; filtration only removes insoluble solids, not dissolved ions.",
        "Saying chlorination makes water pure; it kills microbes but leaves the dissolved salts behind.",
        "Treating these water tests as proof of purity when they only detect the presence of water.",
      ],
      recap: [
        "Describe how you would test a colourless liquid to find out whether it contains water. [3]",
        "Name the three main stages used to make potable water from a river. [3]",
        "Explain why desalination by distillation is used only in some parts of the world. [3]",
        "State why drinking water must be kept separate from sewer water. [2]",
      ],
    },
    {
      title: "Water Pollution and Sewage Treatment",
      body: `## Causes of Pollution

Water is polluted by sewage, industrial effluent and fertiliser run-off. Sewage carries pathogens from faeces, so it can spread disease.

Industrial effluent may contain toxic heavy metals and acids. Fertilisers washed from fields add excess nitrate ions to rivers.

## Algal Blooms

Extra nitrates act as plant nutrients, so algae grow very quickly. This dense growth, the algal bloom, spreads across the surface.

The bloom blocks sunlight, so submerged plants can no longer photosynthesise. The plants die and bacteria then decompose the dead matter.

These decomposing bacteria respire aerobically, using up the dissolved oxygen.

## The Oxygen Crash

As the bacteria respire, the dissolved oxygen concentration falls sharply. Fish and other aquatic animals then die from a lack of oxygen.

The loss of oxygen after a water body is enriched with nutrients is eutrophication. A nutrient that feeds crops can therefore end up suffocating a river.

## Treating Sewage

Sewage is cleaned before it is released safely back into rivers. Screening removes large solids, and then the liquid is allowed to settle.

In the aerobic stage oxygen is bubbled in so aerobic bacteria break down the organic matter.

This aerobic digestion is fast and greatly lowers the oxygen demand of the water.

## Anaerobic Digestion

The remaining sludge is treated without oxygen in anaerobic digesters. Anaerobic bacteria break the solids down and release methane gas.

The methane is burned to provide energy for the treatment works. Only after both stages is the water clean enough to release into a river.`,
      groups: [
        {
          subTitle: "Pollutants and Their Sources",
          bullets: [
            "Sewage is the main biological pollutant and it carries disease-causing pathogens.",
            "Fertiliser run-off adds nitrate and phosphate ions that act as plant nutrients.",
            "Industrial effluent can contain harmful acids and toxic heavy-metal ions.",
            "Oil spills and detergents also pollute water and harm aquatic life.",
          ],
        },
        {
          subTitle: "Eutrophication, Step by Step",
          bullets: [
            "Nutrient ions make algae grow fast into a dense green bloom.",
            "The bloom blocks light, so underwater plants stop photosynthesising.",
            "When the plants die, bacteria decompose them by aerobic respiration.",
            "This respiration uses up oxygen, so the dissolved oxygen concentration falls.",
            "Fish and other organisms then die as the oxygen runs out.",
          ],
        },
        {
          subTitle: "The Stages of Sewage Treatment",
          bullets: [
            "Screening and sedimentation remove solids before the liquid is treated further.",
            "In the aerobic stage bacteria break down organic matter using oxygen.",
            "The anaerobic stage digests sludge without oxygen and produces methane.",
            "The methane released is often burned to generate useful energy.",
            "Treated water is released only after its oxygen demand has been reduced.",
          ],
        },
      ],
      examinerTips: [
        "Put the eutrophication steps in order; the trigger is nutrient ions from fertiliser, not fertiliser itself.",
        "Name the oxygen fall as the result of aerobic decomposer respiration, not of the algae.",
        "For sewage treatment use the words aerobic, meaning with oxygen, and anaerobic, without oxygen.",
        "Mention the methane from the anaerobic stage, since it shows the useful energy recovered.",
      ],
      commonMistakes: [
        "Saying algae use up the oxygen; it is the decomposing bacteria that consume it.",
        "Confusing the aerobic and anaerobic stages; only anaerobic digestion gives off methane.",
        "Believing fertiliser pollutes because it is toxic; it pollutes by overfeeding the algae.",
        "Claiming sedimentation alone makes sewage safe; microbial treatment is still needed.",
      ],
      recap: [
        "Describe the sequence of events that leads to eutrophication after fertiliser enters a river. [5]",
        "Explain why the dissolved oxygen concentration falls when sewage is decomposed. [3]",
        "State the difference between the aerobic and anaerobic stages of sewage treatment. [3]",
        "Name one useful product obtained from the anaerobic digestion of sewage sludge. [1]",
      ],
    },
    {
      title: "Hard and Soft Water",
      body: `## What Causes Hardness

Hard water contains dissolved calcium and magnesium ions. These ions leach out of limestone and chalk as rainwater drains through the ground.

Rainwater is slightly acidic, so it slowly dissolves the calcium carbonate rock. It is the dissolved calcium and magnesium that make the water hard.

## Testing with Soap

Soft water lathers easily with a soap solution. Hard water forms little lather and instead produces a scum.

The scum is an insoluble solid formed when soap reacts with the calcium ions. Much more soap is therefore wasted when washing with hard water.

## Temporary Hardness

Temporary hardness is caused by dissolved calcium hydrogencarbonate. Boiling the water breaks this compound down and precipitates calcium carbonate.

That carbonate is the chalky limescale deposit seen inside a kettle. So boiling removes temporary hardness and leaves the water soft.

## Permanent Hardness

Permanent hardness comes from dissolved calcium or magnesium sulfate. Boiling cannot remove it, because these salts do not break down on heating.

Adding washing soda, sodium carbonate, precipitates the calcium ions as calcium carbonate. Alternatively an ion-exchange column swaps the calcium ions for harmless sodium ions.

## Why Hardness Matters

The treatment works that supplies our water rarely removes these dissolved ions. Limescale therefore builds up on the heating elements of kettles and boilers.

The scale acts as an insulator, so more energy is needed to heat the water.

A thick deposit can eventually block pipes and waste a great deal of fuel. Industries that run many boilers must soften their water to save energy.`,
      figure: waterArt,
      groups: [
        {
          subTitle: "Hardness, Its Cause and Its Test",
          bullets: [
            "Hard water contains dissolved calcium and magnesium ions from limestone or chalk.",
            "Slightly acidic rainwater dissolves calcium carbonate rock as it drains through the ground.",
            "Soap lathers well in soft water but forms a scum in hard water.",
            "The scum is an insoluble calcium compound produced from the soap.",
          ],
        },
        {
          subTitle: "Temporary and Permanent Hardness",
          bullets: [
            "Temporary hardness can be removed simply by boiling the water.",
            "Boiling turns dissolved calcium hydrogencarbonate into insoluble calcium carbonate.",
            "Permanent hardness needs washing soda to precipitate the calcium ions.",
            "Ion-exchange columns swap the calcium ions for sodium ions instead.",
            "Dissolved calcium and magnesium sulfate cause permanent hardness that boiling cannot remove.",
          ],
        },
        {
          subTitle: "The Effects of Hardness",
          bullets: [
            "Limescale is a chalky deposit of calcium carbonate inside kettles.",
            "A layer of scale insulates a heater, so more energy is needed.",
            "Heavy limescale can block boiler pipes and even cause them to burst.",
            "Industries often soften their water before using it in boilers.",
          ],
        },
      ],
      examinerTips: [
        "Name the two ions that cause hardness, calcium and magnesium, every single time.",
        "For temporary hardness say boiling removes it; for permanent hardness name washing soda or ion-exchange.",
        "Link limescale to the extra energy cost, since that is why hardness matters industrially.",
        "Define scum as the insoluble solid formed when soap reacts with the calcium ions.",
      ],
      commonMistakes: [
        "Thinking that boiling removes all hardness; only temporary hardness is removed this way.",
        "Saying hard water is harmful to drink; it is safe and can even supply calcium.",
        "Confusing the causes of temporary and permanent hardness, hydrogencarbonate versus sulfate.",
        "Naming the white kettle deposit without stating that it is calcium carbonate limescale.",
      ],
      recap: [
        "State what causes temporary hardness and describe how boiling removes it. [3]",
        "Describe two methods of removing permanent hardness from a water supply. [2]",
        "Explain why hard water is inconvenient when it is used for washing. [3]",
        "Explain why a limescale deposit inside a boiler wastes energy. [3]",
      ],
    },
    {
      title: "The Composition of Air and its Pollutants",
      body: `## The Gases in Clean Air

Clean, dry air is about 78% nitrogen and about 21% oxygen. Nearly all the rest is argon, roughly 1%, with a little carbon dioxide.

Carbon dioxide makes up only about 0.04% of the air. Water vapour varies with the weather and is not counted as a pollutant.

## Carbon Monoxide

Carbon monoxide forms when a fuel burns with too little oxygen. This incomplete combustion releases a colourless, toxic gas.

Carbon monoxide binds to haemoglobin, so less oxygen is carried around the body. In a closed room a faulty appliance can therefore be fatal.

## Nitrogen Oxides

At the very high temperature inside a car engine, nitrogen reacts with oxygen. The nitrogen oxides formed are then released in the exhaust gases.

Lightning also creates these high temperatures and fixes nitrogen into oxides.

## Sulfur Dioxide

Fossil fuels contain some sulfur as an unwanted impurity. Burning the fuel oxidises this sulfur to sulfur dioxide gas.

Sulfur dioxide from power stations is a major air pollutant.

## Particulates and Hydrocarbons

Combustion also releases tiny solid particles called particulates. These include soot and dust, which darken the air and clog the airways.

Unburnt hydrocarbons escape whenever fuel fails to burn completely.

## Catalytic Converters

A catalytic converter sits inside a car's exhaust system. Its catalyst changes carbon monoxide and nitrogen oxides into harmless gases.

The carbon monoxide becomes carbon dioxide and the nitrogen oxides become nitrogen. Any unburnt hydrocarbon is oxidised fully to carbon dioxide and water.`,
      groups: [
        {
          subTitle: "The Composition of Clean Air",
          bullets: [
            "Nitrogen makes up about 78% of clean, dry air.",
            "Oxygen makes up about 21% and is needed for respiration and combustion.",
            "Argon accounts for about 1% and is an unreactive noble gas.",
            "Carbon dioxide is only about 0.04% of the air.",
            "The water-vapour content varies with the weather and humidity.",
          ],
        },
        {
          subTitle: "Pollutants Released by Combustion",
          bullets: [
            "Carbon monoxide forms from incomplete combustion when the oxygen supply is limited.",
            "Sulfur dioxide forms when sulfur impurities within a fuel are burned.",
            "Nitrogen oxides form when nitrogen and oxygen react at high engine temperatures.",
            "Particulates are tiny solid particles such as soot and dust.",
            "Unburnt hydrocarbons are fuel vapours that fail to burn completely.",
          ],
        },
        {
          subTitle: "Their Damage and the Catalytic Converter",
          bullets: [
            "Carbon monoxide binds haemoglobin, so the blood carries less oxygen.",
            "Lightning and hot engines both form nitrogen oxides from atmospheric nitrogen.",
            "A catalytic converter changes carbon monoxide into carbon dioxide.",
            "It also converts harmful nitrogen oxides into nitrogen gas.",
            "Full oxidation of unburnt hydrocarbons gives carbon dioxide and water.",
          ],
        },
      ],
      examinerTips: [
        "Give the air percentages precisely, using about 78% nitrogen and about 21% oxygen.",
        "For carbon monoxide always finish with 'binds to haemoglobin so less oxygen is carried'.",
        "For each pollutant, state the source first and then the damage it does.",
        "Name the three gases a catalytic converter removes: carbon monoxide, nitrogen oxides and unburnt hydrocarbons.",
      ],
      commonMistakes: [
        "Confusing carbon monoxide with carbon dioxide; only the monoxide is toxic through haemoglobin.",
        "Calling carbon dioxide a pollutant; it is natural, though excess adds to the greenhouse effect.",
        "Attributing acid rain to carbon dioxide instead of to sulfur dioxide and nitrogen oxides.",
        "Claiming a catalytic converter removes carbon dioxide; it removes carbon monoxide and nitrogen oxides.",
      ],
      recap: [
        "State the approximate percentages of nitrogen, oxygen and carbon dioxide in clean air. [3]",
        "Explain how carbon monoxide is formed and why it is dangerous to health. [4]",
        "Name two pollutants produced by a car engine. [2]",
        "Describe how a catalytic converter reduces the pollution from a car. [3]",
      ],
    },
    {
      title: "Effects of Air Pollutants: Acid Rain, Greenhouse Effect and Ozone",
      body: `## Acid Rain

Sulfur dioxide and nitrogen oxides dissolve in rainwater to form acids. This makes the rain far more acidic than normal, a process called acid rain.

Acid rain lowers the pH of lakes, killing fish and other water life. It also damages trees by leaching nutrients from the soil and weakening leaves.

## Weathering Buildings and Statues

Acid rain corrodes metals and slowly dissolves carbonate stone. The acid reacts with calcium carbonate in limestone and marble buildings.

Statues carved from carbonate rock lose their fine detail as they weather away.

## The Greenhouse Effect

The greenhouse effect is a natural process that keeps the planet warm. Gases such as carbon dioxide, methane and water vapour trap heat near the surface.

Sunlight passes inward, but these gases absorb the infrared heat radiated back. Without the natural effect the Earth would be far too cold to support life.

## Enhanced Global Warming

Burning fossil fuels adds extra carbon dioxide to the atmosphere. More greenhouse gas traps more heat, so the average temperature rises.

This enhanced global warming melts ice and raises sea levels around the world. It also changes weather patterns and can increase the risk of flooding.

## The Ozone Layer

The ozone layer high in the atmosphere blocks harmful ultraviolet radiation. Chlorofluorocarbons, once used widely in aerosols, destroy this ozone.

The loss of ozone lets more ultraviolet reach the surface, causing skin damage.`,
      figure: airArt,
      groups: [
        {
          subTitle: "Acid Rain: Formation and Damage",
          bullets: [
            "Acid rain forms when sulfur dioxide and nitrogen oxides dissolve in rainwater.",
            "The resulting rain has a much lower pH than clean, unpolluted rain.",
            "Acid rain acidifies lakes, which kills the fish and aquatic plants within them.",
            "It damages trees by washing important nutrients from the soil.",
            "The acid dissolves calcium carbonate, so buildings and statues weather away.",
          ],
        },
        {
          subTitle: "The Greenhouse Effect",
          bullets: [
            "Carbon dioxide, methane and water vapour are the main greenhouse gases.",
            "Greenhouse gases let sunlight in but absorb heat radiated from the surface.",
            "This trapped heat keeps the Earth warm enough to support life.",
            "Extra carbon dioxide from combustion traps much more heat than before.",
            "Enhanced global warming raises sea levels and alters regional climates.",
          ],
        },
        {
          subTitle: "Depletion of the Ozone Layer",
          bullets: [
            "The ozone layer absorbs harmful ultraviolet radiation from the Sun.",
            "CFCs were once widely used in aerosol sprays and in refrigerators.",
            "CFCs react with and destroy ozone high in the atmosphere.",
            "More ultraviolet then reaches the surface and can harm skin and crops.",
          ],
        },
      ],
      examinerTips: [
        "Name both gases that cause acid rain, sulfur dioxide and nitrogen oxides, never just one.",
        "For damage to stone, mention the reaction of the acid with calcium carbonate.",
        "List the greenhouse gases as carbon dioxide, methane and water vapour.",
        "Keep the natural greenhouse effect separate from the enhanced warming caused by extra carbon dioxide.",
      ],
      commonMistakes: [
        "Calling the greenhouse effect entirely harmful; the natural effect is essential for life.",
        "Saying carbon dioxide causes acid rain; it is sulfur dioxide and nitrogen oxides that do.",
        "Blaming the ozone hole on carbon dioxide instead of on the CFCs.",
        "Confusing the greenhouse effect with acid rain, which are two quite separate problems.",
      ],
      recap: [
        "Explain how sulfur dioxide and nitrogen oxides cause acid rain, and name two of its effects. [5]",
        "Describe how the greenhouse effect warms the Earth and name three greenhouse gases. [4]",
        "Explain why enhanced global warming is a concern for sea levels and climate. [3]",
        "State how CFCs damage the ozone layer. [2]",
      ],
    },
    {
      title: "The Earth's Crust, Fertilisers and Using Resources Sustainably",
      body: `## Limestone from the Crust

The Earth's crust is a source of useful minerals such as limestone. Limestone is mostly calcium carbonate, with the formula CaCO₃.

Strong heating decomposes the limestone into calcium oxide and carbon dioxide. The equation is CaCO₃ → CaO + CO₂, which is a thermal decomposition.

Calcium oxide is called quicklime, and it reacts with water to form calcium hydroxide.

## Uses of Limestone

Calcium oxide and calcium hydroxide are used to make cement. Cement mixed with aggregate and water gives concrete.

Mortar, the paste that joins bricks, is made from similar materials. Glass is made by heating sand, which is silica, together with other oxides.

Crushed limestone also neutralises acidic soils and damaged lakes.

## Nitrogen Fertilisers

Plants need nitrogen to make the proteins they use for growth. Nitrogen fertilisers supply nitrate ions that plant roots can absorb from the soil.

These fertilisers raise crop yields and so support more people. Yet the excess run-off pollutes rivers through eutrophication.

## The Carbon and Nitrogen Cycles

Photosynthesis in plants removes carbon dioxide from the air. Respiration and combustion return carbon dioxide to the atmosphere. Nitrogen-fixing bacteria convert atmospheric nitrogen into compounds usable by plants.

Other bacteria change soil nitrates back into nitrogen gas.

## Using Resources Sustainably

The Earth's resources are finite, so chemists recycle rather than discard. Recycling aluminium and steel saves the huge energy needed to extract fresh metal.

Recycling plastics reduces landfill waste and conserves crude oil feedstock. Cutting pollution, for example with catalytic converters, protects these shared resources.`,
      figure: resourcesArt,
      groups: [
        {
          subTitle: "Limestone and Its Key Reactions",
          bullets: [
            "Limestone is mainly calcium carbonate, CaCO₃, mined from the crust.",
            "Heating limestone strongly gives calcium oxide and carbon dioxide.",
            "The reaction CaCO₃ → CaO + CO₂ is a thermal decomposition.",
            "Calcium oxide reacts with water to form calcium hydroxide.",
            "Calcium hydroxide is alkaline, so it neutralises acidic soils.",
          ],
        },
        {
          subTitle: "Everyday Uses of Limestone",
          bullets: [
            "Limestone is used to manufacture cement, concrete and mortar.",
            "Heating silica sand with other oxides produces glass.",
            "Crushed limestone neutralises acidic lakes damaged by acid rain.",
            "Calcium compounds from limestone also treat acidic industrial effluent.",
          ],
        },
        {
          subTitle: "Fertilisers and the Two Cycles",
          bullets: [
            "Fertilisers supply nitrate ions that plants absorb to make proteins.",
            "The carbon cycle moves carbon dioxide between photosynthesis and respiration.",
            "Nitrogen-fixing bacteria convert atmospheric nitrogen into soil compounds.",
            "Respiration and combustion return carbon dioxide to the atmosphere.",
          ],
        },
        {
          subTitle: "Using Resources Sustainably",
          bullets: [
            "Recycling metals saves the large amount of energy needed for extraction.",
            "Recycling plastics reduces landfill and conserves crude-oil feedstock.",
            "Reducing waste and pollution protects finite resources for the future.",
            "Catalytic converters cut the toxic gases released by vehicles.",
          ],
        },
      ],
      examinerTips: [
        "Write the limestone decomposition as CaCO₃ → CaO + CO₂ and add state symbols if asked.",
        "Name both the process, thermal decomposition, and the product, calcium oxide or quicklime.",
        "For fertilisers, link the nitrates to crop growth and also to pollution from run-off.",
        "Give recycling reasons as energy saved and landfill reduced, not as a vague 'good for the planet'.",
      ],
      commonMistakes: [
        "Saying limestone is calcium oxide; it is calcium carbonate until it is strongly heated.",
        "Confusing cement with concrete; concrete is cement mixed with aggregate.",
        "Believing plant roots absorb nitrogen gas directly from the air.",
        "Naming limestone as the source of glass; glass is made mainly from silica sand.",
      ],
      recap: [
        "Describe how calcium oxide is made from limestone and name the process involved. [3]",
        "State two uses of limestone or of one of its compounds. [2]",
        "Explain why nitrogen fertilisers are important for crops yet can pollute water. [4]",
        "Give two reasons for recycling plastics and metals. [2]",
      ],
    },
  ],
};
