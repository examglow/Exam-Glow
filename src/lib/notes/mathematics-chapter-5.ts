import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/mathematics";

const panelA = imagePanel(IMG, [
  {
    src: "math5-tape-measure.webp",
    alt: "A steel tape measure pulled out across a workbench showing millimetre and centimetre graduations, with a machined metal bar resting on it",
    caption: "Millimetres in, centimetres out",
  },
  {
    src: "math5-trapezium-cut.webp",
    alt: "A paper trapezium cut into a rectangle and two right triangles on a desk, the pieces separated but still touching at their edges",
    caption: "Cut it into shapes you already know",
  },
]);

const panelB = imagePanel(IMG, [
  {
    src: "math5-circle-wheel-tape.webp",
    alt: "A measuring tape wrapped once around the rim of a bicycle wheel standing on a workshop floor",
    caption: "One lap is the circumference",
  },
  {
    src: "math5-sector-wedge.webp",
    alt: "A circular cake with one wedge cut and slid slightly outward, the two straight cut edges meeting at the centre",
    caption: "A slice is a fraction of 360°",
  },
]);

const panelC = imagePanel(IMG, [
  {
    src: "math5-wooden-solids.webp",
    alt: "A set of wooden geometry solids on a laboratory bench: cube, cuboid, cylinder, cone, pyramid and sphere, arranged in a row",
    caption: "Six solids, six formulas to place",
  },
  {
    src: "math5-frustum-cut.webp",
    alt: "A solid cone with its top sliced off by a horizontal cut, the smaller cone held above the remaining lampshade-shaped lower part",
    caption: "A frustum is a subtraction",
  },
]);

const chapterFive: Chapter = {
  number: 5,
  title: "Mensuration",
  intro: `Mensuration is arithmetic with units attached, so most lost marks are **conversion errors** and **formula recall**, not method.\n\nThe List of formulas on page 2 of the paper gives circle and solid formulas. It does **not** give the areas of a rectangle, parallelogram or trapezium — those are memory.`,
  subheadings: [
    {
      title: "Units, Perimeter and Area",
      body: `### Convert by the Square or the Cube

Use metric units of **mass, length, area, volume and capacity**: mm, cm, m, km; mm², cm², m², km²; mm³, cm³, m³; ml, l; g, kg.

Length steps by **10**, area by **100**, volume by **1000**. So 1 m² = **10 000 cm²**, 1 m³ = **1 000 000 cm³**, and 1 m³ = **1000 litres** while **1 cm³ = 1 ml**.

Calculate perimeter and area of a **rectangle (lw), triangle (½bh — this one is given), parallelogram (bh — perpendicular height, not the slant side) and trapezium (½(a + b)h)**.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Compound shapes and parts of shapes",
          bullets: [
            "Split an L-shaped or composite figure into rectangles, add the areas, and add **every** outer edge for the perimeter — the missing inner side is found by subtraction of the others.",
            "For a shape with a semicircle removed, subtract **both** the area and the straight edge, and add the **curved** half-circumference to the perimeter.",
            "Reverse questions appear: given the area and one dimension, find the other, often with units to convert first.",
          ],
        },
      ],
    },
    {
      title: "Circles, Arcs and Sectors",
      body: `### Everything Is a Fraction of 360°

**Circumference = 2πr** and **area = πr²**; answers may be required **in terms of π**, which means leave π symbolic and do not round.

**Arc length = (θ/360) × 2πr** and **sector area = (θ/360) × πr²**.

Core restricts sector angles to **factors of 360°**; Extended also uses **minor and major sectors**, so a reflex angle may be needed. Formulas for these are on the List of formulas.`,
      figure: panelB,
      groups: [
        {
          subTitle: "The three circle traps",
          bullets: [
            "Use **diameter** when the question gives diameter: r = d/2, and πd is the same circumference with one less step.",
            "A **segment** (chord-cut region) = sector − triangle; an **arc** is a length, a **sector** is an area. Mixing them changes which formula you use.",
            "If the angle is in the wrong place, the fraction is inverted: θ must be the **angle at the centre** subtended by that arc.",
          ],
        },
      ],
    },
    {
      title: "Surface Area and Volume of Solids",
      body: `### Given Formulas, Ungiven Choices

**Cuboid** V = lwh, SA = 2(lw + lh + wh). **Prism** (any uniform cross-section, including a cylindrical sector) V = **cross-sectional area × length**. **Cylinder** V = πr²h, CSA = 2πrh. **Sphere** V = **(4/3)πr³**, SA = **4πr²**. **Pyramid** V = **(1/3)Ah**. **Cone** V = **(1/3)πr²h**, CSA = **πrl**, where l is the **slant height**.

Solve problems with **compound solids and parts of solids** — halves, quarters and hemispheres — and at Extended with a **frustum**, by subtracting the small cone from the full cone.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Slant height and frustums",
          bullets: [
            "Cone CSA needs **l = √(r² + h²)** from Pythagoras; using the vertical height instead is the single most common mensuration error.",
            "For a frustum, restore the cut cone: use **similar triangles** to find its height, compute both volumes, then subtract. Surface area adds the **two circular ends** and the reduced curved part.",
            "Volumes of similar solids scale as **k³**, surface areas as **k²** — a question about two jelly beans or two balloons usually wants that, not the raw formula.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "A hemisphere's surface area is **3πr²** (curved 2πr² plus the circular base πr²), not half of 4πr².",
            "Read the unit asked: cm² versus m², litres versus cm³. Converting at the end is safer than converting every dimension.",
            "'In terms of π' means an exact answer — a decimal there loses the accuracy mark.",
            "Cost and capacity problems (paint tins, water tanks, tiles) require **rounding up** to a whole number of containers, and the working must say so.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_5 = chapterFive;
