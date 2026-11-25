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

const ruminantArt = artPanel([
  {
    src: "ag06-ruminant-gut.webp",
    alt: "Cutaway side view of a cow showing the rumen, reticulum, omasum and abomasum, with the small intestine coiled behind and the large intestine leading to the rectum",
    caption: "Four chambers before the true stomach",
  },
  {
    src: "ag06-rumen-microbes.webp",
    alt: "Magnified view inside the rumen showing bacteria, protozoa and fibre particles being broken down in a warm, oxygen-free liquid",
    caption: "Microbes ferment cellulose to fatty acids",
  },
]);

const birthArt = artPanel([
  {
    src: "ag06-cow-reproductive-tract.webp",
    alt: "Diagram of the cow reproductive tract showing the ovary, oviduct, uterine horn, cervix and vagina in their positions in the pelvis",
    caption: "Ovary, oviduct, horn, cervix and vagina",
  },
  {
    src: "ag06-fertilisation-birth.webp",
    alt: "One panel showing a sperm reaching an egg inside the oviduct and another showing a cow giving birth to a calf on clean bedding",
    caption: "Fertilisation in the oviduct, birth months later",
  },
]);

const lactationArt = artPanel([
  {
    src: "ag06-colostrum.webp",
    alt: "A newborn calf suckling from the udder, with the thick first milk shown inside the teat and antibodies carried in the milk",
    caption: "The first milk carries antibodies",
  },
  {
    src: "ag06-pig-gut.webp",
    alt: "Cutaway of a pig showing its single stomach, long coiled small intestine, small caecum and large intestine",
    caption: "A single stomach, a short caecum",
  },
]);

const chapterSix: Chapter = {
  number: 6,
  title: "Livestock Anatomy and Physiology",
  intro: `A cow and a pig eat very different things, yet both turn feed into meat, milk and work.\n\nThe difference lies in the gut. A ruminant ferments forage with microbes before its own enzymes ever see it, while a pig relies on a single stomach and a long small intestine.\n\nThis chapter follows the feed from mouth to faeces in both animals, then moves to reproduction, fertilisation, birth, lactation and weaning.\n\nUse the cow and the pig throughout, because examiners reward named structures and named processes rather than general statements.\n\nThe arithmetic of rations, gestation dates and colostrum volumes is part of the syllabus too, so practise it as you read.`,
  subheadings: [
    {
      title: "The Ruminant Digestive System",
      body: `### The Ruminant Plan

A **ruminant** has a four-chambered stomach: the rumen, reticulum, omasum and abomasum.

The first three are **forestomachs**, which are non-glandular and concerned with fermentation and storage.

The abomasum is the **true gastric stomach**, glandular and acidic like a pig's stomach.

Cattle also have a dental pad instead of upper incisors, and molars for grinding forage.

The whole system allows a cow to live on grass and crop residues that a pig cannot digest.

Cattle, sheep and goats are ruminants; the cow is the example used here.

### Mouth, Saliva and Oesophagus

Cattle graze by wrapping the tongue around grass and tearing it off.

Chewing at this stage is brief, and the bolus is swallowed with little saliva.

**Saliva** contains bicarbonate to buffer rumen acid, plus mucin and minerals; it has little amylase.

A cow produces 100-150 L of saliva a day, and more when eating dry forage.

The **oesophagus** carries food both ways, down to the rumen and back up for rumination.

The oesophageal groove in a young calf can direct milk straight to the abomasum.

### The Rumen

The rumen is a large fermentation vat holding 100-150 L in an adult cow.

It is **anaerobic**, kept at about 38-39 °C and pH 6.2-6.8.

**Bacteria, protozoa and fungi** digest cellulose and hemicellulose that the cow's own enzymes cannot touch.

Cellulose is fermented to **volatile fatty acids** (VFAs): acetic, propionic and butyric.

These VFAs are absorbed through the rumen wall and supply 60-70% of the cow's energy.

The microbes also build **microbial protein** and synthesise B vitamins.

Gas, mainly carbon dioxide and methane, is produced and removed by **eructation**.

### The Reticulum

The reticulum has a honeycomb lining and sits just below the rumen.

It works with the rumen as the **reticulo-rumen**, mixing and circulating the contents.

It helps form the **cud** that is regurgitated for rechewing.

Heavy objects such as nails fall into the reticulum and can cause **hardware disease**.

Farmers sometimes give a magnet to catch metal and prevent puncture of the gut wall.

The reticulum also helps coordinate eructation.

### The Omasum

The omasum has many folds, like the pages of a book, hence the name manyplies.

It **absorbs water and VFAs** and grinds particles smaller.

It acts as a filter, letting only fine digesta pass into the abomasum.

This concentrates the digesta and reduces the load on the true stomach.

A large omasum is typical of cattle eating dry, fibrous feed.

### The Abomasum

The abomasum is the **true stomach**, glandular and acidic at pH 2-3.

It secretes hydrochloric acid and pepsin, which digest **microbial protein** and undegraded feed protein.

In a young calf on milk, the abomasum is the largest chamber and secretes rennin to clot milk.

The **oesophageal groove** lets milk bypass the rumen and reach the abomasum directly.

Once the calf begins to eat solid feed, the rumen grows rapidly and becomes the largest chamber.

### The Small Intestine

The small intestine has three parts: duodenum, jejunum and ileum.

Bile from the liver and enzymes from the pancreas are added in the duodenum.

Proteins become amino acids, fats become fatty acids and glycerol, and starch becomes glucose.

**Villi** and microvilli give a huge absorptive surface.

Most absorption happens in the jejunum.

Undigested fibre and water pass on to the large intestine.

### The Large Intestine and Caecum

The caecum is small in cattle, but some fermentation still occurs there.

The large intestine absorbs **water and minerals** and forms faeces.

Cattle produce 20-30 kg of dung a day, which is valuable manure.

Water is reabsorbed efficiently, so cattle survive on drier forage than pigs.

The rectum stores faeces before defecation.

### Rumination and Eructation

**Rumination** is the regurgitation, rechewing and reswallowing of the cud.

A cow spends six to eight hours a day ruminating, with 40,000-60,000 jaw movements.

Rumination grinds particles finer, increases the surface area for microbes and mixes in saliva.

It happens mainly when the cow is resting, often lying down.

**Eructation** releases 500-1000 L of gas a day, and if gas is trapped the cow **bloats**, which can be fatal.

Chewing the cud and regular eructation are the two signs of a healthy rumen.

### Worked Example: Ration for a 400 kg Cow

Dry matter (DM) intake is about 2.5% of body weight.

DM = 0.025 × 400 = 10 kg per day.

Target crude protein (CP) is 12% of DM, so 1.2 kg CP.

Maize stover has 5% CP and dairy meal has 18% CP.

Let x be kg of stover and y be kg of dairy meal: x + y = 10 and 0.05x + 0.18y = 1.2.

Substitute x = 10 − y: 0.05(10 − y) + 0.18y = 1.2.

0.5 + 0.13y = 1.2, so y = 0.7 ÷ 0.13 = 5.4 kg.

Then x = 10 − 5.4 = 4.6 kg of stover.

Check: 4.6 × 0.05 + 5.4 × 0.18 = 0.23 + 0.97 = 1.20 kg CP.

### Worked Example: Water Needs

A 400 kg cow eats 10 kg DM and gives 15 L of milk.

Water need is roughly 3-4 L per kg DM plus 0.9 L per litre of milk.

Water = 10 × 4 + 15 × 0.9 = 40 + 13.5 = 53.5 L per day.

In hot weather the need rises by 20-30%, to about 65-70 L per day.

A lactating cow therefore needs constant access to clean water.`,
      figure: ruminantArt,
      groups: [
        {
          subTitle: "The Four Chambers",
          bullets: [
            "**Rumen:** 100-150 L fermentation vat; microbes digest cellulose to VFAs and build microbial protein.",
            "**Reticulum:** honeycomb lining, mixes contents, forms the cud and traps heavy objects.",
            "**Omasum:** many folds, absorbs water and VFAs and filters fine particles.",
            "**Abomasum:** the true gastric stomach, acid and pepsin, digesting microbial protein.",
            "**Order:** rumen, reticulum, omasum, abomasum, then small intestine.",
          ],
        },
        {
          subTitle: "Two Key Processes",
          bullets: [
            "**Rumination:** cud returns to the mouth, is rechewed and reswallowed, grinding feed and adding saliva.",
            "**Eructation:** carbon dioxide and methane are released, preventing bloat.",
            "**Fermentation:** anaerobic microbes break cellulose into acetic, propionic and butyric acid.",
            "**Microbial protein:** microbes multiply and are later digested in the abomasum and small intestine.",
            "**Saliva:** bicarbonate buffers rumen acid and keeps pH near 6.5.",
          ],
        },
        {
          subTitle: "Ration Arithmetic",
          bullets: [
            "**Dry matter:** intake about 2.5% of body weight per day.",
            "**Crude protein:** target a percentage of DM, then convert to kg.",
            "**Mixing:** use simultaneous equations or a Pearson square to blend two feeds.",
            "**Water:** 3-4 L per kg DM plus about 0.9 L per litre of milk.",
            "**Check:** total CP from each ingredient must equal the target.",
          ],
        },
      ],
      examinerTips: [
        "Name the chambers in order and state which one is the true stomach.",
        "Say cellulose is fermented by microbes to volatile fatty acids, not digested by cow enzymes.",
        "Describe rumination as regurgitation, rechewing and reswallowing, in that sequence.",
        "Link eructation to bloat, because the gas must leave or the rumen distends.",
        "In ration calculations, convert everything to dry matter and kg of crude protein before blending.",
      ],
      commonMistakes: [
        "Calling the rumen the true stomach; the abomasum is the glandular stomach.",
        "Saying the cow digests cellulose itself; the rumen microbes do it.",
        "Forgetting that protein is largely rebuilt as microbial protein before absorption.",
        "Omitting eructation and then wondering why bloat occurs.",
        "Adding feed percentages as if they were kilograms without checking the total.",
      ],
      recap: [
        "Describe the structure and function of the four chambers of the ruminant stomach. [6]",
        "Explain the role of microbes in the rumen. [3]",
        "Define rumination and explain its importance to a cow. [3]",
        "Explain why eructation is essential and what happens if it fails. [3]",
        "A 400 kg cow needs 10 kg DM at 12% CP. Calculate the CP requirement in kg. [2]",
      ],
    },
    {
      title: "The Non-Ruminant Digestive System",
      body: `### The Monogastric Plan

A **non-ruminant**, or monogastric animal, has a single glandular stomach.

The pig cannot ferment much fibre, so it needs concentrated feed.

Its digestive tract is shorter and passage is faster than a cow's.

Pigs are omnivores and eat grain, protein meals, minerals and vitamins.

The stomach is a muscular sac, not a fermentation chamber.

The pig is the named example, but poultry are also monogastric.

### Mouth and Oesophagus

Pigs have **incisors** for biting and molars for crushing, and they root and chew.

Saliva contains **amylase**, which starts starch digestion in the mouth.

Chewing mixes food with saliva and forms a bolus.

The **oesophagus** moves the bolus to the stomach by peristalsis.

Pigs eat quickly and can swallow large pieces if feed is poorly processed.

Grinding grain improves digestion and reduces waste.

### The Stomach

The pig's stomach is a single muscular sac holding 5-10 L.

Gastric glands secrete **hydrochloric acid** and **pepsinogen**, which becomes pepsin in acid.

The stomach pH is 1.5-3.5, ideal for pepsin and a barrier to microbes.

Protein digestion begins here, and the stomach churns food into **chyme**.

Food stays three to six hours, longer with fibrous feed.

A young pig also secretes rennin to clot milk.

### The Small Intestine

The small intestine is about 18-20 m long in an adult pig.

**Pancreatic amylase** digests starch to maltose, **lipase** splits fats, and **proteases** finish proteins.

**Bile** emulsifies fat into small droplets.

Final digestion happens at the brush border, and absorption occurs through **villi**.

Glucose, amino acids, fatty acids, vitamins and minerals are absorbed mainly in the jejunum.

This is the main site of absorption in the pig.

### The Caecum

The pig's caecum is a short blind pouch at the junction of the small and large intestine.

It holds **microbes** that ferment some fibre.

But the caecum is small and sits after most absorption, so the pig gains little energy from fibre.

Pigs digest only about 40-50% of dietary fibre, compared with 70-80% in ruminants.

That is why straw and mature forage cannot replace grain in a pig ration.

Fibre still has value: it keeps the gut moving and prevents constipation.

### The Large Intestine

The large intestine absorbs **water and minerals** and some VFAs.

Microbes continue fermentation and make some vitamins, but absorption is limited.

Faeces form and are stored in the rectum before defecation.

A pig produces about 2-3 kg of dung a day, depending on size and diet.

Dung is a valuable source of manure for crops.

### Protein and Amino Acids

Pigs need **essential amino acids** ready-made, especially **lysine**, methionine and tryptophan.

They cannot make microbial protein from urea, unlike ruminants.

Soybean meal and fish meal supply good protein, while cereal protein is low in lysine.

Feed must be balanced for energy, protein, minerals and vitamins.

A deficiency shows as poor growth, rough coat and weak legs.

### Water and Feed Processing

A pig drinks 2-3 L of water for every kg of feed, and more in hot weather.

A lactating sow needs 15-20 L a day, so a reliable drinker is essential.

Grinding grain increases the surface area for enzymes and improves digestion.

Pelleting reduces waste and sorting, though it adds cost.

Wet feeding can improve intake in young pigs, but the trough must be cleaned to stop it souring.

Stale or mouldy feed causes refusal and, with aflatoxin, liver damage.

### Worked Example: 100 kg Grower Ration

Recipe: maize 60 kg, soybean meal 20 kg, wheat bran 15 kg, fish meal 3 kg, mineral-vitamin premix 2 kg.

CP values: maize 9%, soybean meal 44%, bran 15%, fish meal 60%, premix 0%.

Maize: 60 × 0.09 = 5.4 kg CP.

Soybean meal: 20 × 0.44 = 8.8 kg CP.

Bran: 15 × 0.15 = 2.25 kg CP.

Fish meal: 3 × 0.60 = 1.80 kg CP.

Total CP = 5.4 + 8.8 + 2.25 + 1.80 = 18.25 kg.

CP percentage = 18.25 ÷ 100 × 100 = 18.3%, suitable for a 30-60 kg grower.

### Worked Example: Daily Feed

A 60 kg growing pig eats 3% of body weight per day.

Feed = 0.03 × 60 = 1.8 kg per day.

If the ration costs $0.45 per kg, daily cost = 1.8 × 0.45 = $0.81.

Over 40 days the pig eats 1.8 × 40 = 72 kg, costing $32.40.

If it gains 25 kg, feed conversion = 72 ÷ 25 = 2.9 kg feed per kg gain.`,
      groups: [
        {
          subTitle: "The Monogastric Tract",
          bullets: [
            "**Mouth:** teeth crush feed and salivary amylase starts starch digestion.",
            "**Stomach:** single acid sac, pH 1.5-3.5, pepsin digests protein.",
            "**Small intestine:** main site of digestion and absorption, with bile and pancreatic enzymes.",
            "**Caecum:** small pouch with some microbial fermentation of fibre.",
            "**Large intestine:** absorbs water and minerals and forms faeces.",
          ],
        },
        {
          subTitle: "Limits of the Pig",
          bullets: [
            "**Fibre:** only 40-50% digested, so straw cannot replace grain.",
            "**Protein:** essential amino acids must be supplied in the feed.",
            "**Lysine:** the first limiting amino acid in cereal-based rations.",
            "**Urea:** cannot be used, because there is no rumen fermentation.",
            "**Feed quality:** grinding, mixing and clean water are essential.",
          ],
        },
        {
          subTitle: "Ration Arithmetic",
          bullets: [
            "**Daily intake:** about 3% of body weight for a growing pig.",
            "**Crude protein:** sum each ingredient's kg × CP% and divide by total kg.",
            "**Feed conversion:** kg feed eaten ÷ kg liveweight gain.",
            "**Cost:** daily feed × price per kg gives the daily feed cost.",
            "**Balance:** check energy, protein, minerals and vitamins, not protein alone.",
          ],
        },
      ],
      examinerTips: [
        "Name the single stomach and say it is glandular and acid.",
        "Describe protein digestion starting in the stomach with pepsin.",
        "Place absorption firmly in the small intestine, especially the jejunum.",
        "Explain the caecum's limited role, because it is small and placed after absorption.",
        "In ration questions, show the CP contributed by each ingredient before adding.",
      ],
      commonMistakes: [
        "Saying the pig has a rumen-like fermentation chamber; its caecum is small.",
        "Claiming pigs can digest straw efficiently.",
        "Putting the main site of absorption in the large intestine.",
        "Forgetting that amino acids must be supplied pre-formed in pig feed.",
        "Calculating CP percentage without dividing by the total ration weight.",
      ],
      recap: [
        "Describe the passage of food through the digestive system of a pig. [5]",
        "Explain why pigs cannot digest fibrous feeds as well as cattle. [3]",
        "State the role of the stomach, small intestine and large intestine in a pig. [3]",
        "Calculate the crude protein percentage of a ration containing 70 kg maize at 9% CP and 30 kg soybean meal at 44% CP. [3]",
        "Explain why lysine must be included in a pig ration. [2]",
      ],
    },
    {
      title: "Comparing Digestion and Absorption",
      body: `### Two Strategies for Carbohydrate

Ruminants digest **cellulose** by microbial fermentation in the rumen.

Pigs digest **starch** and sugars with their own enzymes, and fibre is largely wasted.

The ruminant gets energy as **VFAs**, while the pig gets energy as **glucose**.

This single difference explains the different feeds, costs and management.

It also explains why cattle can graze land that would starve a pig.

### Comparing Teeth and Saliva

Cattle have a dental pad and no upper incisors, and they tear grass with the tongue.

Pigs have incisors and canines and can bite, root and chew.

Cow saliva is rich in bicarbonate and low in enzymes, while pig saliva contains amylase.

The cow depends on chewing the cud, while the pig chews once and swallows.

These differences suit grazing on one side and omnivorous feeding on the other.

### Comparing the Stomach

The cow has four chambers; the pig has one.

Rumen pH is near neutral, while stomach pH is strongly acid.

The cow's abomasum and the pig's stomach both secrete acid and pepsin.

The cow's rumen holds 100-150 L, while the pig's stomach holds only 5-10 L.

The cow chews the cud; the pig does not ruminate.

### Comparing Protein Nutrition

Rumen microbes build **microbial protein** from ammonia and amino acids, so the cow can use **non-protein nitrogen** such as urea.

The pig cannot, because it has no fermentation chamber to convert urea into protein.

Ruminant protein supply depends on microbial growth and on undegraded feed protein.

Pig diets must be formulated for essential amino acids, especially lysine.

This is why urea is a cattle supplement and never a pig supplement.

### Comparing Fibre and Feed

A cow eats 10-15 kg DM of forage a day and can live on crop residues.

A pig eats 1.5-3 kg of concentrate a day and cannot live on straw.

Ruminant feed is bulky and cheap per kg; pig feed is dense and expensive.

Cattle suit pasture and mixed farms; pigs suit intensive units near feed and markets.

Both need clean water, but the cow needs far more.

### Sites of Absorption

**Rumen wall**: VFAs, some ammonia and water.

**Omasum**: water and VFAs.

**Small intestine**: amino acids, glucose, fatty acids, vitamins and minerals in both species.

**Large intestine**: water and minerals, with some VFAs in the pig.

The small intestine is the main absorptive organ in both, but the rumen absorbs a large share of energy in the cow.

Absorption depends on surface area, so the villi of the small intestine are the main gateway for amino acids and sugars.

The rumen wall has papillae, which increase its surface area for VFA absorption.

A damaged rumen lining, caused by sudden acid feed, lowers absorption and growth.

### Rate of Passage

Rumen retention is 20-48 hours, and total passage is 60-90 hours in cattle.

Pig passage is 24-36 hours.

Faster passage means less fermentation time, which suits a concentrate diet.

Forage needs long retention so microbes can work.

Very finely ground forage passes too quickly and lowers fibre digestion.

### Worked Example: Fibre Digestibility

A cow eats 8 kg of fibre and passes 2.4 kg in the faeces.

Digested = 8 − 2.4 = 5.6 kg.

Digestibility = 5.6 ÷ 8 × 100 = 70%.

A pig eats 1.0 kg of fibre and passes 0.55 kg.

Digestibility = 0.45 ÷ 1.0 × 100 = 45%.

This shows why forage energy is available to the cow but largely unavailable to the pig.

### Worked Example: Feed Cost per kg Gain

A pig has a feed conversion ratio of 3.0 and feed costs $0.45 per kg.

Feed cost per kg gain = 3.0 × 0.45 = $1.35.

A broiler has a ratio of 1.8 and feed costs $0.55 per kg.

Cost per kg gain = 1.8 × 0.55 = $0.99.

The broiler converts more efficiently but needs higher-quality feed.

Ruminants convert forage slowly but at a lower feed cost per kg.

### Choosing the Right Animal

Match the animal to the feed resource.

Pasture and crop residues suit cattle, goats and sheep.

Maize and protein meals suit pigs and poultry.

Water supply, climate and market also decide the choice.

A farm with surplus forage should not sell it cheaply and then buy pig feed.

### What the Comparison Means on the Farm

A dairy cow can eat 60 kg of fresh Napier grass a day plus 2 kg of concentrate.

A growing pig needs about 2 kg of a balanced meal and no forage.

The cow's rumen buffers poor-quality feed, while the pig's growth stops if the ration is unbalanced.

A farmer therefore budgets, stores feed and plans labour differently for the two enterprises.`,
      groups: [
        {
          subTitle: "Ruminant Against Monogastric",
          bullets: [
            "**Stomach:** four chambers against one acid sac.",
            "**Fermentation:** rumen against a small caecum.",
            "**Energy source:** VFAs against glucose.",
            "**Protein:** microbial protein and urea against pre-formed amino acids.",
            "**Fibre:** 70-80% digested against 40-50%.",
          ],
        },
        {
          subTitle: "Where Absorption Happens",
          bullets: [
            "**Rumen:** VFAs, ammonia and water absorbed directly.",
            "**Omasum:** water and VFAs absorbed while particles are filtered.",
            "**Small intestine:** amino acids, sugars, fats and minerals in both species.",
            "**Large intestine:** water and minerals, plus some VFAs in the pig.",
            "**Rule:** the small intestine is the main absorptive organ in both.",
          ],
        },
        {
          subTitle: "Using the Comparison",
          bullets: [
            "**Feed choice:** forage for ruminants, concentrate for pigs.",
            "**Cost:** compare feed cost per kg gain, not feed price per kg.",
            "**Digestibility:** measure intake minus faecal output, then divide by intake.",
            "**Management:** cattle need more water and longer grazing time.",
            "**Planning:** match livestock to the farm's feed supply.",
          ],
        },
      ],
      examinerTips: [
        "Answer comparison questions in paired statements, cow then pig, for each feature.",
        "Use the terms volatile fatty acids and glucose correctly, not energy in general.",
        "Explain urea use by ruminants through microbial protein synthesis.",
        "Show digestibility as intake minus faecal output, divided by intake, times 100.",
        "When comparing costs, calculate cost per kg gain rather than price per bag.",
      ],
      commonMistakes: [
        "Saying both animals digest fibre equally well.",
        "Claiming pigs can use urea because it contains nitrogen.",
        "Forgetting the omasum as an absorption site.",
        "Treating feed conversion ratio as a percentage.",
        "Comparing feeds by price per kg without allowing for digestibility and gain.",
      ],
      recap: [
        "Compare the digestion of cellulose in a cow and a pig. [4]",
        "Explain why urea can be fed to cattle but not to pigs. [3]",
        "State the main sites of absorption in a ruminant and a non-ruminant. [4]",
        "A cow eats 10 kg of fibre and passes 3 kg in faeces. Calculate the digestibility. [2]",
        "A pig eats 90 kg of feed and gains 30 kg. Calculate its feed conversion ratio. [2]",
      ],
    },
    {
      title: "The Reproductive Systems",
      body: `### The Cow's Reproductive Tract

The **ovaries** are two almond-shaped organs that produce ova and the hormones oestrogen and progesterone.

The **oviducts**, or Fallopian tubes, catch the egg, and fertilisation happens in the upper third.

The **uterus** has two horns where the embryo implants and the calf grows.

The **cervix** is a thick muscular ring, closed in pregnancy and opening at birth.

The **vagina** serves for copulation and forms part of the birth canal.

The **vulva** is the external opening, which swells and reddens at oestrus.

### The Oestrus Cycle

The cycle averages **21 days**, with a normal range of 18-24 days.

**Pro-oestrus** is when follicles grow and oestrogen rises.

**Oestrus**, or heat, lasts 12-18 hours and is shown by standing to be mounted, clear mucus and restlessness.

**Ovulation** occurs about 10-14 hours after the end of standing heat.

**Dioestrus** follows, when the corpus luteum produces progesterone and prepares the uterus.

If there is no pregnancy, the corpus luteum regresses and the cycle repeats.

Puberty in heifers is reached at 8-12 months, and a heifer should calve at about two years.

### The Bull's Reproductive Tract

The **testes** produce sperm and testosterone, and the scrotum keeps them 2-3 °C cooler than the body.

The **epididymis** is where sperm mature and are stored.

The **vas deferens** carries sperm to the urethra.

The **accessory glands** — seminal vesicles, prostate and Cowper's glands — add fluid and nutrients.

The **penis and sheath** deliver semen into the cow's vagina.

A bull produces several billion sperm a day, and an ejaculate is about 5-8 mL.

### Hormones in Control

**GnRH** from the hypothalamus triggers FSH and LH from the pituitary.

**FSH** grows follicles, and **LH** triggers ovulation and forms the corpus luteum.

**Oestrogen** produces the signs of heat, while **progesterone** maintains pregnancy.

**Oxytocin** causes uterine contractions and milk let-down.

**Prostaglandin** regresses the corpus luteum and can be used to synchronise heat.

These hormones form a cycle, so a missed signal delays the next calving.

### Artificial Insemination

**AI** collects semen, dilutes it, freezes it in straws in liquid nitrogen at −196 °C, and places it in the cervix or uterus.

One bull can serve thousands of cows through AI.

It removes the need to keep a bull and reduces the risk of venereal disease.

It also gives access to proven genetics from other countries.

The disadvantages are the need for heat detection, a skilled technician, a nitrogen tank and careful records.

Timing matters: inseminate about 12 hours after standing heat begins for the best conception.

Semen is evaluated for motility and morphology before it is frozen.

The straw is thawed exactly as the label instructs, usually in water at 35-37 °C, and used within minutes.

Poor thawing damages sperm even when the bull was excellent.

### Signs of Heat and Heat Detection

Standing to be mounted is the most reliable sign of heat.

Other signs are clear stringy mucus, a swollen vulva, bellowing, restlessness and reduced milk yield.

Observe twice a day for 20 minutes, especially early morning and evening.

Tail paint or a chin-ball harness helps detect mounting.

Record every heat and service date, because the calving date depends on it.

A cow that returns to heat 21 days after service probably did not conceive.

A cow that shows no heat for 60 days after calving should be examined.

### Puberty and Fertility

A heifer reaches puberty at 8-12 months, depending on breed and feeding.

She should weigh about two-thirds of her mature weight before her first service.

Overfat heifers conceive poorly, while underfed heifers delay puberty.

A bull is fertile from about 12-14 months but should be tested before use.

Heat stress, disease and mineral deficiency all lower fertility.

Records show which cows repeat and which bulls are subfertile.

### Worked Example: Calving Interval

A cow calves on 1 March.

She should be served about 60 days later, around 30 April.

Gestation is 283 days.

From 30 April, add 31 days for May, 30 for June, 31 for July, 31 for August, 30 for September, 31 for October, 30 for November, 31 for December and 31 for January, giving 276 days to 31 January.

The remaining seven days give 7 February.

Calving interval = 60 + 283 = 343 days.

A calving interval near 365 days is the target for a productive herd.`,
      groups: [
        {
          subTitle: "The Cow's Tract",
          bullets: [
            "**Ovary:** produces ova and the hormones oestrogen and progesterone.",
            "**Oviduct:** catches the egg; fertilisation occurs in its upper third.",
            "**Uterus horns:** site of implantation and calf development.",
            "**Cervix:** muscular ring, closed in pregnancy and dilated at birth.",
            "**Vagina and vulva:** copulation, birth canal and external opening.",
          ],
        },
        {
          subTitle: "The Bull's Tract",
          bullets: [
            "**Testes:** produce sperm and testosterone; the scrotum cools them.",
            "**Epididymis:** sperm mature and are stored here.",
            "**Vas deferens:** carries sperm to the urethra.",
            "**Accessory glands:** add seminal fluid and nutrients.",
            "**Penis and sheath:** deliver semen into the female tract.",
          ],
        },
        {
          subTitle: "The Cycle and Its Hormones",
          bullets: [
            "**Cycle length:** about 21 days, with heat lasting 12-18 hours.",
            "**Ovulation:** 10-14 hours after the end of standing heat.",
            "**Oestrogen:** causes the signs of heat.",
            "**Progesterone:** from the corpus luteum, maintains pregnancy.",
            "**Oxytocin and prostaglandin:** control contractions, let-down and luteal regression.",
          ],
        },
      ],
      examinerTips: [
        "Name each organ in the order the egg or sperm travels, because sequence earns marks.",
        "State that fertilisation happens in the oviduct, not the uterus.",
        "Use the correct hormone for the correct event, oestrogen for heat and progesterone for pregnancy.",
        "Give the oestrus cycle as about 21 days and heat as 12-18 hours.",
        "For AI, give one advantage for genetics and one for disease control.",
      ],
      commonMistakes: [
        "Saying fertilisation occurs in the uterus; it occurs in the oviduct.",
        "Confusing the cervix with the vulva.",
        "Naming testosterone as a female hormone or progesterone as the heat hormone.",
        "Claiming AI removes the need for heat detection; it makes it more important.",
        "Forgetting that the scrotum keeps testes cooler than body temperature.",
      ],
      recap: [
        "Draw and label the reproductive tract of a cow. [5]",
        "Describe the changes in the ovary during one oestrus cycle. [4]",
        "State the functions of the testes, epididymis and accessory glands in a bull. [3]",
        "Explain two advantages and one disadvantage of artificial insemination. [3]",
        "A cow shows standing heat on 1 May. State when ovulation is expected and when she should be inseminated. [2]",
      ],
    },
    {
      title: "Fertilisation, Pregnancy and Birth",
      body: `### From Heat to Ovulation

The follicle releases the egg into the oviduct at ovulation.

The egg is viable for 8-12 hours, while sperm survive 24-48 hours in the female tract.

That is why inseminating about 12 hours after standing heat begins works well.

Sperm must undergo **capacitation** in the female tract before they can fertilise.

Capacitation takes several hours and changes the sperm membrane.

If service is too early or too late, the gametes never meet while both are viable.

### Fertilisation

Fertilisation happens in the **ampulla** of the oviduct.

Many sperm surround the egg and release enzymes to penetrate the zona pellucida.

One sperm fuses with the egg membrane, and the membrane then blocks other sperm.

The nuclei fuse to form a **zygote** with the full chromosome number.

The zygote divides as it travels down the oviduct toward the uterus.

Fertilisation restores the diploid number and determines the sex of the calf.

### Early Development and Implantation

Cleavage forms a ball of cells, then a **blastocyst**.

The blastocyst hatches from its membrane and elongates in the uterus.

**Implantation** in the cow begins around day 30-45.

The placenta attaches at button-like **cotyledons** on the uterine wall, forming placentomes.

The calf is nourished through the umbilical cord.

The placenta also produces hormones that help maintain pregnancy.

### Pregnancy and Diagnosis

Gestation in the cow is **280-285 days**, about nine months.

Progesterone from the corpus luteum and later the placenta maintains pregnancy.

Pregnancy can be diagnosed by rectal palpation at 35-45 days or by ultrasound from about 28 days.

A pregnant cow shows no return to heat, a growing abdomen and udder development.

The **dry period** of about 60 days before calving lets the udder recover.

Pregnancy diagnosis early saves feed on empty cows.

### The Onset of Birth

Birth begins with **foetal cortisol**, which triggers placental prostaglandin.

Prostaglandin regresses the corpus luteum and relaxes the pelvis, while **relaxin** softens the ligaments.

**Oxytocin** causes strong uterine contractions.

The cervix dilates and the calf rotates into the birth position.

Most calves are born front feet first with the head between the legs.

Any other presentation is abnormal and needs help.

### The Three Stages of Birth

**Stage 1, dilation**, lasts 2-6 hours; the cow is restless, separates from the herd, the cervix opens and the water bag appears.

**Stage 2, expulsion**, lasts 30 minutes to 2 hours; strong contractions push the calf out.

**Stage 3, placenta**, lasts 2-8 hours; the afterbirth is expelled.

Call a vet if stage 2 lasts more than two to three hours or the presentation is abnormal.

Clean bedding, gentle traction only with correct alignment, and iodine on the navel prevent infection.

A calf that does not breathe should have its airways cleared and be stimulated.

### After Birth

The calf should breathe, stand and suck within one to two hours.

The cow should pass the placenta within 12 hours; a retained placenta is a problem.

The calf needs **colostrum** immediately.

The uterus repairs itself over 30-45 days, and the cow can be re-served after 45-60 days.

Good records of calving and service dates keep the herd calving every year.

### Dystocia and Calf Care

**Dystocia** means a difficult birth, and it is common in heavy calves and first-calving heifers.

Check the presentation before pulling; a malpresented calf needs correction or a caesarean.

Pull only with the cow's contractions, using clean ropes and two people.

A calf from a long delivery is slow to suck, so give colostrum by bottle.

Dip the navel in iodine and keep the calf warm and dry.

Twin births are uncommon in cattle and usually need help.

### Worked Example: Calving Date

A cow is served on 10 June.

Add 283 days: 20 days remain in June, then 31 in July (51), 31 in August (82), 30 in September (112), 31 in October (143), 30 in November (173), 31 in December (204), 31 in January (235), 28 in February (263) and 20 in March (283).

Expected calving is 20 March.

If she calves on 25 March, gestation was 288 days, which is within the normal range.

### Worked Example: Conception Rate

A farmer serves 40 cows, and 32 hold to the service.

Conception rate = 32 ÷ 40 × 100 = 80%.

If the target is 65%, the herd is doing well.

The eight repeats are re-served after about 21 days.

The calving rate will be lower if any pregnancies are lost.`,
      figure: birthArt,
      groups: [
        {
          subTitle: "Fertilisation to Implantation",
          bullets: [
            "**Site:** ampulla of the oviduct, within hours of ovulation.",
            "**Gametes:** egg viable 8-12 hours; sperm survive 24-48 hours.",
            "**Capacitation:** sperm must change in the female tract before fertilising.",
            "**Zygote:** fusion restores the diploid number and sets the sex.",
            "**Implantation:** about day 30-45, with cotyledons forming the placenta.",
          ],
        },
        {
          subTitle: "Pregnancy Facts",
          bullets: [
            "**Gestation:** 280-285 days in the cow.",
            "**Hormone:** progesterone maintains pregnancy.",
            "**Diagnosis:** palpation at 35-45 days or ultrasound from 28 days.",
            "**Dry period:** about 60 days before calving.",
            "**Records:** service date plus 283 days gives the expected calving date.",
          ],
        },
        {
          subTitle: "Birth in Three Stages",
          bullets: [
            "**Dilation:** 2-6 hours, cervix opens, water bag appears.",
            "**Expulsion:** 30 minutes to 2 hours of strong contractions.",
            "**Placenta:** 2-8 hours for the afterbirth.",
            "**Normal presentation:** front feet first, head between the legs.",
            "**Intervention:** call for help if stage 2 is prolonged or presentation is abnormal.",
          ],
        },
      ],
      examinerTips: [
        "State the oviduct as the site of fertilisation and the uterus as the site of implantation.",
        "Give gestation as 280-285 days and show the date arithmetic in weeks or days.",
        "Name the three stages of birth and one event for each.",
        "Explain the hormonal sequence, foetal cortisol, prostaglandin, relaxin and oxytocin.",
        "For a calving date question, count month by month and show the running total.",
      ],
      commonMistakes: [
        "Saying the calf grows in the oviduct; it grows in the uterus.",
        "Using 9 months exactly and losing the date arithmetic marks.",
        "Reversing the order of the birth stages.",
        "Claiming a cow can be served immediately after calving.",
        "Forgetting that colostrum must be given before the calf is a few hours old.",
      ],
      recap: [
        "Describe fertilisation and early development up to implantation in a cow. [5]",
        "State the gestation length of a cow and explain how to calculate the calving date. [3]",
        "Describe the three stages of birth and one sign of each. [6]",
        "Explain the role of oxytocin and prostaglandin at birth. [3]",
        "A cow is served on 1 April. Calculate the expected calving date using 283 days. [3]",
      ],
    },
    {
      title: "Lactation, Colostrum and Weaning",
      body: `### The Mammary Gland

The cow's udder has four **quarters**, each with a teat and a separate gland.

Inside, **alveoli** are lined with milk-secreting cells surrounded by muscle cells.

Ducts carry milk to the **cistern** above the teat.

The teat sphincter keeps milk in and bacteria out.

Milk is made from blood: about 400-500 L of blood flows through the udder to make 1 L of milk.

Clean bedding and clean hands reduce mastitis, the main udder disease.

### Lactation

**Lactation** is the secretion of milk by the mammary gland after calving.

**Prolactin** stimulates milk synthesis, and **oxytocin** causes let-down.

Let-down is a reflex triggered by washing and handling the udder and by the calf's suckling.

Milk yield peaks at six to eight weeks after calving, then declines slowly.

A good dairy cow yields 15-25 L a day, and the lactation lasts about 305 days.

Stress, sudden feed changes and rough handling can reduce let-down and yield.

### Milk Composition

Milk is about **87% water**, 3.8% fat, 3.3% protein, 4.8% lactose and 0.7% minerals.

Fat and protein content decide the price in many markets.

Breed affects composition: Holstein gives more milk, while Jersey gives richer milk.

Feeding and stage of lactation also change fat and protein.

Clean milking and rapid cooling protect quality.

Milk left warm develops bacteria quickly and cannot be sold.

### Colostrum

**Colostrum** is the first milk, produced for three to five days after calving.

It is thick, yellow and rich in **antibodies (IgG)**, protein, fat, vitamin A and minerals.

It also has a laxative effect that clears meconium.

The calf's gut can absorb large antibody molecules only in the first **24-36 hours**, and best in the first two to six hours.

After that the gut closes and antibodies are digested instead of absorbed.

Colostrum therefore gives **passive immunity** until the calf's own immune system matures.

A calf that gets no colostrum is likely to suffer scours and pneumonia.

### Feeding Colostrum

Feed 10% of body weight in the first six hours: a 35 kg calf needs 3.5 L.

Give a second feed of about 2 L within 12 hours.

Use a clean bottle or teat, or let the calf suckle but check that it does.

Test colostrum quality with a colostrometer where available.

Store surplus colostrum frozen in 1 L portions and thaw gently.

Cows vaccinated before calving pass more antibodies into their colostrum.

### Weaning

**Weaning** is the gradual withdrawal of milk and the change to solid feed.

Dairy calves are usually weaned at 8-10 weeks, or earlier once they eat 1 kg of starter daily.

Beef calves suckle for 6-8 months, and piglets are weaned at 3-4 weeks.

Weaning is stressful, so do it gradually, keep the same feed and water, and watch for scours.

Rumen development depends on solid feed and water, not on milk.

A calf weaned too early on poor starter will stall and lose weight.

### Dry Period and the Cycle

The cow is dried off about 60 days before calving.

Dry-off means stopping milking so the udder involutes and repairs.

A dry period of 50-60 days gives higher milk yield in the next lactation.

The cycle is calving, lactation, service, pregnancy, dry-off and calving again.

Records link each stage, so a gap in the calving interval is easy to spot.

### Worked Example: Colostrum Requirement

A calf weighs 35 kg.

Colostrum in the first six hours = 10% of body weight = 0.10 × 35 = 3.5 L.

A second feed of 5% = 1.75 L within 12 hours.

Total first-day intake = 3.5 + 1.75 = 5.25 L.

If the cow gives 2 L of colostrum per milking, two milkings supply 4 L, which is enough for the first feed but not the second, so surplus from another cow or frozen stock is needed.

### Worked Example: Milk Yield and Feed

A cow yields 20 L a day.

The maintenance allowance is 4 kg of concentrate.

The production allowance is 0.4 kg of concentrate per litre above 5 L.

Extra milk = 20 − 5 = 15 L.

Concentrate = 4 + 0.4 × 15 = 4 + 6 = 10 kg a day.

If concentrate costs $0.40 per kg, feed cost = 10 × 0.40 = $4.00 a day.

At $0.50 per litre, milk income = 20 × 0.50 = $10.00, leaving $6.00 before other costs.

### Worked Example: Lactation Yield

Daily yields for 10 days are 18, 19, 20, 20, 19, 18, 19, 18, 17 and 17 L.

Sum = 185 L.

Average = 185 ÷ 10 = 18.5 L a day.

Over a 305-day lactation at this average: 18.5 × 305 = 5642.5 L, about 5640 L.

The average is only an estimate, because the lactation curve rises and falls.`,
      figure: lactationArt,
      groups: [
        {
          subTitle: "The Udder and Lactation",
          bullets: [
            "**Quarters:** four separate glands, each with its own teat and cistern.",
            "**Alveoli:** milk-secreting cells surrounded by muscle that contracts at let-down.",
            "**Prolactin:** stimulates milk synthesis.",
            "**Oxytocin:** causes let-down in response to suckling or washing.",
            "**Lactation curve:** peaks at 6-8 weeks, then declines over about 305 days.",
          ],
        },
        {
          subTitle: "Colostrum",
          bullets: [
            "**Definition:** the first milk, produced for 3-5 days after calving.",
            "**Contents:** antibodies, protein, fat, vitamin A, minerals and a laxative.",
            "**Timing:** feed within the first 2-6 hours; absorption stops by 24-36 hours.",
            "**Amount:** about 10% of body weight in the first six hours.",
            "**Value:** passive immunity against scours and pneumonia.",
          ],
        },
        {
          subTitle: "Weaning and the Cycle",
          bullets: [
            "**Definition:** gradual change from milk to solid feed.",
            "**Dairy calf:** 8-10 weeks, or when eating 1 kg of starter daily.",
            "**Piglet:** 3-4 weeks; beef calf: 6-8 months.",
            "**Rumen development:** needs solid feed and water, not milk.",
            "**Dry period:** about 60 days before the next calving.",
          ],
        },
      ],
      examinerTips: [
        "Define lactation and weaning in one precise sentence each.",
        "Explain colostrum by antibodies and the brief period when the gut can absorb them.",
        "Give the timing of the first colostrum feed, not just the amount.",
        "Name prolactin for milk synthesis and oxytocin for let-down.",
        "Show colostrum volume as 10% of body weight and calculate it for the stated calf.",
      ],
      commonMistakes: [
        "Saying colostrum is just the first milk with no special value; its antibodies are the point.",
        "Feeding colostrum after 24 hours and expecting immunity.",
        "Confusing prolactin with oxytocin.",
        "Weaning a calf by abrupt removal of milk without starter feed.",
        "Forgetting the dry period in the lactation cycle.",
      ],
      recap: [
        "Define lactation and describe the role of oxytocin in milk let-down. [3]",
        "Explain why colostrum is essential and why it must be fed within the first hours. [4]",
        "Describe how a dairy calf should be weaned. [3]",
        "A 40 kg calf needs colostrum at 10% of body weight. Calculate the volume for the first feed. [2]",
        "State three changes that occur in the udder during the dry period. [3]",
      ],
    },
  ],
};

export const AGRICULTURE_CHAPTER_6: Chapter = chapterSix;
