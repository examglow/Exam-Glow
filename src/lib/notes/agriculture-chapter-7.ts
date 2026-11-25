import type { Chapter } from "./types";

const IMG = "/notes/agriculture";

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

const housingArt = artPanel([
  {
    src: "ag07-cattle-housing.webp",
    alt: "A zero-grazing shed open at the sides, with a raised feed trough, dry straw bedding and a slatted drain carrying waste away from the standing area",
    caption: "Dry bedding, moving air, waste leaving",
  },
  {
    src: "ag07-pig-pen.webp",
    alt: "A pig pen with a concrete floor sloping to a drain, a low-walled creep corner warmed by a lamp where piglets lie, and the sow feeding at the opposite end",
    caption: "Piglets in the warm creep, dung away from the bed",
  },
]);

const feedArt = artPanel([
  {
    src: "ag07-balanced-ration.webp",
    alt: "A scoop of maize, a scoop of soybean meal, a heap of mineral powder and the mixed ration in a trough beside a dairy cow",
    caption: "Maize for energy, soybean for protein",
  },
  {
    src: "ag07-water-trough.webp",
    alt: "A clean concrete water trough with a float valve in a cattle yard, clear water running in as a cow drinks",
    caption: "Clean water on demand, all day",
  },
]);

const healthArt = artPanel([
  {
    src: "ag07-health-signs.webp",
    alt: "An alert cow with bright eyes, glossy coat and ears forward standing beside a dull cow with drooping ears, rough coat and sunken flanks",
    caption: "Alert and glossy against dull and drooping",
  },
  {
    src: "ag07-ticks-parasites.webp",
    alt: "Ticks clustered in the folds of a cow's ear and along the hide, with a magnified tick showing its mouthparts",
    caption: "Ticks in the ear: hidden, blood-feeding, disease-carrying",
  },
]);

const chapterSeven: Chapter = {
  number: 7,
  title: "Livestock Production and Health",
  intro: `A herd is only as productive as its housing, its feed and its health routine, and none of these works alone.\n\nThis chapter follows one **ruminant**, the dairy cow, and one **non-ruminant**, the pig, from the shed to the trough and from the first sign of illness to the isolation pen.\n\nYou will meet **balanced rations**, **maintenance and production requirements**, **water**, **stockmanship** and **record keeping**, then the parasites and **notifiable diseases** that can close a farm down.\n\nEvery section links a physical cause to a measurable effect, because examiners reward mechanisms rather than slogans.\n\nLearn the numbers as well as the names: a ration is a calculation, a shed capacity is a calculation, and a drug dose is a calculation.`,
  subheadings: [
    {
      title: "Housing and Living Conditions",
      body: `### What Housing Must Do

Housing is not a roof; it is a controlled environment.

It must give shelter from sun and rain, keep the floor dry, move stale air out and let the stockman work safely.

Every design choice either helps or harms **ventilation**, **dryness**, **space** or **hygiene**.

### Ventilation Without Draughts

Cattle and pigs produce heat, water vapour, carbon dioxide and ammonia from urine and dung.

If that air is not replaced, **ammonia** builds up, irritates the airways and causes coughing and pneumonia.

A sharp smell at nose height means ventilation is already failing.

An open-sided shed with a raised ridge works well in the tropics.

Air enters below the eaves and leaves at the ridge, so it moves above the animals rather than across them.

Solid walls up to 1.2 m protect against driving rain and ground draughts.

### Roof, Orientation and Temperature

A roof should reflect heat, so light-coloured or insulated sheets are better than bare iron.

In the tropics, orient the shed east-west so the long axis avoids the midday sun.

Wide eaves keep rain out while letting air in.

The roof must be high enough for hot air to rise above the animals.

A ridge opening of 5-10% of the floor area gives a continuous outlet.

If the roof is low, the shed becomes an oven and animals crowd the doorway.

Pigs need a wallow or a cool floor because they cannot sweat.

Shade and water matter even more to them than insulation.

### Space, Floor and Drainage

Each animal needs enough room to lie down, rise, feed and reach water.

Crowding raises humidity, dirty coats, foot trouble and fighting.

Concrete is the usual floor because it is easy to clean and does not hold parasites.

It must slope about 1:50 to a drain, so wash water and urine leave the pen instead of pooling.

A slatted channel across the rear of a cubicle row carries waste out of the lying area.

**Dry bedding** of straw or sawdust insulates the animal from the floor and absorbs urine.

Wet bedding is a direct route to **mastitis**, **foot rot** and chilled calves.

### Cattle Housing

A **zero-grazing unit** holds cattle that never graze, so the shed must supply everything the pasture would.

It needs a feed passage, a raised trough, a water trough, a lying area, a calving pen and a crush.

Allow about 0.75 m of trough space per cow, so a subordinate cow can feed without being pushed away.

A cubicle of 1.2 m by 2.4 m suits a mature dairy cow; loose housing needs 5-6 m² per cow.

Calves need 1.5-2 m² each in a dry, draught-free pen.

### Pig Housing

Pigs cannot sweat, so shade and ventilation matter even more than for cattle.

A concrete floor sloping to a drain, a dunging area at the wet end and a dry lying area at the other is the basic plan.

A **farrowing pen** needs a **creep area** where piglets can lie at 28-32 °C while the sow stays cooler.

A low wall or rail keeps the sow from lying on her piglets.

The creep has its own heat lamp and a small creep feed hopper.

### Worked Example: Shed Capacity

A shed is 20 m long and 10 m wide, so the floor area is 20 × 10 = 200 m².

Reserve a 3 m wide feed passage: 3 × 20 = 60 m².

The remaining 200 − 60 = 140 m² is lying and exercise space.

At 5 m² per cow, 140 ÷ 5 = 28 cows.

Check trough space: 28 × 0.75 = 21 m, which fits along one 20 m side with a return.

Check water: 28 cows need a 3 m trough with a flow of at least 10 L/min.

### Worked Example: Pig Pen Capacity

A weaner pen is 6 m by 4 m, so 24 m².

Allow 10% for the feeder and dunging corner: 24 × 0.9 = 21.6 m².

At 0.4 m² per weaner, 21.6 ÷ 0.4 = 54 pigs.

That is the maximum; 45 pigs leaves room for the smaller animals to reach feed.

Overstocking a pen raises fighting, tail biting and ammonia at the same time.

### Cleaning, Waste and Isolation

Remove dung and wet bedding daily, and wash and disinfect between batches.

Manure is not waste: it carries nitrogen, phosphorus and potassium back to the napier plot.

Keep an **isolation pen** away from the main air space, with its own bucket, fork and boots.

New or sick animals go there first, so a single cough does not become a herd outbreak.

### Safety and Security

Good housing also protects against theft, predators and injury.

Avoid exposed nails, sharp gate edges and slippery steps.

Provide lighting for night checks and a gate wide enough for a tractor or a crush.

A well-built shed is cheaper than the disease it prevents.`,
      figure: housingArt,
      groups: [
        {
          subTitle: "The Four Tests of Any House",
          bullets: [
            "**Shelter:** a roof and windbreak that stop rain and direct sun reaching the lying area.",
            "**Ventilation:** inlets low, outlet at the ridge, no draught at animal height.",
            "**Dryness:** slope, drain and clean bedding keep the coat and feet dry.",
            "**Space:** enough room to lie, rise, feed and reach water without competition.",
            "**Hygiene:** smooth surfaces, daily dung removal and disinfection between batches.",
          ],
        },
        {
          subTitle: "Space Allowances to Quote",
          bullets: [
            "**Dairy cow:** 5-6 m² in loose housing, or a 1.2 × 2.4 m cubicle.",
            "**Calf:** 1.5-2 m² in a dry individual or group pen.",
            "**Sow and litter:** a farrowing pen with a creep at 28-32 °C.",
            "**Weaner pig:** 0.4 m², rising to 0.7-1.0 m² for a finishing pig.",
            "**Trough space:** 0.75 m per cow, so all can feed at once.",
          ],
        },
        {
          subTitle: "Cattle Shed Against Pig Pen",
          bullets: [
            "**Cattle:** open sides, deep bedding, a feed passage and a crush for handling.",
            "**Pigs:** solid floor, low walls, a warm creep and a dunging corner away from the bed.",
            "**Both:** clean water, a dry lying area, easy drainage and an isolation pen.",
            "**Difference:** cattle tolerate cool moving air, while piglets need a heated microclimate.",
          ],
        },
      ],
      examinerTips: [
        "Link each housing feature to a disease or a behaviour, such as dry bedding to less mastitis.",
        "Quote a space allowance with its unit, for example 5 m² per cow, rather than saying enough room.",
        "Explain ventilation as air in low and out at the ridge, not simply as fresh air.",
        "Name the slope and the drain when asked how a floor stays dry.",
        "For pig pens, always mention the creep temperature and the dunging corner.",
      ],
      commonMistakes: [
        "Saying a shed must be closed to keep animals warm; closed sheds trap ammonia and moisture.",
        "Confusing cubicle size with total floor area per cow.",
        "Forgetting that piglets need a warmer zone than the sow.",
        "Designing a floor that slopes to the lying area instead of to a drain.",
        "Treating the isolation pen as storage space and then using it during an outbreak.",
      ],
      recap: [
        "State four requirements of good livestock housing and explain why each matters. [4]",
        "A shed is 24 m long and 12 m wide, with a 3 m feed passage along one side. Calculate the number of cows it can house at 5 m² each. [3]",
        "Explain why a pig creep area is kept at 28-32 °C while the sow needs a cooler pen. [3]",
        "Describe how ventilation and drainage reduce respiratory disease and foot rot in a cattle shed. [4]",
        "Explain the purpose of an isolation pen on a livestock farm. [2]",
      ],
    },
    {
      title: "Rearing Young Stock",
      body: `### The First Hour Matters Most

A newborn calf or piglet leaves a sterile womb and meets a world of bacteria.

It has no antibodies of its own for the first weeks, so it depends entirely on **colostrum**.

That first feed decides whether rearing is easy or a fight against scours and pneumonia.

### Colostrum and Passive Immunity

**Colostrum** is the thick first milk, rich in antibodies, fat, protein and vitamin A.

The calf gut can absorb these large antibody molecules only for about the first 6 hours, and poorly after 12.

Feed 3-4 L, or about 10% of body weight, within the first 2 hours, and again within 6-8 hours.

A calf that will not suckle should be fed by stomach tube, not left to try later.

Store spare colostrum frozen in 1 L bottles and thaw it slowly in warm water.

Never heat it above 50 °C, because heat destroys the antibodies.

Piglets are born with even less protection.

Each piglet needs about 200 ml of colostrum in the first 12 hours, and the weaker ones must be helped to a teat.

**Iron** is not carried across the placenta, so piglets receive an iron injection at about 3 days.

### Calf Feeding and Weaning

Whole milk is fed at about 10% of body weight per day, split into two feeds.

A 40 kg calf therefore receives 4 L a day.

Milk replacer works if it is mixed exactly to the label and fed at the same temperature each time.

Feeding from a bucket teaches the calf to drink and closes the **oesophageal groove**, sending milk to the abomasum.

Keep the bucket clean, because leftover milk is a perfect bacterial culture.

**Calf starter** at 18-20% CP and good hay begin rumen development.

Offer a handful from the first week, and clean water at all times.

Wean when the calf eats about 1 kg of starter a day and weighs roughly 2.5 times its birth weight.

That usually falls between 8 and 12 weeks.

### Calf Routine and Housing

A calf pen must be dry, draught-free and disinfected before each calf enters.

Dip the navel in iodine at birth to prevent **navel ill**.

Identify the calf with an ear tag on day one, and record its dam and birth date.

Dehorning or disbudding is done at 2-6 weeks with local anaesthetic and a hot iron.

Castration is done early, with hygiene and pain control.

Vaccinate and treat for worms on the farm plan, and weigh monthly to check growth.

### Water and Fresh Air for Young Stock

Calves need clean water from the first week; milk alone does not supply enough.

A calf drinking 4 L of milk still needs 5-10 L of water a day once it eats dry feed.

Piglets need a low drinker they can reach without climbing into it.

Fresh air without a draught is the best defence against calf pneumonia.

### Piglet Rearing

A piglet weighs only 1.2-1.5 kg at birth and cannot control its own temperature.

The creep area is kept at 28-32 °C in the first week, then lowered by about 2 °C a week.

The sow needs a cooler 18-22 °C, which is why the creep has its own lamp.

Handle piglets on day one: clip needle teeth, dock tails where practised, and castrate males.

Give iron at 3 days, and offer **creep feed** at 20-22% CP from 7-10 days.

Wean at 21-28 days, when the piglet weighs 6-8 kg, into a clean, warm, dry pen.

### Worked Example: Cost of Rearing a Calf

A 40 kg calf drinks 4 L of milk a day for 42 days: 4 × 42 = 168 L.

At KSh 60 per litre, milk costs 168 × 60 = KSh 10,080.

It also eats 0.5 kg of starter a day for 42 days: 21 kg at KSh 80 = KSh 1,680.

Total feed cost = 10,080 + 1,680 = KSh 11,760.

If the calf grows from 40 kg to 85 kg, that is 45 kg of gain.

Cost per kg gain = 11,760 ÷ 45 = KSh 261.

### Worked Example: Hitting the Weaning Weight

A calf is born at 38 kg and should reach 2.5 × 38 = 95 kg.

It must gain 95 − 38 = 57 kg.

At 1.0 kg a day, that takes 57 days.

If growth falls to 0.7 kg a day, it takes 57 ÷ 0.7 = 81 days, which is 24 days late.

The extra milk is 4 × 24 = 96 L, or KSh 5,760.

Slow growth is expensive even when the calf survives.

### Health, Mortality and Records

The main killers of young stock are **scours**, **pneumonia** and navel infection.

Colostrum, dry bedding, fresh air and clean feeders prevent most of them.

Keep a target of under 5% mortality to weaning, and record every death with its cause.

Weigh a sample of calves monthly and plot the weights.

A flat line warns you before the calf looks thin.

For piglets, record litter size, birth weight and weaning weight for each sow, so poor mothers can be culled.

### Rearing Is an Investment

Every extra kilogram of gain before weaning is cheaper than the same gain later.

A heifer that calves at 24 months instead of 30 saves six months of feed.

Fast, even growth comes from the same three things every time: colostrum, cleanliness and a full trough.`,
      groups: [
        {
          subTitle: "Calf Rearing Calendar",
          bullets: [
            "**At birth:** iodine the navel, ensure 3-4 L of colostrum, ear tag and record.",
            "**First week:** individual dry pen, milk at 10% of body weight, starter and water offered.",
            "**2-6 weeks:** disbud, castrate, vaccinate and weigh monthly.",
            "**8-12 weeks:** wean at about 1 kg starter a day and 2.5 times birth weight.",
            "**After weaning:** good hay, 16-18% CP grower ration and clean water.",
          ],
        },
        {
          subTitle: "Piglet Routine",
          bullets: [
            "**Warmth:** creep at 28-32 °C in week one, lowered about 2 °C each week.",
            "**Colostrum:** about 200 ml per piglet in the first 12 hours.",
            "**Iron:** injection at 3 days, because sow milk is low in iron.",
            "**Creep feed:** 20-22% CP from 7-10 days to prepare the gut for weaning.",
            "**Weaning:** 21-28 days at 6-8 kg into a clean, warm pen.",
          ],
        },
        {
          subTitle: "Weaning Targets",
          bullets: [
            "**Weight:** at least 2.5 times birth weight for a calf, 6-8 kg for a piglet.",
            "**Intake:** calf eating about 1 kg of starter a day before milk is removed.",
            "**Growth:** 0.7-1.0 kg a day for a dairy calf in the first two months.",
            "**Health:** no scours or coughing for a week before weaning.",
          ],
        },
      ],
      examinerTips: [
        "Define colostrum by its antibodies, not just as first milk.",
        "Give the timing of colostrum feeding, because the gut absorbs antibodies only for a few hours.",
        "Link rumen development to starter feed and hay, not to milk.",
        "For piglets, always pair warmth with the creep area and iron with the injection.",
        "Use the 2.5 times birth weight rule when asked for a weaning target.",
      ],
      commonMistakes: [
        "Feeding colostrum after 24 hours and expecting the same protection.",
        "Weaning a calf on age alone while it still refuses starter.",
        "Giving a newborn piglet a cold, draughty pen because the sow is comfortable.",
        "Forgetting the iron injection and then blaming scours for pale piglets.",
        "Heating colostrum to boiling point and destroying its antibodies.",
      ],
      recap: [
        "Define colostrum and explain why a calf must receive it within the first 6 hours. [3]",
        "A 40 kg calf is fed milk at 10% of body weight per day. Calculate the daily volume and the total for 42 days. [3]",
        "Describe the routine for a newborn calf from birth to one week old. [4]",
        "Explain why creep feed and a warm creep area improve piglet survival. [3]",
        "A calf is born at 36 kg and should reach 2.5 times birth weight. Calculate the required gain and the days to weaning at 0.8 kg/day. [3]",
      ],
    },
    {
      title: "Nutrition and Balanced Rations",
      body: `### The Six Nutrient Groups

A ration is not a heap of feed; it is a supply of nutrients in the right proportion.

The six groups are **water**, **carbohydrates**, **proteins**, **fats**, **minerals** and **vitamins**.

Energy comes mainly from carbohydrates and fats, while protein supplies amino acids for growth, milk and repair.

**Roughage** is bulky, fibrous feed such as grass, hay and silage.

**Concentrates** are low-fibre, high-energy or high-protein feeds such as maize and soybean meal.

A ruminant needs roughage to keep the rumen working; a pig can use a much more concentrated diet.

### Feed Materials and Their Content

Napier grass cut young supplies 8-10% CP and plenty of energy, but the CP falls as the stems age.

Rhodes grass is similar at 6-9% CP and tolerates grazing well.

Lucerne and desmodium are legumes at 16-20% CP, with more calcium than grass.

Maize grain is the standard energy feed at about 9% CP and 80% TDN.

Soybean meal is the standard protein feed at 44% CP.

Cottonseed cake at 32-36% CP and sunflower cake at 28-30% CP are cheaper alternatives.

Wheat bran at 14-16% CP adds bulk and phosphorus, and fish meal at 55-60% CP is used in pig diets.

Mineral premix, limestone and salt correct what the energy and protein feeds lack.

### Deficiency Signs

**Protein deficiency** shows as poor growth, a rough coat, a swollen belly and low milk yield.

**Energy deficiency** shows as weight loss, weakness and poor fertility.

**Calcium and phosphorus deficiency** causes rickets in young stock, bone chewing and milk fever around calving.

**Salt deficiency** leads to licking soil, urine and sweat, and to a dull coat.

**Vitamin A deficiency** causes night blindness and rough skin, common on dry-season hay diets.

**Copper and cobalt deficiency** causes anaemia and a faded coat.

**Iodine deficiency** causes goitre in newborn calves and piglets.

Water shortage shows first as reduced feed intake, then as hard dung and sunken eyes.

### What a Balanced Ration Means

A **balanced ration** supplies every nutrient in the proportion the animal needs for its age and stage.

A growing calf needs about 16-18% CP; a dry cow needs 9-10%; a high-yielding cow needs 17-18%.

A weaner pig needs 18-20% CP, a grower 16-18%, and a finisher 14-16%.

Balance roughage and concentrate as well as protein.

A dairy cow on good forage may need a 70:30 roughage-to-concentrate ratio, while a 30 L cow may need 50:50.

Change the ratio gradually, because the rumen microbes need time to adjust.

### Worked Example: Pearson Square for 16% CP

Blend maize at 9% CP with soybean meal at 44% CP to make 16% CP.

Write the two feeds and the target, then subtract diagonally.

44 − 16 = 28 parts maize.

16 − 9 = 7 parts soybean meal.

Total parts = 28 + 7 = 35.

Maize = 28 ÷ 35 × 100 = 80%.

Soybean meal = 7 ÷ 35 × 100 = 20%.

Check: 0.80 × 9 + 0.20 × 44 = 7.2 + 8.8 = 16.0% CP.

For 100 kg of mix, use 80 kg maize and 20 kg soybean meal.

If 2 kg of minerals and salt are added, take them from the maize and soybean in proportion.

Maize = 0.80 × 98 = 78.4 kg; soybean = 0.20 × 98 = 19.6 kg; minerals = 2 kg.

Check protein: 0.784 × 9 + 0.196 × 44 = 7.06 + 8.62 = 15.7% CP, close enough for a working ration.

### Maintenance and Production Rations

The **maintenance ration** keeps an animal alive, warm and healthy with no gain, milk or pregnancy.

The **production ration** is everything above maintenance: milk, growth, pregnancy or work.

Feed maintenance first, then add production on top.

A 450 kg cow needs about 8 kg DM of 10% CP forage for maintenance.

That supplies 8 × 0.10 = 0.8 kg CP.

For 15 L of milk, allow about 0.09 kg CP per litre: 15 × 0.09 = 1.35 kg CP.

Total CP = 0.8 + 1.35 = 2.15 kg.

Extra DM for milk is about 0.3 kg per litre: 15 × 0.3 = 4.5 kg.

Total DM = 8 + 4.5 = 12.5 kg.

Ration CP = 2.15 ÷ 12.5 × 100 = 17.2%.

That is why a milking cow needs a richer ration than a dry cow on the same farm.

### Feeding Practices

Feed at fixed times, because routine keeps intake and rumen function steady.

Give roughage first, then concentrates in two portions, so the cow does not bolt a large acid load.

Weigh the concentrate; a scoop is not a ration.

Change feed over 7-10 days, mixing increasing amounts of the new feed.

Never feed mouldy maize or spoiled silage, because mycotoxins reduce intake and fertility.

Provide trough space for all animals and clean leftover feed daily.

### Worked Example: Feed Conversion Ratio

Thirty pigs eat 2.2 kg of feed a day each for 90 days.

Total feed = 30 × 2.2 × 90 = 5,940 kg.

If each pig gains 70 kg, total gain = 30 × 70 = 2,100 kg.

FCR = feed ÷ gain = 5,940 ÷ 2,100 = 2.83.

An FCR of 2.8 means 2.8 kg of feed for 1 kg of gain.

Improving it to 2.5 would save 0.3 × 2,100 = 630 kg of feed.

### Worked Example: Cost per Litre of Milk

A cow gives 15 L and eats 6 kg of concentrate at KSh 45 per kg: KSh 270.

She also eats 40 kg of fresh forage at KSh 3 per kg: KSh 120.

Total feed cost = 270 + 120 = KSh 390.

Cost per litre = 390 ÷ 15 = KSh 26.

If milk sells at KSh 50 per litre, the margin is KSh 24 per litre before other costs.

A ration that raises yield by 2 L for KSh 60 extra concentrate is worth it: KSh 100 income against KSh 60 cost.`,
      figure: feedArt,
      groups: [
        {
          subTitle: "Feed Table Worth Remembering",
          bullets: [
            "**Maize grain:** about 9% CP, high energy, the base of most concentrates.",
            "**Soybean meal:** about 44% CP, the standard protein supplement.",
            "**Napier grass:** 8-10% CP when young, falling sharply as it matures.",
            "**Lucerne and desmodium:** 16-20% CP legumes, also rich in calcium.",
            "**Minerals and salt:** 1-2% of the ration, correcting calcium, phosphorus and sodium.",
          ],
        },
        {
          subTitle: "Deficiency Signs",
          bullets: [
            "**Protein:** poor growth, rough coat, pot belly and low milk.",
            "**Energy:** weight loss, weakness and poor fertility.",
            "**Calcium and phosphorus:** rickets, bone chewing and milk fever.",
            "**Salt:** soil and urine licking, and a dull coat.",
            "**Vitamin A:** night blindness and rough skin on dry forage.",
          ],
        },
        {
          subTitle: "Ration Rules",
          bullets: [
            "**Balance by stage:** calf, grower, dry cow and milker each need a different ration.",
            "**Roughage first:** fibre keeps the rumen healthy and the butterfat up.",
            "**Weigh feed:** scoops vary, so use a scale for concentrates.",
            "**Change slowly:** spread a new feed over 7-10 days.",
            "**Check the result:** milk yield, growth and condition score show whether the ration works.",
          ],
        },
      ],
      examinerTips: [
        "Show the Pearson square working, because the diagonal subtraction carries method marks.",
        "Quote CP as a percentage of dry matter, not as a percentage of the fresh weight.",
        "Separate maintenance from production and add the two demands.",
        "Name a local feed for each nutrient, such as maize for energy and soybean for protein.",
        "When asked for deficiency signs, give the sign and the nutrient, not just the feed.",
      ],
      commonMistakes: [
        "Adding the two Pearson-square differences the wrong way round; maize takes 44 − 16 and soybean takes 16 − 9.",
        "Treating 16% CP as 16 kg of protein in 100 kg of feed without checking the dry matter.",
        "Feeding the same ration to dry and lactating cows.",
        "Changing concentrates suddenly and causing acidosis or refusal.",
        "Ignoring minerals because the energy and protein figures look correct.",
      ],
      recap: [
        "State the six nutrient groups and one function of each. [6]",
        "Use a Pearson square to formulate 100 kg of 16% CP ration from maize (9% CP) and soybean meal (44% CP). [4]",
        "Explain the difference between a maintenance ration and a production ration. [3]",
        "A 450 kg cow eats 8 kg DM of 10% CP forage and gives 15 L of milk. Calculate the CP required and the ration CP percentage. [4]",
        "Thirty pigs eat 2.2 kg/day each for 90 days and gain 70 kg each. Calculate the feed conversion ratio. [3]",
      ],
    },
    {
      title: "Water and Stockmanship",
      body: `### Water Is the First Nutrient

Water carries nutrients, digests feed, controls temperature and removes waste.

An animal can lose most of its fat and half its protein and survive, but a loss of 10-15% of its water kills it.

A cow's body is 60-70% water, and milk is about 87% water.

### How Much Water

A dry cow drinks 40-50 L a day; a lactating cow 60-80 L, and more in heat.

The working rule is 3-5 L per kg of DM eaten, plus about 0.9 L per litre of milk.

A calf needs 5-10 L, a weaner pig 2-4 L, and a lactating sow 20-30 L a day.

Heat, exercise, high salt and high protein all raise demand.

At 30 °C a cow may drink 30% more than at 20 °C.

### Worked Example: Sizing a Water Supply

A zero-grazing unit holds 30 cows averaging 70 L a day.

Daily demand = 30 × 70 = 2,100 L.

Allow 20% for washing and spillage: 2,100 × 1.2 = 2,520 L.

Cows drink most water after milking and after feeding.

If 40% is drunk in 4 hours, peak demand = 0.4 × 2,100 = 840 L in 4 hours, or 210 L per hour.

Two troughs flowing at 10 L/min each give 1,200 L per hour, which covers the peak.

A 3,000 L storage tank gives one day of buffer.

### Clean Water and Trough Design

Water must be cool, clear and free from manure, algae and stale feed.

A trough in full sun grows algae and warms the water, so cows drink less.

Put the trough in shade, with a float valve to keep the level constant.

Clean troughs weekly and scrub off the biofilm.

Test the supply for salinity, nitrates and bacteria if the source is a shallow well or river.

Allow 60-75 cm of trough length per cow, and one nipple per 10 pigs.

### Stockmanship: Handling with Care

**Stockmanship** is the skill of reading animals and moving them without fear.

Cattle have a **flight zone**; step inside it and they move away, step back and they stop.

Work at the edge of the flight zone, never chase.

Use the **point of balance** at the shoulder to move an animal forward or back.

Speak calmly, move slowly and avoid sudden noise.

A crush, race and halter make injections and examinations safer for both handler and animal.

### Stockmanship: Daily Routine

Walk the herd every morning and count them.

Look at appetite, cudding, dung, gait and milk yield before anything else.

Handle a sick animal gently, and never drag a downer cow by the head.

Keep floors non-slip and gates latched.

Train staff once and insist on the same method, because inconsistent handling makes animals nervous.

### The Farm Diary

The **farm diary** is a dated log of everything that happens.

Record weather, feed changes, calving, service, treatments, visitors and deaths.

Write in pen, on the day, not from memory at the end of the month.

An entry such as "12 March: cow 14, mastitis in left hind quarter, treated, milk withheld 3 days" is useful.

"March: cow sick" is not.

The diary is also evidence for withdrawals and for the vet.

### Production Records

**Production records** measure output per animal and per input.

For dairy, record milk yield per cow per day, feed used, calving dates and services.

For pigs, record litter size, birth weight, weaning weight and days to market.

For any herd, record weights, deaths and treatments.

### Worked Example: Using Milk Records

A 20-cow herd gives 300 L a day.

Average yield = 300 ÷ 20 = 15 L per cow.

The two lowest cows give 8 L and 9 L, so culling them leaves 283 L from 18 cows.

New average = 283 ÷ 18 = 15.7 L per cow.

The same feed now produces more milk per cow, and two stalls are free for better stock.

### Records as Decisions

Records turn opinion into management.

They show which cow is infertile, which feed gives the cheapest litre, and which batch of piglets grows slowly.

They support loans, insurance claims and traceability.

Without records, a farmer cannot tell whether a change worked.

### Handling Facilities Pay for Themselves

A simple race, crush and loading ramp make every routine job faster.

Cattle move more freely through a curved race than a sharp right angle, because they see the way ahead.

Good lighting and non-slip concrete reduce falls and broken legs.

The cost of a crush is small against one broken arm or one dead heifer.`,
      groups: [
        {
          subTitle: "Water Rules",
          bullets: [
            "**Quantity:** 3-5 L per kg DM plus 0.9 L per litre of milk.",
            "**Flow:** at least 10 L/min per trough, with 60-75 cm of length per cow.",
            "**Quality:** cool, clear, no algae, manure or stale feed.",
            "**Cleaning:** scrub troughs weekly and keep the float valve working.",
            "**Heat:** demand rises by up to 30% in hot weather.",
          ],
        },
        {
          subTitle: "Stockmanship in Practice",
          bullets: [
            "**Flight zone:** work at its edge and let the animal move away calmly.",
            "**Point of balance:** at the shoulder, it controls forward and backward movement.",
            "**Facilities:** a crush, race and non-slip floor protect people and animals.",
            "**Routine:** inspect the herd at the same times every day.",
            "**Patience:** quiet handling is faster than chasing and shouting.",
          ],
        },
        {
          subTitle: "Records to Keep",
          bullets: [
            "**Farm diary:** dated events, weather, visitors, treatments and deaths.",
            "**Production:** milk per cow, eggs or weight gain, feed used and feed cost.",
            "**Breeding:** service dates, calving dates, litter size and conception rate.",
            "**Health:** disease, drug, dose, date and withdrawal period.",
            "**Money:** sales, purchases, labour and credit, so profit can be calculated.",
          ],
        },
      ],
      examinerTips: [
        "Calculate water demand as daily total, then add a margin and check peak flow.",
        "Describe the flight zone and point of balance as positions, not as vague gentleness.",
        "Give record types with a use, such as calving dates to plan dry periods.",
        "Write diary entries with date, animal identity, sign, action and withdrawal.",
        "Explain stockmanship through lower stress, fewer injuries and better growth.",
      ],
      commonMistakes: [
        "Assuming a cow drinks 20 L a day, which is below even a dry cow's requirement.",
        "Sizing a tank on average demand but ignoring the peak after milking.",
        "Putting a water trough in full sun and then wondering why intake falls.",
        "Keeping records only for the bank and not using them for culling or feeding.",
        "Shouting and hitting animals, which raises stress and slows handling.",
      ],
      recap: [
        "State the water requirements of a lactating cow and explain two factors that increase them. [3]",
        "A unit has 30 cows drinking 70 L/day. Calculate the daily demand allowing 20% for washing. [2]",
        "Describe three features of a well-designed water trough. [3]",
        "Explain how a stockman uses the flight zone and point of balance to move cattle. [4]",
        "List four production records a dairy farmer should keep and state one use of each. [4]",
      ],
    },
    {
      title: "Signs of Health and Disease Spread",
      body: `### The Healthy Animal

A healthy cow is **alert**, with bright eyes, ears pricked and a glossy coat.

She eats steadily, chews the cud after feeding and drinks normally.

Her dung is well formed, her gait is even and her milk yield is steady.

Normal values for cattle: temperature 38-39 °C, pulse 60-80 beats per minute, respiration 10-30 breaths per minute.

For pigs: temperature 38.5-39.5 °C, pulse 60-90, respiration 15-30.

Rumen movements are 1-2 per minute, heard or felt at the left flank.

### The Sick Animal

A sick animal is dull, stands apart and loses interest in feed.

The coat is rough, the eyes may be sunken or discharging, and the ears droop.

Milk yield often falls before any other sign appears.

Other warnings are coughing, rapid breathing, diarrhoea, lameness, bloating, teeth grinding and weight loss.

A temperature above 39.5 °C in cattle suggests infection; a low temperature suggests shock or exhaustion.

Take the temperature before guessing.

### Worked Example: Reading the Vitals

Count respiration for 30 seconds and double it.

A cow with 12 breaths in 30 seconds is breathing 24 times a minute, inside the normal range.

Count the pulse for 15 seconds and multiply by 4; 18 beats gives 72 per minute.

A reading of 40.0 °C is 1.0 °C above normal for a cow.

That is a fever, not a reason to wait.

Record the values with the time, because a trend is more useful than one number.

### Infectious and Contagious Disease

An **infectious** disease is caused by a pathogen: a virus, bacterium, fungus or parasite.

A **contagious** disease spreads readily from animal to animal.

All contagious diseases are infectious, but not all infectious diseases spread easily.

The **incubation period** is the time between infection and the first signs.

An animal can shed the pathogen before it looks sick, which is why quarantine matters.

### How Disease Spreads

**Direct contact** passes infection through licking, grooming, suckling or fighting.

**Aerosol** spread carries droplets in coughs and sneezes, especially in a crowded, humid shed.

**Faecal-oral** spread contaminates feed, water and bedding with dung.

**Vectors** are animals that carry a pathogen from one host to another.

Ticks transmit East Coast fever, anaplasmosis and heartwater; flies carry mastitis bacteria and pinkeye.

**Fomites** are objects such as boots, buckets, vehicles and needles.

**Carrier animals** look healthy but shed the pathogen, and new stock can bring it in.

Wildlife, shared water points, semen and even a vet's unwashed boots can carry infection between farms.

### The First Response

Isolate the sick animal at once, in a pen with its own feed and water.

Record the signs and temperature, then call the vet.

Do not sell, slaughter or move the animal while it is ill.

Wash your hands and change boots after handling it.

Disinfect the pen, the bucket and the crush.

Keep the milk separate, and observe the withdrawal period if treatment is given.

### Why Early Signs Matter

Most diseases are cheap to treat early and expensive to treat late.

Mastitis caught in one quarter costs a course of tubes; caught late it costs the quarter.

Lameness caught at the first limp costs a foot trim; caught late it costs the cow.

A stockman who walks the herd twice a day sees the first signs.

A stockman who only counts heads sees the problem when it is already an outbreak.

### The Healthy-Sick Comparison in Practice

Compare animals within the same group, because normal behaviour is easier to spot against a baseline.

The cow that lags behind at milking, or the piglet that stays under the lamp, is telling you something.

Act on the difference before you have a diagnosis.

### Stress Opens the Door

Stress lowers resistance, so poor housing, crowding and hunger make every disease worse.

A chilled calf, a transported heifer and a bullied pig are all more likely to break down with disease.

Good stockmanship is therefore part of disease control, not a separate subject.

### New Stock and Quarantine

New stock is the commonest way disease enters a farm.

Buy from a known source with a health record, not from a market with unknown animals.

Keep new animals separate for 3-4 weeks and watch for signs before mixing them.

Test for brucellosis and tuberculosis where the law or the buyer requires it.

Quarantine is cheaper than treating a whole herd.

A single bought heifer can bring ticks, worms and a pathogen at the same time.`,
      figure: healthArt,
      groups: [
        {
          subTitle: "Healthy or Sick",
          bullets: [
            "**Healthy:** alert, bright eyes, glossy coat, steady appetite and regular cudding.",
            "**Sick:** dull, isolated, drooping ears, rough coat and off feed.",
            "**Temperature:** cattle 38-39 °C, pigs 38.5-39.5 °C; a fever is a warning.",
            "**Output:** a sudden fall in milk or growth often comes before visible signs.",
            "**Dung and gait:** diarrhoea, constipation or lameness all need investigation.",
          ],
        },
        {
          subTitle: "Routes of Spread",
          bullets: [
            "**Direct contact:** licking, fighting, suckling and mating.",
            "**Aerosol:** coughing and sneezing in crowded, humid sheds.",
            "**Faecal-oral:** dung contaminating feed, water and bedding.",
            "**Vectors:** ticks, flies and mosquitoes carrying pathogens.",
            "**Fomites and carriers:** boots, vehicles, needles and healthy-looking shedders.",
          ],
        },
        {
          subTitle: "First Response",
          bullets: [
            "**Isolate:** move the animal to a separate pen with its own equipment.",
            "**Record:** date, identity, signs, temperature and feed intake.",
            "**Call:** contact the vet before treating blindly.",
            "**Protect:** wash hands, change boots and disinfect the pen.",
            "**Withhold:** keep milk and meat out of the food chain during treatment.",
          ],
        },
      ],
      examinerTips: [
        "Give a named normal value with its unit when asked for a sign of health.",
        "Define contagious as spreading from animal to animal, and infectious as caused by a pathogen.",
        "Name the route and the example together, such as faecal-oral spread through dirty water.",
        "Explain that carriers and incubating animals shed before they look ill.",
        "For a first-response question, sequence isolate, record, call, disinfect and withhold.",
      ],
      commonMistakes: [
        "Thinking a sick animal always has a high temperature; some diseases cause a low one.",
        "Using infectious and contagious as exact synonyms.",
        "Forgetting indirect routes such as boots, vehicles and shared water.",
        "Treating an animal without recording the drug or the withdrawal period.",
        "Waiting for a diagnosis before isolating, when isolation should come first.",
      ],
      recap: [
        "State four signs of good health in a dairy cow. [4]",
        "Explain how ticks and boots can both spread disease between animals. [3]",
        "Distinguish between an infectious and a contagious disease. [2]",
        "A cow has a temperature of 40.0 °C and 12 breaths in 30 seconds. Interpret both readings. [3]",
        "Describe the first four actions when an animal shows signs of disease. [4]",
      ],
    },
    {
      title: "Parasites, Notifiable Diseases and Hygiene",
      body: `### Internal Parasites

**Roundworms** such as Haemonchus suck blood from the abomasum and cause anaemia, bottle jaw and poor growth.

**Liver fluke** lives in the bile ducts and damages the liver, especially on wet, snail-infested pasture.

**Coccidia** damage the gut lining of calves and piglets, causing bloody diarrhoea.

Signs include diarrhoea, a pot belly, a rough coat, weight loss and anaemia.

Lungworm causes coughing, especially in young stock.

A **faecal egg count** shows the worm burden and whether treatment is working.

Control combines drenching, pasture rotation and clean water.

Dose by body weight, because underdosing breeds resistance.

Rotate drench families, and rest paddocks so larvae die before stock return.

### External Parasites

**Ticks** attach in the ear, under the tail and on the hide, then suck blood and transmit disease.

**Mites** cause mange, with crusty, itchy skin and hair loss.

**Lice** and **fleas** irritate the coat and reduce growth.

**Tsetse** flies transmit trypanosomiasis, and other flies cause myiasis in wounds.

Ticks are the most important external parasite for cattle in East Africa.

They transmit East Coast fever, anaplasmosis, babesiosis and heartwater.

A heavy tick load also causes anaemia and hides that sell at a lower price.

Control by spraying or dipping every 7-14 days in the wet season.

Rotate acaricides so resistance does not build up.

Spell pastures, keep grass short around the kraal and check ears and udders after every dip.

### Worked Example: Mixing Acaricide

A label says mix 1 L of concentrate with 400 L of water.

For a 200 L spray race, concentrate = 200 ÷ 400 = 0.5 L.

If each cow needs 4 L of wash, 200 L treats 200 ÷ 4 = 50 cows.

Never guess the dilution, because too weak fails and too strong poisons the cow.

Wear gloves, and dispose of wash water away from the trough.

### Worked Example: Antibiotic Dose

A 250 kg cow needs oxytetracycline at 20 mg per kg.

Total dose = 250 × 20 = 5,000 mg = 5 g.

The bottle contains 200 mg per ml, so volume = 5,000 ÷ 200 = 25 ml.

Record the date, dose, route and withdrawal period.

Milk may be withheld for 3 days and meat for 28 days, so the cow's milk must be discarded.

### Notifiable Diseases

A **notifiable** or **scheduled** disease must be reported to the veterinary authority by law.

Examples are **foot-and-mouth disease**, **anthrax**, **contagious bovine pleuropneumonia**, **brucellosis**, **tuberculosis**, **rabies**, **African swine fever**, **classical swine fever**, **Newcastle disease**, **avian influenza** and **lumpy skin disease**.

Some are scheduled because they spread fast, threaten public health or block trade.

Anthrax also infects people, and its carcass must not be opened.

Brucellosis causes abortions and undulant fever in humans.

### Action on Suspicion

Report immediately, then isolate and stop all movement.

Do not open a carcass suspected of anthrax, because spores form when the blood meets air.

Disinfect, control visitors and follow the veterinary instructions for disposal.

Carcasses are burned or buried deep with lime, away from water.

Compensation and official control depend on early reporting, not on hiding the problem.

### Hygiene and Isolation

**Biosecurity** is the set of routines that keep pathogens out.

Quarantine new stock for 3-4 weeks, and isolate sick animals at the first sign.

Use footbaths, clean boots and dedicated equipment for each pen.

Clean first, then disinfect, because organic matter stops disinfectants working.

Practise **all-in/all-out** in pig pens, with a full clean between batches.

Control rats, birds and stray dogs, and store feed off the floor.

### Vaccination and Herd Health

Vaccinate against the diseases present in the area, following the local calendar.

Vaccines work only if the cold chain is kept and the dose is given correctly.

Keep a medicine record with dates, products, doses and withdrawals.

### The Cost of Ignoring Hygiene

A single case of foot-and-mouth disease can stop all sales and force culling.

A tick-borne outbreak can kill a valuable heifer in a week.

Hygiene is cheaper than the disease, every time.

### Parasite Life Cycle and Pasture

Most worms lay eggs that pass out in the dung.

The eggs hatch into larvae that climb grass blades and wait for a host.

Warm, wet conditions speed this up, so the wet season is the dangerous time.

Resting a paddock lets sunlight and dryness kill the larvae.

Harrowing in dry weather breaks the dung pats and exposes the larvae.

Grazing tall grass increases the dose of larvae; grazing a rested, short sward reduces it.`,
      groups: [
        {
          subTitle: "Parasites and Control",
          bullets: [
            "**Internal worms:** anaemia, pot belly, diarrhoea and poor growth; drench by weight.",
            "**Liver fluke:** wet, snail-infested pasture; treat and drain where possible.",
            "**Ticks:** transmit East Coast fever, anaplasmosis and heartwater; dip every 7-14 days.",
            "**Mange and lice:** crusty skin, rubbing and hair loss; treat the whole group.",
            "**Control:** rotate chemicals, rest pastures and quarantine new stock.",
          ],
        },
        {
          subTitle: "Notifiable Diseases",
          bullets: [
            "**Foot-and-mouth disease:** blisters, lameness, drooling and rapid spread.",
            "**Anthrax:** sudden death, dark blood from body openings; never open the carcass.",
            "**Brucellosis and tuberculosis:** abortions and human health risk.",
            "**African swine fever:** high fever, reddened skin and heavy pig mortality.",
            "**Newcastle disease and avian influenza:** rapid spread and high mortality in birds.",
          ],
        },
        {
          subTitle: "Biosecurity Routine",
          bullets: [
            "**Quarantine:** 3-4 weeks for new or returning animals.",
            "**Isolate:** separate pen, tools and boots for any sick animal.",
            "**Clean and disinfect:** remove organic matter first, then apply the disinfectant.",
            "**All-in/all-out:** empty, clean and rest each pig pen between batches.",
            "**Records:** drugs, doses, dates and withdrawal periods for every treatment.",
          ],
        },
      ],
      examinerTips: [
        "Link each parasite to its effect and its control, not just to its name.",
        "For ticks, name the diseases as well as the blood loss and hide damage.",
        "Quote a dilution or dose calculation in full, with units at every step.",
        "State that a notifiable disease must be reported by law and the animals held in place.",
        "Describe biosecurity as a sequence: quarantine, isolate, clean, disinfect, control visitors.",
      ],
      commonMistakes: [
        "Underdosing a drench to save money, which selects resistant worms.",
        "Opening an anthrax carcass, which releases spores and infects people.",
        "Treating only the sick animal while the rest of the group stays untreated.",
        "Mixing acaricide stronger than the label and poisoning the cattle.",
        "Selling milk during a withdrawal period and leaving drug residues.",
      ],
      recap: [
        "Explain how ticks damage cattle and name two diseases they transmit. [3]",
        "Describe a control programme for internal parasites in a calf-rearing unit. [4]",
        "A 250 kg cow needs oxytetracycline at 20 mg/kg. The bottle is 200 mg/ml. Calculate the dose in ml. [3]",
        "State four notifiable diseases and explain why they must be reported. [4]",
        "Describe biosecurity measures for a pig unit. [4]",
      ],
    },
  ],
};

export const AGRICULTURE_CHAPTER_7: Chapter = chapterSeven;
