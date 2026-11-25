import type { Chapter } from "./types";

const IMG = "/notes/art-design";

function artPanel(items: { src: string; alt: string; caption: string }[]) {
  const tiles = items
    .map((it, i) => {
      const solo = items.length % 2 === 1 && i === items.length - 1;
      return `<figure class="m-0 min-w-0${solo ? " sm:col-span-2" : ""}">
        <div class="overflow-hidden rounded-xl bg-[#f7f5f2]"><img src="${IMG}/${it.src}" alt="${it.alt}" loading="lazy" class="aspect-square w-full object-cover${solo ? " sm:aspect-[2/1] sm:object-contain" : ""}" /></div>
        <figcaption class="mt-2.5 text-center text-[13px] font-bold text-zinc-100">${it.caption}</figcaption>
      </figure>`;
    })
    .join("");
  return `:::raw
<div class="overflow-hidden rounded-2xl bg-[#1b1d1f] px-4 py-5 sm:px-8 sm:py-8">
  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">${tiles}</div>
</div>
:::`;
}

const panelA = artPanel([
  {
    src: "art2-sighting.webp",
    alt: "A student holding a pencil at arm's length to measure a still life before drawing it on a board",
    caption: "Sighting at arm's length keeps proportion honest",
  },
  {
    src: "art2-value-sphere.webp",
    alt: "A graphite sphere shaded with highlight, midtone, core shadow, reflected light and cast shadow beside a five-step value scale",
    caption: "A sphere built from five separate tones",
  },
]);

const panelB = artPanel([
  {
    src: "art2-perspective.webp",
    alt: "A two-point perspective drawing of a street corner with horizon line, vanishing points and receding guide lines",
    caption: "One street corner, two distant vanishing points",
  },
  {
    src: "art2-contact-sheet.webp",
    alt: "A photographic contact sheet of a street scene with selected frames marked and notes written in the margins",
    caption: "Contact sheets record frames chosen before printing",
  },
]);

const panelC = artPanel([
  {
    src: "art2-colour-studies.webp",
    alt: "A sketchbook page of painted colour swatches, surface samples and handwritten mixing notes",
    caption: "Swatches record exactly what the eye saw",
  },
  {
    src: "art2-contextual-research.webp",
    alt: "An annotated research page with an artwork reproduction, formal analysis notes and small observational sketches",
    caption: "Analysis pinned directly beside the original source",
  },
]);

const chapterTwo: Chapter = {
  number: 2,
  title: "Recording and Research",
  intro: `Recording and research supply the evidence that both components are marked on.
They are not a preliminary stage to be rushed before the real work begins.

Recording means looking closely and making a visual record of what you find.
It includes drawing, photography, measurement, colour notes and written observation.

Research means finding out how other artists, designers and cultures have handled similar problems.
It should change what you make, not sit beside the work as decoration.

The two activities support each other.
A drawing exposes a question, research suggests an answer, and a new drawing tests it.

This chapter builds the practical skills of recording and the habits of useful research.
It moves from observation and tone through perspective, photography and colour to contextual annotation.

Use the exam-style questions at the end of each section to check that you can explain the methods, not only perform them.`,
  subheadings: [
    {
      title: "Drawing from Observation",
      body: `### Why Observation Comes First

Observation gives the portfolio its raw material.

It trains the eye to notice proportion, edge, tone and space.

A camera can record, but drawing forces decisions.

### Setting Up to Draw

Choose a comfortable position with a clear view.

Light the subject from one side so form is visible.

Keep the paper and the subject at a similar angle to reduce distortion.

### Sighting with a Pencil

Hold the pencil at arm's length and close one eye.

Line the tip and your thumb with two points on the subject.

Carry that measurement to the paper without changing your arm position.

### Proportions

Compare height with width before drawing detail.

Use one unit, such as the width of a bottle, to measure the rest.

Mark the extremes first, then place the parts between them.

### Negative Space

Look at the shapes between and around objects.

Draw those shapes when the object itself becomes confusing.

Negative space exposes errors in proportion that the eye forgives.

### The Viewfinder

A card with a rectangular opening frames the subject.

It isolates a composition and helps compare angles.

Keep the viewfinder at a fixed distance so the proportions stay consistent.

### Contour Drawing

A contour follows the edge of a form.

Draw slowly and keep the line continuous where possible.

Contour studies teach you to feel the shape rather than name it.

### Gesture Drawing

A gesture captures movement, weight and direction in a few seconds.

Work loosely from the whole body rather than the outline.

Gesture studies are notes for later, not finished drawings.

### Blind Contour

Draw the subject without looking at the paper.

The result looks strange, but it forces attention onto the subject.

Use it as a warm-up, not as portfolio evidence on its own.

### Sustained Study

A sustained drawing takes an hour or more.

Build from general shapes to specific detail.

Stop before the surface becomes tight and lifeless.

### From Study to Composition

Select the most useful studies rather than keeping every attempt.

Crop, combine and repeat to test a composition.

The drawing is evidence, not the final destination.

### The Panel

The panel shows sighting at arm's length and a sphere modelled in five tones.

The first image records proportion; the second shows what observation looks like when tone is added.

Both are the same discipline: look, measure, then mark.

### Daily Practice

Ten minutes of drawing each day beats one long session a month.

Draw ordinary objects: a cup, a shoe, a chair.

Consistency builds the hand-eye coordination that examination work demands.

### Common Traps

Symbol drawing replaces the object with a remembered shape.

Working from a photograph can hide structural problems.

Check the drawing against the subject at arm's length, not close to the page.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Measuring Methods",
          bullets: [
            "**Sighting:** compare lengths with a pencil held at a fixed distance.",
            "**Unit measure:** choose one width or length and count it across the subject.",
            "**Plumb line:** check vertical alignment with a hanging thread or pencil.",
            "**Angle check:** compare a diagonal edge with the vertical or horizontal.",
            "**Viewfinder:** frame the subject and compare shapes inside the frame.",
            "**Grid:** transfer a subject with a measured grid when accuracy matters.",
            "**Thumbnail:** reduce the subject to a few shapes before drawing full size.",
          ],
        },
        {
          subTitle: "Line and Gesture",
          bullets: [
            "**Contour:** a slow line that follows the edge of a form.",
            "**Blind contour:** drawing without looking at the paper to train attention.",
            "**Gesture:** a rapid line that captures movement and weight.",
            "**Construction line:** a light guide for the main axes of a form.",
            "**Line weight:** heavier lines for near edges, lighter lines for distance.",
            "**Selection:** not every edge needs a line; choose the informative ones.",
          ],
        },
        {
          subTitle: "A Drawing Session",
          bullets: [
            "**Warm up:** two minutes of gesture drawings before a sustained study.",
            "**Set up:** one light source, a clear view and a stable board.",
            "**Block in:** place the extremes and the main shapes.",
            "**Check:** compare angles and proportions at arm's length.",
            "**Model:** add tone only after the structure is convincing.",
            "**Review:** stand back and compare the drawing with the subject.",
          ],
        },
      ],
      examinerTips: [
        "Measure twice and draw once; visible construction lines are acceptable evidence.",
        "Start with the whole subject and move to detail only when proportion is secure.",
        "Keep the pencil at a fixed distance from the eye when sighting.",
        "Use negative space when a shape looks wrong but you cannot say why.",
        "Date and label observational studies so the examiner can see the sequence.",
      ],
      commonMistakes: [
        "Drawing from memory instead of looking at the subject.",
        "Starting with an eye or a petal before the overall shape is placed.",
        "Changing the arm distance between measurements.",
        "Erasing constantly instead of correcting the underlying proportion.",
        "Forgetting to record the light direction in the study.",
      ],
      recap: [
        "Explain how a pencil can be used to measure proportions. [3]",
        "Describe how negative space can improve a drawing. [3]",
        "Explain the difference between contour and gesture drawing. [4]",
        "Describe the purpose of a viewfinder. [2]",
        "Explain why sustained observation is more useful than copying a photograph. [4]",
      ],
    },
    {
      title: "Tone, Form and Light",
      body: `### Why Tone Matters

Tone is the lightness or darkness of a surface.

It creates the illusion of form on a flat page.

Colour can attract attention, but tone gives structure.

### The Value Scale

Make a scale from white to black with even steps.

Five values are enough for most studies.

Label the scale so you can match a tone to a number.

### One Light Source

Choose one main light source and keep it consistent.

A single source produces a clear pattern of light and shadow.

Several sources flatten form and confuse the reading.

### The Tonal Zones

A simple form shows highlight, midtone, core shadow, reflected light and cast shadow.

Not every zone appears on every object.

Look for the pattern before drawing the edges.

### Core Shadow

The core shadow is the darkest part of the form itself.

It sits where the surface turns away from the light.

It is usually darker than the cast shadow nearby.

### Reflected Light

Light bounces from the table or wall into the shadow side.

This faint light keeps the shadow from looking flat.

Do not make reflected light as bright as the highlight.

### Cast Shadow

The cast shadow falls on the ground or a nearby object.

Its edge is sharp near the object and softer further away.

The shape of the shadow describes the form that made it.

### Hatching

Hatching uses parallel lines to build tone.

Closer lines make a darker area; wider spacing makes it lighter.

Keep the direction consistent so the surface does not look agitated.

### Cross-Hatching

Cross-hatching adds a second set of lines at an angle.

It builds darker values without smudging.

Use fewer layers on curved forms and more in deep shadow.

### Blending and Erasing

Blending smooths transitions on rounded forms.

Erasing lifts tone to create highlights and reflected light.

Both are controls, not corrections.

### Chiaroscuro

Chiaroscuro is the strong contrast of light and dark.

It dramatises form and can direct the eye.

Use it deliberately, because heavy contrast changes the mood.

### Tonal Composition

Plan the big shapes of light and dark before details.

A thumbnail with three values shows whether the image reads.

Squint at the subject to simplify the tones.

### Testing Tone

Photograph the drawing and convert it to greyscale.

The conversion reveals whether the values are distinct.

Adjust the darkest and lightest areas first.

### Tone in Colour

Every colour has a value as well as a hue.

A red and a green may be similar in tone and merge in greyscale.

Check colour studies in greyscale before painting.`,
      groups: [
        {
          subTitle: "The Tonal Zones",
          bullets: [
            "**Highlight:** the brightest area where light strikes directly.",
            "**Midtone:** the broad area between light and shadow.",
            "**Core shadow:** the darkest part of the form itself.",
            "**Reflected light:** faint light bounced into the shadow side.",
            "**Cast shadow:** the shadow thrown onto another surface.",
            "**Occlusion shadow:** the dark contact where two forms meet.",
            "**Background:** the tone behind the form, which affects its edge.",
          ],
        },
        {
          subTitle: "Mark-Making for Tone",
          bullets: [
            "**Hatching:** parallel lines, spaced closely for darker values.",
            "**Cross-hatching:** crossed layers that build depth without smudging.",
            "**Contour hatching:** lines that follow the curve of the form.",
            "**Stippling:** dots accumulated to create a granular tone.",
            "**Blending:** a stump or cloth softens transitions.",
            "**Erasing:** lifts graphite to recover highlights and reflected light.",
            "**Scumbling:** a light, broken layer over a darker tone.",
          ],
        },
        {
          subTitle: "Controlling Contrast",
          bullets: [
            "**Limit values:** three to five tones usually read more clearly than many.",
            "**Darkest dark:** establish it early so the range is known.",
            "**Lightest light:** protect the paper or use an eraser.",
            "**Edge control:** hard edges advance, soft edges recede.",
            "**Focal contrast:** place the strongest contrast at the centre of interest.",
            "**Greyscale check:** confirm that the tonal structure survives without colour.",
          ],
        },
      ],
      examinerTips: [
        "Squint at the subject to see the large tonal shapes before detail.",
        "Establish the darkest dark and the lightest light before the midtones.",
        "Keep one light source and let every shadow agree with it.",
        "Use a value scale to compare the subject with the drawing.",
        "Photograph the work in greyscale to check whether the form reads.",
      ],
      commonMistakes: [
        "Outlining the object and colouring it in without modelling the form.",
        "Making the cast shadow darker than the core shadow.",
        "Using too many values so the drawing looks uniformly grey.",
        "Smudging every mark until the surface loses direction.",
        "Ignoring reflected light and leaving shadows as flat black shapes.",
      ],
      recap: [
        "Explain how a cast shadow differs from a core shadow. [4]",
        "Describe how hatching can create the illusion of form. [3]",
        "Explain the purpose of a value scale. [2]",
        "Describe how reflected light helps to model a form. [3]",
        "Explain why a drawing should be checked in greyscale. [3]",
      ],
    },
    {
      title: "Perspective and Space",
      body: `### Space on a Flat Surface

A drawing has height and width but no real depth.

Perspective is a system of clues that creates the illusion of space.

It is a tool, not a rule that must always be obeyed.

### The Horizon Line

The horizon line sits at the viewer's eye level.

It moves up or down when the viewer stands or sits.

Everything above it is seen from below; everything below is seen from above.

### One-Point Perspective

One-point perspective uses a single vanishing point on the horizon.

Lines that recede directly away from the viewer meet there.

It suits a view straight down a street, corridor or room.

### Two-Point Perspective

Two-point perspective uses two vanishing points on the horizon.

It suits a corner view of a building or a box.

Vertical lines stay vertical when the viewer is looking straight ahead.

### Vanishing Points Off the Page

The vanishing points may lie outside the paper.

Tape the paper to a larger board and mark the points temporarily.

Use a long ruler or a taut thread to keep the lines accurate.

### Foreshortening

Foreshortening compresses a form that points towards the viewer.

Measure the apparent length rather than the known length.

Draw the nearest part largest and let the rest recede.

### Scale

Objects of known size help the viewer judge distance.

A small figure beside a large door signals depth.

Keep the scale consistent across the whole drawing.

### Overlapping

An object that overlaps another appears closer.

Overlapping is the simplest and strongest depth cue.

Use it even when the perspective is loose.

### Atmospheric Perspective

Distant forms lose contrast and become cooler and lighter.

Detail fades before the outline disappears.

Use this for landscapes and long interiors.

### Viewpoint

A high viewpoint looks down on the scene.

A low viewpoint makes forms loom.

Choose the viewpoint that supports the idea, not the easiest one.

### The Panel

The panel pairs a perspective construction with a contact sheet of viewpoints.

The drawing shows the geometry; the photographs show how moving the camera changes the space.

Both test the same question: where is the viewer standing?

### Checking the Drawing

Extend the receding lines and see whether they meet.

Check verticals with a plumb line or the edge of the paper.

Look at the drawing in a mirror to reveal slanting errors.

### When to Break the Rules

Expressive work may bend perspective on purpose.

Cubism and some graphic design flatten or fracture space.

Break a rule only when you can explain the effect.

### Space and Composition

Perspective guides the eye towards a focal point.

A corridor, road or row of windows can act as a leading line.

Space is part of the composition, not a separate exercise.`,
      figure: panelB,
      groups: [
        {
          subTitle: "The Geometry",
          bullets: [
            "**Horizon line:** the viewer's eye level, drawn across the page.",
            "**Vanishing point:** where receding parallel lines appear to meet.",
            "**One-point:** a single vanishing point for a frontal view.",
            "**Two-point:** two vanishing points for a corner view.",
            "**Eye level:** objects above it are seen from below, objects below from above.",
            "**Picture plane:** the imaginary transparent surface between viewer and scene.",
            "**Cone of vision:** the area the eye can see clearly without turning the head.",
          ],
        },
        {
          subTitle: "Depth Cues",
          bullets: [
            "**Overlapping:** nearer forms cover farther ones.",
            "**Scale:** familiar objects shrink with distance.",
            "**Height in the picture plane:** distant ground rises towards the horizon.",
            "**Foreshortening:** forms pointing at the viewer appear compressed.",
            "**Atmospheric perspective:** distance lowers contrast and cools colour.",
            "**Detail:** texture and edges soften with distance.",
          ],
        },
        {
          subTitle: "Checking the Drawing",
          bullets: [
            "**Extend:** continue receding lines to see whether they meet.",
            "**Plumb:** check verticals with a thread or the paper edge.",
            "**Mirror:** view the drawing in a mirror to expose slanting errors.",
            "**Measure:** compare widths at the front and back of the space.",
            "**Consistency:** keep one horizon line and one eye level.",
            "**Select:** remove construction lines only after the structure is secure.",
          ],
        },
      ],
      examinerTips: [
        "Draw the horizon line first and keep every vanishing point on it.",
        "Use two-point perspective for a corner view and one-point for a frontal view.",
        "Check that verticals stay vertical unless you are deliberately using three-point perspective.",
        "Measure the apparent size of foreshortened forms rather than drawing the known length.",
        "Use overlapping and atmospheric perspective even when the geometry is simple.",
      ],
      commonMistakes: [
        "Placing vanishing points at different heights.",
        "Letting vertical edges slant in a two-point drawing.",
        "Drawing a table top as a rectangle instead of a foreshortened shape.",
        "Using atmospheric perspective in the foreground.",
        "Erasing construction lines before the perspective has been checked.",
      ],
      recap: [
        "Define horizon line and vanishing point. [2]",
        "Explain the difference between one-point and two-point perspective. [4]",
        "Describe how foreshortening affects the drawing of a form. [3]",
        "Explain two depth cues other than linear perspective. [4]",
        "Describe how you would check a perspective drawing for errors. [3]",
      ],
    },
    {
      title: "Photography as a Recording Tool",
      body: `### The Camera as a Sketchbook

A camera records quickly and accurately.

It is useful when light, crowds or weather make drawing difficult.

The photograph is a note, not the finished study.

### Framing

Decide what to include and what to leave out.

Move closer rather than relying on a crop later.

The frame is a composition choice, not an accident.

### Viewpoint

Stand, kneel or climb to change the viewpoint.

A low angle makes the subject dominant; a high angle makes it vulnerable.

Take several viewpoints before choosing one.

### Light and Exposure

Photograph texture when the light rakes across the surface.

Avoid flash, which flattens form and creates hard shadows.

Check the histogram or the screen for lost detail.

### Contact Sheets

A contact sheet shows every frame from a shoot.

Mark the selects and the rejects with a chinagraph pencil or in software.

The sheet is evidence of selection, which supports AO3 and AO4.

### Editing

Adjust exposure, contrast and colour gently.

Do not remove evidence or add elements that were not there.

Keep the original file alongside the edited version.

### Texture and Detail

Use a macro setting or move close for surface detail.

Place a ruler or coin in one frame for scale.

Photograph the same detail in raking and flat light.

### Reference for Scale

Include a known object in the frame when size matters.

A hand, a pencil or a coin gives the viewer a measure.

Record the real dimensions in your notes.

### When a Photo Replaces a Drawing

A photograph may replace a drawing when the subject is fleeting.

It may also replace drawing when the purpose is to record many details quickly.

It should not replace drawing when the purpose is to understand structure.

### When It Does Not

Drawing reveals proportion and structure that a lens can hide.

A photograph flattens space and fixes one viewpoint.

If the portfolio shows only photographs, AO1 evidence is thin.

### Photographing Your Own Work

Use a tripod and a plain background.

Light the work evenly from both sides.

Check that the colours match the original.

### Ethics and Permissions

Ask before photographing people in private spaces.

Respect rules in galleries, museums and places of worship.

Do not publish images of others without consent.

### Organising Files

Name files by date, subject and viewpoint.

Keep a folder for originals and another for edits.

Back up the folder before deleting anything.

### A Photo Study Page

Choose three frames that show different decisions.

Print them small and annotate the differences.

Link the page to the drawings that follow.`,
      groups: [
        {
          subTitle: "Framing Decisions",
          bullets: [
            "**Subject:** what is the photograph actually about?",
            "**Crop:** move closer rather than cropping away a weak background.",
            "**Viewpoint:** high, low or eye level, chosen for effect.",
            "**Orientation:** portrait or landscape, following the subject.",
            "**Edge:** check for distracting objects at the frame boundary.",
            "**Scale:** include a known object when size matters.",
            "**Series:** take several frames rather than one lucky shot.",
          ],
        },
        {
          subTitle: "The Contact Sheet",
          bullets: [
            "**Complete:** show every frame from the shoot.",
            "**Select:** mark the frames worth developing.",
            "**Reject:** note why a frame failed.",
            "**Annotate:** record the viewpoint, light and subject.",
            "**Sequence:** arrange the frames in the order they were taken.",
            "**Evidence:** the sheet shows editorial decisions, not just results.",
          ],
        },
        {
          subTitle: "Photo or Drawing?",
          bullets: [
            "**Photo:** fleeting light, crowds, distant detail or many references.",
            "**Drawing:** structure, proportion, space and the understanding of form.",
            "**Both:** photograph first, draw from life, then compare.",
            "**Caution:** a photograph can hide poor proportion.",
            "**Caution:** a lens distorts edges and flattens depth.",
            "**Rule:** photographs support observation; they do not replace it.",
          ],
        },
      ],
      examinerTips: [
        "Explain the purpose of each photograph, not just where it was taken.",
        "Use a contact sheet to show selection and rejection.",
        "Keep the original file and make only gentle adjustments.",
        "Include a scale reference when photographing texture or small objects.",
        "Photograph your own artwork squarely and evenly for the digital portfolio.",
      ],
      commonMistakes: [
        "Submitting a folder of unedited photographs with no selection.",
        "Using flash and losing the form of the subject.",
        "Cropping so tightly that the scale is impossible to judge.",
        "Presenting a photograph as a drawing or tracing it without credit.",
        "Forgetting to ask permission before photographing people.",
      ],
      recap: [
        "Explain two advantages of photography as a recording tool. [4]",
        "Describe how a contact sheet can provide evidence of selection. [3]",
        "Explain why a photograph should not replace all observational drawing. [3]",
        "Outline three points to check when photographing your own artwork. [3]",
        "Explain the ethical issues involved in photographing people. [4]",
      ],
    },
    {
      title: "Colour and Surface Studies",
      body: `### Local versus Observed Colour

Local colour is the colour we name: a red apple, a green leaf.

Observed colour is what the eye actually sees in the light.

The two are rarely the same.

### Why Local Colour Misleads

A white wall in shadow may be blue-grey.

A red apple may contain orange, purple and green reflections.

Painting the name instead of the observation makes work look flat.

### Swatches

Make a swatch for every important colour in the subject.

Record the mix and the light conditions.

Compare the swatch with the subject under the same light.

### Temperature

Colour can feel warm or cool.

Warm colours advance; cool colours recede.

Temperature is relative: a cool red may sit beside a warmer one.

### Mixing Tests

Test a colour mix on the actual support.

Paint dries darker or lighter than it looks wet.

Record the dry result beside the wet sample.

### A Limited Palette

A limited palette creates harmony.

Try one yellow, one red, one blue and white.

Mix the rest from those few tubes.

### Surface and Texture

Record whether a surface is rough, smooth, matt or glossy.

Use the side of the medium or short marks to describe texture.

A highlight on a glossy surface has a sharper edge than on a matt one.

### Recording Sheen

Observe how light reflects from metal, glass and fabric.

Metal has strong contrasts and coloured reflections.

Fabric has soft gradients and a duller highlight.

### Colour Notation

Write the mix in a simple code, such as yellow ochre plus a touch of blue.

Add a small painted square beside the note.

The note helps you repeat the colour later.

### Colour and Light

Change the light and the colour changes.

Record the same object at midday and in the evening.

The difference is useful evidence for a series.

### Colour Composition

Plan the distribution of colour across the page.

A small accent can balance a large muted area.

Colour can lead the eye to the focal point.

### Digital versus Pigment

Screen colour is additive and emits light.

Pigment is subtractive and reflects light.

A colour mixed on screen may not be possible in paint.

### From Study to Painting

Select the colour studies that answer a question.

Keep them beside the final work as evidence.

Do not copy a swatch blindly; adjust it to the new scale and light.

### Testing Colour

Photograph the study in daylight and in greyscale.

Check whether the colour contrasts survive the conversion.

If the values merge, adjust the tone rather than the hue.`,
      groups: [
        {
          subTitle: "Reading Colour",
          bullets: [
            "**Local colour:** the named colour of an object.",
            "**Observed colour:** the colour actually seen under the light.",
            "**Temperature:** warm or cool relative to neighbouring colours.",
            "**Value:** the lightness or darkness of a colour.",
            "**Saturation:** the strength or greyness of a colour.",
            "**Reflected colour:** colour bounced from a nearby surface.",
            "**Simultaneous contrast:** neighbouring colours change how each is seen.",
          ],
        },
        {
          subTitle: "Mixing Tests",
          bullets: [
            "**Swatch:** paint the mix on the actual support.",
            "**Wet and dry:** record the colour wet and again when dry.",
            "**Ratio:** note the approximate proportions of each pigment.",
            "**Opacity:** record whether the mix covers or glazes.",
            "**Repeat:** test whether the same mix can be made twice.",
            "**Limit:** build harmony from a small number of pigments.",
          ],
        },
        {
          subTitle: "Surface Records",
          bullets: [
            "**Rough:** short, broken marks and scattered highlights.",
            "**Smooth:** blended transitions and a continuous edge.",
            "**Matt:** soft, diffuse light with a wide highlight.",
            "**Glossy:** a sharp highlight and strong reflected colour.",
            "**Metal:** high contrast with tints from nearby objects.",
            "**Fabric:** soft folds, dull highlights and subtle colour shifts.",
          ],
        },
      ],
      examinerTips: [
        "Compare the swatch with the subject under the same light.",
        "Record the dry colour, because paint changes as it dries.",
        "Use a limited palette to make colour harmony easier to see.",
        "Describe texture with the medium, not only with a written label.",
        "Check colour studies in greyscale to test their tonal structure.",
      ],
      commonMistakes: [
        "Painting the named colour instead of the observed colour.",
        "Mixing a large batch before testing it on the support.",
        "Using too many unrelated colours and losing harmony.",
        "Recording only the wet colour and forgetting the dry result.",
        "Describing a surface as shiny without showing where the light falls.",
      ],
      recap: [
        "Distinguish between local colour and observed colour. [2]",
        "Explain why a limited palette can improve colour harmony. [3]",
        "Describe how to record a colour mix so it can be repeated. [3]",
        "Explain how light changes the observed colour of a surface. [3]",
        "Describe how you would record the texture of a glossy surface. [4]",
      ],
    },
    {
      title: "Contextual Research and Annotation",
      body: `### Research as Recording

Contextual research records how others have solved a problem.

It is part of the enquiry, not an interruption to it.

The research page should sit beside your own studies.

### Choosing Sources

Choose sources that relate to your theme, material or question.

Use one or two in depth rather than many superficially.

Include artists, designers, craftspeople and cultural objects.

### Formal Analysis

Describe the work before interpreting it.

Discuss composition, colour, tone, scale, surface and mark.

Use evidence from the image, not from the artist's reputation.

### Intention

Ask what the work is trying to do and for whom.

Consider the site, the audience and the moment.

Then judge how well it succeeds.

### Comparing

Compare two works that share a problem.

Make one point of similarity and one of difference.

End with what you will borrow and what you will reject.

### Annotation with Purpose

Write when a note explains a decision.

Record what you tried, what happened and what you will change.

Do not describe what is already visible.

### Finding Your Voice

Use plain English and short sentences.

Avoid copying phrases from a catalogue or website.

A simple honest note is stronger than a borrowed theory.

### What to Avoid

Avoid long biographies and lists of exhibitions.

Avoid unexplained quotations.

Avoid claiming an influence that is not visible in your work.

### Copying versus Influence

Copying repeats a motif or style.

Influence adapts a method to a new subject.

Show the adaptation in your own studies.

### Citation

Record the artist, title, date, medium and location.

For online sources, add the address and the date accessed.

Credit images even in a private sketchbook.

### A Research Page

Place the reproduction on one side and your response on the other.

Add a short analysis and a note on the next test.

Keep the layout calm and readable.

### The Panel

The panel shows a page of colour studies beside an annotated research page.

The colour notes record observation; the research page records analysis.

Together they show that recording and research use the same habit of attention.

### Linking Research to Making

The research should change something in the work.

It may change a palette, a composition, a surface or a subject.

If nothing changes, the research is only background reading.

### English and Clarity

All annotation must be in English.

Keep terminology accurate and consistent.

Read the note aloud to check that it makes sense.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Research Sources",
          bullets: [
            "**Monograph or catalogue:** reliable reproductions and dates.",
            "**Gallery label:** title, medium, date and acquisition details.",
            "**Artist interview:** intention and process in the artist's words.",
            "**Review or essay:** interpretation and critical context.",
            "**Museum database:** high-quality images and object records.",
            "**Cultural object:** function, material and protocols of use.",
            "**Practitioner:** a designer or craftsperson working in the field.",
          ],
        },
        {
          subTitle: "Annotation That Works",
          bullets: [
            "**Decision:** why this source or method was chosen.",
            "**Observation:** a specific detail seen in the work.",
            "**Comparison:** one similarity and one difference.",
            "**Application:** what you will try in your own study.",
            "**Judgement:** whether the trial succeeded.",
            "**Next step:** what you will change or test next.",
            "**Credit:** the source of every borrowed image.",
          ],
        },
        {
          subTitle: "Avoiding Plagiarism",
          bullets: [
            "**Copying:** repeating a motif or composition without change.",
            "**Influence:** adapting a method to a new subject.",
            "**Credit:** name the artist and the source every time.",
            "**Quotation:** use quotation marks and a reference.",
            "**Images:** do not present another person's photograph as your own.",
            "**Originality:** show your decisions, not a borrowed signature style.",
          ],
        },
      ],
      examinerTips: [
        "Begin with your own question, then introduce the source that helps answer it.",
        "Analyse the work itself rather than retelling the artist's biography.",
        "Make annotation specific: name the colour, edge or mark you mean.",
        "Show the influence in a practical study, not only in a written claim.",
        "Credit every image and quotation with enough detail to trace it.",
      ],
      commonMistakes: [
        "Writing a life story instead of a formal analysis.",
        "Copying a famous composition and calling it research.",
        "Adding long descriptive notes that repeat what is visible.",
        "Using a source without recording the artist, title or date.",
        "Leaving the research page disconnected from the practical work.",
      ],
      recap: [
        "Explain the difference between describing and analysing an artwork. [4]",
        "Describe how a research page should be organised. [3]",
        "Explain why annotation should record decisions rather than visible details. [3]",
        "Outline the information needed to cite an artwork correctly. [3]",
        "Explain the difference between copying and being influenced by an artist. [4]",
      ],
    },
  ],
};

export const ART_DESIGN_CHAPTER_2 = chapterTwo;
