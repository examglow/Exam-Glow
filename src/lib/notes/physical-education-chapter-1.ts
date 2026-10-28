import type { Chapter } from "./types";

const IMG = "/notes/pe";

function artPanel(items: { src: string; alt: string; caption: string }[]) {
  const tiles = items
    .map((it, i) => {
      // An odd final tile takes the whole row. A panel holding one figure keeps its square
      // shape, because a 2:1 band would waste most of a square illustration.
      const solo = items.length % 2 === 1 && i === items.length - 1;
      const wide = solo && items.length > 1;
      return `<figure class="m-0 min-w-0${solo ? " sm:col-span-2" : ""}">
        <div class="overflow-hidden rounded-xl bg-[#f7f5f2]"><img src="${IMG}/${it.src}" alt="${it.alt}" loading="lazy" class="aspect-square w-full object-cover${wide ? " sm:aspect-[2/1]" : ""}${solo ? " sm:object-contain" : ""}" /></div>
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

const skeletonArt = artPanel([
  {
    src: "pe01-human-skeleton.webp",
    alt: "A friendly cartoon human skeleton seen from the front with the major bones in soft pastel shades",
    caption: "The bones the syllabus asks you to name",
  },
]);

const jointArt = artPanel([
  {
    src: "pe01-synovial-joint.webp",
    alt: "Cross-section of a synovial joint showing capsule, cartilage, ligaments and fluid between two bones",
    caption: "A synovial joint and the parts you must label",
  },
]);

const muscleArt = artPanel([
  {
    src: "pe01-antagonistic-muscles.webp",
    alt: "Two arms side by side bending and straightening, with the biceps and triceps highlighted",
    caption: "Biceps and triceps work as an antagonistic pair",
  },
  {
    src: "pe01-muscle-fibre-types.webp",
    alt: "Two bundles of muscle fibres, one thin and dense, one thick, beside a sprinter and an endurance runner",
    caption: "Fast-twitch fibres suit sprints, slow-twitch suit distance",
  },
]);

const breathingArt = artPanel([
  {
    src: "pe01-breathing-pathway.webp",
    alt: "Front view of the airway from the nose down the trachea into the lungs and alveoli",
    caption: "The route air takes to reach the alveoli",
  },
]);

const circulationArt = artPanel([
  {
    src: "pe01-heart-circulation.webp",
    alt: "Cartoon heart with the four chambers and the main vessels drawn as looping arrows",
    caption: "Blood makes two loops through the heart",
  },
]);

const energyArt = artPanel([
  {
    src: "pe01-energy-systems.webp",
    alt: "A battery-like cell releasing energy, split into a steady aerobic stream and a short anaerobic burst",
    caption: "Aerobic supply is steady, anaerobic supply is brief",
  },
]);

const leverArt = artPanel([
  {
    src: "pe01-lever-classes.webp",
    alt: "Three seesaw-like lever diagrams with the pivot, load and effort in different orders",
    caption: "The three lever classes, by what sits in the middle",
  },
]);

const chapterOne: Chapter = {
  number: 1,
  title: "Anatomy and Physiology",
  intro: `Every movement in sport happens because bones, muscles, air and blood are working together.

This chapter is the science behind the body: the skeleton, the joints, the muscles, the respiratory and circulatory systems, the energy systems, and simple biomechanics.

Cambridge asks you to **name** structures and to **explain** how they respond during exercise.

Learn each part with a sporting example attached, because the applied marks come from the example.`,
  subheadings: [
    {
      title: "The Skeleton: Functions and Major Bones",
      body: `### What the Skeleton Does

The skeleton has four jobs the syllabus wants stated in order.

It gives **shape and support**, holding the body upright against gravity.

It gives **muscle attachment for movement**, so a contracting muscle has something to pull on.

It gives **protection**, as the cranium shields the brain and the ribs shield the heart and lungs.

It makes **red blood cells**, which happens inside the red marrow of certain bones.

### The Bones You Must Locate

Know the **cranium, clavicle, scapula, humerus, radius, ulna** and the hand bones: **carpals, metacarpals, phalanges**.

Add the **ribs, pelvis, femur, tibia, fibula, patella, talus** and the foot bones: **tarsals, metatarsals, phalanges**.

The humerus is the upper arm; the radius and ulna are the forearm; the femur is the thigh.

The patella is the kneecap and the talus sits in the ankle, joining the tibia to the foot.

### Long, Short and Flat

Bones are sorted by shape, and Cambridge asks for the group.

**Long bones** are longer than they are wide: femur, humerus, tibia, radius.

**Short bones** are roughly cube-shaped: the carpals of the wrist and tarsals of the ankle.

**Flat bones** are thin plates: the scapula, the sternum, the ribs and the cranium.`,
      figure: skeletonArt,
      groups: [
        {
          subTitle: "Functions of the Skeleton",
          bullets: [
            "**Shape and support** gives the body its frame and holds it upright.",
            "**Muscle attachment** gives every muscle a bone to pull against.",
            "**Protection** covers the brain, heart and lungs with bone.",
            "**Red blood cell production** happens in the red marrow.",
            "Bones also store calcium, though only the four listed functions are required.",
          ],
        },
        {
          subTitle: "Location of the Named Bones",
          bullets: [
            "Cranium (skull), clavicle (collarbone), scapula (shoulder blade).",
            "Humerus (upper arm), radius and ulna (forearm).",
            "Carpals, metacarpals and phalanges form the wrist, palm and fingers.",
            "Ribs, pelvis, femur, tibia, fibula, patella and talus.",
            "Tarsals, metatarsals and phalanges form the ankle, sole and toes.",
          ],
        },
        {
          subTitle: "Classifying Bones by Shape",
          bullets: [
            "Long bones: femur, humerus, tibia, fibula, radius, ulna.",
            "Short bones: carpals and tarsals.",
            "Flat bones: scapula, ribs, sternum, cranium.",
            "The patella is a special sesamoid bone, but know the three main groups.",
          ],
        },
      ],
      examinerTips: [
        "Give the four functions as four separate marks, and name a bone beside each function you use.",
        "Say red blood cells are made in the **marrow**, not in the heart.",
        "When asked to classify a bone, state the group and one reason, such as 'long, because it is longer than wide'.",
      ],
      commonMistakes: [
        "Calling the patella part of the foot; it is the kneecap.",
        "Confusing the tibia (shin, weight-bearing) with the fibula (the thinner side bone).",
        "Listing digestion or breathing as skeleton functions; they are not among the four required.",
      ],
      recap: [
        "State the four functions of the skeleton. [4]",
        "Name two bones of the forearm and two of the lower leg. [4]",
        "Classify the scapula and the femur by shape and justify each. [4]",
      ],
    },
    {
      title: "Joints and Movement at Joints",
      body: `### Three Types of Joint

A **joint** is where two bones meet. Joints are graded by how much they move.

**Fixed or fibrous joints** do not move at all, such as the sutures of the skull.

**Slightly movable cartilaginous joints** allow a little movement, such as between the vertebrae or the pubic symphysis.

**Freely movable synovial joints** move freely, and these are the ones sport cares about. The two main kinds are **ball and socket** and **hinge**.

### The Structure of a Synovial Joint

The **joint capsule** is an outer fibrous sleeve that encloses and strengthens the joint.

The **synovial membrane** lines the capsule and secretes **synovial fluid**.

That fluid **lubricates** the joint, so the bones glide instead of grinding.

**Cartilage** covers the bone ends, acting as a smooth shock absorber.

**Ligaments** join bone to bone and stop the joint moving too far.

### Movements to Name

Learn each movement as a change in the angle at a named joint.

**Flexion** decreases the angle; **extension** increases it, straightening a limb.

**Abduction** moves a limb away from the midline; **adduction** brings it back.

**Rotation** turns a bone around its long axis.

At the ankle, **plantar flexion** points the toes down; **dorsiflexion** pulls them up.

### Range Against Stability

A **ball and socket** joint, the shoulder or hip, has the widest range but is less stable.

A **hinge** joint, the elbow or knee, moves mainly in one plane but is far more stable.

Compare them by stating range first and stability second, in the same sentence.`,
      figure: jointArt,
      groups: [
        {
          subTitle: "Types of Joint With Examples",
          bullets: [
            "**Fixed / fibrous:** skull sutures, no movement.",
            "**Slightly movable / cartilaginous:** between vertebrae.",
            "**Freely movable / synovial:** ball and socket, hinge.",
            "Shoulder and hip are ball and socket; elbow and knee are hinges.",
          ],
        },
        {
          subTitle: "Parts of a Synovial Joint",
          bullets: [
            "**Joint capsule** encloses and strengthens the joint.",
            "**Synovial membrane** secretes the synovial fluid.",
            "**Synovial fluid** lubricates the joint.",
            "**Cartilage** absorbs shock at the bone ends.",
            "**Ligaments** bind bone to bone and limit movement.",
          ],
        },
        {
          subTitle: "Naming the Movements",
          bullets: [
            "**Flexion / extension** decrease or increase the angle at a joint.",
            "**Abduction / adduction** move away from or toward the midline.",
            "**Rotation** turns a bone on its own axis.",
            "**Plantar / dorsiflexion** point the foot down or pull the toes up.",
          ],
        },
      ],
      examinerTips: [
        "When naming a movement, always name the joint and the limb together, such as 'flexion at the elbow'.",
        "For a structure question, give the part and its function in one sentence each; a bare list loses marks.",
        "Use **bone to bone** for ligaments and **muscle to bone** for tendons, so the two are never swapped.",
      ],
      commonMistakes: [
        "Saying cartilage joins bone to bone; that is the ligament's job.",
        "Calling the skull a slightly movable joint; it is fixed.",
        "Confusing adduction with abduction, or plantar flexion with dorsiflexion.",
      ],
      recap: [
        "Describe the structure of a synovial joint and the function of each named part. [6]",
        "State the movement at the knee when a footballer kicks a ball. [2]",
        "Compare the range of movement and the stability of a hinge and a ball and socket joint. [4]",
      ],
    },
    {
      title: "Muscles, Tendons and Antagonistic Action",
      body: `### The Muscles to Locate

Know the **latissimus dorsi, trapezius, deltoid, pectorals, biceps, triceps, abdominals, gluteals** and **hip flexors**.

Add the **hamstring group, quadriceps group, gastrocnemius** and **tibialis anterior**.

The hamstring and quadriceps are named as groups, so do not bother memorising the individual muscles.

The gastrocnemius is the calf and the tibialis anterior runs down the front of the shin.

### Tendons

A **tendon** joins **muscle to bone** and passes on the force of contraction.

Tendons are strong and only slightly stretchy, which makes them efficient at pulling bone.

The Achilles tendon links the gastrocnemius to the heel and is loaded heavily in running.

### Antagonistic Pairs

Muscles **pull but never push**, so they work in opposite pairs across a joint.

The **agonist**, or prime mover, contracts to cause the movement.

The **antagonist** contracts at the same time in a controlled way to steady or reverse it.

At the elbow, flexion means the biceps contracts while the triceps relaxes.

Extension reverses that, with the triceps now the agonist.

### Types of Contraction

An **isotonic** contraction changes the muscle's length as it moves a load.

Within isotonic, a **concentric** contraction shortens the muscle, as the biceps does lifting a weight.

An **eccentric** contraction lengthens the muscle under tension, as the biceps does lowering it slowly.

An **isometric** contraction produces tension with **no change in length** and no visible movement, as when holding a posture still.

### Muscle Fibre Types

**Slow-twitch (Type I)** fibres create less force but resist fatigue and use **aerobic** energy.

**Fast-twitch (Type II)** fibres create more force, fatigue quickly and rely on **anaerobic** energy.

Endurance athletes carry more slow-twitch fibres; sprinters and weightlifters carry more fast-twitch.`,
      figure: muscleArt,
      groups: [
        {
          subTitle: "Muscles to Name and Locate",
          bullets: [
            "Upper body: latissimus dorsi, trapezius, deltoid, pectorals, biceps, triceps.",
            "Core and hips: abdominals, gluteals, hip flexors.",
            "Legs: hamstring group, quadriceps group, gastrocnemius, tibialis anterior.",
            "The deltoid abducts the arm; the triceps extends the elbow.",
          ],
        },
        {
          subTitle: "Agonist, Antagonist and Contraction",
          bullets: [
            "**Agonist / prime mover** causes the stated movement.",
            "**Antagonist** opposes or controls it, because muscles only pull.",
            "**Concentric:** muscle shortens while contracting.",
            "**Eccentric:** muscle lengthens while still under tension.",
            "**Isometric:** tension with no change in length and no movement.",
          ],
        },
        {
          subTitle: "Slow-Twitch Against Fast-Twitch",
          bullets: [
            "**Slow twitch:** lower force, high fatigue resistance, aerobic supply.",
            "**Fast twitch:** higher force, low fatigue resistance, anaerobic supply.",
            "Slow-twitch fibres suit marathon running and cycling.",
            "Fast-twitch fibres suit the 100 metres and a heavy lift.",
            "The mix is largely inherited but shifts slightly with training.",
          ],
        },
      ],
      examinerTips: [
        "Name the muscle by its **group** for hamstrings and quadriceps; the individual names are not required.",
        "For antagonistic action, always say which is the agonist and which the antagonist for that exact movement.",
        "State that muscles only pull, so a second muscle must reverse the movement; that phrase wins the mark.",
      ],
      commonMistakes: [
        "Saying a muscle pushes a bone back; it cannot, so the antagonist must pull it.",
        "Calling an isometric contraction a muscle that does nothing; it produces tension but no movement.",
        "Putting the triceps as the agonist during elbow flexion; the triceps is the antagonist there.",
      ],
      recap: [
        "Describe the roles of the agonist and antagonist during elbow flexion. [4]",
        "Explain the difference between concentric, eccentric and isometric contractions. [5]",
        "Compare slow-twitch and fast-twitch fibres by force, fatigue and energy supply. [6]",
      ],
    },
    {
      title: "The Respiratory System",
      body: `### The Pathway of Air

Air enters through the **mouth or nasal passage** and drops into the **trachea**, the windpipe.

The trachea divides into two **bronchi**, one to each lung.

The bronchi branch into finer **bronchioles**, which end at tiny air sacs called **alveoli**.

Say the order as a chain: mouth, trachea, bronchi, bronchioles, alveoli.

### Gaseous Exchange at the Alveoli

The **alveoli** are where oxygen enters the blood and carbon dioxide leaves it.

They work because of four design features, each worth a mark.

There are **huge numbers** of them, so the surface area is enormous.

Their walls are **one cell thick**, so the diffusion distance is tiny.

They are densely wrapped in **capillaries**, keeping the blood beside the air.

Their **moist lining** lets the gases dissolve and diffuse across easily.

### The Mechanics of Breathing

The **diaphragm** and the **intercostal muscles** do the work of normal breathing.

To breathe in, the external intercostals pull the ribs up and out and the diaphragm flattens.

That enlarges the chest cavity, lowering the pressure inside, so air rushes in.

To breathe out at rest, the ribs move down and in and the diaphragm relaxes upward.

### Volumes and Ventilation

**Tidal volume** is the air moved in a single breath at rest.

**Vital capacity** is the largest volume that can be breathed out after the deepest breath in.

**Residual volume** is the air still left in the lungs after the hardest possible out-breath.

**Minute ventilation** is the air moved per minute, calculated as tidal volume multiplied by breathing rate.

During exercise, tidal volume, breathing rate and therefore minute ventilation all rise.`,
      figure: breathingArt,
      groups: [
        {
          subTitle: "Order of the Airway",
          bullets: [
            "Mouth or nasal passage, then trachea.",
            "Trachea splits into two bronchi.",
            "Bronchi branch into bronchioles.",
            "Bronchioles end at the alveoli.",
          ],
        },
        {
          subTitle: "Why the Alveoli Exchange Gas Well",
          bullets: [
            "Very large surface area because there are millions of them.",
            "Walls one cell thick, so a short diffusion distance.",
            "Surrounded by capillaries, so blood is always beside the air.",
            "Moist lining lets oxygen and carbon dioxide dissolve and diffuse.",
          ],
        },
        {
          subTitle: "Breathing Volumes",
          bullets: [
            "**Tidal volume:** air moved per breath at rest.",
            "**Vital capacity:** greatest volume that can be exhaled after maximal inhalation.",
            "**Residual volume:** air left after maximal exhalation.",
            "**Minute ventilation:** tidal volume x breathing rate.",
          ],
        },
      ],
      examinerTips: [
        "Recite the airway as a chain of five terms in order, exactly as the mark scheme prints it.",
        "For ventilation, give the formula and then substitute real numbers to show the rise with exercise.",
        "Match each alveolus feature to its benefit, since a bare list earns half the marks.",
      ],
      commonMistakes: [
        "Confusing breathing rate with minute ventilation; ventilation also counts the depth per breath.",
        "Saying the diaphragm relaxes to breathe in; it contracts and flattens to bring air in.",
        "Calling residual volume the air in a normal breath; it is what stays behind after full exhalation.",
      ],
      recap: [
        "List the pathway of air from the nose to the blood. [5]",
        "Explain how the structure of the alveoli speeds up gaseous exchange. [4]",
        "Describe the action of the diaphragm and intercostal muscles during inhalation. [3]",
        "A performer breathes 20 times a minute with a tidal volume of 0.5 litres. Work out the minute ventilation. [2]",
      ],
    },
    {
      title: "The Circulatory System",
      body: `### What Blood Is Made Of

**Plasma** is the liquid that carries nutrients, hormones and carbon dioxide.

**Red blood cells** carry oxygen, because they are packed with haemoglobin.

**White blood cells** fight infection as part of the immune system.

**Platelets** clump to seal cuts and start blood clotting.

### Haemoglobin

**Haemoglobin** is the protein in red blood cells that binds oxygen to carry it to the muscles.

It also helps carry some carbon dioxide back towards the lungs.

Altitude training raises red blood cell count, so more haemoglobin and more oxygen can be delivered.

### The Three Kinds of Blood Vessel

**Arteries** carry blood away from the heart at high pressure. They have thick, muscular walls and a small lumen, and no valves.

**Capillaries** are one cell thick, so substances diffuse out to the muscles easily. Their lumen is tiny.

**Veins** carry blood back to the heart at low pressure. They have thin walls, a wide lumen and **valves** to stop backflow.

### The Heart and Its Chambers

The **atria** are the two upper chambers that receive blood.

The **ventricles** are the two lower chambers that pump blood out. The left ventricle has the thickest wall, because it pumps to the whole body.

**Valves** keep the blood moving one way; you do not need to know their names.

### The Pathway of Blood

Body blood returns through the **vena cava** to the right atrium, then the right ventricle.

The right ventricle pumps it out through the **pulmonary artery** to the lungs.

Fresh blood returns through the **pulmonary vein** to the left atrium, then the left ventricle.

The left ventricle pumps it out through the **aorta** to the body.

### Cardiac Output

**Heart rate** is beats per minute. **Stroke volume** is blood pumped per beat.

**Cardiac output** is stroke volume multiplied by heart rate.

It rises during exercise so more oxygen reaches the working muscles.`,
      figure: circulationArt,
      groups: [
        {
          subTitle: "Components of Blood",
          bullets: [
            "**Plasma** carries nutrients, hormones and carbon dioxide.",
            "**Red blood cells** carry oxygen using haemoglobin.",
            "**White blood cells** defend against infection.",
            "**Platelets** clot to seal wounds.",
          ],
        },
        {
          subTitle: "Arteries, Capillaries and Veins",
          bullets: [
            "**Artery:** thick wall, small lumen, no valves, away from the heart.",
            "**Capillary:** one cell thick, tiny lumen, exchange by diffusion.",
            "**Vein:** thin wall, wide lumen, has valves, toward the heart.",
            "Only veins carry valves, because their blood is at low pressure.",
          ],
        },
        {
          subTitle: "Blood Pathway Through the Heart",
          bullets: [
            "Body to right atrium via the **vena cava**.",
            "Right ventricle to lungs via the **pulmonary artery**.",
            "Lungs to left atrium via the **pulmonary vein**.",
            "Left ventricle to body via the **aorta**.",
          ],
        },
        {
          subTitle: "Cardiac Output",
          bullets: [
            "**Stroke volume** = blood pumped in one beat.",
            "**Cardiac output** = stroke volume x heart rate.",
            "It rises during exercise to deliver more oxygen.",
            "Training raises stroke volume, so cardiac output rises with a lower heart rate.",
          ],
        },
      ],
      examinerTips: [
        "Contrast arteries and veins by wall, lumen and valves in that order, so all three marks appear.",
        "Name the pulmonary artery as carrying blood away from the heart, even though it is blue and deoxygenated.",
        "For cardiac output, always show the multiplication with real figures; the answer alone scores fewer marks.",
      ],
      commonMistakes: [
        "Saying arteries always carry oxygenated blood; the pulmonary artery carries deoxygenated blood.",
        "Attributing oxygen carriage to plasma or white cells; haemoglobin in red cells does it.",
        "Placing the aorta on the right side; it leaves the thicker-walled left ventricle.",
      ],
      recap: [
        "State the function of each of the four components of blood. [4]",
        "Compare the structure of an artery and a vein. [4]",
        "Trace blood from the body through the heart to the body, naming the four vessels. [6]",
        "A swimmer has a stroke volume of 70 ml and a heart rate of 60 bpm. Calculate cardiac output. [2]",
      ],
    },
    {
      title: "Energy Supply and the Effects of Exercise",
      body: `### Two Ways to Release Energy

Muscle cells release energy from glucose by **respiration**.

**Aerobic respiration** needs oxygen and produces carbon dioxide and water, so it can be sustained.

Glucose plus oxygen gives carbon dioxide plus water, releasing energy.

**Anaerobic respiration** happens without enough oxygen and produces **lactic acid**.

Glucose breaks down to lactic acid, releasing far less energy each time.

### Which System, and When

Which system is used depends on how **long** and how **hard** the activity is.

Longer, low-intensity work uses the **aerobic** system, as in a distance run.

Shorter, intense work uses the **anaerobic** system, as in a 100-metre sprint.

Most team games dip between both as the player sprints and then jogs.

### Recovery and Oxygen Debt

After anaerobic work the body must pay back an **oxygen debt**, also called EPOC.

Extra oxygen is taken in to break down the **lactic acid** built up in the muscles.

This keeps the breathing rate high for a while after the activity stops.

Recovery time is shorter in trained performers, who clear lactic acid faster.

### Short-Term Effects

The effects felt during and just after a session are the **short-term** ones.

Heart rate rises, breathing rate rises, the skin flushes and sweats, and fatigue sets in.

Over-breathing hard work can bring nausea or a light-headed feeling.

### Long-Term Effects

Regular training produces the **long-term** adaptations the exam loves.

The heart muscle grows stronger and slightly larger, a **cardiac hypertrophy**.

**Resting pulse rate falls**, a **bradycardia**, because each beat pumps more blood.

**Stroke volume rises**, and the body **tolerates lactic acid** better.`,
      figure: energyArt,
      groups: [
        {
          subTitle: "The Two Respiration Equations",
          bullets: [
            "**Aerobic:** glucose + oxygen to carbon dioxide + water (+ energy).",
            "**Anaerobic:** glucose to lactic acid (+ energy).",
            "Aerobic yields much more energy per glucose molecule.",
            "Anaerobic supplies energy fast but causes fatigue and oxygen debt.",
          ],
        },
        {
          subTitle: "Matching Supply to the Activity",
          bullets: [
            "**Aerobic** for long, low-intensity work: distance running, cycling.",
            "**Anaerobic** for short, high-intensity work: sprints, a heavy lift.",
            "Duration and intensity together decide the dominant system.",
            "Intermittent team sports switch between the two repeatedly.",
          ],
        },
        {
          subTitle: "Short-Term Against Long-Term Effects",
          bullets: [
            "Short term: faster heart rate, faster breathing, sweating, fatigue, light-headedness.",
            "Long term: cardiac hypertrophy, lower resting pulse (bradycardia).",
            "Long term also: raised stroke volume, greater tolerance of lactic acid.",
            "EPOC is the short-term oxygen debt repaid after hard anaerobic work.",
          ],
        },
      ],
      examinerTips: [
        "Give the correct word equation and say which system fits the duration and intensity of the example.",
        "For oxygen debt, name lactic acid and explain the high breathing rate as the body removes it.",
        "Keep the four long-term effects separate from the short-term ones; mixing them loses the marks.",
      ],
      commonMistakes: [
        "Saying oxygen is used to build muscle; it is used to break down lactic acid during recovery.",
        "Calling a raised resting heart rate a training benefit; trained performers have a lower one.",
        "Confusing cardiac output with stroke volume when listing long-term effects.",
      ],
      recap: [
        "Summarise the two ways energy is released, with both word equations. [4]",
        "Explain why a sprinter keeps breathing hard after finishing the race. [3]",
        "Describe four long-term effects of regular training on the body. [4]",
        "Name the fuel and products of aerobic respiration. [3]",
      ],
    },
    {
      title: "Simple Biomechanics: Force and Levers",
      body: `### Force, Mass and Acceleration

A **force** is a push or a pull applied to something.

Force equals **mass multiplied by acceleration**, so a bigger force produces a bigger change in speed.

A greater force can cause greater **acceleration**; an opposing force causes **deceleration**.

A heavy object needs more force than a light one to accelerate at the same rate.

### Forces Acting on a Performer

A **moving performer** is pulled down by **gravity**, slowed by **air resistance**, and driven by **muscular force**.

A **sprinter in the blocks** feels gravity, the **ground reaction force** pushing up from the blocks, and small air resistance.

An **object in flight**, such as a ball, is affected by the **force applied at release**, gravity and **air resistance**.

Name all three forces in each situation; that is exactly what the mark scheme lists.

### The Three Classes of Lever

A lever has a **fulcrum** (pivot), a **resistance** (load) and an **effort** (the applied force).

In a **first-class lever** the **fulcrum is in the middle**, between effort and resistance.

In a **second-class lever** the **resistance is in the middle**, between fulcrum and effort.

In a **third-class lever** the **effort is in the middle**, between fulcrum and resistance.

Read the class by finding **which of the three sits in the middle**.

### Levers in the Body

The body uses **third-class levers most often**, where the muscle insertion (effort) lies between joint (fulcrum) and load.

**First class:** extending the elbow, with the elbow as the fulcrum. Nodding the head on the spine works too.

**Second class:** standing on tiptoe, with the ball of the foot as fulcrum and body weight in the middle.

**Third class:** elbow flexion, with the biceps attaching (effort) just in front of the elbow joint (fulcrum).`,
      figure: leverArt,
      groups: [
        {
          subTitle: "Force and Motion",
          bullets: [
            "**Force = mass x acceleration.**",
            "A force is a pull or a push.",
            "More force means more acceleration; an opposing force causes deceleration.",
            "Heavier masses need more force to speed up at the same rate.",
          ],
        },
        {
          subTitle: "Forces in Three Situations",
          bullets: [
            "**Moving performer:** gravity, air resistance, muscular force.",
            "**Sprinter in blocks:** gravity, ground reaction force, air resistance.",
            "**Object in flight:** release force, gravity, air resistance.",
          ],
        },
        {
          subTitle: "The Three Lever Classes",
          bullets: [
            "**First class:** fulcrum in the middle.",
            "**Second class:** resistance in the middle.",
            "**Third class:** effort in the middle.",
            "Most body levers are third class, trading speed for reach.",
          ],
        },
      ],
      examinerTips: [
        "Identify a lever class by naming the middle component first, since fulcrum in the middle defines a first-class lever.",
        "For each lever example, label the fulcrum, resistance and effort on the diagram before writing anything.",
        "In a forces question, list every named force, then add one sentence on how each affects the performer.",
      ],
      commonMistakes: [
        "Placing the effort in the middle and calling it a first-class lever; that order is third class.",
        "Forgetting the ground reaction force on a sprinter in the blocks.",
        "Saying a larger force always means a larger speed, when it is the change in speed (acceleration) that grows.",
      ],
      recap: [
        "State the equation linking force, mass and acceleration. [1]",
        "List the three forces acting on a ball flying through the air. [3]",
        "Identify each class of lever by what sits in the middle, with one body example of each. [6]",
      ],
    },
  ],
};

export const PE_CHAPTER_1: Chapter = chapterOne;
