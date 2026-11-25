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
    src: "art8-selection.webp",
    alt: "A table covered with small proof prints, a magnifying loupe and three labelled piles marked keep, maybe and no",
    caption: "Edit before you arrange",
  },
  {
    src: "art8-development-wall.webp",
    alt: "A studio wall pinned with a sequence of studies, colour tests and a large resolved painting, with red thread linking the stages",
    caption: "The journey made visible",
  },
]);

const panelB = artPanel([
  {
    src: "art8-test-workspace.webp",
    alt: "An examination desk set out with a stretched canvas, a palette, water pots, reference studies and a printed hour-by-hour plan",
    caption: "An eight-hour desk, prepared",
  },
  {
    src: "art8-refinement.webp",
    alt: "Two versions of the same composition side by side, one tentative and one resolved, with annotated differences pinned between them",
    caption: "Refinement is a visible comparison",
  },
]);

const panelC = artPanel([
  {
    src: "art8-documentation.webp",
    alt: "A camera on a copy stand above an artwork laid flat, with two soft lights at equal angles and a grey card in the corner of the frame",
    caption: "Flat, even and colour-checked",
  },
  {
    src: "art8-exhibition.webp",
    alt: "A small gallery hang with mixed-scale works, a printed sequence on the wall and a visitor looking closely",
    caption: "The portfolio in a room",
  },
]);

const chapterEight: Chapter = {
  number: 8,
  title: "Developing and Presenting the Portfolio",
  intro: `The assessment objectives are not four separate jobs.\n\nResearch, making, reflection and presentation are one continuous conversation between you and the work.\n\nA portfolio is the record of that conversation, edited so that someone else can follow it.\n\nThis chapter turns the objectives into a working method for Component 1 and Component 2, from the first selection to the final upload.`,
  subheadings: [
    {
      title: "Selecting and Sequencing",
      body: `### The Portfolio Is an Argument

A portfolio is not a container for everything you made.

It is an argument about what you investigated and what you discovered.

Every page should move that argument forward.

If a page could be removed without loss, it probably should be.

### Editing Out

Editing is the first act of presentation.

Weak work dilutes strong work, because the viewer cannot tell which is which.

Remove failed experiments unless the failure is genuinely instructive.

Keep the risk that did not work only when the reflection explains it.

The panel below shows a proof-print edit in progress.

### What to Keep

Keep work that shows a decision, not only a result.

Keep the study that changed your mind.

Keep the piece that solves a visual problem in a surprising way.

Keep evidence of technical control in more than one material.

Keep the outcome that the studies were actually building towards.

### Grouping by Inquiry

Group work by question rather than by medium.

A group might ask how light falls through fabric, or how a city compresses space.

Each group should contain research, experiment and resolution.

Three or four clear inquiries are stronger than ten loose themes.

### The Studies-to-Outcome Journey

The examiner should be able to trace one line from stimulus to outcome.

Show the first observation, the wrong turn, the correction and the resolved piece.

Do not hide the wrong turn; it is evidence of reflection.

The journey is the assessed work, not a preface to it.

### Narrative Order

Order pages so that each one answers the previous one.

A question can lead to an experiment, which leads to a new question.

Avoid chronological order if it buries the strongest work halfway through.

A portfolio is allowed to be edited for clarity, like a film.

### Pace and Contrast

Place a large, quiet image after several dense studies.

Follow a detailed page with a single bold mark.

Contrast keeps attention alive across many pages.

Too much contrast, however, looks like a sampler rather than an investigation.

### Wall, Book and Screen

A wall sequence is read at a distance and in a room.

A book sequence is read page by page, with pauses.

A screen sequence is scrolled and often seen small.

Plan the order for the format in which it will be assessed.

### What to Leave Out

Leave out copies of other artists' work presented as your own.

Leave out undated experiments that cannot be explained.

Leave out work that belongs to an earlier, unrelated project.

Leave out decorative filler with no role in the inquiry.

Leave out anything you cannot discuss confidently.

### Titles and Annotation

A title should orient the viewer, not decorate the page.

Annotation should say what you did, why, and what changed.

Two or three precise sentences beat a paragraph of description.

Keep handwriting legible and place notes where they do not cover the work.

### A Selection Method

Lay every piece on the floor or wall.

Sort into keep, maybe and release.

Ask a teacher or classmate to identify the strongest three pieces.

Build the sequence around those three, not around the order of making.

Photograph the wall before you take it down.

### What the Panel Shows

The selection table in the panel is a physical edit, with prints in piles.

The development wall beside it shows the sequence pinned in order.

Both make the thinking visible before anything is mounted.

That visibility is what the examiner is looking for.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Selection Tests",
          bullets: [
            "**Purpose:** does this piece advance the inquiry or merely fill a page?",
            "**Evidence:** does it show a decision, a skill or a change of direction?",
            "**Clarity:** can a stranger understand what problem it addresses?",
            "**Quality:** is it resolved enough to sit beside your strongest work?",
            "**Necessity:** would the sequence lose meaning if it were removed?",
            "**Honesty:** can you explain it without inventing a reason afterwards?",
          ],
        },
        {
          subTitle: "Sequencing Logic",
          bullets: [
            "**Question and answer:** each page responds to the one before it.",
            "**Zoom:** move between detail, object and context.",
            "**Contrast:** place dense and spare pages side by side.",
            "**Repetition:** return to a motif to show development.",
            "**Climax:** reserve the strongest outcome for the end of the group.",
            "**Bridge:** end a group with a page that opens the next inquiry.",
          ],
        },
        {
          subTitle: "The Journey",
          bullets: [
            "**Stimulus:** the observation, object or idea that started the inquiry.",
            "**Research:** artists, designers and contexts that shaped the direction.",
            "**Experiment:** material tests, compositional trials and failures.",
            "**Correction:** the moment the work changed because of evidence.",
            "**Resolution:** the outcome that answers the original question.",
            "**Reflection:** a short account of what was learned and what remains open.",
          ],
        },
      ],
      examinerTips: [
        "Select fewer, stronger pages; depth of inquiry scores better than volume.",
        "Make the through-line visible with short captions at the start of each group.",
        "Show your selection criteria in the sketchbook, not only the selected work.",
        "Sequence for a reader who has not seen the project before.",
        "Keep a photograph of every wall edit so you can compare sequences later.",
      ],
      commonMistakes: [
        "Including every experiment and hoping the examiner finds the good ones.",
        "Grouping by medium so the inquiry disappears into separate material chapters.",
        "Putting the strongest outcome first and leaving the development to trail behind.",
        "Writing captions that describe the materials but not the thinking.",
        "Presenting other artists' work without a clear connection to your own.",
      ],
      recap: [
        "Explain why editing out weak work can raise the quality of a portfolio. [3]",
        "Describe how a portfolio can show the journey from studies to outcome. [4]",
        "Explain the difference between grouping by medium and grouping by inquiry. [3]",
        "Discuss how sequencing can direct the examiner's attention. [4]",
        "Evaluate the role of annotation in making selection decisions visible. [4]",
      ],
    },
    {
      title: "Refining and Resolving",
      body: `### Refinement Is Not Repetition

Refining means making the work more itself.

It does not mean copying it again with more polish.

Each change should answer a specific weakness.

If you cannot name the weakness, stop and look again.

### Finding the Visual Problem

Every piece has one problem that matters most.

It might be a weak focal point, a muddy tone or an uncertain edge.

Fix that problem before adjusting anything else.

Students often polish details while the composition is still unresolved.

### Testing Variations

Make small versions before committing to a large one.

Change one variable at a time: scale, colour, crop or material.

Keep the tests side by side so the difference is visible.

Label the tests with the question they were asking.

The panel on refinement in the timed test shows this comparison method.

### Keeping the Best

The best variation is not always the most detailed.

It is the one that communicates the idea with the least friction.

Compare at the same size and in the same light.

Ask someone else which version they read first.

### Consistency of Style

Style is a set of repeated decisions, not a decoration.

Recurring colour, mark-making, edges and scale create coherence.

Consistency does not forbid variety; it makes variety legible.

A sudden change is strongest when it is deliberate.

### Materials and Surface

The surface is part of the meaning.

Gloss reflects the room; matte absorbs it.

Rough paper changes the way a line behaves.

Test how a material ages or cockles before using it in a final piece.

### Composition at the Final Size

A composition that works on A4 may collapse on A1.

Enlarge the drawing to check the balance of shapes.

Check the viewing distance and the height of the horizon.

Adjust the crop for the final proportions rather than stretching the image.

### Knowing When It Is Finished

A piece is finished when the intended experience is present.

Check the focal point, the edges and the tonal structure.

Look at it upside down or in a mirror to break familiarity.

Leave it for a day before making the final decision.

Finished does not mean every area is equally detailed.

### Critique

Ask specific questions rather than whether someone likes it.

Ask what they notice first, where their eye stops and what feels unresolved.

Listen without defending, then decide what to act on.

A second viewer sees habits that you have stopped noticing.

### Resolving Without Overworking

Overworking usually comes from fear of stopping.

Protect the freshest passages and refine around them.

If a change makes the piece tighter but less alive, undo it.

Resolution is clarity, not exhaustion.`,
      groups: [
        {
          subTitle: "Variation Tests",
          bullets: [
            "**Scale test:** enlarge or reduce the composition to check its balance.",
            "**Colour test:** compare a warm, cool and neutral version.",
            "**Crop test:** view three framings before committing to one.",
            "**Material test:** try the same mark on two surfaces.",
            "**Tonal test:** check the image in greyscale for structure.",
            "**Distance test:** view from across the room and up close.",
          ],
        },
        {
          subTitle: "Consistency",
          bullets: [
            "**Palette:** a limited set of colours repeated across the group.",
            "**Mark:** a characteristic line, edge or texture.",
            "**Format:** a consistent proportion or scale relationship.",
            "**Light:** a recurring direction and quality.",
            "**Subject:** a motif that returns with a new question.",
            "**Finish:** a consistent approach to edges and surface.",
          ],
        },
        {
          subTitle: "Resolution",
          bullets: [
            "**Focal point:** one clear place for the eye to land.",
            "**Edges:** deliberate soft and hard boundaries.",
            "**Tonal structure:** readable lights, mids and darks.",
            "**Colour logic:** a reason for every strong colour note.",
            "**Surface:** the material supports the idea.",
            "**Silence:** areas that are allowed to stay quiet.",
          ],
        },
      ],
      examinerTips: [
        "Photograph each stage so refinement can be evidenced, not just claimed.",
        "Annotate the specific problem a variation was testing.",
        "Judge tests at the size and distance of the final outcome.",
        "Explain why you rejected a variation; rejection is evidence of judgement.",
        "Stop when the idea is clear, not when the surface is uniformly polished.",
      ],
      commonMistakes: [
        "Redrawing the same idea at the same size and calling it development.",
        "Changing several variables at once, so the test proves nothing.",
        "Polishing details while the overall composition remains weak.",
        "Mistaking high finish for resolution.",
        "Ignoring advice because it was not the answer you wanted.",
      ],
      recap: [
        "Explain the difference between refinement and repetition. [3]",
        "Describe how to test one variable in a compositional study. [3]",
        "Explain how consistency of style can be achieved without making every piece identical. [4]",
        "Discuss how a student can judge when a piece is finished. [4]",
        "Evaluate the role of critique in resolving a final outcome. [4]",
      ],
    },
    {
      title: "The Final Outcome",
      body: `### Scale and Ambition

Scale is a decision about impact and intimacy.

A small piece invites close looking and private attention.

A large piece occupies space and can overwhelm or impress.

Choose the scale that the idea needs, not the scale that looks impressive online.

### Choosing the Medium

The medium should carry the idea.

Watercolour suits transparency and accident; oil suits depth and revision.

Digital tools suit repetition, precision and versioning.

Mixed media suits contradiction and physical layering.

Do not choose a medium only because you have used it before.

### Coherence with Studies

The final outcome should feel like the destination of the studies.

It can contradict them, but the contradiction must be intentional.

Recurring shapes, colours and processes create continuity.

If the outcome could belong to a different project, the journey is broken.

### Risk and Personal Voice

A safe outcome demonstrates competence.

A risky outcome demonstrates inquiry.

Take one substantial risk that you can explain.

Personal voice appears when your decisions stop resembling a template.

### The Final Composition

Check the focal point before adding detail.

Check the edges: do they hold the viewer inside the frame?

Check the tonal plan at a distance.

Check the colour accents and remove any that compete.

A strong composition survives a low-resolution thumbnail.

### Finish and Presentation

Presentation is part of the work, not a wrapper.

Trim edges cleanly and remove fingerprints.

Sign and date the work where appropriate.

Write a short statement that explains the intention without over-explaining.

### Mounting and Framing

Choose a mount that gives the work breathing space.

A generous mount can make a modest piece feel considered.

Glass protects but reflects; museum glass reduces reflections at a cost.

Hang or place the work at a height that suits its scale.

### The Outcome in the Portfolio

Show the outcome at a useful size, not as a tiny file.

Include one or two detail images if surface matters.

Place it after the studies that explain it.

Caption it with title, media, size and date.

### Ambition Versus Time

Ambition must fit the available hours.

A resolved modest piece beats an unfinished grand one.

Plan the risk early enough to recover from it.

Keep a simpler backup idea in reserve.

### What the Outcome Proves

The outcome proves that the inquiry reached a conclusion.

It also proves that you can control materials at scale.

Most importantly, it proves that the decisions were yours.`,
      groups: [
        {
          subTitle: "Decisions at Final Scale",
          bullets: [
            "**Scale:** the size that gives the idea its proper presence.",
            "**Format:** rectangle, square, circle or shaped support.",
            "**Medium:** the material that carries the concept.",
            "**Palette:** a deliberate range rather than every colour available.",
            "**Focal point:** the first place the eye should land.",
            "**Edge:** how the composition meets the frame.",
          ],
        },
        {
          subTitle: "Risk and Voice",
          bullets: [
            "**One real risk:** a decision that could fail but teaches something.",
            "**Personal reference:** imagery drawn from your own experience.",
            "**Unexpected material:** a choice that is yours rather than conventional.",
            "**Deliberate imperfection:** a mark or edge that keeps the work alive.",
            "**Clear intention:** the ability to explain the risk in one sentence.",
            "**Recovery plan:** a way back if the risk does not work.",
          ],
        },
        {
          subTitle: "Presentation",
          bullets: [
            "**Edges:** clean, uncrumpled and free of fingerprints.",
            "**Mount:** enough space to isolate the work.",
            "**Label:** title, media, size and date.",
            "**Statement:** a short account of intention and resolution.",
            "**Lighting:** even light without glare on the surface.",
            "**Height:** a viewing position that suits the scale.",
          ],
        },
      ],
      examinerTips: [
        "Make the final outcome visibly more ambitious than the studies, not merely larger.",
        "Show at least one detail photograph when surface or mark-making is important.",
        "Explain the risk you took and what you learned from it.",
        "Keep the statement short; the work should carry most of the meaning.",
        "Check the presentation in the same conditions in which it will be assessed.",
      ],
      commonMistakes: [
        "Choosing a huge scale that cannot be resolved in the time available.",
        "Using a familiar medium that has no relationship to the idea.",
        "Producing a final piece that looks like a separate project from the studies.",
        "Over-explaining the work in a statement and leaving nothing for the viewer.",
        "Mounting with uneven borders or visible tape.",
      ],
      recap: [
        "Explain how scale can change the meaning of an artwork. [3]",
        "Discuss why the final medium should be chosen for the idea rather than for convenience. [4]",
        "Explain how a final outcome can be coherent with its supporting studies. [4]",
        "Evaluate the role of risk in producing a personal outcome. [4]",
        "Describe the presentation checks needed before an outcome is submitted. [3]",
      ],
    },
    {
      title: "The Eight-Hour Supervised Test",
      body: `### What the Test Is

The supervised test is an eight-hour period of sustained making.

It is not a lottery and it is not a race.

The preparation period is where most of the thinking happens.

The eight hours are for resolving work that has already been tested.

### The Preparation Period

Use the weeks before the test to explore the starting point.

Collect primary observations, not only internet images.

Test materials and compositions at the size you plan to work.

Write a short plan with decisions rather than hopes.

The panel below shows a desk prepared for that plan.

### Supporting Studies

Supporting studies are the evidence behind the final piece.

Include observational drawing, colour tests and compositional trials.

Include one artist or designer reference that changed your approach.

Annotate the studies with what each one proved.

Bring them into the test as reference, not as decoration.

### Planning the Hours

Divide the eight hours before the day begins.

Allow time for setting up, blocking in, developing, refining and clearing away.

Build in a buffer for drying or for a mistake.

Plan breaks; fatigue ruins judgement.

### A Sample Timetable

First 30 minutes: set up, check materials and transfer the drawing.

Next 60 minutes: block in the whole composition lightly.

Next 90 minutes: establish the tonal structure and main colour masses.

Next 30 minutes: step back, assess and adjust the plan.

Next 120 minutes: develop the focal area and resolve the edges.

Next 60 minutes: refine details and unify the surface.

Final 30 minutes: clean edges, check the whole piece and clear the desk.

The remaining time is a buffer for drying or repair.

### Drying Time

Wet media need more time than students expect.

Oils and acrylics skin over but remain soft underneath.

Watercolour paper cockles if it is not stretched or taped.

Plan the final layers early enough to dry before transport.

Never stack wet work.

### Materials

Bring more than you think you need of the essentials.

Test every pen, brush and medium before the day.

Bring water pots, rags, palette, tape, scissors and a bin bag.

Check whether the centre provides easels, boards or water.

Label your equipment.

### Working Under Supervision

Work independently and keep to the rules.

Phones and unauthorised reference material are usually prohibited.

Ask invigilators only about practical arrangements, not about the work.

Keep your studies visible and organised.

### Avoiding a Rushed Outcome

A rushed outcome usually begins with a late start.

It is also caused by beginning with detail instead of structure.

Work from large shapes to small marks.

If time runs short, simplify the background rather than abandoning the focal point.

A resolved simple piece is stronger than an unresolved complex one.

### The Last Half Hour

Stop adding new ideas.

Unify the surface and check the edges.

Remove tape slowly and repair any torn paper.

Photograph the work in the room if permitted.

Pack materials while the work dries.

### What the Panel Shows

The test workspace in the panel is organised around a written plan.

The refinement pair beside it shows the kind of decision the eight hours must contain.

Preparation is visible in both.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Before the Test",
          bullets: [
            "**Primary research:** drawings and photographs made from observation.",
            "**Material tests:** small trials of every medium you plan to use.",
            "**Composition trials:** at least three arrangements of the subject.",
            "**Artist reference:** one source that genuinely altered your approach.",
            "**Written plan:** a timetable with decisions and a buffer.",
            "**Equipment check:** everything tested, labelled and packed.",
          ],
        },
        {
          subTitle: "During the Test",
          bullets: [
            "**Set up:** arrange the desk before making the first mark.",
            "**Block in:** establish the whole composition lightly.",
            "**Structure:** resolve tone and large colour masses first.",
            "**Focal point:** spend the best hours on the most important area.",
            "**Simplify:** reduce background detail if time runs short.",
            "**Buffer:** keep the last half hour free for checking and drying.",
          ],
        },
        {
          subTitle: "Materials and Timing",
          bullets: [
            "**Water:** fresh pots and a way to dispose of dirty water.",
            "**Brushes and pens:** duplicates of the ones you rely on.",
            "**Tape and board:** secure the paper without damaging it.",
            "**Rags:** for controlling wet media and cleaning edges.",
            "**Drying:** plan layers so the work can travel safely.",
            "**Clock:** know the time without watching it constantly.",
          ],
        },
      ],
      examinerTips: [
        "Treat the preparation period as part of the assessed work, because it is.",
        "Make the timetable visible in the sketchbook and refer to it during the test.",
        "Practise the final composition at full size before the day.",
        "Leave the last half hour for checking, not for beginning a new area.",
        "Keep the supporting studies neat and in order; they are evidence of sustained thinking.",
      ],
      commonMistakes: [
        "Planning to finish in the final ten minutes.",
        "Starting with tiny details before the composition is blocked in.",
        "Bringing untested materials and discovering they behave badly.",
        "Using the whole eight hours without a break and losing judgement.",
        "Stacking wet work or rolling it before it is dry.",
      ],
      recap: [
        "Explain how the preparation period supports the eight-hour test. [3]",
        "Describe a realistic timetable for an eight-hour supervised session. [4]",
        "Explain why drying time must be planned before the test day. [3]",
        "Discuss how a student can avoid a rushed outcome in the final hour. [4]",
        "Evaluate the role of supporting studies in the assessment of the timed piece. [4]",
      ],
    },
    {
      title: "Documenting Work",
      body: `### Why Documentation Matters

The examiner may see the file before the work itself.

A poor photograph flattens tone, shifts colour and hides texture.

Documentation is not administration; it is translation.

The file must be faithful enough to stand in for the object.

### Flat Copy Work

Lay the work flat on a clean surface.

Square the camera to the work and centre it.

Use a copy stand or a tripod with the lens pointing straight down.

Fill the frame without cropping the edges.

Check that the work is not tilted or rotated.

### Angled Shots

An angled shot shows depth, frame and surface.

Use it for three-dimensional work, textiles and heavily textured paintings.

Keep the angle slight so the work is not distorted.

Include a second, straight-on image for accurate shape and colour.

### Even Lighting

Use two lights at equal angles, about 45 degrees to the surface.

Diffuse the light with softboxes, umbrellas or diffusing paper.

Avoid a single hard light that creates a hotspot.

Check for shadow bands across the work.

The copy stand in the panel shows this arrangement.

### Colour Accuracy

Include a grey card or colour chart in the first frame.

Set white balance from the grey card, then remove it for the final shot.

Compare the screen image with the original under neutral light.

Do not trust a vivid screen setting.

### Avoiding Glare

Move the lights further to the sides to reduce reflections.

Polarising filters can help with glossy surfaces, but they can shift colour.

For glazed work, photograph at a slight angle or remove the glass if it is safe.

Check the darkest and lightest areas for flare.

### Cropping and Straightening

Crop to the edges of the work, leaving a small even margin.

Straighten using the work's edges, not the frame of the photograph.

Do not crop so tightly that the shape is misrepresented.

Keep a version with the grey card for your records.

### File Size and Format

Follow the submission guidance exactly.

A JPEG at high quality is usually sufficient; TIFF is larger and lossless.

Check the minimum and maximum dimensions.

Do not upscale a small file to pretend it is detailed.

Keep the original capture files.

### Naming and Consistency

Name files with the project, piece number and view.

Use the same naming system across the whole portfolio.

Keep the order consistent with the sequence in the portfolio.

Avoid spaces, accents and special characters in file names.

### What Documentation Cannot Fix

Documentation cannot rescue an unresolved piece.

It cannot reproduce the physical scale of an installation.

It cannot replace a missing detail shot.

It cannot prove colour accuracy without a reference.

It cannot compensate for a late upload.`,
      groups: [
        {
          subTitle: "Capture Setup",
          bullets: [
            "**Camera:** tripod or copy stand, squared to the work.",
            "**Lens:** a standard focal length with minimal distortion.",
            "**Aperture:** mid-range for sharpness across the surface.",
            "**ISO:** low, to keep noise out of flat areas.",
            "**Frame:** fill the frame with a small even margin.",
            "**Focus:** check the centre and the corners.",
          ],
        },
        {
          subTitle: "Colour and Glare",
          bullets: [
            "**Grey card:** included in the first frame for white balance.",
            "**Diffusion:** soften both lights to avoid hotspots.",
            "**Angle:** place lights at about 45 degrees to the surface.",
            "**Reflection:** check glossy areas and move lights sideways.",
            "**Neutral room:** avoid coloured walls bouncing light onto the work.",
            "**Comparison:** check the screen against the original.",
          ],
        },
        {
          subTitle: "File Preparation",
          bullets: [
            "**Crop:** straighten to the work's edges and keep the shape true.",
            "**Format:** JPEG for submission, TIFF for a lossless archive.",
            "**Size:** meet the minimum and maximum requirements.",
            "**Naming:** project, number and view, consistently applied.",
            "**Metadata:** title, media, size and date.",
            "**Backup:** keep the original capture files off site.",
          ],
        },
      ],
      examinerTips: [
        "Photograph every piece as soon as it is finished, not the night before submission.",
        "Include a grey card and use it; colour accuracy is visible to an examiner.",
        "Make one straight-on image and one angled image for three-dimensional work.",
        "Name files before exporting so the sequence survives the upload.",
        "Check the final files on a second screen if one is available.",
      ],
      commonMistakes: [
        "Photographing with the camera tilted, making a rectangle into a trapezium.",
        "Using a single hard lamp that leaves a bright hotspot.",
        "Letting a coloured wall cast a tint over the work.",
        "Cropping off the edges of the piece.",
        "Upscaling a small file and losing all texture.",
      ],
      recap: [
        "Explain why flat copy work should be shot with the camera square to the surface. [3]",
        "Describe how to light an artwork evenly. [4]",
        "Explain the purpose of a grey card in documenting work. [2]",
        "Discuss how glare can be reduced when photographing a glazed piece. [3]",
        "Evaluate the importance of consistent file naming for a digital portfolio. [3]",
      ],
    },
    {
      title: "Submitting the Digital Portfolio",
      body: `### The Submission Is Part of the Work

The upload is the last studio decision.

A strong portfolio can be weakened by a confused folder or a missed deadline.

Treat submission as a design problem with a clear audience.

The examiner should be able to navigate without instructions.

### Organising Files

Create one master folder for the component.

Use subfolders for the sequence, supporting studies and documentation.

Remove duplicates and working files that are not part of the submission.

Keep the structure identical to the order you planned.

The panel below shows the two ends of presentation: the copy stand and the exhibition.

### Sequence and Numbering

Number files in the order they should be viewed.

Use two digits so that ten follows nine correctly.

Keep the numbering consistent with any written index.

Check that the first image is the strongest opening, not the oldest file.

Do not rely on alphabetical order to create a sequence.

### Annotation

Annotate only where it helps the viewer understand a decision.

Place the note close to the work it explains.

Use short sentences and correct subject vocabulary.

Do not repeat the title or describe what is obvious.

If the work needs a paragraph to be understood, the work may need revision.

### English Only If Purposeful

The submission is assessed in English.

Use English for titles, captions and annotation unless a foreign word is part of the work.

A phrase in another language can be meaningful, but it must be explained.

Do not use another language to avoid writing clearly.

Clarity is part of communication.

### No Duplication Between Components

Component 1 and Component 2 are separate submissions.

Do not submit the same outcome, studies or annotation in both.

A shared theme is acceptable; repeated evidence is not.

Check the guidance on what may be carried across.

Duplication weakens both components.

### File Size and Format Limits

Read the limits before you export.

Compress for the limit, not beyond it.

Check that text remains legible at the submitted size.

Test the files on a different device.

Keep a master copy at full quality.

### Deadlines

Work backwards from the deadline.

Allow time for upload failures and slow connections.

Submit early enough to correct a problem.

Keep the receipt or confirmation.

A deadline is part of the brief.

### Checking the Upload

Open every submitted file after uploading.

Check the order, the orientation and the sound if there is video.

Check that no file is corrupted or missing.

Ask someone else to open the folder and describe the sequence back to you.

### After Submission

Keep a complete copy of everything.

Do not continue editing the submitted files.

Reflect on what the process taught you.

A calm ending is part of a professional habit.

### What the Panel Shows

The copy stand in the panel produces the file.

The exhibition view beside it shows what the file is standing in for.

Both must represent the same work honestly.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Folder Structure",
          bullets: [
            "**Master folder:** one folder per component, clearly named.",
            "**Sequence folder:** the numbered images in viewing order.",
            "**Studies folder:** supporting work, also ordered.",
            "**Documentation folder:** flat and angled views.",
            "**Index:** a simple list matching numbers to titles.",
            "**Clean copy:** no duplicates or abandoned drafts.",
          ],
        },
        {
          subTitle: "Annotation Rules",
          bullets: [
            "**Purpose:** explain a decision the viewer cannot infer.",
            "**Length:** two or three short sentences at most.",
            "**Placement:** close to the work, never covering it.",
            "**Language:** English, clear and subject-specific.",
            "**Tone:** reflective, not promotional.",
            "**Spelling:** check names, titles and technical terms.",
          ],
        },
        {
          subTitle: "Final Checks",
          bullets: [
            "**Open every file:** confirm it displays correctly.",
            "**Order:** check numbering and the first image.",
            "**Orientation:** confirm no work is sideways or upside down.",
            "**Size:** meet the limits without visible compression damage.",
            "**Duplication:** confirm nothing repeats across components.",
            "**Receipt:** keep proof of submission.",
          ],
        },
      ],
      examinerTips: [
        "Build the folder structure before the final week; navigation should be effortless.",
        "Number the sequence and keep a written index that matches it.",
        "Use annotation to explain decisions, not to narrate the obvious.",
        "Check the submission on a phone as well as a computer.",
        "Submit before the deadline and keep the confirmation.",
      ],
      commonMistakes: [
        "Uploading files in alphabetical order and destroying the sequence.",
        "Repeating the same outcome in both components.",
        "Writing long annotations that compensate for unresolved work.",
        "Compressing images until texture and tone are lost.",
        "Assuming a successful upload without opening the files.",
      ],
      recap: [
        "Explain why a digital portfolio needs a clear folder structure. [3]",
        "Describe how file numbering can preserve the intended sequence. [3]",
        "Explain the purpose of annotation in a digital submission. [3]",
        "Discuss why the same work should not be submitted for both components. [3]",
        "Evaluate the checks a student should complete after uploading a portfolio. [4]",
      ],
    },
  ],
};

export const ART_DESIGN_CHAPTER_8 = chapterEight;
