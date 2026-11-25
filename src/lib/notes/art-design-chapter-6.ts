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
    src: "art6-screen-print-fabric.webp",
    alt: "A length of cotton fabric being screen printed with a repeating motif in two colours",
    caption: "Repeat printed by hand",
  },
  {
    src: "art6-batik.webp",
    alt: "A batik cloth with wax-drawn lines and cracked dye texture in indigo and rust",
    caption: "Wax holds back the dye",
  },
]);

const panelB = artPanel([
  {
    src: "art6-croquis.webp",
    alt: "A fashion croquis with an elongated figure and a garment sketched in marker and pencil",
    caption: "Nine heads tall",
  },
  {
    src: "art6-toile.webp",
    alt: "A calico toile pinned on a dress form with fitting marks in coloured tape",
    caption: "Calico before cashmere",
  },
]);

const panelC = artPanel([
  {
    src: "art6-loom.webp",
    alt: "A table loom with a partly woven length of patterned cloth and bobbins of coloured yarn",
    caption: "Warp, weft, structure",
  },
  {
    src: "art6-embroidery.webp",
    alt: "An embroidery hoop holding linen with satin stitch, chain stitch and French knots in progress",
    caption: "Stitch builds surface",
  },
]);

const chapterSix: Chapter = {
  number: 6,
  title: "Textiles and Fashion",
  intro: `Textiles begin with a fibre, become a fabric, and end as a garment, furnishing or artwork.\n\nEvery stage offers a design decision: which fibre, which structure, which colour, which cut.\n\nFashion adds the body and the occasion, so cloth must move, drape and wear well.\n\nSurface pattern, dyeing, embroidery and construction are practical skills, but each carries cultural history.\n\nThis chapter follows the journey from fibre to finished piece and names the processes examiners expect.`,
  subheadings: [
    {
      title: "Fibres, Fabrics and Properties",
      body: `### From Fibre to Fabric

A **fibre** is a fine thread from which yarn is spun.

**Staple** fibres are short and twisted together; **filament** fibres are long and continuous.

Yarn is woven, knitted or bonded into fabric.

Each stage changes the properties of the final cloth.

### Natural Fibres

**Cotton** comes from the seed pod of the cotton plant and is soft, absorbent and cool.

**Linen** comes from flax and is strong and crisp but creases easily.

**Wool** comes from sheep, traps warmth and felts when washed badly.

**Silk** is a continuous filament from the silkworm and is strong, lustrous and delicate.

### Synthetic and Regenerated Fibres

**Polyester** is strong, quick-drying and non-absorbent, and it is made from oil.

**Nylon** is very strong and abrasion-resistant, often used in outerwear.

**Acrylic** imitates wool, is warm and cheap, but pills with wear.

**Elastane** stretches and recovers, so it is blended for fit.

**Viscose** is regenerated from wood pulp and drapes softly like silk.

### Weave Structures

In weaving, the **warp** runs lengthwise and the **weft** crosses it.

**Plain weave** passes one thread over and one under, giving a firm, stable cloth.

**Twill weave** produces a diagonal rib and is hard-wearing, as in denim.

**Satin weave** floats threads over several others, creating a smooth, lustrous face.

### Knitted Structures

Knitting interlocks loops of yarn rather than crossing threads.

**Weft knitting** makes jersey, which stretches across the width.

**Rib knit** alternates knit and purl for elasticity at cuffs and necklines.

Knitted fabric drapes closely and resists creasing but can ladder.

### Drape and Handle

**Drape** describes how a fabric hangs under its own weight.

**Handle** describes how it feels: soft, crisp, stiff or slippery.

A stiff fabric holds a sculptural shape; a fluid fabric follows the body.

Designers test drape on a dress stand before choosing a pattern.

### Strength, Absorbency and Care

Fibre and structure together decide performance.

Cotton absorbs moisture and washes hot; polyester resists water but holds odour.

Wool shrinks with heat and agitation unless treated.

Care labels record the safe washing, drying and ironing conditions.

### Sustainability and Fibre Choice

Cotton uses large amounts of water and pesticide unless grown organically.

Synthetics shed microplastics during washing and persist in the environment.

Recycled fibres, durable construction and repair reduce impact.

The greenest garment is often the one already owned and worn.`,
      groups: [
        {
          subTitle: "Natural Fibres",
          bullets: [
            "**Cotton:** soft, absorbent, cool and easy to dye.",
            "**Linen:** strong, crisp and breathable, but creases.",
            "**Wool:** warm, elastic and feltable; shrinks with heat.",
            "**Silk:** lustrous, strong and drapey; delicate in sunlight.",
            "**Bamboo:** soft and absorbent, often regenerated rather than raw.",
            "**Hemp:** strong and durable with a coarse handle.",
          ],
        },
        {
          subTitle: "Synthetic and Regenerated Fibres",
          bullets: [
            "**Polyester:** strong, quick-drying, non-absorbent and oil-based.",
            "**Nylon:** very strong and abrasion-resistant.",
            "**Acrylic:** wool-like, warm, cheap and prone to pilling.",
            "**Elastane:** high stretch with good recovery.",
            "**Viscose:** regenerated cellulose with a soft drape.",
            "**Recycled polyester:** made from bottles or textile waste.",
          ],
        },
        {
          subTitle: "Performance Properties",
          bullets: [
            "**Absorbency:** how readily a fabric takes up moisture.",
            "**Drape:** how a cloth hangs and folds.",
            "**Strength:** resistance to tearing and abrasion.",
            "**Elasticity:** ability to stretch and return.",
            "**Warmth:** trapped air within the structure.",
            "**Crease resistance:** recovery after folding.",
          ],
        },
      ],
      examinerTips: [
        "Name the fibre and the fabric structure separately.",
        "Match a property to an end use, such as absorbent cotton for towelling.",
        "Use the terms warp, weft, staple and filament correctly.",
        "Explain drape by describing how the cloth hangs, not just how it feels.",
        "Discuss sustainability across fibre, processing, use and disposal.",
      ],
      commonMistakes: [
        "Calling cotton a synthetic fibre because it is manufactured into cloth.",
        "Confusing weave with knit.",
        "Saying satin is a fibre rather than a weave structure.",
        "Ignoring care requirements when choosing a fibre.",
        "Treating all natural fibres as automatically sustainable.",
      ],
      recap: [
        "Distinguish between staple and filament fibres. [2]",
        "Describe plain, twill and satin weaves. [4]",
        "Explain how knitted fabric differs from woven fabric. [3]",
        "Explain why drape matters when designing a dress. [3]",
        "Evaluate the sustainability of cotton and polyester for a school shirt. [4]",
      ],
    },
    {
      title: "Surface Pattern and Repeat",
      body: `### The Motif Is the Unit

A **motif** is the single unit of design that is repeated.

It may be printed, embroidered, woven or dyed.

The motif must work alone and in combination with its neighbours.

Good motifs leave enough space to prevent a muddy repeat.

### Block Repeat

A **block repeat** places the motif in line horizontally and vertically.

It is the simplest system and suits geometric and floral designs.

The repeat unit must tile seamlessly at every edge.

Straight repeats can look rigid unless the motif has movement.

### Half-Drop Repeat

A **half-drop repeat** offsets alternate columns by half the motif height.

It breaks the grid and creates a softer, more natural flow.

The layout hides the join between columns more successfully than a block repeat.

Wallpaper and furnishing fabrics often use half-drop.

### Mirror Repeat

A **mirror repeat** reflects the motif across a vertical or horizontal axis.

It creates symmetry and a formal, kaleidoscopic effect.

Mirrored motifs can look mechanical if used without variation.

The reflection line must be planned so the design still tiles.

### Brick and Tossed Layouts

A **brick repeat** offsets every row by half a motif, like brickwork.

A **tossed repeat** scatters motifs at varied angles and positions.

Brick layouts feel rhythmic; tossed layouts feel casual and organic.

Both still need a repeating tile, however random they appear.

### Colourways

A **colourway** is one colour version of the same design.

A print may be produced in three or four colourways for different markets.

Each colourway changes the mood without redrawing the motif.

Colourways are tested together so the collection still reads as a family.

### Scale and Context

The same motif can appear small on a shirt and large on a curtain.

Scale must suit the object, the viewing distance and the cutting area.

A large repeat wastes fabric on small pattern pieces.

A tiny motif can disappear when the garment is seen from a distance.

### Sampling and Swatches

A **strike-off** is a test print of a design on the final cloth.

It reveals registration, colour and coverage problems before bulk production.

**Swatches** are small samples collected for colour and texture reference.

Samples are labelled with fibre, dye, process and date.

### Pattern in Context

Pattern must be judged on the cloth, at the intended scale, in the intended light.

A design that looks crisp on screen can blur on a textured weave.

The screen-printed fabric and the batik below show two very different routes to surface pattern.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Repeat Systems",
          bullets: [
            "**Block:** motif repeats in line vertically and horizontally.",
            "**Half-drop:** alternate columns drop by half a motif.",
            "**Mirror:** motif reflects across an axis.",
            "**Brick:** each row offsets by half a motif.",
            "**Tossed:** motifs scatter at varied angles.",
            "**Border:** a narrow repeat edging a larger design.",
          ],
        },
        {
          subTitle: "Colourway Planning",
          bullets: [
            "**Palette:** a limited set of colours shared by the design.",
            "**Ground:** the background colour that carries the motif.",
            "**Accent:** a small area of contrast to lift the pattern.",
            "**Market:** colour chosen for season, culture and customer.",
            "**Consistency:** colourways that still read as one family.",
            "**Testing:** samples checked under daylight and shop light.",
          ],
        },
        {
          subTitle: "Sampling Checks",
          bullets: [
            "**Registration:** colours sit exactly where intended.",
            "**Coverage:** the ground is evenly printed.",
            "**Hand:** the print does not stiffen the cloth.",
            "**Colourfastness:** the sample survives washing and light.",
            "**Scale:** the motif suits the final object.",
            "**Repeat:** the tile joins without a visible seam.",
          ],
        },
      ],
      examinerTips: [
        "Name the repeat system and describe how the motif is offset.",
        "Show the repeat tile, not only a single motif.",
        "Explain scale through the final object and viewing distance.",
        "Use the term colourway for a recoloured version of one design.",
        "Refer to a strike-off as the test print on final cloth.",
      ],
      commonMistakes: [
        "Drawing one motif and calling it a repeat.",
        "Making a repeat that does not tile at the edges.",
        "Using the same scale for a scarf and a curtain.",
        "Treating colourways as different designs.",
        "Judging colour on a screen rather than a printed swatch.",
      ],
      recap: [
        "Define the terms motif and repeat. [2]",
        "Describe how a half-drop repeat differs from a block repeat. [3]",
        "Explain why a mirror repeat can look formal. [2]",
        "Explain how scale should be chosen for a printed curtain fabric. [3]",
        "Evaluate the importance of a strike-off before bulk printing. [4]",
      ],
    },
    {
      title: "Dyeing and Printing",
      body: `### Colour on Cloth

Dye penetrates the fibre; print sits on the surface in a pattern.

Dyeing gives an even ground, while printing adds motif and detail.

The fibre decides which dye will work: cotton takes reactive dye, wool takes acid dye.

Colour must be fixed so it survives washing, light and rubbing.

### Tie-Dye

**Tie-dye** binds, folds or clamps cloth before dyeing.

The bound areas resist the dye and stay pale.

**Shibori** uses stitching, pleating and clamping for controlled patterns.

Tight binding gives crisp circles; loose folding gives soft, irregular marks.

### Batik

**Batik** uses melted wax as a resist.

The wax is drawn with a **tjanting** tool or stamped with a copper **cap**.

Cracked wax lets dye seep through and creates the characteristic veined lines.

The wax is removed by boiling or ironing between layers of paper.

### Screen Printing on Fabric

A **screen** carries a stencil on a fine mesh.

**Photographic emulsion** hardens where light strikes it, so the design is developed like a photograph.

**Squeegee** pressure pushes ink through the open mesh.

Each colour needs a separate screen and a precise registration.

### Block Printing

**Block printing** presses a carved wooden or lino block onto cloth.

The block is inked evenly on a padded surface.

A firm, even press gives a clean impression; rocking gives a patchy one.

Repeating by eye is slow, so printers use registration marks or a guide rail.

### Fixing the Dye

**Fixation** bonds the dye to the fibre so it does not wash out.

Reactive dyes are fixed with alkali; acid dyes need heat and acid.

**Steaming** sets many printed colours and improves penetration.

**Mordants** help some natural dyes bond to the fibre.

### Registration and Repeat

**Registration** aligns each colour and each repeat precisely.

Printed repeats need a registration mark and a consistent screen position.

On fabric, the repeat must also allow for stretch and shrinkage.

A test length is printed before the full run.

### Colourfastness

**Colourfastness** is the resistance of a colour to fading or bleeding.

It is tested against washing, light, rubbing and perspiration.

Poor fastness shows as fading, staining or colour transfer onto other cloth.

Results are recorded before a production run is approved.

### Health and Environment

Dyes and auxiliaries can be harmful in powder or concentrated form.

Gloves, ventilation and dust masks reduce exposure.

Wax must not overheat, because it can ignite.

Spent dye baths need responsible disposal, not pouring into drains.`,
      groups: [
        {
          subTitle: "Resist Methods",
          bullets: [
            "**Tie-dye:** binding and folding before dyeing.",
            "**Shibori:** stitch, pleat and clamp for controlled resist.",
            "**Batik:** wax drawn or stamped onto cloth.",
            "**Wax crackle:** deliberate cracking for veined lines.",
            "**Discharge:** removing colour from a dyed cloth.",
            "**Resist paste:** printed paste that blocks dye.",
          ],
        },
        {
          subTitle: "Printing Methods",
          bullets: [
            "**Screen printing:** mesh stencil and squeegee.",
            "**Block printing:** carved block pressed by hand.",
            "**Digital print:** direct inkjet onto fabric.",
            "**Rotary screen:** continuous print on a roller.",
            "**Transfer print:** design transferred with heat.",
            "**Stencil:** cut mask used with brush or sponge.",
          ],
        },
        {
          subTitle: "Testing Colourfastness",
          bullets: [
            "**Wash:** colour loss or staining after washing.",
            "**Light:** fading after exposure to daylight.",
            "**Rub:** colour transfer under dry or wet friction.",
            "**Perspiration:** staining caused by sweat.",
            "**Water:** bleeding when soaked.",
            "**Record:** result, test condition and date.",
          ],
        },
      ],
      examinerTips: [
        "Distinguish dyeing, which penetrates, from printing, which sits on the surface.",
        "Match the dye class to the fibre.",
        "Describe batik as a wax resist, not a printed pattern.",
        "Explain registration as alignment across colour and repeat.",
        "Name the colourfastness test and what it measures.",
      ],
      commonMistakes: [
        "Saying batik is painted with dye rather than resisted with wax.",
        "Using one screen for a multicolour print.",
        "Forgetting to fix the dye before washing the sample.",
        "Testing colour only by eye under indoor light.",
        "Heating wax without a thermometer or supervision.",
      ],
      recap: [
        "Explain how wax resists dye in batik. [3]",
        "Describe the screen printing process for fabric. [4]",
        "Explain why a dye must be fixed. [2]",
        "State three colourfastness tests and what each measures. [3]",
        "Compare tie-dye and block printing as ways of creating pattern. [4]",
      ],
    },
    {
      title: "Fashion Design and Illustration",
      body: `### The Fashion Figure

Fashion illustration exaggerates the figure to show clothes clearly.

The figure is elongated, with a small head and long legs.

A **croquis** is a repeated outline used as a base for design sketches.

It speeds up drawing and keeps a collection consistent.

### Croquis Proportions

A fashion figure is usually nine or ten heads tall.

The waist sits high, the legs are long and the neck is slender.

The spine curves in an S, giving the pose movement.

Feet are drawn as wedges or points, not detailed anatomy.

### Drawing the Garment

The garment must sit on the body convincingly.

Seams, darts and hems follow the form beneath them.

Folds appear where fabric is compressed, such as the elbow or hip.

The silhouette should read clearly even before details are added.

### Technical Flats

A **technical flat** shows the garment laid flat, without the body.

It records seams, topstitching, fastenings, pockets and proportions.

It is drawn to scale and labelled with measurements and materials.

Pattern cutters and manufacturers work from flats, not from illustrations.

### Fabric Rendering

Rendering suggests weight, texture and shine.

Soft pencil suits wool and cotton; marker suits smooth, graphic fabric.

Highlights show satin and leather; transparency shows organza.

Pattern on a garment should follow the folds, not sit flat across them.

### Collection Coherence

A **collection** shares palette, silhouette, fabric and mood.

Each look should be distinct but recognisably part of the group.

A mood board and colour palette hold the direction together.

Too much variety reads as several unrelated designers.

### Audience and Occasion

The customer, the season and the occasion shape every decision.

Daywear needs movement and durability; eveningwear can use delicate fabric.

Price affects fabric, construction and the number of pieces.

Designers research trends without copying them.

### From Illustration to Toile

An illustration sells an idea; a toile proves that the idea can be made.

The drawing must be interpreted into pattern pieces and test cloth.

Fit, proportion and movement are judged on the body.

The croquis and the calico toile below show the idea and its three-dimensional test.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Illustration Conventions",
          bullets: [
            "**Croquis:** elongated base figure for design drawing.",
            "**Nine to ten heads:** the standard fashion proportion.",
            "**Movement line:** the S-curve through the pose.",
            "**Silhouette:** the outer shape of the garment.",
            "**Fabric rendering:** marks that suggest weight and shine.",
            "**Presentation sheet:** figures arranged with fabric and annotations.",
          ],
        },
        {
          subTitle: "What a Technical Flat Records",
          bullets: [
            "**Outline:** accurate shape and proportion.",
            "**Seams:** construction lines and topstitching.",
            "**Fastenings:** zip, button, tie or hook and eye.",
            "**Details:** pockets, pleats, darts and trims.",
            "**Measurements:** lengths and widths at key points.",
            "**Materials:** fabric, lining and interlining.",
          ],
        },
        {
          subTitle: "Collection Planning",
          bullets: [
            "**Customer:** age, budget, lifestyle and body range.",
            "**Occasion:** day, work, evening or performance.",
            "**Season:** fabric weight, colour and layering.",
            "**Palette:** a small set of related colours.",
            "**Silhouette:** recurring shapes across the looks.",
            "**Coherence:** variety held together by shared decisions.",
          ],
        },
      ],
      examinerTips: [
        "Use the croquis deliberately, not as a traced mannequin.",
        "Show the garment sitting on the body with believable folds.",
        "Include at least one technical flat with labels.",
        "Explain a collection through its shared palette and silhouette.",
        "Link the illustration to the toile and the final construction.",
      ],
      commonMistakes: [
        "Drawing a realistic figure instead of an elongated croquis.",
        "Letting the garment float beside the body rather than on it.",
        "Presenting illustrations with no technical flats.",
        "Using many unrelated colours and calling it a collection.",
        "Rendering shiny fabric without any highlight or shadow.",
      ],
      recap: [
        "Describe the proportions of a fashion croquis. [3]",
        "Explain the purpose of a technical flat. [3]",
        "Describe how to render a satin fabric in an illustration. [3]",
        "Explain two ways in which a collection can look coherent. [4]",
        "Evaluate the role of the toile after the design illustration. [3]",
      ],
    },
    {
      title: "Construction and Toiles",
      body: `### Pattern Pieces

A **pattern** is a set of shapes that become a garment when cut in fabric and sewn together.

Each piece is labelled with its name, size and cutting instructions.

Notches help match seams accurately during construction.

A pattern is a plan, so accuracy at this stage saves time later.

### Grainline

The **grainline** follows the warp threads, parallel to the selvedge.

A pattern piece carries a grainline arrow that must align with the fabric grain.

Cutting off grain makes the garment twist and hang badly.

**Bias** runs at 45 degrees to the grain and gives stretch and drape.

### Seam Allowance

A **seam allowance** is the extra fabric beyond the stitching line.

It is usually 1.5 cm on main seams and narrower on curves.

The allowance must be added to every pattern piece before cutting.

Hems need a deeper allowance, often 3 to 5 cm.

### Cutting and Marking

Fabric is laid flat, with the pattern arranged to save cloth.

**Nap** and one-way prints must be cut in the same direction.

Pins sit inside the seam allowance so they do not mark the cloth.

Markings are transferred with tailor's chalk, thread or a tracing wheel.

### The Toile

A **toile** is a test garment made in calico or another cheap cloth.

It checks fit, proportion and construction before the final fabric is cut.

The toile is machine basted so it can be adjusted easily.

Notes are written directly on the toile or recorded in photographs.

### Fitting

Fitting checks balance, ease and line.

Drag lines point to tight areas; pooling shows excess length.

The toile is adjusted on the body or dress stand, then the pattern is corrected.

A garment that fits well allows movement as well as looking right.

### Seams and Finishes

A **plain seam** joins two pieces and is pressed open.

A **French seam** encloses the raw edges and suits fine fabric.

An **overlock** stitch prevents fraying on stretch and woven cloth.

A **flat-fell seam** is strong and neat, as on denim.

### Fastenings

Fastenings must suit the garment and the user.

A zip gives a secure closure; buttons allow adjustment; hooks and eyes close discreetly.

Fastenings are positioned and tested on the toile where possible.

A beautiful garment with a failing fastening is a failed garment.

### Machine Safety

The needle, blade and moving parts demand attention.

Hair is tied back and fingers kept away from the needle.

The machine is threaded and oiled correctly before use.

The foot is lifted, the presser foot down and the speed controlled.`,
      groups: [
        {
          subTitle: "Pattern Vocabulary",
          bullets: [
            "**Grainline:** arrow showing alignment with the warp.",
            "**Selvedge:** the firm woven edge of the cloth.",
            "**Bias:** 45 degrees to the grain, with natural stretch.",
            "**Notch:** a mark that matches seam edges.",
            "**Seam allowance:** extra fabric beyond the stitch line.",
            "**Cut on fold:** a piece placed on folded fabric for symmetry.",
          ],
        },
        {
          subTitle: "Seams and Finishes",
          bullets: [
            "**Plain seam:** simple join, pressed open.",
            "**French seam:** raw edges enclosed inside.",
            "**Overlock:** stitched edge that prevents fraying.",
            "**Flat-fell:** strong folded seam with visible topstitching.",
            "**Bias binding:** strip that encloses a raw edge.",
            "**Hem:** folded and stitched lower edge.",
          ],
        },
        {
          subTitle: "Fitting Checks",
          bullets: [
            "**Balance:** the garment hangs level front and back.",
            "**Ease:** enough room to move and breathe.",
            "**Drag lines:** diagonal wrinkles pointing to tightness.",
            "**Gaping:** openings that stand away from the body.",
            "**Length:** correct proportion for the design.",
            "**Comfort:** the wearer can sit, reach and walk.",
          ],
        },
      ],
      examinerTips: [
        "State the grainline and seam allowance for every pattern piece.",
        "Explain the toile as a test of fit, not as the final garment.",
        "Name a seam and the fabric it suits.",
        "Describe fitting evidence using drag lines and ease.",
        "Treat machine safety as a sequence of checks.",
      ],
      commonMistakes: [
        "Cutting pattern pieces off grain and blaming the fabric for twisting.",
        "Forgetting to add seam allowances before cutting.",
        "Skipping the toile and cutting expensive fabric directly.",
        "Choosing a delicate seam finish for a heavy, fraying cloth.",
        "Sewing over pins or holding fingers close to the needle.",
      ],
      recap: [
        "Define grainline and bias. [2]",
        "Explain why seam allowances must be added to a pattern. [2]",
        "Describe the purpose of a toile. [3]",
        "Explain how drag lines help during a fitting. [3]",
        "Compare a French seam and an overlock finish for a fine blouse. [4]",
      ],
    },
    {
      title: "Embroidery and Embellishment",
      body: `### Stitch as Mark-Making

Embroidery builds pattern and texture with thread.

A stitch can draw a line, fill a shape or create a raised mark.

The fabric, thread and stitch together decide the surface.

Hand stitch is slower than print but carries visible human touch.

### Running Stitch

**Running stitch** passes in and out of the cloth at regular intervals.

It creates dotted lines, gathers and the basis of **kantha** quilting.

Even spacing matters more than tiny stitches.

Layers can be quilted with long running stitches for texture.

### Satin Stitch

**Satin stitch** lays parallel threads closely together to fill a shape.

It gives a smooth, glossy surface and a crisp edge.

Long floats can snag, so large areas are supported or worked in sections.

The direction of the stitches should follow the form.

### Chain Stitch

**Chain stitch** loops the thread back into itself, making a linked line.

It is strong, flexible and good for outlines and curves.

A tambour hook can work chain stitch quickly on stretched fabric.

Chain stitch appears in traditional embroidery across many cultures.

### French Knot

A **French knot** wraps the thread around the needle before it is pulled through.

The result is a small, raised dot used for eyes, seeds and texture.

Too few wraps give a loose knot; too many make a bulky one.

Knots are worked with the fabric held taut.

### Machine Embroidery

Machine embroidery uses a free-motion foot or a digital design file.

**Free-motion** work lets the maker draw with the needle.

Digitised machines repeat precise designs across many pieces.

Machine work is faster but needs the same control of tension and stabiliser.

### Appliqué

**Appliqué** stitches one fabric shape onto another.

The edge may be turned under, satin stitched or left raw.

**Bondaweb** temporarily fixes the shape before stitching.

Appliqué can add colour and imagery that printing cannot match.

### Beads and Mixed Media

Beads, sequins and shells add light, movement and weight.

They are attached with a secure backstitch or a bead thread.

Mixed media may combine stitch with dye, print, paper and wire.

Heavy embellishment changes drape, so it is planned with the garment.

### Cultural Traditions

Embroidery carries the history of its makers.

**Kantha** from Bengal uses running stitch on layered cloth.

**Sashiko** from Japan reinforces and decorates with white running stitch.

**Zardozi** from South Asia works metal thread and beads on rich fabric.

The loom and the embroidery hoop below show structure and surface as two textile languages.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Hand Stitches",
          bullets: [
            "**Running:** even dotted line for seams, gathers and quilting.",
            "**Backstitch:** strong continuous line for outlines.",
            "**Satin:** parallel filling threads for a smooth shape.",
            "**Chain:** linked loops for flexible outlines.",
            "**French knot:** wrapped dot for texture and detail.",
            "**Blanket:** looped edge for appliqué and hems.",
          ],
        },
        {
          subTitle: "Embellishment Methods",
          bullets: [
            "**Appliqué:** fabric shapes stitched onto a ground.",
            "**Beadwork:** beads attached with secure stitches.",
            "**Sequins:** discs that catch light and movement.",
            "**Couching:** thick thread laid down and stitched in place.",
            "**Machine embroidery:** free-motion or digitised stitching.",
            "**Mixed media:** stitch combined with print, dye or paper.",
          ],
        },
        {
          subTitle: "Cultural Context",
          bullets: [
            "**Kantha:** layered running stitch from Bengal.",
            "**Sashiko:** Japanese reinforcing running stitch.",
            "**Zardozi:** South Asian metal thread and bead work.",
            "**Suzhou:** fine silk embroidery from China.",
            "**Otomi:** colourful animal motifs from Mexico.",
            "**Kente:** woven cloth with symbolic pattern from Ghana.",
          ],
        },
      ],
      examinerTips: [
        "Name the stitch and describe the mark it makes.",
        "Explain how thread, fabric and stitch work together.",
        "Discuss cultural embroidery with respect and specific detail.",
        "Consider weight and drape when adding beads.",
        "Show samples that test stitch scale and colour.",
      ],
      commonMistakes: [
        "Using satin stitch across very large areas without support.",
        "Pulling French knots too tight so they disappear.",
        "Adding heavy beads to a delicate fabric without planning support.",
        "Copying a cultural pattern without understanding its meaning.",
        "Treating machine embroidery as automatically neater than hand work.",
      ],
      recap: [
        "Describe how a French knot is worked. [3]",
        "Explain the difference between running stitch and backstitch. [2]",
        "Describe two ways of finishing the edge of an appliqué shape. [4]",
        "Explain how heavy beadwork can affect a garment's drape. [3]",
        "Evaluate the importance of cultural context when using a traditional stitch. [4]",
      ],
    },
  ],
};

export const ART_DESIGN_CHAPTER_6 = chapterSix;
