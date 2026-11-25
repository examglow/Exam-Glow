import type { Chapter } from "./types";

const IMG = "/notes/physics";

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

const motionArt = artPanel([
  {
    src: "ph01-roundabout-velocity.webp",
    alt: "A car driving at steady speed around a circular roundabout with arrows showing its velocity changing direction",
    caption: "Constant speed, changing velocity",
  },
  {
    src: "ph01-free-fall-vacuum.webp",
    alt: "A feather and a hammer falling side by side inside a glass vacuum chamber",
    caption: "In a vacuum all objects fall alike",
  },
]);

const newtonArt = artPanel([
  {
    src: "ph01-terminal-velocity-skydiver.webp",
    alt: "A skydiver under an open parachute falling at steady speed, a downward weight arrow balanced by an upward drag arrow",
    caption: "Terminal velocity: weight balances drag",
  },
  {
    src: "ph01-rocket-recoil.webp",
    alt: "A rocket lifting off while driving exhaust gases downward, with equal and opposite arrows on the rocket and the gases",
    caption: "Action and reaction act on different bodies",
  },
]);

const energyArt = artPanel([
  {
    src: "ph01-roller-coaster-energy.webp",
    alt: "A roller-coaster car dropping from a tall first hill and climbing a shorter second hill",
    caption: "GPE becomes KE, and some is dissipated",
  },
  {
    src: "ph01-hydroelectric-dam.webp",
    alt: "Water falling through pipes inside a dam turns a turbine beside a generator building",
    caption: "Falling water transfers energy to electricity",
  },
]);

const chapterOne: Chapter = {
  number: 1,
  title: "Motion, Forces and Energy",
  intro: `Mechanics asks one question: why do things move exactly the way they do?\n\n**Speed** measures travel, **forces** change motion, and **momentum** is conserved in every collision.\n\nEnergy is never created or destroyed, only transferred between stores.\n\nRead these ideas as one linked chain and the whole chapter becomes a single argument.\n\nYou will learn to read **motion graphs**, apply **Newton's laws**, and use the **SUVAT equations** from Paper 1 to Paper 4.`,
  subheadings: [
    {
      title: "Speed, Velocity and Acceleration",
      body: `### Speed and Velocity Differ by Direction

**Speed** is a scalar: distance ÷ time, magnitude only.

**Velocity** is a vector: displacement ÷ time, with a stated direction.

A car rounding a roundabout at steady speed keeps changing velocity.

Its direction changes, so its velocity changes even though the speed does not.

The artwork for this section shows that car, and a vacuum chamber below.

### Average Against Instantaneous

Average speed equals total distance ÷ total time for the whole journey.

Instantaneous speed is the reading at one single moment.

Read it from a speedometer, or from the gradient of a distance-time graph at a point.

### Acceleration Is a Change in Velocity

Acceleration is the rate of change of velocity, so it is a vector too.

Use a = (v − u) ÷ t, where u is initial and v is final velocity.

A negative value simply means slowing down, which we call deceleration.

### Free Fall Near Earth

In free fall the only force is weight, giving the acceleration g.

Take g = 10 m/s² unless a question says otherwise, always directed downwards.

Speed grows about 10 m/s each second until air resistance matters.

In a vacuum a feather and a hammer fall together, as the artwork shows.

### Worked Example: Average Speed

A sprinter runs 100 m in 12.5 s.

Use v = d ÷ t.

v = 100 ÷ 12.5.

v = 8.0 m/s, to two significant figures.

### Worked Example: Displacement and Velocity

A cyclist rides 300 m east, then 400 m north, in 100 s total.

Total distance = 300 + 400 = 700 m, so average speed = 700 ÷ 100 = 7.0 m/s.

Displacement = √(300² + 400²) = √250000 = 500 m.

Average velocity = 500 ÷ 100 = 5.0 m/s, at 53° east of north.

### Worked Example: Acceleration and Free Fall

A car speeds up from 5 m/s to 25 m/s in 4.0 s.

a = (25 − 5) ÷ 4.0 = 20 ÷ 4.0 = 5.0 m/s².

A ball dropped from rest reaches 30 m/s, so t = (30 − 0) ÷ 10 = 3.0 s.

A car stopping from 20 m/s in 5 s gives a = (0 − 20) ÷ 5 = −4 m/s².`,
      figure: motionArt,
      groups: [
        {
          subTitle: "Speed, Velocity and Acceleration at a Glance",
          bullets: [
            "**Speed:** scalar, v = d ÷ t, measured in m/s.",
            "**Velocity:** vector, displacement ÷ time, needing a stated direction.",
            "**Acceleration:** vector, a = (v − u) ÷ t, measured in m/s².",
            "**Free fall:** g = 10 m/s² downwards, identical for every mass in a vacuum.",
            "**Conversion:** divide km/h by 3.6 for m/s; multiply m/s by 3.6 for km/h.",
          ],
        },
        {
          subTitle: "Getting the Definitions Right",
          bullets: [
            "**Displacement** is the straight-line start-to-finish distance, with direction.",
            "A change of direction at constant speed is still a change of velocity.",
            "Deceleration is acceleration acting opposite to the direction of motion.",
            "Instantaneous speed is a gradient at one point; average speed is total ÷ total.",
          ],
        },
        {
          subTitle: "Working Neatly Earns Marks",
          bullets: [
            "Convert minutes to seconds and km to metres before substituting.",
            "Rearrange first, then substitute, then state the answer with its unit.",
            "Match the significant figures of the data, usually two or three.",
            "Keep at least four significant figures until the final line.",
          ],
        },
      ],
      examinerTips: [
        "Define velocity as the rate of change of displacement; speed in a direction alone can lose the mark.",
        "Write the formula, the substitution, then the answer, so method marks survive an arithmetic slip.",
        "Put units on every final answer: m/s for speed and m/s² for acceleration.",
        "Fix one sign convention and keep every term consistent with it.",
        "For a state command, give one short fact only; do not overwrite a one-mark answer.",
      ],
      commonMistakes: [
        "Adding 300 m and 400 m to get a 700 m displacement; use Pythagoras for the straight line.",
        "Leaving time in minutes; convert 5 min to 300 s before substituting.",
        "Claiming a car on a bend has constant velocity; its direction, so velocity, is changing.",
        "Leaving the speed in km/h when m/s is asked; divide by 3.6 and write the unit.",
        "Rounding mid-calculation, which shifts the final digit; round only at the end.",
      ],
      recap: [
        "Define velocity and state how it differs from speed. [2]",
        "A train travels 2400 m in 120 s at constant speed. Calculate its speed. [2]",
        "A car accelerates uniformly from 4 m/s to 24 m/s in 8.0 s. Calculate its acceleration. [2]",
        "A stone is dropped from rest and falls with g = 10 m/s². Calculate its speed after 2.5 s. [2]",
        "Explain why a satellite in a circular orbit at constant speed is accelerating. [2]",
      ],
    },
    {
      title: "Motion Graphs and the Equations of Motion",
      body: `### Reading a Distance-Time Graph

On a distance-time graph the gradient equals speed.

A straight line means constant speed; a horizontal line means stationary.

A curve means changing speed, and the tangent at a point gives the speed there.

The steeper the line, the faster the motion.

### Reading a Velocity-Time Graph

On a velocity-time graph the gradient equals acceleration.

The area under the graph equals the distance travelled.

Split that area into triangles and rectangles, then add the parts.

Below the time axis the object reverses, so subtract that area for displacement.

### Choosing an SUVAT Equation

The equations of motion apply only when acceleration is constant.

Check for a straight line on the v-t graph, or the word uniform in the question.

The five symbols are s, u, v, a and t.

Pick the equation holding your target unknown plus the three values you know.

### The Four Equations

v = u + at, used when distance s is missing.

s = ut + ½at², used when final velocity v is missing.

v² = u² + 2as, used when time t is missing.

s = ½(u + v)t, used when acceleration a is missing.

### Worked Example: Starting from Rest

A car accelerates from rest at 3.0 m/s² for 6.0 s.

Knowns: u = 0, a = 3.0, t = 6.0, and s is wanted.

Use s = ut + ½at².

s = 0 + ½ × 3.0 × 6.0² = ½ × 3.0 × 36 = 54 m.

### Worked Example: Distance and Velocity

A train speeds up from 10 m/s to 30 m/s over 200 m.

Time is unknown, so use v² = u² + 2as.

Rearrange: a = (v² − u²) ÷ 2s = (900 − 100) ÷ 400 = 2.0 m/s².

Then t = (v − u) ÷ a = 20 ÷ 2.0 = 10 s.

### Worked Example: Ball Thrown Upwards

A ball rises at 15 m/s, with g = 10 m/s².

At the top v = 0, so 0 = 15 − 10t gives t = 1.5 s.

Height s = 15(1.5) − 5(1.5)² = 22.5 − 11.25 = 11.25 m.

On the way down it returns at 15 m/s, so the total time is 3.0 s.

### Worked Example: Distance from a Graph

A cyclist accelerates uniformly from 2 m/s to 10 m/s in 8 s.

Distance = trapezium area = ½ × (2 + 10) × 8 = 48 m.

Acceleration = gradient = (10 − 2) ÷ 8 = 1.0 m/s².`,
      groups: [
        {
          subTitle: "What Each Graph Tells You",
          bullets: [
            "**Distance-time gradient = speed;** flat means stopped, steep means fast.",
            "**Velocity-time gradient = acceleration;** take two points on a straight section.",
            "**Area under a velocity-time graph = distance;** triangles plus rectangles.",
            "Area below the time axis counts as travel in the opposite direction.",
          ],
        },
        {
          subTitle: "The Four SUVAT Equations",
          bullets: [
            "v = u + at when you are missing s.",
            "s = ut + ½at² when you are missing v.",
            "v² = u² + 2as when you are missing t.",
            "s = ½(u + v)t when you are missing a.",
            "All four assume a straight line and a constant acceleration.",
          ],
        },
      ],
      examinerTips: [
        "Label both axes with quantity and unit, and use more than half the grid.",
        "For a curve draw a ruler tangent at the exact point, then take a large triangle.",
        "Show the area working on one line; the method marks sit in the working.",
        "Only use SUVAT when acceleration is constant, otherwise use gradients and areas.",
        "Describe a graph with numbers, since it speeds up then steadies scores nothing.",
      ],
      commonMistakes: [
        "Taking an area from a distance-time graph; area belongs only to velocity-time graphs.",
        "Writing speed = distance × time; rearrange to v = d ÷ t before substituting.",
        "Answering v² = 225 and forgetting the square root, v = 15 m/s.",
        "Using SUVAT on a curved graph where acceleration changes; use a tangent instead.",
        "Reading a time axis that mixes minutes and seconds; convert to seconds first.",
      ],
      recap: [
        "A car accelerates from rest at 2.5 m/s² for 8.0 s. Find its final velocity and distance. [4]",
        "Describe how to find the distance travelled from a velocity-time graph. [2]",
        "A ball is thrown vertically upwards at 20 m/s (g = 10). Calculate the maximum height. [3]",
        "A train decelerates uniformly from 30 m/s to 10 m/s in 100 s. Calculate the distance. [3]",
        "Explain why the equations of motion fail when a car's acceleration is changing. [1]",
      ],
    },
    {
      title: "Mass, Weight and Density",
      body: `### Mass and Weight Are Different

**Mass** is the amount of matter, in kilograms, measured with a balance.

Mass is the same everywhere in the universe.

**Weight** is the gravitational force on that mass, in newtons, measured with a force meter.

Weight changes with location, because it depends on g.

### The Weight Equation

Use W = mg, where g is the gravitational field strength.

Near Earth g is about 10 N/kg; on the Moon only about 1.6 N/kg.

A 60 kg student weighs 600 N on Earth but just 96 N on the Moon.

The mass stays 60 kg in both places; only the weight changed.

### Density Packs Mass into Volume

Density compares mass to volume: ρ = m ÷ V, in kg/m³.

Water has density 1000 kg/m³, and 1 g/cm³ equals 1000 kg/m³.

Oil floats on water because it is less dense than water.

### Measuring Density Three Ways

For a liquid, read mass and volume in a measuring cylinder.

For a regular solid, measure length with a ruler and mass with a balance.

For an irregular solid, use water displacement; the rise in level equals the volume.

Displacement works only if the object sinks and does not dissolve.

### Worked Example: Weight

A 60 kg student stands on Earth, taking g = 10 N/kg.

W = mg = 60 × 10 = 600 N.

On the Moon, W = 60 × 1.6 = 96 N, still with a mass of 60 kg.

### Worked Example: Density of a Cube

A metal cube of side 2.0 cm has a mass of 54 g.

V = 2.0³ = 8.0 cm³.

ρ = 54 ÷ 8.0 = 6.75 g/cm³.

In SI units, 6.75 × 1000 = 6750 kg/m³.

### Worked Example: Irregular Solid

A 156 g stone raises the water level from 50 cm³ to 80 cm³.

V = 80 − 50 = 30 cm³.

ρ = 156 ÷ 30 = 5.2 g/cm³, which is 5200 kg/m³.`,
      groups: [
        {
          subTitle: "Mass, Weight and Field Strength",
          bullets: [
            "**Mass:** scalar, the amount of matter, in kg, unchanged anywhere.",
            "**Weight:** vector, the gravitational force, in N, given by W = mg.",
            "**g:** field strength in N/kg, about 10 on Earth and 1.6 on the Moon.",
            "Do not confuse g, field strength, with G, the universal gravitational constant.",
          ],
        },
        {
          subTitle: "Density and Floating",
          bullets: [
            "ρ = m ÷ V; the SI unit is kg/m³, or g/cm³ for small samples.",
            "An object floats when its average density is below the liquid's density.",
            "A steel ship floats because its hull is mostly air, so average density is low.",
            "Convert g/cm³ to kg/m³ by multiplying by 1000.",
          ],
        },
      ],
      examinerTips: [
        "Define weight as the gravitational force acting on a mass; heaviness earns no mark.",
        "State the g value used, such as taking g = 10 N/kg, in your working.",
        "Convert both mass and volume to SI before using ρ = m ÷ V.",
        "Describe the displacement method as apparatus, steps, then the volume subtraction.",
        "For Moon and Earth comparisons, say mass is unchanged and only weight changes.",
      ],
      commonMistakes: [
        "Quoting weight in kilograms; 60 kg is mass, and its weight is 600 N.",
        "Using the final water level as the volume instead of the rise in level.",
        "Mixing grams with cm³ but labelling the answer kg/m³.",
        "Averaging densities by halving a sum; use total mass ÷ total volume.",
        "Claiming a floating object displaces its own volume; it displaces its own weight.",
      ],
      recap: [
        "Distinguish between mass and weight and state the unit of each. [3]",
        "Calculate the weight of a 2.5 kg book on Earth (g = 10 N/kg). [2]",
        "A student of mass 50 kg is on the Moon (g = 1.6 N/kg). Calculate her weight. [2]",
        "Describe an experiment to measure the density of an irregularly shaped stone. [4]",
        "A metal cube of side 3.0 cm has mass 216 g. Calculate its density in kg/m³. [4]",
      ],
    },
    {
      title: "Newton's Laws of Motion",
      body: `### First Law: Balanced Forces Do Nothing

An object stays at rest, or moves at constant velocity, unless a resultant force acts.

The resistance to that change is called **inertia**.

Passengers lurch forward when a car brakes, because their bodies keep moving.

When the resultant force is zero, there is no acceleration at all.

### Second Law: F = ma

The resultant force equals mass times acceleration, so F = ma.

More force gives more acceleration; more mass needs more force.

The acceleration always points in the direction of the resultant force.

### Third Law: Equal and Opposite

If body A pushes body B, then B pushes A equally and in the opposite direction.

The two forces act at the same time and are of the same type.

They act on different bodies, so they can never cancel each other.

A swimmer pushes water backward, and that water pushes the swimmer forward.

### Terminal Velocity

A skydiver accelerates while weight exceeds air resistance.

Falling faster makes air resistance grow until it equals weight.

The resultant force is then zero, so the acceleration stops.

The steady speed reached is called **terminal velocity**, as the artwork shows.

### Worked Example: Resultant Force

A 1200 kg car accelerates at 2.5 m/s².

F = ma = 1200 × 2.5 = 3000 N.

### Worked Example: Subtract Opposing Forces

A 1500 kg car has 6000 N driving and 1500 N resisting.

Resultant force = 6000 − 1500 = 4500 N.

a = F ÷ m = 4500 ÷ 1500 = 3.0 m/s² in the forward direction.

### Worked Example: Lift Tension

An 800 kg lift accelerates upwards at 1.5 m/s², with g = 10 N/kg.

Its weight is 800 × 10 = 8000 N downwards.

Resultant = T − W = ma, so T = 8000 + 800 × 1.5 = 9200 N.`,
      figure: newtonArt,
      groups: [
        {
          subTitle: "The Three Laws Stated",
          bullets: [
            "**First:** motion changes only when a resultant force acts, else constant velocity.",
            "**Second:** resultant force = mass × acceleration, that is F = ma.",
            "**Third:** forces come in equal and opposite pairs acting on different bodies.",
            "Balanced forces give zero acceleration, which includes simply staying still.",
          ],
        },
        {
          subTitle: "Common Named Forces",
          bullets: [
            "**Weight:** gravity pulling down through the centre of mass.",
            "**Normal force:** the support from a surface, perpendicular to it.",
            "**Friction and drag:** oppose motion and waste kinetic energy as heat.",
            "**Tension:** the pull carried along a stretched rope or cable.",
            "Circular motion needs a resultant force directed towards the centre.",
          ],
        },
      ],
      examinerTips: [
        "Find the resultant force first by subtracting opposing forces, then use F = ma.",
        "Give the direction, since force and acceleration are vectors.",
        "For the Third Law state equal, opposite, simultaneous, same type, different bodies.",
        "Draw a free-body diagram of one object with every force labelled.",
        "Explain with because, linking the observation to the mechanism behind it.",
      ],
      commonMistakes: [
        "Using engine force alone in F = ma while friction still acts against it.",
        "Putting weight in place of mass in F = ma.",
        "Calling a book's weight and the table's support a Third Law pair; they act on one body.",
        "Drawing friction along the direction of motion; friction opposes the motion.",
        "Saying acceleration stops because force runs out; it stops because the resultant force is zero.",
      ],
      recap: [
        "State Newton's First Law of Motion. [1]",
        "A resultant force of 4500 N acts on a 1500 kg car. Calculate the acceleration. [2]",
        "Explain, using the Third Law, how a rocket accelerates where there is nothing to push on. [3]",
        "An 800 kg lift accelerates upwards at 1.5 m/s² (g = 10). Calculate the cable tension. [4]",
        "Describe a skydiver's motion from leaving the aircraft to reaching terminal velocity. [4]",
      ],
    },
    {
      title: "Momentum and Impulse",
      body: `### Momentum Is Mass in Motion

Momentum is p = mv, in kg m/s, and it is a vector.

Direction matters, so a westward momentum is taken as negative.

The total momentum of a closed system never changes.

### Conservation of Momentum

In any collision or explosion, total momentum before equals total momentum after.

This holds whether the collision is elastic or not.

Write m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂, with u before and v after.

### Impulse and Force

Newton's Second Law can also read F = Δp ÷ Δt.

So impulse FΔt equals Δp, the change in momentum.

A fixed change of momentum can come from a small force over a long time.

### Elastic and Inelastic Collisions

Elastic collisions conserve kinetic energy as well as momentum.

Inelastic collisions lose kinetic energy to heat, sound and deformation.

Momentum is still conserved, because it is a vector sum.

### Worked Example: Bullet Momentum

A 0.05 kg bullet leaves a gun at 400 m/s.

p = mv = 0.05 × 400 = 20 kg m/s.

### Worked Example: Sticking Trolleys

A 2.0 kg trolley at 3.0 m/s hits a resting 1.0 kg trolley and they stick.

Momentum before = 2.0 × 3.0 + 1.0 × 0 = 6.0 kg m/s.

After sticking, (2.0 + 1.0)v = 6.0.

So v = 6.0 ÷ 3.0 = 2.0 m/s in the original direction.

### Worked Example: Rebound

A 0.5 kg ball hits a wall at 8 m/s and rebounds at 6 m/s.

Take towards the wall as positive, so p before = +4.0 kg m/s.

p after = 0.5 × (−6) = −3.0 kg m/s.

Δp = −3.0 − 4.0 = −7.0 kg m/s, that is 7.0 away from the wall.

### Worked Example: Rifle Recoil

A 4.0 kg rifle fires a 0.020 kg bullet at 300 m/s.

Momentum before is zero, so 0.020 × 300 + 4.0 × V = 0.

V = −6.0 ÷ 4.0 = −1.5 m/s, which is the recoil speed.`,
      groups: [
        {
          subTitle: "The Equations You Need",
          bullets: [
            "**Momentum:** p = mv, in kg m/s, a vector quantity.",
            "**Force:** resultant force = rate of change of momentum, F = Δp ÷ Δt.",
            "**Impulse:** FΔt = Δp, in N s, equal to the change in momentum.",
            "**Conservation:** m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ for a closed system.",
          ],
        },
        {
          subTitle: "Safety by Extending Time",
          bullets: [
            "Airbags lengthen the stopping time t, so the force falls for the same Δp.",
            "Crumple zones collapse slowly, extending the crash and lowering the force.",
            "Seatbelts spread the force over a larger area and over more time.",
            "Bending the knees on landing raises stopping time and cuts leg force.",
          ],
        },
      ],
      examinerTips: [
        "Choose a positive direction first and give every velocity a sign.",
        "Write momentum before and after on separate lines, as the structure earns marks.",
        "After objects stick, use one common velocity and the combined mass.",
        "To explain safety, name F = Δp ÷ Δt, fix Δp, then lengthen t to cut F.",
        "Use Δp = p final − p initial in that order; rebounds flip the sign of the final value.",
      ],
      commonMistakes: [
        "Adding momenta as if scalars in rebounds and explosions; the signs decide the sum.",
        "Treating a rebound at 6 m/s as positive; if it returns, its velocity is negative.",
        "Using separate velocities after a sticking collision instead of (m₁ + m₂)v.",
        "Thinking momentum is lost in an inelastic crash; it is kinetic energy that drops.",
        "Leaving mass in grams or speed in km/h; convert to kg and m/s first.",
      ],
      recap: [
        "Define momentum and state its unit. [2]",
        "Calculate the momentum of a 70 kg runner moving at 4.0 m/s. [2]",
        "A 3.0 kg trolley at 4.0 m/s hits a resting 1.0 kg trolley and they stick. Find the velocity. [3]",
        "Explain, using the impulse equation, how crumple zones reduce injury in a crash. [3]",
        "A 0.060 kg ball hits a racket at 15 m/s and returns at 20 m/s. Calculate the change in momentum. [3]",
      ],
    },
    {
      title: "Moments and Centre of Mass",
      body: `### The Moment of a Force

A moment is the turning effect of a force about a pivot.

Moment = force × perpendicular distance, so M = Fd, in N m.

Only the perpendicular distance counts, never the distance along the beam.

Pushing near a hinge gives almost no moment, but the same force at the handle swings a door.

### Principle of Moments

For a body in equilibrium, it neither turns nor accelerates.

The sum of clockwise moments equals the sum of anticlockwise moments about any point.

The resultant force must also be zero.

### Centre of Mass

The **centre of mass** is the point where the whole weight appears to act.

For a uniform regular shape it sits at the geometric centre.

An object topples when the vertical line of its weight falls outside its base.

A low, wide base raises stability, as in racing cars and table lamps.

### Worked Example: Simple Moment

A 4.0 N weight sits 0.30 m from a pivot.

M = Fd = 4.0 × 0.30 = 1.2 N m clockwise.

### Worked Example: Balanced Beam

A beam pivots at its centre, with 6.0 N hanging 0.40 m to the left.

Where must a 4.0 N weight hang on the right to balance it?

Set the moments equal: 4.0 × d = 6.0 × 0.40 = 2.4 N m.

So d = 2.4 ÷ 4.0 = 0.60 m.

### Worked Example: Two Weights on One Side

A uniform 2.0 m beam pivots at its centre.

A 5.0 N weight hangs 0.5 m left and a 3.0 N weight hangs 1.0 m left.

Total anticlockwise moment = 5.0 × 0.5 + 3.0 × 1.0 = 5.5 N m.

So W × 0.40 = 5.5, giving W = 5.5 ÷ 0.40 = 13.75 N, about 14 N.

### Worked Example: Weight of a Plank

A 3.0 m plank pivots 1.0 m from its left end and weighs 20 N.

Its weight acts at the centre, 1.5 m from the left end.

Distance from the pivot = 1.5 − 1.0 = 0.5 m.

Moment of the weight = 20 × 0.5 = 10 N m.

### Finding the Centre of Mass

Hang a card from a pin and draw a plumb line from the same pin.

Repeat from a second hole, and the two lines cross at the centre of mass.`,
      groups: [
        {
          subTitle: "Moments and Equilibrium",
          bullets: [
            "M = Fd, where d is the perpendicular distance from pivot to the force line.",
            "For equilibrium, clockwise moments equal anticlockwise moments about any point.",
            "Equilibrium also needs the resultant force to be zero.",
            "Take moments where an unknown force acts, so that force drops out.",
          ],
        },
        {
          subTitle: "Centre of Mass and Stability",
          bullets: [
            "The centre of mass is where the whole weight appears to act.",
            "An object topples when its weight line falls outside the base.",
            "Lower the centre of mass and widen the base for more stability.",
            "A freely suspended body rests with its centre of mass below the pivot.",
          ],
        },
      ],
      examinerTips: [
        "Mark the right angle between the force line and the distance; moments use perpendicular d.",
        "Include the beam's own weight acting at its midpoint.",
        "Set out clockwise and anticlockwise moments in two columns before equating them.",
        "For stability give the chain: centre of mass, weight line, inside or outside base, turning.",
        "State both equilibrium conditions, the moments and the resultant force.",
      ],
      commonMistakes: [
        "Measuring the distance along the beam; use the perpendicular distance to the force line.",
        "Forgetting that a uniform plank's weight acts at its centre.",
        "Reporting moments in N cm when N m is asked; convert cm to m first.",
        "Assuming the centre of mass is always the geometric centre; that needs uniform density.",
        "Adding clockwise and anticlockwise moments together; keep the two senses apart.",
      ],
      recap: [
        "Define the moment of a force and state its unit. [2]",
        "A force of 12 N acts at 0.25 m from a pivot. Calculate the moment. [2]",
        "An 8.0 N weight hangs 0.30 m left of a centre pivot. Find the weight that balances it at 0.20 m. [3]",
        "Describe an experiment to find the centre of mass of an irregular card. [4]",
        "Explain, using moments, why pushing near the handle opens a door more easily. [3]",
      ],
    },
    {
      title: "Work, Energy and Power",
      body: `### Work Transfers Energy

Work is done when a force moves its point of application.

Use W = Fd, in joules; one joule is one newton moving one metre.

Energy is the capacity to do work, stored in many different ways.

### The Energy Stores

Kinetic energy is the energy of movement.

Gravitational potential energy is the energy of height.

Elastic, chemical, thermal, nuclear and magnetic stores also carry energy.

### The Two Key Formulas

Kinetic energy is KE = ½mv².

Gravitational potential energy is GPE = mgh.

Here h is the vertical height change and g is 10 N/kg.

### Conservation of Energy

Energy cannot be created or destroyed, only transferred between stores.

Some always dissipates, usually as thermal energy to the surroundings.

A falling ball turns its GPE into KE, as the roller-coaster artwork shows.

### Power and Efficiency

Power is the rate of doing work, so P = W ÷ t, in watts.

It can also be written as P = E ÷ t or P = Fv.

Efficiency = useful output ÷ total input × 100%, always below 100%.

### Worked Example: Kinetic Energy

A 1200 kg car travels at 20 m/s.

KE = ½mv² = ½ × 1200 × 20².

KE = ½ × 1200 × 400 = 240,000 J, that is 240 kJ.

### Worked Example: Falling Ball

A 0.2 kg ball falls 5.0 m with no air resistance.

GPE lost = mgh = 0.2 × 10 × 5.0 = 10 J.

So KE at the bottom is 10 J, giving v² = 2 × 10 ÷ 0.2 = 100.

v = 10 m/s.

### Worked Example: Crane Power

A crane lifts a 500 kg load through 8.0 m in 10 s.

Work done = Fd = 500 × 10 × 8.0 = 40,000 J.

P = W ÷ t = 40,000 ÷ 10 = 4000 W.

### Worked Example: Efficiency

A motor takes in 1000 J and delivers 650 J of useful work.

Efficiency = 650 ÷ 1000 × 100% = 65%.

The wasted 350 J leaves as thermal energy.`,
      figure: energyArt,
      groups: [
        {
          subTitle: "The Energy Equations",
          bullets: [
            "**Work:** W = Fd, in J, with the force along the direction of motion.",
            "**Kinetic energy:** KE = ½mv², in J.",
            "**Gravitational potential energy:** GPE = mgh, in J.",
            "**Power:** P = W ÷ t = E ÷ t = Fv, measured in watts.",
            "**Efficiency:** useful output ÷ total input × 100%, always below 100%.",
          ],
        },
        {
          subTitle: "Why Energy Is Never Fully Useful",
          bullets: [
            "Friction, air resistance and electrical resistance waste energy as heat.",
            "Sound and vibration carry a small amount of energy away too.",
            "A pendulum swings lower as energy leaks to the air and the pivot.",
            "Useful plus wasted outputs always add up to the total input.",
          ],
        },
      ],
      examinerTips: [
        "Square the speed first in ½mv²; do not square the whole term.",
        "Draw the energy chain, such as GPE to KE plus thermal, for the transfer marks.",
        "For efficiency divide the useful output by the total input, never by the waste.",
        "Name where wasted energy goes, for example thermal energy in the brakes.",
        "Always write the substituted line; it earns method marks even if the final division slips.",
      ],
      commonMistakes: [
        "Computing ½mv × v as ½m × 2v; square the speed fully first.",
        "Measuring height along a slope; GPE needs the vertical height change.",
        "Getting an efficiency above 100% by dividing the input by the output.",
        "Reporting energy in joules when power in watts is asked; divide by the time.",
        "Saying a battery stores power; it stores energy, and power is the rate of transfer.",
      ],
      recap: [
        "Calculate the kinetic energy of a 900 kg car travelling at 30 m/s. [2]",
        "A 0.4 kg ball is dropped from 20 m. Find its kinetic energy and speed at the ground. [4]",
        "A machine uses 5000 J to do 3500 J of useful work. Calculate its efficiency. [2]",
        "A student of weight 500 N climbs 3.0 m of stairs in 4.0 s. Calculate her power. [3]",
        "Explain why the brakes of a car become hot when the car stops. [2]",
      ],
    },
    {
      title: "Pressure",
      body: `### Pressure Is Force over Area

Pressure is force per unit area, so p = F ÷ A, in pascals.

One pascal equals one newton per square metre.

The same force spread over a larger area gives a smaller pressure.

Snowshoes spread a walker's weight, while a knife or needle concentrates the force.

### Pressure in a Liquid

Liquid pressure grows with depth, caused by the weight of the fluid above.

The extra pressure at depth h is given by p = ρgh.

At a given depth, the pressure acts equally in every direction.

Atmospheric pressure, about 1.0 × 10⁵ Pa, is the weight of all the air above.

It falls with altitude, because there is then less air above pushing down.

### Hydraulics Multiply Force

Pascal's principle: pressure passes undiminished through an enclosed liquid.

A small force on a small piston sets up p = F₁ ÷ A₁.

The same pressure on a big piston gives a bigger force F₂ = p × A₂.

So car brakes and lifts multiply the applied force.

### Upthrust and Floating

Pressure is greater on the underside of a submerged object than on top.

This difference gives a net upward force, the upthrust.

An object floats when its weight equals the upthrust.

### Worked Example: Solid Pressure

A box weighs 600 N and stands on a base of 0.40 m².

p = F ÷ A = 600 ÷ 0.40 = 1500 Pa.

### Worked Example: Brick in Two Positions

A 30 N brick has faces of 0.020 m² and 0.0050 m².

On the large face, p = 30 ÷ 0.020 = 1500 Pa.

On the small face, p = 30 ÷ 0.0050 = 6000 Pa.

Same force, but four times the pressure.

### Worked Example: Liquid Pressure

Find the water pressure at 2.0 m depth, with ρ = 1000 kg/m³.

p = ρgh = 1000 × 10 × 2.0 = 20,000 Pa.

Total pressure adds the 100,000 Pa atmosphere, giving 120,000 Pa.

### Worked Example: Hydraulic Force

A 50 N force acts on a piston of area 0.0010 m².

The pressure set up is p = 50 ÷ 0.0010 = 50,000 Pa.

On a 0.050 m² piston, F = pA = 50,000 × 0.050 = 2500 N.`,
      groups: [
        {
          subTitle: "The Pressure Equations",
          bullets: [
            "**Pressure:** p = F ÷ A, in Pa, where 1 Pa = 1 N/m².",
            "**Liquid pressure:** p = ρgh, the excess over atmospheric pressure.",
            "**Hydraulics:** F₁ ÷ A₁ = F₂ ÷ A₂, so force grows with piston area.",
            "Convert cm² to m² by multiplying by 10⁻⁴ before using p = F ÷ A.",
          ],
        },
        {
          subTitle: "Pressure Ideas in the Real World",
          bullets: [
            "A sharp knife cuts because a small area means a high pressure.",
            "Dams are built thicker at the bottom, where water pressure is greatest.",
            "A submarine floods ballast to raise its average density and sink.",
            "Suction pumps cannot lift water above about 10 m, matching atmospheric pressure.",
          ],
        },
      ],
      examinerTips: [
        "Convert every area to m² first; unit slips cause most wrong pressure answers.",
        "Explain liquid pressure by the weight of the fluid above the point.",
        "Add atmospheric pressure only when the question asks for total pressure.",
        "For hydraulics state that pressure is transmitted equally, then calculate F₂.",
        "Say pressure in a liquid acts in all directions when explaining upthrust.",
      ],
      commonMistakes: [
        "Leaving the area in cm² when dividing the force by it.",
        "Writing p = ρh and forgetting to include g = 10 N/kg.",
        "Assuming the large piston creates the pressure; the small piston does.",
        "Describing pressure as a substance that wants to escape; it is force per unit area.",
        "Confusing pressure with force; it is the resultant force that causes motion.",
      ],
      recap: [
        "A force of 200 N acts on an area of 0.50 m². Calculate the pressure. [2]",
        "Explain why a sharp knife cuts more easily than a blunt one. [2]",
        "Calculate the pressure due to water at a depth of 30 m (ρ = 1000 kg/m³, g = 10). [2]",
        "A jack has pistons of 0.0020 m² and 0.10 m² with 100 N on the small one. Find the output force. [3]",
        "Explain why a person floats more easily in the sea than in a freshwater lake. [2]",
      ],
    },
  ],
};

export const PHYSICS_CHAPTER_1: Chapter = chapterOne;
