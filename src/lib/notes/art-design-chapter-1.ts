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
    src: "art1-studio-overview.webp",
    alt: "A working art studio with a student at an easel, shelves of paint and brushes, and unfinished work around the room",
    caption: "A studio built for sustained work",
  },
  {
    src: "art1-observational-study.webp",
    alt: "Close view of a hand drawing a still life in graphite with a viewfinder and measured proportions marked on the paper",
    caption: "Measuring proportions before the first mark",
  },
]);

const panelB = artPanel([
  {
    src: "art1-media-experiments.webp",
    alt: "A tabletop of experiments including watercolour washes, ink tests, print swatches and fabric squares annotated in pencil",
    caption: "Experiments that record what actually worked",
  },
  {
    src: "art1-studies-wall.webp",
    alt: "A studio wall of pinned developmental studies leading towards one larger resolved painting",
    caption: "Separate studies begin to connect on the wall",
  },
]);

const panelC = artPanel([
  {
    src: "art1-digital-portfolio.webp",
    alt: "A laptop and tablet showing photographed portfolio pages while a camera on a tripod copies flat artwork",
    caption: "The digital portfolio is the only evidence",
  },
  {
    src: "art1-exam-studio.webp",
    alt: "A supervised examination room with candidates working at individual desks during a timed art test",
    caption: "Eight focused hours of supervised making",
  },
]);

const chapterOne: Chapter = {
  number: 1,
  title: "How the Course Works",
  intro: `Cambridge IGCSE Art & Design, syllabus 0400, is a practical qualification.
It is assessed through portfolios of art and design work, not through a written examination paper.

The course has two components, each worth 100 marks and 50 per cent of the final grade.
Component 1 is Coursework, set within your centre.
Component 2 is the Externally Set Assignment, set by Cambridge.

Both components are marked against four assessment objectives: Record, Explore, Develop and Present.
Each objective carries 25 per cent, so no single skill can carry the whole submission.

Each component has its own digital portfolio.
The two portfolios are submitted separately and must not share the same work.

These notes are organised to follow that structure.
Chapter 1 explains the rules of the course.
Later chapters build the practical skills that the portfolios reward.

Read the chapters in order the first time, then use individual sections for revision.
Every section ends with examiner tips, common mistakes and exam-style questions.`,
  subheadings: [
    {
      title: "Two Components, One Qualification",
      body: `### One Qualification, Two Components

The qualification is Cambridge IGCSE Art & Design, syllabus 0400.

It is assessed entirely through practical work and research, with no written paper.

Candidates submit two components, and together they produce the final grade.

### Component 1 in Outline

Component 1 is Coursework.

It is worth 100 marks and 50 per cent of the qualification.

The centre sets the theme, and candidates build a portfolio of studies before resolving a final outcome.

### What 'Internally Set' Means

Your teacher or department chooses the starting point.

The theme must allow enough scope for personal enquiry.

It should not be so narrow that every candidate produces the same response.

### The Coursework Journey

Work begins with first-hand recording and contextual research.

Studies then explore media, compositions and ideas, each one tested and revised.

The final outcome grows from that evidence rather than appearing from nowhere.

### Component 2 in Outline

Component 2 is the Externally Set Assignment.

It is also worth 100 marks and 50 per cent of the qualification.

Cambridge publishes the starting points, and each candidate chooses one.

### The Preparation Period

The preparation period is supervised and ends before the timed test.

Candidates make supporting studies, gather sources and test materials.

These studies are assessed with the final outcome, so they must be kept and organised.

### The Eight-Hour Test

The final outcome is made in an eight-hour supervised test.

The test may be split into shorter sessions under examination conditions.

The time is for making, so the research and testing should already be complete.

### Two Separate Portfolios

Each component has its own digital portfolio.

Component 1 work must not appear in the Component 2 portfolio.

The separation protects the independence of each submission.

### The No-Double-Submission Rule

The same work cannot be submitted twice.

A study made for coursework cannot be re-entered as an examination supporting study.

Plan each portfolio as a distinct investigation with its own sources and outcomes.

### Marks and Weighting

Both components carry equal weight.

A strong coursework portfolio cannot compensate for a weak examination, and the reverse is also true.

The four assessment objectives are marked in both components.

### What the Examiner Receives

The examiner sees a digital portfolio, not the physical sketchbooks.

Images must be legible, correctly ordered and supported by brief annotation.

The portfolio is the only evidence, so presentation is part of the work.

### Planning the Year

Most centres complete Component 1 before the examination window.

Leaving the examination preparation until the last month limits experimentation.

A calendar with review points keeps both components moving.

### The Panel

The panel shows a working studio and a close observational study.

Both belong to the same habit: sustained looking before making.

That habit underpins every part of both components.

### A Comparison at a Glance

Coursework rewards sustained enquiry across a long period.

The Externally Set Assignment rewards speed of decision-making and focus.

Together they test whether a candidate can work independently.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Component 1 at a Glance",
          bullets: [
            "**Title:** Coursework, set internally by the centre.",
            "**Marks:** 100, worth 50 per cent of the qualification.",
            "**Assessment:** externally assessed by Cambridge.",
            "**Content:** coursework studies plus a final outcome.",
            "**Theme:** chosen within the centre, not by Cambridge.",
            "**Submission:** one digital portfolio.",
            "**No question paper:** the work is made across the course.",
          ],
        },
        {
          subTitle: "Component 2 at a Glance",
          bullets: [
            "**Title:** Externally Set Assignment.",
            "**Marks:** 100, worth 50 per cent of the qualification.",
            "**Starting point:** set by Cambridge, one chosen by the candidate.",
            "**Preparation:** supervised supporting studies made before the test.",
            "**Final outcome:** made in an eight-hour supervised test.",
            "**Submission:** a separate digital portfolio.",
            "**Condition:** the test may be split into shorter sessions.",
          ],
        },
        {
          subTitle: "Rules That Apply to Both",
          bullets: [
            "**Equal weighting:** each component is worth half the grade.",
            "**Same objectives:** Record, Explore, Develop and Present are assessed in both.",
            "**Separate portfolios:** one digital portfolio per component.",
            "**No reuse:** the same work cannot be submitted twice.",
            "**Supporting studies count:** preparation is assessed with the outcome.",
            "**Digital submission:** clear images and a sensible order are essential.",
          ],
        },
      ],
      examinerTips: [
        "Learn the marks and weightings exactly; they are easy marks in a written response.",
        "Use 'Component 1' and 'Component 2' precisely rather than calling both an exam.",
        "When comparing the components, organise the answer by component, not by random points.",
        "Mention the digital portfolio whenever a question asks how work is submitted.",
        "State that supporting studies are assessed with the final outcome, not separately.",
      ],
      commonMistakes: [
        "Calling Component 1 an examination; there is no question paper for coursework.",
        "Writing that Cambridge sets the coursework theme; the centre sets it.",
        "Claiming the eight-hour test can be replaced by work completed at home.",
        "Submitting the same study in both digital portfolios.",
        "Ignoring the preparation period when describing Component 2.",
      ],
      recap: [
        "Describe the structure of Component 1. [4]",
        "State the mark total and weighting of each component. [2]",
        "Explain two differences between Component 1 and Component 2. [4]",
        "Outline the conditions under which the Component 2 final outcome is made. [3]",
        "Explain why a candidate must keep the two digital portfolios separate. [3]",
      ],
    },
    {
      title: "The Four Assessment Objectives",
      body: `### Why the Objectives Exist

The four assessment objectives describe what examiners reward.

They apply to both components and carry equal weight.

Each objective is worth 25 per cent of the total mark.

### AO1: Record

Recording means gathering visual information from observation and experience.

It includes drawings, photographs, notes and measured studies.

The evidence should show what was seen, not only what was imagined.

### Evidence for AO1

A strong portfolio shows a range of sources and viewpoints.

Studies should be specific, because a labelled detail beats a vague sketch.

Recording can be analytical, such as a tonal study or a plan of a composition.

### AO2: Explore

Exploring means testing media, materials and processes.

It includes samples, experiments and trials of composition.

The aim is to discover what a material can do and how it suits an intention.

### Evidence for AO2

Evidence might be a page of colour mixes, a set of print proofs or a failed glaze test.

Annotations should explain the choice and the result.

Variety matters, but so does purpose.

### AO3: Develop

Developing means refining an idea across a sequence of studies.

It involves selecting, rejecting, combining and resolving.

The work should show change over time, not repetition.

### Evidence for AO3

Look for a chain: a first study, a response to a problem, a revised composition.

The final outcome should be traceable to earlier decisions.

Development can be visual, material or conceptual.

### AO4: Present

Presenting means selecting and organising work into a coherent portfolio.

It includes the resolved outcome and the sequence that leads to it.

Presentation is judged on clarity, not decoration.

### Evidence for AO4

The portfolio should have a clear order and readable images.

Captions and short annotations should guide the examiner.

The final outcome should feel like the conclusion of the enquiry.

### Equal Weighting

Each objective is worth the same in both components.

A beautiful final piece cannot compensate for missing exploration.

A busy sketchbook cannot compensate for a weak resolution.

### Recording Is Not Developing

Recording collects information; developing changes it.

A page of accurate drawings may score for AO1 but not for AO3.

Development needs a decision: what will change, and why?

### One Idea Through Four Objectives

A candidate records a market stall from three angles.

She explores ink, collage and photography.

She develops a composition around crowding and colour.

Finally she presents a resolved painting with the studies that led to it.

### Overlap Is Expected

A single page can provide evidence for more than one objective.

A colour study may record, explore and develop at once.

Examiners look for the quality of the evidence, not a neat checklist.

### Auditing Your Own Portfolio

Sort the work into the four objectives and look for gaps.

If one objective dominates, plan work that fills the gap.

Ask a teacher to audit the portfolio before final submission.`,
      groups: [
        {
          subTitle: "The Four Objectives",
          bullets: [
            "**AO1 Record:** gather visual information from direct observation and experience.",
            "**AO2 Explore:** test media, materials, processes and compositions.",
            "**AO3 Develop:** refine ideas through a sequence of decisions.",
            "**AO4 Present:** select and organise a coherent portfolio with a resolved outcome.",
            "**Weighting:** 25 per cent each, in both components.",
            "**Evidence:** each objective must be visible in the work, not only claimed in writing.",
          ],
        },
        {
          subTitle: "Recording versus Developing",
          bullets: [
            "**Recording asks:** what is there, and how does it look?",
            "**Developing asks:** what will I change, and why?",
            "A recording study can be accurate and still add nothing to the idea.",
            "A development study may be rough but must show a decision.",
            "Development often begins by selecting one detail from a recording.",
            "Keep the earlier version, because the change is the evidence.",
            "Repeating a drawing in another medium is exploration, not development, unless the idea changes.",
          ],
        },
        {
          subTitle: "Evidence an Examiner Can Find",
          bullets: [
            "**AO1:** source photographs, measured drawings, detail studies and notes.",
            "**AO2:** swatches, samples, proofs, tests and short technical notes.",
            "**AO3:** annotated revisions, alternative compositions and resolved trials.",
            "**AO4:** a clear sequence, readable images and a final outcome that concludes the enquiry.",
            "**Caption:** one line explaining what the page shows and why it is there.",
            "**Gap:** a missing objective is a missing quarter of the mark.",
          ],
        },
      ],
      examinerTips: [
        "Name the objective only when it helps; the work should provide the evidence first.",
        "For AO1, show a source and a study made from it, not just a finished drawing.",
        "For AO2, write what was tested and what the result showed.",
        "For AO3, show a before-and-after decision rather than more of the same image.",
        "For AO4, explain the order of the portfolio in one sentence.",
      ],
      commonMistakes: [
        "Treating accuracy as the only measure of recording.",
        "Filling pages with experiments that are never used or explained.",
        "Repeating one composition in different media and calling it development.",
        "Assuming the final outcome alone carries AO4.",
        "Forgetting that both components use the same four objectives.",
      ],
      recap: [
        "State the four assessment objectives and their weighting. [4]",
        "Explain the difference between recording and developing. [4]",
        "Describe two pieces of evidence that would satisfy AO2. [4]",
        "Explain why a strong final outcome cannot compensate for weak exploration. [3]",
        "For a project of your choice, outline how it addresses each assessment objective. [6]",
      ],
    },
    {
      title: "Working from First-Hand Sources",
      body: `### What First-Hand Means

First-hand evidence comes from direct contact with the subject.

It is seen, touched or experienced by the candidate.

It carries information that a screen cannot fully supply.

### Direct Observation at School

Set up a still life, a figure study or a view from the window.

Work from the object itself rather than a photograph of it.

Change the lighting and record the difference.

### Gallery and Museum Visits

A visit allows close study of scale, surface and installation.

Make quick sketches and notes in the gallery, then develop them later.

Record the label information so the source can be credited.

### Visiting Artists and Craftspeople

A demonstration shows process in a way books cannot.

Ask about preparation, drying times, tools and failures.

Record the answers in your own words.

### Primary Sources Beyond Objects

Buildings, streets, markets, plants and people are all primary sources.

A sound recording or a measured plan can also be first-hand evidence.

The test is whether you experienced the source directly.

### Secondary Sources

Books, magazines, documentaries and websites are secondary sources.

They are useful for context, comparison and technical information.

They should support first-hand work, not replace it.

### Using Secondary Sources with Care

Check the date and the author of any source.

A reproduction may distort colour, scale and surface.

Credit every borrowed image and never present it as your own.

### Drawings as the Spine

Your own drawings show how you see and think.

They can be rough, but they must be specific.

A sequence of drawings from one subject is stronger than many unrelated sketches.

### Photographs as the Spine

Your own photographs record detail, light and viewpoint quickly.

They are evidence, but they are not a substitute for drawing.

Use them to extend observation, then draw from the photograph critically.

### Combining Drawing and Photography

Photograph the subject, then draw from life and compare.

The drawing may reveal structure that the photograph flattens.

Use both to build a fuller record.

### Recording the Source

Note where, when and why the source was recorded.

Include the light conditions and the size of the subject.

These details make the study useful later.

### A Research Trip Checklist

Take a sketchbook, a pencil, an eraser and a camera.

Check whether photography is permitted.

Plan two or three focused studies rather than dozens of rushed ones.

### Ethics and Permissions

Ask before photographing people, especially children.

Respect gallery rules and private property.

Credit cultural objects and community knowledge properly.

### The Panel

The panel shows experiments on a tabletop and a wall of pinned studies.

Both are first-hand evidence of working process.

The wall shows how separate observations begin to connect.`,
      figure: panelB,
      groups: [
        {
          subTitle: "First-Hand Sources",
          bullets: [
            "**Direct observation:** the object, person or place itself, seen in real light.",
            "**Gallery visit:** close looking at scale, surface and installation.",
            "**Artist or craftsperson:** a demonstration or interview about process.",
            "**Site visit:** buildings, streets, markets, landscapes and interiors.",
            "**Measured study:** a plan or elevation that records proportion.",
            "**Own photograph:** a record of viewpoint, detail or changing light.",
            "**Own drawing:** the clearest evidence of how you see.",
          ],
        },
        {
          subTitle: "Secondary Sources",
          bullets: [
            "**Books and catalogues:** reliable for context and good reproductions.",
            "**Magazines and journals:** useful for contemporary practice.",
            "**Documentaries and lectures:** explain process and intention.",
            "**Websites and databases:** convenient, but check the author and date.",
            "**Reproductions:** may alter colour, scale and surface quality.",
            "**Use:** support a first-hand study, never replace it.",
          ],
        },
        {
          subTitle: "Building a Source Bank",
          bullets: [
            "**Label:** date, place, subject and reason for recording.",
            "**Vary:** wide view, middle distance and close detail.",
            "**Repeat:** return to the same source in different light.",
            "**Select:** keep the useful studies, not every image taken.",
            "**Credit:** record the maker or owner of any borrowed source.",
            "**Back up:** store photographs in two places before editing.",
          ],
        },
      ],
      examinerTips: [
        "Distinguish primary from secondary sources in one clear sentence.",
        "Give a specific example of first-hand recording rather than a general claim.",
        "For a gallery question, mention looking, sketching and recording label information.",
        "Explain that photographs extend observation but do not replace drawing.",
        "Mention permissions and credits when the question concerns people or cultural objects.",
      ],
      commonMistakes: [
        "Describing copied internet images as first-hand research.",
        "Visiting a gallery but recording nothing beyond the gift shop.",
        "Relying on a photograph without ever drawing from the subject.",
        "Forgetting to record where and when a source was observed.",
        "Using a reproduction without checking its colour or crediting it.",
      ],
      recap: [
        "Distinguish between primary and secondary sources. [2]",
        "Explain two reasons why first-hand observation is valuable. [4]",
        "Describe how a gallery visit can contribute to a portfolio. [3]",
        "Explain why a photograph should not replace drawing from observation. [3]",
        "Outline the checks you would make before using an image from the internet. [4]",
      ],
    },
    {
      title: "Exploring Media, Materials and Processes",
      body: `### Why Experiment

Experimentation turns an idea into practical knowledge.

It shows what a material does under a particular condition.

Without it, a final outcome is only a guess.

### Samples and Swatches

Make small samples before committing to a large surface.

Record the mix, the tool and the support.

Keep the samples in the portfolio as evidence.

### Testing Grounds and Supports

Different grounds absorb paint differently.

Test paper, board, canvas and primed surfaces with the same medium.

Note which combination suits the intention.

### Technical Notes

Write short notes beside each test.

Record drying time, opacity, adhesion and any change after drying.

A dated note is more useful than a memory.

### New Media

Try a medium you have not used before, but test it first.

Digital tools, spray paint, resin and textiles all have rules.

Learn the safety guidance before the experiment.

### Recycled and Found Media

Old paper, card, fabric and packaging can add history and texture.

Check that the material is stable and clean.

Record where it came from if the source matters.

### Keeping Failures

A failed test is still evidence of enquiry.

Label it with what went wrong and what you learnt.

Removing every failure makes the portfolio look untested.

### Revisions and Iterations

Revise a study rather than starting again from zero.

Photograph the earlier state before changing it.

The sequence of revisions is strong AO3 evidence.

### Health and Safety

Ventilate the room when using solvents or sprays.

Wear gloves and eye protection where needed.

Dispose of waste responsibly and follow studio rules.

### Documenting Experiments

Photograph samples in daylight and keep the colour consistent.

Add a scale or a label so the size is clear.

Group related tests on one page.

### A Sample Page Layout

Place the test in the centre and the notes to one side.

Add a small control sample for comparison.

Leave space for a later comment.

### Time and Cost

Set a limit for each experiment.

Expensive materials should be tested small before a large work.

Time spent testing is rarely wasted.

### When to Stop Experimenting

Stop when the next test would repeat what you already know.

Move to development when the material behaves predictably.

Keep one unresolved question for the final outcome.

### Linking Experiment to Intention

An experiment should answer a question you actually have.

Write the question at the top of the page.

Then judge the result against it.`,
      groups: [
        {
          subTitle: "What to Test",
          bullets: [
            "**Absorbency:** how quickly a ground takes water, ink or paint.",
            "**Opacity:** whether a layer hides or reveals what lies beneath.",
            "**Drying time:** how long a surface stays workable.",
            "**Adhesion:** whether a layer holds to its support.",
            "**Colour change:** how a mix shifts as it dries.",
            "**Tool marks:** brush, knife, roller, stick and sponge.",
            "**Durability:** whether the surface survives handling and transport.",
          ],
        },
        {
          subTitle: "Recording the Test",
          bullets: [
            "**Sample:** keep the actual piece, not only a photograph.",
            "**Label:** medium, ground, mix and date.",
            "**Control:** include an untreated sample for comparison.",
            "**Note:** one sentence on what the result showed.",
            "**Scale:** show the real size or add a ruler.",
            "**Sequence:** number the tests so the order is clear.",
          ],
        },
        {
          subTitle: "Failures That Earn Marks",
          bullets: [
            "**Cracking:** record where and why the ground failed.",
            "**Bleeding:** note the direction and the wetness of the layers.",
            "**Flaking:** test whether the surface was too smooth or greasy.",
            "**Muddy colour:** identify the mixing error.",
            "**Torn paper:** record the limit of the support.",
            "**Revision:** show what changed in the next attempt.",
          ],
        },
      ],
      examinerTips: [
        "Keep the sample itself; a photograph of a test is weaker evidence than the test.",
        "Write the question before the experiment and the judgement afterwards.",
        "Record failures honestly, because they show enquiry rather than carelessness.",
        "Link each experiment to a decision in the final outcome.",
        "Mention safety when describing solvents, sprays or sharp tools.",
      ],
      commonMistakes: [
        "Testing materials without recording what was mixed or which ground was used.",
        "Throwing away failed samples, leaving only successful work.",
        "Experimenting for its own sake with no link to the theme.",
        "Using a new medium for the first time in the final outcome.",
        "Ignoring drying time and then blaming the medium for cracking.",
      ],
      recap: [
        "Explain why samples should be kept in the portfolio. [3]",
        "Describe two properties to record when testing a medium. [4]",
        "Explain how a failed experiment can support AO2. [3]",
        "Outline three safety precautions for a studio experiment. [3]",
        "Explain why experiments should be linked to an intention. [3]",
      ],
    },
    {
      title: "Developing Ideas with Context",
      body: `### Research with a Purpose

Contextual research answers a question in your own work.

It is not a survey of an artist's life.

Start with a problem: composition, colour, surface, meaning or process.

### Choosing References

Choose references that connect to your theme and materials.

One close reference is better than ten vague ones.

Include artists, designers, craftspeople and cultural traditions.

### Analysis Not Biography

A biography lists dates and prizes.

An analysis explains how the work is made and what it communicates.

Write about the work, not the artist's childhood.

### Formal Analysis

Describe what you see before interpreting it.

Discuss composition, tone, colour, scale, mark-making and surface.

Use the vocabulary of the elements and principles.

### Intention and Meaning

Ask what the work is trying to do.

Consider the audience, the site and the moment of making.

Then say whether it succeeds, and why.

### Comparing Two Sources

Choose two works that share a problem but solve it differently.

Compare like with like: colour with colour, composition with composition.

A comparison should end with a judgement, not a list.

### Cultural Context

A work may belong to a religion, a court, a market or a protest.

Context can explain materials, symbols and scale.

Avoid treating a cultural object as decoration.

### Context Changes Meaning

The same image can mean different things in different settings.

A portrait may be a record, a memorial or a claim to power.

State which reading you are using and why.

### Applying Rather than Copying

Borrow a method, not a motif.

Test the method in your own subject and medium.

Credit the source, then show what you changed.

### Citation and Credits

Record the artist, title, date, medium and location.

For a website, record the address and the date accessed.

Credit images even when they are in a sketchbook.

### A Context Page

Place the reproduction beside your own response.

Add a short analysis and a note on what you will try.

Keep the page readable rather than crowded.

### When Research Is Finished

Stop when the research has changed a decision in your work.

If nothing changes, the research is probably too general.

Move on to making.

### Research and the Final Outcome

The final outcome should show the effect of the research.

This may be a method, a palette, a format or a critical position.

The link should be visible without a long explanation.

### The Test of Relevance

Ask whether the reference helps you solve your problem.

If not, keep it as background reading, not portfolio evidence.

Relevance is judged by use, not by quantity.`,
      groups: [
        {
          subTitle: "What to Research",
          bullets: [
            "**Artists and designers:** how they handle your chosen problem.",
            "**Craftspeople:** materials, tools and traditional methods.",
            "**Movements:** shared ideas, not just a list of names.",
            "**Cultural traditions:** symbols, materials and protocols.",
            "**Historical context:** what the work was made for and for whom.",
            "**Contemporary practice:** current materials and audiences.",
            "**Critical writing:** reviews and essays that interpret the work.",
          ],
        },
        {
          subTitle: "How to Analyse",
          bullets: [
            "**Describe:** subject, scale, medium and composition.",
            "**Analyse:** how the parts work together to create an effect.",
            "**Interpret:** what the work suggests or argues.",
            "**Evaluate:** how successfully it achieves its intention.",
            "**Connect:** what you will borrow or reject in your own work.",
            "**Compare:** one clear point of similarity and one of difference.",
            "**Conclude:** a judgement, not a summary of facts.",
          ],
        },
        {
          subTitle: "Context and Meaning",
          bullets: [
            "**Function:** was the object made for worship, trade, display or protest?",
            "**Audience:** who saw it, and where?",
            "**Material:** why this medium rather than another?",
            "**Symbol:** what does the imagery mean within its culture?",
            "**Change:** how does the meaning shift when the object moves?",
            "**Ethics:** avoid reducing a living tradition to a style.",
          ],
        },
      ],
      examinerTips: [
        "Begin with your own problem, then introduce the reference that helps solve it.",
        "Use formal vocabulary rather than adjectives such as nice or beautiful.",
        "Make one comparison point at a time and support it with visual evidence.",
        "Show the effect of the research in your own studies, not only in writing.",
        "Credit every source with enough detail for the examiner to find it.",
      ],
      commonMistakes: [
        "Writing an artist's life story instead of analysing the work.",
        "Listing ten references without using any of them.",
        "Copying a motif and calling it influence.",
        "Ignoring the culture or function of a borrowed object.",
        "Leaving research pages without a link to the candidate's own work.",
      ],
      recap: [
        "Explain the difference between analysis and biography. [3]",
        "Describe how you would compare two artists' treatment of the same subject. [4]",
        "Explain why cultural context matters when interpreting an artwork. [4]",
        "Outline the information needed to credit a reproduced artwork. [3]",
        "Explain how contextual research can change a candidate's practical decisions. [3]",
      ],
    },
    {
      title: "Presenting a Coherent Response",
      body: `### What Coherence Means

A coherent portfolio reads as one investigation.

Every study should connect to the theme and to the others.

Variety is welcome, but it must serve the whole.

### Selecting Studies

Choose work that shows a decision, not just a finished surface.

Keep the studies that explain the final outcome.

Remove duplicates and unrelated experiments.

### Sequencing

Order the work so the enquiry unfolds logically.

Begin with the source, then show exploration, development and resolution.

The final outcome should arrive as a conclusion.

### The Resolved Outcome

The outcome should be ambitious, considered and technically controlled.

It need not be large, but it must be resolved.

It should answer the question set by the studies.

### Photographing Work

Use even, diffuse light and a neutral background.

Keep the camera parallel to the work to avoid distortion.

Check colour against the original before submitting.

### Building the Digital Portfolio

Follow the centre's file format and size limits.

Group images by stage and number the pages.

Test that the file opens on another device.

### File Names and Order

Use clear, consistent names such as theme-stage-01.

Avoid spaces and special characters.

A logical order helps the examiner navigate quickly.

### Annotation Only If Purposeful

Write when a note explains a decision or a change.

Do not describe what is already visible.

Short captions are often enough.

### Annotation in English

All annotation must be in English.

Keep sentences plain and specific.

Spelling and clarity matter, but the ideas matter more.

### Checking Against the Objectives

Audit the portfolio for all four objectives.

Look for missing recording, thin exploration or an unresolved outcome.

Adjust the selection rather than adding decorative pages.

### The Final Week

Photograph, check and back up the portfolio.

Leave time for a teacher's review.

Do not make major changes without testing them first.

### Submission Checklist

Confirm the component, the candidate number and the file list.

Check that every image opens and is the right way up.

Keep a personal copy of the submitted file.

### The Panel

The panel shows a digital portfolio being photographed and a supervised examination room.

Both images point to the same discipline: the work must survive the journey to the examiner.

Presentation is part of the evidence.

### Coherence and Independence

The portfolio should look like your own enquiry.

Do not imitate a classmate's layout or an artist's signature style.

Coherence comes from your decisions, not from a template.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Selection and Sequence",
          bullets: [
            "**Source:** the first observation or reference that started the enquiry.",
            "**Exploration:** the material and composition tests that followed.",
            "**Development:** the revisions that changed the idea.",
            "**Resolution:** the final outcome and the studies that explain it.",
            "**Cut:** duplicates, dead ends and work unrelated to the theme.",
            "**Check:** every kept page answers the question, why is this here?",
          ],
        },
        {
          subTitle: "The Digital Portfolio",
          bullets: [
            "**Format:** follow the centre's required file type and size.",
            "**Light:** even and diffuse, with no glare or hard shadow.",
            "**Alignment:** camera parallel to the work, edges square.",
            "**Colour:** compare the file with the original under neutral light.",
            "**Order:** number pages and group them by stage.",
            "**Labels:** candidate number, component and page number.",
            "**Back-up:** keep a second copy on another device.",
          ],
        },
        {
          subTitle: "Annotation That Earns Its Place",
          bullets: [
            "**Decision:** why this material, viewpoint or composition was chosen.",
            "**Change:** what was altered after seeing the result.",
            "**Source:** where an image or idea came from.",
            "**Judgement:** whether the study succeeded and what comes next.",
            "**Brevity:** one or two sentences beside the image.",
            "**Language:** English, plain and specific.",
          ],
        },
      ],
      examinerTips: [
        "Start the portfolio with the source and end with the resolved outcome.",
        "Use captions to explain decisions, not to describe visible content.",
        "Check image quality on a second screen before submission.",
        "Leave a clear margin around each photographed page.",
        "Make the final outcome feel inevitable rather than appended.",
      ],
      commonMistakes: [
        "Including every sketch and hoping the examiner finds the good work.",
        "Photographing work at an angle so the edges distort.",
        "Writing long descriptive annotation that repeats the image.",
        "Submitting files with unclear names or the wrong page order.",
        "Adding a final outcome that has no visible link to the studies.",
      ],
      recap: [
        "Explain what is meant by a coherent portfolio. [3]",
        "Describe how you would select studies for the final portfolio. [4]",
        "Outline three checks to make before submitting a digital portfolio. [3]",
        "Explain why annotation should be purposeful rather than descriptive. [3]",
        "Describe how the final outcome should relate to the supporting studies. [4]",
      ],
    },
  ],
};

export const ART_DESIGN_CHAPTER_1 = chapterOne;
