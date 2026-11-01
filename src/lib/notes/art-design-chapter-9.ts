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
    src: "art9-lascaux.webp",
    alt: "A torchlit cave wall painted with ochre horses and a black bull, with a stencilled human hand beside the animals",
    caption: "Ochre, charcoal and a hand",
  },
  {
    src: "art9-perspective.webp",
    alt: "A Renaissance city square drawn in one-point perspective, with receding lines converging on a distant doorway",
    caption: "The window becomes a method",
  },
]);

const panelB = artPanel([
  {
    src: "art9-camera-obscura.webp",
    alt: "A portable wooden camera obscura with a lens and a dark cloth, projecting an inverted view of a street onto a ground-glass screen",
    caption: "A room, a hole and an upside-down world",
  },
  {
    src: "art9-first-photograph.webp",
    alt: "The blurred heliograph view from a window at Le Gras, showing rooftops and a courtyard in pale grey and violet tones",
    caption: "The first surviving photograph",
  },
]);

const panelC = artPanel([
  {
    src: "art9-bauhaus.webp",
    alt: "A Bauhaus workshop with students at a loom and a workbench, geometric studies pinned on the wall and a grid of typographic exercises",
    caption: "Craft, industry and the grid",
  },
  {
    src: "art9-digital-studio.webp",
    alt: "A contemporary design studio with a large screen showing a layout grid, a drawing tablet and a 3D printer working in the corner",
    caption: "The workshop becomes a screen",
  },
]);

const chapterNine: Chapter = {
  number: 9,
  title: "A Short History of Art & Design",
  intro: `History is not a list of styles to copy.\n\nIt is a record of problems that artists and designers solved with the tools available to them.\n\nA cave painter, a Renaissance workshop and a digital studio all ask how an image can hold meaning.\n\nThe answers change, but the questions return in every portfolio.`,
  subheadings: [
    {
      title: "Marks on Rock and the First Pigments",
      body: `### The First Images

People were making images long before they built cities or wrote books.

The oldest surviving marks include engraved lines on bone and ochre lumps with deliberate patterns.

Cave paintings are the most famous evidence, but they are not the whole story.

Image-making appears wherever humans found a surface and a pigment.

### Lascaux and Altamira

Lascaux in south-west France was painted about 17,000 years ago.

Its walls carry horses, aurochs, stags and a famous falling figure.

Altamira in northern Spain was painted at least 14,000 years ago.

Its bison use the natural bulges of the rock as part of the form.

Both caves were sealed for millennia, which preserved the images.

### Materials

The palette was earth and fire.

Red and yellow ochre came from iron-rich soil.

Black came from charcoal or manganese dioxide.

White came from chalk or kaolin.

Pigment was ground, mixed with fat, blood or water, and applied by brush, finger or blowpipe.

### Hand Stencils

A hand was pressed to the wall and pigment blown around it.

The result is a negative silhouette, not an outline.

Some hands show missing fingers, which may record injury, ritual or sign language.

The gesture is intimate and unmistakably human.

### Drawing on the Rock

The painters used the contours of the cave.

A bulge becomes a shoulder; a crack becomes the line of a back.

Some animals are drawn in profile with twisted perspective, showing both horns and legs.

This is not a failure of realism; it is a way of showing what matters.

### Purpose and Interpretation

Nobody knows exactly why the images were made.

Hunting magic is one theory: paint the animal to influence the hunt.

Ritual or shamanic travel is another.

Teaching, storytelling and marking territory are also possible.

The safest conclusion is that the images mattered enough to make in dangerous places.

### Image-Making as Memory

The caves were not comfortable galleries.

Artists worked by flickering light, deep underground.

The images may have been shown to few people, or to many at particular moments.

They fix memory in a place and make the invisible visible.

### What It Teaches a Portfolio

Observation came before photography.

The painters studied animal movement closely enough to invent it with a few lines.

They used the surface rather than fighting it.

They selected the decisive features instead of copying every hair.

Those habits still matter in a drawing or a design.

The panel below sets the cave wall beside a one-point perspective study, two very different answers to the problem of space.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Sites and Dates",
          bullets: [
            "**Lascaux:** about 17,000 years ago, famous for horses and aurochs.",
            "**Altamira:** at least 14,000 years ago, famous for polychrome bison.",
            "**Chauvet:** older still, with lions, rhinos and horses.",
            "**Africa:** engraved ochre and painted rock shelters across the continent.",
            "**Australia:** rock art traditions continuing over tens of thousands of years.",
            "**Date range:** the images span tens of millennia, not a single moment.",
          ],
        },
        {
          subTitle: "Materials and Methods",
          bullets: [
            "**Ochre:** iron oxide earths producing red, yellow and brown.",
            "**Charcoal:** burnt wood producing a soft, deep black.",
            "**Kaolin or chalk:** white pigment for highlights and grounds.",
            "**Blowpipe:** pigment blown through a hollow bone or tube.",
            "**Brush:** hair, moss or chewed twig bound to a handle.",
            "**Rock surface:** used as contour, texture and three-dimensional support.",
          ],
        },
        {
          subTitle: "Interpretation",
          bullets: [
            "**Hunting magic:** images made to influence the success of a hunt.",
            "**Ritual:** paintings used within ceremonies or initiations.",
            "**Shamanism:** marks recording visionary journeys or spirit animals.",
            "**Teaching:** images passing knowledge between generations.",
            "**Memory:** a fixed record of animals, events or places.",
            "**Uncertainty:** no single explanation fits every site.",
          ],
        },
      ],
      examinerTips: [
        "Give a date range and a place for each site, not just a name.",
        "Describe materials as processes: ground, mixed, applied.",
        "Offer more than one interpretation and explain the evidence for each.",
        "Connect cave painting to observational drawing rather than treating it as primitive.",
        "Avoid calling the work childlike; the control of line and movement is sophisticated.",
      ],
      commonMistakes: [
        "Claiming the paintings were made for one certain purpose.",
        "Treating all cave art as European when the tradition is global.",
        "Describing the images as decoration without considering their context.",
        "Ignoring the use of the rock surface in the composition.",
        "Giving a single date for a tradition that lasted thousands of years.",
      ],
      recap: [
        "Describe the materials and methods used to paint the Lascaux caves. [4]",
        "Explain two possible purposes of cave painting and the evidence for each. [4]",
        "Analyse how the painters used the natural surface of the rock. [3]",
        "Compare the images at Lascaux and Altamira in terms of subject and technique. [4]",
        "Discuss why the interpretation of prehistoric images remains uncertain. [4]",
      ],
    },
    {
      title: "Perspective, Oil Paint and the Workshop",
      body: `### The Workshop System

Renaissance art was made in workshops, not by isolated geniuses.

A master ran a business with apprentices, assistants and specialist craftsmen.

Boys began young, grinding pigments and preparing panels.

Training lasted years and ended with guild membership.

### Brunelleschi's Experiment

Filippo Brunelleschi demonstrated linear perspective in Florence around 1413.

He painted the Baptistery on a panel and drilled a peephole through it.

A mirror held at arm's length reflected the painting.

The building appeared to stand in real space.

### Alberti's Window

Leon Battista Alberti wrote the rules down in De pictura in 1435.

He described the picture as an open window.

Parallel lines recede to a single vanishing point on the horizon.

Objects diminish consistently with distance.

The method turned space into construction.

### One-Point Perspective

A one-point construction starts with a horizon line.

A vanishing point is placed on it.

Receding edges converge there.

Horizontals and verticals stay parallel to the frame.

The result is orderly and stage-like.

### Why Perspective Mattered

Perspective made an image feel like a view through a window.

It allowed painters to place figures and architecture in one believable space.

It also implied a single viewer standing in a fixed position.

That assumption is a convention, not a universal truth.

Other traditions use multiple viewpoints, stacked space or flattened perspective.

### Van Eyck and Oil

Jan van Eyck did not invent oil paint, but he refined it.

Oil dries slowly, allowing revision and smooth blending.

It can be applied in transparent glazes over an opaque underpainting.

Each glaze adds depth without hiding the layer beneath.

The Ghent Altarpiece and the Arnolfini Portrait show this control.

### Glazing

A glaze is a thin, transparent layer of colour.

Light passes through it and reflects from the layers below.

Repeated glazes create luminous skin, fabric and metal.

Glazing requires patience because each layer must dry.

Direct painting and glazing are different languages within the same medium.

### Patronage

Patrons commissioned most Renaissance art.

The Church, guilds, courts and wealthy merchants paid for it.

A contract could specify the subject, materials, gold and ultramarine.

The patron's beliefs and status shaped the image.

Artists negotiated, but rarely worked without a purpose.

### The Artist's Status

The workshop system made art a craft.

Writing and theory gradually made it a liberal art.

Alberti argued that painting required mathematics and judgement.

Signatures and self-portraits asserted individual authorship.

The idea of the artist as an original creator grew slowly.

### What It Teaches a Portfolio

Perspective is a tool for constructing space, not a rule of nature.

Materials carry meaning: oil allows depth and revision.

A workshop shows that art is collaborative and repeatable.

Context explains why an image looks the way it does.`,
      groups: [
        {
          subTitle: "Perspective",
          bullets: [
            "**Horizon line:** the eye level of the viewer.",
            "**Vanishing point:** where receding parallel lines meet.",
            "**Orthogonal:** a receding line drawn towards the vanishing point.",
            "**Picture plane:** the flat surface of the image.",
            "**Diminution:** objects become smaller with distance.",
            "**Single viewpoint:** the image assumes one fixed observer.",
          ],
        },
        {
          subTitle: "Oil Technique",
          bullets: [
            "**Support:** panel or canvas prepared with a ground.",
            "**Underpainting:** the initial opaque structure of the image.",
            "**Glaze:** a transparent layer that modifies the colour beneath.",
            "**Scumble:** a thin opaque layer dragged over a textured surface.",
            "**Drying time:** oil allows slow blending and revision.",
            "**Varnish:** a final layer that saturates colour and protects the surface.",
          ],
        },
        {
          subTitle: "The Workshop",
          bullets: [
            "**Master:** the named artist who ran the workshop and took the commission.",
            "**Apprentice:** a trainee who ground pigments and prepared surfaces.",
            "**Assistant:** a skilled worker who painted secondary areas.",
            "**Guild:** the professional body controlling training and trade.",
            "**Contract:** the legal agreement specifying subject, materials and payment.",
            "**Attribution:** the difficulty of separating a master's hand from the workshop.",
          ],
        },
      ],
      examinerTips: [
        "Explain perspective as a construction with a horizon and vanishing point.",
        "Name Brunelleschi and Alberti and distinguish experiment from theory.",
        "Describe glazing as transparent layers, not simply thick paint.",
        "Connect patronage to the subject, scale and materials of a work.",
        "Use one-point perspective correctly; do not call any diagonal perspective.",
      ],
      commonMistakes: [
        "Saying van Eyck invented oil paint.",
        "Confusing linear perspective with atmospheric perspective.",
        "Treating a Renaissance painting as the work of one person without considering the workshop.",
        "Describing perspective as more truthful than other spatial systems.",
        "Forgetting that patrons influenced the content of the image.",
      ],
      recap: [
        "Explain Brunelleschi's experiment and what it demonstrated. [4]",
        "Describe the rules of one-point perspective. [4]",
        "Explain how oil glazing creates depth of colour. [3]",
        "Discuss the role of the workshop in Renaissance art production. [4]",
        "Evaluate the claim that linear perspective is a universal way of representing space. [4]",
      ],
    },
    {
      title: "The Lens and the Fixed Image",
      body: `### The Camera Obscura

A camera obscura is a dark room or box with a small opening.

Light entering the hole forms an inverted image on the opposite surface.

The effect was described in China and in the Islamic world long before the European Renaissance.

Ibn al-Haytham explained the optics in the eleventh century.

Later versions used a lens and a mirror to make the image brighter and upright.

### Drawing with the Camera

Artists used the camera obscura as an aid.

Canaletto may have used one to construct Venetian views.

The image still had to be traced, adjusted and painted.

The device helped with perspective and proportion, not with composition or colour.

### The Chemical Problem

A lens can form an image, but it cannot keep it.

For centuries the image vanished when the light changed.

The missing step was a surface that reacted to light and stayed changed.

That step belongs to the early nineteenth century.

The panel below shows a portable camera obscura beside the first surviving photograph.

### Niépce

Nicéphore Niépce experimented with light-sensitive bitumen.

He coated a pewter plate and exposed it in a camera.

The surviving image, View from the Window at Le Gras, dates from about 1826.

The exposure may have lasted eight hours or more.

Buildings are visible, but the light has changed across the long exposure.

### Daguerre

Louis Daguerre produced the daguerreotype, announced in 1839.

A silver-plated copper sheet was sensitised with iodine vapour.

After exposure it was developed with mercury vapour and fixed.

The result was a sharp, unique positive image on metal.

The French government bought the process and released it publicly.

### Talbot

William Henry Fox Talbot developed a different system.

His calotype used paper negatives from which many positives could be printed.

The negative-positive principle became the basis of photography.

He published The Pencil of Nature between 1844 and 1846.

The book demonstrated that photographs could illustrate and persuade.

### Portrait Studios

Early exposures lasted seconds, so sitters had to stay still.

Studios used neck braces, painted backdrops and careful window light.

Portrait photography became a business as well as an art.

Carte de visite portraits were traded, collected and posted.

Photography democratised the likeness.

### Photography and Painting

Photography took over the literal record.

Portrait miniatures declined; landscape painting changed direction.

Painters explored colour, atmosphere and subjective experience.

Impressionism painted the momentary effects that a camera could not yet capture.

Photography did not kill painting; it changed its job.

### The Snapshot and the Truth Claim

Cheap cameras and roll film put photography in ordinary hands.

The snapshot recorded daily life rather than formal occasions.

Photographs were trusted as evidence, yet they could be staged, cropped or retouched.

The debate about photographic truth began early and has never ended.

### What It Teaches a Portfolio

A camera is a tool with a history.

Every photograph inherits assumptions about evidence, memory and composition.

Knowing that history helps you choose when to use it and when to question it.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Inventions",
          bullets: [
            "**Camera obscura:** a dark space with an aperture forming an image.",
            "**Niépce:** a heliograph on bitumen-coated pewter, about 1826.",
            "**Daguerre:** a unique silver image announced in 1839.",
            "**Talbot:** paper negatives and multiple positive prints.",
            "**Roll film:** flexible film that made snapshot cameras practical.",
            "**Colour film:** subtractive colour systems in the 1930s.",
          ],
        },
        {
          subTitle: "Processes",
          bullets: [
            "**Heliograph:** bitumen hardens where light strikes and resists washing away.",
            "**Daguerreotype:** silver plate, iodine vapour, mercury development.",
            "**Calotype:** paper negative, waxed for transparency, printed onto salted paper.",
            "**Negative-positive:** one negative can produce many identical prints.",
            "**Exposure:** early processes needed seconds or minutes of stillness.",
            "**Fixer:** removes light-sensitive salts so the image becomes stable.",
          ],
        },
        {
          subTitle: "Consequences",
          bullets: [
            "**Portraiture:** likeness became affordable and widely circulated.",
            "**Painting:** literal record-keeping was no longer the painter's main task.",
            "**Evidence:** photographs gained authority as documents.",
            "**Mass media:** images could be reproduced and distributed.",
            "**Truth claims:** staging, cropping and retouching complicated trust.",
            "**Everyday life:** the snapshot made ordinary moments worth recording.",
          ],
        },
      ],
      examinerTips: [
        "Distinguish the camera obscura from photography; the optical device is much older.",
        "Name the process and its support for each inventor.",
        "Explain the negative-positive principle and why it mattered.",
        "Link photography's arrival to a specific change in painting.",
        "Question the idea that a photograph is automatically true.",
      ],
      commonMistakes: [
        "Saying Niépce invented the daguerreotype.",
        "Confusing Talbot's calotype with the daguerreotype.",
        "Claiming photography was invented in one year by one person.",
        "Describing the camera obscura as a photographic camera.",
        "Asserting that photography ended portrait painting.",
      ],
      recap: [
        "Explain how a camera obscura forms an image. [3]",
        "Compare the daguerreotype and the calotype. [4]",
        "Explain why the negative-positive process was so influential. [3]",
        "Discuss how photography changed the role of painting in the nineteenth century. [4]",
        "Evaluate the claim that photographs provide reliable evidence of reality. [4]",
      ],
    },
    {
      title: "Industry, Posters and the Bauhaus",
      body: `### Lithography

Alois Senefelder invented lithography in 1796.

A greasy drawing is made on limestone, and water is applied to the undrawn areas.

Ink sticks only to the greasy image.

The process allowed large, cheap, colourful prints.

Colour lithography made the illustrated poster possible.

### Advertising and the Poster

Cities grew and streets filled with competing messages.

Posters had to work at a distance and in a few seconds.

Jules Chéret used flat colour and lively figures.

Toulouse-Lautrec reduced scenes to bold silhouettes and strong lettering.

The poster combined image, type and persuasion.

### Arts and Crafts

William Morris and John Ruskin reacted against industrial production.

They argued that factory work separated the maker from the object.

Morris revived craft processes, natural pattern and medieval ideals.

The Kelmscott Press produced books as total designs.

The movement valued honesty of material and labour.

### The Limits of the Reaction

Handmade goods were expensive.

The Arts and Crafts movement could not supply a mass market.

Its criticism of industrial ugliness was influential, but its economics were fragile.

The next step was to engage with industry rather than reject it.

### The Bauhaus

Walter Gropius founded the Bauhaus in Weimar in 1919.

It combined fine art, craft and design in one school.

Students began with a preliminary course in materials, colour and form.

They then entered workshops: metal, furniture, weaving, printing, mural and theatre.

The school moved to Dessau in 1925 and closed under Nazi pressure in 1933.

### Craft and Industry

The Bauhaus did not simply choose machines over hands.

It tested materials and forms that industry could produce well.

Marianne Brandt's metalwork and Marcel Breuer's tubular steel furniture are examples.

The aim was good design for everyday use, not luxury objects.

In 1923 the school adopted the slogan art and technology, a new unity.

### Typography and Grids

Bauhaus typography favoured sans-serif letters and asymmetric layout.

Herbert Bayer designed a universal alphabet of simplified forms.

Grids organised text and image into a clear hierarchy.

Lower-case lettering was promoted as efficient and modern.

The layout treated the page as a constructed space.

### Photography in Design

The Bauhaus used photography as a design tool.

Photomontage, photograms and unusual viewpoints entered posters and publications.

László Moholy-Nagy experimented with light, transparency and cameraless images.

The photograph became a material to compose with, not only a record.

### Exile and Influence

The school closed, but its teachers dispersed.

Gropius went to Harvard, Moholy-Nagy to Chicago and Albers to Black Mountain College.

Bauhaus ideas entered art schools, advertising and corporate identity.

The grid and the sans-serif became international design conventions.

### What It Teaches a Portfolio

Design is a relationship between making and use.

A grid is a tool for clarity, not a style label.

Craft knowledge improves industrial decisions.

A school can change what a whole profession believes is normal.

The panel below places a Bauhaus workshop beside a contemporary digital studio; the tools differ, but the argument about craft and industry continues.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Print and Persuasion",
          bullets: [
            "**Lithography:** grease drawing on limestone, water and ink.",
            "**Chromolithography:** layered colour printing for posters and packaging.",
            "**Poster:** image and type designed for distance and speed.",
            "**Chéret:** flat colour, movement and decorative energy.",
            "**Toulouse-Lautrec:** silhouettes, cropped space and bold lettering.",
            "**Advertising:** design becomes a commercial argument.",
          ],
        },
        {
          subTitle: "Bauhaus Principles",
          bullets: [
            "**Preliminary course:** material, colour and form before specialisation.",
            "**Workshop:** learning through making with real materials.",
            "**Craft and industry:** designing for production without losing quality.",
            "**Function:** form follows use, structure and material.",
            "**Typography:** sans-serif, asymmetry and clear hierarchy.",
            "**Grid:** a system for organising text and image.",
          ],
        },
        {
          subTitle: "Design Education",
          bullets: [
            "**Integration:** art, craft and technology in one curriculum.",
            "**Experimentation:** testing materials before choosing a form.",
            "**Collaboration:** painters, weavers, metalworkers and architects working together.",
            "**Standardisation:** simplified alphabets and repeatable components.",
            "**Everyday life:** designing useful objects for ordinary people.",
            "**Exile:** the school's ideas spreading through emigration.",
          ],
        },
      ],
      examinerTips: [
        "Connect lithography to advertising, not just to printmaking.",
        "Explain the Arts and Crafts reaction and its economic limits.",
        "Name specific Bauhaus workshops and teachers.",
        "Describe the grid as an organising system with a purpose.",
        "Avoid treating the Bauhaus as a single uniform style.",
      ],
      commonMistakes: [
        "Saying the Bauhaus was only a painting school.",
        "Confusing the Arts and Crafts movement with the Bauhaus.",
        "Describing Bauhaus design as anti-craft.",
        "Attributing every sans-serif typeface to the Bauhaus.",
        "Ignoring the school's closure and the emigration of its teachers.",
      ],
      recap: [
        "Explain how lithography made the mass poster possible. [3]",
        "Describe the aims of the Arts and Crafts movement. [4]",
        "Explain how the Bauhaus combined craft and industrial production. [4]",
        "Analyse the role of the grid in Bauhaus typography. [3]",
        "Discuss the influence of the Bauhaus after its closure. [4]",
      ],
    },
    {
      title: "From Darkroom to Screen",
      body: `### Colour Film

Colour film uses layers sensitive to red, green and blue light.

Kodachrome, introduced in 1935, produced vivid transparency film.

Agfacolor and later colour negative films made colour printing practical.

Colour changed advertising, fashion and family photography.

It also raised new questions about accuracy and mood.

### The Digital Sensor

A digital sensor converts light into electrical charge.

CCD sensors were developed in 1969; CMOS sensors later became dominant.

The first digital camera prototype appeared in 1975.

Professional digital cameras entered studios in the 1990s.

Phones made the camera a permanent companion.

### Photoshop and the Digital Darkroom

Thomas and John Knoll began developing Photoshop in 1987.

Adobe released the first version in 1990.

Layers, masks and adjustment tools moved darkroom decisions onto a screen.

Dodging, burning and retouching became reversible.

The digital darkroom expanded what could be changed and hid how much had changed.

### CGI

Computer-generated imagery moved from research labs into cinema.

Jurassic Park in 1993 combined digital creatures with live action.

Toy Story in 1995 was the first fully computer-animated feature.

Modelling, rigging, lighting and rendering became a production pipeline.

The boundary between photographed and generated images blurred.

### Animation

Cel animation dominated the twentieth century.

Digital 2D animation replaced cels with layers and timelines.

3D animation built characters as models and animated them with rigs.

Motion capture recorded live movement for digital characters.

Animation became a core language of games, interfaces and advertising.

### The Internet as Gallery

The web turned the portfolio into a global shop window.

Artists could publish without a gallery or publisher.

Social media created audiences and algorithms in equal measure.

Stock photography and print-on-demand changed how images earn money.

Visibility became a design problem as much as a distribution problem.

### Democratisation and Its Costs

Tools became cheaper and knowledge became easier to find.

More people could make and distribute work.

The volume of images increased competition for attention.

Unpaid labour, copyright infringement and platform dependence grew alongside access.

A democratic medium is not automatically a fair one.

### The Networked Image

An image is now copied, cropped, memed and recirculated.

Its meaning can change with context and caption.

Artists make work for screens that are also cameras and mirrors.

The audience is part of the distribution system.

### What It Teaches a Portfolio

Every tool carries assumptions about speed and truth.

A reversible edit is still an edit.

Distribution is part of the work's life.

A portfolio should show judgement, not only access to software.`,
      groups: [
        {
          subTitle: "Technical Shifts",
          bullets: [
            "**Colour film:** layered emulsions sensitive to different wavelengths.",
            "**CCD:** an early digital sensor technology.",
            "**CMOS:** the dominant sensor technology in modern cameras.",
            "**Megapixel:** a measure of sensor resolution, not of image quality alone.",
            "**Digital darkroom:** non-destructive editing with layers and masks.",
            "**Render:** the process of producing a final image from a 3D scene.",
          ],
        },
        {
          subTitle: "Digital Tools",
          bullets: [
            "**Photoshop:** raster editing with layers, masks and adjustments.",
            "**Illustrator:** vector drawing for logos, type and diagrams.",
            "**3D modelling:** building objects in virtual space.",
            "**Motion graphics:** animated type and shape for screens.",
            "**Game engine:** real-time interactive environments.",
            "**AI generation:** images produced from text prompts and training data.",
          ],
        },
        {
          subTitle: "The Networked Image",
          bullets: [
            "**Portfolio site:** a controlled presentation of selected work.",
            "**Social platform:** distribution shaped by an algorithm.",
            "**Stock library:** licensing images for commercial use.",
            "**Print on demand:** production without holding stock.",
            "**Meme:** an image remade through repetition and captioning.",
            "**Provenance:** evidence of where an image came from and how it was changed.",
          ],
        },
      ],
      examinerTips: [
        "Name a date and a consequence for each technical shift.",
        "Distinguish capture, editing and distribution as separate stages.",
        "Explain what digital editing made easier and what it made harder to trust.",
        "Discuss the internet as both opportunity and constraint.",
        "Avoid claiming that digital tools automatically improve design.",
      ],
      commonMistakes: [
        "Saying digital photography began with the smartphone.",
        "Confusing resolution with optical quality.",
        "Treating Photoshop as neutral rather than as a set of choices.",
        "Assuming online distribution removes the need for editing or curation.",
        "Ignoring copyright and consent when discussing digital sharing.",
      ],
      recap: [
        "Describe how colour film records colour. [3]",
        "Explain the difference between a CCD and a CMOS sensor. [2]",
        "Discuss how Photoshop changed the relationship between photograph and evidence. [4]",
        "Explain how the internet changed the way designers find an audience. [4]",
        "Evaluate the claim that digital tools have democratised art and design. [4]",
      ],
    },
    {
      title: "Art, Design and the Present",
      body: `### Conceptual Art

Conceptual art treats the idea as the artwork.

Marcel Duchamp's readymades challenged the idea that art must be handmade.

Sol LeWitt argued that the concept could be executed by anyone.

The object became documentation, instruction or proposition.

Meaning moved from craft to context.

### Installation Art

Installation art arranges a space rather than a single object.

It can include light, sound, video, architecture and found material.

The viewer walks through the work rather than looking at it from outside.

Site-specific works respond to a particular place and cannot simply move.

Scale and atmosphere become the medium.

### Design Ethics

Designers shape behaviour, not only appearance.

Dark patterns manipulate users into choices they did not intend.

Accessibility determines who can use a product at all.

Inclusive design begins with the people usually left out.

Ethics is part of professional competence, not an optional extra.

### Sustainability

Every material has a supply chain and a footprint.

Paper, ink, resin, textile and electronics carry different costs.

Circular design plans for repair, reuse and disassembly.

Longevity is a sustainable strategy: a thing used for longer needs replacing less often.

Digital work still consumes energy and hardware.

### AI Imagery

Generative models produce images from prompts and training data.

They can imitate styles at speed and scale.

They raise questions about consent, copyright and attribution.

Training data may contain bias or unlicensed work.

Provenance standards and disclosure are attempts to make authorship visible.

A designer's judgement matters more when generation is cheap.

### 3D Printing

Additive manufacturing builds an object layer by layer.

It allows rapid prototypes, custom fits and complex internal structures.

Designers use it for prosthetics, packaging, models and replacement parts.

Materials range from plastics to resin, metal and ceramic.

The process complements rather than replaces other making methods.

### The Portfolio in This Moment

A portfolio can include physical objects, screen work, video and interactive pieces.

The assessment still looks for inquiry, skill, reflection and presentation.

New tools do not remove the need for observation and composition.

A personal voice is still built from decisions, not effects.

### What a Young Designer Inherits

You inherit perspective, photography, the grid, the poster and the screen.

You also inherit the questions: who is this for, who is excluded, who owns it and what does it cost.

History is a set of options, not a set of rules.

Choose the option that serves the work.

### Looking Back to Move Forward

The cave painter used the rock.

The Renaissance painter used geometry and oil.

The photographer used light and chemistry.

The Bauhaus used the grid and the workshop.

The contemporary designer uses all of these, and must decide why.

That decision is the beginning of your own practice.`,
      groups: [
        {
          subTitle: "Contemporary Practice",
          bullets: [
            "**Readymade:** an ordinary object presented as art by an artist's choice.",
            "**Conceptual art:** the idea takes priority over the object.",
            "**Installation:** a constructed environment experienced in space.",
            "**Site-specific:** work made for one particular location.",
            "**Performance:** the artist's action becomes the medium.",
            "**Relational work:** the audience and social exchange become the material.",
          ],
        },
        {
          subTitle: "New Tools",
          bullets: [
            "**AI generation:** images produced from prompts and training data.",
            "**3D printing:** additive construction from a digital model.",
            "**Laser cutting:** precise cutting and engraving from vector files.",
            "**Motion capture:** recording movement for digital characters.",
            "**Virtual reality:** an immersive, interactive environment.",
            "**Provenance metadata:** a record of origin and edits.",
          ],
        },
        {
          subTitle: "Inheritance",
          bullets: [
            "**Observation:** looking closely before making.",
            "**Construction:** using systems such as perspective and grids.",
            "**Material:** choosing a medium for what it can do.",
            "**Audience:** designing for a specific person and context.",
            "**Ethics:** considering who is included, credited and harmed.",
            "**Judgement:** deciding what not to make.",
          ],
        },
      ],
      examinerTips: [
        "Discuss contemporary work through its idea and context, not only its appearance.",
        "Give a specific example when discussing AI, sustainability or accessibility.",
        "Treat ethics as a design decision with consequences.",
        "Connect a contemporary practice back to an earlier chapter of this history.",
        "Explain what a new tool changes and what it leaves unchanged.",
      ],
      commonMistakes: [
        "Assuming conceptual art means the artist cannot draw.",
        "Treating installation art as decoration on a larger scale.",
        "Discussing sustainability only as recycling materials.",
        "Claiming AI removes the need for design judgement.",
        "Ignoring questions of consent and copyright in generated imagery.",
      ],
      recap: [
        "Explain how conceptual art changed the role of the object. [3]",
        "Describe how installation art changes the viewer's experience. [3]",
        "Discuss two ethical responsibilities of a contemporary designer. [4]",
        "Explain how 3D printing has changed the design process. [3]",
        "Evaluate the impact of AI image generation on authorship and originality. [5]",
      ],
    },
  ],
};

export const ART_DESIGN_CHAPTER_9 = chapterNine;
