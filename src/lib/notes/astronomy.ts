import type { SubjectNotes } from "./types";

export const ASTRONOMY: SubjectNotes = {
  id: "astronomy",
  name: "Astronomy",
  code: "0617",
  color: "bg-indigo-600",
  chapters: [
    {
      number: 1,
      title: "The Earth in Space",
      intro: "Earth is a rocky planet orbiting the Sun at a mean distance of 1 AU (approximately 1.5 × 10^8 km). It completes one revolution every 365.25 days and rotates on its axis once every 24 hours. The axial tilt of approximately 23.5° relative to the orbital plane is responsible for the seasonal variation in solar energy received at different latitudes. Understanding Earth's position and motion in space underpins every other area of observational and theoretical astronomy in the IGCSE syllabus.",
      subheadings: [
        {
          title: "Earth's Rotation and Revolution",
          body: "Earth's rotation (spin on its own axis, west to east) produces the apparent daily motion of celestial objects across the sky — rising in the east, setting in the west. One complete rotation defines the solar day (24 h). Earth's revolution (orbital motion around the Sun) takes 365.25 days; the extra 0.25 day is accumulated into a leap year every four years.",
          groups: [
            {
              subTitle: "Key Definitions",
              bullets: [
                "**Solar day**: The time between two successive passages of the Sun across the meridian — 24 hours. Slightly longer than the sidereal day because Earth has moved along its orbit.",
                "**Sidereal day**: Earth's rotation period relative to distant stars — approximately 23 h 56 min.",
                "**Ecliptic**: The apparent annual path of the Sun against the background stars, lying in the plane of Earth's orbit.",
                "**Celestial equator**: The projection of Earth's equator onto the celestial sphere, inclined at 23.5° to the ecliptic."
              ]
            },
            {
              subTitle: "Seasons",
              bullets: [
                "**Cause**: The 23.5° axial tilt, not the varying Earth–Sun distance. When the Northern Hemisphere tilts toward the Sun, it receives more direct radiation and longer days — summer.",
                "**Summer solstice (N. Hemisphere)**: ~21 June; Sun at maximum northerly declination (+23.5°); longest day.",
                "**Winter solstice (N. Hemisphere)**: ~21 December; Sun at maximum southerly declination (−23.5°); shortest day.",
                "**Equinoxes**: ~21 March and ~23 September; Sun crosses the celestial equator; day and night approximately equal in length globally.",
                "**Examiner note**: Always state that seasons are caused by axial tilt, not distance. Earth is actually closest to the Sun (perihelion) in January."
              ]
            }
          ]
        },
        {
          title: "The Moon — Phases, Eclipses, and Tides",
          body: "The Moon is Earth's only natural satellite, orbiting at a mean distance of 384,400 km with a period of 27.3 days (sidereal) or 29.5 days (synodic). Tidal locking means the same face always points toward Earth. The Moon produces visible phases as the geometry of the Sun–Earth–Moon system changes, and causes solar and lunar eclipses at specific alignments.",
          groups: [
            {
              subTitle: "Lunar Phases",
              bullets: [
                "**New Moon**: Moon between Sun and Earth; the illuminated hemisphere faces away from us; Moon rises and sets with the Sun.",
                "**First Quarter**: Moon 90° east of Sun; right half illuminated (N. Hemisphere); rises at noon, sets at midnight.",
                "**Full Moon**: Earth between Sun and Moon; entire face illuminated; rises at sunset, sets at sunrise.",
                "**Third Quarter**: Moon 90° west of Sun; left half illuminated; rises at midnight, sets at noon.",
                "**Waxing**: Increasing illumination from New to Full. **Waning**: decreasing illumination from Full back to New."
              ]
            },
            {
              subTitle: "Eclipses",
              bullets: [
                "**Solar eclipse**: Moon passes directly between Sun and Earth (at New Moon); Moon's umbra traces a narrow path of totality across Earth's surface; penumbral shadow produces a partial eclipse over a wider area.",
                "**Lunar eclipse**: Earth passes between Sun and Moon (at Full Moon); Moon enters Earth's shadow; visible from the entire night-side hemisphere; Moon appears red (Rayleigh scattering of sunlight refracted through Earth's atmosphere).",
                "**Why not every month**: The Moon's orbit is inclined ~5° to the ecliptic, so it usually passes above or below Earth's shadow and the Sun's shadow zone."
              ]
            },
            {
              subTitle: "Tides",
              bullets: [
                "**Cause**: Differential gravitational pull of the Moon (and to a lesser extent the Sun) across Earth's diameter stretches the oceans into two tidal bulges.",
                "**Spring tides**: Sun, Earth and Moon aligned (New or Full Moon); solar and lunar tidal forces add — highest high tides, lowest low tides.",
                "**Neap tides**: Moon at first or third quarter; solar and lunar forces act at 90° — reduced tidal range."
              ]
            }
          ]
        },
        {
          title: "The Solar System",
          body: "The Solar System consists of the Sun, eight planets, dwarf planets (including Pluto), moons, asteroids (concentrated in the belt between Mars and Jupiter), comets (icy bodies with highly elliptical orbits), and meteoroids. Planets are classified as either terrestrial (rocky, dense, inner) or Jovian/gas giants (large, low density, outer).",
          groups: [
            {
              subTitle: "Planetary Properties",
              bullets: [
                "**Terrestrial planets** (Mercury, Venus, Earth, Mars): Small, rocky, high density (~4–5.5 g cm⁻³), thin or no ring systems, few moons.",
                "**Gas giants** (Jupiter, Saturn): Composed mainly of hydrogen and helium; very large; low mean density; many moons; prominent ring systems.",
                "**Ice giants** (Uranus, Neptune): Composed largely of water, ammonia, and methane ices; intermediate between terrestrial and gas giants in composition.",
                "**Kepler's Third Law**: $T^2 \\propto r^3$ — the square of a planet's orbital period is proportional to the cube of its mean orbital radius. Allows orbital periods and distances to be calculated.",
                "**Bode's Law**: An approximate empirical rule predicting planetary distances in AU; useful for historical context but not a physical law."
              ]
            },
            {
              subTitle: "Small Solar System Bodies",
              bullets: [
                "**Asteroids**: Rocky/metallic bodies mostly in the Main Belt (2.2–3.2 AU); remnants from the early Solar System that did not coalesce into a planet due to Jupiter's gravity.",
                "**Comets**: Icy nuclei (dirty snowballs) with highly eccentric orbits; develop a coma and two tails (dust tail curved along orbit; ion/plasma tail always pointing away from Sun) when close to the Sun.",
                "**Meteors and meteorites**: Meteoroids that enter Earth's atmosphere and burn up (meteors, 'shooting stars'); those that reach the surface are meteorites."
              ]
            }
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Stars and Stellar Evolution",
      intro: "Stars are self-luminous gaseous bodies that generate energy through nuclear fusion in their cores. The Sun is a typical middle-aged main-sequence star. Stars are born from nebulae, spend most of their lives on the main sequence, and end their lives in ways that depend critically on their initial mass. The Hertzsprung–Russell (H-R) diagram is the central tool for classifying and understanding stellar evolution.",
      subheadings: [
        {
          title: "Stellar Characteristics and the H-R Diagram",
          body: "The Hertzsprung–Russell diagram plots luminosity (or absolute magnitude) against surface temperature (or spectral class) for a population of stars. Most stars lie on the diagonal main sequence running from hot, luminous blue stars (upper left) to cool, dim red stars (lower right). Giants and supergiants occupy the upper right; white dwarfs occupy the lower left.",
          groups: [
            {
              subTitle: "Key Stellar Properties",
              bullets: [
                "**Luminosity**: Total energy output per second (watts). The Sun's luminosity $L_\\odot \\approx 3.8 \\times 10^{26}$ W is the standard reference.",
                "**Absolute magnitude (M)**: The apparent magnitude a star would have at a standard distance of 10 pc. Lower (more negative) values = brighter.",
                "**Apparent magnitude (m)**: Brightness as seen from Earth; depends on both intrinsic luminosity and distance.",
                "**Distance modulus**: $m - M = 5\\log_{10}(d/10)$ where d is in parsecs.",
                "**Spectral classes** (OBAFGKM, hottest to coolest): O (blue, >30,000 K), B (blue-white), A (white), F (yellow-white), G (yellow — Sun), K (orange), M (red, <3,500 K).",
                "**Stefan–Boltzmann Law**: $L = 4\\pi R^2 \\sigma T^4$ — luminosity depends on radius squared and temperature to the fourth power."
              ]
            },
            {
              subTitle: "Main Sequence and Giant Branches",
              bullets: [
                "**Main sequence**: Region where stars fuse hydrogen to helium in their cores; the position on the MS is determined almost entirely by mass — more massive stars are hotter and more luminous.",
                "**Red giants**: Post-MS stars with exhausted hydrogen cores; helium shell burning causes outer envelope to expand and cool; higher luminosity, lower surface temperature.",
                "**Supergiants**: Very massive post-MS stars; extremely high luminosity ($10^5$–$10^6 L_\\odot$); short lives.",
                "**White dwarfs**: Remnant cores of low/medium mass stars; no fusion; supported by electron degeneracy pressure; very hot but tiny — lower right of H-R diagram."
              ]
            }
          ]
        },
        {
          title: "Stellar Evolution by Mass",
          body: "A star's mass is the single most important factor determining its evolutionary path, lifespan, and ultimate fate. Low-mass stars (like the Sun) live billions of years and end as white dwarfs; high-mass stars live millions of years and end violently as supernovae, producing neutron stars or black holes.",
          groups: [
            {
              subTitle: "Low/Medium Mass Stars (like the Sun)",
              bullets: [
                "**Nebula → Protostar**: Gravitational contraction of a gas and dust cloud raises core temperature until hydrogen fusion ignites.",
                "**Main sequence**: Hydrogen fusion in core; hydrostatic equilibrium between gravity and radiation pressure; Sun will remain on MS for ~10 billion years total.",
                "**Red giant**: Core hydrogen exhausted; helium shell fusion; outer layers expand; peak surface temperature decreases.",
                "**Planetary nebula**: Outer layers ejected into space forming a glowing shell of ionised gas.",
                "**White dwarf**: Remaining hot carbon/oxygen core; supported by electron degeneracy pressure; gradually cools over billions of years."
              ]
            },
            {
              subTitle: "High Mass Stars (> ~8 Solar Masses)",
              bullets: [
                "**Short MS lifespan**: More massive stars burn fuel faster; lifetimes of millions (not billions) of years.",
                "**Red supergiant**: Post-MS expansion; can fuse progressively heavier elements up to iron (Fe); iron fusion is endothermic — no further energy release.",
                "**Type II Supernova**: Catastrophic core collapse when iron core exceeds Chandrasekhar limit (~1.4 $M_\\odot$); outer layers explode; brightness can outshine entire galaxy.",
                "**Neutron star**: Remnant of ~8–20 $M_\\odot$ stars; incredibly dense ($\\rho \\approx 10^{17}$ kg m⁻³); rotating neutron stars are detected as pulsars.",
                "**Black hole**: Remnant of the most massive stars (> ~20 $M_\\odot$); escape velocity exceeds speed of light; event horizon marks the point of no return."
              ]
            }
          ]
        },
        {
          title: "Galaxies and the Universe",
          body: "The Milky Way is a barred spiral galaxy containing approximately 200–400 billion stars. The Solar System is located in the Orion Arm, about 26,000 light-years from the galactic centre. The observable universe contains an estimated 2 trillion galaxies. Hubble's Law and the cosmic microwave background (CMB) provide key evidence for the Big Bang model of cosmology.",
          groups: [
            {
              subTitle: "Galaxy Types",
              bullets: [
                "**Spiral galaxies**: Disc with spiral arms; ongoing star formation in arms; central bulge; Milky Way and Andromeda are spirals.",
                "**Elliptical galaxies**: Range from nearly spherical (E0) to elongated (E7); little gas or dust; mostly old red stars; no active star formation.",
                "**Irregular galaxies**: No regular shape; often result from gravitational interaction; example: Large and Small Magellanic Clouds."
              ]
            },
            {
              subTitle: "Hubble's Law and the Expanding Universe",
              bullets: [
                "**Redshift**: Light from distant galaxies is shifted to longer (redder) wavelengths because galaxies are receding — Doppler effect applied to light.",
                "**Hubble's Law**: $v = H_0 d$ — recession velocity is proportional to distance; $H_0 \\approx 70$ km s⁻¹ Mpc⁻¹.",
                "**Big Bang**: The universe began from an extremely hot, dense state ~13.8 billion years ago and has been expanding ever since.",
                "**Cosmic Microwave Background (CMB)**: Thermal radiation permeating the universe; relic of the hot early universe ~380,000 years after the Big Bang; key evidence for the Big Bang model.",
                "**Dark matter and dark energy**: ~27% of the universe is dark matter (undetected except gravitationally); ~68% is dark energy (driving accelerating expansion)."
              ]
            }
          ]
        }
      ]
    }
  ]
};
