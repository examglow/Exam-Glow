import type { Chapter } from "./types"

const IMG = "/notes/physics"

function artPanel(items: { src: string; alt: string; caption: string }[]) {
  const tiles = items
    .map((it, i) => {
      // An odd final tile takes the whole row; the artwork sits on the same cream it was
      // drawn on, so containing it loses nothing.
      const solo = items.length % 2 === 1 && i === items.length - 1
      return `<figure class="m-0 min-w-0${solo ? " sm:col-span-2" : ""}">
        <div class="overflow-hidden rounded-xl bg-[#f7f5f2]"><img src="${IMG}/${it.src}" alt="${it.alt}" loading="lazy" class="aspect-square w-full object-cover${solo ? " sm:aspect-[2/1] sm:object-contain" : ""}" /></div>
        <figcaption class="mt-2.5 text-center text-[13px] font-bold text-zinc-100">${it.caption}</figcaption>
      </figure>`
    })
    .join("")
  return `:::raw
<div class="overflow-hidden rounded-2xl bg-[#1b1d1f] px-4 py-5 sm:px-8 sm:py-8">
  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">${tiles}</div>
</div>
:::`
}

const wavesArt = artPanel([
  {
    src: "ph03-ripple-tank-wavefronts.webp",
    alt: "Overhead view of a ripple tank in which a vibrating dipper produces straight, evenly spaced wavefronts on shallow water",
    caption: "Straight wavefronts made in a ripple tank",
  },
  {
    src: "ph03-transverse-longitudinal.webp",
    alt: "A rope waving up and down beside a slinky spring with squeezed together and spread apart coils",
    caption: "Transverse rope wave, longitudinal spring wave",
  },
])

const refractionArt = artPanel([
  {
    src: "ph03-glass-block-refraction.webp",
    alt: "A narrow beam of light bending as it enters and again as it leaves a transparent rectangular glass block",
    caption: "Light bending at the two boundaries of a block",
  },
  {
    src: "ph03-optical-fibre.webp",
    alt: "A beam of light zig-zagging along the inside of a thin flexible glass fibre",
    caption: "Total internal reflection guides light along a fibre",
  },
])

const spectrumArt = artPanel([
  {
    src: "ph03-prism-dispersion.webp",
    alt: "A narrow beam of white light entering a glass prism and emerging as a fan of colours",
    caption: "A prism splits white light into the visible spectrum",
  },
  {
    src: "ph03-rainbow-spectrum.webp",
    alt: "A rainbow arching across a valley with red on the outer edge and violet on the inner edge",
    caption: "The same spectrum colours appear in a rainbow",
  },
])

const chapterThree: Chapter = {
  number: 3,
  title: "Waves",
  intro: `Waves carry energy from place to place without any material being carried along with them.\n\nThis chapter names the features of a wave and puts **v = f λ** to work in calculations.\n\nYou will meet light as reflection, refraction, lenses and dispersion, and sound as a longitudinal wave.\n\nThe **electromagnetic spectrum** then orders every kind of electromagnetic radiation by frequency and use.\n\nFinally, digital signalling and ultrasound show these wave properties being put to practical work.`,
  subheadings: [
    {
      title: "Wave Motion, the Features of a Wave and the Two Kinds",
      body: `### What a Wave Transfers

**A wave transfers energy without transferring matter.**

Tap one end of a rope and a pulse runs to the far end while the rope itself stays in your hand.

Push and pull the end of a slinky and a disturbance travels its whole length, carrying energy with it.

Water waves crossing a tank carry energy from the dipper to the walls of the tank.

A floating cork bobs up and down on the spot as each wavefront passes it.

That cork proves the water is not travelling with the wave, so no matter is transferred.

Vibrations in ropes and springs, and water waves in a tank, are the standard illustrations of **wave motion**.

### Naming the Parts of a Wave

A **wavefront** joins neighbouring points that are all at the same stage of their vibration.

Successive wavefronts are one wavelength apart and travel in the direction of propagation.

The **crest**, or peak, is the highest point of a wave and the **trough** is its lowest point.

**Wavelength**, symbol λ, is the distance between two successive points that are in phase, such as crest to crest.

**Frequency** is the number of complete waves passing a point each second, measured in hertz.

**Amplitude** is the maximum displacement of a particle from its undisturbed middle position.

**Wave speed** is the distance a wavefront travels each second, measured in metres per second.

### Using the Wave Equation

**Wave speed equals frequency multiplied by wavelength**, written as v = f λ.

Every quantity must be in compatible units, so use metres for λ and hertz for f.

A ripple of frequency 4 Hz and wavelength 0.05 m travels at v = 4 × 0.05 = 0.2 m/s.

Rearrange the equation to f = v / λ or to λ = v / f when a different quantity is wanted.

The frequency of a wave is fixed by the source that made it.

It does not change when the wave slows down or enters a new medium.

### Transverse and Longitudinal Waves

In a **transverse wave** the vibration is at right angles to the direction of propagation.

A rope shaken up and down makes this kind of wave, because each part of the rope moves vertically.

**Electromagnetic radiation, water waves and seismic S-waves** can all be modelled as transverse.

In a **longitudinal wave** the vibration is parallel to the direction of propagation.

A slinky pushed and pulled along its length makes compressions and rarefactions travel along it.

**Sound waves and seismic P-waves** can be modelled as longitudinal.

Compressions are regions where the particles are crowded together, rarefactions where they are spread apart.

Crests and troughs belong to transverse waves, compressions and rarefactions to longitudinal waves.

Both kinds are reflected, refracted and diffracted, so only the direction of vibration tells them apart.`,
      figure: wavesArt,
      groups: [
        {
          subTitle: "The Features of a Wave",
          bullets: [
            "**Wavefront:** line joining neighbouring points at the same stage of vibration.",
            "**Crest (peak):** highest point of the wave; **trough:** lowest point of the wave.",
            "**Wavelength λ:** distance from one crest to the next, or between successive wavefronts.",
            "**Frequency f:** number of complete waves passing a point each second, in hertz.",
            "**Amplitude:** maximum displacement from the undisturbed position, measured in metres.",
            "**Wave speed v:** distance travelled by a wavefront each second, in metres per second.",
          ],
        },
        {
          subTitle: "Wave Motion Demonstrated with Rope, Spring and Water",
          bullets: [
            "A pulse sent along a rope runs to the end while the rope stays in your hand.",
            "A compressed region pushed into a slinky travels its whole length.",
            "Water waves from a dipper spread outward and a floating cork only bobs in place.",
            "Energy leaves the source, so a wave can make something else vibrate when it arrives.",
            "The particles of the medium vibrate about their own positions and are not carried along.",
          ],
        },
        {
          subTitle: "Using v = f λ in Calculations",
          bullets: [
            "v = f λ links speed in m/s, frequency in Hz and wavelength in m.",
            "Rearrange it to f = v / λ or to λ = v / f as the question requires.",
            "A 50 Hz sound of wavelength 6.6 m in air travels at about 330 m/s.",
            "Doubling the frequency at constant speed halves the wavelength.",
            "Counting the crests that pass a post in one second gives the frequency directly.",
          ],
        },
        {
          subTitle: "The Two Kinds of Wave Compared",
          bullets: [
            "Transverse: vibration at right angles to the direction of propagation.",
            "Longitudinal: vibration parallel to the direction of propagation.",
            "Transverse examples are electromagnetic radiation, water waves and seismic S-waves.",
            "Longitudinal examples are sound waves and seismic P-waves.",
            "Both kinds transfer energy, and both have frequency, wavelength, amplitude and speed.",
          ],
        },
      ],
      examinerTips: [
        "Define a wave as a transfer of energy without transfer of matter, keeping both halves of the phrase.",
        "Measure amplitude from the middle line to a crest, never from trough to crest, which is twice the amplitude.",
        "State the units before substituting, since a wavelength in centimetres silently spoils the answer.",
        "When a wave slows in a new medium, keep its frequency unchanged and change only speed and wavelength.",
        "Give the vibration direction compared with the propagation direction whenever a wave type is asked for.",
      ],
      commonMistakes: [
        "Saying the water or the rope travels along with the wave, when only the disturbance moves.",
        "Giving wavelength as the distance from a crest to the neighbouring trough, which is half a wavelength.",
        "Using centimetres for λ with v in m/s, leaving the answer out by a factor of 100.",
        "Describing sound as transverse, when its vibrations are parallel to the direction of travel.",
        "Claiming particles travel from the source to the ear in a longitudinal wave.",
      ],
      recap: [
        "State what a wave transfers and what a wave does not transfer. [2]",
        "Define wavelength, frequency and amplitude of a wave. [3]",
        "A water wave has frequency 2.5 Hz and wavelength 0.4 m. Calculate its speed. [2]",
        "Describe how a floating cork shows that water waves do not transfer matter. [2]",
        "Distinguish between a transverse and a longitudinal wave, giving one example of each. [3]",
      ],
    },
    {
      title: "Reflection, Refraction and Diffraction in a Ripple Tank",
      body: `### Reflection at a Plane Surface

Straight wavefronts meeting a flat barrier in a ripple tank are reflected from it.

The reflected wavefronts leave the barrier at the same angle as the incoming wavefronts arrive.

Reflection changes the direction of travel, but it changes neither the speed nor the wavelength.

A curved barrier makes the reflected wavefronts converge or diverge, because each part of a wavefront meets it at a different angle.

The pattern is projected on a screen so that the angles can be measured with a ruler and protractor.

### Refraction from a Change of Speed

Refraction of waves is a change of direction caused by a change of speed.

In a ripple tank that change of speed is produced by a change of depth.

Shallow water slows the waves, so wavefronts crossing into it bend towards the boundary line.

Deep water lets them travel faster, so wavefronts leaving shallow water bend away from the boundary.

The frequency is unchanged, because it is fixed by the dipper that made the waves.

A smaller speed at the same frequency means a shorter wavelength, as v = f λ shows.

### Diffraction Through a Narrow Gap

Diffraction is the spreading of waves as they pass through a gap or round the edge of an obstacle.

Straight wavefronts meeting a narrow gap in a barrier emerge as circular wavefronts centred on that gap.

The spreading is strongest when the gap size is about the same as the wavelength.

A gap much wider than the wavelength lets most of the wavefront through almost straight.

Only the edges of a wide beam curve round, so the middle keeps travelling in its original direction.

A longer wavelength diffracts more through the same gap, giving a wider fan of circular wavefronts.

### Diffraction at an Edge

The edge of a straight barrier also acts as a source of circular wavefronts.

Waves reaching the edge spread into the region behind it, which is the shadow region.

A longer wavelength spreads further beyond the edge than a short wavelength does.

Increasing the wavelength therefore increases the diffraction seen at a gap and at an edge alike.

This is why ocean waves bend readily round a harbour wall while a short ripple does not.

### Setting the Tank Up

A motor turns a bar dipper, which just touches the water and sends out straight, evenly spaced wavefronts.

A single point dipper oscillating up and down makes circular wavefronts instead.

A lamp above the tank and a screen below it project the wavefronts as bright and dark lines.

The spacing of those lines gives the wavelength, so the tank can be used for measurements as well as demonstrations.`,
      groups: [
        {
          subTitle: "What a Ripple Tank Demonstrates",
          bullets: [
            "Reflection at a plane surface, using straight wavefronts and a flat barrier.",
            "Refraction caused by a change of speed, produced by a glass plate that shallows the water.",
            "Diffraction due to a gap, using two barriers whose separation can be changed.",
            "Diffraction due to an edge, seen as circular wavefronts spreading behind one barrier.",
            "A lamp above the tank and a screen below it make the wavefront pattern measurable.",
          ],
        },
        {
          subTitle: "Rules for the Three Behaviours",
          bullets: [
            "Reflection: wavefronts bounce back with the angle of reflection equal to the angle of incidence.",
            "Refraction: wavefronts change direction because their speed changes, while the frequency stays fixed.",
            "Diffraction: wavefronts spread from a gap or an edge into the region behind an obstacle.",
            "Reflection and diffraction keep the speed and wavelength unchanged; refraction does not.",
            "In every case the dipper keeps the frequency the same.",
          ],
        },
        {
          subTitle: "How Wavelength and Gap Size Affect Diffraction",
          bullets: [
            "A gap about the same width as the wavelength gives almost semicircular wavefronts.",
            "A gap far wider than the wavelength gives wavefronts that stay straight except at the edges.",
            "Narrowing the gap while keeping the wavelength increases the spreading.",
            "Lengthening the wavelength while keeping the gap increases the spreading.",
            "At an edge a longer wavelength reaches further into the region behind the barrier.",
          ],
        },
        {
          subTitle: "Depth, Speed and Wavelength Together",
          bullets: [
            "Deeper water means faster waves and a longer wavelength at the same frequency.",
            "Shallower water means slower waves and a shorter wavelength at the same frequency.",
            "Wavefronts bend towards the normal on entering shallower, slower water.",
            "Wavefronts bend away from the normal on leaving shallow water for deeper water.",
            "Measuring the spacing on either side of the boundary gives the ratio of the two speeds.",
          ],
        },
      ],
      examinerTips: [
        "Name the apparatus, such as bar dipper, glass plate, lamp and screen, because apparatus marks are credited separately.",
        "Say which quantity changes and which stays fixed during refraction, since the constant frequency is usually a mark.",
        "Compare the gap size with the wavelength in one sentence, as mark schemes look for exactly that comparison.",
        "Describe the shape of the wavefronts after each behaviour, because straight or circular is often worth a mark.",
        "For diffraction at an edge, mention the region behind the barrier into which the waves spread.",
      ],
      commonMistakes: [
        "Explaining refraction in the tank as waves being absorbed by the shallow water.",
        "Saying diffraction needs a gap, when a single edge diffracts waves just as well.",
        "Claiming the frequency falls when waves slow down, when only speed and wavelength change.",
        "Thinking waves spread most when the gap is far larger than the wavelength.",
        "Describing the reflected wavefronts as having a shorter wavelength than the incoming ones.",
      ],
      recap: [
        "Describe how a ripple tank shows reflection at a plane surface. [4]",
        "Explain how a glass plate placed in a ripple tank demonstrates refraction. [4]",
        "State and explain the effect on diffraction of making a gap narrower than the wavelength. [3]",
        "Waves pass from deep to shallow water. Describe what happens to their speed, wavelength and frequency. [3]",
        "Describe what is seen beyond the edge of a barrier when straight wavefronts reach it. [3]",
      ],
    },
    {
      title: "Reflection of Light and the Image in a Plane Mirror",
      body: `### The Words and the Rule

The **normal** is a line drawn at right angles to the surface at the point where a ray strikes.

The **angle of incidence** is the angle between the incident ray and the normal.

The **angle of reflection** is the angle between the reflected ray and the normal.

Both angles are measured to the normal and never to the surface of the mirror.

For reflection **the angle of incidence is equal to the angle of reflection**, written as i = r.

So a ray striking a mirror at 30 degrees to the normal reflects at 30 degrees on the other side.

### How a Plane Mirror Forms an Image

Each point of the object sends rays in every direction towards the mirror.

Each ray reflects obeying i = r, and the reflected rays reach the eye as a spreading beam.

The eye traces that beam back in straight lines, so the rays appear to come from one point behind the mirror.

Because the rays only appear to meet there, the image is **virtual**.

Nothing lies behind the mirror and no light starts from there, so no screen can catch the image.

### The Characteristics to State

The image is the **same size** as the object, neither enlarged nor diminished.

The image is **the same distance behind the mirror** as the object is in front of it.

The image is **virtual** and upright, and it is laterally inverted, so left and right appear swapped.

Giving those three features answers most questions that ask for the characteristics of the image.

### Constructions, Measurements and Calculations

Place a mirror upright on a drawn line and mark two object pins in front of it.

Look from the other side and place two pins in line with the images of the object pins.

Remove the mirror, join the marks, and draw the incident and reflected rays at the mirror line.

Measure both angles with a protractor from the normal and check that i equals r.

Keep the mirror vertical on its drawn line, or the image sits at the wrong height for the pins.

If a question gives the angle between a ray and the mirror surface, subtract it from 90 degrees first.

Two mirrors set at right angles reflect a ray back parallel to its own incoming path.`,
      groups: [
        {
          subTitle: "Angles and the Normal",
          bullets: [
            "**Normal:** line at right angles to the reflecting surface at the point of incidence.",
            "**Angle of incidence:** angle between the incident ray and the normal.",
            "**Angle of reflection:** angle between the reflected ray and the normal.",
            "For reflection the angle of incidence equals the angle of reflection, so i = r.",
            "An angle given to the surface is 90 degrees minus the angle to the normal.",
          ],
        },
        {
          subTitle: "Characteristics of the Image in a Plane Mirror",
          bullets: [
            "Same size as the object, so it is neither enlarged nor diminished.",
            "Same distance behind the mirror as the object is in front of the mirror.",
            "Virtual, because the reflected rays only appear to meet behind the mirror.",
            "Upright, and laterally inverted, so writing reads from right to left.",
            "No screen placed behind the mirror can ever show the image.",
          ],
        },
        {
          subTitle: "Checking the Law with Pins",
          bullets: [
            "Draw the mirror line and mark the positions of two object pins.",
            "Position two further pins in line with the images seen in the mirror.",
            "Join the marks to draw the incident ray and the reflected ray.",
            "Measure each angle from the normal with a protractor and compare them.",
            "Repeat for several angles of incidence to show that i = r always holds.",
          ],
        },
        {
          subTitle: "Calculations Involving Plane Mirrors",
          bullets: [
            "The angle between the incident ray and the reflected ray equals 2i.",
            "Rotating a mirror through an angle turns a reflected ray through twice that angle.",
            "Image distance and object distance are always equal for a plane mirror.",
            "Moving an object 0.5 m towards a mirror moves the image 0.5 m closer as well.",
            "The separation between object and image therefore changes by twice the movement.",
          ],
        },
      ],
      examinerTips: [
        "State the law of reflection in full words, as the angle of incidence equals the angle of reflection.",
        "For an image question give all three characteristics, since omitting virtual costs a mark.",
        "Draw rays from the object to the mirror, reflect them, then extend the reflected rays behind the mirror.",
        "Use a sharp pencil and a ruler for the normal, because construction marks are checked for accuracy.",
        "Read the angle carefully: many questions give the angle to the mirror surface rather than to the normal.",
      ],
      commonMistakes: [
        "Measuring the angles from the mirror surface instead of from the normal.",
        "Calling the image real because it can be seen, when visibility does not make an image real.",
        "Placing the image the same distance in front of the mirror as the object.",
        "Drawing the reflected rays as though light really travelled from behind the mirror.",
        "Confusing lateral inversion with the image being upside down.",
      ],
      recap: [
        "State the law of reflection for a plane mirror. [1]",
        "Define angle of incidence and angle of reflection. [2]",
        "Describe, in terms of rays, how a plane mirror forms the image of a candle. [4]",
        "Give three characteristics of the image formed by a plane mirror. [3]",
        "A ray makes 35 degrees with the surface of a mirror. Calculate the angle of reflection. [2]",
      ],
    },
    {
      title: "Refraction of Light, the Critical Angle and Optical Fibres",
      body: `### Bending at a Boundary

The **angle of refraction** is the angle between the refracted ray and the normal inside the second medium.

Light changes direction at a boundary because its speed changes there.

Travelling from air into glass or water, light slows down and bends **towards the normal**.

Travelling from glass or water into air, light speeds up and bends **away from the normal**.

The frequency never changes at a boundary, so the change in speed shows as a change in wavelength.

Passage through a transparent material is only about what happens at its two boundaries.

Emergent rays from a plane-sided block leave parallel to the incident ray but displaced sideways.

### An Experiment with a Glass Block

Shine a narrow ray from a ray box onto one face of a glass block on tracing paper.

Mark the incident ray, then mark the ray seen inside the block and the emergent ray.

Remove the block and join the marks to show the path of the ray.

Measure the angle of incidence and the angle of refraction and compare them.

Repeat for other angles, and for blocks of different shapes and materials.

A curved block, such as a semicircular one, shows the ray bending only at the curved boundary.

### Refractive Index

The **refractive index** n is the ratio of the speeds of a wave in two different regions.

For light entering a medium from air, n equals the speed in air divided by the speed in the medium.

It can also be written as **n = sin i / sin r**, with i measured in air and r in the medium.

Glass with n = 1.5 means light travels 1.5 times faster in air than in that glass.

Refractive index has no unit, because it is a ratio of two speeds or of two sines.

A larger refractive index means more bending and a smaller critical angle.

### Critical Angle and Total Internal Reflection

When light goes from a denser to a less dense medium it bends away from the normal.

As the angle of incidence increases, the refracted ray hugs the surface until the angle of refraction reaches 90 degrees.

The **critical angle** c is the angle of incidence in the denser medium that gives an angle of refraction of 90 degrees.

At larger angles no light escapes at all, and all of it is reflected back inside.

This is **total internal reflection**, and it needs both conditions: denser to less dense, and incidence greater than c.

At smaller angles part of the light refracts out and part is internally reflected.

In the laboratory a ray box beam inside a glass block or a prism is totally reflected once its internal angle passes c.

Everyday examples are the mirror-like surface of water seen from below, the sparkle of a diamond and mirages above a hot road.

### n = 1 / sin c and Optical Fibres

The critical angle is related to refractive index by **n = 1 / sin c**.

For glass with n = 1.5, sin c = 1 / 1.5 = 0.67, so c is about 42 degrees.

Water with n = 1.33 has a critical angle of about 49 degrees.

An **optical fibre** is a thin, transparent strand that traps light inside it by total internal reflection.

Light entering the fibre strikes its boundary at more than the critical angle and zig-zags along the whole length.

The fibre can bend, because the light keeps reflecting as it travels, with very little energy lost.

Pulses of light carry telephone, internet and television information, which is the main use in telecommunications.`,
      figure: refractionArt,
      groups: [
        {
          subTitle: "Refraction Vocabulary and Rules",
          bullets: [
            "**Angle of refraction:** angle between the refracted ray and the normal in the second medium.",
            "Entering a slower medium: the ray bends towards the normal.",
            "Entering a faster medium: the ray bends away from the normal.",
            "Frequency stays constant across a boundary while speed and wavelength both change.",
            "A parallel-sided block gives an emergent ray parallel to the incident ray but displaced sideways.",
          ],
        },
        {
          subTitle: "The Three Refraction Equations",
          bullets: [
            "n = ratio of the speeds of a wave in two different regions.",
            "n = sin i / sin r, with the angle in air on the top of the fraction.",
            "n = 1 / sin c, where c is the critical angle in the denser medium.",
            "Rearranging gives sin i = n sin r and sin c = 1 / n.",
            "Refractive index is a ratio, so it carries no unit at all.",
          ],
        },
        {
          subTitle: "Total Internal Reflection",
          bullets: [
            "The critical angle gives refraction along the surface, at 90 degrees to the normal.",
            "Above the critical angle all the light is reflected back inside the denser medium.",
            "Below it, light refracts out and only part of the light reflects internally.",
            "Two conditions are needed: denser towards less dense, and incidence greater than c.",
            "Experimentally a ray box beam inside a block or prism is totally reflected beyond the critical angle.",
            "Examples include the shining surface seen from underwater and the sparkle of cut diamond.",
          ],
        },
        {
          subTitle: "Optical Fibres in Telecommunications",
          bullets: [
            "Light pulses are trapped in a thin transparent fibre by repeated total internal reflection.",
            "The light follows a curved fibre, so cables can be laid round bends.",
            "Fibres carry telephone calls, internet traffic and cable television signals.",
            "Very little energy is lost along a fibre, so signals travel long distances.",
            "Glass is transparent to visible light and to some infrared, which is what makes fibres work.",
          ],
        },
      ],
      examinerTips: [
        "Name both conditions for total internal reflection, since giving one alone earns only one mark.",
        "In n = sin i / sin r put the air angle on top, because that angle is always the larger one.",
        "Use n = 1 / sin c only for a boundary with air, and check that your value of sin c is less than one.",
        "Describe a fibre with the words total internal reflection and repeated, as both are usually credited.",
        "For a block experiment, mention marking the ray with pencil crosses and measuring from the normal.",
      ],
      commonMistakes: [
        "Saying light bends because part of it is absorbed by the glass, rather than because its speed changes.",
        "Putting the angle of refraction in air instead of in the denser medium when substituting.",
        "Measuring the critical angle from the surface of the medium instead of from the normal.",
        "Claiming total internal reflection occurs when light travels from air into water.",
        "Stating that the frequency of light falls when it refracts.",
      ],
      recap: [
        "Define the angle of refraction and the critical angle. [3]",
        "Light passes from air into glass. State and explain what happens to its speed and direction. [4]",
        "Calculate the refractive index of glass for which the angle of incidence in air is 45 degrees and refraction is 30 degrees. [3]",
        "The critical angle of a medium is 42 degrees. Calculate its refractive index. [2]",
        "Describe how an optical fibre guides light and name one use of it. [3]",
      ],
    },
    {
      title: "Thin Lenses: Ray Diagrams, the Magnifying Glass and Eye Defects",
      body: `### The Names on a Lens

A **thin converging lens** is thicker in the middle than at its edge.

It takes a parallel beam of light and bends the rays inwards until they meet.

The rays meet at the **principal focus**, also called the focal point, which lies on the **principal axis**.

A **thin diverging lens** is thinner in the middle and spreads a parallel beam outwards.

For a diverging lens the rays appear to come from a principal focus on the incoming side of the lens.

The **focal length** is the distance from the centre of the lens to its principal focus.

### Drawing a Real Image by Construction

Two rays are enough to locate the image of one point of an object.

A ray travelling parallel to the principal axis is refracted through the principal focus beyond the lens.

A ray that passes through the centre of a thin lens goes straight on without deviating.

Where those two refracted rays cross, a real image of that point is formed.

Repeat the construction for the top of the object to fix the height of the whole image.

A real image can be caught on a screen, because the rays really do meet at that position.

### Describing Any Image

Say first whether the image is **enlarged, the same size or diminished**.

Say next whether it is **upright or inverted**.

Say finally whether it is **real or virtual**.

An object beyond twice the focal length gives a diminished, inverted, real image on the far side.

An object at twice the focal length gives an image that is the same size, inverted and real.

An object between twice the focal length and the focus gives an enlarged, inverted, real image.

An object placed inside the focal length gives an enlarged, upright, virtual image.

### Virtual Images and the Magnifying Glass

A **virtual image** is formed where rays that are diverging appear to meet when traced backwards.

The rays never actually cross, so a virtual image does not give a visible projection on a screen.

A single converging lens works as a magnifying glass when the object sits within its focal length.

Looking through the lens, the eye sees an enlarged, upright, virtual image on the same side as the object.

A lens with a shorter focal length gives greater magnification.

A diverging lens always produces an upright, diminished, virtual image of a real object.

### Correcting the Defects of the Eye

In **short-sightedness** the eye focuses distant rays in front of the retina, so distant detail is blurred.

A **diverging lens** spreads the rays before they enter the eye and moves the focus back onto the retina.

In **long-sightedness** the eye cannot converge near rays strongly enough, so near detail is blurred.

A **converging lens** adds the extra convergence needed to bring near objects onto the retina.

Both defects are corrected by spectacles or by contact lenses made from the suitable type of lens.`,
      groups: [
        {
          subTitle: "What Each Lens Does to a Parallel Beam",
          bullets: [
            "**Converging lens:** bends parallel rays inwards until they meet at the principal focus.",
            "**Diverging lens:** bends parallel rays outwards so they appear to come from its focus.",
            "**Principal axis:** the straight line passing through the centre of the lens.",
            "**Focal length:** distance from the centre of the lens to the principal focus.",
            "A more powerful converging lens is fatter in the middle and has a shorter focal length.",
          ],
        },
        {
          subTitle: "The Two Rays Used in Every Diagram",
          bullets: [
            "A ray parallel to the principal axis is refracted through the principal focus.",
            "A ray through the centre of a thin lens continues undeviated.",
            "The crossing point of the refracted rays locates a real image.",
            "Diverging rays must be extrapolated backwards to locate a virtual image.",
            "A screen placed at a real image shows it; no screen ever shows a virtual image.",
          ],
        },
        {
          subTitle: "Images Given by a Converging Lens",
          bullets: [
            "Object beyond twice the focal length: diminished, inverted, real.",
            "Object at twice the focal length: same size, inverted, real.",
            "Object between twice the focal length and the focus: enlarged, inverted, real.",
            "Object inside the focal length: enlarged, upright, virtual, as in a magnifying glass.",
            "Object exactly at the focus: rays emerge parallel and no image is formed.",
          ],
        },
        {
          subTitle: "Long-sightedness and Short-sightedness",
          bullets: [
            "Short-sightedness forms the image of a distant object in front of the retina.",
            "Correct it with a diverging lens, which spreads the rays before they enter the eye.",
            "Long-sightedness cannot focus near objects onto the retina.",
            "Correct it with a converging lens, which supplies extra convergence for near objects.",
            "Spectacles and contact lenses both replace part of the focusing power of the eye.",
          ],
        },
      ],
      examinerTips: [
        "Draw images with the two standard rays, extended as straight lines, and label the focus and the axis.",
        "Describe an image in the fixed order of size, then orientation, then real or virtual.",
        "Use a ruler and keep the lens thin in the diagram, since a fat lens moves the ray positions.",
        "For eye defects, name the type of lens and then say where the image is made to fall.",
        "When asked for a magnifying glass image, place the object inside the focal length first.",
      ],
      commonMistakes: [
        "Drawing the parallel ray through the near-side focus of a converging lens instead of the far-side focus.",
        "Calling every magnified image real, when a magnifying glass gives a virtual image.",
        "Measuring the focal length from the edge of the lens rather than from its centre.",
        "Swapping the two corrections and using a converging lens for short-sightedness.",
        "Saying a virtual image cannot be seen, when it is seen by looking through or into the lens.",
      ],
      recap: [
        "Define principal focus and focal length for a converging lens. [2]",
        "Describe the action of a thin diverging lens on a parallel beam of light. [2]",
        "By construction, find the position and size of the real image formed by a converging lens. [4]",
        "State the characteristics of the image formed when a lens is used as a magnifying glass. [3]",
        "Explain how a diverging lens corrects short-sightedness. [3]",
      ],
    },
    {
      title: "Dispersion of Light and the Electromagnetic Spectrum",
      body: `### Splitting White Light with a Prism

**Dispersion** is the splitting of white light into its colours by refraction.

A narrow beam of white light is refracted as it enters the glass prism and again as it leaves.

The prism bends violet light most and red light least, so the colours emerge spread into a fan.

Different colours travel at different speeds in glass, which is why each is refracted by a different amount.

The band of colours thrown on a screen is the **visible spectrum**.

Raindrops separate sunlight the same way, which is why a rainbow shows the same order of colours.

### The Seven Colours in Order

The traditional seven colours are red, orange, yellow, green, blue, indigo and violet.

In order of **decreasing wavelength** that sequence runs from red through to violet.

In order of **increasing frequency** it runs in the same direction, red to violet.

Red has the longest wavelength and the lowest frequency; violet has the shortest wavelength and the highest frequency.

Light of a single frequency only is described as **monochromatic**, and a laser beam is a good example.

### The Regions of the Spectrum

The main regions, in order of increasing frequency, are radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays.

In order of decreasing wavelength the same list appears in the same sequence.

All electromagnetic waves travel at the same very high speed in a vacuum.

That speed is **3.0 × 10^8 m/s**, and it is approximately the same in air.

Electromagnetic waves are transverse, and none of them needs a medium to travel through.

Frequency rises and wavelength falls steadily as you go from radio waves to gamma rays.

### Microwaves and Satellites

Communication with artificial satellites is mainly by microwaves.

Some satellite phones use **low orbit** artificial satellites, which circle close above the Earth and pass a call between themselves.

Other satellite phones and direct broadcast satellite television use **geostationary** satellites, which stay above one point of the Earth.

A dish aerial can then be aimed permanently at the fixed position of its satellite.`,
      figure: spectrumArt,
      groups: [
        {
          subTitle: "Dispersion by a Prism",
          bullets: [
            "A prism refracts each colour of white light by a different amount.",
            "Violet light is deviated most by the glass and red light is deviated least.",
            "The colours are already present in white light; the prism only separates them.",
            "The spread of colours projected on a screen is the visible spectrum.",
            "Monochromatic light has one frequency only, such as the light from a laser.",
          ],
        },
        {
          subTitle: "The Spectrum in Order",
          bullets: [
            "Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays.",
            "Frequency increases and wavelength decreases along that order.",
            "All electromagnetic waves travel at 3.0 × 10^8 m/s in a vacuum.",
            "Their speed in air is approximately the same as in a vacuum.",
            "Every electromagnetic wave is transverse and needs no medium.",
          ],
        },
        {
          subTitle: "Typical Uses of Each Region",
          bullets: [
            "**Radio waves:** radio and television transmissions, astronomy, radio frequency identification, RFID.",
            "**Microwaves:** satellite television, mobile phones, microwave ovens.",
            "**Infrared:** electric grills, remote controllers, intruder alarms, thermal imaging, optical fibres.",
            "**Visible light:** vision, photography, illumination.",
            "**Ultraviolet:** security marking, detecting fake bank notes, sterilising water.",
            "**X-rays:** medical scanning, security scanners.",
            "**Gamma rays:** sterilising food and medical equipment, detection and treatment of cancer.",
          ],
        },
        {
          subTitle: "Satellite Communications",
          bullets: [
            "Satellites are talked to mainly using microwaves.",
            "Low orbit satellites pass a call from one to the next as they travel overhead.",
            "Geostationary satellites stay above one place, which suits direct broadcast television.",
            "A fixed dish aerial can be aimed at the constant position of a geostationary satellite.",
            "Microwaves cross the vacuum of space, which sound could never do.",
          ],
        },
      ],
      examinerTips: [
        "Learn the seven regions in order and check which way you are writing, since frequency rises towards gamma rays.",
        "Quote the speed as 3.0 × 10^8 m/s in a vacuum, with the units written out.",
        "For dispersion state which colour is deviated most and which least, as both are usually marked.",
        "Match each named use to its region, including RFID, thermal imaging and sterilising water.",
        "Use the word transverse whenever the nature of electromagnetic waves is asked about.",
      ],
      commonMistakes: [
        "Saying a prism creates the colours, when white light already contains them.",
        "Writing the order of colours backwards, or leaving indigo out of the seven.",
        "Giving the speed of electromagnetic waves as about 340 m/s, which is the speed of sound.",
        "Claiming gamma rays travel faster than radio waves in a vacuum.",
        "Confusing ultraviolet with X-rays for uses such as sterilising water.",
      ],
      recap: [
        "Describe how a glass prism disperses a beam of white light. [4]",
        "Name the seven colours of the visible spectrum in order of increasing frequency. [3]",
        "State the speed of electromagnetic waves in a vacuum and define monochromatic light. [2]",
        "Place the regions of the electromagnetic spectrum in order of decreasing wavelength. [4]",
        "Name one region used for satellite television and one used for sterilising water. [2]",
      ],
    },
    {
      title: "Hazards, Communication Systems and Digital Signals",
      body: `### Excessive Exposure to Electromagnetic Radiation

The danger depends on which region of the spectrum is involved.

**Microwaves** cause internal heating of body cells, because they penetrate the surface and are absorbed inside it.

**Infrared** from a strong source burns the skin, since it is absorbed near the surface.

**Ultraviolet** damages surface cells and the eyes, and can lead to skin cancer and to eye conditions.

**X-rays and gamma rays** can mutate or damage cells in the body, so exposures are kept to the minimum needed.

Limiting the time of exposure, shielding the source and covering the skin all reduce these risks.

### Why Each System Uses the Radiation It Does

Mobile phones and wireless internet use microwaves, because microwaves can penetrate some walls.

Short wavelengths also mean that only a short aerial is needed for transmitting and receiving them.

Bluetooth uses radio waves, which pass through walls but are weakened as they do so.

Optical fibres use visible light or infrared for cable television and high-speed broadband.

Glass is transparent to visible light and to some infrared, so signals travel far along a fibre with little loss.

Visible light and short wavelength infrared can carry high rates of data, which is what broadband needs.

### Digital and Analogue Signals

An **analogue signal** varies continuously, following the shape of the sound it represents.

A **digital signal** is a series of separate on and off pulses, the two states usually read as 1 and 0.

A sound can be transmitted as either a digital signal or an analogue signal.

Both kinds can be carried by electromagnetic waves in radio, television and telephone systems.

### The Benefits of Digital Signalling

Digital signalling carries data at a much greater rate of transmission than an analogue signal.

Along a long cable or link every signal picks up noise from its surroundings.

An amplifier boosting an analogue signal boosts its noise as well, so the distortion grows.

A regenerator only has to decide whether a pulse is on or off, so it rebuilds the signal accurately.

That accurate regeneration is what gives digital signalling its increased range.

Sound arrives clearer, more messages share one link, and errors can be detected and corrected.`,
      groups: [
        {
          subTitle: "Harmful Effects by Region",
          bullets: [
            "**Microwaves:** internal heating of body cells.",
            "**Infrared:** burns to the skin from intense exposure.",
            "**Ultraviolet:** damage to surface cells and eyes, leading to skin cancer and eye conditions.",
            "**X-rays and gamma rays:** mutation or damage to cells in the body.",
            "Reducing exposure time, shielding and distance all lower the risk.",
          ],
        },
        {
          subTitle: "Which Radiation Each System Uses",
          bullets: [
            "Microwaves serve mobile phones and wireless internet because they penetrate some walls.",
            "Microwaves need only a short aerial, which suits hand-held devices.",
            "Radio waves serve Bluetooth; they pass through walls but emerge weakened.",
            "Visible light and infrared serve optical fibres, as glass is transparent to them.",
            "Short wavelength light in a fibre carries data at high rates.",
          ],
        },
        {
          subTitle: "Analogue Compared with Digital",
          bullets: [
            "An analogue signal varies continuously in step with the information it carries.",
            "A digital signal is a sequence of on and off pulses representing two states.",
            "A sound may be transmitted as either a digital or an analogue signal.",
            "Both signal types can be carried by electromagnetic waves.",
            "An analogue copy reproduces its noise too, while a digital signal can be rebuilt exactly.",
          ],
        },
        {
          subTitle: "Benefits of Digital Signalling",
          bullets: [
            "Greater rate of transmission of data along the same link.",
            "Increased range, because the signal is regenerated accurately rather than merely amplified.",
            "Regenerators only recognise two pulse states, so rebuilding is reliable.",
            "Noise is not carried forward, so reception stays clear over long distances.",
            "Many separate messages can be encoded into one stream of pulses.",
          ],
        },
      ],
      examinerTips:
        [
          "Pair every hazard with its named region, since the mark scheme lists four separate regions.",
          "For a systems question give the property of the radiation first and the consequence second.",
          "Define digital as on and off pulses and analogue as continuously variable, using both phrases.",
          "Give two digital benefits: higher data rate and longer range from accurate regeneration.",
          "Mention that sound cannot travel through a vacuum, which is why links need electromagnetic waves.",
        ],
      commonMistakes: [
        "Saying all electromagnetic radiation is equally dangerous, when the effects differ by region.",
        "Attributing skin cancer to infrared, when ultraviolet is the region named for that effect.",
        "Describing a digital signal simply as a stronger or clearer signal.",
        "Claiming regeneration amplifies the noise along with the message.",
        "Confusing the carrier wave of a transmission with the sound wave being sent.",
      ],
      recap: [
        "Describe two harmful effects on people of excessive exposure to electromagnetic radiation, naming the region for each. [4]",
        "Explain why mobile phones use microwaves rather than sound waves to carry signals. [3]",
        "State the difference between a digital signal and an analogue signal. [2]",
        "Explain why digital signalling gives a greater range than analogue signalling. [3]",
        "Name the radiation used in optical fibres and state one benefit of fibre links. [2]",
      ],
    },
    {
      title: "Sound: Vibrating Sources, Medium, Speed and Echoes",
      body: `### Sound Is Made by Vibrating Sources

Every sound begins with something vibrating: a struck tuning fork, a guitar string, a loudspeaker cone or a column of air.

The vibrating surface pushes and pulls the air beside it, so neighbouring particles are made to vibrate.

That disturbance passes from particle to particle and travels away from the source as a wave.

Pressing a sounding tuning fork against your hand stops its vibration, and the sound disappears at once.

### A Longitudinal Wave of Compressions

Sound travels through air as a **longitudinal wave**, with vibrations parallel to the direction of travel.

A **compression** is a region where air particles are crowded closer together and the pressure is higher.

A **rarefaction** is a region where the particles are more widely spread and the pressure is lower.

Successive compressions are one wavelength apart, and they move at the speed of sound.

Each particle only oscillates about its own position, so no air is carried from the source to the ear.

### A Medium Is Needed

Sound needs a medium, because its wave is a vibration of particles.

A vacuum contains no particles, so no sound can cross it.

An electric bell inside a sealed jar grows fainter as the air is pumped out, though the hammer keeps striking.

The bell is seen to vibrate the whole time, so the air, not the mechanism, was carrying the sound.

Letting air back into the jar restores the loudness immediately.

### The Speed of Sound and How to Measure It

**The speed of sound in air is approximately 330 to 350 m/s.**

In general sound travels faster in solids than in liquids, and faster in liquids than in gases.

Particles in a solid are close together and strongly linked, so they pass a vibration on more quickly.

One measurement method uses a known distance and the time taken for the sound to cover it.

A pistol is fired at one end of a long track, and the time from flash to report is measured with a stopclock.

Speed then follows from v = distance / time, so a longer distance is better.

A longer run makes the reaction time of the observer a smaller fraction of the total time.

### Echoes Are Reflected Sound

An **echo** is the reflection of sound waves from a surface, heard again after the original sound.

A cliff, a wall or an empty hall reflects sound rather as a mirror reflects light.

Sound travelling out and back covers the distance twice, so v = 2d / t.

Using a delay of 0.75 s and 340 m/s gives d = 340 × 0.75 / 2 = 127.5 m.

To hear an echo separately the original sound must return late enough, which needs a distant hard surface.`,
      groups: [
        {
          subTitle: "Producing and Carrying Sound",
          bullets: [
            "All sounds come from vibrating sources, such as strings, skins, air columns and loudspeaker cones.",
            "The vibration passes to neighbouring particles, so a wave travels outward from the source.",
            "Sound waves are longitudinal, with vibration parallel to the direction of travel.",
            "Compressions are crowded regions of particles, rarefactions are spread-out regions.",
            "Only energy is transferred from source to ear, never the air itself.",
          ],
        },
        {
          subTitle: "Medium and Speed",
          bullets: [
            "A medium is needed to transmit sound, so sound cannot travel through a vacuum.",
            "The speed of sound in air is about 330 to 350 m/s.",
            "Sound is generally fastest in solids, then liquids, then gases.",
            "Closer, more strongly coupled particles pass on vibrations more quickly.",
            "A lightning flash seen before its thunder shows that light is far faster than sound.",
          ],
        },
        {
          subTitle: "The Vacuum Bell Jar Demonstration",
          bullets: [
            "Suspend an electric bell inside a sealed glass jar connected to a vacuum pump.",
            "The hammer is seen striking the bell throughout the demonstration.",
            "Removing the air makes the sound gradually fainter until it is almost inaudible.",
            "Admitting air again restores the sound, proving that the air carried it.",
            "Hang the bell on foam so that sound cannot escape through the support.",
          ],
        },
        {
          subTitle: "Measuring Speed and Using Echoes",
          bullets: [
            "Measure a long known distance with a tape and the time with a stopclock.",
            "Speed equals distance divided by time, in metres per second.",
            "Repeat the timing and take the mean, since reaction time varies between runs.",
            "For an echo the sound travels the distance twice, so v = 2d / t.",
            "Halving the measured time before multiplying by the speed gives the one-way distance.",
          ],
        },
      ],
      examinerTips: [
        "Name both a compression and a rarefaction when describing sound as a longitudinal wave.",
        "For the bell jar give the observation and the conclusion in separate sentences, as both are marked.",
        "Show the factor of two explicitly in an echo calculation, since that step carries a method mark.",
        "Quote the speed of sound in air as a range of 330 to 350 m/s rather than one exact value.",
        "In a speed measurement question, always suggest a longer distance to reduce reaction-time error.",
      ],
      commonMistakes: [
        "Describing sound as transverse, when its particle vibrations are parallel to the travel direction.",
        "Saying that air travels all the way from the loudspeaker to the ear.",
        "Forgetting to halve the echo time, which doubles the distance calculated.",
        "Claiming the bell stops vibrating in an evacuated jar, so the sound fades.",
        "Using 3.0 × 10^8 m/s for sound, which belongs to electromagnetic waves.",
      ],
      recap: [
        "Describe how a loudspeaker produces a sound that travels through air. [3]",
        "Explain what is meant by a compression and by a rarefaction in a sound wave. [3]",
        "Describe the bell jar experiment and state the conclusion it supports. [4]",
        "A girl hears an echo 0.75 s after clapping. Calculate her distance from the wall using 340 m/s. [3]",
        "State the approximate speed of sound in air. [1]",
      ],
    },
    {
      title: "Loudness, Pitch and the Uses of Ultrasound",
      body: `### Loudness Comes from Amplitude

The **loudness** of a sound depends mainly on the **amplitude** of the wave reaching the ear.

A larger amplitude means greater displacement of the particles, so the wave carries more energy.

Striking a tuning fork harder increases its amplitude and makes the note louder, while the pitch stays the same.

Loudness falls as distance from the source increases, because the same energy spreads over a larger area.

### Pitch Comes from Frequency

The **pitch** of a sound depends on its **frequency**.

A higher frequency gives a higher pitch and a lower frequency gives a deeper note.

Tightening or shortening a guitar string raises its frequency, so the note it plays becomes higher.

Two sounds of the same loudness can have very different pitches, which shows the two quantities are separate.

**Human hearing covers approximately 20 Hz to 20 000 Hz**, and the upper limit falls with age.

### Ultrasound Above the Range of Hearing

**Ultrasound is sound with a frequency higher than 20 kHz**, so it lies above the audible range.

It is a longitudinal wave and travels at the same speed as audible sound in the same medium.

Ultrasound is reflected at boundaries between materials, exactly as an echo is reflected from a wall.

Its short wavelength lets it be sent as a narrow beam, which is what makes scanning possible.

### Scanning, Testing and Sonar

Medical scanning of soft tissue sends pulses of ultrasound into the body from a probe.

Each boundary inside the body reflects part of the pulse, and the machine times the returning echoes.

Depth follows from the time and the speed of ultrasound in tissue, using d = v × t / 2.

That is how an unborn baby is imaged, and how soft tissue structures are examined.

Non-destructive testing of materials looks for cracks or air bubbles inside a metal component.

A flaw gives an extra echo between the front surface and the back surface, without the component being cut open.

Sonar pulses sent from a ship to the seabed give the depth from the same time measurement.`,
      groups: [
        {
          subTitle: "Loudness and Amplitude",
          bullets: [
            "Loudness increases when the amplitude of the sound wave increases.",
            "A larger amplitude means more energy arriving at the ear each second.",
            "Striking an instrument harder makes it louder without changing its pitch.",
            "Moving further from a loudspeaker reduces the amplitude and so the loudness.",
            "Amplitude is measured from the middle position of a particle to its maximum displacement.",
          ],
        },
        {
          subTitle: "Pitch and Frequency",
          bullets: [
            "Pitch rises when the frequency of the vibrating source rises.",
            "A shorter or tighter string vibrates at a higher frequency and gives a higher pitch.",
            "Loudness and pitch are separate, since one note can be played loudly or quietly.",
            "The audible range for humans is approximately 20 Hz to 20 000 Hz.",
            "Ultrasound is sound with a frequency above 20 kHz.",
          ],
        },
        {
          subTitle: "Uses of Ultrasound",
          bullets: [
            "Medical scanning of soft tissue, including images of an unborn baby.",
            "Non-destructive testing of materials, revealing flaws inside components without cutting them.",
            "Sonar for finding the depth of water or the distance to a submerged object.",
            "Echoes return from boundaries, so each echo marks one surface or crack.",
            "Depth or distance is calculated from the time and the wave speed.",
          ],
        },
        {
          subTitle: "Echo Calculations",
          bullets: [
            "Use d = v × t / 2 whenever a pulse travels outwards and back again.",
            "A 0.2 s return with ultrasound at 1500 m/s in water gives a depth of 150 m.",
            "An echo arriving earlier than the back surface echo marks an internal flaw.",
            "Use the speed of ultrasound in that material, not the speed of sound in air.",
            "Measurements of soft tissue work because most of the body is liquid, which carries ultrasound well.",
          ],
        },
      ],
      examinerTips: [
        "Keep the two quantities apart: amplitude decides loudness, frequency decides pitch.",
        "Quote the audible range as 20 Hz to 20 000 Hz and define ultrasound as above 20 kHz.",
        "For a use of ultrasound, first say that it is reflected at boundaries, then name the application.",
        "Show the halving step in a sonar calculation and give the answer in metres.",
        "State that ultrasound uses the speed in that medium, since examiners check the value you choose.",
      ],
      commonMistakes: [
        "Saying a louder sound must have a higher pitch.",
        "Defining ultrasound as sound that is too loud to hear, rather than too high in frequency.",
        "Using the speed of sound in air for an ultrasound calculation in water or tissue.",
        "Forgetting that a scanning or sonar pulse travels its distance twice.",
        "Claiming ultrasound passes through everything without reflecting, so no echo could ever return.",
      ],
      recap: [
        "State the approximate range of frequencies audible to a human ear. [2]",
        "Explain how changes in amplitude and in frequency affect the loudness and pitch of a sound. [4]",
        "Define ultrasound and give one of its medical uses. [2]",
        "A ship sends an ultrasound pulse that returns after 0.4 s. Calculate the depth using 1500 m/s. [3]",
        "Describe how ultrasound is used in the non-destructive testing of a metal component. [3]",
      ],
    },
  ],
}

export const PHYSICS_CHAPTER_3: Chapter = chapterThree
