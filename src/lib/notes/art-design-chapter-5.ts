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
    src: "art5-maquette.webp",
    alt: "A card and foam board study model of a chair on a cutting mat beside a scalpel and steel rule",
    caption: "Think in card first",
  },
  {
    src: "art5-orthographic.webp",
    alt: "A hand-drawn orthographic sheet showing front, side and plan views of a small product with dimensions",
    caption: "Three views, one object",
  },
]);

const panelB = artPanel([
  {
    src: "art5-wheel-throwing.webp",
    alt: "Hands centring a clay cylinder on a spinning pottery wheel, with slip and a sponge nearby",
    caption: "Centring before shaping",
  },
  {
    src: "art5-glaze-kiln.webp",
    alt: "Glaze test tiles on a kiln shelf showing labelled colour and texture results",
    caption: "Tests before the final firing",
  },
]);

const panelC = artPanel([
  {
    src: "art5-product-prototype.webp",
    alt: "A working prototype of a small handheld product in the workshop, with measurements marked on it",
    caption: "A prototype that can be tested",
  },
  {
    src: "art5-jewellery-bench.webp",
    alt: "A jeweller's bench with a piercing saw, files, solder block and a half-finished silver pendant",
    caption: "Bench work, tiny scale",
  },
]);

const chapterFive: Chapter = {
  number: 5,
  title: "Three-Dimensional Design",
  intro: `Three-dimensional design is the design of objects that occupy real space.\n\nA drawing can suggest a form, but only a model or finished piece shows how it stands, joins, balances and feels.\n\nThe subject brings together sculpture and ceramics, product design, architecture and interiors, and craft work in wood, metal and paper.\n\nAcross all of them run the same questions: what is it for, how is it structured, and who will use it?\n\nThis chapter explains the vocabulary of form, material and process that examiners reward.`,
  subheadings: [
    {
      title: "Form, Function and Structure",
      body: `### Thinking in Three Dimensions

A three-dimensional object is designed from every angle, not only from the front.

It has mass, volume, surface and a relationship with the space around it.

Drawings must therefore show the front, the side and the view from above.

A viewer may walk around the work, so no side can be left unresolved.

### Form Follows Function

**Form** is the shape and structure of an object; **function** is what it must do.

A chair must support a body, a jug must pour and a lamp must direct light.

Function sets the minimum requirements while form gives the object character.

When the two conflict, the object usually fails at one or the other.

### Structure and Load Paths

A **load** is any force acting on a structure: weight, pressure, tension or wind.

A **load path** is the route that force takes through the object to the ground.

Triangulation stiffens a frame because a triangle cannot distort without changing the length of a side.

A structure that looks strong but has no continuous load path will still fail.

### Joints and Connections

A **joint** is where two parts meet and are held together.

Butt joints are simple but weak; lap joints and dowels spread the load.

Mortise and tenon and dovetail joints interlock the grain for strength.

The joint should suit the material, the load and the tools available.

### Materials and Their Properties

Materials differ in strength, weight, hardness, flexibility and workability.

**Tensile** strength resists pulling; **compressive** strength resists crushing.

Wood is strong along the grain but splits across it.

Choosing a material is a design decision that affects form, cost and lifespan.

### Ergonomics and the User

**Ergonomics** matches an object to the size and movement of the human body.

**Anthropometrics** supplies measurements such as reach, grip and seat height.

A handle too small for the hand causes strain however elegant it looks.

Designers test with real users rather than averaging everyone into one body.

### Scale and Context

A maquette may be one tenth of the final work, so proportions must be imagined at full size.

An object that looks graceful on a table can feel clumsy in a room.

Context includes the surface it stands on, the light it receives and the people near it.

Scale drawings and models help predict those relationships.

### Testing Before Making

Tests can be structural, ergonomic or visual.

A cardboard mock-up reveals whether a shape fits the hand.

A load test shows where a frame bends first.

Recording failures is part of the design evidence, not a reason to hide the work.`,
      groups: [
        {
          subTitle: "Structural Vocabulary",
          bullets: [
            "**Load:** a force such as weight, pressure or wind.",
            "**Load path:** the route a force follows to the ground.",
            "**Tension:** a pulling force along a member.",
            "**Compression:** a crushing force along a member.",
            "**Triangulation:** bracing with triangles to stop a frame distorting.",
            "**Cantilever:** a beam supported at one end only.",
          ],
        },
        {
          subTitle: "Joint Types",
          bullets: [
            "**Butt joint:** two ends meet squarely; simple but weak alone.",
            "**Lap joint:** one part overlaps another and spreads the load.",
            "**Dowel:** a wooden pin locks two parts together.",
            "**Mortise and tenon:** a projecting tenon fits a cut mortise.",
            "**Dovetail:** interlocking angled pins resist pulling apart.",
            "**Welded or brazed joint:** metal fused with heat and filler.",
          ],
        },
        {
          subTitle: "Material Properties",
          bullets: [
            "**Strength:** the load a material can carry before failing.",
            "**Hardness:** resistance to scratching and wear.",
            "**Density:** mass for a given volume, which affects weight.",
            "**Flexibility:** willingness to bend without breaking.",
            "**Durability:** resistance to weather, use and decay.",
            "**Workability:** ease of cutting, shaping and joining.",
          ],
        },
      ],
      examinerTips: [
        "Define form and function separately before explaining how they interact.",
        "Use load path when explaining why a structure holds together.",
        "Name the joint and the material together, such as a dowelled oak frame.",
        "Refer to ergonomics with a body measurement or a user test.",
        "Evaluate the object at its intended scale, not only as a model.",
      ],
      commonMistakes: [
        "Treating decoration as the starting point and function as an afterthought.",
        "Assuming thick material is always stronger than well-braced thin material.",
        "Joining materials that expand and contract at different rates.",
        "Designing for an average hand instead of a range of users.",
        "Judging a small model without imagining the full-size object.",
      ],
      recap: [
        "Define the terms form and function. [2]",
        "Explain how triangulation strengthens a frame. [3]",
        "Describe two joints suitable for a wooden stool and say why. [4]",
        "Explain why ergonomics matters when designing a hand tool. [3]",
        "Evaluate the claim that a strong material guarantees a strong structure. [4]",
      ],
    },
    {
      title: "Research and Maquettes",
      body: `### Research Comes First

Research gathers visual, functional and contextual information.

Primary research includes drawing, measuring and photographing real objects.

Secondary research includes books, archives, exhibitions and manufacturer data.

Research should be recorded with sources, not left as a pile of printouts.

### Why Make a Maquette

A **maquette** is a small model used to test an idea in three dimensions.

It reveals problems that drawings hide: thickness, balance and shadow.

It can be handled, photographed and shown to a client.

Cheap materials allow several versions before the final commitment.

### Card and Foam Board Models

Card is cut, scored and folded to make quick structural models.

**Foam board** has a rigid core and smooth faces, so it holds flat planes well.

A scalpel, steel rule and cutting mat produce clean edges.

Glue tabs should be hidden inside so the outside reads as a finished surface.

### Clay and Plasticine Sketch Models

Clay can be added, pressed and carved, so it suits organic and rounded forms.

Plasticine is reusable and holds fine detail for small objects.

A wire armature supports tall or thin shapes.

Clay models are rarely the final material, but they teach volume quickly.

### Iteration and Decision Records

**Iteration** means making a revised version after testing the last one.

Each version should change one or two variables so the effect can be judged.

Notes, dates and photographs record why a change was made.

A sketchbook of failures is stronger evidence than one perfect model.

### Scale Models

A scale model keeps proportion while reducing size.

Architectural models are often 1:50 or 1:100; product models may be 1:1.

The scale must be stated on the model and in the drawings.

Small details may be simplified, but structural relationships should remain.

### Rapid Prototyping

**Rapid prototyping** builds a part layer by layer from a digital file.

Fused deposition modelling extrudes melted filament; resin processes cure liquid polymer.

It suits complex internal shapes that hand tools cannot easily cut.

Printed surfaces often need sanding, filling and painting before presentation.

### From Model to Drawing

The model answers questions of form; the drawing fixes dimensions.

**Orthographic** views record front, side and plan with measurements.

The two should agree, because a model cannot be measured precisely by eye.

The maquette and orthographic sheet below show one design tested by hand and then specified.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Model Materials",
          bullets: [
            "**Card:** cheap, fast to cut and fold for structural tests.",
            "**Foam board:** rigid, flat and clean-edged for presentation models.",
            "**Clay:** additive and carvable for organic volume.",
            "**Balsa:** light timber for frames and spars.",
            "**Wire:** armatures, handles and thin structural lines.",
            "**3D print:** complex geometry built from a digital model.",
          ],
        },
        {
          subTitle: "Recording the Process",
          bullets: [
            "**Photographs:** each version from consistent angles.",
            "**Annotated sketches:** what changed and why.",
            "**Dates:** the order of decisions and revisions.",
            "**Test results:** measurements, failures and user comments.",
            "**Client feedback:** requests, approvals and rejected ideas.",
            "**Final decision:** the version chosen and its justification.",
          ],
        },
        {
          subTitle: "Digital Making",
          bullets: [
            "**CAD model:** precise geometry saved as a digital file.",
            "**STL file:** a mesh prepared for printing.",
            "**Slicing:** dividing the model into printable layers.",
            "**FDM:** filament extruded layer by layer.",
            "**Resin printing:** liquid polymer cured by light.",
            "**Post-processing:** support removal, sanding and finishing.",
          ],
        },
      ],
      examinerTips: [
        "Show a sequence of models, not a single polished maquette.",
        "State the material and scale of each model.",
        "Annotate what the model tested and what it revealed.",
        "Explain iteration as response to evidence, not random change.",
        "Link the final drawing to decisions made in the model.",
      ],
      commonMistakes: [
        "Presenting a final model with no evidence of earlier versions.",
        "Using expensive materials for a first sketch model.",
        "Leaving glue tabs and rough edges visible on a presentation model.",
        "Making changes without recording a reason.",
        "Drawing dimensions that contradict the tested model.",
      ],
      recap: [
        "Define the term maquette. [2]",
        "Explain two reasons why designers make sketch models. [4]",
        "Describe how foam board is prepared and joined for a model. [3]",
        "Explain why a scale model should state its scale. [3]",
        "Evaluate the usefulness of rapid prototyping in the design process. [4]",
      ],
    },
    {
      title: "Ceramics and Sculpture",
      body: `### Clay and Its States

**Slip** is liquid clay used as glue; **plastic** clay can be shaped.

**Leather-hard** clay holds its shape but can still be trimmed and joined.

**Bone dry** clay is ready for the first firing.

Water is the variable that controls every stage.

### Pinch, Coil and Slab

A **pinch pot** is formed by pressing a ball of clay between thumb and fingers.

**Coil building** stacks rolled lengths, which are joined and smoothed.

**Slab building** uses rolled sheets cut and assembled like card.

Each method leaves a different surface and suits a different form.

### Wheel Throwing

**Centring** pushes the clay to the middle of the spinning wheel.

**Opening** forms the hollow, and **pulling** raises the walls.

Even pressure and controlled speed produce an even cylinder.

**Trimming** on a leather-hard pot refines the foot ring.

### Joining and Surface

Clay joins need **score, slip and blend**: roughen the surfaces, add slip, then smooth.

Joints made dry will crack apart in the kiln.

**Wedging** removes air pockets that cause explosions during firing.

Surface texture can be pressed, carved, incised or applied as decoration.

### Drying and Warping

Clay shrinks as it dries and again in the kiln.

Uneven thickness dries at different rates and causes cracks or warping.

Pots are dried slowly under plastic, then finished when leather-hard.

Handles and spouts are attached at the leather-hard stage.

### Bisque Firing

The **bisque** firing removes water and organic material and hardens the clay.

It is usually a slower, lower firing than the glaze firing.

Bisque ware is porous, so glaze will adhere to it.

Pieces are stacked with space for heat to circulate.

### Glazing

**Glaze** is a glass-forming mixture applied to bisque ware.

It can be dipped, poured, sprayed or brushed.

Glaze thickness affects colour and can run onto the kiln shelf.

**Glaze test tiles** record the result of each recipe before it is used.

### Kiln Safety and Test Tiles

Kilns can reach temperatures above 1200 °C, so the area stays clear and ventilated.

Pieces must be bone dry before loading to avoid steam explosions.

Kiln shelves are coated with batt wash to stop glaze sticking.

The wheel-thrown cylinder and the glaze test tiles below show process and control side by side.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Hand-Building Methods",
          bullets: [
            "**Pinch:** a ball hollowed by thumb pressure and rotated.",
            "**Coil:** rolled lengths stacked, joined and smoothed.",
            "**Slab:** flat sheets cut and assembled with slip.",
            "**Press mould:** clay pressed into a plaster mould.",
            "**Joining:** score, slip and blend while leather-hard.",
            "**Surface:** incise, impress, burnish or apply texture.",
          ],
        },
        {
          subTitle: "Firing Stages",
          bullets: [
            "**Bone dry:** all free water has evaporated.",
            "**Bisque:** first firing hardens the clay and opens the body.",
            "**Glaze firing:** melts the glaze into a glassy surface.",
            "**Cooling:** slow cooling prevents thermal shock.",
            "**Shrinkage:** clay and glaze contract at different rates.",
            "**Vitrification:** the clay body becomes dense and non-porous.",
          ],
        },
        {
          subTitle: "Faults and Causes",
          bullets: [
            "**Cracks:** uneven thickness or too-rapid drying.",
            "**Explosions:** trapped air or moisture in the clay.",
            "**Crazing:** glaze contracts more than the clay body.",
            "**Running:** glaze applied too thickly or fired too high.",
            "**Warping:** uneven support or uneven wall thickness.",
            "**Blistering:** gas trapped beneath the glaze surface.",
          ],
        },
      ],
      examinerTips: [
        "Name the clay state and say what it allows you to do.",
        "Use the sequence score, slip and blend for every join.",
        "Explain firing as two stages: bisque, then glaze.",
        "Justify a glaze by its test tile rather than by the sample photo.",
        "Link a fault to its cause, such as uneven drying producing cracks.",
      ],
      commonMistakes: [
        "Joining clay without scoring and slipping, so handles fall off.",
        "Firing a damp pot and blaming the kiln for the explosion.",
        "Applying glaze too thickly and letting it run onto the shelf.",
        "Drying a thick pot quickly in a warm room.",
        "Describing glaze as paint rather than glass.",
      ],
      recap: [
        "Describe the stages of wheel throwing. [4]",
        "Explain why clay must be wedged before use. [2]",
        "Explain how to join two pieces of clay successfully. [3]",
        "State the purpose of a bisque firing. [2]",
        "Explain how an uneven wall thickness can damage a pot. [3]",
      ],
    },
    {
      title: "Product Design",
      body: `### The Product Design Process

Product design moves from brief to research, concept, development, prototype and manufacture.

Each stage tests the previous one and feeds back into it.

A design that cannot be made or repaired is not yet a product.

The process is recorded so decisions can be explained.

### Isometric Drawing

**Isometric** drawing shows three faces at equal angles, usually 30 degrees.

Vertical lines stay vertical and parallel edges stay parallel.

It shows form without perspective distortion, so it suits technical presentation.

Measurements are usually taken along the isometric axes rather than scaled by eye.

### Orthographic Projection

**Orthographic** projection shows separate front, side and plan views.

First-angle projection places the plan below the front view; third-angle places it above.

Hidden detail is shown with dashed lines and centrelines with chain lines.

Every view shares the same alignment and scale.

### CAD Modelling

**CAD** builds a precise three-dimensional model on screen.

Parametric modelling lets dimensions drive the geometry, so changes update automatically.

Renderings test colour, material and lighting before manufacture.

CAD files can feed laser cutters, CNC machines and 3D printers.

### Laser Cutting and CNC

Laser cutting uses a focused beam to cut or engrave sheet material.

**Kerf** is the width of material removed by the cut, so joints must allow for it.

CNC routers and mills cut larger or thicker parts from digital files.

Both processes need clean vector files and sensible tolerances.

### Prototypes and Testing

A **prototype** is a working version used to test function.

It may be rough, as long as it answers a specific question.

Tests might measure strength, grip, assembly time or user confusion.

Results are recorded and fed into the next version.

### Materials and Sustainability

Material choice affects weight, cost, feel and environmental impact.

Designers consider recycled content, energy use and end-of-life recovery.

**Design for disassembly** makes repair and recycling possible.

A longer-lasting product can outperform a recyclable one that fails quickly.

### Presenting the Product

Presentation includes drawings, renders, models and photographs.

Labels explain materials, dimensions and key features.

The evaluation compares the outcome with the brief.

A clear story of development is as important as the final object.`,
      groups: [
        {
          subTitle: "Drawing Conventions",
          bullets: [
            "**Isometric:** three faces at 30 degrees, no perspective.",
            "**Orthographic:** separate front, side and plan views.",
            "**First angle:** plan below the front view.",
            "**Third angle:** plan above the front view.",
            "**Hidden detail:** dashed lines for edges not visible.",
            "**Dimension line:** measured extent with arrowheads and units.",
          ],
        },
        {
          subTitle: "Digital Processes",
          bullets: [
            "**CAD:** precise three-dimensional modelling.",
            "**Parametric:** dimensions control the geometry.",
            "**Render:** simulated material, light and colour.",
            "**Laser cutting:** sheet parts cut from vector files.",
            "**CNC:** computer-controlled routing, milling or turning.",
            "**3D printing:** layered prototypes and small production runs.",
          ],
        },
        {
          subTitle: "Sustainability Questions",
          bullets: [
            "**Material:** is it recycled, renewable or responsibly sourced?",
            "**Energy:** how much is used in making and using the product?",
            "**Durability:** will it last long enough to justify its impact?",
            "**Repair:** can parts be replaced rather than discarded?",
            "**Disassembly:** can materials be separated for recycling?",
            "**End of life:** what happens when the user has finished with it?",
          ],
        },
      ],
      examinerTips: [
        "Show the design process as a cycle, with testing feeding back into ideas.",
        "Use the correct view names and projection angle in drawing questions.",
        "Explain kerf when describing a laser-cut joint.",
        "Judge a prototype by the question it was built to answer.",
        "Discuss sustainability across material, manufacture, use and disposal.",
      ],
      commonMistakes: [
        "Drawing an isometric view with perspective convergence.",
        "Mixing first-angle and third-angle layouts on one sheet.",
        "Designing a laser-cut joint with no allowance for kerf.",
        "Treating a render as proof that the product works.",
        "Discussing recycling while ignoring product lifespan.",
      ],
      recap: [
        "Describe the main stages of product design from brief to manufacture. [4]",
        "Explain the difference between isometric and orthographic drawing. [3]",
        "Explain why kerf matters when laser cutting a slot. [2]",
        "State four questions a designer should ask about a product's sustainability. [4]",
        "Evaluate the role of prototyping in improving a product. [4]",
      ],
    },
    {
      title: "Architectural, Interior and Set Design",
      body: `### Plans, Elevations and Sections

A **plan** is a view from above, cut at about one metre above the floor.

An **elevation** shows one face of the building or room.

A **section** cuts through the structure to reveal height and construction.

Together they describe a space that no single view can show.

### Working to Scale

Scale is the ratio between the drawing and reality.

1:100 means one unit on the drawing represents one hundred in the building.

1:50 shows more detail, and 1:20 is used for construction details.

The scale is stated on every sheet and used consistently.

### Models of Buildings

Architectural models are made from card, foam board and acrylic.

They test massing, roof form and the relationship between volumes.

A site model places the building among roads, trees and neighbours.

Models are photographed from eye level to imitate the experience of the space.

### Light and Atmosphere

Light decides how a space feels as much as its shape.

Designers consider daylight direction, window size and artificial fittings.

Warm light feels intimate; cool light feels clinical or public.

Shadows can emphasise structure or hide it.

### Circulation and Use

**Circulation** is the route people take through a space.

Entrances, corridors and stairs should be obvious without signs.

Furniture layout must leave clear paths and turning space.

A beautiful room that people cannot move through has failed.

### Theatre and Set Design

A set is designed for a script, a director and an audience.

The **ground plan** shows the set from above, including entrances and furniture.

The **model box** is a scale model of the stage used to test sightlines.

Design must serve the action, the scene changes and the budget.

### Sightlines and Scene Changes

Every seat must see the action, so sightlines are checked in the model.

Tall scenery can block views from the side; low scenery can disappear behind the stalls.

Scene changes need space, timing and a place to store removed pieces.

**Fly bars** and trucks allow scenery to move quickly and quietly.

### Judging a Space

Judgement considers function, atmosphere, structure and cost together.

Users should be observed in the space, not imagined.

Materials must suit wear, cleaning and acoustics.

A successful design feels inevitable rather than decorated.`,
      groups: [
        {
          subTitle: "Drawing Types",
          bullets: [
            "**Plan:** view from above at a stated cut height.",
            "**Elevation:** flat view of one external or internal face.",
            "**Section:** cut through the building showing height and layers.",
            "**Site plan:** the building within its plot and access.",
            "**Detail drawing:** enlarged construction at 1:20 or 1:5.",
            "**Ground plan:** theatre set seen from above.",
          ],
        },
        {
          subTitle: "Scale in Practice",
          bullets: [
            "**1:200:** site and block layout.",
            "**1:100:** general floor plans and sections.",
            "**1:50:** room layouts and larger details.",
            "**1:20:** construction and joinery details.",
            "**1:1:** full-size profile or template.",
            "**Scale bar:** a graphic ruler that survives photocopying.",
          ],
        },
        {
          subTitle: "Theatre Design Terms",
          bullets: [
            "**Ground plan:** set layout from above.",
            "**Model box:** scale model of stage and seating.",
            "**Sightline:** the line of view from an audience position.",
            "**Fly bar:** overhead rail for raising scenery.",
            "**Truck:** low wheeled platform for scene changes.",
            "**False proscenium:** inner frame that narrows the stage opening.",
          ],
        },
      ],
      examinerTips: [
        "Distinguish plan, elevation and section in one clear sentence each.",
        "State the scale and use a scale bar on every drawing.",
        "Relate a design decision to light, circulation or sightlines.",
        "Describe a model box as a tool for testing views, not as a toy.",
        "Evaluate a space through its users and its purpose.",
      ],
      commonMistakes: [
        "Calling an elevation a plan.",
        "Drawing a plan with no indication of scale.",
        "Ignoring circulation so furniture blocks the entrance.",
        "Designing a set that looks good only from the centre of the auditorium.",
        "Treating atmosphere as decoration rather than a design decision.",
      ],
      recap: [
        "Define plan, elevation and section. [3]",
        "Explain why a scale bar is useful on an architectural drawing. [2]",
        "Describe how a model box helps a theatre designer. [3]",
        "Explain the importance of sightlines in set design. [3]",
        "Evaluate the claim that good circulation matters more than attractive finishes. [4]",
      ],
    },
    {
      title: "Craft Design and Jewellery",
      body: `### Craft, Design and Skill

Craft design values material knowledge and hand skill alongside function.

A crafted object often shows how it was made.

Repetition within a craft builds control and judgement.

Designers combine traditional technique with contemporary form.

### Wood

Wood is strong along the grain and moves with changes in moisture.

**Seasoning** dries timber so it is less likely to warp.

Saws cut across or along the grain; chisels pare and cut mortises.

Sanding follows the grain, and a finish protects the surface.

### Metal

Metal can be cut, drilled, bent, soldered and polished.

**Annealing** softens work-hardened metal so it can be shaped again.

**Pickling** removes oxide after soldering.

Steel, copper, brass and silver behave differently under the same tools.

### Papercrafts

Paper can be cut, scored, folded, layered and laminated.

**Scoring** compresses the fold line so card bends without cracking.

Pop-up mechanisms rely on accurate hinges and fold angles.

Paper models are cheap, fast and surprisingly strong.

### Piercing and Soldering

**Piercing** cuts a shape from sheet metal with a jeweller's saw.

The blade is kept vertical and the work supported on a bench pin.

**Soldering** joins metal with a filler that melts below the parent metal.

Flux cleans the joint and helps the solder flow.

### Filing and Finishing

Files remove marks and shape edges; finer cuts follow coarser ones.

**Emery** and **wet and dry** paper smooth the surface before polishing.

A **barrel polisher** or mop brings up a shine.

Finishing decides how the piece feels and how it wears.

### Health and Safety

Workshops contain sharp tools, dust, fumes and moving machinery.

Goggles protect the eyes; masks protect the lungs from dust.

Long hair is tied back and loose sleeves removed near machines.

Soldering needs ventilation, and pickle is handled with care.

### Accessories and the Body

Fashion accessories are designed around the body and movement.

A bag needs balance, a belt needs adjustment, a headpiece needs weight distribution.

Fastenings must be secure but easy to use.

The product prototype and the jewellery bench below show craft thinking at two very different scales.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Workshop Processes",
          bullets: [
            "**Sawing:** cutting to a marked line with the correct blade.",
            "**Filing:** shaping and smoothing with successive cuts.",
            "**Drilling:** making holes with a supported workpiece.",
            "**Soldering:** joining metal with heat and filler.",
            "**Scoring and folding:** creasing card or paper for a clean edge.",
            "**Finishing:** sanding, polishing, oiling or lacquering.",
          ],
        },
        {
          subTitle: "Jewellery Terms",
          bullets: [
            "**Piercing:** cutting a design from sheet metal.",
            "**Bench pin:** a support for sawing small work.",
            "**Annealing:** heating metal to soften it.",
            "**Flux:** a paste that cleans the joint for soldering.",
            "**Pickle:** acid bath that removes firescale.",
            "**Bezel:** a metal rim that holds a stone.",
          ],
        },
        {
          subTitle: "Safety Rules",
          bullets: [
            "**Eyes:** goggles for cutting, drilling and polishing.",
            "**Lungs:** dust masks when sanding wood or mixing powders.",
            "**Hands:** keep fingers behind the blade and use a holding tool.",
            "**Clothing:** tie hair back and remove loose sleeves or jewellery.",
            "**Ventilation:** solder and pickle fumes must be extracted.",
            "**Housekeeping:** sharp tools stored separately and benches left clear.",
          ],
        },
      ],
      examinerTips: [
        "Name the material and the process together, such as annealed copper.",
        "Describe safety as a sequence of precautions, not a single rule.",
        "Explain finishing as part of the design, not a final chore.",
        "Relate an accessory to the body and to movement.",
        "Show craft skill through close-up photographs and process notes.",
      ],
      commonMistakes: [
        "Soldering dirty metal without flux and blaming the solder.",
        "Filing across the grain and tearing the timber.",
        "Wearing loose sleeves while using a pillar drill.",
        "Describing a jewellery design without naming its fastening.",
        "Treating paper as a cheap substitute rather than a structural material.",
      ],
      recap: [
        "Describe the process of piercing a shape from sheet metal. [4]",
        "Explain why flux is used when soldering. [2]",
        "State four health and safety rules for a jewellery workshop. [4]",
        "Explain how a fashion accessory must respond to the body. [3]",
        "Evaluate the importance of finishing to a crafted object. [3]",
      ],
    },
  ],
};

export const ART_DESIGN_CHAPTER_5 = chapterFive;
