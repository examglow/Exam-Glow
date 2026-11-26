import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Physics (0625) Extended Notes
 * Chapters 12–16: Waves (Wavefronts, Snell's Law, Lens Ray Diagrams, EM Spectrum, Ultrasound & Oscilloscopes)
 * Section: 3. Waves
 */
export const PHYSICS_EXTENDED_PART3: Chapter[] = [
  {
    number: 12,
    title: "General Properties of Waves & Wavefronts",
    section: "3. Waves",
    topic: "Wavefront Diagrams, Wave Equation & Gap Diffraction",
    intro:
      "Waves transfer energy without matter. Extended candidates analyze wavefront diagrams, apply the wave equation v = fλ across boundaries, and explain why wave speed decreases while frequency stays constant during refraction.",
    subheadings: [
      {
        title: "Wavefront Refraction & Boundary Mathematics",
        body:
          "**Wavefronts and Rays:**\n" +
          "- A **wavefront** connects adjacent points that are vibrating in identical phase (e.g. crests).\n" +
          "- **Rays** indicate the direction of energy transfer and are always **perpendicular ($90^\\circ$)** to the wavefronts.\n\n" +
          "**Refraction Across Boundaries (Deep to Shallow Water):**\n" +
          "- In shallow water, friction with the bottom causes wave speed to decrease ($v_2 < v_1$).\n" +
          "- The **frequency $f$ remains constant** (determined solely by the vibrating source).\n" +
          "- By $v = f\\lambda$, as speed decreases, **wavelength must decrease proportionally**:\n" +
          "  $$\\frac{v_1}{\\lambda_1} = \\frac{v_2}{\\lambda_2} = f$$\n" +
          "- When waves strike the boundary at an angle, the part entering shallow water slows down first, swinging the wavefronts towards the boundary (the ray bends towards the normal).",
        examinerTips: [
          "State clearly: frequency NEVER changes during refraction. Wavelength changes because speed changes.",
        ],
        commonMistakes: [
          "Changing the frequency when light or water waves enter a different medium.",
        ],
        recap: [
          "State the relationship between rays and wavefronts.",
          "Water waves travel at 0.30 m/s with a wavelength of 0.06 m in deep water. In shallow water, their speed is 0.20 m/s. Calculate their frequency and their wavelength in shallow water.",
        ],
      },
    ],
  },
  {
    number: 13,
    title: "Refraction, Snell's Law & Total Internal Reflection",
    section: "3. Waves",
    topic: "Refractive Index, Snell's Law & Critical Angle Calculations",
    intro:
      "Refraction occurs due to changes in wave speed. Extended candidates calculate refractive indices using Snell's law (n = sin i / sin r), speed ratios (n = c / v), and critical angle formulas (n = 1 / sin c).",
    subheadings: [
      {
        title: "Snell's Law and Refractive Index",
        body:
          "**The Refractive Index ($n$):**\n" +
          "A dimensionless ratio measuring the optical density of a medium.\n\n" +
          "**1. Snell's Law (Angles in Air and Medium):**\n" +
          "$$\\mathbf{n = \\frac{\\sin i}{\\sin r}}$$\n" +
          "where $i$ is the angle of incidence in air (or vacuum) and $r$ is the angle of refraction in the medium.\n\n" +
          "**2. Wave Speed Ratio:**\n" +
          "$$\\mathbf{n = \\frac{c}{v}}$$\n" +
          "where $c$ is speed of light in vacuum ($3.0 \\times 10^8\\text{ m/s}$) and $v$ is speed of light in the medium.\n\n" +
          "*Worked Example:* A ray of light travelling in air strikes a glass block at an angle of incidence of $45^\\circ$. The glass has a refractive index of $1.50$. Calculate the angle of refraction $r$.\n" +
          "- $n = \\frac{\\sin i}{\\sin r} \\implies 1.50 = \\frac{\\sin 45^\\circ}{\\sin r}$\n" +
          "- $\\sin r = \\frac{\\sin 45^\\circ}{1.50} = \\frac{0.7071}{1.50} \\approx 0.4714$\n" +
          "- $r = \\sin^{-1}(0.4714) = \\mathbf{28.1^\\circ}$.",
        examinerTips: [
          "In $n = \\sin i / \\sin r$, the angle in AIR is always on top (the larger angle), so $n > 1.0$ for all physical media.",
        ],
        commonMistakes: [
          "Inverting the formula to calculate $n < 1.0$ for glass or water — refractive index of any medium relative to air is always greater than 1.",
        ],
        recap: [
          "State Snell's law.",
          "Light travels at 2.0 × 10⁸ m/s in plastic. Calculate the refractive index of the plastic (c = 3.0 × 10⁸ m/s).",
        ],
      },
      {
        title: "Critical Angle & Total Internal Reflection Calculations",
        body:
          "**Formula for Critical Angle ($c$):**\n" +
          "When light travels from a dense medium of refractive index $n$ into air, at the critical angle $c$, the angle of refraction is $90^\\circ$:\n" +
          "$$\\frac{\\sin c}{\\sin 90^\\circ} = \\frac{1}{n} \\implies \\mathbf{\\sin c = \\frac{1}{n} \\iff n = \\frac{1}{\\sin c}}$$\n\n" +
          "*Worked Example:* The refractive index of diamond is $2.42$. Calculate its critical angle.\n" +
          "- $\\sin c = \\frac{1}{2.42} \\approx 0.4132$\n" +
          "- $c = \\sin^{-1}(0.4132) = \\mathbf{24.4^\\circ}$.\n" +
          "- *Consequence:* Because diamond has such a small critical angle, almost all light entering it strikes the internal facets at angles greater than $24.4^\\circ$, undergoing multiple total internal reflections before exiting, giving diamond its brilliant sparkle.",
        examinerTips: [
          "Remember that $n = 1 / \\sin c$. Check that your calculator gives an angle between 0 and 90 degrees.",
        ],
        commonMistakes: [
          "Writing $\\sin c = n$ instead of $\\sin c = 1/n$.",
        ],
        recap: [
          "State the formula linking critical angle $c$ and refractive index $n$.",
          "Glass has a critical angle of 42°. Calculate the refractive index of the glass.",
        ],
      },
    ],
  },
  {
    number: 14,
    title: "Thin Lenses & Ray Diagrams",
    section: "3. Waves",
    topic: "Ray Construction, Linear Magnification & Real vs Virtual Images",
    intro:
      "Lenses refract light to form real or virtual images. Extended candidates construct precision ray diagrams with principal rays, determine image characteristics, and calculate linear magnification.",
    subheadings: [
      {
        title: "Ray Construction for Thin Converging Lenses",
        body:
          "**Three Standard Principal Rays to Locate Images:**\n" +
          "1. **Ray 1:** Drawn parallel to the principal axis from the object top $\\implies$ refracts through the **principal focus ($F$)** on the other side.\n" +
          "2. **Ray 2:** Drawn straight through the **optical centre ($C$)** of the lens $\\implies$ continues in a straight line without bending.\n" +
          "3. **Ray 3:** Drawn through the principal focus ($F$) on the object side $\\implies$ emerges **parallel to the principal axis**.\n\n" +
          "**Image Characteristics Based on Object Distance ($u$):**\n" +
          "- **$u > 2f$ (Camera, Eye):** Real, inverted, diminished (smaller), formed between $f$ and $2f$.\n" +
          "- **$u = 2f$ (Photocopier 1:1):** Real, inverted, same size, formed at $2f$.\n" +
          "- **$f < u < 2f$ (Projector):** Real, inverted, magnified (enlarged), formed beyond $2f$.\n" +
          "- **$u < f$ (Magnifying Glass):** Virtual, upright, magnified, formed on the same side as the object (rays diverge; extend backward as dashed lines to meet).\n\n" +
          "**Linear Magnification ($M$):**\n" +
          "$$\\mathbf{M = \\frac{\\text{Image height}}{\\text{Object height}} = \\frac{\\text{Image distance } v}{\\text{Object distance } u}}$$",
        examinerTips: [
          "Virtual rays must ALWAYS be drawn as dashed lines (- - - -). Drawing real solid lines for virtual rays loses construction marks.",
        ],
        commonMistakes: [
          "Drawing virtual images with solid lines instead of dashed lines.",
        ],
        recap: [
          "Describe how a converging lens can be used as a magnifying glass.",
          "An object of height 3 cm placed in front of a lens produces an image of height 9 cm. Calculate the linear magnification.",
        ],
      },
    ],
  },
  {
    number: 15,
    title: "Electromagnetic Spectrum & Digital Communications",
    section: "3. Waves",
    topic: "Band Properties, Analogue vs Digital & Space Transmission",
    intro:
      "Electromagnetic radiation carries communication signals across the globe and through space. Extended candidates compare analogue and digital signals and discuss optical fibres and satellite microwaves.",
    subheadings: [
      {
        title: "Communication Systems & Analogue vs Digital Signals",
        body:
          "**Carrier Waves for Communication:**\n" +
          "- **Radio waves:** Ground-wave and sky-wave reflection from the ionosphere for long-range terrestrial radio.\n" +
          "- **Microwaves:** High frequency, penetrates the ionosphere without reflection $\\implies$ used for satellite television and satellite internet communication.\n" +
          "- **Optical Fibres (Infrared and Visible Light):** Total internal reflection inside high-purity glass fibres transmits gigabits of data per second with minimal attenuation.\n\n" +
          "**Analogue vs Digital Signals:**\n" +
          "- **Analogue Signal:** Varies continuously in amplitude and frequency over time (e.g. human voice into a microphone).\n" +
          "- **Digital Signal:** Consists of discrete binary pulses of two distinct states: **HIGH ($1$)** or **LOW ($0$)**.\n" +
          "- **Advantages of Digital over Analogue:**\n" +
          "  1. **Noise resistance:** As signals travel, they pick up unwanted noise. In digital transmission, regenerator amplifiers clean up noise by restoring pulses to pure $0$s and $1$s.\n" +
          "  2. **Higher data transmission rate:** Multiple digital signals can be multiplexed down a single channel.\n" +
          "  3. **Error detection:** Checksums and parity bits allow corrupted data to be corrected.",
        examinerTips: [
          "State two advantages of digital signals over analogue signals: (1) noise can be easily removed, (2) higher data rate / multiplexing.",
        ],
        commonMistakes: [
          "Saying digital signals do not pick up noise — digital signals DO pick up noise, but the noise can be filtered out during regeneration.",
        ],
        recap: [
          "Explain why microwaves are used for satellite communication rather than radio waves.",
          "State two advantages of transmitting information in digital form rather than analogue form.",
        ],
      },
    ],
  },
  {
    number: 16,
    title: "Sound, Oscilloscopes & Ultrasound",
    section: "3. Waves",
    topic: "Longitudinal Acoustics, CRO Displays & Pulse-Echo Calculations",
    intro:
      "Acoustics explores mechanical vibrations. Extended candidates determine sound speeds using cathode-ray oscilloscopes and microphones, and perform pulse-echo ultrasound distance calculations.",
    subheadings: [
      {
        title: "Oscilloscope Displays and Ultrasound Calculations",
        body:
          "**Interpreting a Cathode-Ray Oscilloscope (CRO) Display:**\n" +
          "- A microphone converts sound pressure waves into an electrical signal displayed on a CRO screen.\n" +
          "- **Y-gain setting:** Determines vertical voltage scale (e.g. $2\\text{ V/div}$).\n" +
          "- **Timebase setting:** Determines horizontal time scale (e.g. $5\\text{ ms/div}$).\n" +
          "- **Calculating Period ($T$):** Count horizontal divisions for one complete wave cycle and multiply by the timebase setting:\n" +
          "  $$T = \\text{number of divisions} \\times \\text{timebase setting}$$\n" +
          "- **Calculating Frequency ($f$):** $f = \\frac{1}{T}$.\n\n" +
          "**Pulse-Echo Ultrasound Calculations:**\n" +
          "- Ultrasound pulses reflect from acoustic boundaries.\n" +
          "- Distance to boundary: $\\mathbf{d = \\frac{v \\times t}{2}}$, where $t$ is total time from pulse emission to echo reception.",
        examinerTips: [
          "In CRO calculations, watch the time units: convert milliseconds (ms) to seconds ($1\\text{ ms} = 10^{-3}\\text{ s}$) before calculating $f = 1/T$.",
        ],
        commonMistakes: [
          "Forgetting to divide by 2 in ultrasound pulse-echo travel time calculations.",
        ],
        recap: [
          "On a CRO, one complete wave cycle occupies 4 divisions. The timebase is set to 2.5 ms/div. Calculate the period and frequency of the sound wave.",
        ],
      },
    ],
  },
];
