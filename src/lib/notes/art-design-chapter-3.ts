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
    src: "art3-painting-stages.webp",
    alt: "A canvas shown in three stages from a thin brown underpainting to a dead colour block-in and a glazed finished passage",
    caption: "From dead colour to glazed light",
  },
  {
    src: "art3-palette-mixing.webp",
    alt: "A painter's palette with a few pigments, mixed pools of colour and a brush pulling a clean edge through the paint",
    caption: "A working palette kept deliberately small",
  },
]);

const panelB = artPanel([
  {
    src: "art3-printmaking.webp",
    alt: "A printmaking bench with a carved lino block, ink roller, registration marks and a fresh proof pulled on paper",
    caption: "Ink, pressure and careful registration marks",
  },
  {
    src: "art3-collage.webp",
    alt: "Hands arranging torn printed papers, fabric scraps and painted fragments into a layered collage on board",
    caption: "Layers built from printed and painted scraps",
  },
]);

const panelC = artPanel([
  {
    src: "art3-still-life-painting.webp",
    alt: "A resolved still-life painting of a jug, fruit and folded cloth with clear light, shadow and crisp edges",
    caption: "Edges resolved and the surface held",
  },
  {
    src: "art3-mixed-media.webp",
    alt: "A mixed-media surface combining thick paint, collaged paper, drawn lines and scraped texture in one composition",
    caption: "Texture carried across several different media",
  },
]);

const chapterThree: Chapter = {
  number: 3,
  title: "Painting and Related Media",
  intro: `Painting and related media is one of the areas of study within IGCSE Art & Design.
Candidates may work in painting, drawing, assemblage and collage, printmaking, mixed media, or a combination of these.

The syllabus expects knowledge of materials and techniques, and of genres and styles from the past and the present.
That knowledge must be visible in the work, not only written about.

This chapter begins with the support, because every medium behaves differently on paper, board or canvas.
It then follows the layered logic of oil and acrylic painting, from imprimatura to glaze.

Colour mixing and drawing media come next, since both underpin painting and printmaking.
The final sections cover printmaking, collage, assemblage and mixed media.

The aim is practical control.
A candidate who understands preparation, layering and drying can make deliberate choices rather than accidents.

Use the sections as a reference while working, and return to the recap questions when revising.`,
  subheadings: [
    {
      title: "Supports, Grounds and Preparation",
      body: `### Why the Support Matters

The support is the surface that carries the work.

Its texture, absorbency and stability affect every mark made on it.

A poorly prepared support can ruin an otherwise successful painting.

### Canvas

Canvas is usually cotton or linen, stretched over a wooden frame.

Linen is stronger and smoother; cotton is cheaper and has a more regular weave.

The weave shows through thin paint, so choose the texture deliberately.

### Board

Board is rigid and does not flex like canvas.

Canvas board is cheap and convenient for studies.

Wooden panel gives a smooth, hard surface for detailed work.

### Paper

Paper is described by weight and surface.

Heavy paper buckles less when wet.

Rough, cold-pressed and hot-pressed surfaces suit different media.

### Priming and Gesso

Priming seals the support and controls absorbency.

Gesso is a chalky primer that dries to a matt, slightly absorbent surface.

Several thin coats are better than one thick coat.

### Absorbency

An absorbent ground pulls oil out of paint and makes it matt.

A sealed ground keeps the paint on the surface and preserves its glow.

Test the ground with a thin wash before starting.

### Sizing

Sizing seals porous surfaces and protects the support from oil or water.

Traditional canvas sizing uses rabbit-skin glue; modern acrylic sizing is easier to use.

Apply it thinly and let it dry completely.

### Stretching Canvas

Assemble the stretcher bars so the corners are square.

Staple from the centre outwards, pulling the canvas evenly.

Tap the corner keys in until the surface is taut but not drum-hard.

### Stretching Paper

Soak the paper briefly, then tape it to a board with gummed tape.

Let it dry flat so it pulls tight.

Wet the paper only as much as the weight can handle.

### Toning a Ground

A toned ground removes the glare of white and unifies the colours.

Use a dilute wash of raw umber or acrylic.

Keep it thin so the texture of the support remains visible.

### Choosing a Ground

Oil painting suits a sealed, primed ground.

Watercolour needs paper that absorbs evenly.

Mixed media may need a ground that accepts both water and oil-based materials.

### Preparation for Mixed Media

Test every material on a sample of the prepared support.

Some adhesives and sprays react with oils or acrylics.

Seal the surface between incompatible layers.

### Health and Safety

Ventilate the room when priming or using solvents.

Wear gloves and avoid skin contact with solvents and pigments.

Let solvents and oily rags dry safely or dispose of them correctly.

### Testing the Support

Make a small sample with the same ground and medium.

Check adhesion, absorbency and colour after drying.

Record the result before committing to the final surface.`,
      groups: [
        {
          subTitle: "Supports",
          bullets: [
            "**Canvas:** flexible, woven and available in cotton or linen.",
            "**Canvas board:** cheap, rigid and useful for studies.",
            "**Wood panel:** smooth, hard and stable for detailed work.",
            "**Paper:** light, portable and available in many surfaces.",
            "**Card:** useful for collage and mixed media, but check acidity.",
            "**Fabric:** can be primed and painted, but may need support.",
            "**Found surface:** test adhesion and stability before use.",
          ],
        },
        {
          subTitle: "Grounds",
          bullets: [
            "**Gesso:** chalky primer that dries matt and slightly absorbent.",
            "**Acrylic primer:** flexible, quick-drying and low in odour.",
            "**Oil primer:** traditional, slower to dry and less absorbent.",
            "**Sizing:** seals the support before priming.",
            "**Toned ground:** a thin colour wash that unifies the painting.",
            "**Absorbent ground:** pulls paint in for a matt, stained look.",
            "**Sealed ground:** keeps paint on the surface for brighter colour.",
          ],
        },
        {
          subTitle: "Preparation Steps",
          bullets: [
            "**Check:** confirm the support is clean, dry and flat.",
            "**Seal:** size porous surfaces if the medium requires it.",
            "**Prime:** apply two or three thin coats of gesso.",
            "**Sand:** lightly sand between coats for a smooth surface.",
            "**Tone:** add a thin wash if white is too glaring.",
            "**Test:** try the medium on a sample of the same ground.",
            "**Label:** record the ground and date on the back of the support.",
          ],
        },
      ],
      examinerTips: [
        "Name the support and ground when describing a process, not just the paint.",
        "Explain why a ground is sealed or left absorbent for a particular effect.",
        "Apply primer in thin coats and allow each coat to dry.",
        "Mention testing when a new material or support is introduced.",
        "Link preparation to the final surface: smooth for detail, textured for mark-making.",
      ],
      commonMistakes: [
        "Painting on unprimed canvas and letting the oil rot the fibres.",
        "Applying one thick coat of gesso that never dries evenly.",
        "Stretching canvas unevenly so the frame shows through.",
        "Soaking paper until it tears before taping it down.",
        "Toning a ground so heavily that the texture disappears.",
      ],
      recap: [
        "Explain why a support is primed before painting. [3]",
        "Describe two differences between painting on canvas and on board. [4]",
        "Explain the purpose of sizing. [2]",
        "Describe how to stretch a canvas evenly. [4]",
        "Explain why a toned ground can help a painting. [3]",
      ],
    },
    {
      title: "Oil and Acrylic Layers",
      body: `### Two Flexible Media

Oil and acrylic are both flexible paints, but they behave differently.

Oil dries slowly and allows long blending.

Acrylic dries quickly and locks each layer in place.

### Imprimatura

An imprimatura is a thin, transparent tone applied to the ground.

It kills the white and gives the painting a warm or cool base.

Keep it thin so it does not become a sticky layer.

### Dead Colour

Dead colour is the first opaque layer of local colour.

It establishes the main shapes without detail.

The name comes from its flat, lifeless appearance at this stage.

### Blocking In

Block in the large shapes and the main light and dark pattern.

Use a brush larger than you think you need.

Ignore detail until the structure is convincing.

### Glazing

A glaze is a thin, transparent layer of colour over a dry layer.

Light passes through the glaze and reflects from below, creating depth.

Build glazes slowly; thick glaze becomes muddy.

### Scumbling

Scumbling is a thin, opaque layer dragged over a dry surface.

It lets some of the underlying colour show through.

Use it to soften edges, cool a passage or create atmosphere.

### Impasto

Impasto is thick paint applied with a brush or palette knife.

It catches light and creates a physical surface.

Use it for emphasis rather than across the whole painting.

### Wet-in-Wet

Wet-in-wet means applying paint into wet paint.

It creates soft transitions and broken colour.

Oil allows more time for this than acrylic.

### Drying Time

Oil dries by oxidation and can take days or weeks.

Acrylic dries by evaporation and can be touch-dry in minutes.

Plan the session around the drying speed of the medium.

### Fat over Lean

Fat over lean means putting oilier paint over leaner paint.

Later layers should contain more oil so they remain flexible.

Reversing the rule can cause cracking as the layers dry at different rates.

### Acrylic Mediums

Acrylic mediums change the paint without changing the pigment.

Gloss medium increases transparency; matte medium reduces shine.

Retarders slow drying; flow improvers make the paint more fluid.

### Edges and Transitions

Hard edges define form and draw attention.

Soft edges let a passage recede or blend.

Control the edge with the brush, the medium and the timing.

### The Panel

The panel shows a painting built in stages beside a palette being mixed.

The stages show how a thin underpainting becomes a resolved passage.

The palette shows that control begins before the brush touches the canvas.

### Finishing and Varnishing

Let the painting dry completely before varnishing.

A varnish unifies the surface and protects the paint.

Apply thin coats and follow the manufacturer's instructions.`,
      figure: panelA,
      groups: [
        {
          subTitle: "The Layered Sequence",
          bullets: [
            "**Ground:** sealed and primed support.",
            "**Imprimatura:** a thin transparent tone over the ground.",
            "**Drawing:** a light guide for the main shapes.",
            "**Dead colour:** flat local colour over the whole surface.",
            "**Modelling:** light and dark developed within the shapes.",
            "**Glazing and scumbling:** transparent or broken layers that adjust colour.",
            "**Impasto and accents:** thick paint and sharp details at the end.",
          ],
        },
        {
          subTitle: "Oil versus Acrylic",
          bullets: [
            "**Drying:** oil slow, acrylic fast.",
            "**Blending:** oil stays workable; acrylic sets quickly.",
            "**Layering:** oil needs fat over lean; acrylic can be layered freely.",
            "**Colour:** oil yellows slightly with age; acrylic stays closer to its wet colour.",
            "**Clean-up:** oil needs solvent; acrylic cleans with water.",
            "**Ground:** oil needs a sealed ground; acrylic is more forgiving.",
            "**Finish:** oil has a natural sheen; acrylic can be gloss or matt.",
          ],
        },
        {
          subTitle: "Keeping Layers Sound",
          bullets: [
            "**Thin first:** keep the early layers lean and thin.",
            "**Dry between:** let each layer dry before adding the next.",
            "**Fat over lean:** increase oil content in later layers.",
            "**Do not overwork:** too much brushing disturbs the layer below.",
            "**Test:** try a new medium on a sample first.",
            "**Varnish later:** wait until the paint is fully dry.",
          ],
        },
      ],
      examinerTips: [
        "Describe the sequence of layers, not just the final surface.",
        "Explain why fat over lean matters for the life of the painting.",
        "Match the medium to the time available: acrylic for speed, oil for blending.",
        "Name the technique when you use it: glaze, scumble, impasto or wet-in-wet.",
        "Mention drying time when explaining a practical decision.",
      ],
      commonMistakes: [
        "Applying thick oil paint over a lean layer and causing cracks.",
        "Using acrylic over oil without checking compatibility.",
        "Making a glaze so thick that it becomes an opaque layer.",
        "Overbrushing wet-in-wet paint until the colour turns muddy.",
        "Varnishing before the paint has fully dried.",
      ],
      recap: [
        "Explain the purpose of an imprimatura. [2]",
        "Describe the difference between glazing and scumbling. [4]",
        "Explain why the fat over lean rule matters. [3]",
        "Describe how drying time affects the way oil and acrylic are used. [4]",
        "Explain how impasto can be used to create emphasis. [3]",
      ],
    },
    {
      title: "Colour Mixing and Relationships",
      body: `### Pigment Primaries

Paint mixing uses subtractive colour.

The traditional primaries are red, yellow and blue.

A practical palette often uses a warm and a cool version of each primary.

### Secondary and Tertiary

Two primaries mix to make a secondary: orange, green or violet.

A primary mixed with a neighbouring secondary makes a tertiary.

The exact result depends on the pigments, not only the colour name.

### Complementaries

Complementary colours sit opposite each other on the colour wheel.

Mixed together, they neutralise and create greys and browns.

Placed side by side, they create strong visual contrast.

### Warm and Cool

Warm colours suggest light, heat and proximity.

Cool colours suggest distance, shade and calm.

Temperature is relative, so compare colours rather than labelling them absolutely.

### Limited Palettes

A limited palette uses a small number of pigments.

It creates harmony because every colour shares the same base.

Try a palette of one yellow, one red, one blue and white.

### Tints, Shades and Tones

A tint is a colour mixed with white.

A shade is a colour mixed with black or a dark complement.

A tone is a colour mixed with grey or its complement.

### Optical Mixing

Optical mixing places separate colours side by side.

The eye blends them at a distance.

Pointillism and some printmaking rely on this effect.

### Broken Colour

Broken colour is applied unevenly so several colours show at once.

It creates vibration and movement.

Use a dry brush or a loaded brush with two colours.

### Colour and Mood

Colour affects the emotional reading of a painting.

A warm, high-contrast palette feels energetic.

A cool, close-toned palette feels quiet or melancholy.

### Colour Proportion

The amount of each colour matters as much as the hue.

A small intense accent can dominate a large muted area.

Plan the proportion before painting.

### Colour and Light

Light changes colour temperature and value.

Sunlight is warmer than north light.

Record the light conditions beside a colour study.

### Testing Mixtures

Test a mix on the support, not only on the palette.

Paint dries darker or lighter depending on the medium.

Keep a record of the dry result.

### Greyscale Check

Convert a colour study to greyscale.

If the values merge, the composition will lose structure.

Adjust tone rather than adding more hue.

### From Palette to Painting

Choose the palette before starting the final work.

Limit the number of pigments so the painting stays coherent.

Add a new colour only when it solves a specific problem.`,
      groups: [
        {
          subTitle: "The Colour Wheel in Practice",
          bullets: [
            "**Primary:** red, yellow and blue in traditional pigment theory.",
            "**Secondary:** orange, green and violet, each from two primaries.",
            "**Tertiary:** a primary mixed with a neighbouring secondary.",
            "**Complementary:** opposite colours that neutralise when mixed.",
            "**Analogous:** neighbouring colours that create harmony.",
            "**Triadic:** three evenly spaced colours for a balanced contrast.",
            "**Neutral:** a grey or brown made by mixing complements.",
          ],
        },
        {
          subTitle: "Mixing Strategies",
          bullets: [
            "**Start light:** add dark to light rather than light to dark.",
            "**Mix small:** test a small amount before making a batch.",
            "**Keep a record:** note the pigments and the ratio.",
            "**Use complements:** neutralise a colour without adding black.",
            "**Limit pigments:** fewer tubes make harmony easier.",
            "**Compare wet and dry:** the dry colour is the one that matters.",
          ],
        },
        {
          subTitle: "Colour and Mood",
          bullets: [
            "**Warm palette:** energy, intimacy, heat or celebration.",
            "**Cool palette:** distance, calm, shade or melancholy.",
            "**High contrast:** drama and emphasis.",
            "**Low contrast:** subtlety and atmosphere.",
            "**Accent:** a small intense colour that guides the eye.",
            "**Dominance:** one colour family that holds the painting together.",
          ],
        },
      ],
      examinerTips: [
        "Name the pigments you mixed, not only the resulting colour.",
        "Explain whether a colour is warm or cool relative to its neighbour.",
        "Use complementary contrast deliberately rather than by accident.",
        "Test colour on the actual support and record the dry result.",
        "Check the tonal structure in greyscale before adding more colour.",
      ],
      commonMistakes: [
        "Mixing too many pigments and producing muddy colour.",
        "Adding black to every shadow instead of using complements.",
        "Judging a colour on the palette rather than in the painting.",
        "Using equal amounts of every colour so nothing dominates.",
        "Ignoring how the light changes the observed colour.",
      ],
      recap: [
        "Explain how complementary colours can be used to neutralise a mix. [3]",
        "Describe the difference between a tint, a shade and a tone. [3]",
        "Explain why a limited palette can improve colour harmony. [3]",
        "Describe how optical mixing works. [3]",
        "Explain how colour can create mood in a painting. [4]",
      ],
    },
    {
      title: "Drawing Media and Mark-Making",
      body: `### Drawing as a Medium

Drawing is not only preparation for painting.

It is a medium in its own right, with its own materials and history.

A drawing can be as resolved as a painting.

### Graphite

Graphite ranges from hard to soft.

Hard pencils hold a fine point for detail.

Soft pencils make dark, broad marks and smudge easily.

### Charcoal

Charcoal is burnt wood and produces a soft, dark mark.

Willow charcoal is light and easy to erase.

Compressed charcoal is darker and more difficult to lift.

### Pastel

Pastel is pigment bound into a stick.

Soft pastel blends easily; hard pastel holds an edge.

Pastel paper needs enough tooth to hold the pigment.

### Pen and Ink

Pen and ink produces a permanent, linear mark.

Variation comes from line weight, hatching and dilution.

Ink rewards confidence because it cannot be erased easily.

### Line Weight

Line weight is the thickness of a line.

A heavier line comes forward; a lighter line recedes.

Vary the weight to describe form and space.

### Hatching

Hatching builds tone with parallel lines.

Cross-hatching adds a second direction.

The spacing and angle of the lines control the value.

### Expressive Mark

An expressive mark carries energy and intention.

It can be fast, broad, scratched or repeated.

Expression is not the same as carelessness; the mark should serve the image.

### Mixed Drawing Media

Combine graphite with ink, or charcoal with pastel.

Test the order of application because some media resist others.

Fix the work if the layers are unstable.

### Paper Choice

Smooth paper suits fine detail and pen work.

Rough paper holds charcoal and pastel.

Toned paper provides a middle value and speeds up modelling.

### Fixing and Protecting

Fixative reduces smudging but can darken the image.

Apply it in thin coats from a distance.

Store drawings flat or rolled, never folded.

### Mark and Scale

The size of the support affects the mark.

A large drawing invites the arm, not only the wrist.

Match the tool to the scale of the work.

### Drawing in the Painting

Drawing can remain visible under paint.

It can also be added over a dry painting.

The drawn line can unify passages that paint alone cannot.

### A Mark-Making Study

Divide a page into squares.

Fill each square with a different tool, pressure or speed.

Label the results and use the page as a reference.`,
      groups: [
        {
          subTitle: "The Media",
          bullets: [
            "**Graphite:** precise, erasable and available in many grades.",
            "**Charcoal:** soft, dark and easily blended or lifted.",
            "**Pastel:** pigment-rich, blendable and available in soft or hard sticks.",
            "**Pen and ink:** permanent, linear and capable of fine detail.",
            "**Brush and ink:** fluid, variable and suited to expressive marks.",
            "**Conte crayon:** firm, square and useful for tonal studies.",
            "**Mixed media:** combined for contrast in surface and mark.",
          ],
        },
        {
          subTitle: "Line and Mark",
          bullets: [
            "**Contour:** follows the edge of a form.",
            "**Hatching:** parallel lines that build tone.",
            "**Cross-hatching:** crossed lines that deepen shadow.",
            "**Stippling:** dots that create texture and tone.",
            "**Scumbling:** light, broken marks over a darker layer.",
            "**Sgraffito:** scratching through a layer to reveal the colour below.",
            "**Gesture:** a rapid mark that records movement.",
          ],
        },
        {
          subTitle: "Protecting the Work",
          bullets: [
            "**Fixative:** apply thinly and allow it to dry.",
            "**Glassine:** place it over drawings before stacking.",
            "**Flat storage:** keep works flat or rolled, never folded.",
            "**Hands:** avoid touching the surface, especially with pastel.",
            "**Light:** keep drawings away from direct sunlight.",
            "**Label:** record the medium on the back of the sheet.",
          ],
        },
      ],
      examinerTips: [
        "Match the drawing medium to the intention: precise, expressive or tonal.",
        "Vary line weight to show near and far edges.",
        "Use the side of a medium as well as the point.",
        "Test combinations of media before applying them to a final drawing.",
        "Protect drawings with fixative or glassine before storing them.",
      ],
      commonMistakes: [
        "Using one line weight for the whole drawing.",
        "Overworking charcoal until the paper loses its tooth.",
        "Applying fixative too close and darkening the image.",
        "Combining media without testing whether they adhere.",
        "Treating drawing as only a preliminary to painting.",
      ],
      recap: [
        "Describe two differences between graphite and charcoal. [4]",
        "Explain how line weight can create a sense of space. [3]",
        "Describe how hatching and cross-hatching build tone. [3]",
        "Explain why paper choice matters for pastel. [3]",
        "Describe how you would protect a finished charcoal drawing. [3]",
      ],
    },
    {
      title: "Printmaking",
      body: `### What Printmaking Offers

Printmaking builds an image through a matrix, not by direct painting.

The matrix may be carved, scratched or drawn.

The result can be repeated, which allows proofing and editions.

### Relief: Linocut

Linocut uses a sheet of lino as the matrix.

The uncarved surface takes the ink; the cut areas stay white.

It is direct, bold and suitable for graphic shapes.

### Relief: Woodcut

Woodcut uses a wooden block with a visible grain.

The grain can become part of the image.

Wood is harder than lino and holds finer detail.

### Cutting Tools and Safety

Keep blades sharp and cut away from the body.

Clamp the block so both hands are free.

Store tools with the blade covered.

### Intaglio: Drypoint

Drypoint scratches a line into a metal plate.

The raised burr holds ink and prints as a soft, rich line.

The burr wears down, so early prints are darker.

### Intaglio: Etching

Etching covers the plate with a resist, then draws through it.

The plate is bitten in acid and the lines hold ink.

It allows fine, permanent line work.

### Monotype

Monotype paints directly onto a smooth plate and prints once.

It produces a single image, not an edition.

It is useful for expressive colour and texture.

### Registration

Registration aligns the paper with the block or plate.

Mark the paper and the press bed so each layer fits.

Poor registration produces a blurred or shifted image.

### Editions

An edition is a set of prints from the same matrix.

Each print is numbered and signed.

A print outside the edition is called an artist's proof.

### Proofing

A proof is a test print made before the final edition.

It shows whether the block needs more cutting or the ink needs adjusting.

Keep the proofs as evidence of development.

### Paper and Ink

Printing paper must be strong enough to handle moisture and pressure.

Ink should be rolled or dabbed evenly.

Too much ink fills the cuts and loses detail.

### Signing and Numbering

Sign below the image in pencil.

Write the edition number, title and signature.

Keep a consistent convention across the portfolio.

### The Panel

The panel pairs a printing bench with a collage being assembled.

Both depend on layering, alignment and the decision to stop.

The print proof shows the same discipline as a resolved painting.

### Printmaking and the Portfolio

Keep proofs, rejected prints and the final print.

The sequence shows the development of the image.

A single perfect print with no evidence of process is weaker than a documented series.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Relief and Intaglio",
          bullets: [
            "**Linocut:** relief print from a carved lino block.",
            "**Woodcut:** relief print from a wooden block with visible grain.",
            "**Drypoint:** intaglio line scratched into a plate, with a soft burr.",
            "**Etching:** intaglio line bitten into a plate through a resist.",
            "**Monotype:** a single print painted directly onto a plate.",
            "**Collagraph:** relief or intaglio print from a built-up collage plate.",
            "**Screenprint:** ink pushed through a stencil on a mesh screen.",
          ],
        },
        {
          subTitle: "Registration and Editions",
          bullets: [
            "**Register:** align paper, block and press bed with marks.",
            "**Proof:** test the block before printing the edition.",
            "**Edition:** a numbered set of prints from one matrix.",
            "**Artist's proof:** a print outside the numbered edition.",
            "**Numbering:** write the print number and the edition size, such as 3/12.",
            "**Signature:** sign and title the print in pencil below the image.",
          ],
        },
        {
          subTitle: "Studio Safety",
          bullets: [
            "**Cut:** away from the body and keep fingers behind the blade.",
            "**Clamp:** secure the block before carving.",
            "**Ventilate:** use solvents and inks in a well-ventilated space.",
            "**Gloves:** protect skin from inks and cleaning fluids.",
            "**Acid:** follow the teacher's instructions for etching baths.",
            "**Waste:** dispose of ink, solvent and sharp blades correctly.",
          ],
        },
      ],
      examinerTips: [
        "Describe the matrix and the process, not only the finished print.",
        "Explain how registration affects a multi-layer print.",
        "Keep proofs and rejected prints as evidence of development.",
        "Name the printmaking family: relief, intaglio, monotype or screen.",
        "Mention safety when describing carving, solvents or acid.",
      ],
      commonMistakes: [
        "Inking the block too heavily and filling the cut areas.",
        "Printing without registration marks and losing alignment.",
        "Discarding proofs that show useful decisions.",
        "Calling a monotype an edition when each print is unique.",
        "Carving towards the hand instead of away from it.",
      ],
      recap: [
        "Explain the difference between relief and intaglio printing. [4]",
        "Describe the process of making a linocut. [4]",
        "Explain why registration matters in printmaking. [2]",
        "Describe what is meant by an edition and an artist's proof. [3]",
        "Outline three safety rules for cutting a block. [3]",
      ],
    },
    {
      title: "Collage, Assemblage and Mixed Media",
      body: `### What Collage Can Do

Collage builds an image from separate pieces.

It can combine printed, painted, drawn and found materials.

The joins are part of the image, not a failure to hide.

### Found and Recycled Materials

Use paper, card, fabric, packaging and photographs.

Check that the material is clean, dry and stable.

Record the source if it matters to the meaning.

### Layering

Build from large shapes to small details.

Let some layers remain visible.

A collage that hides every join loses the history of its making.

### Adhesive

Choose an adhesive that suits the materials.

PVA is strong but can cockle thin paper.

Spray adhesive is convenient but needs ventilation.

### Texture

Collage creates actual texture, not an illusion.

Torn edges, corrugation and fabric weave catch the light.

Use texture to support the subject rather than decorate it.

### Composition Across Media

Unify the work with a repeated colour, shape or direction.

A strong underlying drawing keeps the pieces together.

Check the composition in greyscale as well as in colour.

### Assemblage

Assemblage is three-dimensional collage.

It combines found objects into a constructed form.

Consider weight, balance and how the object will be displayed.

### Mixed Media

Mixed media combines two or more materials in one work.

The materials should be compatible and stable.

Test adhesion and drying before committing to the final surface.

### Combining Paint and Print

Print can provide pattern or texture beneath paint.

Paint can unify printed passages that are too busy.

Work from thin to thick and from dry to wet.

### Edges and Integration

A hard collage edge can be a deliberate contrast.

A painted edge can soften the transition between materials.

Decide which edges should speak and which should disappear.

### Conservation

Some papers and adhesives become brittle or acidic.

Use archival materials where the work will be kept.

Photograph the work before it is framed or stored.

### The Panel

The panel sets a resolved still-life painting beside a mixed-media surface.

The painting shows controlled edges and light.

The mixed-media surface shows texture built from several materials.

Both are resolved, but they solve the problem differently.

### Documenting Process

Photograph the work at each stage.

Keep the rejected pieces and the tests.

The process is evidence for AO2 and AO3.

### A Resolved Mixed-Media Outcome

The final work should feel intentional, not accumulated.

Every material should have a job.

Remove anything that does not contribute to the image.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Materials and Adhesion",
          bullets: [
            "**Paper:** torn, cut, printed or painted.",
            "**Fabric:** adds weave, softness and colour.",
            "**Card:** useful for structure and shallow relief.",
            "**Found object:** adds history and three-dimensional form.",
            "**PVA:** strong general adhesive, used thinly.",
            "**Spray adhesive:** quick, but requires ventilation.",
            "**Test:** check that the adhesive does not stain or cockle.",
          ],
        },
        {
          subTitle: "Building Layers",
          bullets: [
            "**Base:** establish the support and the large shapes.",
            "**Middle:** add texture, pattern and contrasting materials.",
            "**Detail:** place small accents and drawn lines.",
            "**Reveal:** leave some earlier layers visible.",
            "**Unify:** repeat a colour, shape or direction.",
            "**Edit:** remove anything that weakens the composition.",
          ],
        },
        {
          subTitle: "Composition Across Media",
          bullets: [
            "**Focal point:** one area of strongest contrast or detail.",
            "**Path:** a repeated edge or colour that leads the eye.",
            "**Balance:** distribute visual weight across the surface.",
            "**Scale:** vary the size of pieces to avoid monotony.",
            "**Quiet area:** leave space for the eye to rest.",
            "**Coherence:** make every material serve the same idea.",
          ],
        },
      ],
      examinerTips: [
        "Explain why each material is present, not just what it is.",
        "Show the joins and layers rather than hiding the construction.",
        "Test adhesives on scrap before applying them to the final work.",
        "Unify mixed media with a repeated colour, shape or drawing.",
        "Document the stages so the process is visible in the portfolio.",
      ],
      commonMistakes: [
        "Adding materials without a compositional reason.",
        "Using too much adhesive so the surface becomes shiny and cockled.",
        "Hiding every join and losing the character of collage.",
        "Combining materials that fall apart or react with each other.",
        "Treating assemblage as a collection of objects rather than a composition.",
      ],
      recap: [
        "Explain the difference between collage and assemblage. [3]",
        "Describe how you would choose an adhesive for a mixed-media work. [3]",
        "Explain why layering should remain visible in a collage. [3]",
        "Describe how to unify a mixed-media composition. [4]",
        "Explain why process photographs are useful evidence. [3]",
      ],
    },
  ],
};

export const ART_DESIGN_CHAPTER_3 = chapterThree;
