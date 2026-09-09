import type { SubjectNotes } from "./types";

export const ART_AND_DESIGN: SubjectNotes = {
  id: "art-and-design",
  name: "Art & Design",
  code: "0400",
  color: "bg-pink-500",
  chapters: [
    {
      number: 1,
      title: "Foundations of Art & Design — Elements and Principles",
      intro:
        "Art and design are built upon a shared visual language. The **elements of art** are the fundamental building blocks — line, shape, form, colour, texture, tone, and space — while the **principles of design** describe how those elements are organised on a surface. Mastering this vocabulary allows artists and designers to make purposeful, communicative choices and to analyse both their own work and that of others.",
      subheadings: [
        {
          title: "The Elements of Art",
          body: `Every artwork — whether a watercolour painting, a graphic poster, or a textile piece — is composed of some or all of the seven elements below. Understanding each element individually enables you to use them deliberately in composition.

![Elements of Art overview diagram](/diagrams/cell-structure.svg)`,
          groups: [
            {
              subTitle: "Line",
              bullets: [
                "**Definition**: A mark made by a moving point; the most fundamental element — it defines edges, creates outlines, suggests movement, and expresses mood.",
                "**Types**: Horizontal lines convey calm and stability; vertical lines suggest power and growth; diagonal lines create energy and tension; curved lines imply softness and flow.",
                "**Contour lines**: Describe the outer edge or shape of an object.",
                "**Hatching and cross-hatching**: Parallel lines drawn closely together to build tonal value; cross-hatching adds further layers at angles to deepen shadows.",
                "**Implicit lines**: Lines implied by the arrangement of shapes or the direction of a subject's gaze — they guide the viewer's eye without being physically present.",
              ],
            },
            {
              subTitle: "Shape and Form",
              bullets: [
                "**Shape**: A two-dimensional area enclosed by a line or defined by contrast — can be **geometric** (circles, squares, triangles) or **organic** (irregular, natural forms).",
                "**Form**: Three-dimensional equivalent of shape — objects that have length, width, and depth (sphere, cube, cylinder); achieved on a 2D surface through shading and tonal modelling.",
                "**Positive and negative space**: Positive space = the main subject; negative space = the empty area surrounding it. Skilled composition balances both.",
              ],
            },
            {
              subTitle: "Colour",
              bullets: [
                "**Colour wheel**: Based on **primary** colours (red, yellow, blue in traditional theory; red, green, blue in light/additive colour).",
                "**Secondary colours**: Formed by mixing two primaries — orange, green, violet.",
                "**Tertiary colours**: Formed by mixing a primary with an adjacent secondary — red-orange, yellow-green, blue-violet, etc.",
                "**Hue, Value, Saturation**: Hue = the colour name; Value = lightness or darkness (tint = hue + white; shade = hue + black); Saturation/Chroma = purity/intensity of the colour.",
                "**Colour harmonies**: Complementary (opposite on wheel — create vibrant contrast); analogous (adjacent — create harmony); triadic (three equally spaced hues — bold balance).",
                "**Warm and cool colours**: Reds, oranges, yellows advance visually and evoke energy; blues, greens, violets recede and evoke calm.",
              ],
            },
            {
              subTitle: "Texture, Tone, and Space",
              bullets: [
                "**Texture**: The surface quality of a work — **actual/tactile texture** (physically rough or smooth) vs **visual/implied texture** (the illusion of texture in 2D work).",
                "**Tone (Value)**: The degree of lightness or darkness; tonal range creates the illusion of three-dimensionality and establishes mood — high contrast is dramatic, low contrast is subtle.",
                "**Space**: The area within and around objects. Artists use overlapping, size variation, perspective, and placement to suggest depth on a flat surface.",
              ],
            },
          ],
        },
        {
          title: "Principles of Design",
          body: "The principles of design govern how elements are arranged. They are the 'grammar' of visual composition — understanding them helps explain why some works feel harmonious while others feel chaotic or unresolved.",
          groups: [
            {
              bullets: [
                "**Balance**: Distribution of visual weight — **symmetrical** (formal, mirror-image calm), **asymmetrical** (informal balance using contrast of size, tone, or colour), **radial** (elements radiating from a centre point).",
                "**Contrast**: Placing opposing elements side by side to create visual interest — light/dark, rough/smooth, large/small, warm/cool. Contrast creates focal points.",
                "**Emphasis (Focal Point)**: The area of greatest visual interest; created through contrast, isolation, placement, or detail. The eye is drawn here first.",
                "**Rhythm and Pattern**: Repetition of elements creating visual rhythm — **regular** rhythm (equal spacing) produces predictability; **progressive** rhythm (graduating size/colour) creates movement; **random** pattern adds energy.",
                "**Unity and Harmony**: The sense that all elements belong together; achieved through repetition of colour, shape, line, and consistent style.",
                "**Proportion and Scale**: The relative size relationship between elements and the whole; **Golden Ratio** ($\\phi \\approx 1.618$) has been used since antiquity to create aesthetically pleasing proportions.",
                "**Movement**: The path the viewer's eye takes through an artwork; guided by line direction, shape arrangement, and tonal progression.",
              ],
            },
          ],
        },
        {
          title: "Media, Materials, and Processes",
          body: "Cambridge IGCSE Art & Design is a practical subject with five distinct areas of study. Candidates must develop skills in selecting, handling, and experimenting with materials appropriate to their chosen area.",
          groups: [
            {
              subTitle: "Five Areas of Study",
              bullets: [
                "**Painting and Related Media**: Watercolour, acrylic, oil, gouache, ink wash, mixed media. Key skills: wet-on-wet, wet-on-dry, glazing, impasto, resist techniques.",
                "**Graphic Communication**: Typography, layout, illustration, logo design, poster design. Key skills: lettering, grid systems, hierarchy, digital and analogue image-making.",
                "**Three-Dimensional Design**: Sculpture, ceramics, model-making. Key skills: additive and subtractive modelling, armature construction, surface treatment.",
                "**Textiles and Fashion**: Weaving, printing, embroidery, dyeing, fashion design. Key skills: resist dyeing (batik, tie-dye), screen printing, pattern-cutting.",
                "**Photography**: Digital and film-based image-making, darkroom techniques, photo-editing. Key skills: composition, exposure, depth of field, focal length, post-processing.",
              ],
            },
            {
              subTitle: "Wet Media — Painting Techniques",
              bullets: [
                "**Wet-on-wet (alla prima)**: Applying wet paint onto a still-wet surface — produces soft, blended edges ideal for skies and foliage.",
                "**Wet-on-dry**: Applying wet paint onto a dry surface — produces crisp, defined edges ideal for architectural detail.",
                "**Glazing**: Applying thin, transparent colour layers over dry paint to build luminous depth and adjust tone.",
                "**Impasto**: Thick, textured paint application using a palette knife or stiff brush — creates dramatic surface relief.",
                "**Resist techniques (wax/masking fluid)**: Blocking areas before applying colour washes to preserve white paper or earlier colour.",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: "Drawing Skills, Observational Drawing, and Tonal Rendering",
      intro:
        "Observational drawing — drawing directly from real objects, still life arrangements, the figure, or natural forms — is the cornerstone of IGCSE Art & Design. It develops hand-eye coordination, spatial understanding, proportion, and sensitivity to light. Tonal rendering transforms a flat outline into a convincing three-dimensional form.",
      subheadings: [
        {
          title: "Measuring and Proportion in Observational Drawing",
          body: "Accurate proportion is the foundation of convincing representational drawing. Artists use a range of sight-measuring techniques to transfer what they see onto the page with accuracy.",
          groups: [
            {
              bullets: [
                "**Sighting**: Holding a pencil at arm's length at a constant distance to measure comparative sizes and angles of the subject.",
                "**Blocking in**: Establishing the overall bounding shape before adding internal detail — works from general to specific.",
                "**Negative space drawing**: Drawing the spaces *around* objects rather than the objects themselves; forces the artist to see shapes objectively rather than from symbol memory.",
                "**Plumb line**: An imaginary vertical reference line dropped from a known point to check alignment of features below.",
                "**The rule of thirds**: Dividing the picture plane into a 3×3 grid and placing focal elements near the intersection points for dynamic composition.",
                "**Foreshortening**: The optical illusion of compression when a form extends toward the viewer; handled by measuring the apparent width versus height rather than drawing the 'known' length.",
              ],
            },
            {
              subTitle: "Perspective Drawing",
              bullets: [
                "**One-point perspective**: A single vanishing point on the horizon line — all receding parallel lines converge there; suited to views directly facing a scene (corridors, roads).",
                "**Two-point perspective**: Two vanishing points on the horizon line — used when viewing a corner of a box-like form; the most common perspective for architectural sketching.",
                "**Three-point perspective**: A third vanishing point above or below the horizon accounts for extreme vertical convergence — used for dramatic bird's-eye or worm's-eye views.",
                "**Atmospheric (aerial) perspective**: Objects in the distance appear lighter, bluer, and less detailed than foreground objects — created by adjusting tonal contrast and colour saturation.",
              ],
            },
          ],
        },
        {
          title: "Tonal Rendering Techniques",
          body: "Tone — the relative lightness or darkness of a surface — is what gives a drawing the illusion of three-dimensional solidity. Understanding how a directional light source creates a highlight, midtone, core shadow, reflected light, and cast shadow allows the artist to model any form convincingly.",
          groups: [
            {
              subTitle: "Light and Shadow Zones",
              bullets: [
                "**Highlight**: The brightest point where light directly strikes the surface; in graphite, leave the paper bare or use an eraser to reclaim.",
                "**Midtone (half-tone)**: Transitions between highlight and shadow — the majority of the form's colour.",
                "**Core shadow (terminator)**: The darkest part of the form itself, at the edge where direct light ends — darker than the cast shadow.",
                "**Reflected light**: Faint lightening of the shadow side caused by light bouncing off nearby surfaces — prevents the shadow from appearing flat.",
                "**Cast shadow**: The shadow projected by the form onto adjacent surfaces; its edges are hard near the object and softer further away.",
              ],
            },
            {
              subTitle: "Pencil Tonal Techniques",
              bullets: [
                "**Hatching**: Parallel lines drawn at a consistent angle; the closer the lines, the darker the tone.",
                "**Cross-hatching**: A second set of hatching lines overlaid at an angle to the first — builds deeper tones and creates a woven texture.",
                "**Blending/smudging**: Using a tortillon (paper stump) or fingertip to smooth graphite — produces smooth gradients for organic, rounded forms.",
                "**Stippling**: Creating tone through accumulations of dots — time-intensive but produces distinctive, fine-grained texture.",
                "**Contour shading**: Following the surface direction of the form with curved, parallel marks — reinforces the sense of volume.",
              ],
            },
            {
              subTitle: "Composition Strategies",
              bullets: [
                "**Rule of Thirds**: Place key elements at intersections of the thirds grid for dynamic balance.",
                "**Golden Spiral (Fibonacci composition)**: Arrange the eye path along a logarithmic spiral to create natural, harmonious movement.",
                "**Leading lines**: Roads, rivers, fences, and edges that direct the viewer's gaze toward the focal point.",
                "**Framing**: Using elements within the scene (archways, branches, doorways) to frame and emphasise the subject.",
                "**Symmetry and asymmetry**: Symmetrical compositions feel formal and stable; asymmetric ones feel dynamic and alive.",
              ],
            },
          ],
        },
        {
          title: "Contextual References and Critical Analysis",
          body: "IGCSE Art & Design requires candidates to research the work of other artists, craftspeople, and designers and demonstrate how that research has informed and influenced their own work. Analytical writing uses formal vocabulary to describe, analyse, interpret, and evaluate artworks.",
          groups: [
            {
              subTitle: "The DAIE Framework",
              bullets: [
                "**Describe**: What do you see? List the elements present — colours, shapes, marks, subject matter — without interpretation.",
                "**Analyse**: How are the elements organised? Discuss composition, use of principles, and technical processes.",
                "**Interpret**: What does it mean or communicate? What mood, message, or narrative is suggested?",
                "**Evaluate**: How successful is the work? What is its cultural context? How has it influenced your own practice?",
              ],
            },
            {
              subTitle: "Key Artists and Movements to Reference",
              bullets: [
                "**Post-Impressionism**: Van Gogh's expressive, energetic brushwork; Cézanne's geometric simplification of form — foundational for 20th-century abstraction.",
                "**Cubism**: Picasso and Braque's fragmentation of objects into geometric planes seen simultaneously from multiple viewpoints.",
                "**Bauhaus**: Integration of fine art, craft, and industrial design — 'form follows function'; key figures include Klee, Kandinsky, Moholy-Nagy.",
                "**Pop Art**: Warhol, Lichtenstein — use of commercial imagery, bold primary colours, repetition, and irony.",
                "**Contemporary textile/pattern**: Yayoi Kusama's obsessive dot patterns; William Morris's naturalistic pattern design.",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Colour Theory — Mixing, Pigments, and Colour in Context",
      intro:
        "A deep understanding of colour is essential for all five areas of study. Colour theory encompasses the science of pigment mixing, the psychology of colour perception, and the practical craft of applying colour harmoniously and expressively in artworks and designs.",
      subheadings: [
        {
          title: "Pigment Mixing and Colour Models",
          body: "There are two fundamentally different colour systems: **subtractive** colour (pigments, dyes — used in painting, printing, textiles) and **additive** colour (light — used in screen-based graphic design and photography).",
          groups: [
            {
              subTitle: "Subtractive Colour (RYB / CMYK)",
              bullets: [
                "**Traditional RYB primaries**: Red, Yellow, Blue — the basis for painting; mixing all three produces a neutral brown-grey (never true black).",
                "**CMYK (print model)**: Cyan, Magenta, Yellow (CMY) are the true subtractive primaries; Black (K = Key) is added for depth. Used in all professional printing.",
                "**Mixing chart**: Red + Yellow = Orange; Yellow + Blue = Green; Blue + Red = Violet; mixing complementaries (opposite colours) greys or neutralises each other.",
              ],
            },
            {
              subTitle: "Additive Colour (RGB)",
              bullets: [
                "**RGB primaries**: Red, Green, Blue — the primaries of light, used in screens, stage lighting, and digital photography.",
                "**Mixing RGB**: Red + Green = Yellow; Green + Blue = Cyan; Blue + Red = Magenta; all three combined = White.",
                "**Application**: Digital graphic designers work in RGB colour mode for screen output; they convert to CMYK for print.",
              ],
            },
          ],
        },
        {
          title: "Colour Psychology and Cultural Context",
          body: "Colour carries powerful psychological and cultural associations that artists and designers leverage to communicate meaning. These associations vary across cultures and must be considered thoughtfully in contextual design briefs.",
          groups: [
            {
              bullets: [
                "**Red**: Energy, passion, danger, urgency — used in advertising for calls to action; mourning colour in some South Asian contexts.",
                "**Blue**: Trust, calm, authority, depth — dominant in corporate identity (finance, technology); sky and water associations universally.",
                "**Yellow**: Optimism, warmth, caution — high visibility; the most luminous colour at mid-saturation.",
                "**Green**: Nature, growth, health, sustainability — used extensively in ecological branding.",
                "**White**: Purity, simplicity, space (Western context); mourning in East Asian cultures.",
                "**Black**: Elegance, power, formality, grief — context determines whether it reads as luxury or mourning.",
                "**Simultaneous contrast (Chevreul effect)**: Placing two colours side by side alters the perceived hue of each — a grey on a red ground looks slightly green; the same grey on a green ground looks slightly red.",
              ],
            },
          ],
        },
        {
          title: "Graphic Communication — Typography and Layout",
          body: "Graphic communication is one of the five study areas. It encompasses the design of visual information — posters, books, packaging, logos, and digital interfaces — using typography, layout, illustration, and photography in combination.",
          groups: [
            {
              subTitle: "Typography Fundamentals",
              bullets: [
                "**Typeface categories**: Serif (e.g. Times New Roman — humanistic, traditional), Sans-serif (e.g. Helvetica — modern, clean), Script (handwritten, ornamental), Display (decorative, high-impact).",
                "**Type anatomy**: Baseline, x-height, cap height, ascender, descender, counter, bowl, stem, serif.",
                "**Leading**: Line spacing — too tight causes illegibility; adequate leading improves readability.",
                "**Kerning**: Adjustment of space between specific letter pairs for optical consistency.",
                "**Tracking**: Uniform adjustment of spacing across a range of characters — wider tracking for headlines, tighter for text.",
                "**Hierarchy**: Using size, weight, colour, and style to signal importance — headline > subhead > body > caption.",
              ],
            },
            {
              subTitle: "Grid and Layout Systems",
              bullets: [
                "**Column grid**: Divides the page into vertical columns; content, images, and captions align to column edges for visual order.",
                "**Modular grid**: Both horizontal and vertical divisions creating a matrix of rectangular modules for complex editorial layouts.",
                "**White space (negative space in design)**: Strategic emptiness that gives the design room to breathe, directs attention, and signals premium or minimal aesthetics.",
                "**Visual hierarchy flow**: Z-pattern (Western left-to-right, top-to-bottom reading path) and F-pattern (web reading) inform placement of key content.",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 4,
      title: "Three-Dimensional Design — Sculpture, Ceramics, and Model-Making",
      intro:
        "Three-dimensional design requires the artist to think spatially — about volume, mass, surface, structure, and the relationship of the object to its surrounding space. Candidates working in this area explore additive and subtractive processes, a range of sculptural materials, and the history of three-dimensional art from ancient to contemporary practice.",
      subheadings: [
        {
          title: "Sculptural Processes",
          body: "Sculpture is made through four fundamental processes, often used in combination within a single artwork.",
          groups: [
            {
              bullets: [
                "**Modelling (additive)**: Building up form by adding material — clay, wax, papier-mâché, air-dry clay. An armature (internal wire or rod skeleton) supports heavy or tall structures.",
                "**Carving (subtractive)**: Removing material from a solid block — wood, stone, plaster, foam. Requires understanding the block's grain and structural weaknesses.",
                "**Construction/Assembly**: Joining separate components — welding metal, joining wood, assemblage of found objects (like Picasso's assemblage sculptures).",
                "**Casting**: Creating a mould from a model and filling it with plaster, resin, or metal — allows multiple identical copies.",
              ],
            },
            {
              subTitle: "Ceramic Hand-Building Techniques",
              bullets: [
                "**Pinch pot**: Shaping clay by pressing and rotating between thumb and fingers — the most immediate hand-building method.",
                "**Coil building**: Rolling clay into long coils and stacking them; smoothed inside and out to create larger vessels.",
                "**Slab building**: Rolling clay into flat slabs using rolling pins and guides; slabs are scored, slipped, and joined to form geometric or architectural forms.",
                "**Glazing and firing**: Glaze is a glass-forming liquid applied to bisque-fired (first-fired) pottery; the second (glost) firing melts the glaze, creating a glass-like surface — adds colour, texture, and waterproofing.",
              ],
            },
          ],
        },
        {
          title: "Textiles and Fashion Design",
          body: "Textiles is a rich area of study covering both fine art (tapestry, fibre art) and applied design (fashion, surface pattern, soft furnishings). Candidates develop skills in resist-dyeing, printing, stitch, and construction.",
          groups: [
            {
              subTitle: "Surface Decoration Techniques",
              bullets: [
                "**Batik**: A wax-resist dyeing technique — hot wax is applied to cloth with a tjanting tool or block; the cloth is dyed; the wax is removed by boiling, leaving undyed areas. Layers can be built up for complex multicolour designs.",
                "**Tie-dye (shibori)**: Binding, folding, pleating, or twisting fabric before dyeing — the tied areas resist the dye, creating pattern.",
                "**Screen printing**: A stencil-based process — ink is forced through a mesh screen onto fabric or paper; each colour requires a separate screen.",
                "**Block printing**: Carved wooden or lino blocks are inked and pressed onto fabric.",
                "**Embroidery and hand stitch**: Running stitch, backstitch, satin stitch, French knots — builds texture and pattern on cloth.",
              ],
            },
            {
              subTitle: "Fashion Design Process",
              bullets: [
                "**Brief and research**: Identifying the target customer, occasion, season, and cultural context; researching trend forecasts and historical costume.",
                "**Mood board**: A collage of visual references — colour swatches, fabric samples, photographic imagery — that establishes the design direction.",
                "**Sketch development**: Rapidly developing silhouette ideas using croquis (fashion figure templates at 9–10 heads tall).",
                "**Flat technical drawing (spec drawing)**: Scale orthographic drawing showing exact construction details, seam lines, fastenings, and proportions — used by pattern cutters.",
                "**Toile**: A prototype garment made in inexpensive calico or muslin to test fit and pattern before cutting in final fabric.",
              ],
            },
          ],
        },
        {
          title: "Photography — Composition, Exposure, and Editing",
          body: "Photography as an art form goes far beyond technically correct exposure. IGCSE Photography requires candidates to use the camera as a creative tool — making deliberate decisions about composition, light, depth of field, and post-processing to produce expressive, purposeful images.",
          groups: [
            {
              subTitle: "The Exposure Triangle",
              bullets: [
                "**Aperture (f-stop)**: Controls depth of field — wide aperture (f/1.8) = shallow depth of field (blurred background, portrait style); narrow aperture (f/16) = deep depth of field (landscape, everything sharp).",
                "**Shutter speed**: Duration the sensor is exposed — fast speed (1/2000s) freezes motion; slow speed (1/30s) creates motion blur for panning effects.",
                "**ISO**: Sensor sensitivity — low ISO (100) = clean, low-noise image; high ISO (3200) = brighter in low light but introduces digital grain/noise.",
                "**Exposure triangle balance**: These three factors work together — changing one requires adjusting another to maintain correct exposure.",
              ],
            },
            {
              subTitle: "Compositional Techniques in Photography",
              bullets: [
                "**Rule of thirds**: Off-centre subject placement at grid intersections creates visual dynamism over centred 'snapshot' composition.",
                "**Leading lines**: Roads, railways, rivers, fences drawing the eye deep into the frame.",
                "**Frame within a frame**: Shooting through doorways, windows, or foliage to create depth and direct attention.",
                "**Point of view**: High angle (overhead, bird's eye) diminishes subject; low angle (worm's eye) elevates and empowers subject.",
                "**Fill the frame**: Moving close to fill the entire frame with the subject — eliminates distracting backgrounds and creates powerful portraits.",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 5,
      title: "Personal Investigation, Portfolio Development, and Examination Preparation",
      intro:
        "The Cambridge IGCSE Art & Design assessment consists of two components: a **Personal Investigation** (portfolio developed over the course) and a **Timed Test** (drawing exam under controlled conditions). Both require candidates to demonstrate research, development, technical skill, and critical reflection.",
      subheadings: [
        {
          title: "Component 1 — Personal Investigation Portfolio",
          body: "The portfolio is a sustained investigation of a theme or starting point chosen by the candidate in consultation with their teacher. It must demonstrate all four assessment objectives across a body of work.",
          groups: [
            {
              subTitle: "Assessment Objectives (AO)",
              bullets: [
                "**AO1 — Develop**: Show evidence of sustained exploration and development of ideas through practical work and contextual research.",
                "**AO2 — Create**: Demonstrate technical skills and control of media, materials, and processes in realised outcomes.",
                "**AO3 — Reflect**: Evaluate and analyse the development of your own work, identifying strengths and areas for improvement.",
                "**AO4 — Present**: Select, organise, and present a body of work that effectively communicates ideas and intentions.",
              ],
            },
            {
              subTitle: "Portfolio Development Strategies",
              bullets: [
                "**Sketchbook as a working space**: Record all research, experiments, annotated artist studies, colour tests, thumbnail compositions, and written reflections — not a clean 'best work' album.",
                "**Artist research pages**: Include reproductions of artworks, biographical context, formal analysis using DAIE, and explicit connections to your own developing work.",
                "**Experimentation**: Test multiple media and processes for each stage — don't go straight to a final piece. The development process is worth as many marks as the final outcome.",
                "**Annotation**: Written notes alongside practical work showing your thought process, what you tried, what worked, and what you changed in response.",
                "**Final outcome**: A resolved, ambitious artwork that synthesises all the development — should not look like a first attempt.",
              ],
            },
          ],
        },
        {
          title: "Component 2 — Externally Set Assignment (Timed Test)",
          body: "Candidates are given a paper of thematic starting points several weeks before the examination. They use this preparatory period to develop ideas, and then complete a timed piece under controlled conditions.",
          groups: [
            {
              bullets: [
                "**Preparatory period**: Research, sketch development, material experiments, and artist references are completed before the timed session.",
                "**Timed session**: 10 hours total (may be split over multiple sessions) in which the candidate produces a final piece from their preparations.",
                "**Assessment**: Both preparatory work and the final timed piece are assessed together against all four AOs.",
                "**Strategy**: Choose a starting point that aligns with your strongest skills and the media you know best. Do not attempt techniques you have not practised in preparatory work.",
              ],
            },
          ],
        },
        {
          title: "Critical Studies — Major Art Movements Reference Guide",
          body: "Contextual knowledge strengthens every investigation. Below is a concise reference to key movements and their visual characteristics relevant to IGCSE study.",
          groups: [
            {
              bullets: [
                "**Impressionism (1860s–1880s)**: Monet, Renoir, Degas — loose, visible brushwork capturing light and atmosphere; painted en plein air (outdoors); broken colour instead of blended tones.",
                "**Expressionism (1905–1920s)**: Kirchner, Munch, Nolde — distorted forms, non-naturalistic colour used emotionally; communicates psychological states over realistic representation.",
                "**Surrealism (1920s–1930s)**: Dalí, Magritte, Kahlo — dream imagery, illogical juxtapositions, Freudian symbolism; meticulous realist technique used to render impossible scenes.",
                "**Abstract Expressionism (1940s–1950s)**: Pollock, de Kooning, Rothko — non-representational; emphasis on the physical act of painting and emotional authenticity; large scale.",
                "**Minimalism (1960s)**: Donald Judd, Dan Flavin — reduced to essential geometric form and industrial material; 'less is more'; no personal mark-making.",
                "**Street Art / Urban (1970s–present)**: Basquiat, Banksy, KAWS — public context, social commentary, graffiti aesthetics, mixed media.",
              ],
            },
          ],
        },
      ],
    },
  ],
};
