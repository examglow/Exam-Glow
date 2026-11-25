/**
 * Embedded SVG Scientific & Academic Diagrams Registry
 * Guarantees 100% reliable vector rendering in all environments without external image asset dependencies.
 */

export const DIAGRAM_MAP: Record<string, string> = {
  "mrs-gren.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 580" width="100%" height="auto" class="w-full max-w-4xl h-auto block mx-auto">
  <defs>
    <filter id="mgShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#0f172a" flood-opacity="0.06" />
    </filter>
  </defs>

  <!-- Title Header (No background card, pure clean canvas) -->
  <text x="480" y="32" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="800" fill="#0f172a">
    The 7 Characteristics of Living Organisms
  </text>
  <text x="480" y="54" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#047857">
    Universal Criteria Defining All Life — Cambridge IGCSE Biology (MRS GREN)
  </text>

  <!-- Central Hub -->
  <g transform="translate(380, 245)">
    <rect x="0" y="0" width="200" height="70" rx="35" fill="#047857" filter="url(#mgShadow)" />
    <text x="100" y="36" text-anchor="middle" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#ffffff" letter-spacing="2">MRS GREN</text>
    <text x="100" y="54" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#a7f3d0">Core Life Processes</text>
  </g>

  <!-- Connector Lines from Hub -->
  <path d="M 400 245 L 200 135" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M 480 245 L 480 135" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M 560 245 L 760 135" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M 380 280 L 190 280" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M 580 280 L 770 280" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M 420 315 L 260 435" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M 540 315 L 700 435" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 4"/>

  <!-- 1. MOVEMENT (Top Left) -->
  <g transform="translate(60, 85)" filter="url(#mgShadow)">
    <rect x="0" y="0" width="270" height="90" rx="14" fill="#ffffff" stroke="#3b82f6" stroke-width="2"/>
    <rect x="12" y="12" width="34" height="34" rx="8" fill="#eff6ff"/>
    <text x="29" y="35" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#1d4ed8">M</text>
    <text x="56" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e3a8a">Movement</text>
    <text x="56" y="44" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#3b82f6">Action causing change of position</text>
    <text x="14" y="65" font-family="system-ui, sans-serif" font-size="10" fill="#475569">An action by an organism or part of an organism</text>
    <text x="14" y="78" font-family="system-ui, sans-serif" font-size="10" fill="#475569">causing a change of position or place.</text>
  </g>

  <!-- 2. RESPIRATION (Top Centre) -->
  <g transform="translate(345, 80)" filter="url(#mgShadow)">
    <rect x="0" y="0" width="270" height="90" rx="14" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
    <rect x="12" y="12" width="34" height="34" rx="8" fill="#ecfdf5"/>
    <text x="29" y="35" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#047857">R</text>
    <text x="56" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#064e3b">Respiration</text>
    <text x="56" y="44" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#10b981">Releasing energy (ATP) in cells</text>
    <text x="14" y="65" font-family="system-ui, sans-serif" font-size="10" fill="#475569">Chemical reactions in cells that break down</text>
    <text x="14" y="78" font-family="system-ui, sans-serif" font-size="10" fill="#475569">nutrient molecules to release energy for metabolism.</text>
  </g>

  <!-- 3. SENSITIVITY (Top Right) -->
  <g transform="translate(630, 85)" filter="url(#mgShadow)">
    <rect x="0" y="0" width="270" height="90" rx="14" fill="#ffffff" stroke="#8b5cf6" stroke-width="2"/>
    <rect x="12" y="12" width="34" height="34" rx="8" fill="#f5f3ff"/>
    <text x="29" y="35" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#6d28d9">S</text>
    <text x="56" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#4c1d95">Sensitivity</text>
    <text x="56" y="44" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#8b5cf6">Detecting &amp; responding to stimuli</text>
    <text x="14" y="65" font-family="system-ui, sans-serif" font-size="10" fill="#475569">The ability to detect and respond to changes</text>
    <text x="14" y="78" font-family="system-ui, sans-serif" font-size="10" fill="#475569">in the internal or external environment.</text>
  </g>

  <!-- 4. GROWTH (Middle Left) -->
  <g transform="translate(40, 235)" filter="url(#mgShadow)">
    <rect x="0" y="0" width="270" height="90" rx="14" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
    <rect x="12" y="12" width="34" height="34" rx="8" fill="#fffbeb"/>
    <text x="29" y="35" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#b45309">G</text>
    <text x="56" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#78350f">Growth</text>
    <text x="56" y="44" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#f59e0b">Permanent increase in size &amp; dry mass</text>
    <text x="14" y="65" font-family="system-ui, sans-serif" font-size="10" fill="#475569">A permanent increase in size and dry mass by</text>
    <text x="14" y="78" font-family="system-ui, sans-serif" font-size="10" fill="#475569">an increase in cell number or cell size or both.</text>
  </g>

  <!-- 5. REPRODUCTION (Middle Right) -->
  <g transform="translate(650, 235)" filter="url(#mgShadow)">
    <rect x="0" y="0" width="270" height="90" rx="14" fill="#ffffff" stroke="#ec4899" stroke-width="2"/>
    <rect x="12" y="12" width="34" height="34" rx="8" fill="#fdf2f8"/>
    <text x="29" y="35" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#be185d">R</text>
    <text x="56" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#831843">Reproduction</text>
    <text x="56" y="44" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#ec4899">Producing new individuals / offspring</text>
    <text x="14" y="65" font-family="system-ui, sans-serif" font-size="10" fill="#475569">The processes that make more of the</text>
    <text x="14" y="78" font-family="system-ui, sans-serif" font-size="10" fill="#475569">same kind of organism (asexual or sexual).</text>
  </g>

  <!-- 6. EXCRETION (Bottom Left) -->
  <g transform="translate(140, 395)" filter="url(#mgShadow)">
    <rect x="0" y="0" width="290" height="90" rx="14" fill="#ffffff" stroke="#ef4444" stroke-width="2"/>
    <rect x="12" y="12" width="34" height="34" rx="8" fill="#fef2f2"/>
    <text x="29" y="35" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#b91c1c">E</text>
    <text x="56" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#7f1d1d">Excretion</text>
    <text x="56" y="44" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#ef4444">Removal of toxic metabolic waste</text>
    <text x="14" y="65" font-family="system-ui, sans-serif" font-size="10" fill="#475569">Removal of the waste products of metabolism</text>
    <text x="14" y="78" font-family="system-ui, sans-serif" font-size="10" fill="#475569">and substances in excess of requirements.</text>
  </g>

  <!-- 7. NUTRITION (Bottom Right) -->
  <g transform="translate(530, 395)" filter="url(#mgShadow)">
    <rect x="0" y="0" width="290" height="90" rx="14" fill="#ffffff" stroke="#14b8a6" stroke-width="2"/>
    <rect x="12" y="12" width="34" height="34" rx="8" fill="#f0fdfa"/>
    <text x="29" y="35" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#0f766e">N</text>
    <text x="56" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#134e4a">Nutrition</text>
    <text x="56" y="44" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#14b8a6">Taking in materials for growth &amp; repair</text>
    <text x="14" y="65" font-family="system-ui, sans-serif" font-size="10" fill="#475569">Taking in of materials for energy, growth</text>
    <text x="14" y="78" font-family="system-ui, sans-serif" font-size="10" fill="#475569">and development (light, CO2, water, organic ions).</text>
  </g>

  <!-- Bottom Key Tip -->
  <text x="480" y="530" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-style="italic" fill="#64748b">
    * Non-living entities (such as rocks or viruses) perform none of these seven processes independently.
  </text>
</svg>`,

  "cell-structure.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 560" width="100%" height="auto" class="rounded-2xl bg-white shadow-sm border border-slate-200">
  <defs>
    <linearGradient id="animalCytoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff5f5" />
      <stop offset="60%" stop-color="#ffe4e6" />
      <stop offset="100%" stop-color="#fecdd3" />
    </linearGradient>
    <linearGradient id="plantCytoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0fdf4" />
      <stop offset="60%" stop-color="#dcfce7" />
      <stop offset="100%" stop-color="#bbf7d0" />
    </linearGradient>
    <linearGradient id="nuclearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d8b4fe" />
      <stop offset="50%" stop-color="#a855f7" />
      <stop offset="100%" stop-color="#6b21a8" />
    </linearGradient>
    <radialGradient id="nucleolusGrad" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#581c87" />
      <stop offset="100%" stop-color="#3b0764" />
    </radialGradient>
    <linearGradient id="vacuoleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e0f2fe" />
      <stop offset="50%" stop-color="#bae6fd" />
      <stop offset="100%" stop-color="#7dd3fc" />
    </linearGradient>
    <linearGradient id="chloroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#86efac" />
      <stop offset="50%" stop-color="#22c55e" />
      <stop offset="100%" stop-color="#15803d" />
    </linearGradient>
    <linearGradient id="mitoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fdba74" />
      <stop offset="60%" stop-color="#f97316" />
      <stop offset="100%" stop-color="#c2410c" />
    </linearGradient>
    <filter id="softShadow" x="-6%" y="-6%" width="112%" height="112%">
      <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#0f172a" flood-opacity="0.08" />
    </filter>
  </defs>

  <rect x="0" y="0" width="920" height="54" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
  <text x="460" y="28" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" fill="#0f172a">
    Ultrastructure of Animal vs. Plant Cells
  </text>
  <text x="460" y="45" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#64748b">
    Cell Structures, Organelle Functions &amp; Identification
  </text>

  <!-- LEFT: ANIMAL CELL -->
  <g transform="translate(40, 68)">
    <rect x="0" y="0" width="400" height="32" rx="8" fill="#fff1f2" stroke="#fecdd3" stroke-width="1" />
    <text x="200" y="21" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#be123c">
      ANIMAL CELL (Irregular · No Cell Wall)
    </text>

    <path d="M 40 170 C 35 90, 140 50, 230 65 C 320 80, 365 140, 355 220 C 345 300, 260 335, 170 330 C 70 325, 45 250, 40 170 Z"
          fill="url(#animalCytoGrad)" stroke="#e11d48" stroke-width="3" filter="url(#softShadow)" />

    <text x="90" y="110" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#881337">Cytoplasm (Cytosol)</text>

    <circle cx="195" cy="195" r="44" fill="url(#nuclearGrad)" stroke="#4c1d95" stroke-width="2.5" />
    <circle cx="195" cy="195" r="41" fill="none" stroke="#e9d5ff" stroke-width="1.5" stroke-dasharray="6 3" />
    <circle cx="188" cy="190" r="14" fill="url(#nucleolusGrad)" />
    <path d="M 175 210 Q 185 220 205 215 T 225 200" fill="none" stroke="#ede9fe" stroke-width="1.5" opacity="0.8" />
    <text x="195" y="194" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#ffffff">Nucleolus</text>

    <path d="M 238 180 C 265 175, 275 195, 255 210 C 275 220, 265 240, 240 235"
          fill="none" stroke="#9333ea" stroke-width="3" stroke-linecap="round" />
    <path d="M 248 175 C 275 170, 285 190, 268 205"
          fill="none" stroke="#c084fc" stroke-width="2" stroke-linecap="round" />
    <circle cx="260" cy="178" r="2" fill="#3b0764" />
    <circle cx="270" cy="195" r="2" fill="#3b0764" />
    <circle cx="258" cy="225" r="2" fill="#3b0764" />

    <g transform="translate(85, 220)">
      <path d="M 10 10 Q 35 18 60 10" fill="none" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round" />
      <path d="M 12 20 Q 35 28 58 20" fill="none" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round" />
      <path d="M 16 30 Q 35 36 54 30" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" />
      <circle cx="70" cy="12" r="3.5" fill="#fbbf24" stroke="#d97706" stroke-width="1" />
      <circle cx="66" cy="26" r="3" fill="#fbbf24" stroke="#d97706" stroke-width="1" />
    </g>

    <g transform="translate(100, 125) rotate(-20)">
      <rect x="0" y="0" width="38" height="20" rx="10" fill="url(#mitoGrad)" stroke="#9a3412" stroke-width="1.5" />
      <path d="M 7 10 Q 13 4 19 10 T 31 10" fill="none" stroke="#ffedd5" stroke-width="2" />
    </g>
    <g transform="translate(230, 105) rotate(35)">
      <rect x="0" y="0" width="36" height="18" rx="9" fill="url(#mitoGrad)" stroke="#9a3412" stroke-width="1.5" />
      <path d="M 6 9 Q 12 4 18 9 T 30 9" fill="none" stroke="#ffedd5" stroke-width="2" />
    </g>
    <g transform="translate(150, 275) rotate(15)">
      <rect x="0" y="0" width="36" height="18" rx="9" fill="url(#mitoGrad)" stroke="#9a3412" stroke-width="1.5" />
      <path d="M 6 9 Q 12 4 18 9 T 30 9" fill="none" stroke="#ffedd5" stroke-width="2" />
    </g>

    <circle cx="105" cy="180" r="7" fill="#f43f5e" stroke="#be123c" stroke-width="1.5" />
    <circle cx="280" cy="150" r="6" fill="#f43f5e" stroke="#be123c" stroke-width="1.5" />
    <circle cx="140" cy="85" r="2.5" fill="#334155" />
    <circle cx="165" cy="100" r="2.5" fill="#334155" />
    <circle cx="120" cy="200" r="2.5" fill="#334155" />
    <circle cx="285" cy="245" r="2.5" fill="#334155" />
    <circle cx="210" cy="290" r="2.5" fill="#334155" />

    <line x1="330" y1="120" x2="385" y2="95" stroke="#be123c" stroke-width="1.5" />
    <circle cx="330" cy="120" r="2.5" fill="#be123c" />
    <text x="388" y="98" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#be123c">Cell Membrane</text>

    <line x1="235" y1="170" x2="385" y2="150" stroke="#6b21a8" stroke-width="1.5" />
    <circle cx="235" cy="170" r="2.5" fill="#6b21a8" />
    <text x="388" y="153" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#6b21a8">Nucleus (DNA)</text>

    <line x1="125" y1="140" x2="20" y2="155" stroke="#c2410c" stroke-width="1.5" />
    <circle cx="125" cy="140" r="2.5" fill="#c2410c" />
    <text x="15" y="158" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#c2410c">Mitochondrion (ATP)</text>

    <line x1="95" y1="245" x2="20" y2="245" stroke="#d97706" stroke-width="1.5" />
    <circle cx="95" cy="245" r="2.5" fill="#d97706" />
    <text x="15" y="248" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#d97706">Golgi Apparatus</text>

    <line x1="260" y1="225" x2="385" y2="235" stroke="#475569" stroke-width="1.5" />
    <circle cx="260" cy="225" r="2.5" fill="#475569" />
    <text x="388" y="238" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">Ribosomes (80S)</text>
  </g>

  <!-- RIGHT: PLANT CELL -->
  <g transform="translate(480, 68)">
    <rect x="0" y="0" width="400" height="32" rx="8" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1" />
    <text x="200" y="21" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#15803d">
      PLANT CELL (Fixed Polygonal · Wall &amp; Chloroplasts)
    </text>

    <polygon points="50,60 320,45 365,225 315,325 70,320 25,185"
             fill="#86efac" stroke="#15803d" stroke-width="7" stroke-linejoin="round" filter="url(#softShadow)" />

    <polygon points="56,66 314,52 358,222 310,318 75,313 32,187"
             fill="url(#plantCytoGrad)" stroke="#16a34a" stroke-width="2.5" stroke-linejoin="round" />

    <path d="M 125 100 C 240 85, 275 125, 270 215 C 265 270, 205 285, 135 275 C 80 265, 75 140, 125 100 Z"
          fill="url(#vacuoleGrad)" stroke="#0284c7" stroke-width="2.5" opacity="0.9" />
    <text x="180" y="180" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0369a1">
      Central Vacuole
    </text>
    <text x="180" y="196" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#0284c7">
      (Cell Sap &amp; Turgor)
    </text>

    <circle cx="85" cy="115" r="32" fill="url(#nuclearGrad)" stroke="#4c1d95" stroke-width="2" />
    <circle cx="85" cy="115" r="10" fill="url(#nucleolusGrad)" />
    <text x="85" y="118" text-anchor="middle" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#ffffff">DNA</text>

    <!-- Chloroplast 1 -->
    <g transform="translate(200, 60) rotate(10)">
      <ellipse cx="26" cy="16" rx="26" ry="16" fill="url(#chloroGrad)" stroke="#14532d" stroke-width="2" />
      <line x1="12" y1="12" x2="20" y2="12" stroke="#dcfce7" stroke-width="2.5" stroke-linecap="round" />
      <line x1="12" y1="16" x2="20" y2="16" stroke="#dcfce7" stroke-width="2.5" stroke-linecap="round" />
      <line x1="12" y1="20" x2="20" y2="20" stroke="#dcfce7" stroke-width="2.5" stroke-linecap="round" />
      <line x1="28" y1="12" x2="38" y2="12" stroke="#dcfce7" stroke-width="2.5" stroke-linecap="round" />
      <line x1="28" y1="16" x2="38" y2="16" stroke="#dcfce7" stroke-width="2.5" stroke-linecap="round" />
      <line x1="28" y1="20" x2="38" y2="20" stroke="#dcfce7" stroke-width="2.5" stroke-linecap="round" />
    </g>

    <!-- Chloroplast 2 -->
    <g transform="translate(280, 160) rotate(-35)">
      <ellipse cx="26" cy="16" rx="26" ry="16" fill="url(#chloroGrad)" stroke="#14532d" stroke-width="2" />
      <line x1="12" y1="12" x2="20" y2="12" stroke="#dcfce7" stroke-width="2.5" stroke-linecap="round" />
      <line x1="12" y1="16" x2="20" y2="16" stroke="#dcfce7" stroke-width="2.5" stroke-linecap="round" />
      <line x1="28" y1="12" x2="38" y2="12" stroke="#dcfce7" stroke-width="2.5" stroke-linecap="round" />
      <line x1="28" y1="16" x2="38" y2="16" stroke="#dcfce7" stroke-width="2.5" stroke-linecap="round" />
    </g>

    <!-- Chloroplast 3 -->
    <g transform="translate(85, 245) rotate(25)">
      <ellipse cx="26" cy="16" rx="26" ry="16" fill="url(#chloroGrad)" stroke="#14532d" stroke-width="2" />
      <line x1="12" y1="12" x2="20" y2="12" stroke="#dcfce7" stroke-width="2.5" stroke-linecap="round" />
      <line x1="12" y1="16" x2="20" y2="16" stroke="#dcfce7" stroke-width="2.5" stroke-linecap="round" />
      <line x1="28" y1="12" x2="38" y2="12" stroke="#dcfce7" stroke-width="2.5" stroke-linecap="round" />
      <line x1="28" y1="16" x2="38" y2="16" stroke="#dcfce7" stroke-width="2.5" stroke-linecap="round" />
    </g>

    <g transform="translate(180, 280) rotate(-15)">
      <rect x="0" y="0" width="34" height="17" rx="8.5" fill="url(#mitoGrad)" stroke="#9a3412" stroke-width="1.5" />
      <path d="M 6 8.5 Q 11 3 17 8.5 T 28 8.5" fill="none" stroke="#ffedd5" stroke-width="1.8" />
    </g>

    <ellipse cx="270" cy="255" rx="8" ry="6" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />
    <ellipse cx="285" cy="245" rx="7" ry="5" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />

    <line x1="45" y1="80" x2="-20" y2="55" stroke="#15803d" stroke-width="2" />
    <circle cx="45" cy="80" r="3" fill="#15803d" />
    <text x="-25" y="58" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d">
      Cellulose Cell Wall
    </text>

    <line x1="35" y1="170" x2="-20" y2="170" stroke="#16a34a" stroke-width="1.5" />
    <circle cx="35" cy="170" r="2.5" fill="#16a34a" />
    <text x="-25" y="173" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#16a34a">
      Cell Membrane
    </text>

    <line x1="250" y1="75" x2="385" y2="75" stroke="#14532d" stroke-width="1.5" />
    <circle cx="250" cy="75" r="2.5" fill="#14532d" />
    <text x="388" y="78" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#14532d">
      Chloroplast (Chlorophyll)
    </text>

    <line x1="265" y1="210" x2="385" y2="210" stroke="#0284c7" stroke-width="1.5" />
    <circle cx="265" cy="210" r="2.5" fill="#0284c7" />
    <text x="388" y="213" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0284c7">
      Tonoplast (Vacuole)
    </text>

    <line x1="290" y1="255" x2="385" y2="265" stroke="#ca8a04" stroke-width="1.5" />
    <circle cx="290" cy="255" r="2.5" fill="#ca8a04" />
    <text x="388" y="268" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#854d0e">
      Starch Granules
    </text>
  </g>

  <!-- BOTTOM: CAMBRIDGE EXAM SUMMARY MATRIX TABLE -->
  <g transform="translate(40, 425)">
    <rect x="0" y="0" width="840" height="115" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />

    <rect x="0" y="0" width="840" height="30" rx="14" fill="#f1f5f9" />
    <rect x="0" y="20" width="840" height="10" fill="#f1f5f9" />
    <text x="140" y="20" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569">ORGANELLE / FEATURE</text>
    <text x="340" y="20" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#be123c">ANIMAL CELL</text>
    <text x="510" y="20" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d">PLANT CELL</text>
    <text x="710" y="20" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">KEY FUNCTION &amp; ROLE</text>
    <line x1="0" y1="30" x2="840" y2="30" stroke="#cbd5e1" stroke-width="1" />

    <text x="25" y="48" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155">Cellulose Cell Wall</text>
    <text x="340" y="48" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ef4444">✕ Absent</text>
    <text x="510" y="48" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#16a34a">✓ Present (outermost)</text>
    <text x="610" y="48" font-family="system-ui, sans-serif" font-size="10" fill="#475569">Rigid tensile structure; prevents lysis under turgor</text>

    <line x1="15" y1="56" x2="825" y2="56" stroke="#e2e8f0" stroke-width="1" />
    <text x="25" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155">Chloroplasts (Chlorophyll)</text>
    <text x="340" y="70" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ef4444">✕ Absent</text>
    <text x="510" y="70" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#16a34a">✓ Present (in green cells)</text>
    <text x="610" y="70" font-family="system-ui, sans-serif" font-size="10" fill="#475569">Captures light energy for photosynthesis ($CO_2 + H_2O$)</text>

    <line x1="15" y1="78" x2="825" y2="78" stroke="#e2e8f0" stroke-width="1" />
    <text x="25" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155">Large Permanent Vacuole</text>
    <text x="340" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ef4444">✕ Small/temporary only</text>
    <text x="510" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#16a34a">✓ Present (central sap)</text>
    <text x="610" y="92" font-family="system-ui, sans-serif" font-size="10" fill="#475569">Maintains hydrostatic pressure against cellulose wall</text>

    <line x1="15" y1="100" x2="825" y2="100" stroke="#e2e8f0" stroke-width="1" />
    <text x="25" y="112" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#334155">Carbohydrate Storage</text>
    <text x="340" y="112" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#be123c">Glycogen granules</text>
    <text x="510" y="112" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#15803d">Starch granules</text>
    <text x="610" y="112" font-family="system-ui, sans-serif" font-size="10" fill="#475569">Insoluble polymers; tested with iodine solution</text>
  </g>
</svg>`,

  "rock-cycle.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 500" width="100%" height="auto" class="rounded-2xl bg-white shadow-sm border border-slate-200">
  <defs>
    <linearGradient id="magmaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#991b1b" />
    </linearGradient>
    <linearGradient id="igneousGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f97316" />
      <stop offset="100%" stop-color="#c2410c" />
    </linearGradient>
    <linearGradient id="sedimentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#eab308" />
      <stop offset="100%" stop-color="#a16207" />
    </linearGradient>
    <linearGradient id="metaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6" />
      <stop offset="100%" stop-color="#5b21b6" />
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#475569" />
    </marker>
  </defs>
  <rect x="0" y="0" width="840" height="52" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
  <text x="420" y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">
    The Geological Rock Cycle
  </text>
  <g transform="translate(320, 380)">
    <rect x="0" y="0" width="200" height="65" rx="16" fill="url(#magmaGrad)" stroke="#7f1d1d" stroke-width="2" />
    <text x="100" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff">MAGMA &amp; LAVA</text>
    <text x="100" y="48" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#fef2f2">Molten rock deep in mantle/crust</text>
  </g>
  <g transform="translate(60, 150)">
    <rect x="0" y="0" width="220" height="75" rx="16" fill="url(#igneousGrad)" stroke="#9a3412" stroke-width="2" />
    <text x="110" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff">IGNEOUS ROCKS</text>
    <text x="110" y="48" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#fff7ed">Granite (intrusive) · Basalt (extrusive)</text>
  </g>
  <g transform="translate(560, 150)">
    <rect x="0" y="0" width="220" height="75" rx="16" fill="url(#sedimentGrad)" stroke="#78350f" stroke-width="2" />
    <text x="110" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff">SEDIMENTARY ROCKS</text>
    <text x="110" y="48" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#fefce8">Limestone · Sandstone · Shale</text>
  </g>
  <g transform="translate(310, 70)">
    <rect x="0" y="0" width="220" height="70" rx="16" fill="url(#metaGrad)" stroke="#4c1d95" stroke-width="2" />
    <text x="110" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff">METAMORPHIC ROCKS</text>
    <text x="110" y="48" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#ede9fe">Marble · Slate · Gneiss</text>
  </g>
  <path d="M 340 380 Q 200 320 170 230" fill="none" stroke="#475569" stroke-width="2.5" marker-end="url(#arrow)" />
  <path d="M 285 185 L 555 185" fill="none" stroke="#475569" stroke-width="2.5" marker-end="url(#arrow)" />
  <path d="M 640 150 Q 560 90 535 95" fill="none" stroke="#475569" stroke-width="2.5" marker-end="url(#arrow)" />
  <path d="M 420 145 L 420 375" fill="none" stroke="#475569" stroke-width="2.5" marker-end="url(#arrow)" />
</svg>`,

  "demographic-transition.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 460" width="100%" height="auto" class="rounded-2xl bg-white shadow-sm border border-slate-200">
  <rect x="0" y="0" width="840" height="52" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
  <text x="420" y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">
    The Demographic Transition Model (DTM)
  </text>
  <g transform="translate(80, 80)">
    <!-- 5 Stage Columns -->
    <rect x="0" y="0" width="130" height="300" fill="#f8fafc" opacity="0.6" />
    <rect x="130" y="0" width="140" height="300" fill="#f1f5f9" opacity="0.6" />
    <rect x="270" y="0" width="140" height="300" fill="#f8fafc" opacity="0.6" />
    <rect x="410" y="0" width="140" height="300" fill="#f1f5f9" opacity="0.6" />
    <rect x="550" y="0" width="140" height="300" fill="#f8fafc" opacity="0.6" />

    <!-- Stage Headers -->
    <text x="65" y="25" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155">Stage 1</text>
    <text x="65" y="42" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">High Fluctuating</text>

    <text x="200" y="25" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155">Stage 2</text>
    <text x="200" y="42" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">Early Expanding</text>

    <text x="340" y="25" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155">Stage 3</text>
    <text x="340" y="42" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">Late Expanding</text>

    <text x="480" y="25" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155">Stage 4</text>
    <text x="480" y="42" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">Low Fluctuating</text>

    <text x="620" y="25" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155">Stage 5</text>
    <text x="620" y="42" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">Natural Decline</text>

    <!-- Birth Rate Curve (Green) -->
    <path d="M 0 80 Q 70 85 130 80 L 270 80 Q 340 140 410 220 L 550 230 Q 620 250 690 260" fill="none" stroke="#16a34a" stroke-width="3" />
    <text x="280" y="75" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#16a34a">Birth Rate</text>

    <!-- Death Rate Curve (Red) -->
    <path d="M 0 90 Q 70 95 130 90 Q 200 160 270 210 L 410 230 L 550 230 L 690 220" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="6,3" />
    <text x="140" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">Death Rate</text>

    <!-- Total Population Curve (Blue) -->
    <path d="M 0 260 L 130 260 Q 270 220 410 140 Q 500 100 550 90 L 690 105" fill="none" stroke="#2563eb" stroke-width="3.5" />
    <text x="430" y="115" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#2563eb">Total Population</text>

    <!-- Natural Increase Shaded Area in Stage 2 & 3 -->
    <rect x="180" y="270" width="190" height="24" rx="6" fill="#dcfce7" stroke="#86efac" />
    <text x="275" y="286" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d">
      Rapid Natural Increase
    </text>
  </g>
</svg>`,

  "plate-tectonics.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="auto" class="rounded-2xl bg-white shadow-sm border border-slate-200">
  <defs>
    <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>
    <linearGradient id="mantleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ea580c" />
      <stop offset="100%" stop-color="#991b1b" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="840" height="52" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
  <text x="420" y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">
    Destructive (Convergent) Plate Boundary
  </text>
  <g transform="translate(60, 80)">
    <!-- Asthenosphere Mantle -->
    <rect x="0" y="200" width="720" height="170" fill="url(#mantleGrad)" />
    <text x="360" y="320" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#fef2f2">
      Semi-Molten Mantle (Asthenosphere) · High Heat &amp; Convection Currents
    </text>

    <!-- Ocean Water -->
    <rect x="0" y="50" width="320" height="70" fill="url(#oceanGrad)" opacity="0.8" />
    <text x="160" y="85" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff">
      Oceanic Trench (Deep Ocean)
    </text>

    <!-- Dense Oceanic Plate Subducting -->
    <path d="M 0 120 L 260 120 L 440 280 L 380 320 L 220 170 L 0 170 Z" fill="#475569" stroke="#334155" stroke-width="2" />
    <text x="110" y="150" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">
      Dense Oceanic Crust (Basalt) →
    </text>

    <!-- Continental Plate & Fold Mountains / Volcano -->
    <path d="M 280 120 Q 320 60 420 30 Q 480 10 540 50 L 720 70 L 720 200 L 460 200 Z" fill="#a16207" stroke="#78350f" stroke-width="2" />
    <text x="560" y="120" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff">
      Continental Plate (Granite)
    </text>

    <!-- Composite Volcano Vent & Magma Chamber -->
    <path d="M 480 200 Q 480 120 480 40" stroke="#f97316" stroke-width="8" fill="none" />
    <circle cx="480" cy="210" r="30" fill="#ef4444" />
    <text x="480" y="215" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#ffffff">Magma</text>

    <!-- Ash Cloud -->
    <ellipse cx="480" cy="20" rx="35" ry="16" fill="#64748b" opacity="0.8" />
    <text x="480" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#ffffff">Eruption</text>

    <!-- Subduction Zone Callout -->
    <rect x="250" y="230" width="130" height="24" rx="6" fill="#fee2e2" stroke="#fca5a5" />
    <text x="315" y="246" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#b91c1c">
      Subduction Zone
    </text>
  </g>
</svg>`,

  "fractional-distillation.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="auto" class="rounded-2xl bg-white shadow-sm border border-slate-200">
  <rect x="0" y="0" width="840" height="52" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
  <text x="420" y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">
    Fractional Distillation of Crude Oil
  </text>
  <g transform="translate(100, 80)">
    <!-- Distillation Tower -->
    <rect x="160" y="20" width="140" height="340" rx="16" fill="#e2e8f0" stroke="#475569" stroke-width="3" />

    <!-- Hot at bottom, cool at top gradient -->
    <text x="130" y="45" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb">Cool (20°C) ↑</text>
    <text x="130" y="345" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">Hot (350°C) ↓</text>

    <!-- Crude oil in -->
    <line x1="60" y1="310" x2="160" y2="310" stroke="#0f172a" stroke-width="6" />
    <text x="50" y="305" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">Crude Oil (Heated)</text>

    <!-- Fraction Outlets & Labels -->
    <!-- 1. Refinery Gas -->
    <line x1="300" y1="50" x2="400" y2="50" stroke="#3b82f6" stroke-width="4" />
    <text x="410" y="54" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e40af">Refinery Gas (Bottled cooking gas, C1–C4)</text>

    <!-- 2. Petrol / Gasoline -->
    <line x1="300" y1="100" x2="400" y2="100" stroke="#10b981" stroke-width="4" />
    <text x="410" y="104" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#065f46">Gasoline / Petrol (Car fuel, C5–C10)</text>

    <!-- 3. Naphtha -->
    <line x1="300" y1="150" x2="400" y2="150" stroke="#f59e0b" stroke-width="4" />
    <text x="410" y="154" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#92400e">Naphtha (Chemical feedstock for plastics)</text>

    <!-- 4. Kerosene -->
    <line x1="300" y1="200" x2="400" y2="200" stroke="#f97316" stroke-width="4" />
    <text x="410" y="204" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#9a3412">Kerosene / Paraffin (Jet aircraft fuel)</text>

    <!-- 5. Diesel -->
    <line x1="300" y1="250" x2="400" y2="250" stroke="#ea580c" stroke-width="4" />
    <text x="410" y="254" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#7c2d12">Diesel Oil (Lorries, trains, buses)</text>

    <!-- 6. Bitumen (Bottom) -->
    <line x1="300" y1="330" x2="400" y2="330" stroke="#1e293b" stroke-width="6" />
    <text x="410" y="334" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">Bitumen / Residue (Road surfacing, roofing)</text>
  </g>
</svg>`,

  "supply-demand.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 460" width="100%" height="auto" class="rounded-2xl bg-white shadow-sm border border-slate-200">
  <rect x="0" y="0" width="840" height="52" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
  <text x="420" y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">
    Market Equilibrium (Supply &amp; Demand)
  </text>
  <g transform="translate(140, 80)">
    <!-- Axes -->
    <line x1="60" y1="300" x2="560" y2="300" stroke="#334155" stroke-width="2.5" />
    <text x="575" y="305" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155">Quantity (Q)</text>

    <line x1="60" y1="300" x2="60" y2="40" stroke="#334155" stroke-width="2.5" />
    <text x="60" y="25" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155">Price (P)</text>

    <!-- Demand Curve D (Downward sloping) -->
    <line x1="100" y1="70" x2="480" y2="270" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" />
    <text x="490" y="275" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#2563eb">D</text>

    <!-- Supply Curve S (Upward sloping) -->
    <line x1="100" y1="270" x2="480" y2="70" stroke="#16a34a" stroke-width="3.5" stroke-linecap="round" />
    <text x="490" y="75" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#16a34a">S</text>

    <!-- Equilibrium Point E at (290, 170) -->
    <circle cx="290" cy="170" r="7" fill="#dc2626" stroke="#ffffff" stroke-width="2" />
    <text x="310" y="165" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626">Equilibrium (E*)</text>

    <!-- Dashed Equilibrium lines -->
    <line x1="60" y1="170" x2="290" y2="170" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,4" />
    <text x="40" y="174" text-anchor="end" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#dc2626">P*</text>

    <line x1="290" y1="170" x2="290" y2="300" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,4" />
    <text x="290" y="320" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#dc2626">Q*</text>
  </g>
</svg>`,

  "quadratic-graph.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="auto" class="rounded-2xl bg-white shadow-sm border border-slate-200">
  <defs>
    <linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563eb" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="840" height="52" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
  <text x="420" y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">
    Quadratic Function Parabola Anatomy
  </text>
  <g transform="translate(100, 80)">
    <line x1="20" y1="240" x2="620" y2="240" stroke="#334155" stroke-width="2" />
    <text x="635" y="244" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155">x</text>
    <line x1="320" y1="320" x2="320" y2="20" stroke="#334155" stroke-width="2" />
    <text x="320" y="10" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155">y</text>
    <line x1="320" y1="30" x2="320" y2="330" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,4" />
    <rect x="235" y="35" width="170" height="22" rx="6" fill="#fee2e2" stroke="#fca5a5" />
    <text x="320" y="50" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b91c1c">Axis of Symmetry: x = -b / 2a</text>
    <path d="M 120 60 Q 320 400 520 60" fill="none" stroke="url(#curveGrad)" stroke-width="4" stroke-linecap="round" />
    <circle cx="215" cy="240" r="6" fill="#16a34a" stroke="#ffffff" stroke-width="2" />
    <text x="205" y="270" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d">Root x₁ (y = 0)</text>
    <circle cx="425" cy="240" r="6" fill="#16a34a" stroke="#ffffff" stroke-width="2" />
    <text x="435" y="270" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d">Root x₂ (y = 0)</text>
    <circle cx="320" cy="290" r="7" fill="#dc2626" stroke="#ffffff" stroke-width="2" />
    <text x="320" y="321" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#991b1b">Vertex Minimum (h, k)</text>
  </g>
</svg>`,

  "computer-architecture.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="auto" class="rounded-2xl bg-white shadow-sm border border-slate-200">
  <defs>
    <linearGradient id="cpuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="memGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
    <linearGradient id="ioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#b45309" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="840" height="52" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
  <text x="420" y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">
    Von Neumann Computer Architecture &amp; System Buses
  </text>
  <g transform="translate(60, 90)">
    <rect x="0" y="0" width="240" height="280" rx="18" fill="#f8fafc" stroke="#2563eb" stroke-width="2.5" />
    <rect x="0" y="0" width="240" height="42" rx="18" fill="url(#cpuGrad)" />
    <text x="120" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff">CENTRAL PROCESSING UNIT</text>
    <rect x="20" y="55" width="200" height="50" rx="10" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" />
    <text x="120" y="77" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e40af">Arithmetic Logic Unit (ALU)</text>
    <rect x="20" y="115" width="200" height="50" rx="10" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" />
    <text x="120" y="137" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e40af">Control Unit (CU)</text>
    <rect x="20" y="175" width="200" height="90" rx="10" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" />
    <text x="120" y="195" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">High-Speed Internal Registers</text>
    <text x="30" y="218" font-family="monospace" font-size="11" fill="#0f172a">• PC (Program Counter)</text>
    <text x="30" y="236" font-family="monospace" font-size="11" fill="#0f172a">• MAR &amp; MDR Registers</text>
    <text x="30" y="254" font-family="monospace" font-size="11" fill="#0f172a">• ACC (Accumulator)</text>
  </g>
  <g transform="translate(540, 90)">
    <rect x="0" y="0" width="240" height="130" rx="18" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5" />
    <rect x="0" y="0" width="240" height="42" rx="18" fill="url(#memGrad)" />
    <text x="120" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff">PRIMARY MEMORY (RAM &amp; ROM)</text>
    <text x="120" y="70" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#14532d">RAM: Volatile Working Memory</text>
    <text x="120" y="112" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#047857">ROM: Non-volatile BIOS</text>
  </g>
  <g transform="translate(540, 240)">
    <rect x="0" y="0" width="240" height="130" rx="18" fill="#fffbeb" stroke="#d97706" stroke-width="2.5" />
    <rect x="0" y="0" width="240" height="42" rx="18" fill="url(#ioGrad)" />
    <text x="120" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff">INPUT / OUTPUT &amp; STORAGE</text>
    <text x="120" y="70" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#78350f">Input: Keyboard, Mouse, Sensors</text>
    <text x="120" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#92400e">Output: Displays, Audio</text>
  </g>
</svg>`,

  "biology-classification.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 380" width="100%" height="auto" class="rounded-2xl bg-white shadow-sm border border-slate-200">
    <rect width="840" height="46" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1"/>
    <text x="420" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#14532d">5 Kingdoms &amp; Dichotomous Key</text>
    <g transform="translate(40, 75)">
      <rect x="0" y="0" width="130" height="60" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
      <text x="65" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#065f46">Animalia</text>
      <text x="65" y="44" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#047857">Multicellular, no wall</text>

      <rect x="150" y="0" width="130" height="60" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="215" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e40af">Plantae</text>
      <text x="215" y="44" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1d4ed8">Cellulose wall &amp; chloro</text>

      <rect x="300" y="0" width="130" height="60" rx="10" fill="#fefce8" stroke="#eab308" stroke-width="2"/>
      <text x="365" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#854d0e">Fungi</text>
      <text x="365" y="44" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#a16207">Chitin wall, saprotrophic</text>

      <rect x="450" y="0" width="130" height="60" rx="10" fill="#faf5ff" stroke="#a855f7" stroke-width="2"/>
      <text x="515" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#6b21a8">Protoctista</text>
      <text x="515" y="44" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7e22ce">Single/colonial eukaryote</text>

      <rect x="600" y="0" width="140" height="60" rx="10" fill="#fff1f2" stroke="#f43f5e" stroke-width="2"/>
      <text x="670" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#9f1239">Prokaryotae</text>
      <text x="670" y="44" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#be123c">No true nucleus, 70S</text>
    </g>
    <g transform="translate(80, 175)">
      <rect x="0" y="0" width="680" height="155" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="340" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Dichotomous Key Decision Logic (Pairwise Couplets)</text>
      <path d="M 120 45 L 120 80 L 260 80 M 120 80 L 120 125 L 260 125" fill="none" stroke="#64748b" stroke-width="2"/>
      <text x="270" y="84" font-family="monospace" font-size="11" fill="#334155">1a. Has jointed legs ................................... Go to 2</text>
      <text x="270" y="129" font-family="monospace" font-size="11" fill="#334155">1b. No jointed legs (annelid / mollusc) ................ Annelida</text>
    </g>
  </svg>`,

  "biology-enzyme.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 380" width="100%" height="auto" class="rounded-2xl bg-white shadow-sm border border-slate-200">
    <rect width="840" height="46" fill="#fef2f2" stroke="#fecaca" stroke-width="1"/>
    <text x="420" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#991b1b">Enzyme Action: Lock &amp; Key Hypothesis &amp; Active Site</text>
    <g transform="translate(50, 80)">
      <!-- Enzyme shape -->
      <path d="M 40 180 C 40 100, 100 60, 180 60 C 210 60, 220 90, 240 110 C 260 130, 280 130, 300 110 C 320 90, 330 60, 360 60 C 440 60, 500 100, 500 180 C 500 240, 440 280, 270 280 C 100 280, 40 240, 40 180 Z" fill="#e0e7ff" stroke="#4338ca" stroke-width="3"/>
      <text x="270" y="220" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#3730a3">ENZYME</text>
      <text x="270" y="145" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#4f46e5">Active Site</text>
      <!-- Substrate fitting in -->
      <path d="M 230 40 L 310 40 L 290 85 L 250 85 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/>
      <text x="270" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#854d0e">Substrate (Complementary Shape)</text>
    </g>
    <g transform="translate(560, 100)">
      <rect width="230" height="180" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="115" y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Key Principles</text>
      <text x="20" y="65" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Substrate binds to Active Site</text>
      <text x="20" y="92" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Forms Enzyme-Substrate Complex</text>
      <text x="20" y="120" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Reaction lowers Activation Energy</text>
      <text x="20" y="148" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• High temp/pH causes Denaturation</text>
    </g>
  </svg>`,

  "biology-photosynthesis.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 380" width="100%" height="auto" class="rounded-2xl bg-white shadow-sm border border-slate-200">
    <rect width="840" height="46" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
    <text x="420" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#065f46">Plant Nutrition: Chloroplast Anatomy &amp; Photosynthetic Stages</text>
    <g transform="translate(60, 80)">
      <!-- Chloroplast outer and inner envelope -->
      <ellipse cx="260" cy="140" rx="230" ry="115" fill="#f0fdf4" stroke="#16a34a" stroke-width="3"/>
      <ellipse cx="260" cy="140" rx="215" ry="100" fill="none" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,2"/>
      <!-- Thylakoid grana stack -->
      <rect x="120" y="110" width="60" height="16" rx="6" fill="#15803d"/>
      <rect x="120" y="130" width="60" height="16" rx="6" fill="#15803d"/>
      <rect x="120" y="150" width="60" height="16" rx="6" fill="#15803d"/>
      <text x="150" y="190" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d">Granum (Thylakoids)</text>
      <!-- Stroma -->
      <text x="360" y="145" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d">Stroma (Fluid Matrix)</text>
      <text x="360" y="165" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#166534">Calvin Cycle &amp; Glucose synthesis</text>
    </g>
    <g transform="translate(560, 100)">
      <rect width="240" height="175" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="120" y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Balanced Equation</text>
      <text x="120" y="65" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#15803d">6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</text>
      <text x="20" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Chlorophyll absorbs light energy</text>
      <text x="20" y="130" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Photolysis splits H₂O → H⁺ + O₂</text>
      <text x="20" y="155" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Limiting factors: Light, CO₂, Temp</text>
    </g>
  </svg>`,

  "chemistry-states-matter.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 380" width="100%" height="auto" class="rounded-2xl bg-white shadow-sm border border-slate-200">
    <rect width="840" height="46" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="420" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#1e40af">Chemistry: Kinetic Particle Theory (Solid, Liquid, Gas Transitions)</text>
    <g transform="translate(50, 80)">
      <!-- Solid Box -->
      <rect x="0" y="20" width="190" height="190" rx="12" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
      <text x="95" y="45" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af">SOLID</text>
      <g fill="#2563eb">
        <circle cx="50" cy="80" r="14"/><circle cx="85" cy="80" r="14"/><circle cx="120" cy="80" r="14"/>
        <circle cx="50" cy="115" r="14"/><circle cx="85" cy="115" r="14"/><circle cx="120" cy="115" r="14"/>
        <circle cx="50" cy="150" r="14"/><circle cx="85" cy="150" r="14"/><circle cx="120" cy="150" r="14"/>
      </g>
      <text x="95" y="195" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">Regular lattice · Vibrate in place</text>

      <!-- Liquid Box -->
      <rect x="250" y="20" width="190" height="190" rx="12" fill="#f8fafc" stroke="#06b6d4" stroke-width="2"/>
      <text x="345" y="45" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0891b2">LIQUID</text>
      <g fill="#0891b2">
        <circle cx="285" cy="85" r="14"/><circle cx="330" cy="95" r="14"/><circle cx="380" cy="80" r="14"/>
        <circle cx="300" cy="130" r="14"/><circle cx="350" cy="140" r="14"/><circle cx="395" cy="125" r="14"/>
        <circle cx="320" cy="170" r="14"/><circle cx="370" cy="175" r="14"/>
      </g>
      <text x="345" y="195" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">Random, touching · Slide past</text>

      <!-- Gas Box -->
      <rect x="500" y="20" width="190" height="190" rx="12" fill="#f8fafc" stroke="#ec4899" stroke-width="2"/>
      <text x="595" y="45" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#be185d">GAS</text>
      <g fill="#db2777">
        <circle cx="535" cy="80" r="14"/><circle cx="640" cy="95" r="14"/><circle cx="585" cy="145" r="14"/><circle cx="620" cy="170" r="14"/>
      </g>
      <text x="595" y="195" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">Far apart · Rapid, random motion</text>
    </g>
    <text x="420" y="335" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#475569">
      Melting (Solid → Liquid) · Boiling/Evaporation (Liquid → Gas) · Sublimation (Solid → Gas)
    </text>
  </svg>`,

  "chemistry-mole-triangle.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 380" width="100%" height="auto" class="rounded-2xl bg-white shadow-sm border border-slate-200">
    <rect width="840" height="46" fill="#fdf4ff" stroke="#f5d0fe" stroke-width="1"/>
    <text x="420" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#86198f">The 3 Essential Mole Calculation Triangles</text>
    <g transform="translate(50, 75)">
      <!-- Triangle 1: Mass -->
      <polygon points="110,20 20,180 200,180" fill="#fdf2f8" stroke="#ec4899" stroke-width="2.5"/>
      <line x1="45" y1="120" x2="175" y2="120" stroke="#ec4899" stroke-width="2"/>
      <line x1="110" y1="120" x2="110" y2="180" stroke="#ec4899" stroke-width="2"/>
      <text x="110" y="85" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#9d174d">Mass (g)</text>
      <text x="70" y="155" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#be185d">Moles</text>
      <text x="150" y="155" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#be185d">Mr / Ar</text>
      <text x="110" y="215" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#9d174d">Moles = Mass / Mr</text>

      <!-- Triangle 2: Gas Volume -->
      <polygon points="370,20 280,180 460,180" fill="#eff6ff" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="305" y1="120" x2="435" y2="120" stroke="#3b82f6" stroke-width="2"/>
      <line x1="370" y1="120" x2="370" y2="180" stroke="#3b82f6" stroke-width="2"/>
      <text x="370" y="85" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e40af">Vol (dm³)</text>
      <text x="330" y="155" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#2563eb">Moles</text>
      <text x="410" y="155" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#2563eb">24 dm³</text>
      <text x="370" y="215" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#1e40af">Vol = Moles × 24</text>

      <!-- Triangle 3: Solutions -->
      <polygon points="630,20 540,180 720,180" fill="#ecfdf5" stroke="#10b981" stroke-width="2.5"/>
      <line x1="565" y1="120" x2="695" y2="120" stroke="#10b981" stroke-width="2"/>
      <line x1="630" y1="120" x2="630" y2="180" stroke="#10b981" stroke-width="2"/>
      <text x="630" y="85" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#065f46">Moles</text>
      <text x="590" y="155" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#059669">Conc</text>
      <text x="670" y="155" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#059669">Vol(dm³)</text>
      <text x="630" y="215" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#065f46">Moles = Conc × Vol</text>
    </g>
  </svg>`,

  "physics-refraction.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 380" width="100%" height="auto" class="rounded-2xl bg-white shadow-sm border border-slate-200">
    <rect width="840" height="46" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1"/>
    <text x="420" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0369a1">Physics: Ray Optics, Refraction &amp; Snell's Law</text>
    <g transform="translate(50, 75)">
      <!-- Glass Block -->
      <rect x="150" y="90" width="360" height="150" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" opacity="0.8"/>
      <text x="170" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0369a1">Glass Medium (n = 1.5)</text>
      <text x="170" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#64748b">Air (n = 1.0)</text>
      <!-- Normal line -->
      <line x1="330" y1="20" x2="330" y2="280" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,4"/>
      <text x="335" y="35" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">Normal</text>
      <!-- Incident Ray -->
      <line x1="200" y1="10" x2="330" y2="90" stroke="#ef4444" stroke-width="3"/>
      <!-- Refracted Ray inside glass -->
      <line x1="330" y1="90" x2="380" y2="240" stroke="#ef4444" stroke-width="3"/>
      <!-- Emergent Ray in air -->
      <line x1="380" y1="240" x2="510" y2="320" stroke="#ef4444" stroke-width="3"/>
      <!-- Angles -->
      <text x="290" y="70" font-family="monospace" font-size="13" font-weight="700" fill="#b91c1c">Angle i</text>
      <text x="350" y="135" font-family="monospace" font-size="13" font-weight="700" fill="#b91c1c">Angle r</text>
    </g>
    <g transform="translate(580, 95)">
      <rect width="210" height="180" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="105" y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Snell's Law Formula</text>
      <text x="105" y="65" text-anchor="middle" font-family="monospace" font-size="13" font-weight="800" fill="#0284c7">n = sin(i) / sin(r)</text>
      <text x="20" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Ray bends towards normal</text>
      <text x="20" y="130" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Speed slows down in glass</text>
      <text x="20" y="155" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Critical angle: sin(c) = 1/n</text>
    </g>
  </svg>`,

  "cs-logic-gates.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 380" width="100%" height="auto" class="rounded-2xl bg-white shadow-sm border border-slate-200">
    <rect width="840" height="46" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
    <text x="420" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#5b21b6">Computer Science: Standard Logic Gates &amp; Truth Tables</text>
    <g transform="translate(50, 75)">
      <!-- AND Gate -->
      <rect x="0" y="20" width="220" height="110" rx="10" fill="#f8fafc" stroke="#8b5cf6" stroke-width="2"/>
      <text x="110" y="45" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#6d28d9">AND Gate (A · B)</text>
      <path d="M 35 65 L 75 65 C 95 65, 95 95, 75 95 L 35 95 Z" fill="#ede9fe" stroke="#6d28d9" stroke-width="2"/>
      <text x="160" y="85" text-anchor="middle" font-family="monospace" font-size="11" fill="#334155">1 &amp; 1 = 1</text>

      <!-- OR Gate -->
      <rect x="260" y="20" width="220" height="110" rx="10" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
      <text x="370" y="45" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1d4ed8">OR Gate (A + B)</text>
      <path d="M 290 65 Q 310 80 290 95 C 320 95, 335 85, 345 80 C 335 75, 320 65, 290 65 Z" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
      <text x="420" y="85" text-anchor="middle" font-family="monospace" font-size="11" fill="#334155">1 OR 0 = 1</text>

      <!-- NOT Gate -->
      <rect x="520" y="20" width="220" height="110" rx="10" fill="#f8fafc" stroke="#ec4899" stroke-width="2"/>
      <text x="630" y="45" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#be185d">NOT Gate (Inverter)</text>
      <polygon points="560,65 560,95 590,80" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>
      <circle cx="594" cy="80" r="3.5" fill="none" stroke="#be185d" stroke-width="2"/>
      <text x="670" y="85" text-anchor="middle" font-family="monospace" font-size="11" fill="#334155">NOT 1 = 0</text>
    </g>
    <g transform="translate(100, 220)">
      <rect width="640" height="90" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="320" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">Universal NAND &amp; NOR Logic</text>
      <text x="320" y="55" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#475569">NAND is NOT-AND: outputs 0 ONLY when both inputs are 1.</text>
      <text x="320" y="75" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#475569">XOR (Exclusive OR): outputs 1 ONLY when inputs are different.</text>
    </g>
  </svg>`,
  "biological-molecules-overview.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 680" width="100%" height="auto">
  <!-- Top Left: Lipids -->
  <g transform="translate(60, 20)">
    <!-- LIPID Box -->
    <rect x="180" y="0" width="120" height="28" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/>
    <text x="240" y="19" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#dc2626">LIPID (C, H, O)</text>

    <!-- Note box -->
    <rect x="70" y="40" width="95" height="52" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
    <text x="117.5" y="58" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e293b">NOTE: LIPIDS</text>
    <text x="117.5" y="72" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e293b">ARE NOT</text>
    <text x="117.5" y="86" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e293b">POLYMERS</text>

    <!-- Pointer arrow from note to Triglyceride -->
    <path d="M 165 65 Q 185 65 200 65" fill="none" stroke="#1e293b" stroke-width="1.5"/>
    <polygon points="198,61 206,65 198,69" fill="#1e293b"/>
    <text x="215" y="69" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#7c3aed">e.g. TRIGLYCERIDE</text>

    <!-- Triglyceride diagram -->
    <g transform="translate(240, 85)">
      <!-- Glycerol backbone -->
      <rect x="0" y="0" width="10" height="42" fill="#4ade80" stroke="#16a34a" stroke-width="1.5"/>
      <!-- 3 fatty acid tails -->
      <path d="M 10 7 Q 16 2 22 7 T 34 7 T 46 7" fill="none" stroke="#1e293b" stroke-width="1.5"/>
      <path d="M 10 21 Q 16 16 22 21 T 34 21 T 46 21" fill="none" stroke="#1e293b" stroke-width="1.5"/>
      <path d="M 10 35 Q 16 30 22 35 T 34 35 T 46 35" fill="none" stroke="#1e293b" stroke-width="1.5"/>
    </g>

    <!-- Glycerol + Fatty acids labels below -->
    <g transform="translate(160, 145)">
      <rect x="0" y="0" width="70" height="24" rx="3" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="35" y="16" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0284c7">GLYCEROL</text>
      
      <text x="85" y="17" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">+</text>

      <rect x="105" y="0" width="55" height="40" rx="3" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="132.5" y="16" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0284c7">FATTY</text>
      <text x="132.5" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0284c7">ACIDS</text>

      <!-- Second Triglyceride breakdown sketch -->
      <rect x="70" y="45" width="10" height="42" fill="#4ade80" stroke="#16a34a" stroke-width="1.5"/>
      <path d="M 100 52 Q 106 47 112 52 T 124 52 T 136 52" fill="none" stroke="#1e293b" stroke-width="1.5"/>
      <path d="M 100 66 Q 106 61 112 66 T 124 66 T 136 66" fill="none" stroke="#1e293b" stroke-width="1.5"/>
      <path d="M 100 80 Q 106 75 112 80 T 124 80 T 136 80" fill="none" stroke="#1e293b" stroke-width="1.5"/>
    </g>

    <!-- KEY Box -->
    <g transform="translate(50, 240)">
      <rect x="0" y="0" width="115" height="85" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
      <text x="10" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e293b">KEY:</text>
      <text x="10" y="38" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">MACROMOLECULE</text>
      <text x="10" y="56" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#16a34a">POLYMER</text>
      <text x="10" y="74" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0284c7">MONOMER</text>
    </g>
  </g>

  <!-- Top Right: Nucleic Acids (DNA) -->
  <g transform="translate(560, 20)">
    <rect x="40" y="0" width="130" height="28" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/>
    <text x="105" y="19" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#dc2626">NUCLEIC ACID</text>
    <text x="105" y="44" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#16a34a">DNA</text>

    <!-- DNA Ladder: Phosphates (red/pink circles), Pentoses (cyan pentagons), Nitrogenous Bases (green bars) -->
    <g transform="translate(10, 60)">
      <!-- Row 1 -->
      <circle cx="10" cy="15" r="7" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/>
      <polygon points="35,5 45,12 41,25 29,25 25,12" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
      <rect x="47" y="10" width="40" height="8" rx="2" fill="#4ade80" stroke="#16a34a" stroke-width="1.2"/>
      <rect x="90" y="10" width="40" height="8" rx="2" fill="#4ade80" stroke="#16a34a" stroke-width="1.2"/>
      <polygon points="142,5 152,12 148,25 136,25 132,12" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
      <circle cx="167" cy="15" r="7" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/>

      <!-- Row 2 -->
      <circle cx="10" cy="50" r="7" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/>
      <polygon points="35,40 45,47 41,60 29,60 25,47" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
      <rect x="47" y="45" width="40" height="8" rx="2" fill="#4ade80" stroke="#16a34a" stroke-width="1.2"/>
      <rect x="90" y="45" width="40" height="8" rx="2" fill="#4ade80" stroke="#16a34a" stroke-width="1.2"/>
      <polygon points="142,40 152,47 148,60 136,60 132,47" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
      <circle cx="167" cy="50" r="7" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/>

      <!-- Row 3 -->
      <circle cx="10" cy="85" r="7" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/>
      <polygon points="35,75 45,82 41,95 29,95 25,82" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
      <rect x="47" y="80" width="40" height="8" rx="2" fill="#4ade80" stroke="#16a34a" stroke-width="1.2"/>
      <rect x="90" y="80" width="40" height="8" rx="2" fill="#4ade80" stroke="#16a34a" stroke-width="1.2"/>
      <polygon points="142,75 152,82 148,95 136,95 132,82" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
      <circle cx="167" cy="85" r="7" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/>

      <!-- Backbone connection lines -->
      <line x1="35" y1="25" x2="35" y2="40" stroke="#0284c7" stroke-width="1.5"/>
      <line x1="35" y1="60" x2="35" y2="75" stroke="#0284c7" stroke-width="1.5"/>
      <line x1="142" y1="25" x2="142" y2="40" stroke="#0284c7" stroke-width="1.5"/>
      <line x1="142" y1="60" x2="142" y2="75" stroke="#0284c7" stroke-width="1.5"/>
    </g>

    <!-- NUCLEOTIDE Box and labels -->
    <g transform="translate(45, 185)">
      <rect x="0" y="0" width="90" height="24" rx="3" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="45" y="16" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0284c7">NUCLEOTIDE</text>

      <!-- Single nucleotide illustration below -->
      <g transform="translate(0, 35)">
        <rect x="15" y="-12" width="65" height="20" fill="#ffffff" stroke="#1e293b" stroke-width="1"/>
        <text x="47.5" y="2" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#1e293b">PHOSPHATE</text>
        <path d="M 15 5 Q 5 15 0 25" fill="none" stroke="#1e293b" stroke-width="1"/>
        <circle cx="0" cy="27" r="6" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/>

        <polygon points="20,18 30,24 26,35 14,35 10,24" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="32" y="22" width="30" height="8" rx="2" fill="#4ade80" stroke="#16a34a" stroke-width="1.2"/>

        <rect x="-55" y="40" width="60" height="32" fill="#ffffff" stroke="#1e293b" stroke-width="1"/>
        <text x="-25" y="53" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#1e293b">PENTOSE</text>
        <text x="-25" y="65" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#1e293b">SUGAR</text>
        <path d="M 5 45 Q 12 38 18 35" fill="none" stroke="#1e293b" stroke-width="1"/>

        <rect x="45" y="40" width="85" height="32" fill="#ffffff" stroke="#1e293b" stroke-width="1"/>
        <text x="87.5" y="53" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#1e293b">NITROGENOUS</text>
        <text x="87.5" y="65" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#1e293b">BASE</text>
        <path d="M 45 45 Q 38 35 32 30" fill="none" stroke="#1e293b" stroke-width="1"/>
      </g>
    </g>
  </g>

  <!-- Lower Section: Inorganic vs Organic -->
  <g transform="translate(60, 345)">
    <!-- Inorganic (Water) -->
    <g transform="translate(50, 0)">
      <rect x="0" y="0" width="95" height="26" fill="#fef3c7" stroke="#d97706" stroke-width="1.2"/>
      <text x="47.5" y="17" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e">INORGANIC</text>

      <!-- Water Molecule -->
      <g transform="translate(47, 45)">
        <text x="0" y="-12" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#dc2626">δ−</text>
        <circle cx="0" cy="0" r="10" fill="#ffffff" stroke="#1e293b" stroke-width="1.5"/>
        <text x="0" y="4" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e293b">O</text>

        <line x1="-7" y1="7" x2="-22" y2="25" stroke="#1e293b" stroke-width="2"/>
        <text x="-26" y="15" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">δ+</text>
        <text x="-26" y="38" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e293b">H</text>

        <line x1="7" y1="7" x2="22" y2="25" stroke="#1e293b" stroke-width="2"/>
        <text x="26" y="15" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">δ+</text>
        <text x="26" y="38" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e293b">H</text>

        <text x="0" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#1e293b">105°</text>

        <text x="0" y="58" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b">WATER</text>
      </g>
    </g>

    <!-- Organic (All contain C and H) -->
    <g transform="translate(260, 0)">
      <rect x="40" y="0" width="120" height="26" fill="#fef3c7" stroke="#d97706" stroke-width="1.2"/>
      <text x="100" y="17" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e">ORGANIC</text>
      <text x="100" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ea580c">(ALL CONTAIN C AND H)</text>

      <!-- Protein -->
      <g transform="translate(-40, 45)">
        <rect x="0" y="0" width="155" height="26" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/>
        <text x="77.5" y="17" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">PROTEIN (C, H, O, N)</text>
        <text x="77.5" y="36" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#16a34a">POLYPEPTIDE</text>

        <!-- Polypeptide chain illustration -->
        <g transform="translate(10, 45)">
          <circle cx="10" cy="5" r="6" fill="#f87171"/>
          <line x1="16" y1="5" x2="26" y2="5" stroke="#1e293b" stroke-width="1.5"/>
          <rect x="26" y="0" width="12" height="10" fill="#4ade80"/>
          <line x1="38" y1="5" x2="48" y2="5" stroke="#1e293b" stroke-width="1.5"/>
          <polygon points="54,0 48,10 60,10" fill="#38bdf8"/>
          <line x1="60" y1="5" x2="70" y2="5" stroke="#1e293b" stroke-width="1.5"/>
          <ellipse cx="76" cy="5" rx="7" ry="5" fill="#fb923c"/>
          <line x1="83" y1="5" x2="93" y2="5" stroke="#1e293b" stroke-width="1.5"/>
          <circle cx="99" cy="5" r="6" fill="#f87171"/>

          <!-- Folded chain loop below -->
          <path d="M 99 11 Q 99 25 80 25 T 50 25 T 20 25" fill="none" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="2 2"/>
          <polygon points="26,20 20,30 32,30" fill="#38bdf8"/>
          <line x1="32" y1="25" x2="42" y2="25" stroke="#1e293b" stroke-width="1.5"/>
          <circle cx="48" cy="25" r="6" fill="#f87171"/>
          <line x1="54" y1="25" x2="64" y2="25" stroke="#1e293b" stroke-width="1.5"/>
          <polygon points="70,20 64,30 76,30" fill="#38bdf8"/>

          <rect x="25" y="42" width="90" height="22" rx="3" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
          <text x="70" y="56" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0284c7">AMINO ACID</text>
        </g>
      </g>

      <!-- Carbohydrate -->
      <g transform="translate(180, 45)">
        <rect x="0" y="0" width="170" height="26" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/>
        <text x="85" y="17" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">CARBOHYDRATE (C, H, O)</text>
        <text x="85" y="36" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#16a34a">POLYSACCHARIDE</text>

        <!-- Polysaccharide chain (hexagons) -->
        <g transform="translate(10, 45)">
          <!-- Main horizontal chain of hexagons -->
          <circle cx="10" cy="30" r="5" fill="#38bdf8"/>
          <line x1="15" y1="30" x2="25" y2="30" stroke="#1e293b" stroke-width="1.5"/>
          <circle cx="30" cy="30" r="5" fill="#38bdf8"/>
          <line x1="35" y1="30" x2="45" y2="30" stroke="#1e293b" stroke-width="1.5"/>
          <circle cx="50" cy="30" r="5" fill="#38bdf8"/>
          <line x1="55" y1="30" x2="65" y2="30" stroke="#1e293b" stroke-width="1.5"/>
          <circle cx="70" cy="30" r="5" fill="#38bdf8"/>
          <line x1="75" y1="30" x2="85" y2="30" stroke="#1e293b" stroke-width="1.5"/>
          <circle cx="90" cy="30" r="5" fill="#38bdf8"/>
          <line x1="95" y1="30" x2="105" y2="30" stroke="#1e293b" stroke-width="1.5"/>
          <circle cx="110" cy="30" r="5" fill="#38bdf8"/>
          <line x1="115" y1="30" x2="125" y2="30" stroke="#1e293b" stroke-width="1.5"/>
          <circle cx="130" cy="30" r="5" fill="#38bdf8"/>

          <!-- Branch -->
          <line x1="30" y1="25" x2="30" y2="15" stroke="#1e293b" stroke-width="1.5"/>
          <circle cx="30" cy="10" r="5" fill="#38bdf8"/>
          <line x1="30" y1="5" x2="30" y2="-5" stroke="#1e293b" stroke-width="1.5"/>
          <circle cx="30" cy="-10" r="5" fill="#38bdf8"/>

          <!-- Pointer to single unit -->
          <rect x="75" y="-12" width="75" height="26" fill="#ffffff" stroke="#1e293b" stroke-width="1"/>
          <text x="112.5" y="-1" text-anchor="middle" font-family="system-ui, sans-serif" font-size="8" font-weight="700">SINGLE UNIT</text>
          <text x="112.5" y="9" text-anchor="middle" font-family="system-ui, sans-serif" font-size="8" font-weight="700">OF SUGAR</text>
          <path d="M 75 0 Q 60 10 52 24" fill="none" stroke="#1e293b" stroke-width="1"/>

          <rect x="25" y="48" width="120" height="22" rx="3" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
          <text x="85" y="62" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0284c7">MONOSACCHARIDE</text>

          <circle cx="85" cy="82" r="6" fill="#38bdf8"/>
        </g>
      </g>
    </g>
  </g>

  <!-- Bottom Bracket & Living Organisms -->
  <g transform="translate(100, 520)">
    <!-- Curly bracket spanning width -->
    <path d="M 50 0 Q 350 20 350 35 Q 350 20 650 0" fill="none" stroke="#1e293b" stroke-width="1.5"/>

    <rect x="200" y="35" width="300" height="30" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
    <text x="350" y="54" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e293b" letter-spacing="0.5">BIOLOGICAL MOLECULES FOUND IN ALL LIVING ORGANISMS</text>

    <!-- Organisms: Bacterium, Euglena/Amoeba, Plant twig, Mushroom, Fish -->
    <g transform="translate(50, 75)">
      <!-- Bacterium with flagella -->
      <g transform="translate(80, 10)">
        <path d="M 0 0 C 15 -10 35 -10 45 0 C 35 10 15 10 0 0" fill="#818cf8" stroke="#3730a3" stroke-width="1.5"/>
        <path d="M 0 0 C -15 -15 -25 -5 -35 -10" fill="none" stroke="#ea580c" stroke-width="1.5"/>
        <path d="M 0 0 C -15 15 -25 5 -35 10" fill="none" stroke="#ea580c" stroke-width="1.5"/>
        <path d="M 0 0 C -20 0 -30 2 -40 0" fill="none" stroke="#ea580c" stroke-width="1.5"/>
      </g>

      <!-- Cyan Amoeba/Euglena -->
      <g transform="translate(230, 10)">
        <path d="M 0 0 C 20 -15 50 -10 70 0 C 50 15 20 10 0 0" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
        <circle cx="25" cy="0" r="4" fill="#dc2626"/>
        <path d="M 70 0 Q 85 10 95 0" fill="none" stroke="#1e293b" stroke-width="1.2"/>
      </g>

      <!-- Plant Twig with Green Leaves -->
      <g transform="translate(20, -10)">
        <path d="M 0 45 C 5 25 15 10 25 0" fill="none" stroke="#1e293b" stroke-width="1.5"/>
        <ellipse cx="12" cy="18" rx="10" ry="5" fill="#4ade80" stroke="#16a34a" stroke-width="1" transform="rotate(-30, 12, 18)"/>
        <ellipse cx="28" cy="8" rx="10" ry="5" fill="#4ade80" stroke="#16a34a" stroke-width="1" transform="rotate(30, 28, 8)"/>
      </g>

      <!-- Mushroom -->
      <g transform="translate(370, 0)">
        <path d="M 0 20 C -5 5 25 5 20 20 Z" fill="#d97706" stroke="#92400e" stroke-width="1.2"/>
        <rect x="7" y="20" width="7" height="15" fill="#fef3c7" stroke="#92400e" stroke-width="1"/>
      </g>

      <!-- Blue Fish -->
      <g transform="translate(470, -5)">
        <path d="M 0 15 C 20 0 35 15 45 10 C 40 18 45 25 35 22 C 20 30 0 15 0 15" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
        <polygon points="45,10 58,0 55,15 58,25" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
        <circle cx="8" cy="14" r="2" fill="#1e293b"/>
      </g>
    </g>
  </g>

  <!-- Watermark -->
  <text x="450" y="670" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">ExamGlow • IGCSE Revision</text>
</svg>`,
  "condensation-reaction.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 420" width="100%" height="auto">
  <!-- Section 1: Written equation -->
  <g transform="translate(40, 20)">
    <rect x="0" y="0" width="95" height="28" rx="3" fill="#ffffff" stroke="#1e293b" stroke-width="1.5"/>
    <text x="47.5" y="19" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#1e293b" letter-spacing="1">WRITTEN</text>

    <g transform="translate(0, 50)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0284c7">MONOMER</text>
      <text x="110" y="0" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#ea580c">+</text>
      <text x="140" y="0" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0284c7">MONOMER</text>
      <text x="250" y="0" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#ea580c">+</text>
      <text x="280" y="0" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0284c7">MONOMER</text>

      <!-- Arrow -->
      <path d="M 395 -6 L 445 -6" stroke="#ea580c" stroke-width="2.5"/>
      <polygon points="445,-10 455,-6 445,-2" fill="#ea580c"/>

      <text x="470" y="0" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0284c7">POLYMER</text>
      <text x="575" y="0" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#ea580c">+</text>
      <text x="605" y="0" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#16a34a">2</text>
      <text x="618" y="0" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0284c7">H₂O</text>

      <!-- First H2O removed -->
      <path d="M 120 12 Q 123 25 138 42" fill="none" stroke="#16a34a" stroke-width="2"/>
      <polygon points="134,44 142,48 141,39" fill="#16a34a"/>
      <text x="142" y="62" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#16a34a">H₂O</text>
      <text x="142" y="78" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#16a34a">REMOVED</text>

      <!-- Second H2O removed -->
      <path d="M 260 12 Q 263 25 278 42" fill="none" stroke="#16a34a" stroke-width="2"/>
      <polygon points="274,44 282,48 281,39" fill="#16a34a"/>
      <text x="282" y="62" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#16a34a">H₂O</text>
      <text x="282" y="78" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#16a34a">REMOVED</text>

      <!-- Long sweeping dashed arrow to +2H2O -->
      <path d="M 350 75 Q 520 70 600 12" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="5 4"/>
      <polygon points="593,10 605,8 601,19" fill="#16a34a"/>
    </g>
  </g>

  <!-- Section 2: Symbolic representation -->
  <g transform="translate(40, 195)">
    <rect x="0" y="0" width="105" height="28" rx="3" fill="#ffffff" stroke="#1e293b" stroke-width="1.5"/>
    <text x="52.5" y="19" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#1e293b" letter-spacing="1">SYMBOLIC</text>

    <g transform="translate(0, 45)">
      <!-- First monomer triangle -->
      <text x="0" y="44" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">HO</text>
      <line x1="28" y1="39" x2="48" y2="39" stroke="#1e293b" stroke-width="2"/>
      
      <polygon points="75,20 48,70 102,70" fill="none" stroke="#16a34a" stroke-width="2.5"/>
      <line x1="48" y1="39" x2="102" y2="39" stroke="#1e293b" stroke-width="2"/>
      
      <line x1="102" y1="39" x2="118" y2="39" stroke="#1e293b" stroke-width="2"/>
      <text x="124" y="44" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">H</text>

      <text x="75" y="88" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#16a34a">MONOMER</text>

      <!-- Cyan highlight box around -H and HO- -->
      <rect x="110" y="27" width="85" height="26" rx="13" fill="#a5f3fc" opacity="0.8"/>

      <!-- Second monomer triangle -->
      <text x="168" y="44" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">HO</text>
      <line x1="198" y1="39" x2="218" y2="39" stroke="#1e293b" stroke-width="2"/>
      
      <polygon points="245,20 218,70 272,70" fill="none" stroke="#16a34a" stroke-width="2.5"/>
      <line x1="218" y1="39" x2="272" y2="39" stroke="#1e293b" stroke-width="2"/>
      
      <line x1="272" y1="39" x2="292" y2="39" stroke="#1e293b" stroke-width="2"/>
      <text x="298" y="44" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">H</text>

      <!-- Green arrow pointing down to H2O REMOVED -->
      <path d="M 198 56 Q 204 70 212 85" fill="none" stroke="#16a34a" stroke-width="2"/>
      <polygon points="208,87 217,91 215,82" fill="#16a34a"/>
      <text x="220" y="105" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">H₂O</text>
      <text x="220" y="123" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0284c7">REMOVED</text>

      <!-- Arrow right -->
      <path d="M 350 39 L 405 39" stroke="#ea580c" stroke-width="2.5"/>
      <polygon points="405,35 415,39 405,43" fill="#ea580c"/>

      <!-- Joined dimer product -->
      <g transform="translate(440, 0)">
        <text x="0" y="44" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">HO</text>
        <line x1="28" y1="39" x2="48" y2="39" stroke="#1e293b" stroke-width="2"/>
        
        <!-- Triangle 1 -->
        <polygon points="75,20 48,70 102,70" fill="none" stroke="#16a34a" stroke-width="2.5"/>
        <line x1="48" y1="39" x2="102" y2="39" stroke="#1e293b" stroke-width="2"/>

        <!-- Joined directly to Triangle 2 -->
        <polygon points="129,20 102,70 156,70" fill="none" stroke="#16a34a" stroke-width="2.5"/>
        <line x1="102" y1="39" x2="156" y2="39" stroke="#1e293b" stroke-width="2"/>

        <line x1="156" y1="39" x2="176" y2="39" stroke="#1e293b" stroke-width="2"/>
        <text x="182" y="44" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">H</text>
      </g>
    </g>
  </g>

  <!-- Watermark -->
  <text x="425" y="405" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">ExamGlow • IGCSE Revision</text>
</svg>`,

  "covalent-bonds-table.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 460" width="100%" height="auto">
  <!-- Table Header in bright blue matching screenshot -->
  <rect x="25" y="10" width="800" height="46" fill="#0284c7" stroke="#0369a1" stroke-width="1.5"/>
  <text x="50" y="38" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#ffffff">Organic molecules</text>
  <text x="260" y="38" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#ffffff">Covalent Bonds</text>
  <text x="470" y="38" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#ffffff">Diagram of covalent bond</text>

  <!-- Table Grid Outline -->
  <rect x="25" y="10" width="800" height="420" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="230" y1="10" x2="230" y2="430" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="440" y1="10" x2="440" y2="430" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Horizontal divider lines -->
  <line x1="25" y1="110" x2="825" y2="110" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="25" y1="210" x2="825" y2="210" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="25" y1="310" x2="825" y2="310" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Row 1: Carbohydrates -->
  <text x="50" y="90" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#1e293b">carbohydrates</text>
  <text x="260" y="90" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#1e293b">glycosidic</text>
  
  <g transform="translate(560, 65)">
    <text x="-40" y="15" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">C</text>
    <line x1="-30" y1="20" x2="-8" y2="35" stroke="#1e293b" stroke-width="2"/>
    <!-- Cyan pill around O -->
    <rect x="-18" y="25" width="36" height="26" rx="13" fill="#38bdf8" opacity="0.8"/>
    <text x="0" y="44" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#0f172a">O</text>
    <line x1="8" y1="35" x2="30" y2="20" stroke="#1e293b" stroke-width="2"/>
    <text x="35" y="15" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">C</text>
  </g>

  <!-- Row 2: Proteins -->
  <text x="50" y="165" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#1e293b">proteins</text>
  <text x="260" y="165" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#1e293b">peptide</text>

  <g transform="translate(560, 130)">
    <!-- O=C - N - H with cyan vertical oval around C-N -->
    <rect x="-12" y="-12" width="65" height="75" rx="16" fill="#38bdf8" opacity="0.8"/>
    <text x="0" y="0" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">O</text>
    <line x1="-3" y1="3" x2="-3" y2="18" stroke="#1e293b" stroke-width="2"/>
    <line x1="3" y1="3" x2="3" y2="18" stroke="#1e293b" stroke-width="2"/>
    <text x="0" y="35" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">C</text>
    <line x1="12" y1="30" x2="32" y2="30" stroke="#1e293b" stroke-width="2"/>
    <text x="44" y="35" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">N</text>
    <line x1="44" y1="40" x2="44" y2="52" stroke="#1e293b" stroke-width="2"/>
    <text x="44" y="65" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">H</text>
  </g>

  <!-- Row 3: Lipids -->
  <text x="50" y="265" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#1e293b">lipids</text>
  <text x="260" y="265" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#1e293b">ester</text>

  <g transform="translate(530, 260)">
    <!-- C - O - C=O with cyan highlight -->
    <rect x="-12" y="-14" width="90" height="48" rx="14" fill="#38bdf8" opacity="0.8"/>
    <text x="0" y="10" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">C</text>
    <line x1="15" y1="5" x2="30" y2="5" stroke="#1e293b" stroke-width="2"/>
    <text x="35" y="10" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">O</text>
    <line x1="50" y1="5" x2="65" y2="5" stroke="#1e293b" stroke-width="2"/>
    <text x="70" y="10" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">C</text>
    <line x1="72" y1="-5" x2="72" y2="-18" stroke="#1e293b" stroke-width="2"/>
    <line x1="78" y1="-5" x2="78" y2="-18" stroke="#1e293b" stroke-width="2"/>
    <text x="75" y="-22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">O</text>
  </g>

  <!-- Row 4: Nucleic Acids -->
  <text x="50" y="375" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#1e293b">nucleic Acids</text>
  <text x="260" y="375" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#1e293b">phosphodiester</text>

  <g transform="translate(560, 370)">
    <!-- Pentose sugar ring & Phosphate with cyan highlight -->
    <circle cx="-30" cy="-20" r="18" fill="none" stroke="#1e293b" stroke-width="1.5"/>
    <text x="-30" y="-15" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700">PO₄²⁻</text>

    <line x1="-15" y1="-10" x2="5" y2="5" stroke="#1e293b" stroke-width="2"/>
    <!-- Cyan highlight circle around ester link -->
    <circle cx="5" cy="5" r="14" fill="#38bdf8" opacity="0.8"/>

    <!-- Pentose sugar pentagon -->
    <polygon points="5,5 25,-8 40,8 30,28 10,28" fill="none" stroke="#1e293b" stroke-width="1.5"/>

    <line x1="15" y1="28" x2="0" y2="45" stroke="#1e293b" stroke-width="2"/>
    <circle cx="-15" cy="55" r="18" fill="none" stroke="#1e293b" stroke-width="1.5"/>
    <text x="-15" y="60" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700">PO₄²⁻</text>
  </g>

  <!-- Watermark -->
  <text x="425" y="448" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">ExamGlow • IGCSE Revision</text>
</svg>`,

  "hydrolysis-reaction.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 420" width="100%" height="auto">
  <!-- Section 1: Written equation -->
  <g transform="translate(40, 20)">
    <rect x="0" y="0" width="95" height="28" rx="3" fill="#ffffff" stroke="#1e293b" stroke-width="1.5"/>
    <text x="47.5" y="19" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#1e293b" letter-spacing="1">WRITTEN</text>

    <g transform="translate(0, 50)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0284c7">POLYMER</text>
      <text x="105" y="0" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#ea580c">+</text>
      <text x="135" y="0" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0284c7">2H₂O</text>

      <!-- H2O Added arrow pointing to the + sign -->
      <path d="M 125 45 Q 120 30 115 15" fill="none" stroke="#16a34a" stroke-width="2"/>
      <polygon points="110,18 114,8 119,17" fill="#16a34a"/>
      <text x="130" y="60" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#16a34a">H₂O</text>
      <text x="130" y="76" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#16a34a">ADDED</text>

      <!-- Arrow -->
      <path d="M 220 -6 L 270 -6" stroke="#ea580c" stroke-width="2.5"/>
      <polygon points="270,-10 280,-6 270,-2" fill="#ea580c"/>

      <text x="295" y="0" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0284c7">MONOMER</text>
      <text x="405" y="0" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#ea580c">+</text>
      <text x="435" y="0" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0284c7">MONOMER</text>
      <text x="545" y="0" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#ea580c">+</text>
      <text x="575" y="0" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0284c7">MONOMER</text>
    </g>
  </g>

  <!-- Section 2: Symbolic representation -->
  <g transform="translate(40, 195)">
    <rect x="0" y="0" width="105" height="28" rx="3" fill="#ffffff" stroke="#1e293b" stroke-width="1.5"/>
    <text x="52.5" y="19" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#1e293b" letter-spacing="1">SYMBOLIC</text>

    <g transform="translate(0, 45)">
      <!-- Joined dimer on left -->
      <text x="0" y="44" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">HO</text>
      <line x1="28" y1="39" x2="48" y2="39" stroke="#1e293b" stroke-width="2"/>
      
      <!-- Triangle 1 -->
      <polygon points="75,20 48,70 102,70" fill="none" stroke="#16a34a" stroke-width="2.5"/>
      <line x1="48" y1="39" x2="102" y2="39" stroke="#1e293b" stroke-width="2"/>

      <!-- Cyan highlight over the junction bond -->
      <rect x="85" y="27" width="34" height="24" rx="10" fill="#a5f3fc" opacity="0.8"/>

      <!-- Triangle 2 -->
      <polygon points="129,20 102,70 156,70" fill="none" stroke="#16a34a" stroke-width="2.5"/>
      <line x1="102" y1="39" x2="156" y2="39" stroke="#1e293b" stroke-width="2"/>

      <line x1="156" y1="39" x2="176" y2="39" stroke="#1e293b" stroke-width="2"/>
      <text x="182" y="44" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">H</text>

      <text x="102" y="88" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#16a34a">MONOMER</text>

      <!-- Arrow up showing H2O ADDED to the junction -->
      <path d="M 125 75 Q 115 60 105 52" fill="none" stroke="#16a34a" stroke-width="2"/>
      <polygon points="102,57 101,48 109,51" fill="#16a34a"/>
      <text x="145" y="100" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">H₂O</text>
      <text x="145" y="118" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0284c7">ADDED</text>

      <!-- Arrow right -->
      <path d="M 235 39 L 290 39" stroke="#ea580c" stroke-width="2.5"/>
      <polygon points="290,35 300,39 290,43" fill="#ea580c"/>

      <!-- Cleaved separated monomers on right -->
      <g transform="translate(325, 0)">
        <!-- Monomer 1 with -H -->
        <text x="0" y="44" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">HO</text>
        <line x1="28" y1="39" x2="48" y2="39" stroke="#1e293b" stroke-width="2"/>
        
        <polygon points="75,20 48,70 102,70" fill="none" stroke="#16a34a" stroke-width="2.5"/>
        <line x1="48" y1="39" x2="102" y2="39" stroke="#1e293b" stroke-width="2"/>

        <line x1="102" y1="39" x2="118" y2="39" stroke="#1e293b" stroke-width="2"/>
        <rect x="110" y="27" width="28" height="24" rx="10" fill="#a5f3fc" opacity="0.8"/>
        <text x="124" y="44" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">H</text>

        <!-- Monomer 2 with HO- -->
        <g transform="translate(145, 0)">
          <rect x="-8" y="27" width="34" height="24" rx="10" fill="#a5f3fc" opacity="0.8"/>
          <text x="0" y="44" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">HO</text>
          <line x1="30" y1="39" x2="50" y2="39" stroke="#1e293b" stroke-width="2"/>
          
          <polygon points="77,20 50,70 104,70" fill="none" stroke="#16a34a" stroke-width="2.5"/>
          <line x1="50" y1="39" x2="104" y2="39" stroke="#1e293b" stroke-width="2"/>

          <line x1="104" y1="39" x2="124" y2="39" stroke="#1e293b" stroke-width="2"/>
          <text x="130" y="44" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">H</text>
        </g>
      </g>
    </g>
  </g>

  <!-- Watermark -->
  <text x="425" y="405" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">ExamGlow • IGCSE Revision</text>
</svg>`,

  "glucose-ring-structures.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 440" width="100%" height="auto" class="w-full max-w-4xl h-auto block mx-auto">
  <defs>
    <filter id="cardShadow" x="-4%" y="-4%" width="108%" height="108%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.06"/>
    </filter>
  </defs>

  

  <!-- Left: Alpha Glucose Card -->
  <g transform="translate(30, 65)">
    <rect x="0" y="0" width="395" height="305" rx="12" fill="#fafafa" stroke="#e2e8f0" stroke-width="1.5" filter="url(#cardShadow)"/>
    
    <!-- Badge -->
    <rect x="20" y="16" width="140" height="26" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="90" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1d4ed8">α-Glucose (Alpha)</text>

    <!-- Ring Drawing -->
    <g transform="translate(195, 155)">
      <!-- Hexagonal Ring: Oxygen at top right, C1 right, C2 bottom right, C3 bottom left, C4 left, C5 top left -->
      <!-- O atom -->
      <circle cx="50" cy="-45" r="14" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
      <text x="50" y="-40" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#b91c1c">O</text>

      <!-- Bonds forming ring -->
      <!-- C5 to O -->
      <line x1="-35" y1="-50" x2="36" y2="-45" stroke="#334155" stroke-width="2.5"/>
      <!-- O to C1 -->
      <line x1="60" y1="-35" x2="80" y2="5" stroke="#334155" stroke-width="2.5"/>
      <!-- C1 to C2 -->
      <line x1="80" y1="5" x2="45" y2="60" stroke="#334155" stroke-width="2.5"/>
      <!-- C2 to C3 -->
      <line x1="45" y1="60" x2="-45" y2="60" stroke="#334155" stroke-width="2.5"/>
      <!-- C3 to C4 -->
      <line x1="-45" y1="60" x2="-80" y2="5" stroke="#334155" stroke-width="2.5"/>
      <!-- C4 to C5 -->
      <line x1="-80" y1="5" x2="-35" y2="-50" stroke="#334155" stroke-width="2.5"/>

      <!-- Carbon atom numbers -->
      <text x="70" y="2" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">C1</text>
      <text x="35" y="52" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">C2</text>
      <text x="-40" y="52" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">C3</text>
      <text x="-70" y="2" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">C4</text>
      <text x="-30" y="-40" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">C5</text>

      <!-- Substituents -->
      <!-- C1: H UP, OH DOWN (KEY FEATURE) -->
      <line x1="80" y1="5" x2="80" y2="-28" stroke="#334155" stroke-width="2"/>
      <text x="80" y="-32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">H</text>

      <line x1="80" y1="5" x2="80" y2="38" stroke="#059669" stroke-width="3"/>
      <!-- Highlight circle for C1 OH -->
      <rect x="62" y="38" width="36" height="24" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="80" y="55" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#15803d">OH</text>

      <!-- C2: H up, OH down -->
      <line x1="45" y1="60" x2="45" y2="25" stroke="#334155" stroke-width="1.5"/>
      <text x="45" y="20" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">H</text>
      <line x1="45" y1="60" x2="45" y2="92" stroke="#334155" stroke-width="2"/>
      <text x="45" y="105" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">OH</text>

      <!-- C3: OH up, H down -->
      <line x1="-45" y1="60" x2="-45" y2="25" stroke="#334155" stroke-width="2"/>
      <text x="-45" y="20" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">OH</text>
      <line x1="-45" y1="60" x2="-45" y2="92" stroke="#334155" stroke-width="1.5"/>
      <text x="-45" y="105" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">H</text>

      <!-- C4: H up, OH down -->
      <line x1="-80" y1="5" x2="-80" y2="-28" stroke="#334155" stroke-width="1.5"/>
      <text x="-80" y="-32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">H</text>
      <line x1="-80" y1="5" x2="-80" y2="38" stroke="#334155" stroke-width="2"/>
      <text x="-80" y="52" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">OH</text>

      <!-- C5: H down, CH2OH up (C6) -->
      <line x1="-35" y1="-50" x2="-35" y2="-20" stroke="#334155" stroke-width="1.5"/>
      <text x="-35" y="-10" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">H</text>
      <line x1="-35" y1="-50" x2="-55" y2="-85" stroke="#334155" stroke-width="2.5"/>
      <text x="-70" y="-90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0284c7">CH₂OH (C6)</text>
    </g>

    <!-- Callout Box -->
    <rect x="20" y="250" width="355" height="42" rx="6" fill="#f0fdf4" stroke="#86efac"/>
    <text x="32" y="267" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d">KEY FEATURE: Carbon 1 –OH points DOWN (below plane)</text>
    <text x="32" y="283" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#166534">Polymerises into Starch (plant storage) &amp; Glycogen (animal storage)</text>
  </g>

  <!-- Right: Beta Glucose Card -->
  <g transform="translate(455, 65)">
    <rect x="0" y="0" width="395" height="305" rx="12" fill="#fafafa" stroke="#e2e8f0" stroke-width="1.5" filter="url(#cardShadow)"/>
    
    <!-- Badge -->
    <rect x="20" y="16" width="140" height="26" rx="6" fill="#faf5ff" stroke="#e9d5ff"/>
    <text x="90" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#7e22ce">β-Glucose (Beta)</text>

    <!-- Ring Drawing -->
    <g transform="translate(195, 155)">
      <!-- O atom -->
      <circle cx="50" cy="-45" r="14" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
      <text x="50" y="-40" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#b91c1c">O</text>

      <!-- Bonds forming ring -->
      <line x1="-35" y1="-50" x2="36" y2="-45" stroke="#334155" stroke-width="2.5"/>
      <line x1="60" y1="-35" x2="80" y2="5" stroke="#334155" stroke-width="2.5"/>
      <line x1="80" y1="5" x2="45" y2="60" stroke="#334155" stroke-width="2.5"/>
      <line x1="45" y1="60" x2="-45" y2="60" stroke="#334155" stroke-width="2.5"/>
      <line x1="-45" y1="60" x2="-80" y2="5" stroke="#334155" stroke-width="2.5"/>
      <line x1="-80" y1="5" x2="-35" y2="-50" stroke="#334155" stroke-width="2.5"/>

      <!-- Carbon atom numbers -->
      <text x="70" y="16" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">C1</text>
      <text x="35" y="52" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">C2</text>
      <text x="-40" y="52" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">C3</text>
      <text x="-70" y="2" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">C4</text>
      <text x="-30" y="-40" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">C5</text>

      <!-- Substituents -->
      <!-- C1: OH UP (KEY FEATURE), H DOWN -->
      <line x1="80" y1="5" x2="80" y2="-28" stroke="#7c3aed" stroke-width="3"/>
      <!-- Highlight circle for C1 OH -->
      <rect x="62" y="-48" width="36" height="24" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
      <text x="80" y="-32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#6d28d9">OH</text>

      <line x1="80" y1="5" x2="80" y2="38" stroke="#334155" stroke-width="1.5"/>
      <text x="80" y="52" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">H</text>

      <!-- C2: H up, OH down -->
      <line x1="45" y1="60" x2="45" y2="25" stroke="#334155" stroke-width="1.5"/>
      <text x="45" y="20" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">H</text>
      <line x1="45" y1="60" x2="45" y2="92" stroke="#334155" stroke-width="2"/>
      <text x="45" y="105" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">OH</text>

      <!-- C3: OH up, H down -->
      <line x1="-45" y1="60" x2="-45" y2="25" stroke="#334155" stroke-width="2"/>
      <text x="-45" y="20" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">OH</text>
      <line x1="-45" y1="60" x2="-45" y2="92" stroke="#334155" stroke-width="1.5"/>
      <text x="-45" y="105" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">H</text>

      <!-- C4: H up, OH down -->
      <line x1="-80" y1="5" x2="-80" y2="-28" stroke="#334155" stroke-width="1.5"/>
      <text x="-80" y="-32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">H</text>
      <line x1="-80" y1="5" x2="-80" y2="38" stroke="#334155" stroke-width="2"/>
      <text x="-80" y="52" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">OH</text>

      <!-- C5: H down, CH2OH up (C6) -->
      <line x1="-35" y1="-50" x2="-35" y2="-20" stroke="#334155" stroke-width="1.5"/>
      <text x="-35" y="-10" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0f172a">H</text>
      <line x1="-35" y1="-50" x2="-55" y2="-85" stroke="#334155" stroke-width="2.5"/>
      <text x="-70" y="-90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0284c7">CH₂OH (C6)</text>
    </g>

    <!-- Callout Box -->
    <rect x="20" y="250" width="355" height="42" rx="6" fill="#fdf4ff" stroke="#f0abfc"/>
    <text x="32" y="267" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#7e22ce">KEY FEATURE: Carbon 1 –OH points UP (above plane)</text>
    <text x="32" y="283" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#86198f">Polymerises into Cellulose (straight structural plant cell wall chains)</text>
  </g>

  <!-- Bottom Tip Banner -->
  <g transform="translate(30, 385)">
    <rect x="0" y="0" width="820" height="42" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="20" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155">💡 EXAM TIP: Memorise the rhyme: <tspan font-weight="800" fill="#059669">Alpha is Below</tspan> (AB) and <tspan font-weight="800" fill="#7e22ce">Beta is Above</tspan> (BA) for the C1 hydroxyl position.</text>
  </g>
</svg>`,

  "glycosidic-bond-formation.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 460" width="100%" height="auto" class="w-full max-w-4xl h-auto block mx-auto">
  

  <!-- Step 1: Two Separate Glucose Monomers -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="100" height="24" rx="4" fill="#e0f2fe" stroke="#bae6fd"/>
    <text x="50" y="16" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0369a1">REACTANTS</text>

    <!-- First Glucose (C1 side) -->
    <g transform="translate(130, 80)">
      <!-- Ring polygon -->
      <polygon points="0,-30 40,-30 65,0 40,30 0,30 -25,0" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      <circle cx="35" cy="-25" r="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="35" y="-22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#dc2626">O</text>
      <text x="0" y="4" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">α-Glucose</text>
      <text x="50" y="0" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#64748b">C1</text>
      <!-- C1 -OH projecting right -->
      <line x1="65" y1="0" x2="95" y2="0" stroke="#059669" stroke-width="2.5"/>
      <text x="105" y="4" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#059669">OH</text>
    </g>

    <!-- Plus sign -->
    <text x="270" y="85" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#ea580c">+</text>

    <!-- Second Glucose (C4 side) -->
    <g transform="translate(390, 80)">
      <!-- Ring polygon -->
      <polygon points="0,-30 40,-30 65,0 40,30 0,30 -25,0" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      <circle cx="35" cy="-25" r="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="35" y="-22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#dc2626">O</text>
      <text x="20" y="4" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">α-Glucose</text>
      <text x="-18" y="0" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#64748b">C4</text>
      <!-- C4 HO- projecting left -->
      <line x1="-25" y1="0" x2="-55" y2="0" stroke="#059669" stroke-width="2.5"/>
      <text x="-75" y="4" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#059669">HO</text>
    </g>

    <!-- Highlight Box removing H2O -->
    <rect x="225" y="60" width="115" height="40" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2" stroke-dasharray="3 3"/>
    <text x="282" y="85" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#15803d">H₂O ELIMINATED</text>

    <!-- Arrow showing H2O leaving -->
    <path d="M282 105 Q282 140 330 145" fill="none" stroke="#0284c7" stroke-width="2.5"/>
    <polygon points="330,140 340,145 330,150" fill="#0284c7"/>
    <rect x="345" y="132" width="75" height="26" rx="6" fill="#e0f2fe" stroke="#38bdf8"/>
    <text x="382" y="149" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0369a1">+ H₂O</text>

    <!-- Large Reaction Arrow down -->
    <g transform="translate(540, 75)">
      <text x="60" y="-10" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ea580c">Condensation Reaction</text>
      <text x="60" y="5" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">(Water molecule released)</text>
      <path d="M0 15 L120 15" stroke="#ea580c" stroke-width="3"/>
      <polygon points="120,9 135,15 120,21" fill="#ea580c"/>
    </g>
  </g>

  <!-- Step 2: Maltose Product with 1,4-Glycosidic Bond -->
  <g transform="translate(40, 240)">
    <rect x="0" y="0" width="100" height="24" rx="4" fill="#f0fdf4" stroke="#bbf7d0"/>
    <text x="50" y="16" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#166534">PRODUCT</text>

    <!-- Maltose Structure -->
    <g transform="translate(180, 70)">
      <!-- Left Ring -->
      <polygon points="0,-30 40,-30 65,0 40,30 0,30 -25,0" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <circle cx="35" cy="-25" r="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="35" y="-22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#dc2626">O</text>
      <text x="15" y="4" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">Glucose unit 1</text>
      <text x="50" y="0" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#64748b">C1</text>

      <!-- Central Glycosidic Bond Bridge -->
      <line x1="65" y1="0" x2="105" y2="18" stroke="#059669" stroke-width="3.5"/>
      <circle cx="105" cy="18" r="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="105" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#15803d">O</text>
      <line x1="105" y1="18" x2="145" y2="0" stroke="#059669" stroke-width="3.5"/>

      <!-- Right Ring -->
      <g transform="translate(170, 0)">
        <polygon points="0,-30 40,-30 65,0 40,30 0,30 -25,0" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
        <circle cx="35" cy="-25" r="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
        <text x="35" y="-22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#dc2626">O</text>
        <text x="20" y="4" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">Glucose unit 2</text>
        <text x="-18" y="0" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#64748b">C4</text>
      </g>

      <!-- Glycosidic bond pointer callout -->
      <g transform="translate(105, 55)">
        <line x1="0" y1="-22" x2="0" y2="0" stroke="#16a34a" stroke-width="2"/>
        <rect x="-85" y="0" width="170" height="30" rx="6" fill="#15803d"/>
        <text x="0" y="20" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">α-1,4-Glycosidic Bond</text>
      </g>
    </g>

    <!-- Disaccharide label card on right -->
    <g transform="translate(560, 40)">
      <rect x="0" y="0" width="280" height="85" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="20" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">MALTOSE (Disaccharide)</text>
      <text x="20" y="50" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#475569">• Reducing sugar (positive Benedict's test)</text>
      <text x="20" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#475569">• Broken down by enzyme <tspan font-weight="700" fill="#0284c7">maltase</tspan> via hydrolysis</text>
    </g>
  </g>

  <!-- Bottom Hydrolysis note -->
  <g transform="translate(40, 410)">
    <text x="0" y="16" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" fill="#64748b">REVERSIBILITY: Hydrolysis uses <tspan font-weight="700" fill="#0284c7">+ H₂O</tspan> to break the glycosidic bond, regenerating separate glucose monomers during digestion.</text>
  </g>
</svg>`,

  "chromatography-rf.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" width="100%" height="auto" class="w-full max-w-4xl h-auto block mx-auto">
  

  <!-- Left: Chromatography Tank & Plate Setup -->
  <g transform="translate(40, 65)">
    <!-- Glass Tank Outer Border -->
    <rect x="0" y="0" width="380" height="385" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <text x="15" y="25" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">SEALED CHROMATOGRAPHY TANK</text>

    <!-- Solvent Level in Tank -->
    <rect x="15" y="335" width="350" height="40" fill="#e0f2fe" opacity="0.6"/>
    <line x1="15" y1="335" x2="365" y2="335" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 2"/>
    <text x="25" y="360" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0284c7">Solvent level (Mobile phase)</text>

    <!-- TLC Chromatography Paper/Plate inside tank -->
    <rect x="55" y="35" width="270" height="330" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>

    <!-- Solvent Front Line -->
    <line x1="55" y1="85" x2="325" y2="85" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 2"/>
    <text x="330" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#dc2626">Solvent Front</text>

    <!-- Pencil Baseline / Origin -->
    <line x1="55" y1="310" x2="325" y2="310" stroke="#475569" stroke-width="2"/>
    <text x="330" y="315" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#475569">Pencil Baseline</text>
    <text x="65" y="325" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#ef4444">⚠️ MUST be above solvent level</text>

    <!-- Lanes -->
    <!-- Lane 1: Glucose -->
    <circle cx="100" cy="310" r="4" fill="#94a3b8"/>
    <circle cx="100" cy="195" r="8" fill="#3b82f6"/>
    <text x="100" y="340" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">Glc</text>

    <!-- Lane 2: Fructose -->
    <circle cx="155" cy="310" r="4" fill="#94a3b8"/>
    <circle cx="155" cy="175" r="8" fill="#f59e0b"/>
    <text x="155" y="340" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">Fru</text>

    <!-- Lane 3: Galactose -->
    <circle cx="210" cy="310" r="4" fill="#94a3b8"/>
    <circle cx="210" cy="210" r="8" fill="#10b981"/>
    <text x="210" y="340" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">Gal</text>

    <!-- Lane 4: Unknown Sample (contains Glucose + Fructose) -->
    <circle cx="275" cy="310" r="4" fill="#94a3b8"/>
    <circle cx="275" cy="195" r="8" fill="#3b82f6"/>
    <circle cx="275" cy="175" r="8" fill="#f59e0b"/>
    <text x="275" y="340" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#7c3aed">Unknown</text>

    <!-- Measurement bracket for solute distance (Glucose) -->
    <line x1="38" y1="310" x2="38" y2="195" stroke="#2563eb" stroke-width="2"/>
    <line x1="33" y1="310" x2="43" y2="310" stroke="#2563eb" stroke-width="2"/>
    <line x1="33" y1="195" x2="43" y2="195" stroke="#2563eb" stroke-width="2"/>
    <text x="32" y="255" text-anchor="end" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb">a = 106 mm</text>

    <!-- Measurement bracket for solvent front -->
    <line x1="18" y1="310" x2="18" y2="85" stroke="#dc2626" stroke-width="2"/>
    <line x1="13" y1="310" x2="23" y2="310" stroke="#dc2626" stroke-width="2"/>
    <line x1="13" y1="85" x2="23" y2="85" stroke="#dc2626" stroke-width="2"/>
    <text x="12" y="200" text-anchor="end" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626">b = 225 mm</text>
  </g>

  <!-- Right: Rf Formula, Calculations & Method Rules -->
  <g transform="translate(460, 65)">
    <!-- Formula Card -->
    <rect x="0" y="0" width="400" height="120" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
    <text x="20" y="28" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#166534">RETARDATION FACTOR (Rf) FORMULA</text>
    
    <g transform="translate(30, 48)">
      <text x="0" y="24" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#0f172a">Rf =</text>
      <text x="45" y="14" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#2563eb">distance moved by solute (a)</text>
      <line x1="45" y1="20" x2="295" y2="20" stroke="#0f172a" stroke-width="2"/>
      <text x="45" y="38" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#dc2626">distance moved by solvent front (b)</text>
    </g>
    <text x="20" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#15803d">• Rf values always fall between 0 and 1 (NO UNITS!)</text>

    <!-- Example Calculation Table -->
    <g transform="translate(0, 135)">
      <rect x="0" y="0" width="400" height="135" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="20" y="25" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">TYPICAL MONOSACCHARIDE Rf VALUES</text>
      
      <line x1="20" y1="36" x2="380" y2="36" stroke="#cbd5e1"/>
      <text x="20" y="55" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155">Glucose (Glc):</text>
      <text x="180" y="55" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#475569">106 mm ÷ 225 mm</text>
      <text x="320" y="55" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#2563eb">Rf ≈ 0.47</text>

      <text x="20" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155">Fructose (Fru):</text>
      <text x="180" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#475569">120 mm ÷ 225 mm</text>
      <text x="320" y="80" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#d97706">Rf ≈ 0.53</text>

      <text x="20" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155">Galactose (Gal):</text>
      <text x="180" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#475569">99 mm ÷ 225 mm</text>
      <text x="320" y="105" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#059669">Rf ≈ 0.44</text>
      
      <text x="20" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#7c3aed">Result: Unknown contains Glucose + Fructose</text>
    </g>

    <!-- Key Practical Rules -->
    <g transform="translate(0, 285)">
      <rect x="0" y="0" width="400" height="100" rx="10" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="20" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1d4ed8">PRACTICAL EXAM MUST-KNOWS</text>
      <text x="20" y="44" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e40af">1. Origin line drawn in <tspan font-weight="800">pencil</tspan> (pen ink dissolves in solvent)</text>
      <text x="20" y="62" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e40af">2. Solvent level MUST be below origin (otherwise spots wash off)</text>
      <text x="20" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e40af">3. Locating spray + heat required to visualise colourless sugars</text>
    </g>
  </g>
</svg>`,

  "starch-glycogen-structure.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 540" width="100%" height="auto" class="w-full max-w-4xl h-auto block mx-auto">
  

  <!-- 1. Amylose Panel -->
  <g transform="translate(30, 60)">
    <rect x="0" y="0" width="860" height="135" rx="10" fill="#fafafa" stroke="#e2e8f0" stroke-width="1.5"/>
    <rect x="15" y="12" width="180" height="24" rx="5" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="105" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1d4ed8">AMYLOSE (Plant Starch)</text>
    
    <!-- Amylose Helix Drawing -->
    <g transform="translate(230, 65)">
      <!-- Helical spring path representing coiled unbranched chain -->
      <path d="M0,0 Q15,-30 30,0 T60,0 T90,0 T120,0 T150,0 T180,0 T210,0 T240,0 T270,0 T300,0 T330,0" fill="none" stroke="#2563eb" stroke-width="6"/>
      <!-- Individual monomer dots along helix -->
      <circle cx="15" cy="-15" r="5" fill="#93c5fd"/>
      <circle cx="45" cy="15" r="5" fill="#93c5fd"/>
      <circle cx="75" cy="-15" r="5" fill="#93c5fd"/>
      <circle cx="105" cy="15" r="5" fill="#93c5fd"/>
      <circle cx="135" cy="-15" r="5" fill="#93c5fd"/>
      <circle cx="165" cy="15" r="5" fill="#93c5fd"/>
      <!-- Iodine molecule inside helix -->
      <g transform="translate(195, 0)">
        <ellipse cx="0" cy="0" rx="14" ry="8" fill="#581c87" stroke="#9333ea" stroke-width="2"/>
        <text x="0" y="4" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#ffffff">I₂</text>
      </g>
      <text x="235" y="5" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#6b21a8">Iodine fits inside helix → Blue-Black</text>
    </g>

    <!-- Features -->
    <g transform="translate(630, 25)">
      <text x="0" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">• Monomer: <tspan font-weight="800" fill="#2563eb">α-glucose</tspan></text>
      <text x="0" y="38" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">• Bonds: <tspan font-weight="800" fill="#059669">α-1,4-glycosidic ONLY</tspan></text>
      <text x="0" y="60" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#475569">• Unbranched, tight compact helix</text>
      <text x="0" y="82" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#475569">• Makes up ~20–30% of plant starch</text>
    </g>
  </g>

  <!-- 2. Amylopectin Panel -->
  <g transform="translate(30, 210)">
    <rect x="0" y="0" width="860" height="145" rx="10" fill="#fafafa" stroke="#e2e8f0" stroke-width="1.5"/>
    <rect x="15" y="12" width="200" height="24" rx="5" fill="#ecfdf5" stroke="#a7f3d0"/>
    <text x="115" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#047857">AMYLOPECTIN (Plant Starch)</text>

    <!-- Branched chain drawing -->
    <g transform="translate(230, 75)">
      <!-- Backbone chain -->
      <line x1="0" y1="20" x2="350" y2="20" stroke="#059669" stroke-width="5"/>
      <!-- Glucose dots on backbone -->
      <circle cx="20" cy="20" r="5" fill="#a7f3d0"/>
      <circle cx="60" cy="20" r="5" fill="#a7f3d0"/>
      <circle cx="100" cy="20" r="5" fill="#a7f3d0"/>
      <circle cx="140" cy="20" r="5" fill="#a7f3d0"/>
      <circle cx="180" cy="20" r="5" fill="#a7f3d0"/>
      <circle cx="220" cy="20" r="5" fill="#a7f3d0"/>
      <circle cx="260" cy="20" r="5" fill="#a7f3d0"/>
      <circle cx="300" cy="20" r="5" fill="#a7f3d0"/>
      <circle cx="340" cy="20" r="5" fill="#a7f3d0"/>

      <!-- Branch point at x=180 -->
      <line x1="180" y1="20" x2="260" y2="-30" stroke="#d97706" stroke-width="4"/>
      <line x1="260" y1="-30" x2="360" y2="-30" stroke="#059669" stroke-width="5"/>
      <circle cx="260" cy="-30" r="5" fill="#a7f3d0"/>
      <circle cx="300" cy="-30" r="5" fill="#a7f3d0"/>
      <circle cx="340" cy="-30" r="5" fill="#a7f3d0"/>

      <!-- Branch callout -->
      <circle cx="180" cy="20" r="9" fill="none" stroke="#d97706" stroke-width="2.5"/>
      <text x="180" y="48" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#d97706">α-1,6 Branch Point (~every 24–30 units)</text>
    </g>

    <!-- Features -->
    <g transform="translate(630, 25)">
      <text x="0" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">• Monomer: <tspan font-weight="800" fill="#059669">α-glucose</tspan></text>
      <text x="0" y="38" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">• Bonds: <tspan font-weight="800" fill="#059669">α-1,4</tspan> and <tspan font-weight="800" fill="#d97706">α-1,6</tspan></text>
      <text x="0" y="60" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#475569">• Branched chain (~70–80% of starch)</text>
      <text x="0" y="82" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#475569">• More terminal ends for enzyme breakdown</text>
    </g>
  </g>

  <!-- 3. Glycogen Panel -->
  <g transform="translate(30, 370)">
    <rect x="0" y="0" width="860" height="150" rx="10" fill="#fafafa" stroke="#e2e8f0" stroke-width="1.5"/>
    <rect x="15" y="12" width="220" height="24" rx="5" fill="#fdf2f8" stroke="#fbcfe8"/>
    <text x="125" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#be185d">GLYCOGEN (Animal Storage)</text>

    <!-- Highly branched network drawing -->
    <g transform="translate(230, 70)">
      <!-- Main trunk -->
      <line x1="0" y1="20" x2="350" y2="20" stroke="#be185d" stroke-width="4.5"/>
      <!-- Frequent Branches -->
      <line x1="70" y1="20" x2="130" y2="-20" stroke="#9333ea" stroke-width="3.5"/>
      <line x1="130" y1="-20" x2="220" y2="-20" stroke="#be185d" stroke-width="4"/>
      <line x1="160" y1="-20" x2="200" y2="-45" stroke="#9333ea" stroke-width="3.5"/>
      <line x1="200" y1="-45" x2="270" y2="-45" stroke="#be185d" stroke-width="4"/>

      <line x1="180" y1="20" x2="240" y2="-15" stroke="#9333ea" stroke-width="3.5"/>
      <line x1="240" y1="-15" x2="320" y2="-15" stroke="#be185d" stroke-width="4"/>

      <line x1="120" y1="20" x2="170" y2="45" stroke="#9333ea" stroke-width="3.5"/>
      <line x1="170" y1="45" x2="270" y2="45" stroke="#be185d" stroke-width="4"/>

      <!-- Free ends highlighted -->
      <circle cx="350" cy="20" r="5" fill="#ef4444"/>
      <circle cx="270" cy="-45" r="5" fill="#ef4444"/>
      <circle cx="320" cy="-15" r="5" fill="#ef4444"/>
      <circle cx="270" cy="45" r="5" fill="#ef4444"/>

      <text x="260" y="15" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#dc2626">🔴 MULTIPLE FREE TERMINAL ENDS</text>
      <text x="260" y="30" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748b">(Rapid simultaneous enzymatic attack)</text>
    </g>

    <!-- Features -->
    <g transform="translate(630, 25)">
      <text x="0" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">• Monomer: <tspan font-weight="800" fill="#be185d">α-glucose</tspan></text>
      <text x="0" y="38" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">• Stored in: <tspan font-weight="800" fill="#0f172a">Liver &amp; Muscle cells</tspan></text>
      <text x="0" y="60" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#be185d">• High branching: <tspan font-weight="600" fill="#475569">every ~8–12 units</tspan></text>
      <text x="0" y="82" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#475569">• Permits rapid glucose release for animal energy demands</text>
    </g>
  </g>
</svg>`,

  "colorimetry-calibration.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" width="100%" height="auto" class="w-full max-w-4xl h-auto block mx-auto">
  

  <!-- Left: Standard Test Tubes (Serial Dilution) -->
  <g transform="translate(35, 65)">
    <rect x="0" y="0" width="370" height="385" rx="10" fill="#fafafa" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="20" y="25" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">PREPARING KNOWN GLUCOSE STANDARDS</text>
    <text x="20" y="42" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">React each standard with equal Benedict's reagent &amp; heat at 80°C</text>

    <!-- Test tube rack visualization -->
    <g transform="translate(25, 60)">
      <!-- Tube 1: 0 mmol (Blue) -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="40" height="130" rx="10" fill="#eff6ff" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="2" y="45" width="36" height="80" rx="8" fill="#3b82f6"/>
        <text x="20" y="150" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">0.0</text>
        <text x="20" y="165" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748b">Abs: 0.00</text>
      </g>

      <!-- Tube 2: 2 mmol (Green) -->
      <g transform="translate(60, 0)">
        <rect x="0" y="0" width="40" height="130" rx="10" fill="#f0fdf4" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="2" y="45" width="36" height="80" rx="8" fill="#22c55e"/>
        <text x="20" y="150" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">2.0</text>
        <text x="20" y="165" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748b">Abs: 0.16</text>
      </g>

      <!-- Tube 3: 4 mmol (Yellow) -->
      <g transform="translate(120, 0)">
        <rect x="0" y="0" width="40" height="130" rx="10" fill="#fefce8" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="2" y="45" width="36" height="80" rx="8" fill="#eab308"/>
        <text x="20" y="150" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">4.0</text>
        <text x="20" y="165" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748b">Abs: 0.32</text>
      </g>

      <!-- Tube 4: 6 mmol (Orange) -->
      <g transform="translate(180, 0)">
        <rect x="0" y="0" width="40" height="130" rx="10" fill="#fff7ed" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="2" y="45" width="36" height="80" rx="8" fill="#f97316"/>
        <text x="20" y="150" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">6.0</text>
        <text x="20" y="165" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748b">Abs: 0.48</text>
      </g>

      <!-- Tube 5: 8 mmol (Brick Red) -->
      <g transform="translate(240, 0)">
        <rect x="0" y="0" width="40" height="130" rx="10" fill="#fef2f2" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="2" y="45" width="36" height="80" rx="8" fill="#dc2626"/>
        <text x="20" y="150" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">8.0</text>
        <text x="20" y="165" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748b">Abs: 0.64</text>
      </g>
    </g>

    <!-- Filter Callout Box -->
    <g transform="translate(20, 255)">
      <rect x="0" y="0" width="330" height="110" rx="8" fill="#fee2e2" stroke="#fca5a5"/>
      <text x="15" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#b91c1c">🔴 COLORIMETER SETTINGS</text>
      <text x="15" y="46" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#991b1b">• Use a <tspan font-weight="800">RED FILTER (~630–680 nm)</tspan></text>
      <text x="15" y="65" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#991b1b">• Zero (calibrate) colorimeter using distilled water</text>
      <text x="15" y="84" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#991b1b">• Filter or centrifuge precipitate before measurement</text>
      <text x="15" y="100" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#991b1b">• Higher glucose = more precipitate formed</text>
    </g>
  </g>

  <!-- Right: Calibration Curve Graph -->
  <g transform="translate(435, 65)">
    <rect x="0" y="0" width="430" height="385" rx="10" fill="#fafafa" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="25" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">CALIBRATION CURVE (ABSORBANCE VS. CONCENTRATION)</text>

    <!-- Graph Plot Area -->
    <g transform="translate(60, 50)">
      <!-- Grid lines -->
      <line x1="0" y1="0" x2="330" y2="0" stroke="#f1f5f9" stroke-width="1"/>
      <line x1="0" y1="50" x2="330" y2="50" stroke="#f1f5f9" stroke-width="1"/>
      <line x1="0" y1="100" x2="330" y2="100" stroke="#f1f5f9" stroke-width="1"/>
      <line x1="0" y1="150" x2="330" y2="150" stroke="#f1f5f9" stroke-width="1"/>
      <line x1="0" y1="200" x2="330" y2="200" stroke="#f1f5f9" stroke-width="1"/>

      <!-- Y Axis -->
      <line x1="0" y1="0" x2="0" y2="250" stroke="#334155" stroke-width="2"/>
      <!-- X Axis -->
      <line x1="0" y1="250" x2="330" y2="250" stroke="#334155" stroke-width="2"/>

      <!-- Y Axis ticks & labels (Absorbance: 0 to 0.8) -->
      <text x="-12" y="254" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">0.0</text>
      <text x="-12" y="190" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">0.2</text>
      <text x="-12" y="130" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">0.4</text>
      <text x="-12" y="70" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">0.6</text>
      <text x="-12" y="10" text-anchor="end" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">0.8</text>
      <text x="-40" y="130" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#334155" transform="rotate(-90, -40, 130)">Absorbance (AU)</text>

      <!-- X Axis ticks & labels (Glucose conc: 0 to 10 mmol/dm3) -->
      <text x="0" y="268" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">0</text>
      <text x="60" y="268" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">2</text>
      <text x="120" y="268" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">4</text>
      <text x="180" y="268" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">6</text>
      <text x="240" y="268" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">8</text>
      <text x="300" y="268" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">10</text>
      <text x="165" y="288" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#334155">Glucose Concentration (mmol dm⁻³)</text>

      <!-- Line of best fit -->
      <line x1="0" y1="250" x2="300" y2="10" stroke="#2563eb" stroke-width="3"/>

      <!-- Standard Data Points -->
      <circle cx="0" cy="250" r="5" fill="#1d4ed8"/>
      <circle cx="60" cy="202" r="5" fill="#1d4ed8"/>
      <circle cx="120" cy="154" r="5" fill="#1d4ed8"/>
      <circle cx="180" cy="106" r="5" fill="#1d4ed8"/>
      <circle cx="240" cy="58" r="5" fill="#1d4ed8"/>

      <!-- UNKNOWN SAMPLE INTERPOLATION -->
      <!-- Dotted line from y=130 across to curve (x=150) and down to x-axis -->
      <line x1="0" y1="130" x2="150" y2="130" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 3"/>
      <line x1="150" y1="130" x2="150" y2="250" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 3"/>
      <circle cx="150" cy="130" r="6" fill="#dc2626"/>

      <!-- Unknown annotation callout -->
      <g transform="translate(160, 115)">
        <rect x="0" y="0" width="150" height="46" rx="6" fill="#fef2f2" stroke="#ef4444"/>
        <text x="10" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b91c1c">Unknown Sample:</text>
        <text x="10" y="34" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#dc2626">Abs = 0.40 → 5.0 mmol dm⁻³</text>
      </g>
    </g>
  </g>
</svg>`,

  "disaccharides-structure.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 620" width="100%" height="auto">
  <!-- Section 1: MALTOSE -->
  <g transform="translate(30, 15)">
    <!-- Header Badge -->
    <rect x="0" y="0" width="220" height="28" rx="4" fill="#f1f5f9" stroke="#334155" stroke-width="1.2"/>
    <text x="110" y="19" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">MALTOSE (α-1,4-Glycosidic Bond)</text>
    <rect x="230" y="3" width="105" height="22" rx="11" fill="#ecfdf5" stroke="#a7f3d0"/>
    <text x="282.5" y="18" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#059669">Reducing Sugar</text>

    <!-- Reaction Equation -->
    <g transform="translate(10, 45)">
      <text x="0" y="14" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155">α-glucose + α-glucose</text>
      <text x="145" y="14" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ea580c">──(Condensation)──></text>
      <text x="290" y="14" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">Maltose + H₂O</text>
    </g>

    <!-- Maltose Structure Sketch -->
    <g transform="translate(15, 80)">
      <!-- Left ring (C1) -->
      <polygon points="0,-20 35,-20 55,5 35,30 0,30 -20,5" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
      <circle cx="30" cy="-16" r="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>
      <text x="30" y="-13" text-anchor="middle" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#dc2626">O</text>
      <text x="10" y="8" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">α-Glucose</text>
      <text x="45" y="5" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#64748b">C1</text>

      <!-- Central alpha-1,4 Oxygen bridge -->
      <line x1="55" y1="5" x2="85" y2="18" stroke="#1e293b" stroke-width="2.5"/>
      <circle cx="85" cy="18" r="10" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
      <text x="85" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#0f172a">O</text>
      <line x1="85" y1="18" x2="115" y2="5" stroke="#1e293b" stroke-width="2.5"/>

      <!-- Right ring (C4) -->
      <g transform="translate(135, 0)">
        <polygon points="0,-20 35,-20 55,5 35,30 0,30 -20,5" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
        <circle cx="30" cy="-16" r="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>
        <text x="30" y="-13" text-anchor="middle" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#dc2626">O</text>
        <text x="10" y="8" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">α-Glucose</text>
        <text x="-15" y="5" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#64748b">C4</text>
        <text x="45" y="5" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#059669">C1 (free –OH)</text>
      </g>

      <!-- Callout note -->
      <g transform="translate(420, -5)">
        <rect x="0" y="0" width="410" height="50" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="15" y="20" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#0f172a">• Produced during digestion of starch by <tspan font-weight="800" fill="#0284c7">amylase</tspan></text>
        <text x="15" y="38" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" fill="#475569">• Hydrolysed to 2 glucose molecules by <tspan font-weight="700" fill="#0284c7">maltase</tspan> in small intestine</text>
      </g>
    </g>
  </g>

  <!-- Divider line -->
  <line x1="30" y1="185" x2="890" y2="185" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4 4"/>

  <!-- Section 2: SUCROSE -->
  <g transform="translate(30, 205)">
    <rect x="0" y="0" width="220" height="28" rx="4" fill="#f1f5f9" stroke="#334155" stroke-width="1.2"/>
    <text x="110" y="19" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">SUCROSE (α-1,2-Glycosidic Bond)</text>
    <rect x="230" y="3" width="130" height="22" rx="11" fill="#fef2f2" stroke="#fecaca"/>
    <text x="295" y="18" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#dc2626">Non-Reducing Sugar</text>

    <!-- Reaction Equation -->
    <g transform="translate(10, 45)">
      <text x="0" y="14" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155">α-glucose + β-fructose</text>
      <text x="145" y="14" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ea580c">──(Condensation)──></text>
      <text x="290" y="14" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">Sucrose + H₂O</text>
    </g>

    <!-- Sucrose Structure Sketch -->
    <g transform="translate(15, 80)">
      <!-- Glucose Pyranose Ring -->
      <polygon points="0,-20 35,-20 55,5 35,30 0,30 -20,5" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
      <circle cx="30" cy="-16" r="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>
      <text x="30" y="-13" text-anchor="middle" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#dc2626">O</text>
      <text x="10" y="8" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">α-Glucose</text>
      <text x="45" y="5" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#dc2626">C1*</text>

      <!-- Central oxygen link C1 to C2 -->
      <line x1="55" y1="5" x2="85" y2="18" stroke="#1e293b" stroke-width="2.5"/>
      <circle cx="85" cy="18" r="10" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
      <text x="85" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#991b1b">O</text>
      <line x1="85" y1="18" x2="115" y2="18" stroke="#1e293b" stroke-width="2.5"/>

      <!-- Fructose Furanose Ring (5-membered) -->
      <g transform="translate(135, 0)">
        <polygon points="10,-15 35,-15 48,15 22,28 -2,15" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
        <circle cx="22" cy="-12" r="5" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>
        <text x="22" y="-9" text-anchor="middle" font-family="system-ui, sans-serif" font-size="7" font-weight="800" fill="#dc2626">O</text>
        <text x="22" y="8" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">β-Fructose</text>
        <text x="-15" y="18" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#dc2626">C2*</text>
      </g>

      <!-- Why non-reducing callout box -->
      <g transform="translate(380, -5)">
        <rect x="0" y="0" width="450" height="58" rx="6" fill="#fef2f2" stroke="#fca5a5"/>
        <text x="15" y="20" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#b91c1c">⚠️ WHY SUCROSE IS NON-REDUCING:</text>
        <text x="15" y="36" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#7f1d1d">• Bond forms between BOTH anomeric carbons (C1 of glucose &amp; C2 of fructose)</text>
        <text x="15" y="50" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#7f1d1d">• No free anomeric –OH group remains to donate electrons to Benedict's (Cu²⁺)</text>
      </g>
    </g>
  </g>

  <!-- Divider line -->
  <line x1="30" y1="385" x2="890" y2="385" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4 4"/>

  <!-- Section 3: LACTOSE -->
  <g transform="translate(30, 405)">
    <rect x="0" y="0" width="220" height="28" rx="4" fill="#f1f5f9" stroke="#334155" stroke-width="1.2"/>
    <text x="110" y="19" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">LACTOSE (β-1,4-Glycosidic Bond)</text>
    <rect x="230" y="3" width="105" height="22" rx="11" fill="#ecfdf5" stroke="#a7f3d0"/>
    <text x="282.5" y="18" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#059669">Reducing Sugar</text>

    <!-- Reaction Equation -->
    <g transform="translate(10, 45)">
      <text x="0" y="14" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155">β-galactose + β-glucose</text>
      <text x="155" y="14" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ea580c">──(Condensation)──></text>
      <text x="300" y="14" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">Lactose + H₂O</text>
    </g>

    <!-- Lactose Structure Sketch -->
    <g transform="translate(15, 80)">
      <!-- Left ring (Galactose C1) -->
      <polygon points="0,-20 35,-20 55,5 35,30 0,30 -20,5" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
      <circle cx="30" cy="-16" r="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>
      <text x="30" y="-13" text-anchor="middle" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#dc2626">O</text>
      <text x="10" y="8" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">β-Galactose</text>
      <text x="45" y="-5" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#64748b">C1</text>

      <!-- Central beta-1,4 diagonal Oxygen bridge -->
      <line x1="55" y1="-5" x2="85" y2="10" stroke="#1e293b" stroke-width="2.5"/>
      <circle cx="85" cy="10" r="10" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
      <text x="85" y="14" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#0f172a">O</text>
      <line x1="85" y1="10" x2="115" y2="25" stroke="#1e293b" stroke-width="2.5"/>

      <!-- Right ring (Glucose C4) -->
      <g transform="translate(135, 20)">
        <polygon points="0,-20 35,-20 55,5 35,30 0,30 -20,5" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
        <circle cx="30" cy="-16" r="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>
        <text x="30" y="-13" text-anchor="middle" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#dc2626">O</text>
        <text x="10" y="8" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">β-Glucose</text>
        <text x="-15" y="5" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#64748b">C4</text>
      </g>

      <!-- Callout note -->
      <g transform="translate(420, -5)">
        <rect x="0" y="0" width="410" height="50" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="15" y="20" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#0f172a">• The primary sugar found in mammalian milk</text>
        <text x="15" y="38" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" fill="#475569">• Hydrolysed by enzyme <tspan font-weight="700" fill="#0284c7">lactase</tspan> into glucose and galactose</text>
      </g>
    </g>
  </g>

  <!-- Watermark -->
  <text x="460" y="605" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">ExamGlow • IGCSE Revision</text>
</svg>`,



};

/**
 * Returns a guaranteed valid vector SVG diagram for any subject and chapter number.
 * Each chapter gets its OWN unique, topic-aligned scientific illustration!
 */
export function getChapterDiagramSvg(subjectId: string, chapterNumber: number): string {
  const sid = (subjectId || "").toLowerCase();

  // 1. Biology (0610)
  if (sid.includes("bio")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["mrs-gren.svg"]!;
    if (chapterNumber >= 2 && chapterNumber <= 5) return DIAGRAM_MAP["biology-classification.svg"]!;
    if (chapterNumber >= 6 && chapterNumber <= 9) return DIAGRAM_MAP["cell-structure.svg"]!;
    if (chapterNumber >= 18 && chapterNumber <= 20) return DIAGRAM_MAP["biological-molecules-overview.svg"]!;
    if (chapterNumber >= 21 && chapterNumber <= 25) return DIAGRAM_MAP["biology-enzyme.svg"]!;
    if (chapterNumber >= 26 && chapterNumber <= 36) return DIAGRAM_MAP["biology-photosynthesis.svg"]!;
    return DIAGRAM_MAP["mrs-gren.svg"]!;
  }

  // 2. Chemistry (0620)
  if (sid.includes("chem")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["chemistry-states-matter.svg"]!;
    if (chapterNumber === 2) return DIAGRAM_MAP["chemistry-mole-triangle.svg"]!;
    if (chapterNumber === 3) return DIAGRAM_MAP["fractional-distillation.svg"]!;
    return DIAGRAM_MAP["chemistry-states-matter.svg"]!;
  }

  // 3. Physics (0625)
  if (sid.includes("phys")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["quadratic-graph.svg"]!; // Kinematics v-t curve
    if (chapterNumber === 2) return DIAGRAM_MAP["physics-refraction.svg"]!;
    return DIAGRAM_MAP["physics-refraction.svg"]!;
  }

  // 4. Geography (0460)
  if (sid.includes("geo")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["demographic-transition.svg"]!;
    if (chapterNumber === 2) return DIAGRAM_MAP["plate-tectonics.svg"]!;
    return DIAGRAM_MAP["demographic-transition.svg"]!;
  }

  // 5. Economics (0455) & Business
  if (sid.includes("econ") || sid.includes("business")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["supply-demand.svg"]!;
    return DIAGRAM_MAP["supply-demand.svg"]!;
  }

  // 6. Computer Science (0478)
  if (sid.includes("computer") || sid.includes("ict")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["cs-logic-gates.svg"]!;
    return DIAGRAM_MAP["computer-architecture.svg"]!;
  }

  // 7. Mathematics (0580)
  if (sid.includes("math")) {
    return DIAGRAM_MAP["quadratic-graph.svg"]!;
  }

  // 8. Environmental Management (0680)
  if (sid.includes("environ")) {
    return DIAGRAM_MAP["rock-cycle.svg"]!;
  }

  // 9. Art & Design (0400)
  if (sid.includes("art")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["biology-classification.svg"]!; // colour wheel / elements grid
    if (chapterNumber === 2) return DIAGRAM_MAP["physics-refraction.svg"]!;     // light / tonal diagram
    return DIAGRAM_MAP["cell-structure.svg"]!;
  }

  // 10. Music (0410)
  if (sid.includes("music")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["supply-demand.svg"]!;          // wave / frequency metaphor
    if (chapterNumber === 2) return DIAGRAM_MAP["chemistry-states-matter.svg"]!;
    return DIAGRAM_MAP["quadratic-graph.svg"]!;                                 // waveform curve
  }

  // 11. Design & Technology (0445)
  if (sid.includes("design-and-technology") || sid.includes("design-and-tech")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["computer-architecture.svg"]!;
    if (chapterNumber === 2) return DIAGRAM_MAP["chemistry-states-matter.svg"]!;
    return DIAGRAM_MAP["computer-architecture.svg"]!;
  }

  // 12. Food & Nutrition (0648)
  if (sid.includes("food")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["biology-classification.svg"]!;
    if (chapterNumber === 2) return DIAGRAM_MAP["cell-structure.svg"]!;
    if (chapterNumber === 3) return DIAGRAM_MAP["biology-enzyme.svg"]!;         // digestion / enzyme diagram
    return DIAGRAM_MAP["biology-photosynthesis.svg"]!;
  }

  // 13. Physical Education (0413)
  if (sid.includes("physical-education") || sid === "physical-education" || (sid.includes("physical") && sid.includes("edu"))) {
    if (chapterNumber === 1) return DIAGRAM_MAP["cell-structure.svg"]!;         // muscle / skeletal cell
    if (chapterNumber === 2) return DIAGRAM_MAP["biology-enzyme.svg"]!;         // energy systems
    if (chapterNumber === 3) return DIAGRAM_MAP["quadratic-graph.svg"]!;        // performance curve
    return DIAGRAM_MAP["demographic-transition.svg"]!;
  }

  // 14. Travel & Tourism (0471)
  if (sid.includes("travel") || sid.includes("tourism")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["demographic-transition.svg"]!;
    if (chapterNumber === 2) return DIAGRAM_MAP["supply-demand.svg"]!;
    return DIAGRAM_MAP["plate-tectonics.svg"]!;                                 // world map / geography
  }

  // 15. Psychology (0478) — note: 0478 also matches "ict" check above so we must put this BEFORE it
  // (already handled: Psychology id is "psychology", ICT id is "ict" — no collision)
  if (sid.includes("psych")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["computer-architecture.svg"]!;  // research methods / process diagram
    if (chapterNumber === 2) return DIAGRAM_MAP["chemistry-mole-triangle.svg"]!; // memory triangle model
    if (chapterNumber === 3) return DIAGRAM_MAP["demographic-transition.svg"]!; // development stages
    return DIAGRAM_MAP["supply-demand.svg"]!;
  }

  // 16. Marine Science (0697)
  if (sid.includes("marine")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["plate-tectonics.svg"]!;        // ocean floor / tectonic
    if (chapterNumber === 2) return DIAGRAM_MAP["biology-classification.svg"]!; // organism classification
    if (chapterNumber === 3) return DIAGRAM_MAP["rock-cycle.svg"]!;             // ocean cycles / impacts
    return DIAGRAM_MAP["cell-structure.svg"]!;
  }

  // 17. Global Perspectives (0457)
  if (sid.includes("global") || sid.includes("perspectives")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["computer-architecture.svg"]!;
    if (chapterNumber === 2) return DIAGRAM_MAP["demographic-transition.svg"]!;
    return DIAGRAM_MAP["supply-demand.svg"]!;
  }

  // 18. Media Studies (0573)
  if (sid.includes("media")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["computer-architecture.svg"]!;
    if (chapterNumber === 2) return DIAGRAM_MAP["biology-classification.svg"]!;
    return DIAGRAM_MAP["supply-demand.svg"]!;
  }

  // 19. Drama (0411)
  if (sid.includes("drama")) {
    if (chapterNumber === 1) return DIAGRAM_MAP["demographic-transition.svg"]!;
    if (chapterNumber === 2) return DIAGRAM_MAP["cell-structure.svg"]!;
    return DIAGRAM_MAP["biology-classification.svg"]!;
  }

  return DIAGRAM_MAP["demographic-transition.svg"]!;
}

