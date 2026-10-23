import type { SubjectNotes } from "./types";

export const CHEMISTRY: SubjectNotes = {
  id: "chemistry",
  name: "Chemistry",
  code: "0620",
  color: "bg-blue-500",
  chapters: [
    {
      number: 1,
      title: "States of Matter",
      intro: "All matter — every substance you can see, touch, breathe or drink — is composed of tiny particles in constant, random motion. The **kinetic particle theory** explains why solids are rigid, liquids flow, and gases expand to fill their containers. It also explains diffusion, changes of state, and the relationship between temperature and particle energy. This chapter is the conceptual foundation for all of physical chemistry: understanding it deeply means you can explain phenomena from first principles rather than memorising isolated facts.",
      subheadings: [
        {
          title: "The Kinetic Particle Theory — Solids, Liquids and Gases",
          body: `The **kinetic particle theory** rests on three fundamental claims that explain the properties of all matter:

1. All matter is composed of tiny discrete particles — atoms, molecules, or ions
2. These particles are in constant, random motion at all temperatures above absolute zero (−273°C)
3. The temperature of a substance is a direct measure of the **average kinetic energy** of its particles — higher temperature means faster-moving particles

These three statements, simple as they are, allow us to predict and explain every physical property of matter from density to compressibility to diffusion rate.

## The Three States of Matter — Particle-Level Understanding

:::svg[Particle Arrangement in Solids, Liquids and Gases]
<svg viewBox="0 0 540 195" width="540" height="195" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="540" height="195" fill="#f8fafc" rx="12"/>
  <text x="270" y="17" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Particle Arrangement — Three States of Matter</text>
  <!-- SOLID -->
  <rect x="10" y="26" width="165" height="145" rx="9" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
  <text x="92" y="44" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">SOLID</text>
  <circle cx="38" cy="68" r="12" fill="#3b82f6"/><circle cx="64" cy="68" r="12" fill="#3b82f6"/><circle cx="90" cy="68" r="12" fill="#3b82f6"/><circle cx="116" cy="68" r="12" fill="#3b82f6"/><circle cx="142" cy="68" r="12" fill="#3b82f6"/>
  <circle cx="38" cy="96" r="12" fill="#3b82f6"/><circle cx="64" cy="96" r="12" fill="#3b82f6"/><circle cx="90" cy="96" r="12" fill="#3b82f6"/><circle cx="116" cy="96" r="12" fill="#3b82f6"/><circle cx="142" cy="96" r="12" fill="#3b82f6"/>
  <circle cx="38" cy="124" r="12" fill="#3b82f6"/><circle cx="64" cy="124" r="12" fill="#3b82f6"/><circle cx="90" cy="124" r="12" fill="#3b82f6"/><circle cx="116" cy="124" r="12" fill="#3b82f6"/><circle cx="142" cy="124" r="12" fill="#3b82f6"/>
  <text x="92" y="151" text-anchor="middle" font-size="8" fill="#1e40af">Regular lattice · vibrate only</text>
  <text x="92" y="163" text-anchor="middle" font-size="8" fill="#1e40af">Strong forces · fixed positions</text>
  <!-- LIQUID -->
  <rect x="188" y="26" width="165" height="145" rx="9" fill="#f0fdf4" stroke="#22c55e" stroke-width="2"/>
  <text x="270" y="44" text-anchor="middle" font-size="11" font-weight="700" fill="#15803d">LIQUID</text>
  <circle cx="210" cy="74" r="12" fill="#22c55e"/><circle cx="238" cy="64" r="12" fill="#22c55e"/><circle cx="265" cy="78" r="12" fill="#22c55e"/><circle cx="294" cy="68" r="12" fill="#22c55e"/><circle cx="320" cy="74" r="12" fill="#22c55e"/>
  <circle cx="215" cy="104" r="12" fill="#22c55e"/><circle cx="244" cy="96" r="12" fill="#22c55e"/><circle cx="272" cy="108" r="12" fill="#22c55e"/><circle cx="300" cy="100" r="12" fill="#22c55e"/>
  <circle cx="208" cy="132" r="12" fill="#22c55e"/><circle cx="238" cy="126" r="12" fill="#22c55e"/><circle cx="267" cy="136" r="12" fill="#22c55e"/><circle cx="294" cy="128" r="12" fill="#22c55e"/>
  <path d="M238,52 L245,42" stroke="#15803d" stroke-width="1.5"/><path d="M294,57 L302,48" stroke="#15803d" stroke-width="1.5"/>
  <text x="270" y="151" text-anchor="middle" font-size="8" fill="#166534">Random but close · slide past each other</text>
  <text x="270" y="163" text-anchor="middle" font-size="8" fill="#166534">Weaker forces · no fixed positions</text>
  <!-- GAS -->
  <rect x="366" y="26" width="165" height="145" rx="9" fill="#fef9c3" stroke="#eab308" stroke-width="2"/>
  <text x="448" y="44" text-anchor="middle" font-size="11" font-weight="700" fill="#854d0e">GAS</text>
  <circle cx="390" cy="65" r="12" fill="#eab308"/><circle cx="460" cy="72" r="12" fill="#eab308"/><circle cx="508" cy="58" r="12" fill="#eab308"/>
  <circle cx="408" cy="108" r="12" fill="#eab308"/><circle cx="476" cy="114" r="12" fill="#eab308"/>
  <circle cx="388" cy="145" r="12" fill="#eab308"/><circle cx="512" cy="140" r="12" fill="#eab308"/>
  <path d="M390,52 L380,40" stroke="#b45309" stroke-width="1.5"/><path d="M460,60 L470,47" stroke="#b45309" stroke-width="1.5"/><path d="M408,95 L416,82" stroke="#b45309" stroke-width="1.5"/>
  <text x="448" y="151" text-anchor="middle" font-size="8" fill="#92400e">Far apart · rapid random motion</text>
  <text x="448" y="163" text-anchor="middle" font-size="8" fill="#92400e">Negligible forces · fill container</text>
</svg>
:::

## Properties Explained by the Particle Model

Every measurable property of a substance in each state can be traced directly back to the arrangement, spacing, and movement of its particles:

**Shape and volume:**
- Solids have **fixed shape and fixed volume** because particles are locked in place by strong forces — they can only vibrate, not translate
- Liquids have **fixed volume but no fixed shape** — particles have enough energy to slide past each other (intermolecular forces weakened but not broken), so they conform to the shape of their container while keeping the same overall volume
- Gases have **neither fixed shape nor fixed volume** — particles have enough energy to completely overcome intermolecular forces; they move randomly and rapidly, spreading to fill any available space

**Density:**
- Solids are **dense** because particles are in close contact (touching) — there is almost no empty space between them
- Liquids are **slightly less dense** than the corresponding solid in most cases — the particles are still close but slightly further apart and less ordered
- Gases are **far less dense** (~1000× less than liquids) because particles are separated by large empty spaces; the actual particles themselves occupy only a tiny fraction of the total gas volume

**Compressibility:**
- Solids and liquids are **essentially incompressible** — particles are already touching; applying pressure cannot push them closer together
- Gases are **highly compressible** — the large empty spaces between particles can be reduced dramatically by increasing pressure (as in a bicycle pump or a gas cylinder)

**Ability to flow:**
- Solids **do not flow** — particles are fixed in position by strong forces
- Both liquids and gases **flow** (they are fluids) — particles can move past each other

## Changes of State — Energy and Temperature

When heat energy is supplied to a substance:
- Below the melting point: the energy increases the vibration of particles → temperature rises
- At the **melting point**: the energy supplied breaks the forces holding particles in fixed lattice positions, rather than increasing particle speed → temperature stays constant while melting occurs
- Once fully melted: further heat increases particle speed in the liquid → temperature rises again
- At the **boiling point**: energy breaks the remaining attractive forces between liquid particles, converting them to freely moving gas particles → temperature stays constant while boiling occurs

> **The temperature stays constant during melting and boiling even though heat energy is constantly being supplied.** This energy — called **latent heat** — is used entirely to overcome intermolecular forces, not to increase kinetic energy. This is why a boiling kettle stays at exactly 100°C even with the element on full power.

:::svg[Heating Curve — Temperature vs Heat Energy Supplied]
<svg viewBox="0 0 480 215" width="480" height="215" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="480" height="215" fill="#f8fafc" rx="12"/>
  <text x="240" y="17" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Heating Curve — Temperature vs Heat Energy Supplied</text>
  <line x1="48" y1="185" x2="462" y2="185" stroke="#334155" stroke-width="2"/>
  <line x1="48" y1="18" x2="48" y2="185" stroke="#334155" stroke-width="2"/>
  <text x="255" y="200" text-anchor="middle" font-size="10" fill="#475569">Heat energy supplied →</text>
  <text x="15" y="105" text-anchor="middle" font-size="10" fill="#475569" transform="rotate(-90,15,105)">Temperature →</text>
  <!-- Solid rising -->
  <polyline points="55,178 115,152" stroke="#3b82f6" stroke-width="3" fill="none"/>
  <text x="83" y="148" text-anchor="middle" font-size="9" fill="#1d4ed8">Solid</text>
  <!-- Melting plateau -->
  <polyline points="115,152 200,152" stroke="#f97316" stroke-width="3.5" fill="none"/>
  <text x="158" y="142" text-anchor="middle" font-size="9" fill="#ea580c" font-weight="700">Melting</text>
  <text x="158" y="153" text-anchor="middle" font-size="7.5" fill="#c2410c">T constant — latent heat of fusion</text>
  <!-- Liquid rising -->
  <polyline points="200,152 315,98" stroke="#22c55e" stroke-width="3" fill="none"/>
  <text x="255" y="120" text-anchor="middle" font-size="9" fill="#15803d">Liquid</text>
  <!-- Boiling plateau -->
  <polyline points="315,98 405,98" stroke="#ef4444" stroke-width="3.5" fill="none"/>
  <text x="360" y="88" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="700">Boiling</text>
  <text x="360" y="99" text-anchor="middle" font-size="7.5" fill="#b91c1c">T constant — latent heat of vaporisation</text>
  <!-- Gas rising -->
  <polyline points="405,98 465,72" stroke="#8b5cf6" stroke-width="3" fill="none"/>
  <text x="450" y="78" text-anchor="middle" font-size="9" fill="#7c3aed">Gas</text>
  <!-- MP BP markers -->
  <line x1="115" y1="152" x2="115" y2="185" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="115" y="196" text-anchor="middle" font-size="8.5" fill="#64748b">MP</text>
  <line x1="315" y1="98" x2="315" y2="185" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="315" y="196" text-anchor="middle" font-size="8.5" fill="#64748b">BP</text>
</svg>
:::

## Diffusion — Direct Evidence for Particle Motion

**Diffusion** is the net movement of particles from a region of high concentration to a region of low concentration, driven by the random kinetic motion of particles. It requires no energy input — the particles' own kinetic energy is sufficient.

**Why gases diffuse much faster than liquids:**
- In a gas, particles move at hundreds of metres per second and travel long distances between collisions (mean free path ~70 nm in air at atmospheric pressure)
- In a liquid, particles are closely packed and constantly colliding with neighbours — movement is restricted; net diffusion is much slower

**Graham's Law of Diffusion:** The rate at which a gas diffuses is inversely proportional to the square root of its molar mass:

$$\\text{Rate} \\propto \\frac{1}{\\sqrt{M_r}}$$

This means lighter molecules diffuse faster. Hydrogen (Mr = 2) diffuses ~4× faster than oxygen (Mr = 32) because $\\frac{\\sqrt{32}}{\\sqrt{2}} = \\sqrt{16} = 4$.

## The Ammonia–Hydrogen Chloride Experiment

This classic experiment demonstrates diffusion rates of two gases and allows a direct test of Graham's Law:

**Setup:**
- A piece of cotton wool soaked in **concentrated hydrochloric acid** (HCl) is placed at one end of a horizontal glass tube (~80 cm long)
- A piece of cotton wool soaked in **concentrated ammonia solution** (NH₃) is placed at the other end simultaneously
- Both ends are sealed

**What happens:**
- HCl(g) diffuses from the HCl end toward the NH₃ end
- NH₃(g) diffuses from the NH₃ end toward the HCl end
- Where the two gases meet, they react: **NH₃(g) + HCl(g) → NH₄Cl(s)** — a white solid (ammonium chloride) forms as a visible white ring of smoke
- The ring appears **closer to the HCl end** of the tube

**Why the ring is closer to the HCl end:**
- NH₃ (Mr = 17) is lighter than HCl (Mr = 36.5)
- By Graham's Law: ratio of rates = $\\sqrt{36.5/17} = \\sqrt{2.147} \\approx 1.46$
- NH₃ diffuses approximately 1.46× faster than HCl
- NH₃ travels further along the tube in the same time → the ring forms closer to the HCl end (the slower gas)

**Quantitative prediction:** In a tube of length L, NH₃ travels approximately $\\frac{1.46}{2.46} \\times L \\approx 0.59L$ from the NH₃ end, so the ring forms at about 59% of the tube from the NH₃ end — approximately 59 cm from the NH₃ end in an 80 cm tube (i.e. ~21 cm from the HCl end).

This experiment is direct experimental evidence that:
1. Gases diffuse at different rates
2. Lighter gases diffuse faster
3. The rate is related to molar mass as predicted by kinetic theory`,
          groups: [],
          recap: [
            "Describe the arrangement and movement of particles in a liquid and explain how this determines its properties of fixed volume but no fixed shape. [4]",
            "Explain, using the kinetic particle theory, why gases are approximately 1000 times less dense than liquids. [3]",
            "A solid is heated to its boiling point and beyond. Explain why the temperature remains constant during boiling even though heat energy is continuously supplied. [3]",
            "In the ammonia–HCl diffusion experiment, explain why the white ring forms closer to the HCl end. Include the molar masses of both gases and use Graham's Law in your answer. [5]",
            "Explain why a smell spreads through a room more quickly on a warm day than on a cold day. [3]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Atoms, Elements and Compounds",
      intro: "The atom is the smallest particle of an element that retains its chemical identity. Everything about chemistry — the Periodic Table, chemical bonding, reactivity, the properties of substances — flows from understanding atomic structure. The arrangement of electrons in shells determines how atoms bond with each other; the type of bonding formed determines all the macroscopic properties we observe in the laboratory. This chapter builds from the nucleus outward: sub-atomic particles → electron configuration → ionic bonding → covalent bonding → the properties that result.",
      subheadings: [
        {
          title: "Atomic Structure, Isotopes and Electron Configuration",
          body: `## Sub-atomic Particles

Every atom has the same fundamental architecture: a tiny, extremely dense, positively charged **nucleus** at the centre, containing **protons** and **neutrons** (collectively called nucleons), surrounded by **electrons** arranged in distinct energy levels called **shells**.

| Particle | Relative mass | Relative charge | Location |
|----------|-------------|----------------|---------|
| **Proton** | 1 | +1 | Nucleus |
| **Neutron** | 1 | 0 | Nucleus |
| **Electron** | 1/1836 ≈ 0 | −1 | Shells around nucleus |

The atom as a whole is electrically neutral — the number of protons equals the number of electrons, so the positive and negative charges cancel exactly.

The nucleus is extraordinarily small — about 10⁻¹⁴ m in diameter, while the atom as a whole is about 10⁻¹⁰ m. If an atom were expanded to the size of a football stadium, the nucleus would be the size of a pea in the centre. Almost all of an atom's volume is empty space.

## Key Definitions

**Atomic number (Z)** = number of protons in the nucleus. This uniquely identifies the element — every oxygen atom has exactly 8 protons; changing the proton number creates a different element entirely.

**Mass number (A)** = total number of protons + neutrons (nucleons).

**Number of neutrons** = A − Z

**Example — Calcium-40 (⁴⁰₂₀Ca):**
- Protons = 20 (from atomic number)
- Neutrons = 40 − 20 = 20
- Electrons = 20 (neutral atom: electrons = protons)

## Electron Configuration — The Shell Model

Electrons occupy shells (energy levels) around the nucleus. Each shell has a maximum capacity:
- **Shell 1** (closest to nucleus): maximum **2** electrons
- **Shell 2**: maximum **8** electrons
- **Shell 3**: maximum **8** electrons (at IGCSE level)
- Shells fill from innermost outward

The electron configuration determines an element's position in the Periodic Table and predicts its chemical behaviour:
- The **number of outer-shell electrons** equals the **Group number** (Groups 1–7)
- The **number of occupied shells** equals the **Period number**

:::svg[Electron Configuration — Examples Across Period 3]
<svg viewBox="0 0 540 210" width="540" height="210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="540" height="210" fill="#f8fafc" rx="12"/>
  <text x="270" y="17" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Electron Configurations — Period 3 Elements</text>
  <!-- Na (2,8,1) -->
  <circle cx="72" cy="105" r="22" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <circle cx="72" cy="105" r="14" fill="#fde68a" stroke="#d97706" stroke-width="1"/>
  <circle cx="72" cy="105" r="7" fill="#b45309"/>
  <text x="72" y="108" text-anchor="middle" font-size="7" fill="white" font-weight="700">11p</text>
  <circle cx="72" cy="83" r="5" fill="#3b82f6"/>
  <circle cx="72" cy="127" r="5" fill="#3b82f6"/>
  <circle cx="58" cy="96" r="5" fill="#22c55e"/><circle cx="58" cy="114" r="5" fill="#22c55e"/>
  <circle cx="86" cy="96" r="5" fill="#22c55e"/><circle cx="86" cy="114" r="5" fill="#22c55e"/>
  <circle cx="62" cy="90" r="5" fill="#22c55e"/><circle cx="82" cy="90" r="5" fill="#22c55e"/>
  <circle cx="62" cy="120" r="5" fill="#22c55e"/><circle cx="82" cy="120" r="5" fill="#22c55e"/>
  <circle cx="72" cy="61" r="6" fill="#f97316" stroke="#ea580c" stroke-width="1.5"/>
  <text x="72" y="192" text-anchor="middle" font-size="9" fill="#334155" font-weight="600">Na (2,8,1)</text>
  <text x="72" y="203" text-anchor="middle" font-size="8" fill="#64748b">Group 1</text>
  <!-- Mg (2,8,2) -->
  <circle cx="180" cy="105" r="22" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <circle cx="180" cy="105" r="14" fill="#fde68a" stroke="#d97706" stroke-width="1"/>
  <circle cx="180" cy="105" r="7" fill="#b45309"/>
  <circle cx="180" cy="83" r="5" fill="#3b82f6"/><circle cx="180" cy="127" r="5" fill="#3b82f6"/>
  <circle cx="162" cy="99" r="5" fill="#22c55e"/><circle cx="162" cy="111" r="5" fill="#22c55e"/>
  <circle cx="198" cy="99" r="5" fill="#22c55e"/><circle cx="198" cy="111" r="5" fill="#22c55e"/>
  <circle cx="168" cy="91" r="5" fill="#22c55e"/><circle cx="192" cy="91" r="5" fill="#22c55e"/>
  <circle cx="168" cy="119" r="5" fill="#22c55e"/><circle cx="192" cy="119" r="5" fill="#22c55e"/>
  <circle cx="170" cy="62" r="6" fill="#f97316" stroke="#ea580c" stroke-width="1.5"/>
  <circle cx="190" cy="62" r="6" fill="#f97316" stroke="#ea580c" stroke-width="1.5"/>
  <text x="180" y="192" text-anchor="middle" font-size="9" fill="#334155" font-weight="600">Mg (2,8,2)</text>
  <text x="180" y="203" text-anchor="middle" font-size="8" fill="#64748b">Group 2</text>
  <!-- Cl (2,8,7) -->
  <circle cx="360" cy="105" r="22" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <circle cx="360" cy="105" r="14" fill="#fde68a" stroke="#d97706" stroke-width="1"/>
  <circle cx="360" cy="105" r="7" fill="#b45309"/>
  <circle cx="360" cy="83" r="5" fill="#3b82f6"/><circle cx="360" cy="127" r="5" fill="#3b82f6"/>
  <circle cx="342" cy="99" r="5" fill="#22c55e"/><circle cx="342" cy="111" r="5" fill="#22c55e"/>
  <circle cx="378" cy="99" r="5" fill="#22c55e"/><circle cx="378" cy="111" r="5" fill="#22c55e"/>
  <circle cx="348" cy="91" r="5" fill="#22c55e"/><circle cx="372" cy="91" r="5" fill="#22c55e"/>
  <circle cx="348" cy="119" r="5" fill="#22c55e"/><circle cx="372" cy="119" r="5" fill="#22c55e"/>
  <circle cx="340" cy="62" r="6" fill="#8b5cf6" stroke="#7c3aed" stroke-width="1.5"/>
  <circle cx="353" cy="56" r="6" fill="#8b5cf6" stroke="#7c3aed" stroke-width="1.5"/>
  <circle cx="367" cy="56" r="6" fill="#8b5cf6" stroke="#7c3aed" stroke-width="1.5"/>
  <circle cx="380" cy="62" r="6" fill="#8b5cf6" stroke="#7c3aed" stroke-width="1.5"/>
  <circle cx="385" cy="75" r="6" fill="#8b5cf6" stroke="#7c3aed" stroke-width="1.5"/>
  <circle cx="380" cy="88" r="6" fill="#8b5cf6" stroke="#7c3aed" stroke-width="1.5"/>
  <circle cx="367" cy="93" r="6" fill="#8b5cf6" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="360" y="192" text-anchor="middle" font-size="9" fill="#334155" font-weight="600">Cl (2,8,7)</text>
  <text x="360" y="203" text-anchor="middle" font-size="8" fill="#64748b">Group 7</text>
  <!-- Ar (2,8,8) -->
  <circle cx="468" cy="105" r="22" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <circle cx="468" cy="105" r="14" fill="#fde68a" stroke="#d97706" stroke-width="1"/>
  <circle cx="468" cy="105" r="7" fill="#b45309"/>
  <circle cx="468" cy="83" r="5" fill="#3b82f6"/><circle cx="468" cy="127" r="5" fill="#3b82f6"/>
  <circle cx="450" cy="99" r="5" fill="#22c55e"/><circle cx="450" cy="111" r="5" fill="#22c55e"/>
  <circle cx="486" cy="99" r="5" fill="#22c55e"/><circle cx="486" cy="111" r="5" fill="#22c55e"/>
  <circle cx="456" cy="91" r="5" fill="#22c55e"/><circle cx="480" cy="91" r="5" fill="#22c55e"/>
  <circle cx="456" cy="119" r="5" fill="#22c55e"/><circle cx="480" cy="119" r="5" fill="#22c55e"/>
  <!-- 8 outer electrons for Ar -->
  <circle cx="448" cy="62" r="6" fill="#22c55e"/><circle cx="460" cy="56" r="6" fill="#22c55e"/>
  <circle cx="476" cy="56" r="6" fill="#22c55e"/><circle cx="488" cy="62" r="6" fill="#22c55e"/>
  <circle cx="492" cy="75" r="6" fill="#22c55e"/><circle cx="488" cy="88" r="6" fill="#22c55e"/>
  <circle cx="476" cy="93" r="6" fill="#22c55e"/><circle cx="462" cy="93" r="6" fill="#22c55e"/>
  <text x="468" y="192" text-anchor="middle" font-size="9" fill="#334155" font-weight="600">Ar (2,8,8)</text>
  <text x="468" y="203" text-anchor="middle" font-size="8" fill="#64748b">Group 0 (noble gas)</text>
  <!-- Legend -->
  <circle cx="90" cy="168" r="5" fill="#3b82f6"/><text x="100" y="172" font-size="8" fill="#374151">Shell 1 (max 2)</text>
  <circle cx="175" cy="168" r="5" fill="#22c55e"/><text x="185" y="172" font-size="8" fill="#374151">Shell 2 (max 8)</text>
  <circle cx="265" cy="168" r="5" fill="#f97316"/><text x="275" y="172" font-size="8" fill="#374151">Outer electrons (bonding)</text>
</svg>
:::

**Table of key electron configurations:**

| Element | Z | Config | Group | Period | Ions formed |
|---------|---|--------|-------|--------|------------|
| Hydrogen | 1 | 1 | 1 | 1 | H⁺ (loses 1e) |
| Carbon | 6 | 2,4 | 4 | 2 | Shares 4e (covalent) |
| Nitrogen | 7 | 2,5 | 5 | 2 | N³⁻ (gains 3e) or shares |
| Oxygen | 8 | 2,6 | 6 | 2 | O²⁻ (gains 2e) |
| Sodium | 11 | 2,8,1 | 1 | 3 | Na⁺ (loses 1e) |
| Magnesium | 12 | 2,8,2 | 2 | 3 | Mg²⁺ (loses 2e) |
| Aluminium | 13 | 2,8,3 | 3 | 3 | Al³⁺ (loses 3e) |
| Silicon | 14 | 2,8,4 | 4 | 3 | Shares (giant covalent) |
| Phosphorus | 15 | 2,8,5 | 5 | 3 | Shares (covalent) |
| Sulfur | 16 | 2,8,6 | 6 | 3 | S²⁻ (gains 2e) or shares |
| Chlorine | 17 | 2,8,7 | 7 | 3 | Cl⁻ (gains 1e) |
| Argon | 18 | 2,8,8 | 0 | 3 | No bonding (full outer shell) |
| Calcium | 20 | 2,8,8,2 | 2 | 4 | Ca²⁺ (loses 2e) |

## Isotopes

**Isotopes** are atoms of the **same element** (same number of protons, same atomic number) with **different numbers of neutrons** (different mass numbers).

Because isotopes have identical numbers of protons and electrons, they have **identical electron configurations → identical chemical properties**. The extra neutrons simply add mass without changing electronic behaviour.

However, isotopes have different **physical properties** because of different mass:
- Different density
- Different boiling points (of liquid isotopes, e.g. heavy water D₂O vs H₂O)
- Different rates of diffusion (heavier isotope diffuses more slowly — exploited in uranium enrichment for nuclear fuel)

**The Relative Atomic Mass (Aᵣ)** is a weighted average of all naturally occurring isotopes:

$$A_r = \\frac{\\sum(\\text{isotope mass} \\times \\text{abundance \\%})}{100}$$

**Worked example — Chlorine:**
- ³⁵Cl: mass 35, natural abundance 75.5%
- ³⁷Cl: mass 37, natural abundance 24.5%

$$A_r(Cl) = \\frac{(35 \\times 75.5) + (37 \\times 24.5)}{100} = \\frac{2642.5 + 906.5}{100} = \\frac{3549}{100} = 35.5$$

This is why chlorine has Aᵣ = 35.5 — not a whole number, because it is an average of two isotopes.`,
          groups: [],
          recap: [
            "An atom of sulfur has atomic number 16 and mass number 32. State the number of protons, neutrons, and electrons, and write its electron configuration. [5]",
            "Explain what isotopes are. State why isotopes of the same element have identical chemical properties but may have different rates of diffusion as gases. [4]",
            "Bromine exists as two isotopes: ⁷⁹Br (50.5% abundance) and ⁸¹Br (49.5% abundance). Calculate the relative atomic mass of bromine and show your working. [3]",
            "Explain, using electron configurations, why sodium always forms a 1+ ion but never a 2+ ion when it reacts with chlorine. [3]"
          ]
        },
        {
          title: "Ionic Bonding — Electron Transfer and Giant Lattices",
          body: `## What is Ionic Bonding?

**Ionic bonding** forms between a **metal** and a **non-metal** when electrons are transferred from the metal atom to the non-metal atom. The result is two oppositely charged ions held together by strong **electrostatic forces of attraction** — the ionic bond.

The driving force is achieving a **noble gas electron configuration** — a full outer shell of electrons, which represents the most stable arrangement. Noble gases (Group 0) are chemically inert precisely because they already have this configuration.

## Formation of Ionic Bonds — Step-by-Step Examples

### Sodium + Chlorine → Sodium Chloride (NaCl)

**Before bonding:**
- Na: configuration 2,8,**1** — has one outer electron, one more than Ne (2,8)
- Cl: configuration 2,8,**7** — needs one electron to complete its outer shell to match Ar (2,8,8)

**What happens:**
1. Na **transfers** its one outer electron to Cl
2. Na becomes **Na⁺**: configuration 2,8 — same as noble gas neon ✓
3. Cl becomes **Cl⁻**: configuration 2,8,8 — same as noble gas argon ✓
4. Na⁺ and Cl⁻ are held together by electrostatic attraction (opposite charges attract)

:::svg[Formation of Ionic Bond — Sodium Chloride]
<svg viewBox="0 0 520 190" width="520" height="190" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="520" height="190" fill="#f8fafc" rx="12"/>
  <text x="260" y="17" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Na + Cl → Na⁺Cl⁻: Electron Transfer</text>
  <!-- Na atom -->
  <circle cx="95" cy="100" r="55" fill="none" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="95" cy="100" r="35" fill="none" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="95" cy="100" r="16" fill="#ea580c"/>
  <text x="95" y="104" text-anchor="middle" font-size="9.5" fill="white" font-weight="700">11p+</text>
  <!-- Na shell 1 (2e) -->
  <circle cx="95" cy="65" r="7" fill="#3b82f6"/><circle cx="95" cy="135" r="7" fill="#3b82f6"/>
  <!-- Na shell 2 (8e) -->
  <circle cx="60" cy="90" r="7" fill="#22c55e"/><circle cx="60" cy="110" r="7" fill="#22c55e"/>
  <circle cx="130" cy="90" r="7" fill="#22c55e"/><circle cx="130" cy="110" r="7" fill="#22c55e"/>
  <circle cx="68" cy="74" r="7" fill="#22c55e"/><circle cx="122" cy="74" r="7" fill="#22c55e"/>
  <circle cx="68" cy="126" r="7" fill="#22c55e"/><circle cx="122" cy="126" r="7" fill="#22c55e"/>
  <!-- Na outer electron (1e) -->
  <circle cx="95" cy="45" r="8" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
  <text x="95" y="48" text-anchor="middle" font-size="7" fill="#78350f">e⁻</text>
  <text x="95" y="172" text-anchor="middle" font-size="10" fill="#ea580c">Na atom (2,8,1)</text>
  <!-- Arrow -->
  <path d="M104 45 Q210 15 285 78" stroke="#7c3aed" stroke-width="2.5" fill="none" marker-end="url(#purpleArrow)"/>
  <defs><marker id="purpleArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/></marker></defs>
  <text x="195" y="32" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="700">e⁻ transferred</text>
  <!-- Cl atom -->
  <circle cx="380" cy="100" r="55" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="380" cy="100" r="35" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="380" cy="100" r="16" fill="#15803d"/>
  <text x="380" y="104" text-anchor="middle" font-size="9.5" fill="white" font-weight="700">17p+</text>
  <!-- Cl shell 1 (2e) -->
  <circle cx="380" cy="65" r="7" fill="#3b82f6"/><circle cx="380" cy="135" r="7" fill="#3b82f6"/>
  <!-- Cl shell 2 (8e) -->
  <circle cx="345" cy="90" r="7" fill="#22c55e"/><circle cx="345" cy="110" r="7" fill="#22c55e"/>
  <circle cx="415" cy="90" r="7" fill="#22c55e"/><circle cx="415" cy="110" r="7" fill="#22c55e"/>
  <circle cx="353" cy="74" r="7" fill="#22c55e"/><circle cx="407" cy="74" r="7" fill="#22c55e"/>
  <circle cx="353" cy="126" r="7" fill="#22c55e"/><circle cx="407" cy="126" r="7" fill="#22c55e"/>
  <!-- Cl outer electrons (7) — 6 shown + incoming -->
  <circle cx="380" cy="45" r="7" fill="#86efac" stroke="#15803d"/><circle cx="413" cy="57" r="7" fill="#86efac" stroke="#15803d"/>
  <circle cx="427" cy="90" r="7" fill="#86efac" stroke="#15803d"/><circle cx="413" cy="142" r="7" fill="#86efac" stroke="#15803d"/>
  <circle cx="380" cy="153" r="7" fill="#86efac" stroke="#15803d"/><circle cx="347" cy="142" r="7" fill="#86efac" stroke="#15803d"/>
  <circle cx="333" cy="57" r="8" fill="#fbbf24" stroke="#7c3aed" stroke-width="2"/>
  <text x="380" y="172" text-anchor="middle" font-size="10" fill="#15803d">Cl atom (2,8,7)</text>
  <!-- Products label -->
  <text x="260" y="183" text-anchor="middle" font-size="9.5" fill="#334155">→ Na⁺ (2,8) + Cl⁻ (2,8,8) → held by electrostatic attraction</text>
</svg>
:::

### Magnesium + Oxygen → Magnesium Oxide (MgO)

- Mg: configuration 2,8,**2** — must lose 2 outer electrons → **Mg²⁺** (2,8) — neon config
- O: configuration 2,**6** — must gain 2 electrons → **O²⁻** (2,8) — neon config
- **Equation:** Mg²⁺ + O²⁻ → MgO (ionic compound)

### Aluminium + Oxygen → Aluminium Oxide (Al₂O₃)

- Al: configuration 2,8,**3** → loses 3e → **Al³⁺** (2,8)
- O: configuration 2,**6** → gains 2e → **O²⁻** (2,8)
- To balance charges: 2 Al³⁺ (total charge: +6) must combine with 3 O²⁻ (total charge: −6)
- Formula: **Al₂O₃**

## The Giant Ionic Lattice

In solid ionic compounds, ions do NOT exist as isolated pairs. They form a **giant ionic lattice** — a massive three-dimensional array of alternating positive and negative ions, each surrounded by ions of opposite charge.

In sodium chloride (NaCl):
- Each Na⁺ is surrounded by **6 Cl⁻** ions
- Each Cl⁻ is surrounded by **6 Na⁺** ions
- The lattice extends in all three dimensions, potentially containing billions of ions per cubic millimetre
- There are no individual "molecules" of NaCl — the formula NaCl simply represents the 1:1 ratio of ions in the lattice

:::svg[NaCl Giant Ionic Lattice]
<svg viewBox="0 0 440 195" width="440" height="195" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="440" height="195" fill="#f8fafc" rx="12"/>
  <text x="220" y="17" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">NaCl Giant Ionic Lattice — Alternating Ions</text>
  <!-- 5×3 alternating grid -->
  <circle cx="55" cy="55" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="55" y="59" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <circle cx="105" cy="55" r="20" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="105" y="59" text-anchor="middle" font-size="9" fill="#1d4ed8">Cl⁻</text>
  <circle cx="162" cy="55" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="162" y="59" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <circle cx="212" cy="55" r="20" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="212" y="59" text-anchor="middle" font-size="9" fill="#1d4ed8">Cl⁻</text>
  <circle cx="269" cy="55" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="269" y="59" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>

  <circle cx="55" cy="115" r="20" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="55" y="119" text-anchor="middle" font-size="9" fill="#1d4ed8">Cl⁻</text>
  <circle cx="105" cy="115" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="105" y="119" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <circle cx="162" cy="115" r="20" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="162" y="119" text-anchor="middle" font-size="9" fill="#1d4ed8">Cl⁻</text>
  <circle cx="212" cy="115" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="212" y="119" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <circle cx="269" cy="115" r="20" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="269" y="119" text-anchor="middle" font-size="9" fill="#1d4ed8">Cl⁻</text>
  <!-- Properties panel -->
  <rect x="300" y="35" width="128" height="140" rx="9" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="364" y="53" text-anchor="middle" font-size="9" fill="#334155" font-weight="700">Properties of NaCl</text>
  <text x="310" y="70" font-size="8.5" fill="#475569">High MP (801°C)</text>
  <text x="310" y="83" font-size="8.5" fill="#475569">— many bonds to break</text>
  <text x="310" y="101" font-size="8.5" fill="#475569">Conducts when</text>
  <text x="310" y="113" font-size="8.5" fill="#475569">molten or dissolved</text>
  <text x="310" y="125" font-size="8.5" fill="#475569">— free ions move</text>
  <text x="310" y="143" font-size="8.5" fill="#475569">Solid does NOT</text>
  <text x="310" y="155" font-size="8.5" fill="#475569">conduct — ions fixed</text>
  <text x="310" y="167" font-size="8.5" fill="#475569">Often soluble in water</text>
</svg>
:::

## Properties of Ionic Compounds — Explained

| Property | Observation | Explanation in terms of structure |
|---------|------------|----------------------------------|
| **High melting/boiling points** | NaCl melts at 801°C; MgO melts at 2852°C | Giant lattice — enormous number of strong electrostatic bonds must all be broken; requires huge energy input |
| **Hard but brittle** | Ionic solids resist scratching but shatter when struck sharply | Rigid lattice. Impact shifts one layer relative to another → like charges align → repulsion → lattice shatters along cleavage planes |
| **Conduct when molten** | Liquid NaCl conducts electricity | Ions become free to move through the liquid and carry charge to electrodes |
| **Conduct when dissolved** | Aqueous NaCl conducts | Ions dissociate in water and are free to move |
| **Do NOT conduct as solid** | Solid NaCl is a non-conductor | Ions locked in fixed lattice positions — cannot migrate to carry current |
| **Often soluble in polar solvents (water)** | Most sodium, potassium, ammonium salts dissolve readily | Polar water molecules attract ions, surround them with hydration shells, and pull them out of the lattice (hydration energy > lattice energy) |

> **MgO vs NaCl — why does MgO have a higher melting point?** MgO consists of Mg²⁺ and O²⁻ — doubly charged ions. The electrostatic force between charges is proportional to the product of the charges (2 × 2 = 4 for MgO vs 1 × 1 = 1 for NaCl). Greater charges → stronger bonds → much more energy needed to melt → much higher melting point.`,
          groups: [],
          recap: [
            "Describe the formation of ionic bonds when magnesium reacts with chlorine to form magnesium chloride (MgCl₂). Include electron configurations and explain why each element forms the ion it does. [6]",
            "Explain why magnesium oxide (MgO) has a much higher melting point than sodium chloride (NaCl) even though both are ionic compounds. [3]",
            "Explain why solid sodium chloride does not conduct electricity, but both molten sodium chloride and aqueous sodium chloride do conduct. [5]",
            "Write the formula of the ionic compound formed between aluminium (Al³⁺) and sulfate (SO₄²⁻) ions. Explain how you determined the formula. [3]"
          ]
        },
        {
          title: "Covalent Bonding — Electron Sharing and Structure Types",
          body: `## What is Covalent Bonding?

**Covalent bonding** occurs between **non-metal atoms** that share pairs of electrons. Each shared pair constitutes one covalent bond. Both atoms are simultaneously attracted to the shared electrons, holding them together. The shared electrons simultaneously satisfy the valence requirements of both atoms, giving each a noble-gas-like full outer shell.

**Why sharing rather than transferring?** When both atoms have high electronegativity (tendency to attract electrons), neither easily gives up electrons to the other. Sharing is the only way both can achieve a stable full outer shell.

## Covalent Bonds — Single, Double, and Triple

**Single bond:** One shared pair of electrons. Represented as a single line (–) in structural formulae or as two dots in dot-and-cross diagrams.

**Double bond:** Two shared pairs of electrons. Represented as = in structural formulae. Shorter and stronger than a single bond between the same atoms.

**Triple bond:** Three shared pairs. Represented as ≡. Even shorter and stronger. The N≡N triple bond in nitrogen gas (945 kJ/mol bond energy) is one of the strongest bonds in chemistry — this is why N₂ is so unreactive.

## Key Molecules — Structures and Shapes

**Hydrogen (H₂):** Each H has 1 electron; shares 1 pair → each H achieves 2e (full for shell 1). Bond: H–H.

**Chlorine (Cl₂):** Each Cl (2,8,7) has 7 outer electrons; shares 1 pair → each Cl achieves 8 outer electrons. Bond: Cl–Cl. Each Cl also has 3 lone pairs (non-bonding electron pairs).

**Hydrogen chloride (HCl):** H (1e) + Cl (7e) share 1 pair → H achieves 2e; Cl achieves 8e. Polar covalent bond — Cl is more electronegative → electron density pulled toward Cl end → partial charges: H^δ+ – Cl^δ−.

**Water (H₂O):** O (2,6) forms 2 single bonds with 2 H atoms. O achieves 8e; each H achieves 2e. Bent shape (bond angle ~104.5°) due to 2 lone pairs on O repelling bonding pairs. Highly polar molecule.

**Ammonia (NH₃):** N (2,5) forms 3 single bonds with 3 H atoms. Pyramidal shape (bond angle ~107°) due to 1 lone pair on N. N–H bonds are polar.

**Methane (CH₄):** C (2,4) forms 4 single bonds with 4 H atoms. Tetrahedral shape (bond angle ~109.5°) — no lone pairs. Non-polar molecule (equal pull in all directions).

**Oxygen (O₂):** Each O (2,6) needs 2 more electrons → **double bond**. Each O shares 2 pairs with the other O, each achieving 8 outer electrons. **O=O**.

**Carbon dioxide (CO₂):** C needs 4 more; each O needs 2 more → C forms a double bond with each O: **O=C=O**. Linear molecule. C achieves 8 (4+4); each O achieves 8 (4+4). Non-polar despite polar C=O bonds (they cancel due to linear symmetry).

**Nitrogen (N₂):** Each N (2,5) needs 3 more → **triple bond**: **N≡N**. Very strong and very short bond. Explains N₂'s low reactivity.

## Properties of Simple Molecular Covalent Compounds

Simple molecular compounds consist of discrete molecules with **strong intramolecular covalent bonds** (within the molecule) but only **weak intermolecular forces** between molecules (van der Waals forces, and in polar molecules also dipole-dipole forces and hydrogen bonds).

**The crucial distinction exam questions test:** When a simple molecular compound melts or boils, the **covalent bonds within the molecules are NOT broken**. Only the **weak forces between molecules** are overcome. This is why melting/boiling points are low.

| Property | Simple molecular (e.g. H₂O, CO₂, CH₄) | Reason |
|---------|--------------------------------------|---------|
| Low melting/boiling points | H₂O: 0°C/100°C; CO₂: −78°C (sublimes); CH₄: −182°C | Weak intermolecular forces overcome — not covalent bonds |
| Poor electrical conductors (most) | Non-conductors | No ions, no free electrons |
| Vary in solubility | Water dissolves polar molecules and ions; non-polar molecules dissolve in organic solvents | "Like dissolves like" |

## Giant Covalent (Atomic) Lattice Structures

Some non-metals and metalloids form **giant covalent lattices** where every atom is bonded to multiple neighbours by strong covalent bonds extending throughout the entire solid:

### Diamond — the Hardest Natural Substance

Every carbon atom bonds to **4 other carbon atoms** in a **tetrahedral arrangement** (bond angle 109.5°). This forms a rigid, three-dimensional lattice extending in all directions. Properties:
- **Extremely hard** — force applied in any direction encounters very strong covalent bonds; essentially impossible to cut by conventional means
- **Very high melting point** (~3550°C) — an enormous number of strong C–C bonds must all be broken simultaneously
- **Does not conduct electricity** — all 4 outer electrons of each C are used in bonding; no free electrons
- **Insoluble in all solvents** — too strongly held in the lattice

### Graphite — the Conductor

Each carbon bonds to **3 others** in a **flat hexagonal layer** (bond angle 120°). One outer electron per carbon is not used in bonding — it is **delocalised** between the layers. Properties:
- **Conducts electricity** — the delocalised electrons are free to move; graphite is used as electrodes in electrolysis and batteries
- **Lubricant and used in pencils** — layers are held together only by very weak van der Waals forces; they slide over each other easily, depositing on surfaces
- **High melting point** — strong covalent bonds within each layer; but can be cleaved between layers with relatively little force
- **Opaque black** — absorbs light

### Silicon Dioxide (SiO₂) — Sand/Quartz

Each Si bonds to **4 O atoms**; each O bridges between 2 Si atoms. Three-dimensional giant lattice. Very hard, very high melting point (~1700°C), non-conductor. Used in glass and semiconductors.

> **Comparing diamond and graphite:** Both are giant covalent structures of pure carbon, yet they are completely different in appearance, hardness, and electrical conductivity — because of the different **bonding pattern**. This is one of the most elegant examples in all of chemistry of how structure determines properties.`,
          groups: [],
          recap: [
            "Draw dot-and-cross diagrams showing the bonding in: (a) H₂O, (b) NH₃, (c) O₂. Show outer shell electrons only. For each molecule, state the number of bonding pairs and lone pairs on the central atom. [6]",
            "Explain why carbon dioxide has a low boiling point (−78°C) despite containing strong C=O covalent bonds. [4]",
            "Compare the structures of diamond and graphite at the atomic level. Explain why graphite conducts electricity but diamond does not. [5]",
            "Explain the difference between a simple molecular structure and a giant covalent structure, giving one example of each. [4]",
            "Silicon dioxide (SiO₂) has a very high melting point of approximately 1700°C. Explain why, with reference to its structure. [3]"
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Stoichiometry",
      intro: "Stoichiometry is the quantitative language of chemistry — it bridges the atomic world (individual atoms that cannot be seen or weighed) and the laboratory world (grams of substance in a beaker). The **mole** concept gives us this bridge: one mole of any substance contains exactly 6.02 × 10²³ particles, and its mass in grams equals the substance's relative molecular mass. With the mole, balanced equations become quantitative recipes telling us exactly how much of each substance reacts and forms.",
      subheadings: [
        {
          title: "The Mole, Molar Mass and Avogadro's Constant",
          body: `## The Problem — Bridging the Atomic and Laboratory Scales

A single carbon atom has a mass of approximately 2 × 10⁻²³ grams — far too small to see, let alone weigh on any scale. Yet chemists work with grams of substances in the laboratory. How do we connect these two scales?

The answer is the **mole**: a counting unit that defines a specific, astronomically large number of particles:

$$1 \\text{ mol} = 6.022 \\times 10^{23} \\text{ particles}$$

This number — **Avogadro's constant** (Nₐ = 6.022 × 10²³ mol⁻¹) — was chosen specifically so that 1 mole of ¹²C (carbon-12 atoms) has a mass of exactly **12 grams**. This makes the molar mass (in g/mol) numerically equal to the relative atomic/molecular mass.

## The Three Fundamental Mole Relationships

**Relationship 1 — Moles and Mass:**

$$n = \\frac{m}{M}$$

where n = moles, m = mass in grams, M = molar mass in g/mol

**Relationship 2 — Moles and Volume (gases at rtp):**

At room temperature and pressure (rtp: 25°C, 101 kPa), one mole of ANY gas occupies **24 dm³** (24,000 cm³):

$$n = \\frac{V(\\text{dm}^3)}{24} \\quad \\text{or} \\quad n = \\frac{V(\\text{cm}^3)}{24000}$$

**Relationship 3 — Moles and Concentration:**

$$c = \\frac{n}{V} \\quad \\text{or} \\quad n = c \\times V$$

where c = concentration in mol/dm³, V = volume in dm³

> **Always check units:** Volume must be in dm³ for concentration calculations. Convert cm³ to dm³ by dividing by 1000.

## Worked Calculations

**Example 1: Finding moles from mass**
How many moles are in 22 g of CO₂?
- M(CO₂) = 12 + 2×16 = 44 g/mol
- n = 22/44 = **0.50 mol**

**Example 2: Finding mass from moles**
What mass of Na₂CO₃ contains 0.25 mol?
- M(Na₂CO₃) = 2×23 + 12 + 3×16 = 46 + 12 + 48 = 106 g/mol
- m = 0.25 × 106 = **26.5 g**

**Example 3: Gas volume**
What volume does 0.40 mol of SO₂ occupy at rtp?
- V = 0.40 × 24 = **9.6 dm³**

**Example 4: Number of particles**
How many molecules are in 18 g of water?
- M(H₂O) = 18 g/mol; n = 18/18 = 1 mol
- Number = 1 × 6.02 × 10²³ = **6.02 × 10²³ molecules**

**Example 5: Concentration**
A solution contains 5.3 g of Na₂CO₃ in 500 cm³. Calculate concentration.
- M(Na₂CO₃) = 106 g/mol; n = 5.3/106 = 0.050 mol
- V = 500/1000 = 0.500 dm³
- c = 0.050/0.500 = **0.10 mol/dm³**

## Empirical and Molecular Formulae

**Empirical formula:** The simplest whole-number ratio of atoms in a compound.
**Molecular formula:** The actual number of each type of atom in one molecule.

The molecular formula is always a whole-number multiple of the empirical formula.

### Finding Empirical Formula from % Composition — The Method

| Step | Action |
|------|--------|
| 1 | Write the percentage of each element |
| 2 | Divide each percentage by the element's Aᵣ to get mole ratio |
| 3 | Divide all mole ratios by the smallest value |
| 4 | Round to nearest whole number (or multiply if needed) |
| 5 | Write the empirical formula |

**Worked example:** A compound contains 40.0% C, 6.7% H, 53.3% O by mass.

| Element | % | ÷ Aᵣ | ÷ smallest |
|---------|---|------|-----------|
| C | 40.0 | 40.0/12 = 3.33 | 3.33/3.33 = **1.00** |
| H | 6.7 | 6.7/1 = 6.70 | 6.70/3.33 = **2.01 ≈ 2** |
| O | 53.3 | 53.3/16 = 3.33 | 3.33/3.33 = **1.00** |

Empirical formula = **CH₂O** (glucose has molecular formula C₆H₁₂O₆ = 6 × CH₂O)`,
          groups: [],
          recap: [
            "Calculate the number of moles in 27 g of aluminium (Al, Aᵣ = 27). [1]",
            "What mass of iron(III) oxide (Fe₂O₃) contains 0.40 mol? (Aᵣ: Fe = 56, O = 16) [2]",
            "What volume does 4.4 g of CO₂ occupy at rtp? (Molar volume = 24 dm³/mol; M(CO₂) = 44 g/mol) [3]",
            "A solution of NaOH has concentration 0.5 mol/dm³. Calculate the mass of NaOH in 250 cm³ of this solution. (M(NaOH) = 40 g/mol) [3]",
            "A compound contains 32.4% Na, 22.5% S, and 45.1% O by mass. Determine its empirical formula. [4]"
          ]
        },
        {
          title: "Reacting Mass Calculations and Percentage Yield",
          body: `## Using Balanced Equations for Reacting Mass Calculations

A balanced chemical equation is a quantitative statement: the coefficients give the **exact mole ratio** in which substances react and are produced.

$$2Mg + O_2 \\rightarrow 2MgO$$

This tells us: 2 mol Mg reacts with 1 mol O₂ to produce 2 mol MgO. Or equivalently: 4× of anything Mg reacts with 2× of the same thing of O₂ to produce 4× of MgO. The ratio is fixed.

## The Four-Step Method for Reacting Mass Problems

1. **Write** the balanced equation
2. **Write** the mole ratio (from the equation) under each relevant substance
3. **Calculate moles** of the given substance (n = m/M)
4. **Use the ratio** to find moles of the unknown, then **convert to mass** (m = n × M)

### Worked Example 1

**How much iron can be obtained from 800 g of iron(III) oxide (Fe₂O₃) by reduction with carbon monoxide?**

$$Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2$$

Mole ratio: 1 mol Fe₂O₃ : 2 mol Fe

- M(Fe₂O₃) = 2×56 + 3×16 = 160 g/mol
- n(Fe₂O₃) = 800/160 = **5.0 mol**
- From ratio: 5.0 mol Fe₂O₃ → 2 × 5.0 = **10.0 mol Fe**
- M(Fe) = 56 g/mol; m(Fe) = 10.0 × 56 = **560 g**

### Worked Example 2

**What mass of calcium carbonate is needed to produce 22 g of CO₂?**

$$CaCO_3 \\rightarrow CaO + CO_2$$

Mole ratio: 1 mol CaCO₃ : 1 mol CO₂

- M(CO₂) = 44 g/mol; n(CO₂) = 22/44 = **0.50 mol**
- From ratio: 0.50 mol CO₂ requires **0.50 mol CaCO₃**
- M(CaCO₃) = 100 g/mol; m(CaCO₃) = 0.50 × 100 = **50 g**

## Percentage Yield

In practice, the actual yield obtained from a reaction is always less than the theoretical maximum calculated from the equation. Reasons include:
- The reaction may not go to completion (reversible reactions reach equilibrium before all reactants are consumed)
- Side reactions produce unwanted products
- Product is lost during separation, filtering, or transfer between containers
- Some product may remain dissolved in solution or stuck to glassware

$$\\% \\text{ yield} = \\frac{\\text{actual yield (g)}}{\\text{theoretical yield (g)}} \\times 100\\%$$

**Worked example:** Theoretical yield of aspirin from a reaction = 5.4 g. Actual yield obtained after filtering and drying = 3.8 g.

$$\\% \\text{ yield} = \\frac{3.8}{5.4} \\times 100 = 70.4\\%$$

## Percentage Purity

A sample of an impure substance contains the desired compound plus contaminants (unreacted starting material, by-products, etc.).

$$\\% \\text{ purity} = \\frac{\\text{mass of pure substance in sample}}{\\text{total mass of sample}} \\times 100\\%$$

**Worked example:** A 25 g sample of calcium carbonate (limestone) is treated with excess HCl. Only 22 g of calcium carbonate actually reacts (the rest is inert impurity). What is the percentage purity?

$$\\% \\text{ purity} = \\frac{22}{25} \\times 100 = 88\\%$$`,
          groups: [],
          recap: [
            "In the reaction: 4Fe + 3O₂ → 2Fe₂O₃, calculate the mass of iron(III) oxide produced when 11.2 g of iron reacts completely. (Aᵣ: Fe = 56, O = 16) [4]",
            "A student attempts to prepare zinc sulfate (ZnSO₄) from zinc and dilute sulfuric acid. The theoretical yield is 16.1 g but only 12.4 g is obtained. Calculate the percentage yield. [2]",
            "Explain two reasons why the actual yield of a reaction is often less than the theoretical yield. [2]",
            "A 10.0 g sample of impure sodium hydroxide is dissolved in water and titrated. Only 8.5 g of NaOH reacts. Calculate the percentage purity of the sample. [2]"
          ]
        },
        {
          title: "Titration Calculations",
          body: `## What is a Titration?

A **titration** is a quantitative analytical technique used to determine the concentration of an unknown solution by reacting it with a **standard solution** (a solution of precisely known concentration) until the reaction is exactly complete (the **equivalence point**). The volume of standard solution required is called the **titre**.

## Standard Equipment and Procedure

**Equipment:**
- **Burette** (0–50 cm³, graduated in 0.1 cm³): contains the standard solution; delivers measured volumes precisely
- **Pipette** (typically 25.0 cm³): delivers a precise, fixed volume of the unknown solution into the conical flask
- **Conical flask**: where the reaction takes place (preferred over beakers — less splashing)
- **Indicator**: shows the equivalence point by colour change

**Step-by-step procedure:**
1. Rinse the burette with the standard solution (not water — this would dilute it); fill and record initial reading
2. Use a pipette filler to transfer exactly 25.0 cm³ of the unknown solution into a clean conical flask
3. Add 2–3 drops of appropriate indicator
4. Add standard solution from the burette slowly, swirling continuously
5. As the end point approaches (indicator shows faint colour change), add drop by drop
6. Record the final burette reading at the exact colour change; calculate titre = final − initial reading
7. Repeat until two concordant titres (within 0.10 cm³ of each other) are obtained
8. Average the concordant titres (exclude the rough trial)

**Indicators used:**
- **Methyl orange** (yellow in alkali → red in acid): used when titrating a strong acid into an alkali, or when titrating sodium carbonate with acids
- **Phenolphthalein** (pink in alkali → colourless in acid): used when titrating a strong alkali into an acid; particularly useful for weak acid + strong base

## Titration Calculation — The Method

$$n = c \\times V \\quad \\text{(moles = concentration × volume in dm³)}$$

$$c = \\frac{n}{V}$$

**Example 1: Simple 1:1 ratio (HCl + NaOH)**

25.0 cm³ of NaOH solution requires 18.5 cm³ of 0.100 mol/dm³ HCl to reach the end point.

Equation: HCl + NaOH → NaCl + H₂O (1:1 mole ratio)

**Step 1** — n(HCl) = c × V = 0.100 × (18.5/1000) = **0.00185 mol**

**Step 2** — From 1:1 ratio: n(NaOH) = 0.00185 mol

**Step 3** — c(NaOH) = n/V = 0.00185 / (25.0/1000) = **0.0740 mol/dm³**

**Example 2: 1:2 ratio (H₂SO₄ + NaOH)**

25.0 cm³ of H₂SO₄ is neutralised by 32.0 cm³ of 0.200 mol/dm³ NaOH.

Equation: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O (1:2 mole ratio)

**Step 1** — n(NaOH) = 0.200 × (32.0/1000) = **0.00640 mol**

**Step 2** — From ratio 1:2: n(H₂SO₄) = 0.00640 / 2 = **0.00320 mol**

**Step 3** — c(H₂SO₄) = 0.00320 / (25.0/1000) = **0.128 mol/dm³**

**Example 3: Sodium carbonate + HCl**

Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂ (1:2 ratio)

25.0 cm³ of 0.0500 mol/dm³ Na₂CO₃ requires 24.8 cm³ of HCl.

**Step 1** — n(Na₂CO₃) = 0.0500 × (25.0/1000) = **0.00125 mol**

**Step 2** — From ratio 1:2: n(HCl) = 2 × 0.00125 = **0.00250 mol**

**Step 3** — c(HCl) = 0.00250 / (24.8/1000) = **0.1008 mol/dm³ ≈ 0.101 mol/dm³**

> **Precision in titrations:** Always give titration volumes to the nearest 0.05 cm³ (half a smallest division). Burette readings should be taken at the bottom of the meniscus, at eye level. Concordant titres must agree within 0.10 cm³.`,
          groups: [],
          recap: [
            "25.0 cm³ of KOH solution requires 20.5 cm³ of 0.100 mol/dm³ HNO₃ for complete neutralisation. Calculate the concentration of the KOH. (HNO₃ + KOH → KNO₃ + H₂O) [4]",
            "In a titration, 25.0 cm³ of H₂SO₄ requires 30.0 cm³ of 0.200 mol/dm³ NaOH. Calculate the concentration of the H₂SO₄. (H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O) [4]",
            "Explain why concordant titres are used rather than a single titre. [2]",
            "State which indicator is most suitable for a titration between sodium hydroxide and ethanoic acid (a weak acid). Give a reason for your choice. [2]"
          ]
        }
      ]
    }
  ]
};