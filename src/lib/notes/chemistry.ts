import type { SubjectNotes } from "./types";

export const CHEMISTRY: SubjectNotes = {
  id: "chemistry",
  name: "Chemistry",
  code: "0620",
  color: "bg-blue-500",
  chapters: [
    {
      number: 1,
      title: "The Particulate Nature of Matter",
      intro: "All matter — every substance you can see, touch, breathe, or drink — is composed of tiny particles in constant motion. The kinetic particle theory explains the three states of matter (solid, liquid, gas) and predicts how substances behave when heated, cooled, compressed, or mixed. This model is the foundation of all physical chemistry: understanding it deeply means you can explain phenomena like diffusion, boiling, dissolving, and gas pressure from first principles rather than memorising individual facts.",
      subheadings: [
        {
          title: "Kinetic Particle Theory — States of Matter",
          body: `The **kinetic particle theory** makes three core claims:
1. All matter is made of tiny particles (atoms, molecules, or ions)
2. These particles are in constant motion
3. The temperature of a substance is a measure of the **average kinetic energy** of its particles

:::svg[Three States of Matter — Particle Arrangement and Movement]
<svg viewBox="0 0 520 230" width="520" height="230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="520" height="230" fill="#f8fafc" rx="12"/>
  <text x="260" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Three States of Matter — Particle Model</text>

  <!-- SOLID -->
  <rect x="15" y="30" width="155" height="160" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
  <text x="92" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">SOLID</text>
  <!-- Ordered grid of particles -->
  <circle cx="42" cy="75" r="10" fill="#3b82f6" opacity="0.85"/>
  <circle cx="70" cy="75" r="10" fill="#3b82f6" opacity="0.85"/>
  <circle cx="98" cy="75" r="10" fill="#3b82f6" opacity="0.85"/>
  <circle cx="126" cy="75" r="10" fill="#3b82f6" opacity="0.85"/>
  <circle cx="154" cy="75" r="10" fill="#3b82f6" opacity="0.85"/>
  <circle cx="42" cy="103" r="10" fill="#3b82f6" opacity="0.85"/>
  <circle cx="70" cy="103" r="10" fill="#3b82f6" opacity="0.85"/>
  <circle cx="98" cy="103" r="10" fill="#3b82f6" opacity="0.85"/>
  <circle cx="126" cy="103" r="10" fill="#3b82f6" opacity="0.85"/>
  <circle cx="154" cy="103" r="10" fill="#3b82f6" opacity="0.85"/>
  <circle cx="42" cy="131" r="10" fill="#3b82f6" opacity="0.85"/>
  <circle cx="70" cy="131" r="10" fill="#3b82f6" opacity="0.85"/>
  <circle cx="98" cy="131" r="10" fill="#3b82f6" opacity="0.85"/>
  <circle cx="126" cy="131" r="10" fill="#3b82f6" opacity="0.85"/>
  <circle cx="154" cy="131" r="10" fill="#3b82f6" opacity="0.85"/>
  <!-- Small vibration arrows -->
  <path d="M42,62 L42,65 M42,85 L42,88" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="92" y="158" text-anchor="middle" font-size="8.5" fill="#1e40af">Regular lattice</text>
  <text x="92" y="170" text-anchor="middle" font-size="8.5" fill="#1e40af">Vibrate in fixed positions</text>
  <text x="92" y="182" text-anchor="middle" font-size="8.5" fill="#1e40af">Strong forces between particles</text>

  <!-- LIQUID -->
  <rect x="182" y="30" width="155" height="160" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="2"/>
  <text x="259" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">LIQUID</text>
  <!-- Irregular cluster of particles -->
  <circle cx="209" cy="80" r="10" fill="#22c55e" opacity="0.8"/>
  <circle cx="238" cy="72" r="10" fill="#22c55e" opacity="0.8"/>
  <circle cx="260" cy="88" r="10" fill="#22c55e" opacity="0.8"/>
  <circle cx="285" cy="75" r="10" fill="#22c55e" opacity="0.8"/>
  <circle cx="220" cy="108" r="10" fill="#22c55e" opacity="0.8"/>
  <circle cx="248" cy="115" r="10" fill="#22c55e" opacity="0.8"/>
  <circle cx="275" cy="102" r="10" fill="#22c55e" opacity="0.8"/>
  <circle cx="210" cy="135" r="10" fill="#22c55e" opacity="0.8"/>
  <circle cx="240" cy="140" r="10" fill="#22c55e" opacity="0.8"/>
  <circle cx="268" cy="130" r="10" fill="#22c55e" opacity="0.8"/>
  <!-- Movement arrows -->
  <path d="M238,72 L245,65" stroke="#15803d" stroke-width="1.5" marker-end="url(#arr1)"/>
  <path d="M285,75 L292,80" stroke="#15803d" stroke-width="1.5" marker-end="url(#arr1)"/>
  <defs><marker id="arr1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#15803d"/></marker></defs>
  <text x="259" y="158" text-anchor="middle" font-size="8.5" fill="#166534">Random arrangement</text>
  <text x="259" y="170" text-anchor="middle" font-size="8.5" fill="#166534">Move and slide past each other</text>
  <text x="259" y="182" text-anchor="middle" font-size="8.5" fill="#166534">Weaker forces than solid</text>

  <!-- GAS -->
  <rect x="349" y="30" width="157" height="160" rx="10" fill="#fef9c3" stroke="#eab308" stroke-width="2"/>
  <text x="427" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#854d0e">GAS</text>
  <!-- Widely spaced particles with long arrows -->
  <circle cx="375" cy="70" r="10" fill="#eab308" opacity="0.9"/>
  <circle cx="450" cy="80" r="10" fill="#eab308" opacity="0.9"/>
  <circle cx="490" cy="65" r="10" fill="#eab308" opacity="0.9"/>
  <circle cx="390" cy="130" r="10" fill="#eab308" opacity="0.9"/>
  <circle cx="470" cy="140" r="10" fill="#eab308" opacity="0.9"/>
  <circle cx="420" cy="100" r="10" fill="#eab308" opacity="0.9"/>
  <!-- Long fast movement arrows -->
  <path d="M375,60 L368,45" stroke="#b45309" stroke-width="1.5"/>
  <path d="M460,78 L473,65" stroke="#b45309" stroke-width="1.5"/>
  <path d="M420,90 L420,75" stroke="#b45309" stroke-width="1.5"/>
  <text x="427" y="158" text-anchor="middle" font-size="8.5" fill="#92400e">Far apart, random positions</text>
  <text x="427" y="170" text-anchor="middle" font-size="8.5" fill="#92400e">Rapid random motion</text>
  <text x="427" y="182" text-anchor="middle" font-size="8.5" fill="#92400e">Negligible forces between particles</text>

  <!-- Temperature arrow -->
  <path d="M30 198 L490 198" stroke="#cbd5e1" stroke-width="1.5"/>
  <path d="M480 193 L495 198 L480 203" fill="#64748b"/>
  <text x="260" y="215" text-anchor="middle" font-size="9" fill="#64748b">Increasing temperature (kinetic energy) →</text>
</svg>
:::

## Comparing Properties of the Three States

| Property | Solid | Liquid | Gas |
|---------|-------|--------|-----|
| Shape | Fixed | Takes shape of container | Fills entire container |
| Volume | Fixed | Fixed | Not fixed — expands to fill space |
| Density | High | Similar to solid (slightly lower) | Very low (~1000× less than liquid) |
| Compressibility | Cannot compress (particles touching) | Slightly compressible | Highly compressible |
| Can it flow? | No | Yes | Yes |
| Particle arrangement | Regular, ordered lattice | Random but close together | Completely random, far apart |

## Changes of State

When a substance is heated, its particles gain kinetic energy. At the **melting point**, particles gain enough energy to break free from fixed positions. At the **boiling point**, particles gain enough energy to overcome all remaining intermolecular forces.

> **Key fact:** During melting or boiling, the temperature does **NOT rise** even though energy is being supplied. All the energy goes into **breaking intermolecular bonds** (not increasing kinetic energy). This energy is called the **latent heat** of fusion (melting) or vaporisation (boiling).

### Changes of State Diagram

:::svg[Heating Curve Showing Changes of State]
<svg viewBox="0 0 480 220" width="480" height="220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="480" height="220" fill="#f8fafc" rx="12"/>
  <text x="240" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Heating Curve — Temperature vs Heat Energy Supplied</text>
  <!-- Axes -->
  <line x1="50" y1="190" x2="460" y2="190" stroke="#334155" stroke-width="2"/>
  <line x1="50" y1="20" x2="50" y2="190" stroke="#334155" stroke-width="2"/>
  <text x="255" y="210" text-anchor="middle" font-size="10" fill="#475569">Heat energy supplied →</text>
  <text x="18" y="110" text-anchor="middle" font-size="10" fill="#475569" transform="rotate(-90, 18, 110)">Temperature (°C)</text>
  <!-- Curve: solid rises, flat melting, liquid rises, flat boiling, gas rises -->
  <!-- Solid heating (rises) -->
  <polyline points="60,170 120,140" stroke="#3b82f6" stroke-width="3" fill="none"/>
  <!-- Melting plateau -->
  <polyline points="120,140 200,140" stroke="#f97316" stroke-width="3.5" fill="none" stroke-dasharray="0"/>
  <!-- Liquid heating -->
  <polyline points="200,140 300,90" stroke="#22c55e" stroke-width="3" fill="none"/>
  <!-- Boiling plateau -->
  <polyline points="300,90 400,90" stroke="#ef4444" stroke-width="3.5" fill="none"/>
  <!-- Gas heating -->
  <polyline points="400,90 460,65" stroke="#8b5cf6" stroke-width="3" fill="none"/>
  <!-- Labels -->
  <text x="90" y="155" text-anchor="middle" font-size="9" fill="#1d4ed8">Solid</text>
  <text x="160" y="132" text-anchor="middle" font-size="9" fill="#ea580c" font-weight="700">Melting</text>
  <text x="160" y="143" text-anchor="middle" font-size="8.5" fill="#c2410c">(T constant — latent heat)</text>
  <text x="250" y="115" text-anchor="middle" font-size="9" fill="#15803d">Liquid</text>
  <text x="350" y="78" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="700">Boiling</text>
  <text x="350" y="89" text-anchor="middle" font-size="8.5" fill="#b91c1c">(T constant — latent heat)</text>
  <text x="440" y="70" text-anchor="middle" font-size="9" fill="#7c3aed">Gas</text>
  <!-- MP and BP markers -->
  <line x1="120" y1="140" x2="120" y2="190" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="120" y="200" text-anchor="middle" font-size="8.5" fill="#64748b">MP</text>
  <line x1="300" y1="90" x2="300" y2="190" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="300" y="200" text-anchor="middle" font-size="8.5" fill="#64748b">BP</text>
</svg>
:::`,
          groups: [
            {
              subTitle: "Explaining properties using the particle model",
              bullets: [
                "**Why solids cannot be compressed**: The particles in a solid are already touching — there is no space to push them closer. Applying pressure cannot make them smaller because the particles themselves are incompressible.",
                "**Why gases have very low density**: Gas particles are widely spaced (roughly 10× the diameter of the particles themselves between each particle). The same mass of substance occupies ~1000× more volume as a gas than as a liquid, hence ~1000× lower density.",
                "**Why gases can be compressed**: There is large empty space between gas particles. Increasing pressure pushes the particles closer together without compressing the particles themselves.",
                "**Why temperature remains constant during melting**: The energy supplied during melting breaks the forces holding particles in fixed positions (lattice energy). None of the energy increases particle speed (kinetic energy), so temperature doesn't rise. Once all bonds are broken, further energy does increase kinetic energy and temperature rises again."
              ]
            }
          ],
          recap: [
            "Describe the arrangement and movement of particles in a liquid compared to a solid. [4]",
            "Explain, using particle theory, why a gas has much lower density than the same substance as a liquid. [3]",
            "The temperature of a melting solid remains constant as it melts. Explain why, in terms of particles. [3]",
            "A student increases the pressure on a gas in a sealed container. Explain what happens to the volume using the kinetic particle theory. [3]",
            "Describe and explain what happens to the particles in ice as it is heated from −20°C to 120°C. Include what happens at 0°C and 100°C. [6]"
          ]
        },
        {
          title: "Diffusion in Gases and Liquids",
          body: `**Definition:** Diffusion is the ==net movement== of particles from a region of **higher concentration** to a region of **lower concentration**, due to random particle motion. It is a passive process requiring no energy input.

## Why Gases Diffuse Faster Than Liquids

In a gas, particles are far apart and move rapidly (hundreds of metres per second). There are few obstructions. In a liquid, particles are close together and restrict each other's movement. This is why a perfume can be detected across a room within seconds, but a drop of ink takes minutes to spread through still water.

> **Graham's Law:** The rate of diffusion of a gas is inversely proportional to the square root of its molar mass (density). Lighter molecules diffuse faster: rate ∝ 1/√M

## The Classic Ammonia–HCl Experiment

This experiment beautifully demonstrates diffusion rates and allows calculation using Graham's Law.

:::svg[Ammonia and HCl Diffusion Experiment — White Ring Position]
<svg viewBox="0 0 500 160" width="500" height="160" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="500" height="160" fill="#f8fafc" rx="12"/>
  <text x="250" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Ammonia–HCl Diffusion in a Glass Tube</text>
  <!-- Glass tube -->
  <rect x="30" y="55" width="440" height="55" rx="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
  <!-- Cotton wool plugs -->
  <rect x="30" y="55" width="30" height="55" rx="4" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="45" y="78" text-anchor="middle" font-size="8" fill="#b45309">NH₃</text>
  <text x="45" y="90" text-anchor="middle" font-size="7.5" fill="#b45309">cotton</text>
  <text x="45" y="100" text-anchor="middle" font-size="7.5" fill="#b45309">wool</text>
  <rect x="440" y="55" width="30" height="55" rx="4" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="455" y="78" text-anchor="middle" font-size="8" fill="#be185d">HCl</text>
  <text x="455" y="90" text-anchor="middle" font-size="7.5" fill="#be185d">cotton</text>
  <text x="455" y="100" text-anchor="middle" font-size="7.5" fill="#be185d">wool</text>
  <!-- Tube length = 410 px, NH3 Mr=17, HCl Mr=36.5 -->
  <!-- NH3 travels ~60% of tube = 246 px from left end (inner 380px * 0.6 = 228 from inner start 60) -->
  <!-- Ring at ~228px from left inner = ~290 from left edge -->
  <circle cx="270" cy="82" r="18" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="0"/>
  <rect x="255" y="72" width="30" height="20" rx="4" fill="white" opacity="0.85"/>
  <text x="270" y="84" text-anchor="middle" font-size="9.5" fill="#334155" font-weight="700">NH₄Cl</text>
  <text x="270" y="94" text-anchor="middle" font-size="7.5" fill="#64748b">white ring</text>
  <!-- Distance markers -->
  <line x1="60" y1="125" x2="270" y2="125" stroke="#6d28d9" stroke-width="1.5"/>
  <text x="165" y="140" text-anchor="middle" font-size="9" fill="#7c3aed">NH₃ travels further</text>
  <text x="165" y="152" text-anchor="middle" font-size="8.5" fill="#7c3aed">(lighter, faster)</text>
  <line x1="270" y1="125" x2="440" y2="125" stroke="#dc2626" stroke-width="1.5"/>
  <text x="355" y="140" text-anchor="middle" font-size="9" fill="#dc2626">HCl travels less far</text>
  <text x="355" y="152" text-anchor="middle" font-size="8.5" fill="#dc2626">(heavier, slower)</text>
  <!-- Arrow labels for gases -->
  <path d="M75 65 L250 65" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="250,62 260,65 250,68" fill="#7c3aed"/>
  <text x="163" y="62" text-anchor="middle" font-size="8.5" fill="#7c3aed">NH₃ diffuses →</text>
  <path d="M425 100 L290 100" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="290,97 280,100 290,103" fill="#dc2626"/>
  <text x="357" y="113" text-anchor="middle" font-size="8.5" fill="#dc2626">← HCl diffuses</text>
</svg>
:::

### What Happens — Step by Step

1. Cotton wool soaked in concentrated HCl is plugged into one end; cotton wool soaked in ammonia solution is plugged into the other end.
2. Both release gases: **HCl(g)** from the hydrochloric acid plug; **NH₃(g)** from the ammonia plug.
3. Both gases diffuse toward each other along the tube.
4. Where they meet, they react: **NH₃(g) + HCl(g) → NH₄Cl(s)** — a white solid (ammonium chloride) appears as a white ring.
5. The ring forms **closer to the HCl end** — because NH₃ (Mr = 17) is lighter than HCl (Mr = 36.5) and diffuses faster.

### Calculating Predicted Position (Graham's Law)
$$\\text{Rate}_{NH_3} / \\text{Rate}_{HCl} = \\sqrt{M_{HCl} / M_{NH_3}} = \\sqrt{36.5 / 17} = \\sqrt{2.147} \\approx 1.47$$

So NH₃ diffuses 1.47 times faster than HCl. In a 60 cm tube, NH₃ travels 60 × 1.47/(1 + 1.47) ≈ 35.7 cm and HCl travels 24.3 cm. The ring forms ~35.7 cm from the NH₃ end (i.e. closer to the HCl end). ✓

## Factors Affecting Diffusion Rate

1. **Temperature** — higher T → faster particles → faster diffusion
2. **Molar mass (for gases)** — lower Mr → faster diffusion (Graham's Law)
3. **Concentration gradient** — steeper gradient → faster net movement
4. **Distance** — shorter diffusion path → faster net movement`,
          groups: [],
          recap: [
            "Explain, using the kinetic particle theory, why gases diffuse faster than liquids. [3]",
            "In the ammonia–HCl experiment, the white ring of ammonium chloride forms closer to the HCl end. Explain why, including the molar masses of both gases. [4]",
            "State two factors that would increase the rate of diffusion of a gas and explain each. [4]",
            "Predict whether nitrogen (Mr = 28) or carbon dioxide (Mr = 44) will diffuse faster. Justify your answer using Graham's Law. [3]",
            "Write the equation for the reaction between ammonia gas and hydrogen chloride gas. State what type of reaction this is and identify the product formed. [3]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Atoms, Elements and Compounds",
      intro: "The atom is the fundamental unit of all chemical matter. Understanding atomic structure — the arrangement of protons, neutrons, and electrons — explains the entire Periodic Table, chemical bonding, and the properties of substances. The electron configuration of an atom determines everything about how it reacts. The difference between ionic bonding (electron transfer) and covalent bonding (electron sharing) explains the dramatically different properties of substances such as salt versus sugar, diamond versus graphite, and water versus iron.",
      subheadings: [
        {
          title: "Atomic Structure — Protons, Neutrons and Electrons",
          body: `An atom consists of a tiny, dense, positively charged **nucleus** surrounded by **electrons** arranged in energy levels (shells). The nucleus contains **protons** and **neutrons** held together by the strong nuclear force.

:::svg[Atomic Structure — Carbon-12 Atom]
<svg viewBox="0 0 420 240" width="420" height="240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="420" height="240" fill="#f8fafc" rx="12"/>
  <text x="210" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Atomic Structure — Carbon-12 (⁶¹²C)</text>
  <!-- Nucleus -->
  <circle cx="210" cy="125" r="35" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="210" y="119" text-anchor="middle" font-size="9.5" fill="white" font-weight="700">6 protons</text>
  <text x="210" y="132" text-anchor="middle" font-size="9.5" fill="#93c5fd">6 neutrons</text>
  <!-- Shell 1 (max 2e) -->
  <circle cx="210" cy="125" r="70" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="210" cy="55" r="9" fill="#3b82f6"/><text x="210" y="58" text-anchor="middle" font-size="8" fill="white">e⁻</text>
  <circle cx="210" cy="195" r="9" fill="#3b82f6"/><text x="210" y="198" text-anchor="middle" font-size="8" fill="white">e⁻</text>
  <!-- Shell 2 (4 electrons) -->
  <circle cx="210" cy="125" r="115" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="325" cy="125" r="9" fill="#22c55e"/><text x="325" y="128" text-anchor="middle" font-size="8" fill="white">e⁻</text>
  <circle cx="95" cy="125" r="9" fill="#22c55e"/><text x="95" y="128" text-anchor="middle" font-size="8" fill="white">e⁻</text>
  <circle cx="210" cy="10" r="9" fill="#22c55e"/><text x="210" y="13" text-anchor="middle" font-size="8" fill="white">e⁻</text>
  <circle cx="210" cy="240" r="9" fill="#22c55e"/><text x="210" y="243" text-anchor="middle" font-size="8" fill="white">e⁻</text>
  <!-- Labels -->
  <text x="350" y="56" font-size="9" fill="#1d4ed8">1st shell:</text>
  <text x="350" y="68" font-size="9" fill="#1d4ed8">max 2 electrons</text>
  <text x="350" y="90" font-size="9" fill="#15803d">2nd shell:</text>
  <text x="350" y="102" font-size="9" fill="#15803d">max 8 electrons</text>
  <text x="350" y="114" font-size="8.5" fill="#15803d">(4 shown for C)</text>
  <!-- Particle legend -->
  <circle cx="12" cy="210" r="7" fill="#1e293b"/>
  <text x="25" y="213" font-size="8.5" fill="#334155">Proton (+1)</text>
  <circle cx="12" cy="225" r="7" fill="#93c5fd"/>
  <text x="25" y="228" font-size="8.5" fill="#334155">Neutron (0)</text>
  <circle cx="100" cy="210" r="7" fill="#3b82f6"/>
  <text x="113" y="213" font-size="8.5" fill="#334155">Electron (−1)</text>
  <text x="12" y="243" font-size="8.5" fill="#64748b">Carbon: 6p, 6n, 6e → config: 2,4</text>
</svg>
:::

## Sub-atomic Particles

| Particle | Relative Mass | Relative Charge | Location |
|----------|-------------|----------------|----------|
| Proton | 1 | +1 | Nucleus |
| Neutron | 1 | 0 | Nucleus |
| Electron | 1/1836 (≈ 0) | −1 | Shells around nucleus |

> An atom is electrically neutral because the number of protons = number of electrons. The charges cancel exactly.

## Atomic Number and Mass Number

- **Atomic number (Z)** = number of protons. This uniquely identifies the element — every carbon atom has exactly 6 protons; changing the proton number changes the element.
- **Mass number (A)** = number of protons + number of neutrons
- **Number of neutrons** = A − Z

### Example: Worked Calculation for Chlorine-35

Given: ³⁵₁₇Cl
- Protons = 17 (atomic number)
- Mass number = 35
- Neutrons = 35 − 17 = **18**
- Electrons = 17 (neutral atom)
- Electron configuration: **2, 8, 7** (2 in shell 1, 8 in shell 2, 7 in shell 3)

## Electron Configuration Rules

1. **First shell:** maximum 2 electrons
2. **Second shell:** maximum 8 electrons
3. **Third shell:** maximum 8 electrons (at IGCSE level)
4. Fill innermost shells first
5. The number of electrons in the outermost shell = the **Group number** (for Groups 1–7)
6. The number of occupied shells = the **Period number**

### Examples:

| Element | Z | Configuration | Group | Period |
|---------|---|--------------|-------|--------|
| Hydrogen | 1 | 1 | 1 | 1 |
| Carbon | 6 | 2, 4 | 4 | 2 |
| Sodium | 11 | 2, 8, 1 | 1 | 3 |
| Chlorine | 17 | 2, 8, 7 | 7 | 3 |
| Calcium | 20 | 2, 8, 8, 2 | 2 | 4 |

## Isotopes
**Isotopes** are atoms of the **same element** with the **same number of protons** but **different numbers of neutrons**.

- Same element → same number of protons → same number of electrons → **identical chemical properties**
- Different neutrons → different mass numbers → **different physical properties** (different density, different rate of diffusion for gases)

**Example — Carbon Isotopes:**

| Isotope | Protons | Neutrons | Mass number | Stability |
|---------|---------|----------|-------------|-----------|
| ¹²C | 6 | 6 | 12 | Stable (98.9%) |
| ¹³C | 6 | 7 | 13 | Stable (1.1%) |
| ¹⁴C | 6 | 8 | 14 | Radioactive (used in carbon dating) |

> **Relative atomic mass (Aᵣ)** is the weighted average of the masses of all naturally occurring isotopes, taking their abundances into account. For chlorine: ~75% ³⁵Cl and ~25% ³⁷Cl → Aᵣ = (75×35 + 25×37)/100 = **35.5**`,
          groups: [
            {
              subTitle: "Using electron configuration to predict bonding",
              bullets: [
                "**Noble gas configuration (full outer shell):** All noble gases (Group 0) have full outer shells (He: 2; Ne: 2,8; Ar: 2,8,8). They are chemically inert — they do not bond because their electron configuration is already stable.",
                "**Metals (Groups 1, 2, 3):** Have 1, 2, or 3 outer electrons. They LOSE these electrons to form positive ions with noble gas configuration. Na (2,8,1) loses 1 electron → Na⁺ (2,8). Mg (2,8,2) loses 2 → Mg²⁺ (2,8).",
                "**Non-metals (Groups 4–7):** Have 4–7 outer electrons. They GAIN electrons (ionic bonding) or SHARE electrons (covalent bonding) to complete their outer shell. Cl (2,8,7) gains 1 electron → Cl⁻ (2,8,8). O (2,6) gains 2 → O²⁻ (2,8).",
                "**The octet rule:** Atoms bond in ways that give them 8 electrons in their outer shell (except H and He which aim for 2). This 'full outer shell' configuration corresponds to noble gas stability."
              ]
            }
          ],
          recap: [
            "State the relative mass and relative charge of a proton, neutron, and electron. [3]",
            "An atom of sulfur has atomic number 16 and mass number 32. State the number of protons, neutrons, and electrons. Write its electron configuration. [5]",
            "Explain what isotopes are and why isotopes of the same element have identical chemical properties. [4]",
            "Chlorine has two naturally occurring isotopes: ³⁵Cl (75%) and ³⁷Cl (25%). Calculate the relative atomic mass of chlorine. Show your working. [2]",
            "Explain, using electron configurations, why sodium (Z=11) always forms a 1+ ion and not a 2+ ion when it reacts with chlorine. [3]"
          ]
        },
        {
          title: "Ionic Bonding — Electron Transfer",
          body: `**Ionic bonding** forms when electrons are transferred from a metal atom to a non-metal atom. The resulting oppositely charged ions attract each other by strong electrostatic forces, forming an **ionic lattice** — a giant three-dimensional structure of billions of ions.

## How Ionic Bonds Form — Worked Example: NaCl

:::svg[Formation of Ionic Bond in Sodium Chloride]
<svg viewBox="0 0 520 200" width="520" height="200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="520" height="200" fill="#f8fafc" rx="12"/>
  <text x="260" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Ionic Bond Formation: Na + Cl → Na⁺Cl⁻</text>

  <!-- Sodium atom -->
  <circle cx="90" cy="105" r="50" fill="none" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="90" cy="105" r="30" fill="none" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="90" cy="105" r="12" fill="#ea580c"/>
  <text x="90" y="108" text-anchor="middle" font-size="9" fill="white" font-weight="700">11p</text>
  <!-- Na outer electron -->
  <circle cx="90" cy="55" r="7" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
  <text x="90" y="58" text-anchor="middle" font-size="7" fill="#92400e">e⁻</text>
  <text x="90" y="165" text-anchor="middle" font-size="9" fill="#ea580c">Na (2,8,1)</text>

  <!-- Arrow showing electron transfer -->
  <path d="M100 55 Q200 30 270 80" stroke="#7c3aed" stroke-width="2.5" fill="none" stroke-dasharray="6,3"/>
  <polygon points="270,80 258,75 262,88" fill="#7c3aed"/>
  <text x="185" y="45" text-anchor="middle" font-size="9.5" fill="#7c3aed" font-weight="700">e⁻ transferred</text>

  <!-- Chlorine atom -->
  <circle cx="350" cy="105" r="50" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="350" cy="105" r="30" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="350" cy="105" r="14" fill="#15803d"/>
  <text x="350" y="108" text-anchor="middle" font-size="9" fill="white" font-weight="700">17p</text>
  <!-- Chlorine outer electrons (7) -->
  <circle cx="350" cy="55" r="6" fill="#86efac" stroke="#15803d" stroke-width="1"/>
  <circle cx="380" cy="70" r="6" fill="#86efac" stroke="#15803d" stroke-width="1"/>
  <circle cx="395" cy="102" r="6" fill="#86efac" stroke="#15803d" stroke-width="1"/>
  <circle cx="380" cy="135" r="6" fill="#86efac" stroke="#15803d" stroke-width="1"/>
  <circle cx="350" cy="152" r="6" fill="#86efac" stroke="#15803d" stroke-width="1"/>
  <circle cx="320" cy="135" r="6" fill="#86efac" stroke="#15803d" stroke-width="1"/>
  <circle cx="305" cy="102" r="6" fill="#86efac" stroke="#15803d" stroke-width="1"/>
  <text x="350" y="175" text-anchor="middle" font-size="9" fill="#15803d">Cl (2,8,7)</text>

  <!-- Products -->
  <text x="440" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">→</text>
  <circle cx="478" cy="90" r="20" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="478" y="87" text-anchor="middle" font-size="9.5" fill="#dc2626" font-weight="700">Na⁺</text>
  <text x="478" y="98" text-anchor="middle" font-size="8" fill="#dc2626">(2,8)</text>
  <circle cx="478" cy="140" r="24" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
  <text x="478" y="137" text-anchor="middle" font-size="9.5" fill="#15803d" font-weight="700">Cl⁻</text>
  <text x="478" y="148" text-anchor="middle" font-size="8" fill="#15803d">(2,8,8)</text>
</svg>
:::

**What happens:**
1. Sodium has configuration 2,8,**1** — one outer electron, one more than needed for shell 1 or one less than a full outer shell of 8
2. Chlorine has configuration 2,8,**7** — needs one more electron to complete its outer shell
3. Na **transfers** its one outer electron to Cl
4. Na becomes **Na⁺** (2,8) — now has noble gas configuration of neon
5. Cl becomes **Cl⁻** (2,8,8) — now has noble gas configuration of argon
6. **Electrostatic attraction** between Na⁺ and Cl⁻ holds them together

## The Ionic Lattice Structure

In the solid state, ions don't exist as isolated pairs. Billions of ions arrange into a **giant ionic lattice** where each ion is surrounded by ions of opposite charge. In NaCl, each Na⁺ is surrounded by 6 Cl⁻, and each Cl⁻ is surrounded by 6 Na⁺.

:::svg[Sodium Chloride Ionic Lattice Structure]
<svg viewBox="0 0 400 200" width="400" height="200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="400" height="200" fill="#f8fafc" rx="12"/>
  <text x="200" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">NaCl Giant Ionic Lattice — Alternating Ions</text>
  <!-- 5x4 grid of alternating Na+ and Cl- ions -->
  <!-- Row 1 -->
  <circle cx="60" cy="55" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="60" y="59" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <circle cx="110" cy="55" r="20" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="110" y="59" text-anchor="middle" font-size="9" fill="#15803d">Cl⁻</text>
  <circle cx="165" cy="55" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="165" y="59" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <circle cx="215" cy="55" r="20" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="215" y="59" text-anchor="middle" font-size="9" fill="#15803d">Cl⁻</text>
  <circle cx="270" cy="55" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="270" y="59" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <!-- Row 2 -->
  <circle cx="60" cy="110" r="20" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="60" y="114" text-anchor="middle" font-size="9" fill="#15803d">Cl⁻</text>
  <circle cx="110" cy="110" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="110" y="114" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <circle cx="165" cy="110" r="20" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="165" y="114" text-anchor="middle" font-size="9" fill="#15803d">Cl⁻</text>
  <circle cx="215" cy="110" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="215" y="114" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <circle cx="270" cy="110" r="20" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="270" y="114" text-anchor="middle" font-size="9" fill="#15803d">Cl⁻</text>
  <!-- Row 3 -->
  <circle cx="60" cy="165" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="60" y="169" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <circle cx="110" cy="165" r="20" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="110" y="169" text-anchor="middle" font-size="9" fill="#15803d">Cl⁻</text>
  <circle cx="165" cy="165" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="165" y="169" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <circle cx="215" cy="165" r="20" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="215" y="169" text-anchor="middle" font-size="9" fill="#15803d">Cl⁻</text>
  <circle cx="270" cy="165" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="270" y="169" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <!-- Properties text -->
  <rect x="295" y="40" width="95" height="140" rx="8" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="342" y="58" text-anchor="middle" font-size="8.5" fill="#334155" font-weight="700">Properties:</text>
  <text x="342" y="73" text-anchor="middle" font-size="8" fill="#475569">High MP/BP</text>
  <text x="342" y="86" text-anchor="middle" font-size="8" fill="#475569">(many bonds</text>
  <text x="342" y="97" text-anchor="middle" font-size="8" fill="#475569">to break)</text>
  <text x="342" y="113" text-anchor="middle" font-size="8" fill="#475569">Conducts when</text>
  <text x="342" y="124" text-anchor="middle" font-size="8" fill="#475569">molten/dissolved</text>
  <text x="342" y="135" text-anchor="middle" font-size="8" fill="#475569">(free ions)</text>
  <text x="342" y="151" text-anchor="middle" font-size="8" fill="#475569">Does NOT</text>
  <text x="342" y="162" text-anchor="middle" font-size="8" fill="#475569">conduct as solid</text>
  <text x="342" y="173" text-anchor="middle" font-size="8" fill="#475569">(fixed ions)</text>
</svg>
:::

## Properties of Ionic Compounds and Their Explanations

| Property | Explanation |
|---------|-------------|
| **High melting and boiling points** | Many strong electrostatic attractions between many ions — enormous energy required to break all of them |
| **Hard but brittle** | Rigid lattice. Stress displaces ions — like charges align and repel, causing cleavage |
| **Conducts electricity when molten** | Ions free to move and carry charge when liquid |
| **Conducts electricity when dissolved in water** | Ions separate (dissociation) and are free to move |
| **Does NOT conduct as solid** | Ions locked in fixed lattice positions — cannot move to carry charge |
| **Dissolves in polar solvents (water)** | Water molecules attract ions, surround them, and pull them away from lattice (hydration) |`,
          groups: [],
          recap: [
            "Describe the formation of ionic bonds when magnesium reacts with oxygen to form MgO. Include electron configurations and a dot-cross diagram. [5]",
            "Explain why sodium chloride has a high melting point. [3]",
            "Explain why solid sodium chloride does not conduct electricity, but sodium chloride solution does. [4]",
            "State the charge on the ions formed by: (a) calcium, (b) oxide, (c) aluminium, (d) sulfide. Explain your answers using electron configurations. [4]",
            "Explain the difference in structure between a simple ionic compound and a covalent molecular compound. [4]"
          ]
        }
      ]
    }
  ]
};
