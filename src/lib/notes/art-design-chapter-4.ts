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
    src: "art4-poster-grid.webp",
    alt: "A grid of poster designs pinned on a studio wall, showing one campaign adapted to several formats",
    caption: "One campaign, many formats",
  },
  {
    src: "art4-billboard.webp",
    alt: "A large roadside billboard carrying a bold headline and a single product image above passing traffic",
    caption: "Read in three seconds",
  },
]);

const panelB = artPanel([
  {
    src: "art4-letterform.webp",
    alt: "An enlarged letter A with baseline, x-height and serif details labelled in pencil",
    caption: "Anatomy drawn, not guessed",
  },
  {
    src: "art4-logo-scale.webp",
    alt: "The same logo reproduced from a small business card to a large shopfront sign to test legibility",
    caption: "Small card, wide wall",
  },
]);

const panelC = artPanel([
  {
    src: "art4-screenprint.webp",
    alt: "A squeegee pulling ink through a mesh screen onto paper, with registration marks at the frame edge",
    caption: "One screen for each colour",
  },
  {
    src: "art4-packaging-net.webp",
    alt: "A flat carton net with glue flaps, fold lines and a dieline laid out on a workbench",
    caption: "Flat plan, solid box",
  },
]);

const chapterFour: Chapter = {
  number: 4,
  title: "Graphic Communication",
  intro: `Graphic communication turns a message into a visual object: a poster, a package, a sign, a book cover or a screen.\n\nIt works through three partners: the **client** who commissions the work, the **audience** who reads it, and the **designer** who shapes it.\n\nA design succeeds when the right person understands the right thing at the right moment.\n\nThat is why graphic designers study typography, image-making, layout and print processes as one connected craft.\n\nThis chapter follows a project from brief to printed sheet, and explains the vocabulary examiners expect.`,
  subheadings: [
    {
      title: "Briefs, Purpose and Audience",
      body: `### The Brief Is the Starting Point

A **design brief** is a written statement of the problem the designer has been asked to solve.

It identifies the client, the audience, the message, the format and the deadline.

It may also name a budget, a print process, a house style and any legal limits.

Without a brief, a designer can produce a beautiful object that answers the wrong question.

### What the Brief Must Contain

The **client** is the person or organisation paying for the work and approving it.

The **target audience** is the group the communication is intended to reach.

The **message** is the single idea the audience should take away.

The brief also fixes practical matters: size, quantity, delivery date and available money.

### The Client Is Not the Audience

A client often assumes that everyone shares their taste and knowledge.

The audience may be younger, older, busier or less familiar with the subject.

A good designer separates the client's preferences from the audience's needs.

Questions about age, income, location and habit reveal who is really being addressed.

### Purpose Decides the Tone

Graphic work may inform, persuade, warn, sell, identify or entertain.

A safety notice needs clarity above decoration, while a festival poster can afford wit.

A charity appeal and a luxury perfume advert use different colour, type and image.

Naming the purpose first stops the design drifting into mere decoration.

### Constraints Sharpen the Work

A **constraint** is any limit on the design, such as budget, size or production method.

A single-colour print budget forces stronger shape and bolder contrast.

A small label limits the number of words and the size of the type.

Experienced designers treat constraints as creative prompts rather than obstacles.

### Thumbnails, Roughs and Comps

**Thumbnails** are tiny, rapid sketches that test many layout ideas on one sheet.

**Roughs** are larger drawings that show the type, image and colour more clearly.

A **comprehensive**, or comp, is a near-final version presented for approval.

Each stage costs less to change than the one after it, so errors are caught early.

### Presenting to the Client

The designer explains how the solution meets the brief, not just how it looks.

Two or three developed options are usually stronger than a single take-it-or-leave-it design.

Client feedback is recorded, because spoken changes are easily misunderstood.

A signed-off proof protects both sides before printing begins.

### One Message at Two Distances

The same campaign has to work close up and far away.

A poster in a venue can carry detail, a web address and small print.

A roadside billboard is read in seconds, so it keeps one image and a few words.

The poster grid and the billboard below show how format and viewing distance reshape a single design.`,
      figure: panelA,
      groups: [
        {
          subTitle: "What a Brief Must State",
          bullets: [
            "**Client:** the organisation commissioning and approving the work.",
            "**Audience:** the age, location and habits of the people to be reached.",
            "**Message:** the one idea that must be remembered.",
            "**Format:** poster, label, fold-out leaflet, screen banner or sign.",
            "**Deadline:** when artwork and proof must be delivered.",
            "**Budget:** the money available for design, print and distribution.",
          ],
        },
        {
          subTitle: "Questions That Define an Audience",
          bullets: [
            "**Age range:** children, students, commuters or retired readers?",
            "**Meeting point:** will they see it on a wall, a shelf, a phone or a road?",
            "**Prior knowledge:** do they already understand the product or cause?",
            "**Values:** what tone, imagery and colour will they trust?",
            "**Attention:** how many seconds will they give the design?",
            "**Action:** what should they do next: buy, visit, call or remember?",
          ],
        },
        {
          subTitle: "From Thumbnail to Finished Artwork",
          bullets: [
            "**Thumbnails:** small sketches testing layout and image placement.",
            "**Roughs:** larger drawings indicating type, colour and proportion.",
            "**Comps:** near-final presentations for client approval.",
            "**Feedback:** written notes showing what changed and why.",
            "**Artwork:** print-ready files with bleed, crops and separations.",
            "**Proof:** the final test print, checked and signed before the run.",
          ],
        },
      ],
      examinerTips: [
        "Read the brief twice, then underline the audience and the message before sketching.",
        "Name the format and the viewing distance when explaining a layout decision.",
        "Justify choices by audience needs, not by personal taste.",
        "Treat constraints as part of the solution, such as one colour producing bolder shapes.",
        "Use the correct sequence: brief, thumbnail, rough, comp, artwork, proof.",
      ],
      commonMistakes: [
        "Designing for the teacher or for yourself instead of the stated audience.",
        "Confusing the client, who pays, with the audience, who reads.",
        "Jumping to final artwork without thumbnails or roughs.",
        "Ignoring print size and viewing distance when choosing type.",
        "Leaving out a call to action, so the reader does not know what to do.",
      ],
      recap: [
        "Define the term design brief. [2]",
        "Explain why a designer should identify the target audience before starting work. [3]",
        "Describe the difference between a thumbnail and a rough. [2]",
        "A client asks for a poster for a local music festival. State four pieces of information the brief should contain. [4]",
        "Explain how two constraints might improve a graphic design. [4]",
      ],
    },
    {
      title: "Typography and Lettering",
      body: `### Letters Are Designed Objects

Every letterform is a drawing with proportions, strokes and spaces.

Type designers balance the black of the strokes against the white of the counters.

A **typeface** is a family of related letters; a **font** is one weight or style within it.

Choosing a typeface is therefore a design decision, not a neutral default.

### The Anatomy of a Letterform

The **baseline** is the line on which most letters sit.

The **x-height** is the height of a lower-case x, and it strongly affects legibility.

**Ascenders** rise above the x-height, as in b, d and h; **descenders** fall below the baseline, as in p and g.

The **counter** is the enclosed space inside a letter such as o or e.

### Serif, Sans Serif and Script

**Serif** typefaces have small strokes at the ends of stems and suit long printed text.

**Sans serif** typefaces have clean terminals and work well on screens and signs.

**Script** typefaces imitate handwriting and are used for short, personal or decorative lines.

**Display** typefaces are drawn for headlines and rarely work as body text.

### Display Type and Hand Lettering

Display lettering can be drawn, painted or constructed rather than typeset.

Hand lettering lets the designer match letter shapes to the subject.

Calligraphy uses a broad nib or brush, so thick and thin strokes come from the tool.

Lettering must still obey spacing and proportion, however expressive it becomes.

### Building Hierarchy

**Hierarchy** is the order in which the eye reads the elements.

Size, weight, colour, position and case all signal importance.

A headline may be large and bold, a subhead medium and regular, the body small and light.

Too many competing levels flatten the hierarchy and confuse the reader.

### Kerning, Tracking and Leading

**Kerning** adjusts the space between two particular letters, such as A and V.

**Tracking** adjusts the spacing across a whole word or line.

**Leading** is the vertical distance between lines of text.

Generous leading aids reading; tight leading saves space but tires the eye.

### Legibility at Distance

Distance removes detail, so large counters and a tall x-height help.

Thin strokes disappear outdoors, especially against a bright sky.

Short words, strong contrast and few items survive a three-second glance.

Designers test a sign from the far side of the room, not from the desk.

### Calligraphy and Drawn Type

A broad-edged pen held at a constant angle produces thick downstrokes and thin diagonals.

Brush lettering varies pressure to create weight and rhythm.

Guide lines for x-height, ascender and descender keep the writing even.

Finished lettering is often redrawn cleanly after the initial calligraphic study.

### Testing Type at Scale

A logo must survive on a business card and on a building.

Small sizes demand simpler shapes, fewer details and more space around the mark.

Large sizes reveal clumsy curves and uneven spacing that small sizes hide.

The letterform study and the scaled logo below test the same drawing at two extremes.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Letterform Anatomy",
          bullets: [
            "**Baseline:** the line on which the letters sit.",
            "**x-height:** the height of a lower-case x, which sets apparent size.",
            "**Ascender and descender:** strokes above and below the x-height.",
            "**Counter:** the enclosed white space inside a letter.",
            "**Stem and bowl:** the main vertical stroke and the rounded enclosed curve.",
            "**Serif and terminal:** the foot stroke and the ending of a stem.",
          ],
        },
        {
          subTitle: "Choosing a Typeface",
          bullets: [
            "**Serif:** traditional and readable in long printed passages.",
            "**Sans serif:** clear at small sizes on screens and signs.",
            "**Script:** personal or celebratory, but poor for long text.",
            "**Display:** distinctive headlines, rarely suitable for body copy.",
            "**Weight and width:** bold for emphasis, condensed to save space.",
            "**Mood:** geometric, humanist or slab shapes carry different characters.",
          ],
        },
        {
          subTitle: "Spacing and Hierarchy",
          bullets: [
            "**Kerning:** optical spacing between one pair of letters.",
            "**Tracking:** uniform spacing across a word or line.",
            "**Leading:** the gap between one baseline and the next.",
            "**Measure:** the length of a line, ideally 45 to 75 characters.",
            "**Size:** the strongest signal of importance.",
            "**Weight and colour:** secondary signals that support size.",
          ],
        },
      ],
      examinerTips: [
        "Use anatomical terms such as baseline, x-height and counter accurately.",
        "Explain legibility through audience, distance and viewing time.",
        "Compare typefaces by function, not by personal fashion.",
        "Say that the design was tested at actual size or from a distance.",
        "Limit a layout to two type families and three hierarchy levels.",
      ],
      commonMistakes: [
        "Confusing kerning, which adjusts pairs, with tracking, which adjusts a line.",
        "Setting long passages in a script or decorative display face.",
        "Judging type only at 100 per cent on a bright screen.",
        "Crowding a design with four or five unrelated typefaces.",
        "Forgetting leading, so lines of body text almost touch.",
      ],
      recap: [
        "Define the terms kerning and tracking. [2]",
        "Explain how x-height affects legibility at a distance. [3]",
        "Describe two features of a sans serif typeface. [2]",
        "A café needs a sign readable from across a road. Explain three typographic choices that would help. [4]",
        "Compare serif and script typefaces for the cover of a poetry book. [4]",
      ],
    },
    {
      title: "Image and Text Composition",
      body: `### Two Voices on One Surface

An image and a line of type must read as one composition.

The image can lead and the words confirm, or the words can lead and the image illustrate.

Repeating a colour, angle or shape links the two voices.

When they compete, the viewer reads neither properly.

### Grids Make Order

A **grid** divides the page into columns, margins and gutters.

Content placed on the grid lines looks deliberate and stays consistent across pages.

A simple column grid suits posters and leaflets; a modular grid suits catalogues and websites.

The grid can be broken for emphasis, but only after it has been established.

### Balance Is Visual Weight

A large pale shape may weigh the same as a small dark one.

**Symmetrical** balance feels formal and calm; **asymmetrical** balance feels lively.

Visual weight comes from size, tone, colour, detail and isolation.

A layout that leans to one side without purpose feels unfinished.

### Negative Space Works

**Negative space** is the empty area around and between elements.

It separates competing information, rests the eye and signals quality.

Crowding every corner lowers the perceived value of the design.

Space also protects type from busy image areas.

### Hierarchy Directs the Eye

The reader should meet the headline, then the image, then the detail.

Position, scale and contrast establish that route.

A **focal point** is the first thing seen, and it should carry the main message.

Secondary information is grouped so it can be found without hunting.

### Contrast and Colour

Contrast separates foreground from background and creates emphasis.

Dark type on a light ground is easiest to read in print.

Colour should carry meaning as well as decoration.

A limited palette usually looks more controlled than many unrelated hues.

### Cropping and Framing

**Cropping** decides what is included and what is removed.

A tight crop creates intimacy and drama; a wide shot gives context.

The frame edge can cut a subject deliberately to suggest scale or movement.

Every crop should serve the message rather than merely fill the space.

### Checking the Layout

Squint at the design to see whether the hierarchy survives.

Turn it upside down to judge shape and balance without reading.

Check margins, alignments and the spacing around the type.

Ask a reader what they noticed first, and compare that with the intention.`,
      groups: [
        {
          subTitle: "Grid Terms",
          bullets: [
            "**Margin:** the protected space between content and the page edge.",
            "**Column:** a vertical band into which text and images are set.",
            "**Gutter:** the gap between adjacent columns.",
            "**Module:** one rectangular unit in a modular grid.",
            "**Baseline grid:** horizontal lines that align text across columns.",
            "**Breaking the grid:** deliberate disruption used for emphasis.",
          ],
        },
        {
          subTitle: "Ways to Build Hierarchy",
          bullets: [
            "**Scale:** the largest element is usually read first.",
            "**Weight:** bold type advances, light type recedes.",
            "**Colour:** a saturated accent attracts the eye.",
            "**Position:** the top and the optical centre are strong positions.",
            "**Isolation:** surrounding a message with space gives it authority.",
            "**Direction:** lines and gazes steer the reader towards the message.",
          ],
        },
        {
          subTitle: "Layout Faults to Correct",
          bullets: [
            "**Two focal points:** the eye cannot decide where to begin.",
            "**Type over busy image:** the words disappear into texture.",
            "**Uneven margins:** the page looks accidentally cropped.",
            "**Too many alignments:** elements appear to float at random.",
            "**Weak contrast:** grey type on a mid-tone ground fails at a distance.",
            "**No breathing space:** density exhausts the reader before the message lands.",
          ],
        },
      ],
      examinerTips: [
        "Describe a layout using grid vocabulary rather than vague words like nice.",
        "Say where the eye goes first, second and third, and why.",
        "Explain negative space as an active element, not as wasted paper.",
        "Link the colour choices to the audience and the message.",
        "Judge the layout against the brief, not against fashion.",
      ],
      commonMistakes: [
        "Listing what is in the image instead of analysing its arrangement.",
        "Treating white space as space that still needs filling.",
        "Centring every element and calling the result balanced.",
        "Using many colours without a hierarchy of accent and ground.",
        "Ignoring the reading direction of the audience.",
      ],
      recap: [
        "Explain how a grid helps a designer to organise a page. [3]",
        "Describe two ways of creating a focal point in a poster. [4]",
        "Explain the difference between symmetrical and asymmetrical balance. [3]",
        "Describe how negative space can improve a busy advertisement. [3]",
        "Evaluate a layout in which the headline, image and logo are all the same size. [4]",
      ],
    },
    {
      title: "Illustration",
      body: `### What Illustration Adds

Illustration interprets a text or brief rather than merely repeating it.

It can show what cannot be photographed, simplify a complex idea or create a mood.

A good illustration is commissioned for a purpose, not chosen for decoration.

Style must serve the audience and the message.

### Thumbnails and Roughs

Illustrators explore several compositions before committing to one.

Thumbnails establish the main shapes and the position of the viewer.

Roughs add tone, colour and detail while changes are still cheap.

A rough should be clear enough for the client to judge the idea.

### Character Illustration

Characters need a consistent structure beneath the costume.

A character sheet shows front, side and back views, plus key expressions.

Proportion, silhouette and colour help the character read at a glance.

Consistency matters when the character appears across several images.

### Product Illustration

Product illustration must be accurate about shape, material and detail.

Cutaway views can reveal how something works.

Exploded views separate parts along an axis to show assembly.

Lighting and reflection describe surface: matte, glossy, metallic or soft.

### Narrative Sequence

A sequence of images tells a story through changes between frames.

Each frame should change viewpoint, scale or action to keep the story moving.

Storyboards plan a sequence before final artwork is made.

Continuity of character, light and colour holds the sequence together.

### Media and Mark-Making

Ink gives crisp lines and strong contrast; watercolour gives soft, transparent washes.

Gouache is opaque and suits flat, graphic colour.

Collage builds texture and surprise from found and cut paper.

Digital tools allow revision, but the underlying drawing still matters.

### Consistency Across a Set

A set of illustrations shares palette, line weight and level of detail.

Recurring shapes or textures create a family resemblance.

Inconsistency reads as carelessness, even when each image is good alone.

A style guide helps several illustrators work on one project.

### Judging an Illustration

Check that the image communicates the brief without the caption.

Check that the drawing is structurally believable.

Check that the style suits the audience and the reproduction method.

Check that the image and the text do not repeat each other word for word.`,
      groups: [
        {
          subTitle: "Illustration Media",
          bullets: [
            "**Ink:** crisp lines, strong blacks and confident hatching.",
            "**Watercolour:** transparent washes for light, weather and atmosphere.",
            "**Gouache:** opaque, flat colour for graphic and poster work.",
            "**Collage:** cut shapes and found texture for wit and surprise.",
            "**Digital:** easy revision, layers and clean reproduction.",
            "**Mixed media:** combined materials for surface and depth.",
          ],
        },
        {
          subTitle: "Planning a Sequence",
          bullets: [
            "**Thumbnails:** quick frames testing composition and pace.",
            "**Storyboard:** a numbered plan of shots and captions.",
            "**Viewpoint:** close, wide, high or low to control drama.",
            "**Pace:** varying scale and detail to keep interest.",
            "**Continuity:** consistent character, costume and lighting.",
            "**Resolution:** a final frame that completes the message.",
          ],
        },
        {
          subTitle: "Illustration Checklist",
          bullets: [
            "**Brief:** the image answers the stated purpose and audience.",
            "**Structure:** anatomy and perspective are believable.",
            "**Silhouette:** the subject reads clearly as a shape.",
            "**Style:** line, colour and detail suit the subject.",
            "**Reproduction:** the image survives the printing process.",
            "**Originality:** the solution is more than a copied style.",
          ],
        },
      ],
      examinerTips: [
        "Explain what the illustration adds that a photograph could not.",
        "Show evidence of thumbnails and roughs in your development pages.",
        "Name the medium and say why it suits the subject and audience.",
        "Use the language of viewpoint, scale, sequence and continuity.",
        "Test whether the image still works when the caption is removed.",
      ],
      commonMistakes: [
        "Producing one polished drawing with no evidence of exploration.",
        "Copying a known illustrator's style without transforming it.",
        "Ignoring anatomy and perspective because the style is loose.",
        "Repeating the caption in the image instead of extending it.",
        "Choosing a medium that cannot reproduce at the required size.",
      ],
      recap: [
        "Explain two ways in which an illustration can add meaning to a text. [4]",
        "Describe the purpose of a character sheet. [3]",
        "Explain why an illustrator produces thumbnails before a final drawing. [3]",
        "Describe how an exploded view helps a buyer understand a product. [3]",
        "Evaluate the contribution of medium and mark-making to the mood of an illustration. [4]",
      ],
    },
    {
      title: "Print and Reproduction",
      body: `### Design for the Process

A design is not finished until it can be reproduced.

Each process has its own limits: colours, paper, detail and quantity.

Designing within those limits prevents disappointment at proof stage.

The cheapest process that meets the brief is usually the right one.

### Screen Printing

In **screen printing**, ink is pushed through a mesh stencil with a **squeegee**.

Each colour needs its own screen and its own pass through the press.

The process suits bold flat colour, textiles, posters and short runs.

Slight variations between prints are part of its character.

### Letterpress

**Letterpress** prints from raised metal or wooden type.

The type is inked and pressed into soft paper, leaving a slight impression.

It limits fine detail and photographic images but gives a crafted, tactile result.

Traditional letterpress uses a separate metal sort for each character.

### Offset Lithography

**Offset lithography** transfers ink from a plate to a rubber blanket and then to paper.

It is fast and economical for long runs of books, magazines and packaging.

Process colour uses cyan, magenta, yellow and black in tiny printed dots.

Spot colours can be added where a brand colour must match exactly.

### Digital Printing

Digital presses print directly from a file without plates.

They suit short runs, proofs, personalised mail and variable data.

Cost per copy falls slowly, so long runs remain cheaper by offset.

Digital proofing also lets designers check colour before committing to print.

### Registration and Trapping

**Registration** is the accurate alignment of successive colours.

Registration marks help the printer line up each pass.

**Trapping** slightly overlaps adjacent colours to hide tiny misalignments.

Poor registration produces coloured fringes and blurred edges.

### Colour Matching and Proofs

A **proof** is a test print checked before the full run.

A **spot colour** is a pre-mixed ink, often matched to a brand system.

Screens and printers show colour differently, so a physical proof is essential.

The designer signs off the proof, which then becomes the reference for the job.

### Editions and Signing

An **edition** is a set of prints made from the same screen or plate.

Limited editions are numbered and signed, which gives them value.

An **artist's proof** is a print kept aside from the numbered edition.

Cancelling the plate after printing protects the edition's integrity.

### Preparing Artwork

Artwork needs **bleed**, crop marks and safe margins.

The **dieline** shows where a package will be cut and folded.

Each colour is supplied on a separate layer or separation.

The screen print and the packaging net below show how flat artwork becomes a physical object.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Print Processes Compared",
          bullets: [
            "**Screen printing:** stencil and squeegee; bold colour; short to medium runs.",
            "**Letterpress:** raised type pressed into paper; tactile, limited detail.",
            "**Offset lithography:** plates and blanket; economical long runs.",
            "**Digital:** direct from file; short runs and personalisation.",
            "**Relief printing:** lino and woodcut; carved surface holds the ink.",
            "**Intaglio:** etched or engraved plate; fine detail and deep tone.",
          ],
        },
        {
          subTitle: "Registration and Colour",
          bullets: [
            "**Registration marks:** guides that align each colour pass.",
            "**Trapping:** a slight overlap that hides misalignment.",
            "**Bleed:** artwork extended beyond the trim edge.",
            "**CMYK:** process colour built from four inks.",
            "**Spot colour:** pre-mixed ink for an exact brand match.",
            "**Proof:** the checked test print that authorises the run.",
          ],
        },
        {
          subTitle: "Edition Vocabulary",
          bullets: [
            "**Edition:** all prints taken from one prepared screen or plate.",
            "**Limited edition:** a fixed number, after which no more are made.",
            "**Artist's proof:** a trial or reserved print outside the numbering.",
            "**Numbering:** written as a fraction, such as 12/50.",
            "**Signature:** the artist's pencil signature beneath the print.",
            "**Cancellation:** defacing the plate to prevent further printing.",
          ],
        },
      ],
      examinerTips: [
        "Match the process to the run length, budget and colour needs.",
        "Use the terms bleed, registration, trapping and proof correctly.",
        "Explain why a physical proof matters when colour is critical.",
        "Describe an edition as numbered and signed, not simply copied.",
        "Say how the artwork is prepared differently for each process.",
      ],
      commonMistakes: [
        "Choosing offset for a run of twenty prints.",
        "Forgetting that each screen-printed colour needs its own screen.",
        "Confusing a proof with the final edition.",
        "Designing artwork to the trim edge with no bleed.",
        "Calling every print a limited edition without numbering or signature.",
      ],
      recap: [
        "Describe the screen printing process. [4]",
        "Explain two reasons why offset lithography suits long print runs. [4]",
        "Define the terms bleed and registration. [2]",
        "Explain why a designer checks a physical proof before printing. [3]",
        "Compare digital and screen printing for a set of fifty posters. [4]",
      ],
    },
    {
      title: "Packaging and Advertising",
      body: `### Packaging Has Several Jobs

Packaging protects, contains, transports, informs and sells.

It must survive stacking, moisture and handling before it reaches the shelf.

Legal information includes ingredients, weight, warnings and a barcode.

The front panel sells; the back panel explains.

### Nets and Dielines

A **net** is the flat shape that folds into a three-dimensional container.

A **dieline** marks every cut, fold and glue tab.

The net must allow for board thickness and the overlap of flaps.

A mock-up catches errors before the die is made.

### Construction and Glue Flaps

**Glue flaps** join the sides; **tuck flaps** close the lid.

A crash-lock base assembles without glue on a packing line.

Fold lines are scored so the board bends cleanly without cracking.

Structural design is tested by assembling several empty samples.

### Branding Across Formats

A brand must be recognisable on a box, a bottle, a bag and a screen.

The logo, colour and type stay consistent while the layout adapts.

Small formats require simplified versions of the identity.

A brand guideline document sets the rules for other designers.

### The Advertising Idea

An advertising **campaign** repeats one idea across several media.

The **big idea** should be simple enough to state in a sentence.

Humour, surprise or emotion can make a message memorable.

The idea must still be truthful and relevant to the product.

### Billboards and Viewing Time

A billboard may be seen for only a few seconds at speed.

It needs one image, a short headline and high contrast.

Words must be readable from the road, so type is large and simple.

Designers test the layout at reduced size to imitate distance.

### Ethics and Regulation

Advertising should be honest, decent and socially responsible.

Claims need evidence, and prices must be presented clearly.

Stereotyping and pressure on children are treated seriously by regulators.

A designer can refuse work that conflicts with these standards.

### Sustainability and Afterlife

Packaging waste is a major environmental issue.

Designers reduce material, use recycled board and avoid unnecessary layers.

Mono-material packaging is easier to recycle than mixed laminates.

Repairable and refillable formats extend a product's life.`,
      groups: [
        {
          subTitle: "Packaging Functions",
          bullets: [
            "**Protect:** shield the product from impact, light and moisture.",
            "**Contain:** hold the correct volume and prevent leakage.",
            "**Transport:** stack and ship without collapsing.",
            "**Inform:** give ingredients, weight, warnings and instructions.",
            "**Sell:** attract attention on a crowded shelf.",
            "**Identify:** carry the brand and make it recognisable.",
          ],
        },
        {
          subTitle: "Advertising Media and Formats",
          bullets: [
            "**Billboard:** one image, few words, read at speed.",
            "**Press advert:** more detail, read at leisure.",
            "**Poster:** public space, strong image and short text.",
            "**Social media:** vertical format, sound often off.",
            "**Packaging:** the last message before purchase.",
            "**Point of sale:** competes directly with rivals on the shelf.",
          ],
        },
        {
          subTitle: "Ethical Questions",
          bullets: [
            "**Truthfulness:** can every claim be supported by evidence?",
            "**Clarity:** are price, conditions and risks easy to find?",
            "**Stereotyping:** does the imagery reduce people to a type?",
            "**Children:** is the design exploiting inexperience?",
            "**Harm:** could the message encourage unsafe behaviour?",
            "**Environment:** does the packaging claim match its actual impact?",
          ],
        },
      ],
      examinerTips: [
        "Name the packaging function being discussed: protect, inform or sell.",
        "Explain a net by its folds, tabs and glue areas, not just its outline.",
        "Relate billboard design to viewing time and distance.",
        "Use the terms brand consistency and brand guidelines.",
        "Raise ethics only with a specific example, such as a misleading health claim.",
      ],
      commonMistakes: [
        "Designing a beautiful front panel with no legal information panel.",
        "Drawing a net that cannot fold because tabs and folds conflict.",
        "Using the same detailed layout on a billboard and a leaflet.",
        "Treating branding as a logo alone rather than colour, type and tone.",
        "Making environmental claims that the materials do not support.",
      ],
      recap: [
        "State four functions of packaging. [4]",
        "Explain why a net is tested as a mock-up before production. [3]",
        "Describe how a billboard design differs from a press advertisement. [4]",
        "Explain why brand consistency matters across different formats. [3]",
        "Discuss one ethical responsibility of an advertising designer. [3]",
      ],
    },
  ],
};

export const ART_DESIGN_CHAPTER_4 = chapterFour;
