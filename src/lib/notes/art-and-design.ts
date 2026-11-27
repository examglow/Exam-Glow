import type { SubjectNotes } from "./types";

/**
 * Cambridge IGCSE Art & Design (0400) 2027 Syllabus Notes
 * Full 6-chapter specification covering visual elements, observational recording,
 * media processes, contextual studies, developmental progression, and coursework / exam submission.
 * Strictly text-only with zero figures.
 */
export const ART_AND_DESIGN: SubjectNotes = {
  id: "art-and-design",
  name: "Art & Design (0400)",
  code: "0400",
  color: "bg-pink-600",
  chapters: [
    {
      number: 1,
      title: "Visual Elements and Principles of Composition",
      section: "Foundations of Visual Art",
      topic: "Formal Elements, Dynamic Composition, and Spatial Organization",
      intro:
        "Art and design are communicated through a universal visual language. The formal elements (line, tone, colour, texture, shape, form, space) operate as expressive tools, while organizational principles (balance, harmony, contrast, emphasis, rhythm, proportion) govern how visual stimuli interact. Mastering this technical vocabulary is essential for critical articulation, deliberate mark-making, and intentional visual storytelling.",
      subheadings: [
        {
          title: "The Formal Elements of Art",
          body: "The building blocks of visual communication enable candidates to explore tactile, optical, and emotional qualities across diverse surfaces.",
          groups: [
            {
              subTitle: "Line and Mark-Making",
              bullets: [
                "**Linear Functions**: Continuous contour lines delineate form, gestural lines record kinetic rhythm, and structural lines establish underlying planar architecture.",
                "**Expressive Weight**: Calligraphic modulation in line thickness signals depth, shadow boundaries, and focal prioritization.",
                "**Cross-Hatching and Stippling**: Systematic planar layering of directional hatching generates gradual tonal transitions and simulated volumetric density.",
              ],
            },
            {
              subTitle: "Tone, Chiaroscuro and Value Scale",
              bullets: [
                "**9-Step Value Scale**: Mapping visual subjects from pure paper highlight (value 1) to saturated pigment occlusion (value 9) prevents mid-tone flattening.",
                "**Chiaroscuro & Sfumato**: Modeling form through pronounced atmospheric tonal contrast and seamless edge transitions creates high illusionistic three-dimensionality.",
                "**Cast vs Form Shadows**: Identifying core shadows, ambient occlusion, reflected light, and distinct cast shadow penumbras conveys true environmental illumination.",
              ],
            },
            {
              subTitle: "Colour Theory and Harmonic Relationships",
              bullets: [
                "**Primary & Secondary Primaries**: Subtractive pigment mixing relies on warm/cool primaries (e.g. Ultramarine vs Phthalo Blue, Cadmium vs Crimson) to prevent muddy tertiary degradation.",
                "**Complementary Dynamics**: Placing complementary pairings (orange/blue, red/green, yellow/violet) adjacent heightens simultaneous optical brilliance.",
                "**Tonal Value of Hues**: Recognizing the intrinsic lightness or darkness of pure pigments (e.g. natural yellow is high value, dioxazine violet is low value) ensures correct tonal rendering.",
              ],
            },
          ],
          examinerTips: [
            "Always include annotated value swatches and colour-mixing trials in your preparatory studies to prove rigorous analytical testing of media.",
            "Avoid outlining three-dimensional forms with heavy uniform wire-like black lines; establish form through planes of varying tone and lost-and-found edges.",
          ],
          commonMistakes: [
            "Relying solely on black paint or graphite to darken colours rather than mixing chromatic shadows with complementary hues.",
            "Confusing shape (two-dimensional flat boundary) with form (three-dimensional volume containing mass and depth).",
          ],
          recap: [
            "The formal elements—line, tone, colour, texture, shape, form, and space—form the foundational visual grammar assessed across all Cambridge assessment objectives.",
          ],
        },
        {
          title: "Principles of Composition and Spatial Design",
          body: "Composition determines how the viewer's eye travels across the picture plane, organizing focal points and creating visual equilibrium.",
          groups: [
            {
              subTitle: "Focal Hierarchy and Golden Ratio",
              bullets: [
                "**Rule of Thirds & Golden Section**: Placing primary visual weight at intersection points avoids static, dead-center stagnation.",
                "**Leading Lines and Sightlines**: Incorporating diagonal perspective lines, gaze vectors, and geometric rhythms to guide the spectator's gaze continuously across the plane.",
                "**Hierarchy & Scale**: Juxtaposing exaggerated foreground motifs against diminishing background elements establishes dramatic visual narrative.",
              ],
            },
            {
              subTitle: "Balance, Contrast and Negative Space",
              bullets: [
                "**Asymmetrical Balance**: Balancing a large neutral area with a small, highly saturated or intricate accent maintains energetic equilibrium without monotony.",
                "**Positive vs Negative Space**: Treating unoccupied background voids with equal compositional rigor prevents isolated 'floating' subject matter.",
                "**Tension and Cropping**: Radical cinematic cropping and frame encroachment heighten intimacy, vulnerability, and dynamic tension.",
              ],
            },
          ],
          examinerTips: [
            "Generate at least 4–6 thumbnail compositional variations exploring alternative viewpoints (worm's-eye, bird's-eye, extreme macro) before commencing a major board.",
            "Explicitly critique compositional choices using academic terms such as asymmetrical counterweight, dominant focal vector, and negative space activation.",
          ],
          commonMistakes: [
            "Placing every important focal subject dead-center, resulting in predictable and unengaging symmetrical compositions.",
            "Treating the background as an afterthought by filling negative space with flat, unmodulated brushstrokes that detach from the subject.",
          ],
          recap: [
            "Deliberate composition harmonizes visual elements through focal hierarchy, dynamic balance, and thoughtful activation of negative space.",
          ],
        },
      ],
    },
    {
      number: 2,
      title: "Observational Recording and Direct Studies",
      section: "Component 1 & 2 Core Skills",
      topic: "Primary Sourcing, Life Drawing, and Technical Recording",
      intro:
        "Direct observation from primary sources is the cornerstone of Cambridge Art & Design assessment. Candidates must demonstrate sustained engagement with real-world stimuli through first-hand life drawing, still life setups, environmental architectural studies, and experimental tactile sampling.",
      subheadings: [
        {
          title: "Working from Primary Sources",
          body: "Primary recording requires direct sensory contact with physical objects, living subjects, or architectural environments rather than copying secondary internet photographs.",
          groups: [
            {
              subTitle: "Primary vs Secondary Evidence",
              bullets: [
                "**Direct Life Observation**: Working directly in front of physical objects allows for dynamic parallax changes, natural lighting analysis, and authentic tactile understanding.",
                "**Candidate-Taken Photography**: When photographic reference is necessary, candidates must take their own photographs under controlled studio or outdoor lighting.",
                "**Tactile Engagement**: Handling surfaces—such as organic textures, rusted metal, woven fabrics, or biological specimens—informs authentic mark-making.",
              ],
            },
            {
              subTitle: "Sustained vs Rapid Recording",
              bullets: [
                "**Timed Gestural Studies**: Rapid 30-second to 2-minute charcoal sketches capture anatomical rhythm, weight distribution, and overarching posture.",
                "**Analytical Cross-Sectional Studies**: Methodical, highly rendered pencil studies capturing intricate microscopic details, surface cracks, and specular reflections.",
                "**Multi-Angle Documentation**: Recording a single object from multiple sequential rotations reveals structural volume and spatial depth.",
              ],
            },
          ],
          examinerTips: [
            "Examiners award higher marks when portfolio sheets visibly document candidate-curated primary still lifes and candid field sketches rather than stock photo reproductions.",
            "Write clear observational annotations explaining physical properties: 'Drawn directly from natural daylight source at 3 PM; raking light emphasizes textured wood grain.'",
          ],
          commonMistakes: [
            "Copying low-resolution internet images or heavily filtered social media portraits, which flattens tone and lacks original insight.",
            "Submitting isolated drawings without displaying the developmental journey, intermediate studies, or physical research context.",
          ],
          recap: [
            "Observational recording from direct primary sources provides authentic evidence of visual inquiry, spatial comprehension, and perceptual accuracy.",
          ],
        },
        {
          title: "Technical Drawing Techniques and Accuracy",
          body: "Mastering observational measurement techniques ensures anatomical and structural authenticity across challenging forms.",
          groups: [
            {
              subTitle: "Sighting and Proportional Measurement",
              bullets: [
                "**Thumb-and-Pencil Sighting**: Using a rigid straight edge held at arm's length to gauge proportional aspect ratios and compare relational angles.",
                "**Negative Shape Enclosure**: Tracing the geometric silhouette of surrounding air spaces to verify the accuracy of complex positive contours.",
                "**Plumb Lines and Horizontal Alignments**: Projecting mental vertical and horizontal grid axes across the subject to check alignment between landmarks.",
              ],
            },
            {
              subTitle: "Perspective Systems in Practice",
              bullets: [
                "**Linear Perspective (1, 2, and 3-Point)**: Locating true horizon lines, vanishing points, and converging orthogonals in complex architectural and spatial setups.",
                "**Atmospheric/Aerial Perspective**: Simulating expansive atmospheric depth by reducing tonal contrast, softening sharp edges, and cooling color temperatures toward the background.",
                "**Foreshortening**: Correctly compressing forms that advance directly toward the viewer through overlapping contour rings and dramatic scale distortion.",
              ],
            },
          ],
          examinerTips: [
            "Leave subtle light construction and sighting lines visible in your sketchbook studies; they demonstrate technical measurement and rigorous problem-solving.",
            "Pay close attention to ellipses on cylindrical objects; ensure the curve remains rounded at the edges and never pinched into sharp points.",
          ],
          commonMistakes: [
            "Drawing what the brain assumes is there rather than what the eye actually observes (e.g., drawing flat symmetrical eyes on a turned three-quarter portrait).",
            "Inconsistent perspective where multiple objects in the same scene converge toward conflicting horizon lines.",
          ],
          recap: [
            "Rigorous sighting, accurate linear perspective, and observational truth eliminate anatomical and architectural distortions.",
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Media, Materials and Technical Processes",
      section: "Practical Craft & Media Exploration",
      topic: "Wet Media, Dry Media, Printmaking, 3D and Mixed Media",
      intro:
        "Cambridge Art & Design encourages candidates to explore a wide range of conventional and non-traditional media. Rigorous experimentation with pigment viscosity, substrate tooth, resist techniques, print matrixes, and sculptural construction enables candidates to select materials that reinforce conceptual intent.",
      subheadings: [
        {
          title: "Dry Media and Mark-Making Systems",
          body: "Dry media provide direct tactile control over line quality, grain texture, and immediate tonal variation.",
          groups: [
            {
              subTitle: "Graphite, Charcoal, and Carbon",
              bullets: [
                "**Graphite Grading (9B–9H)**: Utilizing hard H pencils for precise architectural incising and soft B pencils for velvety specular shadows.",
                "**Willow vs Compressed Charcoal**: Willow charcoal permits airy, easily erased gestural washes; compressed charcoal produces non-reflective, pitch-black opacity.",
                "**Subtractive Drawing**: Coating paper in a uniform vine charcoal tone and pulling out luminous highlights using kneaded erasers and eraser pens.",
              ],
            },
            {
              subTitle: "Pastels, Conté, and Sanguine",
              bullets: [
                "**Soft vs Oil Pastels**: Soft pastels blend into seamless atmospheric gradients; oil pastels yield thick, buttery impasto resistant to aqueous washes.",
                "**Toned Paper Grounds**: Working on mid-tone gray, ochre, or kraft paper allows rapid simultaneous modeling toward dark values and white chalk highlights.",
              ],
            },
          ],
          examinerTips: [
            "Always fix dry media with appropriate workable fixative between layers to preserve crisp detail and prevent smudge contamination during transit to Cambridge.",
            "Incorporate a diverse range of mark-making tools—such as palette knives, sticks, dip pens, and stiff hog bristles—to avoid repetitive surface textures.",
          ],
          commonMistakes: [
            "Over-blending charcoal or pastel with fingers, which strips away textural vitality and leaves greasy, muddy surfaces.",
            "Using cheap cartridge paper for heavy media that requires high paper weight and abrasive tooth.",
          ],
          recap: [
            "Deliberate selection of dry media and ground papers expands range, tactile mark-making, and rapid tonal manipulation.",
          ],
        },
        {
          title: "Wet Media, Printmaking and Mixed Media Processes",
          body: "Mastering fluid dynamics, opaque layering, chemical resists, and print transfer systems creates rich visual and physical surfaces.",
          groups: [
            {
              subTitle: "Aqueous and Opaque Painting Media",
              bullets: [
                "**Watercolor Glazing**: Applying transparent washes wet-on-dry builds rich optical depth, while wet-in-wet produces soft atmospheric diffusion.",
                "**Acrylic Modifiers and Body**: Heavy-body acrylics retain knife impasto marks; fluid acrylics glaze cleanly; modeling paste creates raised sculptural reliefs.",
                "**Oil Painting (Fat-over-Lean)**: Increasing oil medium content in progressive layers prevents upper films from cracking over flexible under-paintings.",
              ],
            },
            {
              subTitle: "Printmaking and Transfer Techniques",
              bullets: [
                "**Monoprinting**: Subtractive wiping or direct roll-up on acrylic plates produces spontaneous, highly textured single impressions.",
                "**Relief Printing (Lino & Woodblock)**: Gouging negative white space leaves raised matrix lines to receive brayer-rolled ink for graphic contrast.",
                "**Collagraphy**: Building collage plates from textured materials (textiles, thread, sand, plaster) creates variable intaglio and relief surfaces.",
              ],
            },
          ],
          examinerTips: [
            "Present clear step-by-step samples of print states (first proof, reduction stages, final multi-colour print) on your development boards.",
            "Annotate why a specific medium was chosen: explain how acrylic impasto captures the raw energy of urban architecture or how delicate watercolor glazes evoke transient light.",
          ],
          commonMistakes: [
            "Applying heavy wet washes to light paper without stretching, resulting in severe paper warping and buckling.",
            "Arbitrary mixed-media collaging that obscures rather than clarifies the candidate's core visual idea.",
          ],
          recap: [
            "Aqueous media and printmaking techniques demonstrate material mastery and enrich narrative concepts through textured surfaces.",
          ],
        },
      ],
    },
    {
      number: 4,
      title: "Contextual Studies and Artist Investigation (AO3)",
      section: "Critical Engagement & Cultural Inquiry",
      topic: "Art Historical Research, Critical Analysis, and Visual Transcription",
      intro:
        "Assessment Objective 3 (AO3) requires candidates to research, analyse, and relate their personal work to artists, designers, and cultural movements across historical and contemporary contexts. This involves rigorous visual analysis, contextual inquiry, and thoughtful practical transcription.",
      subheadings: [
        {
          title: "Critical Analysis of Art and Culture",
          body: "Evaluating artwork requires a structured methodology that examines form, technique, historical context, and philosophical meaning.",
          groups: [
            {
              subTitle: "The Four Pillars of Critical Analysis",
              bullets: [
                "**Form & Formal Elements**: How has the artist deployed colour schemes, tonal dynamics, brushwork texture, and compositional axes?",
                "**Process & Technique**: What exact physical tools, pigments, binding agents, and mechanical workflows were utilized to fabricate the work?",
                "**Content & Iconography**: What symbols, cultural allegories, narrative themes, and psychological motifs are embedded within the imagery?",
                "**Context & Era**: What historical events, political regimes, scientific discoveries, or religious philosophies shaped the artist's worldview?",
              ],
            },
            {
              subTitle: "Selecting Diverse and Relevant Practitioners",
              bullets: [
                "**Connecting Historical with Contemporary**: Juxtaposing a classical Renaissance master (e.g., Caravaggio) with a cutting-edge contemporary artist (e.g., Jenny Saville).",
                "**Cross-Cultural Perspectives**: Investigating indigenous patterns, non-Western ceramic traditions, Islamic geometry, or Japanese printmaking alongside Western traditions.",
              ],
            },
          ],
          examinerTips: [
            "Avoid writing lengthy biographical essays on artists; examiners want your critical evaluation of their visual techniques and conceptual strategies.",
            "Use precise art-historical vocabulary: write 'tenebrism', 'impasto', 'alla prima', 'expressionist distortion', or 'gestural abstraction' rather than vague descriptions.",
          ],
          commonMistakes: [
            "Cutting and pasting Wikipedia biographies and artist statements without offering personal critique or contextual evaluation.",
            "Selecting artists whose styles have zero conceptual or visual link to the candidate's personal project theme.",
          ],
          recap: [
            "AO3 is satisfied through focused critical analysis of formal qualities, context, and philosophical meaning rather than generic biographical summaries.",
          ],
        },
        {
          title: "Practical Response and Visual Transcription",
          body: "Candidates must translate artist research into their own practice through transcription and creative synthesis rather than superficial copying.",
          groups: [
            {
              subTitle: "Analytical Transcription vs Blind Copying",
              bullets: [
                "**Deconstructive Studies**: Reproducing a small section of an artist's painting to isolate and master their specific brush-handling, glazing, or palette choice.",
                "**Methodology Adoption**: Adopting the artist's procedural technique (e.g., Lucian Freud's structural impasto planes) to render the candidate's own primary subject.",
              ],
            },
            {
              subTitle: "Synthesis and Evolution into Original Work",
              bullets: [
                "**Hybridization**: Blending technical strategies from two contrasting practitioners to forge an original personal visual dialect.",
                "**Conceptual Recontextualization**: Translating a historical artist's thematic concept (e.g., Vanitas still lifes) into contemporary sociopolitical commentary.",
              ],
            },
          ],
          examinerTips: [
            "Always position your artist transcription directly next to your own primary observational study to clearly demonstrate how their technique informed your work.",
            "Write reflective annotations: 'By experimenting with Anselm Kiefer's textural layering of straw and emulsion, I developed this tactile surface to represent urban decay.'",
          ],
          commonMistakes: [
            "Producing an isolated copy of a famous painting and abandoning that artist's technique for the rest of the sketchbook.",
            "Simply mimicking an artist's finished style without understanding the underlying technical and conceptual methodology.",
          ],
          recap: [
            "Effective artistic transcription absorbs and repurposes an artist's technique to advance the candidate's independent visual investigation.",
          ],
        },
      ],
    },
    {
      number: 5,
      title: "Development of Ideas and Creative Intentions (AO1 & AO2)",
      section: "Ideation & Iterative Workflow",
      topic: "Mind-Mapping, Thumbnail Iterations, and Media Experimentation",
      intro:
        "Assessment Objectives 1 (AO1) and 2 (AO2) demand clear, unbroken visual narratives illustrating the birth, evolution, and refinement of creative ideas. Candidates must show deliberate decision-making, visual problem-solving, and continuous experimentation leading logically toward final outcomes.",
      subheadings: [
        {
          title: "Visual Ideation and Conceptual Brainstorming",
          body: "Effective projects start with expansive conceptual exploration before focusing on a clear, personal thematic trajectory.",
          groups: [
            {
              subTitle: "Mind-Mapping and Thematic Divergence",
              bullets: [
                "**Multi-Layered Conceptual Mapping**: Branching out from a broad syllabus starting point (e.g., 'Reflections') into scientific, psychological, architectural, and metaphorical sub-themes.",
                "**Visual Brainstorming**: Supplementing textual mind-maps with small photo fragments, material swatches, and rapid intuitive sketches.",
                "**Formulating an Independent Intent**: Defining a focused personal thesis: 'Exploring internal psychological anxiety through fractured urban architectural reflections.'",
              ],
            },
            {
              subTitle: "Iterative Thumbnail Refinement",
              bullets: [
                "**Framing and Viewpoint Sequences**: Testing low-angle foreshortening, birds-eye panoramas, and panoramic letterbox formats across small rapid thumbnails.",
                "**Tonal Notan Studies**: Creating high-contrast black-and-white miniature studies to evaluate compositional balance before committing to colour.",
              ],
            },
          ],
          examinerTips: [
            "Document failed experiments alongside successful breakthroughs; examiners reward candidates who demonstrate thoughtful problem-solving and critical self-evaluation.",
            "Ensure that every page in your portfolio directly connects to the previous one, forming a cohesive visual journey.",
          ],
          commonMistakes: [
            "Jumping straight from a mind-map to a large final piece without showing progressive compositional testing and refinement.",
            "Including decorative borders, glitter, or irrelevant scrapbooking elements that distract from substantive artistic investigation.",
          ],
          recap: [
            "AO1 and AO2 require transparent documentation of ideation, thumbnail variation, and progressive visual refinement.",
          ],
        },
        {
          title: "Media Testing and Resolving Compositions",
          body: "Testing materials against compositional studies ensures the final piece is technically sound and visually impactful.",
          groups: [
            {
              subTitle: "Scale and Substrate Trials",
              bullets: [
                "**Testing Substrate Interactions**: Comparing how mixed media behaves on hot-pressed smooth paper, textured rough paper, raw linen, wooden panel, or metal sheet.",
                "**Sectional Mockups at Full Scale**: Executing a 1:1 scale test of the most challenging detail (such as a focal eye, complex reflection, or intricate fabric fold).",
              ],
            },
            {
              subTitle: "Self-Critique and Course Correction",
              bullets: [
                "**Critical Annotation**: Annotating developmental studies to explain what succeeded, what failed, and how subsequent iterations will resolve the issue.",
                "**Refining Palette Harmonization**: Restricting colour choices to a controlled, unified palette that reinforces the emotional mood of the subject.",
              ],
            },
          ],
          examinerTips: [
            "Keep written annotations concise, legible, and directly tied to visual decisions; avoid unnecessary personal narratives that do not critique the work.",
            "Take photographs of work in progress to document key decision points before committing to irreversible media applications.",
          ],
          commonMistakes: [
            "Over-annotating with large blocks of unreadable handwriting that crowd out vital visual work.",
            "Sticking to safe, predictable techniques rather than taking calculated creative risks during media trials.",
          ],
          recap: [
            "Systematic media trials and reflective annotations build the technical foundation needed to execute confident final outcomes.",
          ],
        },
      ],
    },
    {
      number: 6,
      title: "Coursework Portfolio, ESA Exam and Assessment Mastery",
      section: "Submission Standards & Exam Execution",
      topic: "Component 1 Portfolio, Component 2 8-Hour Test, and AO1–AO4 Criteria",
      intro:
        "Cambridge IGCSE Art & Design requires two distinct components: Component 1 (Coursework Assignment) and Component 2 (Externally Set Assignment). Both are assessed against four equally weighted Assessment Objectives (AO1–AO4, 25% each). Success depends on curated presentation, technical consistency, and focused execution under timed examination conditions.",
      subheadings: [
        {
          title: "Component 1 and Component 2 Structure",
          body: "Understanding the precise submission requirements for the Coursework Portfolio and the timed practical test ensures all criteria are met.",
          groups: [
            {
              subTitle: "Component 1: Coursework Assignment",
              bullets: [
                "**Portfolio Supporting Sheets**: Up to four single-sided A2 sheets (or eight A3 sides) showcasing primary recording, artist research, and media development.",
                "**One Resolved Final Outcome**: A finished artwork executed on canvas, heavy paper, textile, or sculptural armature representing the culmination of the supporting studies.",
                "**Independent Thematic Freedom**: Candidates choose their own theme, establishing a personal creative direction.",
              ],
            },
            {
              subTitle: "Component 2: Externally Set Assignment (ESA)",
              bullets: [
                "**Cambridge Question Paper**: Candidates select one starting point from the early-release paper (prompts include visual, conceptual, and text-based triggers).",
                "**Preparatory Supporting Period**: Several weeks of classroom and independent investigation documented on up to two single-sided A2 sheets (or four A3 sides).",
                "**8-Hour Practical Examination**: Supervised timed test where candidates produce a resolved final outcome without teacher assistance.",
              ],
            },
          ],
          examinerTips: [
            "Curate your supporting sheets carefully: select only your strongest work so that every drawing, swatch, and annotation earns marks across the objectives.",
            "Rehearse your 8-hour final outcome by completing a timed 4-hour practice run to ensure your painting or sculpture can be completed within the time limit.",
          ],
          commonMistakes: [
            "Submitting more sheets than the syllabus allows, which results in excess sheets being removed and unassessed by examiners.",
            "Arriving at the 8-hour examination without a clear, fully resolved compositional plan, leading to panic and incomplete work.",
          ],
          recap: [
            "Component 1 and Component 2 both require well-curated supporting study sheets and a resolved outcome demonstrating mastery of all four assessment objectives.",
          ],
        },
        {
          title: "Mastering the Four Assessment Objectives (AO1–AO4)",
          body: "A top-grade submission (Grade 9 / A*) demonstrates balanced excellence across all four Cambridge Assessment Objectives.",
          groups: [
            {
              subTitle: "The Four Criteria (25% Each)",
              bullets: [
                "**AO1: Record**: Primary observational studies, candid photography, sensitive direct drawing, and personal sensory engagement.",
                "**AO2: Explore**: Experimenting with media, testing substrates, varying compositions, and embracing creative problem-solving.",
                "**AO3: Develop**: Researching artists and cultural movements, conducting critical analysis, and integrating insights into personal work.",
                "**AO4: Present**: Delivering a resolved, technically proficient final outcome that realizes creative intentions with coherence and flair.",
              ],
            },
            {
              subTitle: "Mounting, Curation and Presentation Standards",
              bullets: [
                "**Board Layout Logic**: Group studies logically with clear visual flow (top-left to bottom-right), consistent margins, and secure archival adhesion.",
                "**Packaging and Safety**: Ensure all wet media is thoroughly dry, oil pastels and charcoals are properly fixed, and fragile three-dimensional work is carefully photographed from multiple angles.",
              ],
            },
          ],
          examinerTips: [
            "Check that all four assessment objectives are visibly represented across every supporting board; an imbalance (such as no artist research) caps the overall grade.",
            "Use clean, professional mounting: neutral white or off-white card keeps the examiner's focus entirely on your artwork.",
          ],
          commonMistakes: [
            "Allowing one objective to dominate (e.g., spending 70% of the portfolio on observational drawing while neglecting artist research and media exploration).",
            "Attaching heavy 3D objects with weak adhesive, causing work to detach and get damaged inside the transit package.",
          ],
          recap: [
            "Top Cambridge grades require a balanced, cohesive portfolio scoring high marks across AO1 (Record), AO2 (Explore), AO3 (Develop), and AO4 (Present).",
          ],
        },
      ],
    },
  ],
};
