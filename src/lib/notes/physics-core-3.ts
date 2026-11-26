import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Physics (0625) Core Notes
 * Chapters 12–15: Waves (General Properties, Light & Optics, Electromagnetic Spectrum, Sound)
 * Section: 3. Waves
 */
export const PHYSICS_CORE_PART3: Chapter[] = [
  {
    number: 12,
    title: "General Properties of Waves",
    section: "3. Waves",
    topic: "Transverse & Longitudinal Waves, Wave Equation & Diffraction",
    intro:
      "Waves transfer energy from one location to another without transferring matter. Candidates distinguish between transverse and longitudinal waves, use the wave equation v = fλ, and understand reflection, refraction, and diffraction.",
    subheadings: [
      {
        title: "Wave Characteristics, Transverse and Longitudinal Waves",
        body:
          "**Key Definitions:**\n" +
          "- **Wavelength ($\\lambda$):** The distance between two successive crests, troughs, or identical points on adjacent waves (measured in metres, $\\text{m}$).\n" +
          "- **Frequency ($f$):** The number of complete wave cycles passing a point per second (measured in hertz, $\\text{Hz}$, where $1\\text{ Hz} = 1\\text{ wave/s}$).\n" +
          "- **Amplitude ($A$):** The maximum displacement of a particle from its undisturbed equilibrium position (measured in metres, $\\text{m}$).\n" +
          "- **Period ($T$):** The time taken for one complete wave cycle to pass: $T = \\frac{1}{f}$.\n" +
          "- **Wavefront:** A line or surface joining points of a wave that are in phase (e.g. crests).\n\n" +
          "**Transverse vs Longitudinal Waves:**\n" +
          "1. **Transverse Waves:**\n" +
          "   - The oscillations of particles are **perpendicular ($90^\\circ$)** to the direction of wave travel / energy transfer.\n" +
          "   - Features crests (peaks) and troughs.\n" +
          "   - *Examples:* All electromagnetic waves (light, radio, X-rays), water waves, S-waves (seismic).\n" +
          "2. **Longitudinal Waves:**\n" +
          "   - The oscillations of particles are **parallel** to the direction of wave travel / energy transfer.\n" +
          "   - Features **compressions** (regions of high particle density / pressure) and **rarefactions** (regions of low particle density / pressure).\n" +
          "   - *Examples:* Sound waves, ultrasound, P-waves (seismic).\n\n" +
          "**The Wave Equation:**\n" +
          "$$\\mathbf{v = f \\lambda}$$\n" +
          "where $v$ is wave speed in $\\text{m/s}$, $f$ is frequency in $\\text{Hz}$, and $\\lambda$ is wavelength in $\\text{m}$.",
        examinerTips: [
          "State clearly: transverse waves oscillate perpendicular to direction of energy transfer; longitudinal waves oscillate parallel to direction of energy transfer.",
          "When waves change medium, frequency $f$ remains CONSTANT (determined by the source); speed and wavelength change together.",
        ],
        commonMistakes: [
          "Defining amplitude as peak-to-trough distance — amplitude is measured from the EQUILIBRIUM centre line to the peak.",
        ],
        recap: [
          "Define wavelength and frequency.",
          "A wave has a frequency of 50 Hz and a wavelength of 0.4 m. Calculate its speed.",
        ],
      },
      {
        title: "Wave Behaviors: Reflection, Refraction and Diffraction",
        body:
          "**1. Reflection:**\n" +
          "- Waves bounce off a barrier.\n" +
          "- Angle of incidence $=$ Angle of reflection ($i = r$).\n" +
          "- **Speed, frequency, and wavelength remain unchanged**.\n\n" +
          "**2. Refraction:**\n" +
          "- Occurs when water waves pass from deep water into shallow water (or light passes into a denser medium).\n" +
          "- In shallow water, waves **slow down** ($v$ decreases).\n" +
          "- Because frequency $f$ is constant, the wavelength **decreases** ($\\lambda = v/f$, wavefronts get closer together).\n" +
          "- The wave changes direction, bending towards the normal.\n\n" +
          "**3. Diffraction:**\n" +
          "- The spreading out of waves as they pass through a narrow gap or around an obstacle.\n" +
          "- **Maximum diffraction** occurs when the gap width is **approximately equal to the wavelength** ($w \\approx \\lambda$).\n" +
          "- If the gap is much wider than the wavelength, waves pass through with minimal spreading (sharp edges).\n" +
          "- Speed, frequency, and wavelength are unaffected by diffraction.",
        examinerTips: [
          "State the condition for maximum diffraction: gap width is approximately equal to the wavelength of the wave.",
        ],
        commonMistakes: [
          "Changing the wavelength when drawing diffracted wavefronts — the spacing between wavefronts must stay identical before and after the gap.",
        ],
        recap: [
          "What happens to the speed, frequency, and wavelength of water waves when they travel from deep water into shallow water?",
          "Describe how gap width affects the degree of diffraction of a wave.",
        ],
      },
    ],
  },
  {
    number: 13,
    title: "Light & Optics",
    section: "3. Waves",
    topic: "Reflection, Refraction, Thin Lenses & Dispersion",
    intro:
      "Light is a transverse electromagnetic wave that travels in straight lines. Candidates study reflection in plane mirrors, refraction at boundaries, image formation in thin converging lenses, and dispersion.",
    subheadings: [
      {
        title: "Reflection in a Plane Mirror",
        body:
          "**The Law of Reflection:**\n" +
          "$$\\mathbf{\\text{Angle of incidence } (i) = \\text{Angle of reflection } (r)}$$\n" +
          "- Both angles are measured between the light ray and the **normal** (an imaginary line drawn perpendicular to the mirror surface at $90^\\circ$).\n\n" +
          "**Properties of an Image Formed by a Plane Mirror:**\n" +
          "1. **Virtual** (cannot be projected onto a screen; formed where rays appear to diverge from).\n" +
          "2. **Upright** (same way up as the object).\n" +
          "3. **Same size** as the object.\n" +
          "4. **Laterally inverted** (left and right swapped).\n" +
          "5. **Same distance behind the mirror** as the object is in front (perpendicular distance $d_{\\text{image}} = d_{\\text{object}}$).",
        examinerTips: [
          "Remember that angle of incidence and reflection are measured relative to the NORMAL, not the surface of the mirror!",
          "List at least three characteristics of a plane mirror image: virtual, upright, same size, same distance behind.",
        ],
        commonMistakes: [
          "Measuring angles from the mirror surface instead of the normal.",
        ],
        recap: [
          "State the law of reflection.",
          "List four properties of an image formed by a plane mirror.",
        ],
      },
      {
        title: "Refraction & Total Internal Reflection",
        body:
          "**Refraction of Light:**\n" +
          "- When light travels from a less optically dense medium (air) into a denser medium (glass or water):\n" +
          "  - Light slows down.\n" +
          "  - The ray bends **towards the normal** ($i > r$).\n" +
          "- When light travels from a denser medium (glass) into a less dense medium (air):\n" +
          "  - Light speeds up.\n" +
          "  - The ray bends **away from the normal** ($i < r$).\n\n" +
          "**Total Internal Reflection (TIR):**\n" +
          "- Occurs when light attempts to travel from an optically **denser medium to a less dense medium** (e.g. glass to air).\n" +
          "- **Critical Angle ($c$):** The angle of incidence in the denser medium for which the angle of refraction is exactly $90^\\circ$ along the boundary.\n" +
          "- **Conditions for Total Internal Reflection to Occur:**\n" +
          "  1. Light must travel from a **denser medium towards a less dense medium**.\n" +
          "  2. The angle of incidence must be **greater than the critical angle** ($i > c$).\n" +
          "- **Applications:** Optical fibres for telecommunications and medical endoscopes, reflective prisms in periscopes and binoculars.",
        examinerTips: [
          "Two marks for TIR conditions: (1) travelling from denser to less dense medium, AND (2) angle of incidence is greater than the critical angle.",
        ],
        commonMistakes: [
          "Stating TIR can occur when light travels from air into glass — it can ONLY occur from denser into less dense medium.",
        ],
        recap: [
          "Define critical angle.",
          "State the two conditions necessary for total internal reflection to occur.",
        ],
      },
      {
        title: "Thin Converging Lenses & Dispersion",
        body:
          "**Thin Converging (Convex) Lens:**\n" +
          "- Thicker in the middle than at the edges.\n" +
          "- **Principal Focus (Focal Point $F$):** The point on the principal axis where rays parallel to the axis converge after passing through the lens.\n" +
          "- **Focal Length ($f$):** Distance from the optical centre of the lens to the principal focus.\n\n" +
          "**Real vs Virtual Images:**\n" +
          "- **Real Image:** Formed where light rays physically intersect; can be focused onto a screen; inverted. (Used in cameras, projectors, the human eye).\n" +
          "- **Virtual Image:** Formed where rays only appear to diverge from; cannot be caught on a screen; upright. Formed when the object is placed **closer than the focal length ($d < f$)** $\\implies$ used as a **magnifying glass**.\n\n" +
          "**Dispersion of White Light:**\n" +
          "- When white light passes through a triangular glass prism, it is refracted and separated into its spectrum of colours:\n" +
          "  **Red, Orange, Yellow, Green, Blue, Indigo, Violet** (ROYGBIV).\n" +
          "- Red light has the longest wavelength and is refracted the least.\n" +
          "- Violet light has the shortest wavelength and is refracted the most.",
        examinerTips: [
          "Remember: Red light refracts the least (slows down least); Violet light refracts the most (slows down most).",
        ],
        commonMistakes: [
          "Drawing light rays passing through the optical centre bending — rays passing straight through the optical centre do NOT bend.",
        ],
        recap: [
          "What is meant by the principal focus of a converging lens?",
          "Explain why white light splits into colours when passing through a prism.",
        ],
      },
    ],
  },
  {
    number: 14,
    title: "The Electromagnetic Spectrum",
    section: "3. Waves",
    topic: "EM Wave Properties, Applications & Dangers",
    intro:
      "The electromagnetic spectrum encompasses seven continuous bands of transverse waves. Candidates know the sequence in order of wavelength and frequency, their common speed in a vacuum, and practical uses and hazards.",
    subheadings: [
      {
        title: "Properties and Order of the EM Spectrum",
        body:
          "**Common Properties of All Electromagnetic Waves:**\n" +
          "1. All are **transverse waves** consisting of oscillating electric and magnetic fields.\n" +
          "2. All travel at the exact same speed in a vacuum: the speed of light, $c = \\mathbf{3.0 \\times 10^8\\text{ m/s}}$.\n" +
          "3. All can travel through a vacuum (do not require a material medium).\n" +
          "4. All obey the wave equation $v = f\\lambda$.\n" +
          "5. All transfer energy from a source to an absorber.\n\n" +
          "**Order of the Spectrum (Longest $\\lambda$ / Lowest $f$ to Shortest $\\lambda$ / Highest $f$):**\n" +
          "$$\\mathbf{\\text{Radio} \\to \\text{Microwave} \\to \\text{Infrared} \\to \\text{Visible Light} \\to \\text{Ultraviolet} \\to \\text{X-rays} \\to \\text{Gamma rays}}$$\n" +
          "- Long wavelength, low frequency, low photon energy $\\implies$ **Radio waves**.\n" +
          "- Short wavelength, high frequency, high ionising energy $\\implies$ **Gamma rays**.",
        examinerTips: [
          "Memorise the exact speed of electromagnetic waves in a vacuum: $3.0 \\times 10^8$ m/s.",
          "Remember the mnemonic: **R**aging **M**artians **I**nvaded **V**enus **U**sing **X**-ray **G**uns.",
        ],
        commonMistakes: [
          "Thinking light travels faster than radio waves — ALL electromagnetic waves travel at the exact same speed ($3 \\times 10^8$ m/s) in a vacuum.",
        ],
        recap: [
          "State two properties shared by all electromagnetic waves.",
          "List the seven regions of the electromagnetic spectrum in order of increasing frequency.",
        ],
      },
      {
        title: "Applications and Dangers of EM Waves",
        body:
          "**Uses and Hazards Across the Spectrum:**\n" +
          "1. **Radio Waves:**\n" +
          "   - *Uses:* Radio and television broadcasting, RFID communication.\n" +
          "   - *Hazards:* No known biological hazards at normal exposure levels.\n" +
          "2. **Microwaves:**\n" +
          "   - *Uses:* Satellite television communications, mobile phone networks, cooking food (absorbed by water molecules).\n" +
          "   - *Hazards:* Internal heating of body tissues.\n" +
          "3. **Infrared (IR):**\n" +
          "   - *Uses:* TV remote controls, thermal imaging cameras, radiant heaters, optical fibre communication.\n" +
          "   - *Hazards:* Skin burns from intense heating.\n" +
          "4. **Visible Light:**\n" +
          "   - *Uses:* Human vision, photography, illumination.\n" +
          "   - *Hazards:* Intense light can cause retinal damage to eyes.\n" +
          "5. **Ultraviolet (UV):**\n" +
          "   - *Uses:* Fluorescent lighting, security marking of bank notes, sterilising surgical instruments.\n" +
          "   - *Hazards:* Sunburn, premature skin ageing, cataracts, increased risk of skin cancer.\n" +
          "6. **X-rays:**\n" +
          "   - *Uses:* Medical diagnostic radiography (imaging bones), airport baggage security scans.\n" +
          "   - *Hazards:* Ionising radiation; causes cell mutations and cancer.\n" +
          "7. **Gamma Rays:**\n" +
          "   - *Uses:* Radiotherapy (killing cancerous tumours), sterilising medical equipment and food.\n" +
          "   - *Hazards:* Highly ionising radiation; penetrates deeply, destroys living cells, causes cancer.",
        examinerTips: [
          "State clearly that ultraviolet, X-rays, and gamma rays are IONISING radiation, which can damage DNA and cause cellular mutation leading to cancer.",
        ],
        commonMistakes: [
          "Confusing microwaves with infrared for remote controls — TV remotes use infrared.",
        ],
        recap: [
          "Name the electromagnetic wave used in mobile phone communication.",
          "State one medical use and one hazard of X-rays.",
        ],
      },
    ],
  },
  {
    number: 15,
    title: "Sound",
    section: "3. Waves",
    topic: "Sound Transmission, Pitch, Loudness & Ultrasound",
    intro:
      "Sound is a longitudinal mechanical wave produced by vibrating sources. Candidates study sound transmission through media, speed differences, echoes, human hearing limits, and ultrasound.",
    subheadings: [
      {
        title: "Nature, Speed and Features of Sound",
        body:
          "**Production and Nature of Sound:**\n" +
          "- Sound is produced by **vibrating sources**.\n" +
          "- It is a **longitudinal wave** that travels via alternating **compressions** (high pressure) and **rarefactions** (low pressure).\n" +
          "- **Requires a medium:** Sound CANNOT travel through a vacuum (proved by the electric bell jar experiment: as air is pumped out, sound fades to silence).\n\n" +
          "**Speed of Sound in Different Media:**\n" +
          "- In air at RTP: $\\approx 330-340\\text{ m/s}$.\n" +
          "- In water (liquid): $\\approx 1500\\text{ m/s}$.\n" +
          "- In steel (solid): $\\approx 5000\\text{ m/s}$.\n" +
          "- Sound travels **fastest in solids** and **slowest in gases** because particles are much closer together in solids, enabling rapid transfer of vibrations.\n\n" +
          "**Pitch and Loudness:**\n" +
          "- **Pitch** is determined by the **frequency** of vibration: higher frequency $\\implies$ higher pitch.\n" +
          "- **Loudness** is determined by the **amplitude** of vibration: larger amplitude $\\implies$ louder sound.\n\n" +
          "**Measuring the Speed of Sound by Echo Method:**\n" +
          "$$\\text{Speed } v = \\frac{2d}{t}$$\n" +
          "where $d$ is distance to the reflecting wall and $t$ is the time between making the sound and hearing the echo.",
        examinerTips: [
          "In echo calculations, remember the sound travels to the wall AND BACK! The total distance is $2d$.",
          "Audible frequency range for normal human hearing: 20 Hz to 20,000 Hz (20 kHz).",
        ],
        commonMistakes: [
          "Forgetting to multiply distance by 2 in echo calculations.",
        ],
        recap: [
          "Explain why sound cannot travel through a vacuum.",
          "State what property of a sound wave determines its pitch and its loudness.",
        ],
      },
      {
        title: "Ultrasound & Applications",
        body:
          "**Definition of Ultrasound:**\n" +
          "Sound waves with frequencies **greater than $20{,}000\\text{ Hz}$** ($20\\text{ kHz}$), which is above the upper limit of human hearing.\n\n" +
          "**Applications of Ultrasound:**\n" +
          "1. **Pre-natal Scanning (Medical Imaging):**\n" +
          "   - Ultrasound pulses are sent into the body.\n" +
          "   - When waves meet a boundary between different tissues (e.g. fluid and fetal bone), part of the wave is reflected back.\n" +
          "   - The time taken for reflected pulses to return is detected and processed by a computer to build a real-time image.\n" +
          "   - *Advantage over X-rays:* Ultrasound is **non-ionising** and completely safe for developing fetuses.\n" +
          "2. **Sonar (Echo Sounding at Sea):**\n" +
          "   - Ships send ultrasound pulses downwards to measure sea depth ($d = \\frac{vt}{2}$) and locate schools of fish.\n" +
          "3. **Non-Destructive Testing:**\n" +
          "   - Detecting internal cracks or air voids in metal engine blocks and aircraft wings.",
        examinerTips: [
          "Give two reasons why ultrasound is preferred over X-rays for pre-natal scanning: (1) it is non-ionising, (2) it causes no damage to the fetus.",
        ],
        commonMistakes: [
          "Calling ultrasound electromagnetic radiation — ultrasound is mechanical longitudinal sound waves.",
        ],
        recap: [
          "Define ultrasound.",
          "State two advantages of using ultrasound rather than X-rays to scan an unborn baby.",
        ],
      },
    ],
  },
];
