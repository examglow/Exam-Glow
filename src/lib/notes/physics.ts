import type { SubjectNotes } from "./types";

export const PHYSICS: SubjectNotes = {
  id: "physics",
  name: "Physics",
  code: "0625",
  color: "bg-purple-500",
  chapters: [
    {
      number: 1,
      title: "Motion, Forces and Energy",
      intro: "Mechanics is the study of how and why objects move — the oldest branch of physics and still the foundation of engineering, sport science and space flight. Every calculation in this chapter rests on a handful of linked ideas: speed measures how fast something travels, forces change motion, momentum is conserved in every collision, and energy is never created or destroyed, only transferred between stores. You will learn to read motion graphs like a language, apply Newton's three laws to everyday situations, and use the equations of uniform acceleration that carry you from Paper 1 to the hardest Paper 4 questions. Master the equations early, write every line of working with units, and practise drawing clear labelled diagrams — these habits earn marks in every mechanics question.",
      subheadings: [
        {
          title: "Speed, Velocity and Acceleration",
          body: "Speed tells you how fast an object covers distance; velocity tells you how fast it changes position in a particular direction. Speed is a scalar quantity (magnitude only) while velocity is a vector (magnitude and direction), and the difference matters the moment an object changes direction — a car circling a roundabout at steady speed is constantly changing velocity because its direction is changing. Average speed is v = d/t (speed = distance ÷ time), with the metre per second (m/s) the SI unit; km/h converts to m/s by dividing by 3.6.\n\nAcceleration is the rate of change of velocity: a = (v − u)/t, where u is initial velocity, v is final velocity and t is time taken. Acceleration is a vector too, so a negative value simply means velocity is decreasing — called deceleration. Near Earth's surface, free-fall acceleration g is 9.8 m/s² (use 10 m/s² unless told otherwise) and is always directed downwards towards the centre of the Earth. A falling object does not fall at constant speed: it gains about 10 m/s of speed every second until air resistance becomes significant.\n\n## Formula summary\n| Quantity | Equation | Symbols and units |\n| --- | --- | --- |\n| Speed | v = d/t | v speed (m/s), d distance (m), t time (s) |\n| Acceleration | a = (v − u)/t | a acceleration (m/s²), u, v velocity (m/s) |\n\nRearrange before substituting, and convert minutes to seconds and km to metres before calculating.",
          groups: [
            {
              subTitle: "Speed and velocity — key distinctions",
              bullets: [
                "**Scalar or vector:** Speed is scalar — '50 m/s' is complete. Velocity needs a direction — '50 m/s due north'. Any change of direction, even at constant speed, means velocity is changing.",
                "**Average vs instantaneous:** Average speed = total distance ÷ total time for a journey. Instantaneous speed is the speed at one moment, read from a speedometer or from the gradient of a distance-time graph at a point.",
                "**Worked example — easy:** A sprinter runs 100 m in 12.5 s. **Step 1 —** Equation: v = d/t. **Step 2 —** Substitute: v = 100 ÷ 12.5. **Step 3 —** v = **8.0 m/s** (two significant figures, matching the data).",
                "**Unit conversion:** 72 km/h ÷ 3.6 = **20 m/s**. To convert m/s back to km/h, multiply by 3.6. Work in SI units (m, s, m/s) unless told otherwise.",
                "**Worked example — hard (vectors):** A cyclist rides 300 m east then 400 m north in 100 s total. **Step 1 —** Total distance = 300 + 400 = 700 m, so average speed = 700 ÷ 100 = **7.0 m/s**. **Step 2 —** Displacement = √(300² + 400²) = √250,000 = 500 m (a 3-4-5 triangle scaled by 100). **Step 3 —** Average velocity = 500 ÷ 100 = **5.0 m/s at 53° east of north**."
              ]
            },
            {
              subTitle: "Acceleration calculations",
              bullets: [
                "**Worked example — easy:** A car accelerates from 5 m/s to 25 m/s in 4.0 s. **Step 1 —** a = (v − u)/t = (25 − 5) ÷ 4.0. **Step 2 —** a = 20 ÷ 4.0 = **5.0 m/s²**.",
                "**Worked example — hard (free fall):** A ball dropped from a cliff hits the water at 30 m/s; g = 10 m/s². **Step 1 —** u = 0 (dropped, not thrown). **Step 2 —** Rearrange t = (v − u)/a = (30 − 0) ÷ 10 = **3.0 s**. **Step 3 —** Sign check: with downwards negative, u = 0, v = −30 m/s, a = −10 m/s² gives the same 3.0 s — signs must be consistent.",
                "**Deceleration signs:** A car stopping from 20 m/s in 5 s has a = (0 − 20)/5 = **−4 m/s²**; state 'deceleration of 4 m/s²' to show you understand the sign.",
                "**Free-fall facts:** In a vacuum a feather and a hammer fall together — air resistance, not mass, causes everyday differences. g is approximately constant near Earth's surface."
              ]
            }
          ],
          examinerTips: [
            "**Define with 'rate of change':** 'Define velocity' needs 'rate of change of displacement' — 'speed in a direction' alone loses the definition mark.",
            "**Show the rearrangement:** Write a = (v − u)/t, then the substituted numbers, then the answer — method marks survive an arithmetic slip.",
            "**Units on every answer:** m/s for speed, m/s² for acceleration; a bare number earns no unit mark.",
            "**State the sign convention:** Write 'taking upwards as positive' before vector calculations and keep every term consistent with it.",
            "**Command word 'state':** Needs one short fact only — do not overwrite a 1-mark answer.",
            "**Two to three significant figures:** Match the precision of the data; rounding to 1 s.f. loses the accuracy mark."
          ],
          commonMistakes: [
            "**Distance vs displacement:** Adding 300 m + 400 m to get 'displacement 700 m'. Fix: displacement is straight-line start-to-finish distance — sketch the right-angled triangle and use Pythagoras.",
            "**Minutes not converted:** Using t = 5 minutes as '5' in v = d/t. Fix: convert all times to seconds (5 min = 300 s) before substituting.",
            "**g sign inconsistency:** A ball thrown upwards has positive launch velocity but negative acceleration all the way. Fix: fix one sign convention for the whole question.",
            "**Direction ignored:** Claiming a car rounding a bend at steady speed has constant velocity. Fix: constant velocity requires constant speed AND constant direction.",
            "**Premature rounding:** Rounding mid-calculation shifts the final digit. Fix: keep at least 4 significant figures until the final line.",
            "**km/h left as an answer:** Leaving speed in km/h when m/s is required. Fix: divide by 3.6 and write the correct unit."
          ],
          recap: [
            "Define velocity and state how it differs from speed. [2]",
            "A train travels 2400 m in 120 s at constant speed. Calculate its speed. [2]",
            "A car accelerates uniformly from 4 m/s to 24 m/s in 8.0 s. Calculate its acceleration. [2]",
            "A stone is dropped from rest and falls with g = 10 m/s². Calculate its speed after 2.5 s. [2]",
            "A cyclist travels 5.0 km in 20 minutes. Calculate the average speed in m/s. [3]",
            "Explain why a satellite in a circular orbit at constant speed is accelerating. [2]"
          ]
        },
        {
          title: "Motion Graphs and the Equations of Motion",
          body: "Graphs let you see a whole journey at once. On a distance-time graph the gradient equals speed: a straight line means constant speed, a horizontal line means stationary, and a curve means changing speed — the steeper the line, the faster the motion. To find the speed at one instant from a curve, draw a tangent at that point and find its gradient (rise ÷ run). On a velocity-time graph the gradient equals acceleration and the area under the graph equals the distance travelled; a negative velocity means travel in the opposite direction, and the negative area counts as reverse displacement.\n\nFor uniform (constant) acceleration, four equations of motion — often called SUVAT from the symbols s, u, v, a, t — connect any four of the five quantities. They are only valid when acceleration is constant, which you can check from a straight line on the velocity-time graph or the word 'uniform' in the question. Choose the equation containing your target unknown plus the three values you know.\n\n## Formula summary (SUVAT)\n| Equation | Use when | Missing quantity |\n| --- | --- | --- |\n| v = u + at | velocities and time | s |\n| s = ut + ½at² | distance travelled | v |\n| v² = u² + 2as | time not involved | t |\n| s = ½(u + v)t | both velocities known | a |\n\n> The equations of motion assume motion in a straight line with constant acceleration. If acceleration changes, you must use the graph instead.",
          groups: [
            {
              subTitle: "Reading motion graphs",
              bullets: [
                "**Distance-time gradient = speed:** For a straight section, speed = change in distance ÷ change in time between two points on the line.",
                "**Horizontal line on a d-t graph:** The object is stationary — time passes but distance does not change.",
                "**Velocity-time gradient = acceleration:** Pick two points on a straight section: a = (v₂ − v₁)/(t₂ − t₁).",
                "**Area under a v-t graph = distance:** Split the region into triangles (½ × base × height) and rectangles, then add; axes in m/s and s give area in metres.",
                "**Below the time axis:** Motion in the opposite direction; the area is still a distance, but subtract it when finding displacement."
              ]
            },
            {
              subTitle: "SUVAT worked examples",
              bullets: [
                "**Worked example — easy:** A car starts from rest and accelerates at 3.0 m/s² for 6.0 s. **Step 1 —** List knowns: u = 0, a = 3.0, t = 6.0, find s. **Step 2 —** Choose s = ut + ½at². **Step 3 —** s = 0 + ½ × 3.0 × 6.0² = ½ × 3.0 × 36 = **54 m**.",
                "**Worked example — medium:** A train accelerates from 10 m/s to 30 m/s over 200 m. **Step 1 —** Known: u = 10, v = 30, s = 200; t unknown, so use v² = u² + 2as. **Step 2 —** Rearrange: a = (v² − u²)/2s = (900 − 100) ÷ 400 = **2.0 m/s²**. **Step 3 —** Then t = (v − u)/a = 20 ÷ 2.0 = **10 s**.",
                "**Worked example — hard (two stages):** A ball is thrown upwards at 15 m/s; g = 10 m/s². **Stage 1 (up):** at the top v = 0, so 0 = 15 − 10t gives t = **1.5 s**; height s = ut + ½at² = 15(1.5) − 5(1.5)² = 22.5 − 11.25 = **11.25 m**. **Stage 2 (down):** v² = u² + 2as = 0 + 2 × 10 × 11.25 = 225, so v = **15 m/s downwards**; time 1.5 s again. Total time **3.0 s** — the return speed equals the launch speed.",
                "**Worked example — from a graph:** A cyclist accelerates uniformly from 2 m/s to 10 m/s in 8 s. Distance = trapezium area = ½ × (2 + 10) × 8 = **48 m**; acceleration = gradient = (10 − 2) ÷ 8 = **1.0 m/s²**."
              ]
            }
          ],
          examinerTips: [
            "**Label both axes:** Quantity and unit on every graph (time/s, velocity/m/s), using more than half the grid — unlabelled axes lose marks.",
            "**Tangent for curves:** Draw the tangent with a ruler touching the curve at the exact point, then use a large triangle to reduce gradient error.",
            "**Show the area working:** Write 'area = ½ × 6 × 4 + 6 × 2 = 24 m' — method marks come from the working, not the answer alone.",
            "**Distance or displacement:** Read carefully — distance uses the total area; displacement subtracts the region below the axis.",
            "**Describe with numbers:** 'Accelerates at 2 m/s² for 3 s then constant velocity 6 m/s' scores where 'it speeds up then steadies' does not.",
            "**SUVAT needs constant acceleration:** Only use the equations when the question says 'uniform' or the v-t graph is straight; otherwise use gradients and areas."
          ],
          commonMistakes: [
            "**Swapping the graph rules:** Using 'area' on a distance-time graph. Fix: d-t graphs give speed from gradient only; v-t graphs give acceleration (gradient) and distance (area).",
            "**Inverted speed formula:** Writing speed = distance × time. Fix: cover the wanted symbol in the formula triangle — v = d/t, t = d/v, d = vt.",
            "**Forgetting the square root:** Answering v² = 225 instead of v = 15 m/s. Fix: underline the target quantity before starting.",
            "**Mixed time units:** Reading a graph where the axis mixes minutes and seconds. Fix: convert everything to seconds first.",
            "**SUVAT on curved graphs:** The equations fail when acceleration varies. Fix: for curves, take a tangent gradient for acceleration and count squares for distance.",
            "**Wrong sign for g on the way up:** Using a = +10 while the ball rises. Fix: g acts downwards throughout the flight."
          ],
          recap: [
            "A car accelerates from rest at 2.5 m/s² for 8.0 s. Calculate its final velocity and the distance travelled. [4]",
            "Describe how to find the distance travelled from a velocity-time graph. [2]",
            "A ball is thrown vertically upwards at 20 m/s (g = 10 m/s²). Calculate the maximum height reached. [3]",
            "A train decelerates uniformly from 30 m/s to 10 m/s in 100 s. Calculate the distance travelled. [3]",
            "Explain why the equations of motion cannot be used for a car whose acceleration is changing. [1]",
            "The velocity-time graph of a car is a horizontal line at 15 m/s for 20 s. Calculate the distance travelled. [2]"
          ]
        },
        {
          title: "Mass, Weight and Density",
          body: "Mass is the amount of matter in an object, measured in kilograms (kg) with a balance; it is the same everywhere in the universe. Weight is the gravitational force acting on that mass, W = mg, measured in newtons (N) with a force meter (spring balance); on the Moon the same mass weighs about one-sixth as much because the Moon's gravitational field strength is only about 1.6 N/kg. Gravitational field strength g is the force per unit mass at a place — about 9.8 N/kg at Earth's surface (use 10 N/kg in calculations unless told otherwise). Weight is a force, so it is a vector; mass is a scalar.\n\nDensity compares how much matter is packed into a volume: ρ = m/V, in kg/m³ (g/cm³ is common for small samples; 1 g/cm³ = 1000 kg/m³). Water has density 1000 kg/m³, and oils float on water because they are less dense. Density of a liquid: measure mass and volume in a measuring cylinder. Density of a regular solid: measure with a ruler and balance. Density of an irregular solid: use a displacement (eureka) can or measuring cylinder — the rise in water level equals the solid's volume, which only works if the solid sinks and does not dissolve.\n\n## Formula summary\n| Quantity | Equation | Symbols and units |\n| --- | --- | --- |\n| Weight | W = mg | W weight (N), m mass (kg), g field strength (N/kg) |\n| Density | ρ = m/V | ρ density (kg/m³), m mass (kg), V volume (m³) |",
          groups: [
            {
              subTitle: "Weight and gravity",
              bullets: [
                "**g vs G:** g ≈ 10 N/kg is the gravitational field strength near Earth's surface (weight per kilogram); G is the universal gravitational constant — do not confuse the two symbols.",
                "**Worked example — easy:** A 60 kg student on Earth (g = 10 N/kg). **Step 1 —** W = mg. **Step 2 —** W = 60 × 10 = **600 N**.",
                "**Worked example — hard (Moon comparison):** The same student on the Moon (g = 1.6 N/kg): W = 60 × 1.6 = **96 N**. The mass is still 60 kg — only the weight changed.",
                "**Weightlessness in orbit:** Astronauts are not beyond gravity; they and their craft are both falling freely around Earth, so no support force acts and apparent weight is zero."
              ]
            },
            {
              subTitle: "Density calculations",
              bullets: [
                "**Worked example — easy:** A block has mass 240 g and volume 30 cm³. **Step 1 —** ρ = m/V = 240 ÷ 30 = **8.0 g/cm³**.",
                "**Worked example — unit conversion:** A metal cube of side 2.0 cm has mass 54 g. **Step 1 —** V = 2.0³ = 8.0 cm³. **Step 2 —** ρ = 54 ÷ 8.0 = 6.75 g/cm³. **Step 3 —** In SI: 6.75 × 1000 = **6750 kg/m³**.",
                "**Worked example — irregular solid:** A stone of mass 156 g raises the water level in a measuring cylinder from 50 cm³ to 80 cm³. **Step 1 —** V = 80 − 50 = 30 cm³. **Step 2 —** ρ = 156 ÷ 30 = **5.2 g/cm³ = 5200 kg/m³**.",
                "**Floating rule:** An object floats when its average density is less than the liquid's density — a steel ship floats because the hull is mostly air, so average density is below 1000 kg/m³."
              ]
            }
          ],
          examinerTips: [
            "**Define weight precisely:** Use 'the gravitational force acting on a mass' — 'heaviness' earns no mark.",
            "**State the g value:** Write 'taking g = 10 N/kg' in your working; if the question gives 9.8, use 9.8.",
            "**Convert before substituting:** g/cm³ → kg/m³ by ×1000, and cm³ → m³ by ×10^-6, before using ρ = m/V.",
            "**Describe the displacement method:** For 'describe' questions, list the apparatus (balance, measuring cylinder, water), the steps, and the volume subtraction.",
            "**Check units match the answer line:** kg/m³ when mass and volume are in kg and m³; g/cm³ when they are in g and cm³.",
            "**Compare mass and weight correctly:** For Moon/Earth comparisons, state that mass is unchanged and only weight changes because g changes."
          ],
          commonMistakes: [
            "**kg used for weight:** 'The student's weight is 60 kg' — that is mass. Fix: weight = 600 N; forces are always in newtons.",
            "**cm³ not converted:** Mixing g with cm³ then labelling the answer kg/m³. Fix: convert both quantities to SI first.",
            "**Reading the wrong volume:** Using the final water level instead of the rise. Fix: V(object) = V(final) − V(initial).",
            "**Averaging densities:** Adding two densities and halving. Fix: average density = total mass ÷ total volume.",
            "**Mass 'changing' in space:** Fix: mass is the amount of matter and is invariant; weight depends on g.",
            "**Floating object displacement error:** A floating object only displaces its own weight of water. Fix: sink it fully with a weight, or find volume another way."
          ],
          recap: [
            "Distinguish between mass and weight and state the unit of each. [3]",
            "Calculate the weight of a 2.5 kg book on Earth (g = 10 N/kg). [2]",
            "A student has a mass of 50 kg. Calculate her weight on the Moon where g = 1.6 N/kg. [2]",
            "Describe an experiment to measure the density of an irregularly shaped stone. [4]",
            "A metal cube of side 3.0 cm has a mass of 216 g. Calculate its density in kg/m³. [4]",
            "Explain why a block of steel sinks in water but a steel ship floats. [2]"
          ]
        },
        {
          title: "Newton's Laws of Motion",
          body: "Newton's First Law: an object remains at rest, or continues at constant velocity, unless a resultant (unbalanced) force acts on it. This tendency to resist change is inertia — passengers lurch forward in a braking car because their bodies keep moving while the car slows. When forces are balanced (resultant = 0) there is no acceleration: the object stays still or keeps its velocity exactly.\n\nNewton's Second Law: the resultant force on an object equals the rate of change of momentum, F = ma for constant mass. Greater force gives greater acceleration; greater mass needs greater force for the same acceleration. Acceleration is always in the direction of the resultant force. Newton's Third Law: when body A exerts a force on body B, body B exerts an equal and opposite force on body A — simultaneously, of the same type, but acting on different objects. The gravitational pull of a book on the Earth is equal to the Earth's pull on the book.\n\n## Formula summary\n| Quantity | Equation | Symbols and units |\n| --- | --- | --- |\n| Resultant force | F = ma | F force (N), m mass (kg), a acceleration (m/s²) |\n\nA free-body (force) diagram shows every force acting on ONE object — draw it before any F = ma calculation.",
          groups: [
            {
              subTitle: "Applying the three laws",
              bullets: [
                "**Worked example — easy:** A 1200 kg car accelerates at 2.5 m/s². **Step 1 —** F = ma. **Step 2 —** F = 1200 × 2.5 = **3000 N**.",
                "**Worked example — hard (resultant force):** A 1500 kg car engine provides 6000 N forward; friction and air resistance total 1500 N. **Step 1 —** Resultant force = 6000 − 1500 = 4500 N. **Step 2 —** a = F/m = 4500 ÷ 1500 = **3.0 m/s²** in the forward direction.",
                "**Worked example — finding mass:** A rocket engine thrust of 25,000 N gives an acceleration of 5.0 m/s². **Step 1 —** Rearrange m = F/a. **Step 2 —** m = 25,000 ÷ 5.0 = **5000 kg**.",
                "**Third-law pairs:** A swimmer pushes water backwards (action); the water pushes the swimmer forwards (reaction). The forces are equal and opposite but act on different bodies — they never cancel on the same body.",
                "**Terminal velocity:** A skydiver accelerates until air resistance equals weight; the resultant force is then zero, so by the First Law the velocity stops changing — terminal velocity is reached."
              ]
            },
            {
              subTitle: "Forces in everyday situations",
              bullets: [
                "**Friction and drag:** Act opposite to motion; convert kinetic energy to thermal energy; reduced by streamlining, lubrication and smooth surfaces.",
                "**Normal contact force:** The support force from a surface, perpendicular to it; it equals weight for an object resting on a horizontal surface with no other vertical forces.",
                "**Tension:** The pull force in a stretched rope or cable; in a tug-of-war the rope transmits equal tension to both teams.",
                "**Free-fall and weightlessness:** In a lift cable cut free, the support force vanishes; apparent weight is zero although gravity still acts — this is how 'weightlessness' is produced in training aircraft.",
                "**Circular motion needs a resultant force:** A ball on a string moves in a circle because the tension provides a resultant force towards the centre, constantly changing the direction of the velocity."
              ]
            }
          ],
          examinerTips: [
            "**Say 'resultant force':** Marks are awarded for identifying the unbalanced force — always subtract opposing forces before using F = ma.",
            "**Direction in answers:** Force and acceleration are vectors; state the direction, especially in deceleration and lift problems.",
            "**Third-law features:** For full marks on 'explain', state the forces are equal, opposite, simultaneous, the same type, and act on different objects.",
            "**Draw free-body diagrams:** Label each force with an arrow (weight from the centre, normal force, friction, tension); examiners award the diagram mark for correct directions.",
            "**Explain questions need 'because':** 'The car slows because the resultant force acts opposite to the motion, so acceleration is negative' — link observation to mechanism.",
            "**Unit consistency:** Convert kN to N (×1000) and km to m before substituting into F = ma."
          ],
          commonMistakes: [
            "**Adding instead of subtracting opposing forces:** Using engine force alone in F = ma when friction acts. Fix: find the resultant force first.",
            "**Confusing mass and weight in F = ma:** Putting weight (N) where mass (kg) belongs. Fix: only mass enters F = ma; weight enters W = mg.",
            "**Third-law forces 'cancelling':** Saying the book's weight and the table's support force are a third-law pair. Fix: those act on the SAME body (they balance); a third-law pair acts on DIFFERENT bodies.",
            "**Forgetting friction direction:** Drawing friction in the direction of motion. Fix: friction always opposes relative motion (or the tendency to slide).",
            "**g vs a mix-up:** Using g as an acceleration in horizontal problems. Fix: g applies to vertical free-fall only.",
            "**Terminal velocity misconceptions:** Thinking acceleration stops because forces 'run out'. Fix: acceleration stops because the resultant force becomes zero."
          ],
          recap: [
            "State Newton's First Law of Motion. [1]",
            "A resultant force of 4500 N acts on a 1500 kg car. Calculate the acceleration. [2]",
            "Explain, using Newton's Third Law, how a rocket accelerates in space where there is nothing to push against. [3]",
            "A lift of mass 800 kg accelerates upwards at 1.5 m/s² (g = 10 N/kg). Calculate the tension in the cable. [4]",
            "Describe the motion of a skydiver from leaving the aircraft to reaching terminal velocity. [4]",
            "State the two conditions for a pair of forces to be a Newton's Third Law pair. [2]"
          ]
        },
        {
          title: "Momentum and Impulse",
          body: "Momentum (p) is mass × velocity: p = mv, unit kg m/s. It is a vector — direction matters — so a 2 kg ball at 6 m/s east has momentum 12 kg m/s east, and the same ball moving west has −12 kg m/s. Newton's Second Law can be written as: resultant force = rate of change of momentum, F = Δp/Δt. Rearranged, FΔt = Δp: the impulse (force × time) equals the change of momentum. A given change of momentum can be achieved with a small force over a long time, or a large force over a short time.\n\nThe principle of conservation of momentum: the total momentum of a closed system (no external resultant force) is constant. For two colliding objects, total momentum before = total momentum after, in any direction you choose. This holds for collisions and explosions, elastic or not. In an elastic collision kinetic energy is also conserved; in inelastic collisions some kinetic energy becomes thermal energy, sound and deformation — momentum is still conserved because it is a vector sum, and the missing kinetic energy has gone elsewhere.\n\n## Formula summary\n| Quantity | Equation | Symbols and units |\n| --- | --- | --- |\n| Momentum | p = mv | p momentum (kg m/s), m mass (kg), v velocity (m/s) |\n| Resultant force | F = Δp/Δt | F force (N), Δp momentum change (kg m/s), Δt time (s) |\n| Impulse | FΔt = Δp | impulse (N s) = change of momentum (kg m/s) |\n| Conservation | m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ | u = before, v = after |",
          groups: [
            {
              subTitle: "Momentum calculations",
              bullets: [
                "**Worked example — easy:** A 0.05 kg bullet leaves a gun at 400 m/s. **Step 1 —** p = mv. **Step 2 —** p = 0.05 × 400 = **20 kg m/s**.",
                "**Worked example — collision (sticking):** A 2.0 kg trolley at 3.0 m/s hits a stationary 1.0 kg trolley; they stick. **Step 1 —** Momentum before = 2.0 × 3.0 + 1.0 × 0 = 6.0 kg m/s. **Step 2 —** After: (2.0 + 1.0)v = 6.0. **Step 3 —** v = 6.0 ÷ 3.0 = **2.0 m/s** in the original direction.",
                "**Worked example — hard (rebound):** A 0.5 kg ball hits a wall at 8 m/s and rebounds at 6 m/s (taking towards the wall as positive). **Step 1 —** p before = +4.0 kg m/s. **Step 2 —** p after = 0.5 × (−6) = −3.0 kg m/s. **Step 3 —** Δp = −3.0 − 4.0 = **−7.0 kg m/s**, so the change is 7.0 kg m/s away from the wall.",
                "**Worked example — explosion (recoil):** A 4.0 kg rifle fires a 0.020 kg bullet at 300 m/s. **Step 1 —** Momentum before = 0, so total after = 0. **Step 2 —** 0.020 × 300 + 4.0 × V = 0. **Step 3 —** V = −6.0 ÷ 4.0 = **−1.5 m/s** (recoil).",
                "**Worked example — force from momentum:** A 1200 kg car stops from 20 m/s in 2.0 s. **Step 1 —** Δp = 0 − 1200 × 20 = −24,000 kg m/s. **Step 2 —** F = Δp/Δt = −24,000 ÷ 2.0 = **−12,000 N** (a braking force of 12 kN)."
              ]
            },
            {
              subTitle: "Impulse and safety design",
              bullets: [
                "**Why airbags work:** Ft = Δp with Δp fixed by the crash; increasing the stopping time t reduces F, the force on the passenger — reducing injury.",
                "**Crumple zones:** Car fronts are designed to collapse progressively, extending the collision time and so lowering the force transmitted to the passengers.",
                "**Seatbelts and helmets:** Spread the force over the body and extend the stopping time; also spread force over a larger area to reduce pressure on the body.",
                "**Bending knees on landing:** A basketball player landing with bent knees increases stopping time, cutting the force on the legs (impulse argument).",
                "**Safety in numbers:** The impulse-momentum link F = Δp/Δt is the standard way to 'explain' crumple zones — name the equation, fix Δp, then reason about t and F."
              ]
            }
          ],
          examinerTips: [
            "**Choose a positive direction first:** Write '+ direction = to the right' and give every velocity a sign; most momentum errors are sign errors.",
            "**Show momentum before and after separately:** Write 'p before = ...' and 'p after = ...' as two lines — the structure earns method marks.",
            "**Sticking collisions share velocity:** After objects stick, they move with one common velocity — use the combined mass.",
            "**Use Δp = p final − p initial in order:** Rebounds need care: a ball hitting a wall at +8 and leaving at −6 has Δp = −14 (for m = 1), not −2.",
            "**For 'explain' questions quote F = Δp/Δt:** Then state what is fixed (Δp), what is changed (t) and the consequence (F falls) — three marking points.",
            "**Units:** Momentum in kg m/s (not kg·m/s with a dot needed — write it plainly), impulse in N s; both are numerically equal but keep labels consistent."
          ],
          commonMistakes: [
            "**Ignoring direction:** Adding momenta as if they were scalars in rebounds and explosions. Fix: sign every velocity with your chosen positive direction.",
            "**Using speed instead of velocity in rebounds:** Treating 'rebounds at 6 m/s' as +6. Fix: if it comes back, its velocity is negative.",
            "**Forgetting combined mass:** After sticking, using m₁v₁ + m₂v₂ with separate velocities. Fix: (m₁ + m₂)v after.",
            "**Momentum and energy confused:** Thinking momentum must also be 'lost' in inelastic collisions. Fix: momentum is always conserved; kinetic energy is what drops.",
            "**Impulse units mixed:** Writing impulse in kg m/s and force in N but time in minutes. Fix: seconds throughout; N s and kg m/s are equivalent.",
            "**Not converting km/h or g:** Fix: convert to m/s and kg before any momentum calculation."
          ],
          recap: [
            "Define momentum and state its unit. [2]",
            "Calculate the momentum of a 70 kg runner moving at 4.0 m/s. [2]",
            "A 3.0 kg trolley moving at 4.0 m/s collides with a stationary 1.0 kg trolley and they stick together. Calculate their velocity after the collision. [3]",
            "Explain, using the impulse equation, how crumple zones reduce injury in car crashes. [3]",
            "A 0.060 kg tennis ball hits a racket at 15 m/s and returns at 20 m/s in the opposite direction. Calculate the change in momentum of the ball. [3]",
            "State the conditions under which momentum is conserved in a collision. [2]"
          ]
        },
        {
          title: "Moments and Centre of Mass",
          body: "The moment of a force is the turning effect of the force about a pivot: moment = force × perpendicular distance from the pivot, M = Fd, unit newton-metre (N m). Only the perpendicular distance counts — pushing a door at the hinge line produces almost no moment however hard you push, while the same force at the handle, far from the hinges, swings the door easily. The principle of moments states that for a body in equilibrium (balanced, not rotating), the sum of clockwise moments about any point equals the sum of anticlockwise moments about that point; and the resultant force is zero.\n\nThe centre of mass (centre of gravity) of an object is the point where its whole weight appears to act. For a regular shape of uniform density it is at the geometric centre. An object balances when supported directly below its centre of mass; it topples when the vertical line through its centre of mass falls outside its base. Low, wide bases lower the centre of mass and widen the support base, increasing stability — the design principle behind racing cars, table lamps and Bunsen burners.\n\n## Formula summary\n| Quantity | Equation | Symbols and units |\n| --- | --- | --- |\n| Moment | M = Fd | M moment (N m), F force (N), d perpendicular distance (m) |",
          groups: [
            {
              subTitle: "Principle of moments calculations",
              bullets: [
                "**Worked example — easy:** A 4.0 N weight sits 0.30 m from a pivot. **Step 1 —** M = Fd = 4.0 × 0.30 = **1.2 N m** clockwise.",
                "**Worked example — balanced beam:** A beam is pivoted at its centre; a 6.0 N weight hangs 0.40 m to the left. Where must a 4.0 N weight hang on the right? **Step 1 —** Clockwise moment = anticlockwise moment: 4.0 × d = 6.0 × 0.40 = 2.4 N m. **Step 2 —** d = 2.4 ÷ 4.0 = **0.60 m**.",
                "**Worked example — hard (two weights one side):** A uniform 2.0 m beam is pivoted at its centre; 5.0 N hangs 0.5 m left of the pivot and 3.0 N hangs 1.0 m left. What single weight at 0.40 m right balances it? **Step 1 —** Total anticlockwise moment = 5.0 × 0.5 + 3.0 × 1.0 = 2.5 + 3.0 = 5.5 N m. **Step 2 —** W × 0.40 = 5.5. **Step 3 —** W = 5.5 ÷ 0.40 = **13.75 N ≈ 14 N**.",
                "**Worked example — non-uniform beam:** A 3.0 m plank is pivoted 1.0 m from its left end; the plank weighs 20 N acting at its centre (1.5 m from the left end, so 0.5 m from the pivot on the long side). Find the moment of the plank's weight. **Step 1 —** Perpendicular distance from pivot = 1.5 − 1.0 = 0.5 m. **Step 2 —** M = 20 × 0.5 = **10 N m**.",
                "**Levers as force multipliers:** A claw hammer pulling nails: a small effort far from the pivot balances a large resistance close to it — moment equilibrium makes the effort force much smaller than the load."
              ]
            },
            {
              subTitle: "Centre of mass and stability",
              bullets: [
                "**Finding centre of mass experimentally:** Hang a lamina from a pin; hang a plumb line from the same pin and draw the vertical line; repeat from a second hole; the centre of mass is where the lines cross.",
                "**Toppling rule:** An object topples when a vertical line drawn downwards from its centre of mass falls outside the base — the weight then creates an unbalanced moment rotating it over.",
                "**Increasing stability:** Lower the centre of mass (ballast in ship hulls) and/or widen the base (racing cars); then the line of weight stays inside the base even when tilted.",
                "**Balancing condition:** A freely suspended object rests with its centre of mass directly below the point of suspension, because then the weight has no perpendicular distance and so zero moment.",
                "**Applications:** Racing cars, Bunsen burners, table lamps, filing cabinets (deep drawers at the bottom), and crane counterweights all apply the stability rules."
              ]
            }
          ],
          examinerTips: [
            "**Perpendicular distance only:** Mark the right angle on your diagram between the force line and the pivot distance; a moment calculated with a slant distance is wrong.",
            "**Moments about any point:** When forces act at unknown distances, take moments about the point where an unknown force acts — that force then drops out of the equation.",
            "**Include the beam's weight:** Uniform beams have weight acting at their midpoint — a very common missed moment.",
            "**Clockwise vs anticlockwise columns:** Lay out 'clockwise moments' and 'anticlockwise moments' as two columns before equating them — the layout earns method marks.",
            "**Equilibrium needs both conditions:** State 'sum of clockwise moments = sum of anticlockwise moments AND resultant force = zero' for a body in equilibrium.",
            "**Explain stability answers:** Use the sequence: centre of mass position → line of action of weight → falls inside/outside base → moment causes toppling/return."
          ],
          commonMistakes: [
            "**Distance measured along the beam to the force line:** Fix: the d in M = Fd is the shortest (perpendicular) distance from pivot to the line of action — for vertical forces it is the horizontal distance.",
            "**Beam weight forgotten:** A uniform plank's weight acts at its centre; leaving it out unbalances the whole calculation.",
                "**Adding moments as scalars:** Mixing clockwise and anticlockwise without signs. Fix: give one direction a positive sign and balance the sums.",
            "**Centre of mass = centre of shape always:** Only true for uniform density. Fix: for non-uniform objects, find the centre of mass experimentally.",
            "**Metres vs centimetres:** Moment answers in N cm that should be N m. Fix: convert cm to m before calculating (10 N cm = 0.10 N m).",
            "**Pivot friction ignored:** Real pivots exert friction moments; exam questions assume a frictionless pivot unless stated."
          ],
          recap: [
            "Define the moment of a force and state its unit. [2]",
            "A force of 12 N acts at a perpendicular distance of 0.25 m from a pivot. Calculate the moment. [2]",
            "A uniform beam is pivoted at its centre. A weight of 8.0 N hangs 0.30 m to the left of the pivot. Calculate the weight that must hang 0.20 m to the right to balance the beam. [3]",
            "Describe an experiment to find the centre of mass of a flat irregularly shaped card. [4]",
            "Explain, in terms of moments, why it is easier to open a door by pushing near the handle than near the hinges. [3]",
            "Explain why a racing car is more stable than a tall van travelling at the same speed around the same bend. [3]"
          ]
        },
        {
          title: "Work, Energy and Power",
          body: "Work is done when a force moves its point of application in the direction of the force: W = Fd (joules). One joule is the work done when a force of 1 N moves through 1 m. Energy is the capacity to do work; it is stored in different ways — kinetic (movement), gravitational potential (height), elastic potential (stretched/squashed), thermal, chemical, electrical, nuclear and light. Kinetic energy is KE = ½mv² and gravitational potential energy is GPE = mgh, where h is the height gained and g is 10 N/kg (9.8 if told).\n\nThe principle of conservation of energy: energy cannot be created or destroyed, only transferred between stores or dissipated (spread out, often as thermal energy). A falling ball converts GPE to KE; at the bottom, mgh = ½mv² gives v = √(2gh) — the speed depends only on the drop height, not the mass. Power is the rate of doing work or transferring energy: P = W/t = E/t = Fv. Efficiency = useful output energy ÷ total input energy × 100% — it can also be calculated from powers or from work.\n\n## Formula summary\n| Quantity | Equation | Symbols and units |\n| --- | --- | --- |\n| Work | W = Fd | W work (J), F force (N), d distance (m) |\n| Kinetic energy | KE = ½mv² | m mass (kg), v speed (m/s) |\n| Gravitational PE | GPE = mgh | h height (m), g = 10 N/kg |\n| Power | P = W/t | P power (W), t time (s) |\n| Efficiency | useful output ÷ input × 100% | both in J (or both in W) |",
          groups: [
            {
              subTitle: "Energy calculations",
              bullets: [
                "**Worked example — easy (KE):** A 1200 kg car at 20 m/s. **Step 1 —** KE = ½mv² = ½ × 1200 × 20². **Step 2 —** KE = ½ × 1200 × 400 = **240,000 J = 240 kJ**.",
                "**Worked example — easy (GPE):** A 0.5 kg book lifted 1.5 m. **Step 1 —** GPE = mgh = 0.5 × 10 × 1.5 = **7.5 J**.",
                "**Worked example — hard (energy conservation):** A 0.2 kg ball falls from 5.0 m (no air resistance). **Step 1 —** GPE lost = mgh = 0.2 × 10 × 5.0 = 10 J, so KE at bottom = 10 J. **Step 2 —** ½mv² = 10 → v² = 2 × 10 ÷ 0.2 = 100. **Step 3 —** v = **10 m/s**.",
                "**Worked example — with friction:** The same ball rolls down a rough slope and reaches 8 m/s. **Step 1 —** KE at bottom = ½ × 0.2 × 64 = 6.4 J. **Step 2 —** Energy dissipated = 10 − 6.4 = **3.6 J** as thermal energy and sound.",
                "**Worked example — power:** A crane lifts a 500 kg load through 8.0 m in 10 s. **Step 1 —** Work = Fd = 500 × 10 × 8.0 = 40,000 J. **Step 2 —** P = W/t = 40,000 ÷ 10 = **4000 W**.",
                "**Worked example — efficiency:** A motor takes in 1000 J and delivers 650 J of useful work. Efficiency = 650 ÷ 1000 × 100% = **65%**; 350 J is wasted as thermal energy."
              ]
            },
            {
              subTitle: "Energy transfers and dissipation",
              bullets: [
                "**Pendulum and swing:** Continuous exchange between KE and GPE; each swing is slightly lower as energy dissipates to the air and the support.",
                "**Why efficiency is never 100%:** Friction between moving parts, air resistance, electrical resistance (heating) and sound all carry energy away from the useful output.",
                "**Sankey thinking:** Useful output and wasted output must add up to the total input — drawing the flow helps with 'evaluate' questions on energy resources.",
                "**Falling at terminal velocity:** GPE is transferred to thermal energy of the air (and the falling object) rather than to KE — the speed is constant.",
                "**Roller-coaster design:** Heights are set by energy conservation: every hill after the first must be lower because some energy is always dissipated."
              ]
            }
          ],
          examinerTips: [
            "**v² means square then multiply:** In KE = ½mv², square the speed first; writing (½mv)² is a classic error — write the formula before substituting.",
            "**Show the energy chain for 'explain' questions:** 'GPE → KE + thermal energy' style chains pick up transfer marks.",
            "**Useful output over total input:** For efficiency, never compare useful output to wasted energy — the denominator is the input.",
            "**Units and prefixes:** Convert kJ to J, minutes to seconds; power answers in W or kW as asked.",
            "**State where wasted energy goes:** 'Dissipated as thermal energy in the brakes/motor/air' — naming the destination earns the explanation mark.",
            "**Method marks for substitutions:** Even if the final division is wrong, ½ × 1200 × 400 shown earns credit — always write the substituted line."
          ],
          commonMistakes: [
            "**Squaring only part of v²:** Computing ½mv × v as ½m × 2v. Fix: square v completely first (20² = 400), then multiply.",
            "**h measured from the wrong level:** GPE needs a reference level; for falling objects h is the vertical drop, not the distance travelled along a slope.",
            "**Efficiency above 100%:** Usually from dividing input by output. Fix: efficiency = useful ÷ total, and it must be below 100%.",
            "**Work = force × distance when not parallel:** W = Fd only when force and motion share a direction; vertically lifted loads use the vertical height.",
            "**Power confused with energy:** Saying a battery 'stores power'. Fix: batteries store energy (J); power is the rate of transfer (W).",
            "**Forgetting time in power:** Reporting energy in joules when power in watts is asked. Fix: P = E/t, so divide by the time."
          ],
          recap: [
            "Calculate the kinetic energy of a 900 kg car travelling at 30 m/s. [2]",
            "A ball of mass 0.4 kg is dropped from a height of 20 m. Calculate its kinetic energy and speed as it hits the ground (no air resistance, g = 10 N/kg). [4]",
            "A machine uses 5000 J of electrical energy to do 3500 J of useful work. Calculate its efficiency. [2]",
            "A student climbs 3.0 m of stairs in 4.0 s; her weight is 500 N. Calculate her power output. [3]",
            "Explain why the brakes of a car become hot when the car stops. [2]",
            "A hydroelectric dam stores water at height. Describe the energy transfers from stored water to electricity. [3]"
          ]
        },
        {
          title: "Pressure",
          body: "Pressure is the force per unit area: p = F/A, unit pascal (Pa = N/m²). The same force spread over a larger area produces less pressure — snowshoes, skis, and camel feet all spread weight to stop sinking; knives and needles concentrate force onto a tiny area to cut or pierce. In liquids and gases, pressure increases with depth because the weight of fluid above pushes down: p = ρgh for the extra pressure at depth h in a liquid of density ρ (g = 10 N/kg). Atmospheric pressure, about 1.0 × 10^5 Pa at sea level, is caused by the weight of the whole atmosphere pushing on every surface; it decreases with altitude because there is less air above.\n\nPressure in a liquid acts equally in all directions (Pascal's principle) and is transmitted undiminished through the liquid — the basis of hydraulic systems. A small force on a small piston creates pressure p = F₁/A₁; the same pressure acting on a larger piston produces a larger force F₂ = p × A₂, so hydraulics multiply force (a car brake and lift work this way). Upthrust (buoyancy) arises because pressure is greater on the bottom of a submerged object than on the top, giving a net upward force; an object floats when its weight equals the upthrust, which is the same as saying its average density equals (or is less than) the liquid's density.\n\n## Formula summary\n| Quantity | Equation | Symbols and units |\n| --- | --- | --- |\n| Pressure | p = F/A | p pressure (Pa), F force (N), A area (m²) |\n| Liquid pressure | p = ρgh | ρ density (kg/m³), h depth (m), g = 10 N/kg |\n| Hydraulics | F₁/A₁ = F₂/A₂ | forces and piston areas |",
          groups: [
            {
              subTitle: "Pressure calculations",
              bullets: [
                "**Worked example — easy:** A box weighs 600 N and stands on a base of 0.40 m². **Step 1 —** p = F/A = 600 ÷ 0.40 = **1500 Pa**.",
                "**Worked example — hard (two orientations):** A brick 20 cm × 10 cm × 5 cm weighs 30 N. On its largest face (0.20 × 0.10 = 0.020 m²): p = 30 ÷ 0.020 = **1500 Pa**. On its smallest face (0.10 × 0.05 = 0.0050 m²): p = 30 ÷ 0.0050 = **6000 Pa** — same force, four times the pressure.",
                "**Worked example — liquid pressure:** Water (ρ = 1000 kg/m³), depth 2.0 m. **Step 1 —** p = ρgh = 1000 × 10 × 2.0 = **20,000 Pa**. Total pressure at that depth = 20,000 + atmospheric 100,000 = **120,000 Pa** if asked.",
                "**Worked example — hydraulics:** A force of 50 N on a piston of area 0.0010 m² gives p = 50 ÷ 0.0010 = 50,000 Pa. Acting on a second piston of area 0.050 m²: F = p × A = 50,000 × 0.050 = **2500 N** — a force multiplier of 50.",
                "**Atmospheric pressure:** Measured with a barometer; 1.0 × 10^5 Pa is about the pressure at the bottom of a 10 m column of water — which is why suction pumps cannot lift water higher than about 10 m."
              ]
            },
            {
              subTitle: "Pressure in liquids and gases — applications",
              bullets: [
                "**Hydraulic brake:** The pedal pressure is transmitted equally through the brake fluid (liquids are almost incompressible) to large-area pistons at the wheels, which multiply the force pressing the pads.",
                "**Floating and sinking:** A submarine changes its average density by flooding or blowing ballast tanks; a hot-air balloon 'floats' in air because heated air inside is less dense than the cooler air outside.",
                "**Dam construction:** Water pressure increases with depth, so dams are built much thicker at the bottom than the top.",
                "**Altitude effects:** Atmospheric pressure falls with height — aircraft cabins are pressurised, and boiling points drop on mountains (water boils below 100°C on Everest).",
                "**Bends and syringes:** Squeezing a sealed plastic bottle shows pressure acts in all directions; a syringe draws liquid because pushing the plunger reduces pressure inside and atmospheric pressure pushes the liquid up."
              ]
            }
          ],
          examinerTips: [
            "**Convert areas to m²:** cm² → m² by ×10^-4 (1 cm² = 0.0001 m²). Most wrong pressure answers trace to area units.",
            "**State the force causing pressure in fluids:** For liquid columns, the force is the weight of the fluid above: F = mg = ρVg.",
                "**Add atmospheric pressure when asked for total:** Liquid pressure p = ρgh is the excess over atmospheric; a question asking 'total pressure' wants ρgh + 1.0 × 10^5 Pa.",
            "**Hydraulic working must quote equal pressure:** 'Pressure is transmitted equally through the liquid' — then compute p, then F₂.",
            "**Explain questions — reference the mechanism:** 'Pressure increases with depth because the weight of water above increases' — always include the weight/force reasoning.",
            "**Direction of fluid pressure:** Mention that pressure in a liquid acts in all directions when explaining upthrust, dam design or bottle squeezing."
          ],
          commonMistakes: [
            "**Area in cm² left unconverted:** p = 30 ÷ 10 using A in cm². Fix: convert to m² first; pressure is always N/m².",
            "**Adding when you should average:** Students sometimes halve the area of a rectangular face. Fix: A is the full contact area.",
            "**Confusing pressure and force:** 'The pressure pushes the piston 5 cm.' Fix: forces cause motion; pressure is spread-over-area — objects accelerate because of resultant force.",
            "**Forgetting g in ρgh:** Writing p = ρh. Fix: include g = 10 N/kg.",
            "**Hydraulic force direction errors:** Assuming the large piston 'creates' pressure. Fix: the small piston creates pressure; the large piston converts it back to a bigger force.",
            "**'Pressure wants to escape':** Pressure is not a substance. Fix: describe differences — fluids move from high to low pressure regions."
          ],
          recap: [
            "A force of 200 N acts on an area of 0.50 m². Calculate the pressure. [2]",
            "Explain why a sharp knife cuts more easily than a blunt one. [2]",
            "Calculate the pressure due to water at a depth of 30 m (density of water = 1000 kg/m³, g = 10 N/kg). [2]",
            "A hydraulic jack has a small piston of area 0.0020 m² and a large piston of area 0.10 m². A force of 100 N pushes the small piston. Calculate the force exerted by the large piston. [3]",
            "Explain why a person floats more easily in the sea than in a freshwater lake. [2]",
            "Explain why the walls of a dam are thicker at the bottom than at the top. [2]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Thermal Physics",
      intro: "Thermal physics connects the invisible world of moving particles to the warmth of a room, the pressure in a car tyre and the energy stored in a hot drink. Temperature measures the average kinetic energy of particles; heat is energy in transfer from a hotter body to a cooler one. The kinetic particle model explains expansion, changes of state, pressure in gases and the rates of evaporation and diffusion. You will also master the two great energy-accounting equations of the topic — specific heat capacity and specific latent heat — and the gas laws linking pressure, volume and kelvin temperature. Nearly every explanation mark in this topic rewards a sentence that starts with what the particles are doing, so practise writing particle-level answers.",
      subheadings: [
        {
          title: "The Particle Model of Matter",
          body: "All matter is made of tiny particles (atoms, molecules or ions) in constant motion. In solids the particles vibrate about fixed positions in a regular lattice, held by strong forces; in liquids they vibrate and slide past each other, so a liquid flows and takes the shape of its container but keeps a fixed volume; in gases the particles move freely and rapidly in random straight lines, filling any container. Heating increases the kinetic energy of the particles — temperature is a measure of their average kinetic energy.\n\nDiffusion is the spreading of particles from a region of high concentration to low concentration by their random motion; it happens fastest in gases, slower in liquids, and extremely slowly in solids. Brownian motion — the constant, jerky zig-zag of smoke particles in air — is direct evidence for the kinetic model: invisible air molecules bombard the smoke particles unevenly. Evaporation happens from the surface of a liquid at any temperature: the fastest particles escape, so the average kinetic energy of those left behind falls and the liquid cools. Evaporation is faster with higher temperature, greater surface area, a draught, and lower humidity.\n\n## Comparing the states\n| Property | Solid | Liquid | Gas |\n| --- | --- | --- | --- |\n| Shape | Fixed | Takes container's shape | Fills container |\n| Volume | Fixed | Fixed | Expands to fill container |\n| Compressibility | Almost none | Very little | High |\n| Particle motion | Vibrate in place | Slide past each other | Rapid, random, free |",
          groups: [
            {
              subTitle: "Evidence and explanations",
              bullets: [
                "**Brownian motion:** Seen with a microscope as smoke particles in air jitter randomly; explained by unequal bombardment from invisible, fast-moving air molecules — strong evidence for the particle model.",
                "**Diffusion rate factors:** Higher temperature (faster particles), smaller particle mass (lighter particles diffuse faster — H₂ diffuses faster than O₂), gas state (particles far apart and fast).",
                "**Compression:** Gases compress easily because most of the volume is empty space; liquids and solids barely compress because their particles are already touching.",
                "**Evaporation cooling:** Escaping fast particles remove kinetic energy from the liquid, lowering the average kinetic energy — which is exactly what a lower temperature means. Sweating cools the body this way.",
                "**Change of state:** Melting, boiling, condensing and freezing all involve breaking or forming intermolecular bonds; the particles themselves never change — H₂O molecules are identical in ice, water and steam."
              ]
            },
            {
              subTitle: "Worked examples and calculations",
              bullets: [
                "**Worked example — easy:** A gas in a 100 cm³ syringe is compressed to 25 cm³ (temperature constant). **Step 1 —** Boyle's law (preview): p₁V₁ = p₂V₂. **Step 2 —** p₂ = p₁V₁/V₂ = p₁ × 100/25 = **4p₁** — pressure quadruples because particles hit the walls four times as often.",
                "**Worked example — density link:** 0.20 kg of gas fills a 0.50 m³ balloon. **Step 1 —** ρ = m/V = 0.20 ÷ 0.50 = **0.40 kg/m³** — about 1/2500 of water's density, showing how much empty space gas particles have.",
                "**Worked example — hard (two gases):** A sealed room contains perfume vapour at the far corner; it is detected across the room in minutes. Explain: gas particles move at hundreds of m/s, collide and change direction, and diffuse from high to low concentration until evenly spread — mixing is complete even without convection.",
                "**Evaporation vs boiling:** Evaporation happens at all temperatures, only from the surface, and causes cooling; boiling happens throughout the liquid at one fixed temperature (the boiling point) with bubbles of vapour forming within the liquid.",
                "**Cooling by evaporation in practice:** Ether on the hand feels cold; after-swim shivering; refrigeration cycles pump vapour away to keep evaporation going and the cabinet cold."
              ]
            }
          ],
          examinerTips: [
            "**Always explain via particles:** Start mechanism answers with 'the particles...' — examiners look for particle behaviour, not 'the liquid gets hot'.",
            "**Name the energy change:** In changes of state say whether kinetic or potential energy changes: temperature constant means kinetic energy constant; energy goes into breaking bonds (potential energy).",
            "**Use 'random motion' precisely:** Random means equal chance of any direction — write it in diffusion and Brownian motion answers.",
            "**Define diffusion with concentration:** 'Spreading from a region of higher concentration to lower concentration' — both halves earn the definition mark.",
            "**Describe Brownian motion fully:** Jerky, random, continuous motion of visible particles caused by invisible molecules — three features, up to three marks.",
            "**Compare using a table layout:** For solid/liquid/gas comparisons, a labelled table in your plan keeps properties paired with particle reasons."
          ],
          commonMistakes: [
            "**Particles 'expand':** Solids do not expand because particles grow. Fix: heating makes particles vibrate more violently, pushing neighbours apart — the spacing increases, not the particles.",
            "**Boiling confused with evaporation:** Saying boiling happens at any temperature. Fix: boiling is throughout the liquid at a fixed temperature; evaporation is surface-only at any temperature.",
            "**Air thought to be 'sucked in':** When a syringe is pulled, air 'rushes in because of pressure difference' — fix: it is pushed in by the higher external atmospheric pressure.",
            "**Diffusion direction muddled:** Particles spread from low to high concentration. Fix: they move randomly but the NET movement is from high to low concentration.",
            "**Temperature = heat confusion:** Temperature is average kinetic energy per particle; heat is energy in transfer. Fix: a spark has high temperature but tiny heat content.",
            "**Assuming particles change on melting:** Fix: H₂O molecules are identical in all three states — only arrangement and energy change."
          ],
          recap: [
            "Describe the arrangement and motion of particles in a solid, a liquid and a gas. [6]",
            "Explain how Brownian motion provides evidence for the kinetic particle model. [3]",
            "Explain why evaporation causes cooling. [3]",
            "State two factors that increase the rate of evaporation of a liquid and explain each using the particle model. [4]",
            "Explain, in terms of particles, why gases are easily compressed but liquids are not. [2]",
            "Describe an experiment to demonstrate diffusion in a gas. [3]"
          ]
        },
        {
          title: "Temperature, Thermal Expansion and Thermometers",
          body: "Temperature measures how hot something is — on the particle model, the average kinetic energy of its particles. Heat is thermal energy in transfer from a hotter to a cooler body. Two objects at the same temperature are in thermal equilibrium: no net heat flow between them. Temperature is measured with a thermometer, all of which exploit a physical property that changes with temperature — the thermometric property.\n\nMost substances expand when heated: particles vibrate harder and push each other slightly further apart, so solids, liquids and gases all increase in volume. Water is the famous exception between 0°C and 4°C — it contracts as it warms in this range, which is why ice floats and ponds freeze from the top down. Expansion has useful applications (bimetallic strips in thermostats and fire alarms, expansion gaps in bridges and railway lines) and awkward consequences (tight jar lids, cracked glassware, snapped power lines in cold weather). A bimetallic strip bends when heated because the two metals expand by different amounts, and the greater-expanding metal ends up on the outside of the curve.\n\n## Thermometer types\n| Type | Thermometric property | Notes |\n| --- | --- | --- |\n| Liquid-in-glass | Volume of liquid | Cheap; narrow bore increases sensitivity |\n| Thermocouple | Voltage (e.m.f.) between two junctions | Wide range, fast response, can be very small |\n| Resistance thermometer | Electrical resistance of a metal | Accurate over wide range |",
          groups: [
            {
              subTitle: "Expansion — mechanisms and uses",
              bullets: [
                "**Particle explanation of expansion:** Heating raises kinetic energy; particles vibrate or move faster and take up slightly more space — the substance expands in all directions.",
                "**Expansion gaps:** Bridges, railway lines and concrete roads have gaps (or rollers) so the material can expand safely in summer heat without buckling.",
                "**Bimetallic strip rule:** The metal with the larger expansion is on the OUTSIDE of the bend when heated — brass expands more than iron, so a brass-iron strip curves with iron on the inside.",
                "**Thermostat:** A bimetallic strip bends as temperature rises until it separates contacts (or makes contact), switching a heater on or off — a feedback control.",
                "**Cold-weather contraction:** Overhead power lines sag in summer and tighten in winter; engineers leave slack so they do not snap in the cold."
              ]
            },
            {
              subTitle: "Designing and using thermometers",
              bullets: [
                "**Sensitivity:** How much the reading changes per degree — increased by a narrow-bore capillary (liquid rises further) or more liquid in the bulb.",
                "**Range:** The span of temperatures measurable — a clinical thermometer has a narrow range (about 35-42°C) while a thermocouple spans hundreds of degrees.",
                "**Linearity:** Equal temperature changes give equal changes in the property — needed for evenly spaced scale marks.",
                "**Responsiveness:** How quickly the thermometer reaches the object's temperature — small bulbs, thin glass and thermocouples respond fastest.",
                "**Worked example — reading a thermometer:** A liquid column is 4.0 cm long at 0°C and 24.0 cm at 100°C. Length at 50°C: the rise is 20.0 cm over 100 degrees, so 0.20 cm per degree; at 50°C, length = 4.0 + 50 × 0.20 = **14.0 cm**.",
                "**Fixed points:** The Celsius scale is defined by fixed points — ice point 0°C and steam point 100°C at standard atmospheric pressure — and the interval divided into 100 degrees."
              ]
            }
          ],
          examinerTips: [
            "**Temperature vs heat, every time:** 'Temperature measures average kinetic energy of particles; heat is energy transferred due to a temperature difference' — the contrast is a perennial 2-marker.",
            "**Explain expansion from particles:** 'Particles gain kinetic energy, vibrate more, and occupy more space' — never 'the material wants to expand'.",
            "**Identify the bimetal sides:** Name which metal expands more and state it ends up outside the curve when heated — examiners reward the correct side.",
            "**Define sensitivity, range, linearity precisely:** One-line definitions with the 'per degree' idea for sensitivity earn definition marks.",
            "**For describe-a-thermometer questions:** Cover bulb, liquid thread, scale, and what makes it sensitive (narrow bore).",
            "**Thermal equilibrium:** Use the phrase 'no net heat transfer' when two objects reach the same temperature."
          ],
          commonMistakes: [
                "**Saying particles 'get bigger':** Only the spacing increases. Fix: particles vibrate through larger amplitudes, pushing neighbours apart.",
            "**Bimetal side confusion:** Guessing which metal is on the outside. Fix: greater expansion → longer arc → must be on the outside of the bend.",
            "**Ice expansion forgotten:** Assuming water always expands on heating. Fix: water expands on freezing (0-4°C anomaly) — pipes burst in winter because ice occupies more volume.",
            "**Sensitivity vs range swapped:** Fix: sensitivity is size of change per degree; range is the measurable span.",
            "**Reading a thermometer at an angle:** Parallax error. Fix: read the meniscus at eye level.",
            "**Thermometer in wrong place:** For liquids, the bulb must be immersed and not touching the container walls, which may be hotter or colder."
          ],
          recap: [
            "Describe the differences between temperature and heat. [2]",
            "Explain, in terms of particles, why a metal bar expands when heated. [2]",
            "Explain how a bimetallic strip is used to control the temperature of an electric iron. [3]",
            "A liquid-in-glass thermometer is designed with a narrow bore. Explain how this makes the thermometer more sensitive. [2]",
            "State two practical problems caused by the thermal expansion of materials and how engineers deal with them. [4]",
            "The column of a thermometer is 5.0 cm long in melting ice and 25.0 cm long in boiling water. Calculate the column length at 40°C. [3]"
          ]
        },
        {
          title: "Specific Heat Capacity",
          body: "Different substances need different amounts of energy to raise their temperature. Specific heat capacity c is the energy needed to raise the temperature of 1 kg of a substance by 1°C (or 1 K): E = mcΔθ, where m is mass in kg and Δθ is the temperature rise in °C. The unit of c is J/(kg °C). Water has an unusually high specific heat capacity — about 4200 J/(kg °C) — which is why it is excellent for central-heating systems and car cooling systems: it carries away a lot of energy per kilogram without large temperature rises, and why coastal climates have milder temperature swings than inland ones.\n\nThe definition experiment: an electric heater heats a known mass of the substance in an insulated container; measure the voltage V and current I (so power P = VI), the time t, and the temperature rise Δθ. Assuming all the electrical energy heats the substance, c = VIt/(mΔθ). Insulation (lagging) and a lid reduce heat losses to the surroundings; a stirrer ensures even temperature; the thermometer should not touch the heater directly. Sources of error: heat lost to the container and air, and not all of the heater's energy reaching the material.\n\n## Formula summary\n| Quantity | Equation | Symbols and units |\n| --- | --- | --- |\n| Thermal energy | E = mcΔθ | E energy (J), m mass (kg), c specific heat capacity (J/(kg °C)), Δθ temperature change (°C) |\n| Electrical energy | E = VIt | V voltage (V), I current (A), t time (s) |\n| Specific heat capacity | c = E/(mΔθ) | from experiment |",
          groups: [
            {
              subTitle: "Specific heat capacity calculations",
              bullets: [
                "**Worked example — easy:** How much energy to heat 2.0 kg of water from 20°C to 70°C? (c = 4200 J/(kg °C)). **Step 1 —** Δθ = 70 − 20 = 50°C. **Step 2 —** E = mcΔθ = 2.0 × 4200 × 50 = **420,000 J = 420 kJ**.",
                "**Worked example — finding c:** 0.50 kg of oil needs 45,000 J to rise from 20°C to 65°C. **Step 1 —** Δθ = 45°C. **Step 2 —** c = E/(mΔθ) = 45,000 ÷ (0.50 × 45) = 45,000 ÷ 22.5 = **2000 J/(kg °C)**.",
                "**Worked example — hard (electrical heating):** A 12 V, 2.0 A heater warms 0.80 kg of a liquid for 300 s; its temperature rises 18°C. Assuming no losses, c = VIt/(mΔθ) = 12 × 2.0 × 300 ÷ (0.80 × 18) = 7200 ÷ 14.4 = **500 J/(kg °C)**.",
                "**Worked example — hard (two materials):** A 0.20 kg copper block (c = 385 J/(kg °C)) at 100°C is dropped into 0.10 kg of water (c = 4200) at 20°C in an insulated cup. Find the final temperature T. **Step 1 —** Heat lost by copper = 0.20 × 385 × (100 − T); heat gained by water = 0.10 × 4200 × (T − 20). **Step 2 —** Set equal: 77(100 − T) = 420(T − 20) → 7700 − 77T = 420T − 8400 → 16,100 = 497T. **Step 3 —** T = **32.4°C**.",
                "**Water's high c in daily life:** Car coolant and central-heating water carry much energy per kilogram; sea breezes happen because land heats and cools faster than the sea."
              ]
            },
            {
              subTitle: "The c = VIt/(mΔθ) experiment",
              bullets: [
                "**Setup:** Insulated metal block or liquid in a calorimeter with lid, electric heater fully immersed, ammeter in series, voltmeter across the heater, thermometer and stirrer.",
                "**Measurements:** Mass m, voltage V, current I, heating time t, initial and final temperatures (Δθ).",
                "**Calculation:** Electrical energy in = VIt; assume this equals mcΔθ, so c = VIt/(mΔθ).",
                "**Improving accuracy:** Insulate (lagging) to cut heat losses; add a lid; stir before reading; repeat and average; start below room temperature and end above it so losses roughly cancel.",
                "**Key assumption:** All the electrical energy heats the material — in practice some heats the container and escapes, so the measured c is slightly too high."
              ]
            }
          ],
          examinerTips: [
            "**Memorise E = mcΔθ and be able to rearrange it:** Most questions ask for E, m, c or Δθ — write the triangle or algebra before substituting.",
            "**Δθ is the temperature CHANGE:** Subtract initial from final; a question giving 'from 15°C to 45°C' means Δθ = 30°C, not 45°C.",
            "**Watch the mass of water, not the kettle:** If a 1.0 kg kettle contains 0.80 kg of water, only the water's mass enters E = mcΔθ (the metal body needs its own m and c).",
            "**Experiment questions — list variables:** State what is measured (V, I, t, m, Δθ), the equation used, and two improvements (insulation, lid, stirring, repeat).",
            "**Units of c:** J/(kg °C) — write the full unit; a bare number loses the unit mark.",
            "**Assumption statement:** Always state 'no heat lost to surroundings' before equating VIt to mcΔθ."
          ],
          commonMistakes: [
            "**Δθ taken as final temperature:** Using 70 instead of 50 in the water example. Fix: always subtract initial temperature.",
            "**Mass in grams:** m must be in kg. Fix: divide grams by 1000 before substituting.",
            "**Minutes left as time:** Using t = 5 in VIt. Fix: convert to seconds.",
            "**Water's c quoted as 420:** A slip of a factor of 10; c(water) = 4200 J/(kg °C). Fix: memorise it.",
            "**Heat loss ignored in analysis:** When asked why the result is too high, students blame the thermometer. Fix: energy escaped to the surroundings and container, so measured VIt overstates the energy that actually heated the substance.",
            "**Adding energies instead of equating:** In mixing problems, heat lost by hot object = heat gained by cold object + container. Fix: write the balance equation explicitly."
          ],
          recap: [
            "Define specific heat capacity. [2]",
            "Calculate the energy needed to raise the temperature of 3.0 kg of water from 25°C to 100°C (c = 4200 J/(kg °C)). [3]",
            "A heater supplies 36,000 J to 0.50 kg of a metal, raising its temperature by 40°C. Calculate the specific heat capacity of the metal. [3]",
            "Describe an experiment to measure the specific heat capacity of a metal block using an electric heater. [5]",
            "Explain why water is used as the coolant in car engines rather than oil. [2]",
            "A 250 W heater raises the temperature of 0.50 kg of water by 30°C in 420 s. Calculate the specific heat capacity of water from this data and state one assumption. [4]"
          ]
        },
        {
          title: "Latent Heat",
          body: "When a substance melts or boils, energy continues to flow in but the temperature stays constant — the energy is being used to break intermolecular bonds and move particles further apart (increasing their potential energy), not to speed them up. This hidden energy is latent heat. Specific latent heat of fusion Lf is the energy needed to melt 1 kg of solid to liquid at its melting point (no temperature change); specific latent heat of vaporisation Lv is the energy needed to boil 1 kg of liquid to gas at its boiling point. Both use E = mL, with L in J/kg.\n\nLv is much larger than Lf (for water, about 2,260,000 J/kg versus 334,000 J/kg): boiling must do more work — it separates particles completely against their attractions AND pushes back the atmosphere as the vapour expands hugely in volume. That is why steam burns are far worse than boiling-water burns: condensing steam on skin releases Lv as well as cooling. On a heating curve, the flat sections at melting and boiling are where E = mL applies; the sloping sections use E = mcΔθ.\n\n## Formula summary\n| Quantity | Equation | Symbols and units |\n| --- | --- | --- | --- |\n| Fusion | E = mLf | E energy (J), m mass (kg), Lf specific latent heat of fusion (J/kg) |\n| Vaporisation | E = mLv | Lv specific latent heat of vaporisation (J/kg) |\n| Heating curve | E = mcΔθ on slopes | temperature rising |\n| Heating curve | E = mL on flats | change of state |",
          groups: [
            {
              subTitle: "Latent heat calculations",
              bullets: [
                "**Worked example — easy (fusion):** Energy to melt 0.20 kg of ice at 0°C (Lf = 334,000 J/kg). **Step 1 —** E = mLf = 0.20 × 334,000 = **66,800 J ≈ 67 kJ**.",
                "**Worked example — easy (vaporisation):** Energy to boil away 0.50 kg of water at 100°C (Lv = 2,260,000 J/kg). E = 0.50 × 2,260,000 = **1,130,000 J = 1.13 MJ**.",
                "**Worked example — hard (heating curve total):** Find the energy to convert 0.10 kg of ice at −10°C to steam at 100°C. c(ice) = 2100, c(water) = 4200 J/(kg °C); Lf = 334,000; Lv = 2,260,000 J/kg. **Step 1 —** Warm ice to 0°C: 0.10 × 2100 × 10 = 2100 J. **Step 2 —** Melt: 0.10 × 334,000 = 33,400 J. **Step 3 —** Warm water to 100°C: 0.10 × 4200 × 100 = 42,000 J. **Step 4 —** Boil: 0.10 × 2,260,000 = 226,000 J. **Total = 2100 + 33,400 + 42,000 + 226,000 = 303,500 J ≈ 304 kJ**.",
                "**Worked example — experiment value:** A 100 W heater melts 0.020 kg of ice in 80 s. **Step 1 —** Energy supplied = 2000 J. **Step 2 —** Lf = E/m = 2000 ÷ 0.020 = **100,000 J/kg** — lower than the true value because of heat losses.",
                "**Why sweating cools:** Evaporation needs Lv taken from the skin — each kilogram of sweat that evaporates removes about 2.26 MJ from the body."
              ]
            },
            {
              subTitle: "Explaining changes of state",
              bullets: [
                "**Temperature constant during change of state:** Energy input increases particle potential energy (breaking bonds, moving apart), not kinetic energy — and temperature measures average kinetic energy.",
                "**Why Lv > Lf:** Vaporisation must fully separate particles against all attractions, and the gas formed does work pushing back the atmosphere; melting only loosens the lattice.",
                "**Evaporation vs boiling again:** Evaporation occurs at any temperature from the surface; boiling occurs throughout the liquid at the boiling point, with bubbles of vapour rising.",
                "**Condensing and freezing release energy:** The same Lf and Lv are given out when a gas condenses or a liquid freezes — steam burns, and frost-prevention orchards being sprayed with water overnight.",
                "**Cooling curves:** Plotted as temperature against time while a liquid loses heat — flat at freezing as latent heat is released."
              ]
            }
          ],
          examinerTips: [
            "**Pick the right equation from the graph region:** Sloping section → E = mcΔθ; flat section → E = mL. Questions often chain several regions.",
            "**Define latent heat with 'no temperature change':** 'Energy to change the state of 1 kg ... without temperature change' — that clause earns the mark.",
            "**State which latent heat:** Fusion = solid ↔ liquid; vaporisation = liquid ↔ gas. Naming the wrong one loses the mark even if the arithmetic is right.",
            "**Explain flat sections with potential energy:** 'Energy breaks bonds / increases potential energy; kinetic energy (temperature) stays constant' — the two halves of the explanation.",
            "**Show every stage separately in multi-step questions:** Number the warming, melting, warming, boiling stages — each carries marks.",
            "**Units:** L in J/kg — if the question gives kJ/kg, convert ×1000 before or after calculating consistently."
          ],
          commonMistakes: [
            "**Using E = mcΔθ during a change of state:** No temperature change means Δθ = 0, so mcΔθ gives zero — that tells you it is the wrong equation. Fix: use E = mL on flats.",
            "**Lf and Lv swapped:** Using 334,000 J/kg to boil water. Fix: fusion ≈ 3.3 × 10^5 J/kg; vaporisation ≈ 2.3 × 10^6 J/kg for water.",
            "**Adding a temperature term to boiling energy:** 'Heat water from 20°C to 100°C AND boil it' — both E = mcΔθ and E = mL are needed, as separate stages.",
            "**Thinking temperature rises during melting:** Fix: the thermometer stays at 0°C until all ice is melted if energy is supplied at a steady rate.",
            "**Ignoring the warm-up stages:** In ice-to-steam questions, forgetting to warm the ice from −10°C to 0°C first. Fix: draw the heating curve and label every section.",
            "**Heat loss blamed on the wrong step:** In Lf experiments the measured L is usually too LOW (heat escapes), while in c experiments it makes c too HIGH — keep the directions straight."
          ],
          recap: [
            "Define specific latent heat of vaporisation. [2]",
            "Calculate the energy required to boil away 0.30 kg of water at 100°C (Lv = 2.3 × 10^6 J/kg). [2]",
            "Explain why the temperature of boiling water stays constant even though energy is continuously supplied. [3]",
            "Calculate the energy needed to convert 0.050 kg of ice at 0°C to water at 20°C (Lf = 3.3 × 10^5 J/kg, c(water) = 4200 J/(kg °C)). [4]",
            "Explain why a burn from steam at 100°C is more severe than a burn from water at 100°C. [2]",
            "Describe how to measure the specific latent heat of fusion of ice using an electric heater. [4]"
          ]
        },
        {
          title: "Heat Transfer: Conduction, Convection and Radiation",
          body: "Heat moves from hot to cold by three mechanisms. Conduction is the transfer of thermal energy through a substance without the substance itself moving: particles at the hot end vibrate harder and collide with neighbours, passing energy along; in metals, free electrons also carry kinetic energy rapidly through the lattice, which is why metals feel cold (they conduct heat away from your hand quickly). Convection transfers thermal energy by the bulk movement of a fluid (liquid or gas): heated fluid expands, becomes less dense, and rises; cooler, denser fluid sinks to replace it, creating a convection current. Radiation is thermal energy transferred by infrared electromagnetic waves, which need no medium — it is the only mechanism that works through a vacuum, and it is how the Sun heats the Earth.\n\nAll objects emit and absorb infrared radiation; the hotter an object, the more radiation it emits per second. Surface matters: dark, matt surfaces are the best emitters and absorbers; light, shiny surfaces are poor absorbers and poor emitters (good reflectors). A vacuum (Thermos) flask combines all three defences: silvered walls reflect radiation, the vacuum between the walls stops conduction and convection, and the insulating stopper and plastic casing reduce the rest.\n\n## The three mechanisms compared\n| Mechanism | Medium needed? | How energy moves | Example |\n| --- | --- | --- | --- |\n| Conduction | Yes (solid best) | Particle collisions + free electrons | Metal spoon in hot soup |\n| Convection | Yes (fluid only) | Bulk movement of heated fluid | Boiling water in a pan |\n| Radiation | No | Infrared electromagnetic waves | Sun warming the Earth |",
          groups: [
            {
              subTitle: "Applications and insulation",
              bullets: [
                "**Vacuum flask:** Silvered glass walls reduce radiation; the vacuum between the walls eliminates conduction and convection; a cork/plastic stopper stops convection and evaporation at the top; the glass is a poor conductor.",
                "**House insulation:** Cavity wall and loft insulation trap air (poor conductor) to cut conduction; double glazing traps air or uses a vacuum between panes; aluminium foil behind radiators reflects infrared back into the room.",
                "**Convection applications:** Central heating radiators warm air which rises and circulates; sea breezes (land heats faster than sea by day, reversing at night); cooling towers at power stations.",
                "**Cooking differences:** A shiny kettle stays cooler than a black one in the sun; solar water heaters use black, matt pipes; a silvered emergency blanket reflects the body's radiation back.",
                "**Cooking pots:** Copper or aluminium bases conduct heat quickly to the food; plastic or wooden handles insulate so they can be held."
              ]
            },
            {
              subTitle: "Explaining with particles and waves",
              bullets: [
                "**Why metals conduct best:** Free (delocalised) electrons gain kinetic energy at the hot end and move rapidly through the lattice, colliding with ions and transferring energy — electrons are far more effective than lattice vibration alone.",
                "**Why trapped air insulates:** Air is a gas with particles far apart, so conduction is very slow; trapping it in fibres or foam stops convection currents too.",
                "**Radiation needs no particles:** Infrared is an electromagnetic wave, so it crosses a vacuum at the speed of light (3 × 10^8 m/s) — the energy transfer that makes the greenhouse effect and solar heating possible.",
                "**Matt vs shiny surfaces:** Matt black absorbs nearly all incident radiation (few reflections); shiny silvery surfaces reflect most of it, so they absorb and emit poorly.",
                "**Rate factors:** Bigger temperature difference, larger surface area, and for radiation a higher surface temperature all increase the rate of heat transfer."
              ]
            }
          ],
          examinerTips: [
            "**Match the mechanism to the medium:** Solids — conduction; fluids (only) — convection; vacuum or line of sight — radiation. Stating the medium is often the first mark.",
            "**Explain convection with density:** 'Heated fluid expands, density decreases, so it rises; cooler denser fluid sinks to replace it' — the three-step chain earns the marks.",
            "**Name the correct surface property:** Absorber/emitter questions — dark matt = good, light shiny = poor; always mention both absorption and emission if asked generally.",
            "**Structure flask answers by mechanism:** Deal with conduction, convection and radiation in turn with the flask feature for each — one feature per mark.",
            "**For describe questions on experiments:** List apparatus, what is measured (e.g., temperature rise in equal times), and the comparison being made (matt vs shiny).",
            "**Distinguish emit and absorb:** A surface good at absorbing is also good at emitting (Kirchhoff-style link) — useful in explain questions about cooling."
          ],
          commonMistakes: [
            "**Convection in solids claimed:** Particles in a solid cannot flow, so convection cannot occur. Fix: convection is restricted to liquids and gases.",
            "**'Heat rises':** Heat itself does not rise; the heated fluid does. Fix: say the warmer, less dense fluid rises.",
            "**Radiation needs air:** Believing infrared needs a medium. Fix: radiation is the only mechanism crossing a vacuum.",
            "**Shiny surfaces as good absorbers:** Fix: shiny surfaces are poor absorbers and poor emitters — good reflectors.",
            "**Metal 'feels cold because it is cold':** It is at room temperature; it FEELS cold because it conducts heat from your hand quickly. Fix: use conduction in the explanation.",
            "**Ignoring all three mechanisms in flask questions:** Only describing the vacuum. Fix: silvering (radiation), vacuum (conduction + convection), stopper (convection + evaporation)."
          ],
          recap: [
            "Describe an experiment to compare the emission of thermal radiation by two different surfaces. [4]",
            "Explain, in terms of particles, how thermal energy is conducted along a metal bar. [3]",
            "Explain how a convection current is set up when water is heated in a saucepan. [4]",
            "Explain how a vacuum flask keeps a hot drink hot, referring to conduction, convection and radiation. [5]",
            "Explain why a shiny metal kettle boils more slowly on a sunny day than a black one of the same size. [2]",
            "State which method of heat transfer occurs through a vacuum and name the radiation responsible. [2]"
          ]
        },
        {
          title: "The Gas Laws",
          body: "The behaviour of a fixed mass of gas is described by three laws, all explained by the kinetic particle model: pressure comes from molecular collisions with the container walls, so anything that makes collisions more frequent or harder raises the pressure. Boyle's Law (constant temperature): pV = constant, or p₁V₁ = p₂V₂ — compressing the gas raises the pressure in inverse proportion. Charles's Law (constant pressure): V/T = constant, or V₁/T₁ = V₂/T₂ — heating at constant pressure makes the gas expand in direct proportion to kelvin temperature. The Pressure Law (constant volume): p/T = constant, or p₁/T₁ = p₂/T₂ — heating at fixed volume raises the pressure in direct proportion to kelvin temperature. Together they form the combined gas law: p₁V₁/T₁ = p₂V₂/T₂.\n\nTemperature MUST be in kelvin: K = °C + 273. Absolute zero, 0 K (−273°C), is the temperature at which particle motion is at its minimum possible (theoretical zero-point); gas pressure would extrapolate to zero there because particles would have no kinetic energy. Real gases liquefy before reaching it. Graphs of p against V at constant T are hyperbolae (p against 1/V is a straight line through the origin); V against T (kelvin) and p against T (kelvin) are straight lines through the origin.\n\n## Formula summary\n| Law | Condition | Equation | Kinetic explanation |\n| --- | --- | --- | --- |\n| Boyle's | constant temperature | p₁V₁ = p₂V₂ | Smaller volume → more frequent wall collisions |\n| Charles's | constant pressure | V₁/T₁ = V₂/T₂ | Faster particles push the piston back until pressure equalises |\n| Pressure | constant volume | p₁/T₁ = p₂/T₂ | Faster particles → harder, more frequent collisions |\n| Combined | none fixed | p₁V₁/T₁ = p₂V₂/T₂ | links all three |\n| Kelvin conversion | always | K = °C + 273 | absolute zero = 0 K |",
          groups: [
            {
              subTitle: "Gas law calculations",
              bullets: [
                "**Worked example — Boyle's law:** Gas at 100 kPa occupies 300 cm³. Find the pressure when compressed to 200 cm³ at constant temperature. **Step 1 —** p₁V₁ = p₂V₂. **Step 2 —** p₂ = p₁V₁/V₂ = 100 × 300 ÷ 200 = **150 kPa**.",
                "**Worked example — Charles's law:** Gas occupies 2.0 L at 27°C; find the volume at 127°C, constant pressure. **Step 1 —** Convert: T₁ = 27 + 273 = 300 K; T₂ = 127 + 273 = 400 K. **Step 2 —** V₂ = V₁T₂/T₁ = 2.0 × 400 ÷ 300 = **2.67 L**.",
                "**Worked example — Pressure law:** Gas at 20°C and 100 kPa in a sealed, rigid container is heated to 80°C. **Step 1 —** T₁ = 293 K, T₂ = 353 K. **Step 2 —** p₂ = p₁T₂/T₁ = 100 × 353 ÷ 293 = **120 kPa**.",
                "**Worked example — hard (combined law):** Gas at 200 kPa, 500 cm³, 17°C is changed to 400 kPa, 300 cm³. Find the new temperature. **Step 1 —** Convert: T₁ = 17 + 273 = 290 K. **Step 2 —** T₂ = T₁ × p₂V₂/(p₁V₁) = 290 × (400 × 300)/(200 × 500) = 290 × 120,000/100,000 = 290 × 1.2 = 348 K. **Step 3 —** In Celsius: 348 − 273 = **75°C**.",
                "**Worked example — kelvin graph:** A pressure-temperature graph (°C axis) cuts the temperature axis at −273°C — extrapolating any p-T or V-T line back to zero pressure or volume always hits −273°C, evidence for absolute zero."
              ]
            },
            {
              subTitle: "Kinetic-theory explanations",
              bullets: [
                "**Boyle's law mechanism:** Halve the volume → molecules travel half as far between wall hits → twice as many collisions per second → double the pressure (temperature, hence collision speed, unchanged).",
                "**Pressure law mechanism:** Raise the temperature → molecules move faster → each collision exerts more force and hits are more frequent → pressure rises in proportion to kelvin temperature at fixed volume.",
                "**Charles's law mechanism:** Heat the gas → faster molecules would raise the pressure, but the piston moves out, increasing volume until collision frequency falls back — V grows in proportion to kelvin temperature.",
                "**Absolute zero meaning:** 0 K is where particle kinetic energy is the minimum possible; pressure and volume graphs extrapolate to zero there — particles would, classically, stop moving.",
                "**Real gases:** All real gases liquefy and then solidify before 0 K; the laws are idealisations that work well for gases far from liquefaction."
              ]
            }
          ],
          examinerTips: [
            "**Kelvin first, always:** Convert every temperature with +273 BEFORE substituting — the single biggest source of lost marks in gas-law questions.",
            "**Identify the constant:** 'Sealed rigid container' → constant V (Pressure law); 'temperature kept constant' → Boyle's; 'piston free to move / atmospheric pressure' → constant p (Charles's).",
            "**Keep pressure or volume units consistent:** kPa with kPa, cm³ with cm³ — no conversion needed if both sides share units.",
            "**Rearrange symbolically first:** Write T₂ = T₁p₂V₂/(p₁V₁), then substitute — clearer working, fewer slips, full method marks.",
            "**For explain questions name the collision change:** 'more frequent collisions' (volume change) vs 'more forceful collisions' (temperature change) vs both (combined).",
            "**Convert back if asked in °C:** The gas laws give kelvin; if the question wants the final temperature in °C, subtract 273 and say so."
          ],
          commonMistakes: [
            "**Celsius in gas laws:** Using 27 instead of 300 K — results are wildly wrong. Fix: K = °C + 273, every time.",
            "**Inverse vs direct mix-up:** Applying p₁/T₁ = p₂/T₂ when volume changes. Fix: match the equation to what is held constant.",
            "**Subtracting 273 at the end unnecessarily:** If the question asks for kelvin, leave it in kelvin. Fix: read the unit requested.",
            "**Assuming pressure doubles when volume halves at changing temperature:** Fix: only with T constant — check the question statement.",
            "**Graph axes misread:** Reading p against V as a straight line. Fix: at constant T, p vs V is a curve (hyperbola); p vs 1/V is straight.",
            "**Forgetting combined gas law conditions:** Using p₁V₁/T₁ = p₂V₂/T₂ when one variable is stated constant is fine, but simpler laws are quicker and less error-prone."
          ],
          recap: [
            "State Boyle's Law and explain it using the kinetic theory of gases. [3]",
            "A gas occupies 400 cm³ at 120 kPa. Calculate its volume when the pressure rises to 240 kPa at constant temperature. [2]",
            "A sealed metal can contains gas at 17°C and 100 kPa. The can is heated to 87°C. Calculate the new pressure. [3]",
            "Explain what is meant by absolute zero and how gas experiments lead to its value. [3]",
            "A gas at 27°C and 200 kPa occupies 3.0 L. Find its pressure when the temperature falls to −23°C and the volume is reduced to 2.0 L. [4]",
            "Describe the relationship between the volume of a fixed mass of gas and its kelvin temperature at constant pressure, and explain it using the kinetic model. [4]"
          ]
        }
      ]
    },
  ]
};
