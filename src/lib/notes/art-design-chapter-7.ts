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
    src: "art7-depth-of-field.webp",
    alt: "Two photographs of the same seated portrait, one with a sharply detailed background and one with the background dissolved into soft blur",
    caption: "Aperture decides what stays sharp",
  },
  {
    src: "art7-shutter-speed.webp",
    alt: "A cyclist photographed twice, once frozen at the top of a jump and once drawn into a long streak of motion across the frame",
    caption: "Shutter speed decides what time looks like",
  },
]);

const panelB = artPanel([
  {
    src: "art7-darkroom.webp",
    alt: "A dim red-lit darkroom with an enlarger above a developing tray, test strips pegged on a line and a safelight glowing on the wall",
    caption: "The darkroom works by red light",
  },
  {
    src: "art7-photogram.webp",
    alt: "A black-and-white photogram of leaves, keys and lace laid directly on photographic paper, their shapes left white against a dark ground",
    caption: "Light draws around the object",
  },
]);

const panelC = artPanel([
  {
    src: "art7-pinhole.webp",
    alt: "A homemade pinhole camera made from a blackened cardboard box with a brass shim pierced by a needle and a tape shutter",
    caption: "A box, a hole and a long exposure",
  },
  {
    src: "art7-stop-motion.webp",
    alt: "A tabletop stop-motion set with a jointed paper figure on a miniature street, a camera on a tripod and a storyboard pinned nearby",
    caption: "One frame at a time",
  },
]);

const chapterSeven: Chapter = {
  number: 7,
  title: "Photography",
  intro: `Photography is the practice of deciding which light to record and which to leave out.\n\nA camera can take a picture in a thousandth of a second, but the choices behind that fraction belong to the photographer.\n\nThis chapter follows the whole chain: exposure, composition, digital editing, film and darkroom work, camera-less processes, animation and montage.\n\nEach process asks the same question in a different dialect: what does this image need in order to mean something?`,
  subheadings: [
    {
      title: "The Camera and Exposure",
      body: `### Light, Time and a Sensor

A photograph is light recorded over time.

The camera controls the brightness of that light with the aperture, and the duration with the shutter.

The sensor or film turns the result into an image.

### Aperture

The aperture is an adjustable opening inside the lens.

It is written as an f-number, such as f/2.8 or f/16.

A small f-number means a wide opening; a large f-number means a narrow opening.

This reversal catches almost everyone at first.

### Depth of Field

Depth of field is the zone of acceptable sharpness in front of and behind the subject.

A wide aperture, such as f/2.8, gives a shallow zone.

A narrow aperture, such as f/16, gives a deep zone.

The panel below sets a softly separated portrait beside a landscape where everything is held sharp.

### Shutter Speed

The shutter speed is the length of time the sensor is exposed.

It is written as a fraction, such as 1/250 second.

Fast speeds freeze movement; slow speeds record it as a blur.

A handheld camera usually needs a speed at least as fast as the focal length.

### Motion

A fast shutter stops a gesture in mid-air.

A slow shutter turns a moving subject into a streak.

Panning keeps the subject sharp against a blurred background.

The panel below also compares a frozen jumper with a cyclist drawn into motion.

The choice depends on whether you want information or atmosphere.

### ISO

ISO describes how strongly the sensor responds to light.

Low values such as 100 give clean files in bright conditions.

High values such as 3200 allow photography in dim light.

The cost is noise, which appears as speckled grain in the shadows.

### The Exposure Triangle

Aperture, shutter speed and ISO form the exposure triangle.

Changing one changes the brightness unless another compensates.

Each control also changes something else: depth, motion or noise.

That second effect is usually the real reason for the choice.

### Thinking in Stops

A stop is a doubling or halving of light.

The aperture sequence runs f/1.4, f/2, f/2.8, f/4, f/5.6, f/8, f/11, f/16.

Each step halves the light as the number rises.

Shutter speeds and ISO also move in stops.

An equivalent exposure keeps brightness while changing the look.

### Metering

The meter measures reflected light and suggests a setting.

Evaluative or matrix metering reads the whole frame.

Spot metering reads a small area, which is useful for a backlit face.

Centre-weighted metering favours the middle of the frame.

Most meters assume a middle grey, so very bright or very dark scenes need thought.

### When the Exposure Is Wrong

Over-exposure clips highlights to pure white, and the detail cannot be recovered.

Under-exposure leaves shadows noisy and flat.

A histogram shows whether either end is pressed against the edge.

Slight under-exposure protects highlights in digital capture; film often prefers slight over-exposure.

Neither rule replaces looking carefully at the subject.

### A Working Method

Decide what matters most: sharpness, motion or low noise.

Set that control first, then balance the other two.

Check the histogram, then check the edges of the frame.

Shoot a second version with a different choice.

Compare the pair later, when the scene is no longer exciting.`,
      figure: panelA,
      groups: [
        {
          subTitle: "The Three Controls",
          bullets: [
            "**Aperture:** the size of the lens opening, written as an f-number; wide apertures give shallow depth of field.",
            "**Shutter speed:** the duration of the exposure; fast speeds freeze motion and slow speeds blur it.",
            "**ISO:** the sensor's sensitivity setting; doubling ISO doubles brightness and usually increases noise.",
            "**Exposure:** the total light recorded, balanced across all three controls.",
            "**Stop:** a doubling or halving of exposure, used to compare settings.",
            "**Equivalent exposure:** two different combinations that produce the same brightness.",
          ],
        },
        {
          subTitle: "Reading the Scene",
          bullets: [
            "**Middle grey:** the tone a meter expects, so bright snow or dark coal will mislead it.",
            "**Highlight clipping:** detail lost at the right of the histogram and usually unrecoverable.",
            "**Shadow noise:** speckle in dark areas, made worse by brightening the file later.",
            "**Backlight:** light behind the subject, so meter for the face or add fill.",
            "**Safe handheld speed:** roughly 1/focal length, faster if the subject moves.",
            "**Panning:** following a moving subject with a slow shutter to blur the background.",
          ],
        },
        {
          subTitle: "Faults and Fixes",
          bullets: [
            "**Blurred handheld frame:** raise the shutter speed or support the camera.",
            "**Background too busy:** open the aperture or move closer to separate the subject.",
            "**Everything soft in a landscape:** stop down and use a tripod.",
            "**Noisy indoor frame:** add light, use a wider aperture, or accept a slower speed with support.",
            "**White sky, dark face:** expose for the face and let unimportant highlights go.",
            "**Inconsistent set:** fix one control and vary another deliberately.",
          ],
        },
      ],
      examinerTips: [
        "Name the control and its visual effect together; 'f/2.8 separated the face from the crowd' earns more than 'I used a wide aperture'.",
        "Use stops to explain equivalence: one stop wider at f/4 can be balanced by one stop faster at 1/500.",
        "Describe the histogram as evidence of exposure rather than claiming the screen looked correct.",
        "Link every technical choice to intention: sharpness for evidence, blur for mood.",
        "When comparing two frames, state what changed, what stayed the same and why.",
      ],
      commonMistakes: [
        "Saying a large f-number gives a large aperture; the number is a fraction, so f/16 is small.",
        "Raising ISO to cure blur; ISO brightens the file but does not shorten the exposure.",
        "Treating the exposure triangle as three independent settings rather than a balance.",
        "Assuming a bright screen means a correct exposure; the histogram is more reliable.",
        "Using a slow shutter handheld and blaming the lens for softness.",
      ],
      recap: [
        "Define depth of field and explain how aperture and subject distance affect it. [4]",
        "A photograph is correctly exposed at f/8 and 1/125 s. Give an equivalent exposure one stop darker. [2]",
        "Explain why a photographer might choose ISO 3200 for an indoor documentary series. [3]",
        "Describe how panning produces a sharp subject against a blurred background. [3]",
        "Explain the difference between over-exposure and under-exposure in terms of lost detail. [4]",
      ],
    },
    {
      title: "Composition and Visual Language",
      body: `### The Frame Is Already an Argument

A photograph begins with exclusion.

The edges decide what the viewer can and cannot see.

Moving one step to the left can remove a distraction and change the meaning.

### Framing

Framing is the arrangement of everything inside the rectangle.

It includes the subject, the space around it and the objects that point towards it.

A frame that is too full feels anxious; one that is too empty feels accidental.

Both effects can be useful if they are chosen.

### The Rule of Thirds

The rule of thirds divides the frame into a three by three grid.

Placing a subject near an intersection gives it room to move or look.

A horizon on a third avoids the dead centre.

The rule is a starting point, not a law; symmetry and centred framing can be stronger.

### Leading Lines

Leading lines are edges, roads, rails or shadows that carry the eye inwards.

They work best when they lead towards the subject rather than past it.

A line that enters at a corner creates a slower, more deliberate journey.

Repeated lines can also create rhythm.

### Viewpoint

Eye level feels equal and ordinary.

A high viewpoint looks down on the subject and can make it vulnerable or small.

A low viewpoint looks up and can make it powerful or monumental.

The viewpoint also changes what is hidden behind the subject.

### Foreground, Middle Ground, Background

Three layers give a photograph depth.

A strong foreground object invites the viewer into the scene.

The middle ground holds the action, and the background supplies context.

A picture with only one layer often feels flat, even when it is sharp.

### Negative Space

Negative space is the quiet area around the subject.

It can isolate a figure, suggest scale or create tension.

A large empty sky is not automatically wasted space.

Ask whether the emptiness is doing work.

### Balance and Visual Weight

Bright areas, faces, sharp detail and saturated colour attract the eye.

A small dark object can balance a large pale mass.

Balance does not mean symmetry; it means the frame does not tip.

Squinting at the image is a quick way to test the distribution of weight.

### Colour and Tone as Composition

A single red coat can become the focal point without any sharpness.

High contrast separates forms; low contrast merges them.

Colour temperature can make a scene feel warm or clinical.

Tone often survives cropping better than colour does.

### Narrative in One Frame

A photograph can imply what happened before and after.

A glance, a gap or a repeated gesture can suggest a story.

Too many competing details make the story unclear.

Ambiguity is powerful when one clear question remains.

### The Series as a Sentence

One image is a word; a series is a sentence.

A sequence can compare, repeat or contradict.

Variation in distance and scale keeps a series alive.

A series needs a reason beyond shared subject matter.

### Genres and Their Conventions

Portraiture studies identity, expression and pose.

Landscape studies place, weather and scale.

Documentary studies people and events with evidence and responsibility.

Still life studies objects, light and arrangement.

Street photography studies the accidental theatre of public space.

Knowing the conventions helps you break them deliberately.

### Documentary Responsibility

Documentary images claim to show something real.

Do not stage an event and present it as observed.

Ask for consent where it is possible and appropriate.

Caption honestly, including place and date.`,
      groups: [
        {
          subTitle: "Framing Decisions",
          bullets: [
            "**Frame edges:** check every corner before pressing the shutter.",
            "**Fill the frame:** move closer until the subject occupies the space it deserves.",
            "**Frame within a frame:** use a doorway or window to isolate the subject.",
            "**Cropping in camera:** decide the final shape at the moment of capture where possible.",
            "**Headroom:** leave space above a figure unless the crop is deliberately tight.",
            "**Distractions:** remove bright objects and stray lines at the edges.",
          ],
        },
        {
          subTitle: "Devices That Guide the Eye",
          bullets: [
            "**Rule of thirds:** place key elements near the grid intersections.",
            "**Leading lines:** use roads, rails or shadows to pull the eye inwards.",
            "**Diagonal:** a tilted line creates energy and movement.",
            "**Repetition:** repeated shapes create rhythm, and one break creates emphasis.",
            "**Negative space:** use emptiness to isolate and intensify.",
            "**Colour accent:** a single saturated note can act as the focal point.",
          ],
        },
        {
          subTitle: "Genres and Intent",
          bullets: [
            "**Portrait:** choose the pose, background and light to reveal character.",
            "**Landscape:** work with weather, scale and a clear foreground.",
            "**Documentary:** observe rather than stage, and caption truthfully.",
            "**Still life:** control every object, surface and shadow.",
            "**Street:** anticipate gestures and keep the background readable.",
            "**Abstract:** isolate pattern, texture or light from its subject.",
          ],
        },
      ],
      examinerTips: [
        "Describe composition with direction words: foreground, lower third, left edge, leading towards.",
        "Explain why you rejected a frame, not only why you kept one; that shows judgement.",
        "Connect viewpoint to meaning rather than treating it as a technical setting.",
        "In a series, show how one image answers or complicates the one before it.",
        "Use the language of visual weight and balance when analysing other photographers.",
      ],
      commonMistakes: [
        "Applying the rule of thirds to every image until all compositions look the same.",
        "Leaving a bright distraction at the edge of an otherwise strong frame.",
        "Confusing a series with a pile of pictures of the same subject.",
        "Describing what is in the frame but never how it is arranged.",
        "Staging a documentary photograph and captioning it as observed.",
      ],
      recap: [
        "Explain how viewpoint can change the meaning of a portrait. [3]",
        "Describe three compositional devices that can guide the viewer's eye. [3]",
        "Explain the difference between a collection of photographs and a series. [3]",
        "Analyse how foreground, middle ground and background create depth in a landscape. [4]",
        "Discuss the responsibilities of a documentary photographer when photographing people. [4]",
      ],
    },
    {
      title: "Digital Workflow and Editing",
      body: `### Capture Is Not Editing

Editing begins with the file, not with the slider.

A well-exposed, well-framed capture gives the editor room to work.

A careless capture forces the editor to repair instead of interpret.

### RAW and JPEG

A RAW file stores the sensor data before the camera processes it.

It keeps more tonal information and allows white balance and exposure to be adjusted later.

A JPEG is processed, compressed and ready to share.

It is smaller and faster, but adjustments quickly damage its edges and gradients.

RAW is a negative; JPEG is a print.

### Resolution and Colour Space

Resolution is the number of pixels in the file.

More pixels allow larger prints and deeper crops.

Colour space defines the range of colours the file can describe.

sRGB is safe for screens and the web; Adobe RGB holds more greens and cyans for print.

Convert deliberately rather than letting software guess.

### White Balance

White balance tells the camera what colour white should be.

Daylight is around 5500 K, tungsten around 3200 K and shade around 7000 K.

Auto white balance is convenient but varies between frames.

A grey card or a custom setting keeps a series consistent.

Shoot RAW if the light is mixed and decide later.

### The Histogram

The histogram maps tones from black on the left to white on the right.

A gap at the right means no true highlights; a spike at the right means clipping.

A gap at the left means no true blacks and a flat image.

The shape depends on the subject, so there is no perfect histogram.

Use it to protect detail, then interpret with your eyes.

### Cropping and Straightening

Cropping removes what the frame does not need.

It can change the aspect ratio and the implied story.

Straighten horizons before you crop, or the crop will be crooked.

Do not crop so hard that the file falls apart in print.

### Tone Adjustments

Exposure adjusts overall brightness.

Contrast separates lights and darks.

Highlights and shadows recover detail at the ends of the range.

Curves allow precise control over selected tonal zones.

Make a few strong moves rather than many small ones.

### Colour Adjustments

Saturation intensifies every colour equally.

Vibrance protects skin tones while lifting muted colours.

HSL controls hue, saturation and lightness for individual colours.

Split toning adds different colours to shadows and highlights.

Colour should support the subject, not decorate it.

### Retouching and Truth

Removing dust and scratches is housekeeping.

Removing a person or an object changes the claim the photograph makes.

Documentary and news images must not be altered in ways that change meaning.

Artistic work may manipulate freely, but the audience should not be deceived about it.

Write down what you changed.

### Contact Sheets and Sequencing

A contact sheet shows the whole shoot at once.

It reveals which frames repeat and which one is different.

Mark the keepers, the maybes and the rejects.

Sequence the keepers by idea rather than by the order they were taken.

### File Organisation

Use one folder per project and one subfolder per stage.

Name files with a date, subject and version.

Add metadata such as creator, copyright and keywords.

A catalogue makes searching possible; folders alone do not.

### Backup

Follow the three-two-one rule.

Keep three copies, on two kinds of media, with one copy off site.

Test that the backup opens before you need it.

Never edit the only copy of an original.

### A Simple Workflow

Import and rename.

Review on a contact sheet.

Correct exposure, white balance and lens faults.

Crop and straighten.

Make colour and tonal decisions.

Sharpen, export and back up.

Record the steps in your sketchbook.`,
      groups: [
        {
          subTitle: "Formats and Capture",
          bullets: [
            "**RAW:** unprocessed sensor data with the widest editing latitude.",
            "**JPEG:** compressed, processed and convenient, with less recovery room.",
            "**TIFF:** a flexible working or print format that avoids repeated compression.",
            "**sRGB:** the safe colour space for screens and online submission.",
            "**Adobe RGB:** a wider gamut for print, requiring correct conversion.",
            "**Resolution:** pixels across the long edge; check the requirement before exporting.",
          ],
        },
        {
          subTitle: "The Editing Sequence",
          bullets: [
            "**White balance:** neutralise colour casts before judging tone.",
            "**Exposure:** set overall brightness using the histogram.",
            "**Contrast and curves:** shape the tonal range.",
            "**Crop and straighten:** remove what the image does not need.",
            "**Local adjustments:** dodge and burn to direct attention.",
            "**Output sharpening:** apply last, for the final size and medium.",
          ],
        },
        {
          subTitle: "Archive and Backup",
          bullets: [
            "**Project folder:** one folder with capture, selects, edits and exports.",
            "**Naming:** date, subject and version, with no spaces or vague labels.",
            "**Metadata:** creator, copyright, keywords and location.",
            "**Catalogue:** software that indexes files without moving them.",
            "**Three-two-one:** three copies, two media types, one off site.",
            "**Originals:** never overwrite the file that came out of the camera.",
          ],
        },
      ],
      examinerTips: [
        "Show before-and-after pairs so the examiner can see the editing decision, not just the result.",
        "Explain why you chose RAW or JPEG for a particular shoot; either can be correct.",
        "Use the histogram as evidence when describing exposure adjustments.",
        "Record the sequence of edits in short annotations beside the screenshots.",
        "State what you did not change, especially in documentary work.",
      ],
      commonMistakes: [
        "Editing a JPEG repeatedly and then wondering why the sky shows banding.",
        "Using saturation to fix a colour cast instead of correcting white balance.",
        "Cropping away so much resolution that the final print is soft.",
        "Sharpening before resizing, then sharpening again.",
        "Keeping every frame and calling the folder an archive.",
      ],
      recap: [
        "Compare RAW and JPEG for a project that will be printed. [4]",
        "Explain how a histogram can reveal over-exposure. [3]",
        "Describe a four-stage editing sequence and the purpose of each stage. [4]",
        "Explain why white balance should be set before colour adjustments. [3]",
        "Outline the three-two-one rule for backing up a photographic project. [3]",
      ],
    },
    {
      title: "Film and the Darkroom",
      body: `### Why Film Still Teaches

Film makes every exposure cost something.

That cost slows the photographer down and forces decisions.

Film also has a distinctive latitude, grain and tonal roll-off.

Learning it explains many habits that digital photographers take for granted.

### Formats

35 mm film gives 36 frames and a familiar rectangle.

120 roll film gives medium format negatives in 6 by 6, 6 by 7 or 6 by 4.5 cm.

Sheet film in 5 by 4 inches allows individual development and movements.

Larger negatives hold more detail and enlarge with less grain.

### Film Speed and Latitude

Film speed is written as ISO, just like a digital setting.

ISO 100 film is fine-grained and needs more light.

ISO 400 film is a flexible everyday choice.

Black-and-white film tolerates over-exposure well; slide film tolerates almost none.

Negative film is usually exposed for the shadows and printed for the highlights.

### Loading and Shooting

Load in subdued light and keep the backing paper tight.

Set the meter to the film speed and check that the dial matches.

Advance carefully and watch the frame counter.

Record the film stock, speed and development notes.

A notebook is part of the camera kit.

### Development

Developer converts exposed silver halide into visible silver.

Stop bath halts development.

Fixer removes the remaining light-sensitive salts so the negative can be handled in daylight.

Washing removes the fixer, and a wetting agent helps the film dry evenly.

Time, temperature and agitation must be consistent.

### The Darkroom

The darkroom is lit by a safelight that photographic paper is insensitive to.

Trays hold developer, stop bath and fixer in a fixed order.

Tongs keep fingers out of the chemistry.

The enlarger projects the negative onto paper through a lens.

A timer and an easel keep exposures repeatable.

### The Enlarger

The negative sits in a carrier above the lens.

The lens aperture controls brightness and sharpness.

Raising the head enlarges the image; lowering it makes a smaller print.

Focus at the working aperture, using a grain focuser if one is available.

### Test Strips

A test strip is a small piece of paper exposed in steps.

Cover the strip and uncover another band every few seconds.

Develop it fully and assess the range of tones.

Choose the base exposure, then refine with a second strip.

Dry-down makes prints look slightly darker once dry, so judge accordingly.

### Contrast

Multigrade paper changes contrast with coloured filters.

A low-grade filter softens contrast and holds shadow detail.

A high-grade filter separates highlights and deepens blacks.

Split-grade printing exposes shadows and highlights through different filters.

Contrast is a printing decision, not a negative fault.

### Dodging and Burning

Dodging holds back light to lighten an area.

Burning adds light to darken an area.

Move the tool continuously to avoid visible edges.

Work in small percentages and check the wet print.

The panel below shows the darkroom where these decisions are made.

### Washing and Drying

Fixer must be removed or the print will yellow and stain.

Wash prints in running water for the recommended time.

Squeegee gently and dry face up on a rack.

Handle the wet emulsion by the edges only.

### Health and Safety

Ventilate the darkroom and avoid inhaling chemical dust.

Wear gloves when handling concentrated solutions.

Label every bottle and never store chemistry in drinks bottles.

Dispose of used chemistry through the correct channel.

Keep the safelight and white light switches clearly separate.

### What the Panel Shows

The darkroom in the panel is a working space, not a stage set.

The photogram beside it uses the same paper and chemistry without a negative.

That link is the bridge to the next section.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Film and Chemistry",
          bullets: [
            "**35 mm:** 36 frames, small negatives, quick to shoot and scan.",
            "**120 roll film:** medium format with more detail and a slower rhythm.",
            "**ISO 100:** fine grain for bright light and enlargement.",
            "**ISO 400:** a flexible speed for hand-held work.",
            "**Developer:** converts exposed silver halide into visible silver.",
            "**Fixer:** removes unexposed salts so the negative becomes stable.",
          ],
        },
        {
          subTitle: "Printing Controls",
          bullets: [
            "**Aperture:** controls exposure brightness and lens sharpness.",
            "**Time:** the second variable in every test strip.",
            "**Contrast grade:** changes the separation between tones.",
            "**Dodging:** holds light back to lighten a chosen area.",
            "**Burning:** adds light to darken a chosen area.",
            "**Dry-down:** the slight darkening that appears as a print dries.",
          ],
        },
        {
          subTitle: "Darkroom Routine",
          bullets: [
            "**Safelight:** allows paper handling without fogging it.",
            "**Tray order:** developer, stop, fix, then wash.",
            "**Tongs:** keep fingers out of chemistry and off the emulsion.",
            "**Test strip:** finds the base exposure before a full print.",
            "**Wash:** removes fixer and protects the print over time.",
            "**Contact sheet:** indexes the film and records the shoot.",
          ],
        },
      ],
      examinerTips: [
        "Describe the function of each chemical rather than listing the trays in order.",
        "Explain a test strip as a controlled experiment with one variable changed.",
        "Use dodging and burning examples to show how you directed the viewer's attention.",
        "Mention dry-down when assessing whether a print is finished.",
        "Keep a technical log; examiners value evidence of repeatable process.",
      ],
      commonMistakes: [
        "Confusing stop bath with fixer; they do different jobs.",
        "Judging a wet print as if it were dry.",
        "Burning with a stationary tool, which leaves a visible bright or dark patch.",
        "Opening the darkroom door while paper is still out.",
        "Washing a print for a few seconds and expecting it to last.",
      ],
      recap: [
        "Describe the roles of developer, stop bath and fixer in black-and-white processing. [3]",
        "Explain how a test strip is used to determine a printing exposure. [3]",
        "Compare the effects of dodging and burning on a final print. [3]",
        "Explain why a print must be washed after fixing. [2]",
        "Discuss why a photographer might choose medium format film for a portrait project. [4]",
      ],
    },
    {
      title: "Camera-less and Alternative Processes",
      body: `### The Camera Is Optional

Photography is often defined by the camera, but the medium is really light-sensitive material.

Remove the camera and the subject can sit directly on the surface.

This makes the process physical, unpredictable and often more tactile than a conventional print.

### Pinhole Cameras

A pinhole camera is a light-tight box with a tiny hole in one side.

Light passes through the hole and forms an inverted image on the opposite surface.

The image is dim, soft and wide-angle.

The small opening gives an almost unlimited depth of field.

### Making a Pinhole Camera

Blacken the inside of a box or tin.

Make a hole of about 0.3 mm in thin brass or aluminium.

Sand the hole smooth so the edges do not scatter light.

Tape a shutter over the hole and load photographic paper or film in the dark.

Seal every seam with black tape.

### Calculating Exposure

A pinhole has an effective aperture around f/100 to f/300.

Meter the scene, then add the difference in stops between the meter's aperture and the pinhole.

Reciprocity failure may require extra time for long exposures.

Make a test exposure and adjust from the result.

A notebook of times and conditions is more useful than a formula alone.

### Photograms

A photogram is made by placing objects directly on photographic paper and exposing it to light.

The objects block light and leave pale shapes; the surrounding paper darkens.

Transparent and translucent materials create graduated tones.

The process was used by Talbot and later by Man Ray and Moholy-Nagy.

Each photogram is unique because the arrangement cannot be repeated exactly.

### Cyanotypes

A cyanotype is coated with ferric ammonium citrate and potassium ferricyanide.

It is exposed to ultraviolet light, usually sunlight.

Water develops the image and washes away the unexposed salts.

The result is a Prussian blue print with a distinctive matte surface.

Objects, negatives or drawings can all be used as the source.

### Multiple Exposure

A multiple exposure records more than one image on the same frame or file.

In camera, expose the scene twice without advancing the film.

With negatives, sandwich two films in the carrier or print one negative onto another.

Digitally, blend layers with masks and blend modes.

Plan the relationship: overlap, contrast or contradiction.

### Scanning as Capture

A flatbed scanner can record objects, textures and prints.

The light moves across the subject, so shadows fall differently from a camera image.

Moving an object during the scan stretches and smears it.

Resolution, dust and glass cleanliness matter as much as in camera work.

Scans can become source material for collage and animation.

### What the Panel Shows

The pinhole camera in the panel is a homemade box with a pierced shim.

The stop-motion set beside it also builds a world frame by frame.

Both processes reward patience and a written plan.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Camera-less Processes",
          bullets: [
            "**Photogram:** objects on paper leave pale silhouettes against a darkened ground.",
            "**Cyanotype:** iron salts and sunlight produce a Prussian blue print.",
            "**Lumen print:** long exposure of objects on paper produces unpredictable colour.",
            "**Chemigram:** chemistry applied directly to paper creates painted and resisted marks.",
            "**Scanner capture:** a moving light records objects and textures directly.",
            "**Unique print:** a camera-less image usually cannot be repeated exactly.",
          ],
        },
        {
          subTitle: "Pinhole and Long Exposure",
          bullets: [
            "**Focal length:** the distance from the hole to the paper.",
            "**Effective aperture:** often between f/100 and f/300.",
            "**Exposure factor:** the number of stops between the meter reading and the pinhole.",
            "**Reciprocity:** very long exposures may need extra time.",
            "**Depth of field:** almost everything is acceptably sharp.",
            "**Test exposure:** the practical way to find the right time.",
          ],
        },
        {
          subTitle: "Multiple Exposure and Scanning",
          bullets: [
            "**In-camera double exposure:** expose the same frame twice.",
            "**Sandwich printing:** combine two negatives in the enlarger.",
            "**Layer blending:** combine digital frames with masks and blend modes.",
            "**Registration:** align repeated elements deliberately.",
            "**Scanner movement:** moving an object during the scan smears it.",
            "**Resolution:** scan at a size that supports the final output.",
          ],
        },
      ],
      examinerTips: [
        "Explain the process as a sequence of physical decisions, not as a magic trick.",
        "Record exposure times, light conditions and materials; unpredictability still needs evidence.",
        "Compare a camera-less print with a camera image in terms of control and accident.",
        "Show failed experiments and explain what you learned from them.",
        "Present camera-less work as a physical object, not only as a scanned file.",
      ],
      commonMistakes: [
        "Calling any darkroom print a photogram; a negative must be absent.",
        "Forgetting that cyanotype needs ultraviolet light and thorough washing.",
        "Treating a pinhole image as faulty because it is soft; softness is the process.",
        "Sandwiching negatives without considering how the densities will combine.",
        "Scanning a textured object without cleaning the glass.",
      ],
      recap: [
        "Explain how a pinhole camera forms an image without a lens. [3]",
        "Describe the steps needed to make a photogram. [4]",
        "Explain why a cyanotype is washed in water after exposure. [2]",
        "Compare in-camera multiple exposure with digital layer blending. [4]",
        "Discuss the creative value of accident in camera-less photography. [4]",
      ],
    },
    {
      title: "Animation and Photomontage",
      body: `### Animation Is a Sequence

Animation creates movement from still images shown in order.

The brain blends successive frames into continuous motion.

The illusion depends on timing, repetition and a consistent viewpoint.

A single frame is a drawing; a sequence is a performance.

### Storyboards

A storyboard is a comic strip of the planned film.

Each panel shows the shot, the action and the camera position.

Notes record duration, movement and sound.

Rough thumbnails are more useful than beautiful drawings at this stage.

A storyboard exposes gaps before they become expensive.

### Frame Rate

Frame rate is the number of frames shown each second.

Cinema commonly uses 24 frames per second.

Television and online video often use 25 or 30.

Animation can use 12 frames per second and repeat each drawing twice for a stylised look.

The rate changes the texture of the movement, not just its smoothness.

### Stop-Motion

Stop-motion photographs a physical set one frame at a time.

The animator moves the puppet slightly between exposures.

Onion skinning shows the previous frame as a ghost, which helps continuity.

The camera and lights must not move.

Rigs and supports are removed or hidden later.

### Hand-Drawn Animation

Hand-drawn animation begins with keyframes that define the main poses.

Inbetweens connect the keys and control the speed of the action.

A walk or run cycle repeats a short sequence of drawings.

Registration marks keep the paper aligned.

The line quality and the drawing material become part of the style.

### Digital Animation

Digital animation uses timelines, layers and keyframes.

Tweening interpolates movement between two positions.

Rigging allows a character to be posed like a puppet.

Compositing combines characters, backgrounds, effects and titles.

Rendering turns the project into a viewable file.

### Timing

Timing is the number of frames between poses.

Few frames make an action fast and snappy.

Many frames make it slow and weighty.

Easing softens the start and end of a movement.

A pause can be more dramatic than constant motion.

### Photomontage

Photomontage combines separate photographs into a new image.

The joins can be hidden to create an impossible scene, or left visible to expose the construction.

Scale, perspective and lighting must be reconciled or deliberately broken.

The result carries meaning through juxtaposition.

### Photocollage

Photocollage works with cut or torn photographic material.

The edge is part of the language: a hard cut feels decisive, a tear feels bodily.

Layering creates depth and reveals the history of the making.

The surface can be scanned or rephotographed to record texture.

### Meaning Through Juxtaposition

Two images placed together produce a third idea.

Contrast can be political, poetic or comic.

Heartfield used photomontage against fascism; Hoch used it to question gender roles.

The message depends on what is next to what, and at what size.

### Ethics and Copyright

Photographs of people require care and, where possible, consent.

Using another photographer's image without permission is a copyright problem.

Appropriation can be an artistic strategy, but it must be acknowledged.

Generated imagery raises new questions about authorship and truth.

### Presenting Time-Based Work

A film needs a clear beginning and end.

Export at a sensible resolution and check the file on another device.

Provide stills for a portfolio that cannot play video.

A QR code can link a printed page to the moving work.

Always keep a backup of the project file, not only the export.`,
      groups: [
        {
          subTitle: "Pre-production",
          bullets: [
            "**Storyboard:** shot-by-shot plan with action, duration and sound.",
            "**Shot list:** a checklist of every camera position and setup.",
            "**Character design:** model sheets that keep proportions consistent.",
            "**Set and props:** build at the scale the camera will see.",
            "**Lighting plan:** fix the direction and colour of light.",
            "**Test shot:** check focus, exposure and rig visibility before animating.",
          ],
        },
        {
          subTitle: "Animation Methods",
          bullets: [
            "**Stop-motion:** move a physical subject between single-frame exposures.",
            "**Hand-drawn:** keyframes and inbetweens on registered paper.",
            "**Cut-out:** jointed flat shapes animated under a camera.",
            "**Digital 2D:** layers and keyframes on a timeline.",
            "**3D:** modelled objects, rigs, cameras and rendered light.",
            "**Motion graphics:** type and shape animated for design or titles.",
          ],
        },
        {
          subTitle: "Montage and Meaning",
          bullets: [
            "**Juxtaposition:** two images create an idea neither contains alone.",
            "**Scale shift:** making one element too large or too small changes power.",
            "**Visible seam:** exposes the construction and invites analysis.",
            "**Hidden seam:** creates a convincing but impossible scene.",
            "**Repetition:** repeated imagery becomes rhythm or propaganda.",
            "**Caption:** anchors or contradicts the image's meaning.",
          ],
        },
      ],
      examinerTips: [
        "Show the storyboard beside the finished animation so the planning is visible.",
        "Explain frame rate as a creative choice, not only a technical specification.",
        "Describe how you kept the camera and lighting stable during stop-motion.",
        "Analyse a photomontage by naming what is juxtaposed and what that produces.",
        "Credit every source image and sound; examiners notice missing credits.",
      ],
      commonMistakes: [
        "Animating without a storyboard and losing the ending halfway through.",
        "Moving the tripod between frames and creating a visible jump.",
        "Using a frame rate that makes the motion either frantic or lifeless.",
        "Combining photographs with mismatched light directions and calling it surreal.",
        "Using found images without permission or credit.",
      ],
      recap: [
        "Explain the purpose of a storyboard in planning an animation. [3]",
        "Describe how stop-motion creates the illusion of movement. [3]",
        "Compare hand-drawn and digital animation workflows. [4]",
        "Analyse how juxtaposition creates meaning in a photomontage. [4]",
        "Discuss the ethical issues raised by using found photographs in collage. [4]",
      ],
    },
  ],
};

export const ART_DESIGN_CHAPTER_7 = chapterSeven;
