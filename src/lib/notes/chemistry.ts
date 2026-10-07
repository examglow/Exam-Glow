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
      intro: "All matter is made of particles in constant motion. The three states of matter — solid, liquid, and gas — differ in how their particles are arranged, how they move, and how strongly they attract each other. The kinetic particle theory explains every physical property of matter from density to compressibility, and predicts what happens when substances are heated, cooled, compressed, or mixed. This chapter is the foundation for understanding all physical and chemical changes in chemistry.",
      subheadings: [
        {
          title: "The Kinetic Particle Theory — Three States of Matter",
          body: `The **kinetic particle theory** has three core principles:
1. All matter is made of tiny particles (atoms, molecules, or ions)
2. These particles are in **constant random motion**
3. Temperature is a measure of the **average kinetic energy** of the particles — higher temperature = faster movement

:::svg[Particle Arrangement in Solids, Liquids and Gases]
<svg viewBox="0 0 540 200" width="540" height="200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="540" height="200" fill="#f8fafc" rx="12"/>
  <text x="270" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Particle Arrangement in the Three States of Matter</text>
  <!-- SOLID -->
  <rect x="12" y="28" width="162" height="145" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
  <text x="93" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">SOLID</text>
  <circle cx="42" cy="72" r="11" fill="#3b82f6"/><circle cx="68" cy="72" r="11" fill="#3b82f6"/><circle cx="94" cy="72" r="11" fill="#3b82f6"/><circle cx="120" cy="72" r="11" fill="#3b82f6"/><circle cx="146" cy="72" r="11" fill="#3b82f6"/>
  <circle cx="42" cy="98" r="11" fill="#3b82f6"/><circle cx="68" cy="98" r="11" fill="#3b82f6"/><circle cx="94" cy="98" r="11" fill="#3b82f6"/><circle cx="120" cy="98" r="11" fill="#3b82f6"/><circle cx="146" cy="98" r="11" fill="#3b82f6"/>
  <circle cx="42" cy="124" r="11" fill="#3b82f6"/><circle cx="68" cy="124" r="11" fill="#3b82f6"/><circle cx="94" cy="124" r="11" fill="#3b82f6"/><circle cx="120" cy="124" r="11" fill="#3b82f6"/><circle cx="146" cy="124" r="11" fill="#3b82f6"/>
  <text x="93" y="153" text-anchor="middle" font-size="8.5" fill="#1e40af">Regular lattice — vibrate only</text>
  <text x="93" y="165" text-anchor="middle" font-size="8.5" fill="#1e40af">Strong forces, fixed positions</text>
  <!-- LIQUID -->
  <rect x="190" y="28" width="162" height="145" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="2"/>
  <text x="271" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">LIQUID</text>
  <circle cx="218" cy="78" r="11" fill="#22c55e"/><circle cx="248" cy="68" r="11" fill="#22c55e"/><circle cx="275" cy="82" r="11" fill="#22c55e"/><circle cx="305" cy="72" r="11" fill="#22c55e"/>
  <circle cx="222" cy="108" r="11" fill="#22c55e"/><circle cx="255" cy="100" r="11" fill="#22c55e"/><circle cx="285" cy="112" r="11" fill="#22c55e"/><circle cx="312" cy="102" r="11" fill="#22c55e"/>
  <circle cx="215" cy="134" r="11" fill="#22c55e"/><circle cx="248" cy="128" r="11" fill="#22c55e"/><circle cx="278" cy="138" r="11" fill="#22c55e"/>
  <path d="M248,58 L255,48" stroke="#15803d" stroke-width="1.5"/><path d="M305,62 L315,55" stroke="#15803d" stroke-width="1.5"/>
  <text x="271" y="153" text-anchor="middle" font-size="8.5" fill="#166534">Close but random — can slide</text>
  <text x="271" y="165" text-anchor="middle" font-size="8.5" fill="#166534">Weaker forces, no fixed positions</text>
  <!-- GAS -->
  <rect x="368" y="28" width="162" height="145" rx="10" fill="#fef9c3" stroke="#eab308" stroke-width="2"/>
  <text x="449" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#854d0e">GAS</text>
  <circle cx="395" cy="65" r="11" fill="#eab308"/><circle cx="460" cy="75" r="11" fill="#eab308"/><circle cx="508" cy="60" r="11" fill="#eab308"/>
  <circle cx="410" cy="110" r="11" fill="#eab308"/><circle cx="478" cy="115" r="11" fill="#eab308"/>
  <circle cx="390" cy="145" r="11" fill="#eab308"/><circle cx="510" cy="140" r="11" fill="#eab308"/>
  <path d="M395,54 L385,42" stroke="#b45309" stroke-width="1.5"/><path d="M460,64 L470,50" stroke="#b45309" stroke-width="1.5"/><path d="M410,99 L418,86" stroke="#b45309" stroke-width="1.5"/>
  <text x="449" y="153" text-anchor="middle" font-size="8.5" fill="#92400e">Far apart — rapid random motion</text>
  <text x="449" y="165" text-anchor="middle" font-size="8.5" fill="#92400e">Negligible forces, no fixed positions</text>
</svg>
:::

## Properties Explained by Particle Theory

| Property | Solid | Liquid | Gas |
|---------|-------|--------|-----|
| **Shape** | Fixed (rigid) | Takes shape of container | Fills entire container |
| **Volume** | Fixed | Fixed | Not fixed — expands to fill space |
| **Density** | High (particles touching) | Similar to solid (slightly lower) | Very low (~1000× less) |
| **Compressibility** | Cannot compress | Barely compressible | Highly compressible |
| **Can it flow?** | No | Yes | Yes |
| **Particle arrangement** | Regular ordered lattice | Random but close | Completely random, far apart |

## Changes of State

When you supply heat to a substance, particles gain kinetic energy. At specific temperatures (melting point, boiling point), something different happens:

> **At the melting point and boiling point, temperature does NOT rise even though heat energy is being supplied.** All the energy goes into breaking the intermolecular forces holding particles together — none increases kinetic energy. This energy is called **latent heat** (of fusion for melting; of vaporisation for boiling).

### Heating Curve — Temperature vs Heat Energy Supplied

:::svg[Heating Curve Showing Changes of State]
<svg viewBox="0 0 480 210" width="480" height="210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="480" height="210" fill="#f8fafc" rx="12"/>
  <text x="240" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Heating Curve — Temperature vs Heat Energy Supplied</text>
  <line x1="50" y1="185" x2="460" y2="185" stroke="#334155" stroke-width="2"/>
  <line x1="50" y1="20" x2="50" y2="185" stroke="#334155" stroke-width="2"/>
  <text x="255" y="202" text-anchor="middle" font-size="10" fill="#475569">Heat energy supplied →</text>
  <text x="16" y="105" text-anchor="middle" font-size="10" fill="#475569" transform="rotate(-90,16,105)">Temperature →</text>
  <!-- Solid rising -->
  <polyline points="58,175 118,148" stroke="#3b82f6" stroke-width="3" fill="none"/>
  <!-- Melting plateau -->
  <polyline points="118,148 198,148" stroke="#f97316" stroke-width="3.5" fill="none"/>
  <!-- Liquid rising -->
  <polyline points="198,148 308,95" stroke="#22c55e" stroke-width="3" fill="none"/>
  <!-- Boiling plateau -->
  <polyline points="308,95 398,95" stroke="#ef4444" stroke-width="3.5" fill="none"/>
  <!-- Gas rising -->
  <polyline points="398,95 462,68" stroke="#8b5cf6" stroke-width="3" fill="none"/>
  <!-- Labels -->
  <text x="88" y="142" text-anchor="middle" font-size="9" fill="#1d4ed8">Solid</text>
  <text x="158" y="138" text-anchor="middle" font-size="9" fill="#ea580c" font-weight="700">Melting</text>
  <text x="158" y="150" text-anchor="middle" font-size="8" fill="#c2410c">(T constant)</text>
  <text x="253" y="118" text-anchor="middle" font-size="9" fill="#15803d">Liquid</text>
  <text x="353" y="84" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="700">Boiling</text>
  <text x="353" y="95" text-anchor="middle" font-size="8" fill="#b91c1c">(T constant)</text>
  <text x="444" y="78" text-anchor="middle" font-size="9" fill="#7c3aed">Gas</text>
  <!-- MP BP markers -->
  <line x1="118" y1="148" x2="118" y2="185" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="118" y="197" text-anchor="middle" font-size="8.5" fill="#64748b">MP</text>
  <line x1="308" y1="95" x2="308" y2="185" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="308" y="197" text-anchor="middle" font-size="8.5" fill="#64748b">BP</text>
</svg>
:::

## Diffusion — Evidence for Particle Motion

**Diffusion** is the net movement of particles from high concentration to low concentration due to random particle motion. It is entirely explained by the kinetic particle theory — particles move randomly in all directions; statistically, more particles move from the crowded side to the empty side than vice versa.

**Bromine in air:** Open a sealed tube of bromine in air — the brown colour spreads upward through the air (gases diffuse rapidly at room temperature because particles move fast and spaces between them are large).

**Potassium manganate(VII) crystal in water:** Drop a crystal in still water — a purple colour slowly spreads out (liquid diffusion is much slower because particles are close together and constantly collide, restricting movement).

**The ammonia–HCl experiment:**
- Cotton wool soaked in concentrated HCl placed at one end of a glass tube; cotton wool soaked in ammonia solution at the other end
- NH₃(g) + HCl(g) → NH₄Cl(s) — white smoke forms where the two gases meet
- The white ring forms **closer to the HCl end** — NH₃ (Mr = 17) is lighter than HCl (Mr = 36.5) and diffuses faster
- By Graham's Law: rate ∝ 1/√Mr, so NH₃ diffuses ~1.47× faster than HCl`,
          groups: [],
          recap: [
            "Describe the arrangement and movement of particles in a liquid. [3]",
            "Explain, using kinetic particle theory, why gases are much less dense than liquids. [3]",
            "Explain why the temperature remains constant while a solid is melting, even though heat energy is still being supplied. [3]",
            "In the ammonia–HCl diffusion experiment, explain why the white ring forms closer to the HCl end of the tube. Include the molar masses of both gases. [4]",
            "State three differences between the properties of a solid and a gas. [3]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Atoms, Elements and Compounds",
      intro: "The atom is the smallest particle of an element that retains its chemical identity. Understanding atomic structure — protons, neutrons, electrons, and their arrangements — explains the entire Periodic Table, all chemical bonding, and the properties of every substance. The difference between ionic bonding (electron transfer) and covalent bonding (electron sharing) directly explains why salt has a high melting point and conducts electricity when dissolved, while sugar dissolves without conducting and melts at a low temperature.",
      subheadings: [
        {
          title: "Atomic Structure — Sub-atomic Particles and Electron Configuration",
          body: `## Sub-atomic Particles

Every atom has a tiny, dense, positively charged **nucleus** containing protons and neutrons, surrounded by electrons arranged in **shells (energy levels)**.

| Particle | Relative mass | Relative charge | Location |
|----------|-------------|----------------|---------|
| **Proton** | 1 | +1 | Nucleus |
| **Neutron** | 1 | 0 | Nucleus |
| **Electron** | 1/1836 (≈ 0) | −1 | Shells around nucleus |

- **Atomic number (Z)** = number of protons = number of electrons (in a neutral atom)
- **Mass number (A)** = protons + neutrons
- **Number of neutrons** = A − Z

:::svg[Atomic Structure — Sodium Atom (Na, Z=11)]
<svg viewBox="0 0 420 230" width="420" height="230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="420" height="230" fill="#f8fafc" rx="12"/>
  <text x="210" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Sodium Atom: ²³₁₁Na — Electron Configuration 2,8,1</text>
  <!-- Shell 1 (2e) -->
  <circle cx="210" cy="120" r="38" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Shell 2 (8e) -->
  <circle cx="210" cy="120" r="78" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Shell 3 (1e) -->
  <circle cx="210" cy="120" r="115" fill="none" stroke="#f97316" stroke-width="2" stroke-dasharray="5,3"/>
  <!-- Nucleus -->
  <circle cx="210" cy="120" r="25" fill="#1e293b"/>
  <text x="210" y="115" text-anchor="middle" font-size="9.5" fill="white" font-weight="700">11p⁺</text>
  <text x="210" y="128" text-anchor="middle" font-size="9" fill="#93c5fd">12n⁰</text>
  <!-- Shell 1 electrons (2) -->
  <circle cx="210" cy="82" r="8" fill="#3b82f6"/><text x="210" y="86" text-anchor="middle" font-size="8" fill="white">e</text>
  <circle cx="210" cy="158" r="8" fill="#3b82f6"/><text x="210" y="162" text-anchor="middle" font-size="8" fill="white">e</text>
  <!-- Shell 2 electrons (8) -->
  <circle cx="210" cy="42" r="8" fill="#22c55e"/><circle cx="265" cy="65" r="8" fill="#22c55e"/>
  <circle cx="288" cy="120" r="8" fill="#22c55e"/><circle cx="265" cy="175" r="8" fill="#22c55e"/>
  <circle cx="210" cy="198" r="8" fill="#22c55e"/><circle cx="155" cy="175" r="8" fill="#22c55e"/>
  <circle cx="132" cy="120" r="8" fill="#22c55e"/><circle cx="155" cy="65" r="8" fill="#22c55e"/>
  <!-- Shell 3 electron (1) - outer lone electron -->
  <circle cx="210" cy="5" r="9" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
  <text x="210" y="9" text-anchor="middle" font-size="8" fill="white" font-weight="700">e</text>
  <!-- Labels -->
  <text x="338" y="42" font-size="9" fill="#1d4ed8">Shell 1: 2e (max 2)</text>
  <text x="338" y="56" font-size="9" fill="#15803d">Shell 2: 8e (max 8)</text>
  <text x="338" y="70" font-size="9.5" fill="#ea580c" font-weight="600">Shell 3: 1e ← outer shell</text>
  <text x="338" y="84" font-size="8.5" fill="#92400e">(Group 1 — loses this</text>
  <text x="338" y="96" font-size="8.5" fill="#92400e">1e to form Na⁺)</text>
  <text x="338" y="116" font-size="9" fill="#334155">Config: 2, 8, 1</text>
  <text x="338" y="130" font-size="9" fill="#334155">Group 1 · Period 3</text>
</svg>
:::

## Electron Configuration Rules
1. Fill the innermost shell first
2. Shell 1: maximum **2** electrons
3. Shell 2: maximum **8** electrons
4. Shell 3: maximum **8** electrons (at IGCSE level)
5. Number of outer-shell electrons = **Group number** (Groups 1–7)
6. Number of occupied shells = **Period number**

### Key Examples

| Element | Z | Config | Group | Period | Ion formed |
|---------|---|--------|-------|--------|-----------|
| H | 1 | 1 | 1 | 1 | H⁺ |
| C | 6 | 2,4 | 4 | 2 | (covalent) |
| N | 7 | 2,5 | 5 | 2 | N³⁻ |
| O | 8 | 2,6 | 6 | 2 | O²⁻ |
| Na | 11 | 2,8,1 | 1 | 3 | Na⁺ |
| Mg | 12 | 2,8,2 | 2 | 3 | Mg²⁺ |
| Cl | 17 | 2,8,7 | 7 | 3 | Cl⁻ |
| Ca | 20 | 2,8,8,2 | 2 | 4 | Ca²⁺ |
| Fe | 26 | 2,8,14,2 | — | 4 | Fe²⁺ or Fe³⁺ |

## Isotopes
**Isotopes** are atoms of the **same element** with the **same number of protons** but **different numbers of neutrons** (and therefore different mass numbers).

- **Same chemical properties** — same number of electrons → same electron configuration → same bonding behaviour
- **Different physical properties** — different mass → different density, different boiling point of liquid isotopes, different rate of diffusion of gaseous isotopes

**Example — Carbon Isotopes:**

| Isotope | Protons | Neutrons | Mass no. | Notes |
|---------|---------|----------|----------|-------|
| ¹²C | 6 | 6 | 12 | Stable, 98.9% natural abundance |
| ¹³C | 6 | 7 | 13 | Stable, 1.1% |
| ¹⁴C | 6 | 8 | 14 | Radioactive — used in carbon dating |

**Relative atomic mass (Aᵣ):** The weighted average mass of all naturally occurring isotopes relative to 1/12 the mass of ¹²C.

For chlorine: 75% ³⁵Cl and 25% ³⁷Cl:
$$A_r = \\frac{(75 \\times 35) + (25 \\times 37)}{100} = \\frac{2625 + 925}{100} = 35.5$$`,
          groups: [],
          recap: [
            "An atom of phosphorus has atomic number 15 and mass number 31. State the number of protons, neutrons, and electrons. Write its electron configuration. [5]",
            "Explain what isotopes are and why isotopes of the same element have identical chemical properties but different physical properties. [4]",
            "Chlorine has two isotopes: ³⁵Cl (75%) and ³⁷Cl (25%). Calculate the relative atomic mass of chlorine. [2]",
            "Using the electron configuration of sodium (2,8,1), explain why sodium always forms a 1+ ion rather than a 2+ ion. [3]"
          ]
        },
        {
          title: "Ionic Bonding — Electron Transfer",
          body: `**Ionic bonding** forms when electrons are transferred from a metal to a non-metal atom. The result is two oppositely charged ions held together by strong **electrostatic attraction**.

## Formation — Step by Step

**Example: Sodium + Chlorine → Sodium Chloride**

1. Na has configuration 2,8,**1** — one outer electron, far from a full shell
2. Cl has configuration 2,8,**7** — needs one more electron to complete its outer shell
3. Na **transfers** its outer electron to Cl
4. Na becomes **Na⁺** (2,8) — noble gas configuration of neon
5. Cl becomes **Cl⁻** (2,8,8) — noble gas configuration of argon
6. Opposite charges → strong electrostatic attraction = **ionic bond**

**Example: Magnesium + Oxygen → Magnesium Oxide**

1. Mg (2,8,2) loses **2** outer electrons → Mg²⁺ (2,8)
2. O (2,6) gains **2** electrons → O²⁻ (2,8)
3. Mg²⁺ + O²⁻ → MgO lattice

**Example: Aluminium + Oxygen → Aluminium Oxide (Al₂O₃)**

1. Al (2,8,3) loses 3 electrons → Al³⁺
2. O gains 2 electrons → O²⁻
3. To balance charges: 2 Al³⁺ (total +6) + 3 O²⁻ (total −6) → Al₂O₃

## The Giant Ionic Lattice

In solid ionic compounds, ions do NOT exist as isolated pairs. They form a **giant ionic lattice** — a regular three-dimensional array where each ion is surrounded by multiple ions of opposite charge. In NaCl, each Na⁺ is surrounded by **6** Cl⁻ ions, and each Cl⁻ by **6** Na⁺ ions.

:::svg[NaCl Giant Ionic Lattice Structure]
<svg viewBox="0 0 420 200" width="420" height="200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="420" height="200" fill="#f8fafc" rx="12"/>
  <text x="210" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">NaCl Giant Ionic Lattice — Alternating Na⁺ and Cl⁻ Ions</text>
  <!-- 5×3 grid of alternating ions -->
  <circle cx="55" cy="60" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="55" y="64" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <circle cx="105" cy="60" r="20" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="105" y="64" text-anchor="middle" font-size="9" fill="#1d4ed8">Cl⁻</text>
  <circle cx="160" cy="60" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="160" y="64" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <circle cx="210" cy="60" r="20" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="210" y="64" text-anchor="middle" font-size="9" fill="#1d4ed8">Cl⁻</text>
  <circle cx="265" cy="60" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="265" y="64" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>

  <circle cx="55" cy="115" r="20" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="55" y="119" text-anchor="middle" font-size="9" fill="#1d4ed8">Cl⁻</text>
  <circle cx="105" cy="115" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="105" y="119" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <circle cx="160" cy="115" r="20" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="160" y="119" text-anchor="middle" font-size="9" fill="#1d4ed8">Cl⁻</text>
  <circle cx="210" cy="115" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="210" y="119" text-anchor="middle" font-size="9" fill="#dc2626">Na⁺</text>
  <circle cx="265" cy="115" r="20" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="265" y="119" text-anchor="middle" font-size="9" fill="#1d4ed8">Cl⁻</text>

  <!-- Properties box -->
  <rect x="295" y="35" width="115" height="145" rx="8" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="352" y="52" text-anchor="middle" font-size="8.5" fill="#334155" font-weight="700">Properties of NaCl:</text>
  <text x="352" y="67" text-anchor="middle" font-size="8" fill="#475569">High MP (801°C)</text>
  <text x="352" y="79" text-anchor="middle" font-size="8" fill="#475569">Many bonds to break</text>
  <text x="352" y="97" text-anchor="middle" font-size="8" fill="#475569">Conducts when</text>
  <text x="352" y="109" text-anchor="middle" font-size="8" fill="#475569">molten/dissolved</text>
  <text x="352" y="121" text-anchor="middle" font-size="8" fill="#475569">(free ions move)</text>
  <text x="352" y="139" text-anchor="middle" font-size="8" fill="#475569">No conduction</text>
  <text x="352" y="151" text-anchor="middle" font-size="8" fill="#475569">as solid (ions</text>
  <text x="352" y="163" text-anchor="middle" font-size="8" fill="#475569">fixed in lattice)</text>
</svg>
:::

## Properties of Ionic Compounds and Why

| Property | Explanation |
|---------|-------------|
| **High melting and boiling points** | Many strong electrostatic forces between many ions — enormous energy needed to break all of them |
| **Hard but brittle** | Lattice is rigid. Stress shifts ions so like charges align and repel → lattice shatters |
| **Conducts when molten** | Ions become free to move and carry charge when liquid |
| **Conducts when dissolved in water** | Ions separate (dissociate) and move freely through solution |
| **Does NOT conduct as solid** | Ions locked in fixed lattice — cannot move |
| **Often soluble in water** | Polar water molecules attract ions and pull them out of lattice (hydration) |`,
          groups: [],
          recap: [
            "Describe the formation of ionic bonds when calcium reacts with chlorine to form CaCl₂. Include electron configurations and the charges on the ions formed. [5]",
            "Explain why sodium chloride has a high melting point. [3]",
            "Explain why solid sodium chloride does not conduct electricity, but molten sodium chloride does. [4]",
            "Write the formula of the ionic compound formed between aluminium ions (Al³⁺) and oxide ions (O²⁻). Explain how you determined this formula. [3]"
          ]
        },
        {
          title: "Covalent Bonding — Electron Sharing",
          body: `**Covalent bonding** occurs between **non-metal atoms**. Instead of transferring electrons, atoms **share** pairs of electrons. Each shared pair constitutes one covalent bond. Both atoms are attracted to the shared electrons, holding them together.

## Why Sharing Achieves Stability
Each atom achieves a full outer shell (usually 8 electrons — the octet rule; hydrogen aims for 2) by counting both its own electrons AND the shared pair. For example, in H₂O: oxygen has 6 outer electrons + 2 from each shared pair = 8 total; each hydrogen has 1 + 1 shared = 2 (full for shell 1).

## Key Covalent Molecules — Dot-and-Cross Diagrams

**Water (H₂O):** Oxygen (2,6) makes two single bonds with two hydrogen atoms (each has 1 electron). After bonding: O has 8 outer electrons (including the 2 lone pairs); each H has 2.

**Ammonia (NH₃):** Nitrogen (2,5) makes three single bonds with three H atoms. N has 8 (3 bonding pairs + 1 lone pair); each H has 2.

**Methane (CH₄):** Carbon (2,4) makes four single bonds with four H atoms. C has 8; each H has 2.

**Oxygen (O₂):** Each O (2,6) contributes 2 electrons to form a **double bond** (two shared pairs). Each O achieves 8 outer electrons.

**Nitrogen (N₂):** Each N (2,5) contributes 3 electrons → **triple bond** (three shared pairs). Each N achieves 8. This triple bond is very strong (bond energy = 945 kJ/mol) — explains why N₂ is unreactive.

**Carbon dioxide (CO₂):** C (2,4) forms two double bonds, one with each O (2,6). Each O achieves 8; C achieves 8.

## Simple Molecular Covalent Compounds — Properties

Simple molecular compounds consist of small discrete molecules with strong covalent bonds **within** each molecule, but only **weak intermolecular forces** (van der Waals forces) **between** molecules.

| Property | Simple molecular compound | Reason |
|---------|--------------------------|--------|
| **Low melting/boiling points** | Only weak intermolecular forces between molecules need breaking — not the strong covalent bonds themselves | H₂O, CO₂, CH₄ |
| **Poor electrical conductors** | No ions or free electrons to carry charge | All simple covalent molecules |
| **Soluble in organic solvents** | Like dissolves like — non-polar molecules dissolve in non-polar solvents | Iodine in hexane |

> **Critical examiner point:** When a simple molecular compound melts or boils, the **covalent bonds within molecules are NOT broken** — only the weak intermolecular forces between molecules are overcome. This is why the melting points are low despite the covalent bonds being strong.

## Giant Covalent (Atomic) Structures

Some substances form **giant covalent lattices** where every atom is bonded to many others by strong covalent bonds throughout the entire structure:

| Structure | Bonding | Properties | Use |
|---------|---------|-----------|-----|
| **Diamond** | Each C bonded to 4 others (tetrahedral) | Extremely hard; very high MP (~3550°C); non-conductor | Cutting tools, jewellery |
| **Graphite** | Each C bonded to 3 others (hexagonal layers); 1 delocalised e⁻ per C | Soft (layers slide); high MP; **conducts electricity** | Lubricant, electrodes, pencils |
| **Silicon dioxide (SiO₂)** | Each Si bonded to 4 O; each O to 2 Si | Very hard; very high MP; non-conductor | Quartz glass, sand |

> **Why graphite conducts electricity:** Each carbon uses only 3 of its 4 outer electrons to form bonds. The 4th electron is **delocalised** — free to move between layers — carrying charge. Diamond has no delocalised electrons → non-conductor.`,
          groups: [],
          recap: [
            "Draw a dot-and-cross diagram for (a) CH₄ and (b) O₂, showing only outer shell electrons. [4]",
            "Explain why simple molecular covalent compounds have low melting points. Explain what happens to the bonds during melting. [4]",
            "Explain why diamond is hard but graphite is soft, even though both are made of carbon atoms. [4]",
            "Explain why graphite conducts electricity but diamond does not. [3]",
            "State the type of structure of sodium chloride and of carbon dioxide. For each, state whether it conducts electricity when solid and explain why. [4]"
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Stoichiometry",
      intro: "Stoichiometry is the quantitative study of the amounts of reactants and products in chemical reactions. The mole concept bridges the gap between the atomic scale (individual particles too small to weigh) and the laboratory scale (grams we can measure). Using mole calculations, we can predict exact masses of products, calculate concentrations of solutions, and determine empirical formulas from experimental data — skills that are tested extensively throughout Cambridge IGCSE Chemistry.",
      subheadings: [
        {
          title: "The Mole, Molar Mass and Avogadro's Constant",
          body: `## The Mole

One **mole** (mol) of any substance contains exactly $6.02 \\times 10^{23}$ particles — **Avogadro's constant** (Nₐ). This number was chosen so that the mass of one mole equals the relative atomic/molecular mass in grams.

- 1 mol of C atoms (Aᵣ = 12) = **12 g**
- 1 mol of H₂O (Mᵣ = 18) = **18 g**
- 1 mol of NaCl (Mᵣ = 58.5) = **58.5 g**
- 1 mol of any substance = $6.02 \\times 10^{23}$ of that substance's formula units

## Molar Mass

**Molar mass (M)** = mass in grams of one mole of a substance (g/mol) = numerically equal to Mᵣ.

$$n = \\frac{m}{M} \\quad \\text{where } n = \\text{moles},\\ m = \\text{mass (g)},\\ M = \\text{molar mass (g/mol)}$$

### Worked Examples

**Example 1:** How many moles are in 36 g of water (H₂O)?
- M(H₂O) = 2(1) + 16 = 18 g/mol
- n = 36/18 = **2 mol**

**Example 2:** What mass of CO₂ is produced from 2 mol?
- M(CO₂) = 12 + 2(16) = 44 g/mol
- m = 2 × 44 = **88 g**

**Example 3:** How many molecules are in 0.5 mol of N₂?
- Number = 0.5 × 6.02 × 10²³ = **3.01 × 10²³ molecules**

## Molar Volume of Gases

At **room temperature and pressure (rtp)**: 25°C, 101 kPa — one mole of **any gas** occupies **24 dm³** (24,000 cm³).

$$n = \\frac{V(\\text{dm}^3)}{24} \\quad \\text{or} \\quad n = \\frac{V(\\text{cm}^3)}{24000}$$

**Example:** What volume does 4 g of oxygen gas occupy at rtp?
- M(O₂) = 32 g/mol; n = 4/32 = 0.125 mol
- V = 0.125 × 24 = **3.0 dm³**`,
          groups: [],
          recap: [
            "Calculate the number of moles in 22 g of carbon dioxide (CO₂). Show your working. [2]",
            "Calculate the mass of aluminium oxide (Al₂O₃) that contains 0.3 mol. [2]",
            "What volume does 8 g of methane (CH₄) occupy at room temperature and pressure? (Molar volume = 24 dm³/mol) [3]",
            "Calculate the number of molecules in 9 g of water. (Nₐ = 6.02 × 10²³) [3]"
          ]
        },
        {
          title: "Reacting Masses, Percentage Yield and Concentration",
          body: `## Using Balanced Equations for Reacting Mass Calculations

The **mole ratio** in a balanced equation gives the exact ratio in which substances react and are produced.

### Method — 4 Steps:
1. Write the **balanced equation**
2. Write the **mole ratio** under each substance you're working with
3. Convert given mass to **moles** (n = m/M)
4. Use the mole ratio to find moles of the unknown, then convert to **mass** (m = n × M)

### Worked Example
**How much iron(III) oxide (Fe₂O₃) is produced when 56 g of iron reacts completely with oxygen?**

$$4Fe + 3O_2 \\rightarrow 2Fe_2O_3$$

- Mole ratio: 4 mol Fe : 2 mol Fe₂O₃
- M(Fe) = 56; n(Fe) = 56/56 = **1 mol**
- From ratio: 4 mol Fe → 2 mol Fe₂O₃, so 1 mol Fe → 0.5 mol Fe₂O₃
- M(Fe₂O₃) = 2(56) + 3(16) = 160; m = 0.5 × 160 = **80 g**

## Percentage Yield

In practice, reactions rarely produce the theoretical maximum amount of product due to: incomplete reaction, side reactions, product loss during separation/purification, reversible reactions.

$$\\% \\text{ yield} = \\frac{\\text{actual yield (g)}}{\\text{theoretical yield (g)}} \\times 100$$

**Example:** 80 g of Fe₂O₃ is theoretically possible but only 60 g is obtained.
$$\\% \\text{ yield} = \\frac{60}{80} \\times 100 = 75\\%$$

## Concentration of Solutions

**Concentration** = amount of solute per unit volume of solution.

$$c = \\frac{n}{V} \\quad \\text{where } c = \\text{mol/dm}^3,\\ n = \\text{moles},\\ V = \\text{volume in dm}^3$$

> Convert cm³ to dm³: divide by 1000 (e.g. 250 cm³ = 0.25 dm³)

**Example:** Calculate the concentration of NaOH if 4 g is dissolved in 500 cm³ of solution.
- M(NaOH) = 23 + 16 + 1 = 40 g/mol
- n = 4/40 = 0.1 mol
- V = 500/1000 = 0.5 dm³
- c = 0.1/0.5 = **0.2 mol/dm³**

## Empirical and Molecular Formula

**Empirical formula:** The simplest whole-number ratio of atoms in a compound.

**Molecular formula:** The actual number of atoms of each element in one molecule.

### Finding Empirical Formula from % Composition
**Example:** A compound contains 40% C, 6.7% H, 53.3% O by mass.

| Element | % | ÷ Aᵣ | ÷ smallest |
|---------|---|------|-----------|
| C | 40 | 40/12 = 3.33 | 3.33/3.33 = 1 |
| H | 6.7 | 6.7/1 = 6.7 | 6.7/3.33 = 2 |
| O | 53.3 | 53.3/16 = 3.33 | 3.33/3.33 = 1 |

Empirical formula = **CH₂O** (glucose has molecular formula C₆H₁₂O₆ = 6 × CH₂O)`,
          groups: [],
          recap: [
            "In the reaction 2Mg + O₂ → 2MgO, calculate the mass of magnesium oxide produced when 4.8 g of magnesium reacts completely. [3]",
            "A reaction has a theoretical yield of 25 g but produces only 18 g of product. Calculate the percentage yield. [2]",
            "Calculate the concentration (in mol/dm³) of a solution made by dissolving 5.85 g of NaCl in 500 cm³ of water. (M(NaCl) = 58.5) [3]",
            "A compound contains 52.2% C, 13.0% H, and 34.8% O by mass. Determine its empirical formula. [4]"
          ]
        },
        {
          title: "Titration Calculations",
          body: `A **titration** is a technique used to find the concentration of an unknown solution by reacting it with a standard solution (known concentration). The equivalence point (end point) is when the reaction is exactly complete — detected using an indicator.

## Procedure (acid-base titration)

1. Fill burette with NaOH (standard solution of known concentration)
2. Pipette exactly 25.0 cm³ of HCl (unknown concentration) into a conical flask
3. Add 2–3 drops of indicator (phenolphthalein for strong base into acid: colourless → pink; methyl orange for strong acid into alkali: yellow → red/orange)
4. Add NaOH slowly from burette, swirling constantly
5. At the **end point** (permanent colour change), record the titre (volume of NaOH used)
6. Repeat until **concordant titres** (two results within 0.10 cm³ of each other) — average these

## Titration Calculation — Worked Example

**25.0 cm³ of HCl requires 20.0 cm³ of 0.10 mol/dm³ NaOH to neutralise it. Find the concentration of HCl.**

Equation: HCl + NaOH → NaCl + H₂O (1:1 mole ratio)

**Step 1:** n(NaOH) = c × V = 0.10 × (20.0/1000) = **0.0020 mol**

**Step 2:** From 1:1 ratio: n(HCl) = 0.0020 mol

**Step 3:** c(HCl) = n/V = 0.0020 / (25.0/1000) = **0.080 mol/dm³**

## Another Example — 2:1 Ratio

**25.0 cm³ of H₂SO₄ is neutralised by 30.0 cm³ of 0.200 mol/dm³ NaOH. Find concentration of H₂SO₄.**

Equation: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O (ratio 1:2)

**Step 1:** n(NaOH) = 0.200 × (30.0/1000) = **0.00600 mol**

**Step 2:** n(H₂SO₄) = 0.00600/2 = **0.00300 mol** (half because ratio is 1:2)

**Step 3:** c(H₂SO₄) = 0.00300/(25.0/1000) = **0.120 mol/dm³**`,
          groups: [],
          recap: [
            "25.0 cm³ of NaOH requires 18.5 cm³ of 0.15 mol/dm³ HCl for neutralisation. Calculate the concentration of the NaOH. Show all steps. [4]",
            "Explain why concordant titres are required in a titration. [2]",
            "State the colour change of methyl orange at the end point when titrating sodium hydroxide into hydrochloric acid. [2]",
            "Explain why the burette is rinsed with the solution to be placed in it before filling. [2]"
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Electrochemistry",
      intro: "Electrochemistry studies the relationship between electricity and chemical change. Electrolysis uses electrical energy to drive non-spontaneous chemical reactions — decomposing ionic compounds into their elements. It is the method used industrially to extract aluminium, purify copper, electroplate metals, and manufacture chlorine and sodium hydroxide. Understanding which ions are discharged at each electrode and why is central to this chapter.",
      subheadings: [
        {
          title: "Electrolysis — Principles and Half-Equations",
          body: `**Electrolysis** is the decomposition of an ionic compound (electrolyte), either molten or dissolved in water, by the passage of a direct electric current.

## Key Terms

- **Electrolyte:** An ionic compound that conducts electricity when molten or in aqueous solution, because its ions are free to move and carry charge
- **Cathode:** Negative electrode — attracts **cations** (positive ions), which gain electrons here (**reduction**: OILRIG)
- **Anode:** Positive electrode — attracts **anions** (negative ions), which lose electrons here (**oxidation**)

> Memory aid: **REDCAT/ANOX** — REDuction at CAThode; ANOde = OXidation

:::svg[Electrolysis Cell — Movement of Ions and Electrode Reactions]
<svg viewBox="0 0 480 220" width="480" height="220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="480" height="220" fill="#f8fafc" rx="12"/>
  <text x="240" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Electrolysis Cell — Ion Movement and Electrode Reactions</text>
  <!-- Electrolyte container -->
  <rect x="80" y="60" width="320" height="130" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="240" y="115" text-anchor="middle" font-size="11" fill="#1e40af">Electrolyte (ions free to move)</text>
  <!-- Cathode (left, negative) -->
  <rect x="110" y="40" width="20" height="100" rx="4" fill="#334155"/>
  <text x="120" y="35" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">Cathode (−)</text>
  <text x="120" y="155" text-anchor="middle" font-size="9" fill="#1d4ed8">Reduction:</text>
  <text x="120" y="167" text-anchor="middle" font-size="9" fill="#1d4ed8">cations gain e⁻</text>
  <!-- Anode (right, positive) -->
  <rect x="350" y="40" width="20" height="100" rx="4" fill="#7c3aed"/>
  <text x="360" y="35" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">Anode (+)</text>
  <text x="360" y="155" text-anchor="middle" font-size="9" fill="#7c3aed">Oxidation:</text>
  <text x="360" y="167" text-anchor="middle" font-size="9" fill="#7c3aed">anions lose e⁻</text>
  <!-- Cation arrows (blue, moving left toward cathode) -->
  <circle cx="280" cy="100" r="12" fill="#ef4444" opacity="0.8"/>
  <text x="280" y="104" text-anchor="middle" font-size="9" fill="white" font-weight="700">M⁺</text>
  <path d="M265 100 L148 100" stroke="#ef4444" stroke-width="2" fill="none"/>
  <polygon points="148,96 138,100 148,104" fill="#ef4444"/>
  <text x="200" y="88" font-size="9" fill="#dc2626">cations move to cathode →</text>
  <!-- Anion arrows (moving right toward anode) -->
  <circle cx="200" cy="130" r="12" fill="#22c55e" opacity="0.8"/>
  <text x="200" y="134" text-anchor="middle" font-size="9" fill="white" font-weight="700">X⁻</text>
  <path d="M215 130 L338 130" stroke="#22c55e" stroke-width="2" fill="none"/>
  <polygon points="338,126 348,130 338,134" fill="#22c55e"/>
  <text x="275" y="148" font-size="9" fill="#15803d">← anions move to anode</text>
  <!-- External circuit -->
  <line x1="120" y1="40" x2="120" y2="15" stroke="#334155" stroke-width="2"/>
  <line x1="120" y1="15" x2="360" y2="15" stroke="#334155" stroke-width="2"/>
  <line x1="360" y1="15" x2="360" y2="40" stroke="#334155" stroke-width="2"/>
  <rect x="200" y="5" width="80" height="20" rx="4" fill="#f1f5f9" stroke="#94a3b8"/>
  <text x="240" y="18" text-anchor="middle" font-size="9" fill="#334155">DC Power Supply</text>
  <!-- Electron flow arrows -->
  <path d="M130 15 L115 15" stroke="#1d4ed8" stroke-width="1.5" fill="none"/>
  <polygon points="115,11 105,15 115,19" fill="#1d4ed8"/>
  <text x="150" y="12" font-size="8" fill="#1d4ed8">e⁻ flow</text>
</svg>
:::

## Half-Equations

Half-equations show what happens at each electrode. They must be balanced for both atoms and charge.

**At cathode (reduction — gain of electrons):**
- Cu²⁺ + 2e⁻ → Cu (copper deposited from copper sulfate solution)
- 2H⁺ + 2e⁻ → H₂ (hydrogen gas from dilute acid or water)
- Na⁺ + e⁻ → Na (sodium from molten NaCl)
- Al³⁺ + 3e⁻ → Al (aluminium from molten Al₂O₃)

**At anode (oxidation — loss of electrons):**
- 2Cl⁻ → Cl₂ + 2e⁻ (chlorine from concentrated chloride solution)
- 4OH⁻ → 2H₂O + O₂ + 4e⁻ (oxygen from dilute solution or pure water)
- 2O²⁻ → O₂ + 4e⁻ (oxygen from molten oxide)
- Cu → Cu²⁺ + 2e⁻ (copper anode dissolves — in copper refining)

## Discharge Order in Aqueous Solutions

In aqueous solutions, both the solute ions AND H⁺/OH⁻ from water are present. The question is which gets discharged:

**At cathode:** The **less reactive** metal ion is preferentially discharged. If a metal is above hydrogen in the reactivity series (Na, Mg, Al etc.), H⁺ is discharged instead; if below (Cu, Ag, Au), the metal ion is discharged.

**At anode (inert electrode):**
- **Concentrated** halide solution → halogen gas discharged (Cl₂ from concentrated HCl/NaCl)
- **Dilute** solution or no halide → OH⁻ discharged → O₂ produced`,
          groups: [
            {
              subTitle: "Electrolysis of key solutions — products summary",
              bullets: [
                "**Dilute H₂SO₄ (inert electrodes):** Cathode: H₂ (2H⁺ + 2e⁻ → H₂); Anode: O₂ (4OH⁻ → O₂ + 2H₂O + 4e⁻). Ratio: H₂ : O₂ = 2:1 (by volume). The acid becomes more concentrated as water is used up.",
                "**NaCl(aq) concentrated — chlor-alkali process:** Cathode: H₂ gas; Anode: Cl₂ gas; Solution becomes NaOH. Products are of enormous industrial importance: Cl₂ → PVC, bleach; H₂ → ammonia production; NaOH → soap, paper.",
                "**CuSO₄(aq) with inert electrodes:** Cathode: Cu deposited (Cu²⁺ + 2e⁻ → Cu) — blue colour of solution fades; Anode: O₂ produced (not SO₄²⁻ ions). Used to demonstrate electroplating principle.",
                "**CuSO₄(aq) with copper electrodes (copper refining):** Cathode: Pure Cu deposits; Anode: Impure Cu dissolves (Cu → Cu²⁺ + 2e⁻). CuSO₄ concentration stays constant. Impurities (Zn, Fe, Ni) dissolve but do not deposit; precious metals (Au, Ag) do not dissolve and collect below the anode."
              ]
            }
          ],
          recap: [
            "Explain what happens at each electrode during the electrolysis of molten lead bromide. Write half-equations for each electrode reaction. [5]",
            "During electrolysis of concentrated sodium chloride solution, predict the products at each electrode and write ionic half-equations. [4]",
            "Explain why copper deposits at the cathode during electrolysis of copper sulfate solution, rather than hydrogen gas. [3]",
            "Describe how electrolysis is used to purify copper. Include what happens at each electrode and why the CuSO₄ concentration stays constant. [5]"
          ]
        },
        {
          title: "Industrial Electrolysis — Aluminium Extraction and Electroplating",
          body: `## Extraction of Aluminium by Electrolysis

Aluminium is the most abundant metal in the Earth's crust but is too reactive to be extracted by reduction with carbon. It is extracted by **electrolysis of molten aluminium oxide (Al₂O₃)**, dissolved in molten cryolite (Na₃AlF₆) to lower the melting point from ~2050°C to ~950°C (saving enormous energy costs).

**The Hall–Héroult Process:**
- **Electrolyte:** Al₂O₃ dissolved in molten cryolite
- **Cathode (negative, steel):** Al³⁺ + 3e⁻ → Al (liquid aluminium sinks to bottom, tapped off)
- **Anode (positive, carbon):** 2O²⁻ → O₂ + 4e⁻ (oxygen gas produced)
- **Problem:** Carbon anodes burn in hot O₂: C + O₂ → CO₂ — anodes must be replaced regularly (a major cost)
- **Why aluminium is expensive:** Huge electrical energy cost; anode replacement; cryolite bath maintenance

## Electroplating

**Electroplating** coats an object (the cathode) with a thin layer of metal to:
- Improve appearance (silver-plating cutlery, gold-plating jewellery)
- Prevent corrosion (nickel-plating, zinc-plating = galvanising)
- Reduce wear (chrome-plating car parts)
- Reduce cost (thin layer of expensive metal on cheap base metal)

**Setup for silver-plating a copper spoon:**
- **Cathode:** The copper spoon (object to be plated)
- **Anode:** A bar of silver (source of Ag⁺ ions)
- **Electrolyte:** Silver nitrate solution (AgNO₃)
- At cathode: Ag⁺ + e⁻ → Ag (silver deposits on spoon)
- At anode: Ag → Ag⁺ + e⁻ (silver anode dissolves, replenishing Ag⁺ in solution)
- The Ag⁺ concentration in solution stays constant — the anode dissolves at the same rate as silver deposits`,
          groups: [],
          recap: [
            "Explain why cryolite is added to aluminium oxide in the extraction of aluminium by electrolysis. [2]",
            "Why must the carbon anodes in the aluminium extraction process be replaced regularly? Write the equation for the reaction that destroys them. [3]",
            "Describe how you would electroplate an iron key with nickel. State the cathode, anode, and electrolyte, and write the half-equation at the cathode. [4]",
            "State two reasons why objects might be electroplated with a metal. [2]"
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Chemical Energetics",
      intro: "Every chemical reaction involves an energy change. Exothermic reactions release energy to the surroundings, raising temperature; endothermic reactions absorb energy, lowering temperature. The enthalpy change (ΔH) quantifies this energy at constant pressure. Understanding energy profiles, bond energies, and Hess's Law allows chemists to predict and calculate energy changes for reactions they have never directly measured — a critical skill in designing energy-efficient industrial processes.",
      subheadings: [
        {
          title: "Exothermic and Endothermic Reactions",
          body: `## Definitions

- **Exothermic reaction:** Releases energy (usually as heat) to the surroundings. The products have **less energy** than the reactants. Temperature of surroundings **rises**. ΔH is **negative**.
- **Endothermic reaction:** Absorbs energy from the surroundings. The products have **more energy** than the reactants. Temperature of surroundings **falls**. ΔH is **positive**.

## Common Examples

| Exothermic | Endothermic |
|-----------|------------|
| Combustion of fuels (CH₄ + 2O₂ → CO₂ + 2H₂O) | Thermal decomposition (CaCO₃ → CaO + CO₂) |
| Neutralisation (H⁺ + OH⁻ → H₂O) | Dissolving ammonium nitrate in water |
| Oxidation reactions (rusting) | Photosynthesis (overall) |
| Displacement reactions (Zn + CuSO₄) | Electrolysis |
| Respiration | Cracking of hydrocarbons |

## Energy Profile Diagrams

An energy profile (reaction coordinate diagram) shows how energy changes as reactants convert to products:

:::svg[Energy Profile Diagrams — Exothermic and Endothermic Reactions]
<svg viewBox="0 0 520 210" width="520" height="210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="520" height="210" fill="#f8fafc" rx="12"/>
  <text x="260" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Energy Profile Diagrams</text>
  <!-- EXOTHERMIC (left) -->
  <text x="130" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">Exothermic (ΔH negative)</text>
  <line x1="30" y1="185" x2="240" y2="185" stroke="#334155" stroke-width="1.5"/>
  <line x1="30" y1="40" x2="30" y2="185" stroke="#334155" stroke-width="1.5"/>
  <text x="18" y="115" text-anchor="middle" font-size="9" fill="#475569" transform="rotate(-90,18,115)">Energy →</text>
  <text x="135" y="198" text-anchor="middle" font-size="9" fill="#475569">Reaction progress →</text>
  <!-- Reactants level (high) -->
  <line x1="35" y1="100" x2="65" y2="100" stroke="#3b82f6" stroke-width="2"/>
  <text x="52" y="92" text-anchor="middle" font-size="8.5" fill="#1d4ed8">Reactants</text>
  <!-- Activation energy peak -->
  <path d="M65,100 Q105,52 130,52 Q155,52 170,130" stroke="#334155" stroke-width="2.5" fill="none"/>
  <!-- Products level (lower) -->
  <line x1="170" y1="130" x2="230" y2="130" stroke="#22c55e" stroke-width="2"/>
  <text x="200" y="145" text-anchor="middle" font-size="8.5" fill="#15803d">Products</text>
  <!-- Ea arrow -->
  <line x1="140" y1="52" x2="140" y2="100" stroke="#f97316" stroke-width="1.5" stroke-dasharray="3,2"/>
  <polygon points="140,100 136,90 144,90" fill="#f97316"/>
  <text x="155" y="75" text-anchor="start" font-size="8.5" fill="#ea580c">Ea</text>
  <!-- ΔH arrow -->
  <line x1="195" y1="100" x2="195" y2="130" stroke="#dc2626" stroke-width="2"/>
  <polygon points="195,130 191,120 199,120" fill="#dc2626"/>
  <text x="200" y="118" text-anchor="start" font-size="9" fill="#dc2626" font-weight="600">ΔH (−)</text>
  <!-- ENDOTHERMIC (right) -->
  <text x="390" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">Endothermic (ΔH positive)</text>
  <line x1="280" y1="185" x2="500" y2="185" stroke="#334155" stroke-width="1.5"/>
  <line x1="280" y1="40" x2="280" y2="185" stroke="#334155" stroke-width="1.5"/>
  <text x="390" y="198" text-anchor="middle" font-size="9" fill="#475569">Reaction progress →</text>
  <!-- Reactants level (lower) -->
  <line x1="285" y1="140" x2="320" y2="140" stroke="#3b82f6" stroke-width="2"/>
  <text x="303" y="155" text-anchor="middle" font-size="8.5" fill="#1d4ed8">Reactants</text>
  <!-- Activation energy peak -->
  <path d="M320,140 Q360,65 385,65 Q408,65 420,100" stroke="#334155" stroke-width="2.5" fill="none"/>
  <!-- Products level (higher) -->
  <line x1="420" y1="100" x2="490" y2="100" stroke="#22c55e" stroke-width="2"/>
  <text x="455" y="92" text-anchor="middle" font-size="8.5" fill="#15803d">Products</text>
  <!-- Ea arrow -->
  <line x1="385" y1="65" x2="385" y2="140" stroke="#f97316" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="390" y="102" text-anchor="start" font-size="8.5" fill="#ea580c">Ea</text>
  <!-- ΔH arrow -->
  <line x1="455" y1="140" x2="455" y2="100" stroke="#7c3aed" stroke-width="2"/>
  <polygon points="455,100 451,110 459,110" fill="#7c3aed"/>
  <text x="460" y="122" text-anchor="start" font-size="9" fill="#7c3aed" font-weight="600">ΔH (+)</text>
</svg>
:::

**Activation energy (Eₐ):** The minimum energy that colliding particles must have for a reaction to occur — the energy needed to break bonds in the reactants and start the reaction. A catalyst lowers the activation energy by providing an alternative reaction pathway, so more collisions are successful at the same temperature.

## Bond Energy Calculations

All chemical reactions involve:
1. **Bond breaking** in reactants — always **endothermic** (energy IN)
2. **Bond forming** in products — always **exothermic** (energy OUT)

$$\\Delta H = \\text{Energy in (bonds broken)} - \\text{Energy out (bonds formed)}$$

- If energy out > energy in: ΔH is **negative** → **exothermic**
- If energy in > energy out: ΔH is **positive** → **endothermic**

### Worked Example — Combustion of Hydrogen: H₂ + ½O₂ → H₂O

Bond energies (kJ/mol): H–H = 436; O=O = 498; O–H = 464

**Bonds broken:** 1 × H–H (436) + ½ × O=O (½ × 498 = 249) = **685 kJ** (energy in)

**Bonds formed:** 2 × O–H in H₂O (2 × 464 = 928) = **928 kJ** (energy out)

$$\\Delta H = 685 - 928 = -243 \\text{ kJ/mol}$$

Negative → **exothermic** ✓ (combustion always releases energy)

### Worked Example — Combustion of Methane: CH₄ + 2O₂ → CO₂ + 2H₂O

Bond energies: C–H = 413; O=O = 498; C=O = 805; O–H = 464

**Bonds broken:** 4(C–H) + 2(O=O) = 4(413) + 2(498) = 1652 + 996 = **2648 kJ**

**Bonds formed:** 2(C=O) in CO₂ + 4(O–H) in 2H₂O = 2(805) + 4(464) = 1610 + 1856 = **3466 kJ**

$$\\Delta H = 2648 - 3466 = -818 \\text{ kJ/mol}$$`,
          groups: [],
          recap: [
            "State the difference between an exothermic and an endothermic reaction in terms of energy change and sign of ΔH. [3]",
            "Draw and label an energy profile diagram for an exothermic reaction. Include reactants, products, activation energy, and ΔH. [4]",
            "Using bond energies, calculate ΔH for: N₂ + 3H₂ → 2NH₃. Bond energies (kJ/mol): N≡N = 945, H–H = 436, N–H = 391. State whether the reaction is exothermic or endothermic. [5]",
            "Explain how a catalyst increases the rate of a reaction using the concept of activation energy. [3]"
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Chemical Reactions",
      intro: "Chemical reactions involve the breaking and forming of chemical bonds, converting reactants into products with different properties. This chapter covers how to recognise and classify reaction types, how to measure and explain rates of reaction using collision theory, and how reversible reactions reach dynamic equilibrium. Understanding these principles underpins everything from industrial synthesis to biological metabolism.",
      subheadings: [
        {
          title: "Types of Chemical Reactions",
          body: `## Redox Reactions

**Redox** = simultaneous oxidation AND reduction. They always occur together.

**In terms of electron transfer (most fundamental definition):**
- **Oxidation** = loss of electrons (OIL — Oxidation Is Loss)
- **Reduction** = gain of electrons (RIG — Reduction Is Gain)
- Together: **OILRIG**

**In terms of oxygen:**
- Oxidation = gain of oxygen; Reduction = loss of oxygen

**In terms of hydrogen:**
- Oxidation = loss of hydrogen; Reduction = gain of hydrogen

**In terms of oxidation state:**
- Oxidation = increase in oxidation state; Reduction = decrease in oxidation state

**Oxidising agent:** Causes oxidation of another substance; is itself **reduced** (gains electrons)
**Reducing agent:** Causes reduction of another substance; is itself **oxidised** (loses electrons)

### Displacement Reactions — a Type of Redox
A more reactive metal displaces a less reactive metal ion from solution:

$$Zn(s) + CuSO_4(aq) \\rightarrow ZnSO_4(aq) + Cu(s)$$

- Zn is **oxidised**: Zn → Zn²⁺ + 2e⁻ (loses electrons — reducing agent)
- Cu²⁺ is **reduced**: Cu²⁺ + 2e⁻ → Cu (gains electrons — oxidising agent)

## Oxidation States

Oxidation states (oxidation numbers) track electron changes in reactions.

**Rules:**
1. Uncombined element = 0 (e.g. Fe, O₂, Cl₂ all = 0)
2. Simple ion = its charge (Na⁺ = +1; Cl⁻ = −1; Fe³⁺ = +3)
3. O in compounds = −2 (except peroxides: −1)
4. H in compounds = +1 (except metal hydrides: −1)
5. Sum of oxidation states in neutral compound = 0
6. Sum in polyatomic ion = charge on ion

**Example — find oxidation state of Mn in KMnO₄:**
K = +1; O = −2 × 4 = −8; Sum must = 0: +1 + Mn + (−8) = 0 → Mn = **+7**

**Example — find oxidation state of Cr in Cr₂O₇²⁻:**
O = −2 × 7 = −14; Sum = −2: 2Cr + (−14) = −2 → 2Cr = +12 → Cr = **+6**

## Other Reaction Types

| Reaction type | Definition | Example |
|-------------|-----------|---------|
| **Thermal decomposition** | Single compound splits into simpler substances on heating | CaCO₃ → CaO + CO₂ |
| **Precipitation** | Two solutions react to form an insoluble solid (precipitate) | Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃ |
| **Neutralisation** | Acid reacts with base to form salt + water | HCl + NaOH → NaCl + H₂O |
| **Combustion** | Substance reacts with oxygen, releasing energy | C₃H₈ + 5O₂ → 3CO₂ + 4H₂O |`,
          groups: [],
          recap: [
            "In the reaction: Fe₂O₃ + 3CO → 2Fe + 3CO₂, identify which species is oxidised and which is reduced. Explain your answer using oxidation states. [4]",
            "Define the terms oxidising agent and reducing agent. In the reaction above, identify the oxidising agent and reducing agent. [4]",
            "Determine the oxidation state of sulfur in (a) SO₂ and (b) SO₄²⁻. [4]",
            "Explain why the reaction between zinc and copper sulfate solution is classified as a redox reaction. Write ionic half-equations. [4]"
          ]
        },
        {
          title: "Rates of Reaction and Collision Theory",
          body: `## Collision Theory

For a reaction to occur, particles must:
1. **Collide** with each other
2. Collide with **sufficient energy** (≥ activation energy)
3. Collide with the **correct orientation**

The **rate of reaction** = number of successful collisions per unit time.

**Anything that increases the frequency OR energy of successful collisions increases the rate.**

## Factors Affecting Rate of Reaction

### 1. Temperature
Higher temperature → particles have more **kinetic energy** → move faster → collide **more frequently** AND more particles have energy ≥ Eₐ → rate increases significantly. A 10°C rise approximately **doubles** the rate for many reactions (because the proportion of particles with energy ≥ Eₐ roughly doubles).

### 2. Concentration (solutions) / Pressure (gases)
Higher concentration → more particles per unit volume → collisions are **more frequent** → rate increases. Increasing pressure on a gas has the same effect (compresses same number of particles into smaller volume → higher concentration).

### 3. Surface Area
Grinding a solid into powder → exposes more surface particles → more particles available for collision → rate increases. The **total amount** of reactant hasn't changed — only the surface exposed to the other reactant.

### 4. Catalyst
Provides an **alternative reaction pathway** with a **lower activation energy**. More particles now have sufficient energy to react → rate increases without changing temperature or concentration. The catalyst is **not consumed** and does not change the products or the overall ΔH.

:::svg[Maxwell-Boltzmann Distribution — Effect of Temperature and Catalyst]
<svg viewBox="0 0 500 200" width="500" height="200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="500" height="200" fill="#f8fafc" rx="12"/>
  <text x="250" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Energy Distribution of Particles — Effect of Temperature</text>
  <line x1="40" y1="170" x2="480" y2="170" stroke="#334155" stroke-width="2"/>
  <line x1="40" y1="20" x2="40" y2="170" stroke="#334155" stroke-width="2"/>
  <text x="260" y="188" text-anchor="middle" font-size="10" fill="#475569">Kinetic energy →</text>
  <text x="16" y="98" text-anchor="middle" font-size="10" fill="#475569" transform="rotate(-90,16,98)">Number of particles →</text>
  <!-- Curve at T1 (lower temp) — taller, narrower, peak left -->
  <path d="M45,168 Q80,100 130,55 Q175,25 200,22 Q230,25 260,55 Q310,110 370,155 Q420,168 480,170"
    stroke="#3b82f6" stroke-width="2.5" fill="none"/>
  <text x="200" y="18" font-size="9" fill="#1d4ed8">Lower T (T₁)</text>
  <!-- Curve at T2 (higher temp) — flatter, broader, peak right -->
  <path d="M45,168 Q90,130 150,95 Q205,65 240,58 Q280,55 320,70 Q380,110 440,150 Q465,163 480,168"
    stroke="#ef4444" stroke-width="2.5" fill="none"/>
  <text x="305" y="52" font-size="9" fill="#dc2626">Higher T (T₂)</text>
  <!-- Activation energy line -->
  <line x1="330" y1="20" x2="330" y2="170" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="335" y="35" font-size="9" fill="#7c3aed" font-weight="600">Eₐ</text>
  <!-- Catalyst lower Ea line -->
  <line x1="270" y1="20" x2="270" y2="170" stroke="#22c55e" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="245" y="35" font-size="9" fill="#15803d" font-weight="600">Eₐ (cat)</text>
  <!-- Shaded area T1 beyond Ea -->
  <text x="370" y="140" font-size="8.5" fill="#1d4ed8">Area = particles</text>
  <text x="370" y="152" font-size="8.5" fill="#1d4ed8">with E ≥ Eₐ at T₁</text>
  <text x="370" y="168" font-size="8.5" fill="#dc2626">(larger area at T₂)</text>
</svg>
:::

## Measuring Rates of Reaction — Practical Methods

**Method 1 — Gas volume collection:**
Reaction: Marble chips + HCl → CO₂ gas
Collect gas in a syringe or over water. Measure volume at regular intervals. Plot volume vs time. Initial gradient = initial rate.

**Method 2 — Mass loss:**
Place flask with CaCO₃ + HCl on balance. Record mass every 30 seconds as CO₂ escapes. Gradient of mass-loss vs time = rate.

**Method 3 — Colour change / disappearing cross:**
Na₂S₂O₃ + 2HCl → S + SO₂ + 2NaCl + H₂O
Sulfur precipitate makes solution opaque. Time until cross drawn under flask disappears. Rate ∝ 1/time.

**Method 4 — Colorimetry:**
Measure change in absorbance of coloured solution with time. Accurate and continuous.`,
          groups: [
            {
              subTitle: "Interpreting rate graphs correctly",
              bullets: [
                "**Steeper initial gradient = faster rate.** Compare steepness of curves at t=0. Never compare final amounts — if limiting reagent is the same, all curves end at the same total volume/mass.",
                "**Same final volume/mass at all conditions** (if same amount of limiting reagent): Only the RATE changes, not the total amount of product. A steeper curve reaches the same endpoint faster.",
                "**Curve goes horizontal:** Reaction has stopped — one or both reactants used up (the limiting reagent is exhausted).",
                "**Effect of temperature on rate:** At higher temperature, the curve is steeper initially and reaches the endpoint sooner. At lower temperature, the curve is less steep but still reaches the same endpoint."
              ]
            }
          ],
          recap: [
            "Explain, using collision theory, why increasing the concentration of a reactant in solution increases the rate of reaction. [3]",
            "Explain why increasing temperature has a greater effect on rate than simply increasing collision frequency. [3]",
            "A student reacts marble chips with excess hydrochloric acid at 25°C and measures CO₂ volume every 30 s. Sketch the graph expected. On the same axes, sketch the curve if the temperature is raised to 40°C, using the same mass of chips. [4]",
            "Explain how a catalyst increases the rate of reaction without being used up. [3]"
          ]
        },
        {
          title: "Reversible Reactions and Dynamic Equilibrium",
          body: `Some reactions are **reversible** — the products can react to re-form the reactants. The symbol ⇌ indicates a reversible reaction.

$$A + B \\rightleftharpoons C + D$$

## Dynamic Equilibrium

In a **closed system**, a reversible reaction reaches **dynamic equilibrium** when:
- The **rate of the forward reaction = rate of the reverse reaction**
- The **concentrations of all species remain constant** (but not necessarily equal)
- Both forward and reverse reactions are still occurring simultaneously

> "Dynamic" = both directions still happening; "equilibrium" = no net change in concentrations.

## Le Chatelier's Principle

If a system at equilibrium is subjected to a change (stress), the equilibrium **shifts to oppose that change** and re-establish equilibrium.

### Effect of Concentration
- Increase concentration of reactant → equilibrium shifts **right** (forward) to use up added reactant
- Increase concentration of product → equilibrium shifts **left** (reverse) to remove added product

### Effect of Temperature
- Increase temperature → equilibrium shifts in the **endothermic direction** (absorbs extra heat)
- Decrease temperature → equilibrium shifts in the **exothermic direction** (releases heat)

### Effect of Pressure (gases only)
- Increase pressure → equilibrium shifts toward the side with **fewer moles of gas** (reduces pressure)
- Decrease pressure → shifts to side with **more moles of gas**

### Catalysts and Equilibrium
A catalyst **does not shift the position of equilibrium** — it speeds up both forward and reverse reactions equally, so equilibrium is reached more quickly but the equilibrium concentrations are unchanged.

## Industrial Example — Haber Process (N₂ + 3H₂ ⇌ 2NH₃)

$$N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g) \\quad \\Delta H = -92 \\text{ kJ/mol (exothermic)}$$

| Factor | Effect on yield | Effect on rate | Compromise chosen |
|--------|----------------|----------------|------------------|
| High pressure | ↑ yield (4 mol gas → 2 mol gas) | ↑ rate | 150–200 atm |
| Low temperature | ↑ yield (exothermic: cool → more product) | ↓ rate | 400–450°C |
| Iron catalyst | No effect on yield | ↑ rate | Iron + promoters |
| Removing NH₃ | ↑ yield (shifts right) | — | Liquefied and removed |`,
          groups: [],
          recap: [
            "Explain what is meant by dynamic equilibrium. [3]",
            "For the equilibrium: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)  ΔH = −196 kJ/mol — state and explain the effect on the equilibrium position of: (a) increasing pressure, (b) increasing temperature, (c) adding a catalyst. [6]",
            "In the Haber process, explain why 400–450°C is used rather than a lower temperature, even though lower temperature gives a higher yield. [3]",
            "Explain the effect of removing ammonia from the Haber process on the equilibrium yield. [2]"
          ]
        }
      ]
    },
    {
      number: 7,
      title: "Acids, Bases and Salts",
      intro: "Acids and bases are two of the most important chemical categories, fundamental to industry, biology, and everyday life. Understanding pH, the reactions of acids, and how to prepare pure dry salt samples is essential Cambridge IGCSE content. The properties of acidic, alkaline, and neutral solutions are all explained by the concentrations of H⁺ and OH⁻ ions in solution.",
      subheadings: [
        {
          title: "Acids, Bases and the pH Scale",
          body: `## Definitions

**Arrhenius definition (sufficient for IGCSE):**
- **Acid:** A substance that produces H⁺ ions (protons) in aqueous solution
- **Base:** A substance that neutralises an acid, producing a salt and water only
- **Alkali:** A **soluble base** that produces OH⁻ ions in aqueous solution

**Brønsted–Lowry definition (extension):**
- Acid = proton donor
- Base = proton acceptor

## Strong and Weak Acids/Bases

| | Strong acid | Weak acid |
|-|------------|-----------|
| **Degree of ionisation** | Completely ionised in solution | Partially ionised (equilibrium) |
| **pH (same concentration)** | Lower (more H⁺) | Higher (fewer H⁺) |
| **Examples** | HCl, H₂SO₄, HNO₃ | CH₃COOH (ethanoic), H₂CO₃ (carbonic), citric acid |

HCl → H⁺ + Cl⁻ (complete — one arrow)
CH₃COOH ⇌ CH₃COO⁻ + H⁺ (partial — reversible arrows, ~1% ionised)

## The pH Scale

:::svg[The pH Scale — 0 to 14 with Examples]
<svg viewBox="0 0 520 130" width="520" height="130" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="520" height="130" fill="#f8fafc" rx="12"/>
  <text x="260" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">The pH Scale</text>
  <!-- Gradient bar -->
  <defs>
    <linearGradient id="phGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#dc2626"/>
      <stop offset="35%" style="stop-color:#f97316"/>
      <stop offset="50%" style="stop-color:#22c55e"/>
      <stop offset="65%" style="stop-color:#3b82f6"/>
      <stop offset="100%" style="stop-color:#7c3aed"/>
    </linearGradient>
  </defs>
  <rect x="20" y="30" width="480" height="35" rx="6" fill="url(#phGrad)"/>
  <!-- pH numbers -->
  <text x="20" y="82" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="700">0</text>
  <text x="56" y="82" text-anchor="middle" font-size="10" fill="#374151">1</text>
  <text x="91" y="82" text-anchor="middle" font-size="10" fill="#374151">2</text>
  <text x="126" y="82" text-anchor="middle" font-size="10" fill="#374151">3</text>
  <text x="162" y="82" text-anchor="middle" font-size="10" fill="#374151">4</text>
  <text x="197" y="82" text-anchor="middle" font-size="10" fill="#374151">5</text>
  <text x="232" y="82" text-anchor="middle" font-size="10" fill="#374151">6</text>
  <text x="260" y="82" text-anchor="middle" font-size="11" fill="#15803d" font-weight="700">7</text>
  <text x="290" y="82" text-anchor="middle" font-size="10" fill="#374151">8</text>
  <text x="325" y="82" text-anchor="middle" font-size="10" fill="#374151">9</text>
  <text x="360" y="82" text-anchor="middle" font-size="10" fill="#374151">10</text>
  <text x="395" y="82" text-anchor="middle" font-size="10" fill="#374151">11</text>
  <text x="430" y="82" text-anchor="middle" font-size="10" fill="#374151">12</text>
  <text x="465" y="82" text-anchor="middle" font-size="10" fill="#374151">13</text>
  <text x="500" y="82" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="700">14</text>
  <!-- Labels -->
  <text x="91" y="98" text-anchor="middle" font-size="8.5" fill="#dc2626">Stomach acid</text>
  <text x="162" y="98" text-anchor="middle" font-size="8.5" fill="#ea580c">Vinegar</text>
  <text x="260" y="98" text-anchor="middle" font-size="8.5" fill="#15803d">Pure water</text>
  <text x="360" y="98" text-anchor="middle" font-size="8.5" fill="#2563eb">Soap</text>
  <text x="465" y="98" text-anchor="middle" font-size="8.5" fill="#7c3aed">Bleach</text>
  <!-- Acid / Neutral / Alkali labels -->
  <text x="120" y="115" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="700">← ACIDIC (pH &lt; 7)</text>
  <text x="260" y="115" text-anchor="middle" font-size="9" fill="#15803d" font-weight="700">NEUTRAL</text>
  <text x="395" y="115" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="700">ALKALINE (pH &gt; 7) →</text>
</svg>
:::

pH is a **logarithmic** scale: each unit change in pH represents a **10-fold** change in H⁺ concentration. pH 1 has 10× more H⁺ than pH 2; 100× more than pH 3.

## Reactions of Acids — Summary

**1. Acid + Metal** (reactive metals only — not Cu, Ag, Au):
$$\\text{acid} + \\text{metal} \\rightarrow \\text{salt} + \\text{hydrogen}$$
$$2HCl + Mg \\rightarrow MgCl_2 + H_2$$
Test for H₂: burning splint → **squeaky pop**

**2. Acid + Metal Oxide (base)**:
$$\\text{acid} + \\text{metal oxide} \\rightarrow \\text{salt} + \\text{water}$$
$$H_2SO_4 + CuO \\rightarrow CuSO_4 + H_2O$$

**3. Acid + Metal Hydroxide (alkali)**:
$$\\text{acid} + \\text{alkali} \\rightarrow \\text{salt} + \\text{water}$$
$$HCl + NaOH \\rightarrow NaCl + H_2O$$
Ionic equation for all strong acid + strong alkali: **H⁺ + OH⁻ → H₂O**

**4. Acid + Carbonate**:
$$\\text{acid} + \\text{carbonate} \\rightarrow \\text{salt} + \\text{water} + \\text{carbon dioxide}$$
$$2HCl + CaCO_3 \\rightarrow CaCl_2 + H_2O + CO_2$$
Test for CO₂: bubble through limewater → **turns milky**

## Naming Salts

| Acid | Salt produced | Example |
|------|-------------|---------|
| Hydrochloric acid (HCl) | Chloride | NaCl (sodium chloride) |
| Sulfuric acid (H₂SO₄) | Sulfate | MgSO₄ (magnesium sulfate) |
| Nitric acid (HNO₃) | Nitrate | Ca(NO₃)₂ (calcium nitrate) |
| Phosphoric acid (H₃PO₄) | Phosphate | Na₃PO₄ (sodium phosphate) |`,
          groups: [],
          recap: [
            "Explain the difference between a strong acid and a weak acid. Give one example of each. [3]",
            "Write a balanced equation for the reaction between dilute sulfuric acid and zinc carbonate. Identify the type of reaction. [3]",
            "The ionic equation for neutralisation of a strong acid by a strong alkali is H⁺ + OH⁻ → H₂O. Explain why this same equation applies to all strong acid-strong alkali reactions. [2]",
            "A solution has pH 3. Another has pH 5. How many times more H⁺ ions does the first solution contain? [1]"
          ]
        },
        {
          title: "Preparation of Salts",
          body: `The method used to prepare a pure dry salt depends on whether the salt is **soluble or insoluble**, and whether the base/metal is **soluble or insoluble** in acid.

## Method 1 — Excess Insoluble Solid (for soluble salts from insoluble base/carbonate)

**Example: Making copper(II) sulfate crystals from copper(II) oxide and dilute sulfuric acid**

1. Warm dilute H₂SO₄ in a beaker
2. Add excess CuO powder (black) and stir — excess ensures all acid is used up
3. Filter to remove unreacted CuO (the filtrate is copper sulfate solution)
4. Evaporate the filtrate until crystals just start to appear
5. Leave to cool slowly → large blue CuSO₄·5H₂O crystals form
6. Filter, blot dry with filter paper

> **Why excess solid?** To ensure all the acid is used up — any acid left would contaminate the salt. The excess solid is simply filtered off.

## Method 2 — Titration (for soluble salts from soluble acid + soluble alkali)

**Example: Making sodium chloride from HCl and NaOH**

1. Fill burette with NaOH; pipette 25.0 cm³ HCl into flask with indicator
2. Titrate to find exact volume of NaOH needed
3. Repeat WITHOUT indicator using the exact volumes — mix clean solutions
4. Evaporate gently to crystallise
5. Filter and dry

> **Why no indicator in the second run?** Indicators are coloured chemicals that would contaminate the colourless salt crystals.

## Method 3 — Precipitation (for insoluble salts)

**Example: Making lead(II) iodide (yellow precipitate)**

$$Pb(NO_3)_2(aq) + 2KI(aq) \\rightarrow PbI_2(s) + 2KNO_3(aq)$$

1. Mix solutions of lead(II) nitrate and potassium iodide
2. Yellow precipitate of PbI₂ forms immediately
3. Filter to collect precipitate
4. Wash with distilled water (removes soluble impurities)
5. Dry in a warm oven

## Solubility Rules (essential to memorise)

| Solubility | Ions |
|-----------|------|
| **All soluble** | Na⁺, K⁺, NH₄⁺ salts; all nitrates (NO₃⁻) |
| **Most soluble** | Chlorides (except AgCl, PbCl₂ — insoluble) |
| **Most soluble** | Sulfates (except BaSO₄, PbSO₄ — insoluble; CaSO₄ — sparingly soluble) |
| **Most insoluble** | Carbonates (except Na₂CO₃, K₂CO₃, (NH₄)₂CO₃) |
| **Most insoluble** | Metal hydroxides (except NaOH, KOH, Ca(OH)₂ — slightly soluble) |`,
          groups: [],
          recap: [
            "Describe the preparation of pure, dry crystals of zinc sulfate starting from zinc carbonate and dilute sulfuric acid. [5]",
            "Explain why excess zinc carbonate is added and how the excess is removed. [2]",
            "Describe how to prepare a pure sample of barium sulfate by precipitation. Write the ionic equation. [4]",
            "State whether each of the following is soluble or insoluble: (a) AgCl, (b) Na₂CO₃, (c) BaSO₄, (d) Pb(NO₃)₂. [4]"
          ]
        }
      ]
    },
    {
      number: 8,
      title: "The Periodic Table",
      intro: "The Periodic Table is chemistry's most powerful organising tool. Elements are arranged in order of increasing atomic number, with elements of similar chemical properties appearing in the same vertical group. This periodic recurrence of properties — explained by recurring patterns in electron configuration — allows chemists to predict the properties of unknown elements and to understand trends across periods and down groups. Groups 1, 7, and 0 and Period 3 are particularly important for Cambridge IGCSE.",
      subheadings: [
        {
          title: "Structure of the Periodic Table and Periodic Trends",
          body: `## Organisation

- **Period:** A horizontal row. Period number = number of electron shells. Elements in the same period have the same number of shells but different numbers of outer electrons.
- **Group:** A vertical column. Group number (1–7, 0) = number of electrons in the outer shell. Elements in the same group have the **same number of outer electrons** → similar chemical properties.

:::svg[Periodic Table Structure — Periods, Groups and Blocks]
<svg viewBox="0 0 520 200" width="520" height="200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="520" height="200" fill="#f8fafc" rx="12"/>
  <text x="260" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Periodic Table — Key Trends</text>
  <!-- Groups header -->
  <text x="60" y="38" text-anchor="middle" font-size="9" fill="#64748b">Gp 1</text>
  <text x="95" y="38" text-anchor="middle" font-size="9" fill="#64748b">Gp 2</text>
  <text x="260" y="38" text-anchor="middle" font-size="9" fill="#64748b">Transition metals</text>
  <text x="385" y="38" text-anchor="middle" font-size="9" fill="#64748b">Gp 3-7</text>
  <text x="495" y="38" text-anchor="middle" font-size="9" fill="#64748b">Gp 0</text>
  <!-- Simplified table grid -->
  <!-- Period 1 -->
  <rect x="40" y="45" width="28" height="22" rx="3" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
  <text x="54" y="60" text-anchor="middle" font-size="9" fill="#dc2626">H</text>
  <rect x="476" y="45" width="28" height="22" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1"/>
  <text x="490" y="60" text-anchor="middle" font-size="9" fill="#0369a1">He</text>
  <!-- Period 2 -->
  <rect x="40" y="70" width="28" height="22" rx="3" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
  <text x="54" y="85" text-anchor="middle" font-size="9" fill="#dc2626">Li</text>
  <rect x="72" y="70" width="28" height="22" rx="3" fill="#fef9c3" stroke="#eab308" stroke-width="1"/>
  <text x="86" y="85" text-anchor="middle" font-size="9" fill="#854d0e">Be</text>
  <rect x="196" y="70" width="28" height="22" rx="3" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
  <text x="210" y="85" text-anchor="middle" font-size="9" fill="#065f46">B</text>
  <rect x="228" y="70" width="28" height="22" rx="3" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
  <text x="242" y="85" text-anchor="middle" font-size="9" fill="#065f46">C</text>
  <rect x="260" y="70" width="28" height="22" rx="3" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
  <text x="274" y="85" text-anchor="middle" font-size="9" fill="#065f46">N</text>
  <rect x="292" y="70" width="28" height="22" rx="3" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
  <text x="306" y="85" text-anchor="middle" font-size="9" fill="#065f46">O</text>
  <rect x="324" y="70" width="28" height="22" rx="3" fill="#ede9fe" stroke="#8b5cf6" stroke-width="1"/>
  <text x="338" y="85" text-anchor="middle" font-size="9" fill="#6d28d9">F</text>
  <rect x="476" y="70" width="28" height="22" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1"/>
  <text x="490" y="85" text-anchor="middle" font-size="9" fill="#0369a1">Ne</text>
  <!-- Period 3 simplified -->
  <rect x="40" y="95" width="28" height="22" rx="3" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
  <text x="54" y="110" text-anchor="middle" font-size="9" fill="#dc2626">Na</text>
  <rect x="72" y="95" width="28" height="22" rx="3" fill="#fef9c3" stroke="#eab308" stroke-width="1"/>
  <text x="86" y="110" text-anchor="middle" font-size="9" fill="#854d0e">Mg</text>
  <text x="160" y="110" text-anchor="middle" font-size="8.5" fill="#475569">←  Transition metals →</text>
  <rect x="196" y="95" width="28" height="22" rx="3" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
  <text x="210" y="110" text-anchor="middle" font-size="9" fill="#065f46">Al</text>
  <rect x="228" y="95" width="28" height="22" rx="3" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
  <text x="242" y="110" text-anchor="middle" font-size="9" fill="#065f46">Si</text>
  <rect x="260" y="95" width="28" height="22" rx="3" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
  <text x="274" y="110" text-anchor="middle" font-size="9" fill="#065f46">P</text>
  <rect x="292" y="95" width="28" height="22" rx="3" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
  <text x="306" y="110" text-anchor="middle" font-size="9" fill="#065f46">S</text>
  <rect x="324" y="95" width="28" height="22" rx="3" fill="#ede9fe" stroke="#8b5cf6" stroke-width="1"/>
  <text x="338" y="110" text-anchor="middle" font-size="9" fill="#6d28d9">Cl</text>
  <rect x="476" y="95" width="28" height="22" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1"/>
  <text x="490" y="110" text-anchor="middle" font-size="9" fill="#0369a1">Ar</text>
  <!-- Legend -->
  <rect x="40" y="135" width="16" height="12" rx="2" fill="#fee2e2" stroke="#ef4444"/>
  <text x="62" y="145" font-size="9" fill="#374151">Group 1 metals</text>
  <rect x="140" y="135" width="16" height="12" rx="2" fill="#fef9c3" stroke="#eab308"/>
  <text x="162" y="145" font-size="9" fill="#374151">Group 2 metals</text>
  <rect x="260" y="135" width="16" height="12" rx="2" fill="#d1fae5" stroke="#10b981"/>
  <text x="282" y="145" font-size="9" fill="#374151">Non-metals</text>
  <rect x="360" y="135" width="16" height="12" rx="2" fill="#ede9fe" stroke="#8b5cf6"/>
  <text x="382" y="145" font-size="9" fill="#374151">Halogens (Gp 7)</text>
  <rect x="440" y="135" width="16" height="12" rx="2" fill="#e0f2fe" stroke="#0284c7"/>
  <text x="462" y="145" font-size="9" fill="#374151">Noble gases (Gp 0)</text>
  <!-- Arrows for trends -->
  <text x="260" y="170" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="600">Across a period (left→right): metallic character decreases; non-metallic character increases</text>
  <text x="260" y="185" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="600">Down a group: similar chemistry; reactivity changes depending on group</text>
</svg>
:::

## Trends Across Period 3 (Na → Ar)

| Property | Trend across period | Reason |
|---------|--------------------|---------| 
| **Atomic radius** | Decreases Na → Cl | Same number of shells; increasing nuclear charge pulls electrons closer |
| **Ionisation energy** | Increases Na → Ar | Increasing nuclear charge; electrons in same shell; harder to remove |
| **Melting point** | Increases Na → Si then drops sharply to Cl/Ar | Na/Mg/Al: giant metallic lattice; Si: giant covalent; P/S/Cl: simple molecular |
| **Electrical conductivity** | Na/Mg/Al conduct; Si semiconductor; P/S/Cl/Ar do not | Metals have delocalised electrons; non-metals do not |
| **Oxides: acid/base** | Na₂O/MgO: basic; Al₂O₃: amphoteric; SiO₂/P₄O₁₀/SO₃: acidic | Metal oxides → basic; non-metal oxides → acidic |`,
          groups: [],
          recap: [
            "Explain why elements in the same group of the Periodic Table have similar chemical properties. [3]",
            "State the trend in melting points across Period 3 from sodium to argon. Explain the melting point of silicon and why it is so much higher than that of sulfur. [5]",
            "Explain why atomic radius decreases across Period 3. [3]",
            "Explain the difference in electrical conductivity between sodium and sulfur in Period 3. [3]"
          ]
        },
        {
          title: "Group 1 (Alkali Metals) and Group 7 (Halogens)",
          body: `## Group 1 — The Alkali Metals (Li, Na, K, Rb, Cs, Fr)

All have **1 outer electron** → easily lost → form M⁺ ions → reactive metals.

**Reactions with water:**
$$2M + 2H_2O \\rightarrow 2MOH + H_2$$
- Li: fizzes steadily, dissolves
- Na: fizzes vigorously, melts into a ball, may catch fire, dissolves
- K: ignites with lilac flame, fizzes very vigorously

**Trends down Group 1:**

| Property | Trend down group | Reason |
|---------|-----------------|---------|
| Reactivity | **Increases** | Outer electron in a higher shell, further from nucleus, less attracted → lost more easily |
| Melting/boiling point | Decreases | Weaker metallic bonding as atoms get larger |
| Atomic radius | Increases | More electron shells added |
| Density | Generally increases | Atoms get larger and heavier |

## Group 7 — The Halogens (F, Cl, Br, I, At)

All have **7 outer electrons** → gain 1 electron → form X⁻ ions → reactive non-metals.

**Physical states at room temperature:**
- F₂: pale yellow gas; Cl₂: yellow-green gas; Br₂: red-brown liquid; I₂: grey-black solid

**Reactions with hydrogen:** X₂ + H₂ → 2HX (hydrogen halide)
- F₂: reacts explosively in cold dark conditions
- Cl₂: reacts rapidly with heat/UV light
- Br₂: reacts slowly on heating
- I₂: reacts partially and slowly even at high temperature — reversible

**Displacement reactions (reactivity test):**
A more reactive halogen displaces a less reactive one from its salt solution:
- Cl₂ + 2KBr → 2KCl + Br₂ (solution turns orange-brown)
- Cl₂ + 2KI → 2KCl + I₂ (solution turns brown/purple; blue-black with starch)
- Br₂ does NOT displace Cl⁻ (Br₂ is less reactive than Cl₂)

**Trends down Group 7:**

| Property | Trend | Reason |
|---------|-------|---------|
| Reactivity | **Decreases** | Outer shell gets further from nucleus, larger, more shielded → harder to attract an extra electron |
| Melting/boiling point | Increases | Larger molecules → stronger van der Waals forces |
| Colour | Becomes darker | F (pale yellow) → Cl (yellow-green) → Br (red-brown) → I (grey-black) |
| Electronegativity | Decreases | Nucleus less effective at attracting shared electrons as distance increases |`,
          groups: [],
          recap: [
            "Explain why potassium reacts more vigorously with water than sodium does. Use the concept of electron configuration and nuclear attraction. [4]",
            "Write a balanced equation for the reaction of potassium with water. State three observations you would make during this reaction. [4]",
            "Chlorine water is added to potassium bromide solution. Describe and explain the observation. Write the ionic equation. [4]",
            "Explain why the reactivity of halogens decreases down Group 7. [3]"
          ]
        }
      ]
    },
    {
      number: 9,
      title: "Metals",
      intro: "Metals are extracted from ores, extensively used due to their useful properties, and are threatened by corrosion. The reactivity series determines how a metal is extracted (electrolysis for the most reactive; reduction with carbon for moderately reactive metals; found uncombined for the least reactive) and predicts the outcome of displacement reactions. Understanding alloys, corrosion prevention, and extraction methods is essential practical chemistry content.",
      subheadings: [
        {
          title: "The Reactivity Series and Metal Extraction",
          body: `## The Reactivity Series (most to least reactive)

**Potassium, Sodium, Calcium, Magnesium, Aluminium, (Carbon), Zinc, Iron, (Hydrogen), Copper, Silver, Gold**

Memory aid: ==**P**lease **S**top **C**alling **M**e **A** **C**arrot, **Z**ebras **I**n **H**ats **C**an't **S**ing **G**reat==

## Extraction Method Depends on Reactivity

| Reactivity | Extraction method | Example |
|-----------|-------------------|---------|
| Very reactive (K, Na, Ca, Mg, Al) | **Electrolysis** of molten ore | Al from Al₂O₃ (too reactive for carbon to reduce) |
| Moderately reactive (Zn, Fe) | **Reduction with carbon** (blast furnace) | Fe from Fe₂O₃ + CO |
| Unreactive (Cu, Ag, Au) | Found **uncombined** (native) or by heating ore alone | Au found as pure metal |

## Extraction of Iron — The Blast Furnace

Raw materials: iron ore (Fe₂O₃), coke (carbon), limestone (CaCO₃), hot air

**Reactions inside the blast furnace:**

1. Coke burns: $C + O_2 \\rightarrow CO_2$ (exothermic — provides heat)
2. Carbon dioxide reacts with more coke: $CO_2 + C \\rightarrow 2CO$ (produces reducing agent CO)
3. **Reduction of iron ore:** $Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2$ (iron ore is reduced; CO is oxidised)
4. Limestone decomposes: $CaCO_3 \\rightarrow CaO + CO_2$
5. CaO reacts with sand impurities (SiO₂): $CaO + SiO_2 \\rightarrow CaSiO_3$ (slag — removed as waste, used in road building)
6. Molten iron (denser) sinks to the bottom and is tapped off

> **Key reaction to remember:** Fe₂O₃ + 3CO → 2Fe + 3CO₂ — carbon monoxide is the reducing agent; iron ore is reduced (loses oxygen).

## Why Aluminium Cannot be Extracted with Carbon

Aluminium is **more reactive than carbon** — carbon cannot remove oxygen from Al₂O₃ because carbon itself would need to be more reactive. Therefore, aluminium must be extracted by **electrolysis** (which requires a direct electron transfer, driven by electrical energy rather than chemical reactivity).

## Displacement Reactions and the Reactivity Series

A more reactive metal displaces a less reactive metal from its compound:
$$Fe(s) + CuSO_4(aq) \\rightarrow FeSO_4(aq) + Cu(s)$$

This is used as a **test for reactivity** — the metal that displaces another from solution is more reactive.`,
          groups: [],
          recap: [
            "Describe the reactions occurring in the blast furnace that lead to the reduction of iron ore. Write the key equation. [5]",
            "Explain why aluminium cannot be extracted from its ore by reduction with carbon, but iron can. [3]",
            "Explain the role of limestone in the blast furnace. Write the equations for the reactions it undergoes. [4]",
            "Predict and explain what happens when magnesium ribbon is added to copper sulfate solution. Write the ionic equation. [4]"
          ]
        },
        {
          title: "Alloys, Corrosion and Rust Prevention",
          body: `## Alloys

An **alloy** is a mixture of a metal with one or more other elements (usually other metals or carbon), designed to improve on the properties of the pure metal.

**Why alloys are harder than pure metals:** In a pure metal, atoms are arranged in uniform layers that can slide over each other easily. Adding atoms of a different size **disrupts** this regular arrangement, making it harder for layers to slide — the alloy is **harder and stronger** than the pure metal.

| Alloy | Composition | Properties/Uses |
|-------|-------------|------------------|
| **Steel** | Iron + carbon (+ other metals) | Stronger and harder than pure iron; used in construction, car bodies |
| **Stainless steel** | Iron + chromium + nickel | Resistant to corrosion; used in cutlery, surgical instruments |
| **Brass** | Copper + zinc | Harder than copper; good for musical instruments, taps |
| **Bronze** | Copper + tin | Hard, resistant to corrosion; statues, bells |

## Rusting

**Rusting** is the corrosion of iron, forming hydrated iron(III) oxide (Fe₂O₃·xH₂O). It requires **both oxygen AND water** — neither alone is sufficient.

$$4Fe + 3O_2 + xH_2O \\rightarrow 2Fe_2O_3 \\cdot xH_2O$$

### Testing the Conditions Needed for Rust (Classic Experiment)

| Test tube | Conditions | Result |
|----------|-----------|--------|
| Tube 1 | Iron nail + water + air | **Rusts** |
| Tube 2 | Iron nail + boiled water (no O₂) + oil layer (seals out air) | **No rust** |
| Tube 3 | Iron nail + anhydrous CaCl₂ (dry air, no water) | **No rust** |

**Conclusion:** Rusting requires BOTH oxygen and water simultaneously.

## Preventing Rust

| Method | How it works |
|--------|-------------|
| **Painting/coating** | Physical barrier excludes oxygen and water |
| **Oiling/greasing** | Barrier excludes water and air (used on moving parts) |
| **Galvanising** (zinc coating) | Barrier AND sacrificial protection — zinc is more reactive, corrodes preferentially even if coating is scratched |
| **Sacrificial protection** | Blocks of a more reactive metal (Zn or Mg) attached to iron structures (ship hulls, pipelines) — the reactive metal corrodes instead of the iron |
| **Alloying (stainless steel)** | Chromium forms a thin, unreactive oxide layer that protects the iron beneath |

> **Why sacrificial protection works:** The more reactive metal (e.g. zinc) loses electrons more readily than iron. It is **oxidised preferentially**, "sacrificing" itself so the iron remains as metal (not oxidised to rust).`,
          groups: [],
          recap: [
            "Explain why alloys are generally harder than pure metals. [3]",
            "Describe an experiment to show that both oxygen and water are needed for iron to rust. [4]",
            "Explain how galvanising protects iron from rusting, even after the zinc coating is scratched. [4]",
            "Explain the principle of sacrificial protection, using the example of a block of magnesium attached to an underground iron pipe. [3]"
          ]
        }
      ]
    },
    {
      number: 10,
      title: "Chemistry of the Environment",
      intro: "The atmosphere, water sources, and soil all interact with human activity in ways governed by chemistry. Understanding the composition of air, the water cycle, and the consequences of pollution (greenhouse gases, acid rain, eutrophication) is essential environmental chemistry. These topics connect directly to global sustainability challenges and are frequently tested in applied, data-based exam questions.",
      subheadings: [
        {
          title: "The Atmosphere and the Greenhouse Effect",
          body: `## Composition of Clean, Dry Air

| Gas | Approximate % by volume |
|-----|------------------------|
| Nitrogen (N₂) | 78% |
| Oxygen (O₂) | 21% |
| Argon (Ar) and other noble gases | ~1% |
| Carbon dioxide (CO₂) | 0.04% |

## The Greenhouse Effect

The greenhouse effect is a **natural** process essential for life — without it, Earth would be far too cold. Greenhouse gases (CO₂, CH₄, water vapour) absorb infrared radiation re-emitted from the Earth's surface and re-radiate some of it back toward the surface, trapping heat.

**Enhanced greenhouse effect (human-caused):** Burning fossil fuels increases atmospheric CO₂ concentration beyond natural levels, trapping more heat → **global warming** and climate change.

### Major Greenhouse Gases and Their Sources

| Gas | Source |
|-----|--------|
| **CO₂** | Combustion of fossil fuels (coal, oil, gas); deforestation; respiration |
| **CH₄ (methane)** | Livestock digestion, rice paddies, landfill sites, melting permafrost |
| **Water vapour** | Natural evaporation (amplified by warming — positive feedback) |
| **CFCs** (now largely banned) | Historical refrigerants, aerosols — also deplete the ozone layer |

### Consequences of Global Warming
- Rising sea levels (thermal expansion + melting ice caps)
- More frequent extreme weather events
- Shifting climate zones, affecting agriculture
- Ocean acidification (CO₂ dissolves to form carbonic acid) — threatens marine life

## Acid Rain

Caused mainly by **sulfur dioxide (SO₂)** and **nitrogen oxides (NOₓ)**:

$$SO_2 + H_2O \\rightarrow H_2SO_3 \\text{ (sulfurous acid)}$$
$$2SO_2 + O_2 \\rightarrow 2SO_3; \\quad SO_3 + H_2O \\rightarrow H_2SO_4 \\text{ (sulfuric acid)}$$

**Sources:**
- SO₂: burning fossil fuels containing sulfur impurities (coal, oil)
- NOₓ: high-temperature combustion in car engines (N₂ + O₂ react at high temperature)

**Effects:** Damages trees and plant leaves; acidifies lakes and rivers (kills fish, especially at low pH); corrodes limestone/marble buildings and statues (CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂); leaches aluminium ions from soil into waterways (toxic to fish).

**Reducing acid rain:** Flue gas desulfurisation (removes SO₂ from power station emissions using limestone); catalytic converters in cars (convert NOₓ to N₂); using low-sulfur fuels; switching to renewable energy sources.`,
          groups: [],
          recap: [
            "State the approximate percentage of nitrogen, oxygen, and carbon dioxide in clean, dry air. [3]",
            "Explain how the enhanced greenhouse effect leads to global warming. [4]",
            "Describe how sulfur dioxide released by power stations leads to acid rain. Write the relevant equations. [4]",
            "Explain two environmental effects of acid rain. [4]",
            "Explain how a catalytic converter reduces pollution from car exhausts. [3]"
          ]
        }
      ]
    },
    {
      number: 11,
      title: "Organic Chemistry",
      intro: "Organic chemistry is the study of carbon-based compounds, which form the basis of all life and most modern materials — plastics, fuels, medicines, and fibres. Carbon's unique ability to form long chains and rings (catenation) and strong covalent bonds with itself and other elements creates an almost unlimited variety of compounds. Understanding hydrocarbons, functional groups, and polymers is essential for Cambridge IGCSE Chemistry.",
      subheadings: [
        {
          title: "Alkanes and Alkenes — Structure, Naming and Reactions",
          body: `## Homologous Series

A **homologous series** is a family of compounds with:
- The same general formula
- Similar chemical properties
- Gradually changing physical properties (e.g. boiling point increases with chain length)
- Each member differs from the next by a $CH_2$ unit

## Alkanes — Saturated Hydrocarbons

**General formula:** $C_nH_{2n+2}$. Alkanes contain only **single C–C bonds** — they are **saturated**.

| Name | Formula | Structure |
|------|---------|-----------|
| Methane | CH₄ | 1 carbon |
| Ethane | C₂H₆ | 2 carbons |
| Propane | C₃H₈ | 3 carbons |
| Butane | C₄H₁₀ | 4 carbons |

**Combustion of alkanes (main use — fuels):**
$$\\text{Complete combustion: } C_xH_y + O_2 \\text{(excess)} \\rightarrow CO_2 + H_2O$$
$$\\text{Incomplete combustion (limited O}_2\\text{): produces CO and/or soot (C)}$$

**Substitution reaction with halogens** (in UV light): $CH_4 + Cl_2 \\xrightarrow{UV} CH_3Cl + HCl$ — one hydrogen is substituted (replaced) by chlorine.

## Alkenes — Unsaturated Hydrocarbons

**General formula:** $C_nH_{2n}$. Alkenes contain **at least one C=C double bond** — they are **unsaturated**.

| Name | Formula |
|------|---------|
| Ethene | C₂H₄ |
| Propene | C₃H₆ |
| Butene | C₄H₈ |

**Test for alkenes — Bromine water:**
Add bromine water (orange) to the sample and shake.
- **Alkene (unsaturated):** Orange → **colourless** rapidly (addition reaction across the double bond)
- **Alkane (saturated):** Remains orange (no reaction — no double bond to react with)

$$C_2H_4 + Br_2 \\rightarrow C_2H_4Br_2 \\text{ (1,2-dibromoethane)}$$

**Addition reactions of alkenes** (the double bond opens to form new single bonds):
- + H₂ (catalyst, Ni) → alkane (**hydrogenation** — used to make margarine from vegetable oils)
- + H₂O (steam, catalyst) → alcohol (**hydration**)
- + HBr → bromoalkane

> **Addition polymerisation**: Many alkene monomers join together (the double bonds open) to form a long-chain polymer with no small molecule by-product. e.g. many ethene molecules → poly(ethene)/polythene.

## Cracking — Converting Long-Chain Alkanes to Shorter Alkanes + Alkenes

**Cracking** breaks long hydrocarbon chains (from fractional distillation of crude oil, in excess supply) into shorter, more useful alkanes and alkenes (in high demand for fuels and plastics).

$$C_{10}H_{22} \\rightarrow C_8H_{18} + C_2H_4$$

**Conditions:** High temperature (~600–700°C) and a catalyst (e.g. aluminium oxide or silicon dioxide), OR very high temperature with steam.`,
          groups: [],
          recap: [
            "Describe the test used to distinguish an alkane from an alkene, including the result for each. [3]",
            "Write the equation for the complete combustion of propane (C₃H₈). [2]",
            "Explain what is meant by cracking and why it is carried out in the petroleum industry. [4]",
            "Explain the difference between a saturated and an unsaturated hydrocarbon, with reference to bonding. [2]",
            "Write the equation for the addition reaction between ethene and hydrogen, stating the conditions needed. [2]"
          ]
        },
        {
          title: "Alcohols, Carboxylic Acids and Polymers",
          body: `## Alcohols — Functional Group: –OH

**General formula:** $C_nH_{2n+1}OH$

| Name | Formula |
|------|---------|
| Methanol | CH₃OH |
| Ethanol | C₂H₅OH |
| Propanol | C₃H₇OH |

**Production of ethanol:**
1. **Fermentation:** Yeast enzymes convert glucose → ethanol + CO₂ (anaerobic respiration). $C_6H_{12}O_6 \\rightarrow 2C_2H_5OH + 2CO_2$. Slow, low concentration (~15% max — yeast dies at higher concentrations), renewable, low temperature, low energy cost.
2. **Hydration of ethene:** $C_2H_4 + H_2O \\xrightarrow{\\text{catalyst, heat}} C_2H_5OH$. Fast, continuous process, 100% ethanol possible, uses non-renewable crude oil.

**Combustion of ethanol:** $C_2H_5OH + 3O_2 \\rightarrow 2CO_2 + 3H_2O$ — used as a biofuel (carbon neutral if from recently grown plant material).

## Carboxylic Acids — Functional Group: –COOH

**General formula:** $C_nH_{2n+1}COOH$

| Name | Formula |
|------|---------|
| Methanoic acid | HCOOH |
| Ethanoic acid | CH₃COOH |

**Properties:** Weak acids (partially ionise). React with metals, carbonates, and alkalis like other acids:
$$2CH_3COOH + Mg \\rightarrow (CH_3COO)_2Mg + H_2$$

**Oxidation of ethanol produces ethanoic acid** (this is how vinegar forms, and why wine turns sour if exposed to air): $C_2H_5OH + O_2 \\rightarrow CH_3COOH + H_2O$ (using an oxidising agent or bacteria in air)

**Esterification:** Carboxylic acid + alcohol → ester + water (condensation reaction, catalysed by concentrated H₂SO₄)
$$CH_3COOH + C_2H_5OH \\rightarrow CH_3COOC_2H_5 + H_2O$$
Esters have characteristic fruity smells — used in flavourings and perfumes.

## Polymers

**Addition polymerisation** (alkene monomers, e.g. poly(ethene) from ethene): The C=C double bonds open and join monomers in a long chain. No by-product.

**Condensation polymerisation** (two different monomers, each with 2 functional groups): Monomers join with loss of a small molecule (usually water) at each link.

- **Nylon:** Diamine + dicarboxylic acid → polyamide + water
- **Terylene (polyester):** Diol + dicarboxylic acid → polyester + water

| Feature | Addition polymer | Condensation polymer |
|---------|------------------|----------------------|
| Monomer | Usually one type (alkene) | Usually two types (each bifunctional) |
| By-product | None | Small molecule (often water) |
| Example | Poly(ethene), PVC | Nylon, Terylene, proteins, DNA |`,
          groups: [],
          recap: [
            "Compare fermentation and the hydration of ethene as methods of producing ethanol. State one advantage and one disadvantage of each. [4]",
            "Write the equation for esterification between ethanoic acid and methanol. Name the ester formed. [3]",
            "Explain the difference between addition polymerisation and condensation polymerisation. [4]",
            "Describe how ethanoic acid can be formed from ethanol. State the type of reaction. [2]"
          ]
        }
      ]
    },
    {
      number: 12,
      title: "Experimental Techniques and Chemical Analysis",
      intro: "Practical chemistry requires precise separation and identification techniques. This chapter covers purification methods (filtration, crystallisation, distillation, chromatography) and the systematic chemical tests used to identify ions and gases. These skills are examined both as recall content and as applied data-analysis questions involving real experimental results.",
      subheadings: [
        {
          title: "Separation and Purification Techniques",
          body: `## Choosing the Right Technique

| Technique | Separates | How it works |
|----------|-----------|---------------|
| **Filtration** | Insoluble solid from liquid | Solid particles too large to pass through filter paper pores |
| **Evaporation** | Dissolved solid from solution (solvent evaporated) | Heat solvent until it boils off, leaving solute behind |
| **Crystallisation** | Pure solid crystals from solution | Evaporate until saturated, cool slowly — crystals form as solubility decreases |
| **Simple distillation** | Solvent from solution; OR 2 liquids with very different boiling points | Heat to boil off lower-BP liquid; condense and collect |
| **Fractional distillation** | Mixture of liquids with similar/close boiling points | Fractionating column provides repeated evaporation-condensation; separates by boiling point |
| **Paper chromatography** | Mixture of dissolved substances (e.g. dyes, amino acids) | Different solubility in mobile phase + different affinity for stationary phase (paper) |

## Paper Chromatography — Rf Values

$$R_f = \\frac{\\text{distance moved by substance}}{\\text{distance moved by solvent front}}$$

Rf values are between 0 and 1, and are characteristic of a substance under specific conditions (same solvent, temperature, paper).

**Key technique points:**
- Spot sample using a **pencil** line (not ink — ink would dissolve and run with solvent)
- Solvent level in the tank must be **below** the starting spot (otherwise the sample dissolves straight into the solvent)
- A pure substance gives **one spot**; a mixture gives multiple spots
- Comparing Rf values with known substances allows identification`,
          groups: [],
          recap: [
            "Describe how you would obtain pure, dry salt crystals from a solution of sodium chloride in water. [3]",
            "A chromatogram shows a spot that has travelled 6.0 cm while the solvent front has travelled 10.0 cm. Calculate the Rf value. [2]",
            "Explain why the starting line in paper chromatography must be drawn in pencil, not ink. [2]",
            "Explain how paper chromatography can be used to show that a food dye is a mixture of two colourants. [3]"
          ]
        },
        {
          title: "Tests for Ions and Gases",
          body: `## Flame Tests for Metal Ions

Dip a clean nichrome wire in the sample, hold in a blue Bunsen flame, observe the colour:

| Metal ion | Flame colour |
|----------|-------------|
| Li⁺ | Red |
| Na⁺ | Yellow/orange (persistent) |
| K⁺ | Lilac |
| Ca²⁺ | Brick-red (orange-red) |
| Cu²⁺ | Blue-green |

## Precipitate Tests — Adding NaOH Solution

| Metal ion | Observation with NaOH (dropwise) | Observation with excess NaOH |
|----------|----------------------------------|------------------------------|
| Cu²⁺ | Blue precipitate | Insoluble — stays blue |
| Fe²⁺ | Green precipitate | Insoluble — stays green |
| Fe³⁺ | Brown/rust-orange precipitate | Insoluble — stays brown |
| Al³⁺ | White precipitate | **Dissolves** → colourless solution (amphoteric) |
| Zn²⁺ | White precipitate | **Dissolves** → colourless solution (amphoteric) |
| Ca²⁺ | White precipitate | Insoluble — stays white |

> **Al³⁺ vs Ca²⁺/Zn²⁺ vs Zn²⁺ distinction:** Both Al³⁺ and Zn²⁺ give white precipitates that redissolve in excess NaOH. Use flame tests or other tests to tell them apart (Al and Zn don't have distinguishing flame colours — use sodium hydroxide + ammonia solution tests together for full identification).

## Tests for Anions (Negative Ions)

| Ion | Test | Positive result |
|-----|------|-----------------|
| **Carbonate (CO₃²⁻)** | Add dilute acid | Effervescence (CO₂ produced); gas turns limewater milky |
| **Chloride (Cl⁻)** | Add dilute HNO₃, then AgNO₃ solution | White precipitate (AgCl) |
| **Bromide (Br⁻)** | Add dilute HNO₃, then AgNO₃ solution | Cream precipitate (AgBr) |
| **Iodide (I⁻)** | Add dilute HNO₃, then AgNO₃ solution | Yellow precipitate (AgI) |
| **Sulfate (SO₄²⁻)** | Add dilute HCl, then BaCl₂ solution | White precipitate (BaSO₄) |

## Tests for Gases

| Gas | Test | Positive result |
|-----|------|-----------------|
| **Hydrogen (H₂)** | Lit splint | **Squeaky pop** |
| **Oxygen (O₂)** | Glowing splint | **Relights** |
| **Carbon dioxide (CO₂)** | Bubble through limewater | Turns **milky** |
| **Ammonia (NH₃)** | Damp red litmus paper | Turns **blue**; pungent smell |
| **Chlorine (Cl₂)** | Damp litmus paper | **Bleaches** (turns white); pale green gas, choking smell |`,
          groups: [],
          recap: [
            "Describe how you would distinguish between solutions of iron(II) sulfate and iron(III) sulfate using sodium hydroxide. [3]",
            "A white precipitate forms when NaOH is added to a solution. The precipitate dissolves when excess NaOH is added. Identify two possible metal ions present and suggest a further test to distinguish them. [3]",
            "Describe the test for sulfate ions, including reagents and result. [3]",
            "A gas turns damp red litmus paper blue and has a pungent smell. Identify the gas. [1]",
            "Describe how to test for carbonate ions in an unknown solid. [3]"
          ]
        }
      ]
    }
  ]
};
