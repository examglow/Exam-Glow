import type { Chapter } from "./types";

const chapterFive: Chapter = {
  number: 5,
  title: "Lengths, Areas, Volumes & Transformations",
  intro: `Mensuration and transformations are arithmetic with units attached, so most lost marks are **formula recall** and **choosing the wrong length** in a formula, not method.\n\nThis chapter covers perimeter, area, circle geometry, volumes and surface areas, then the four transformations and the ideas of **congruence** and **similarity** that tie them together.`,
  subheadings: [
    {
      title: "Perimeter",
      body: `The **perimeter** is the total length around the outside of a 2D shape. For a polygon you add every side together; for a rectangle there is the shortcut **P = 2(l + w)**. Units are always linear, such as cm or m.`,
      groups: [
        {
          subTitle: "Working out perimeters",
          bullets: [
            "**Polygon:** walk around the shape and add every side. If a side is not labelled, find it by subtracting from the longer parallel side.",
            "**Rectangle:** P = 2(l + w), because two lengths and two widths are present.",
            "**Square:** P = 4s, since all four sides are equal.",
            "**Regular polygon:** P = n × side length, where n is the number of sides.",
            "**Compound shapes:** only add the OUTER edges. A length running along the inside of the shape is not part of the perimeter.",
            "**Units** are always linear: cm, m, km. Square units belong to area, not perimeter.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Including an internal line (a wall inside an L-shape) in the perimeter. Trace the outside edge with your finger before adding.",
            "Forgetting a side that is not labelled. Subtract the labelled parallel sides to find it.",
            "Giving the answer in cm². Perimeter is a length, so its unit is cm, m or km.",
          ],
        },
      ],
    },
    {
      title: "Area",
      body: `**Area** measures the amount of surface inside a shape and is measured in square units. Each standard shape has its own formula, and the **height** in every one of them must be the **perpendicular height**, at right angles to the base.`,
      groups: [
        {
          subTitle: "The area formulas",
          bullets: [
            "**Rectangle:** A = l × w, the count of unit squares.",
            "**Triangle:** A = ½bh. Any side can be the base, but h must be the perpendicular height from that base.",
            "**Parallelogram:** A = bh, using the perpendicular height, never the slanted side.",
            "**Trapezium:** A = ½(a + b)h, where a and b are the two parallel sides and h is the distance between them.",
            "**Kite:** A = ½ × d₁ × d₂, where d₁ and d₂ are the two diagonals. The diagonals of a kite cross at right angles.",
            "**Perpendicular height** means the height meets the base at 90°; a slanted side length used as h gives a wrong answer.",
          ],
        },
        {
          subTitle: "Choosing and using the formulas",
          bullets: [
            "Identify the shape first, then write its formula before substituting, so the examiner can award the method mark.",
            "For a triangle, choose the base with the height you actually know; all three base-height pairs give the same area.",
            "A trapezium can be split into a rectangle and two triangles when you forget its formula, but the formula is faster.",
            "Convert all lengths to the same unit before multiplying, or the area comes out in the wrong unit.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Using the slant side of a parallelogram or triangle as the height. Check for the right angle between base and height.",
            "Halving when you should not (rectangle) or forgetting to halve (triangle, kite).",
            "Multiplying the two parallel sides of a trapezium and forgetting the ½(a + b)h structure.",
          ],
        },
      ],
    },
    {
      title: "Adding and Subtracting Areas",
      body: `A **compound shape** is built from shapes you already know. Split it into rectangles, triangles and other familiar parts, work out each area, then add them; for a shape with a **hole** or removed portion, subtract instead.`,
      groups: [
        {
          subTitle: "Compound areas",
          bullets: [
            "**Splitting:** cut the shape into rectangles, triangles, trapezia or circles you have formulas for.",
            "**Adding:** work out each part's area, then add them. State which part is which so the working is followable.",
            "**Subtracting:** for a hole, a path cut through a lawn, or a window in a wall, subtract the hole's area from the whole shape's area.",
            "**Perimeter of a compound shape:** add only the OUTER edges; internal boundaries are not part of the perimeter.",
            "Find missing lengths by comparing parallel sides before you start, so every dimension you need is known.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Adding the area of a line you split along. Splitting introduces no extra area, only extra working.",
            "Counting an internal edge (around a removed rectangle) as perimeter. Only the outer boundary counts.",
            "Double-counting an overlapping region when the parts share a piece. Split so the parts do not overlap.",
          ],
        },
      ],
    },
    {
      title: "Problem Solving with Areas",
      body: `Area questions turn into **equations** when the dimensions are algebraic. You write the area formula, substitute the expressions, and solve for the unknown — including **reverse problems** where the area is given and a length is wanted.`,
      groups: [
        {
          subTitle: "Setting up and solving",
          bullets: [
            "**Algebraic dimensions:** substitute the letter expressions into the formula, for example A = ½ × (x + 2) × x, then expand and simplify.",
            "**Reverse problems:** given the area, write the formula, substitute the area, and solve the equation for the missing length.",
            "**Forming an equation:** when two shapes have equal areas, set the two formulas equal and solve.",
            "Check the solution fits the geometry: lengths come out positive, and the shape is possible.",
          ],
        },
        {
          subTitle: "Scale factors for area",
          bullets: [
            "**Length scale factor k:** when every length is multiplied by k, the area is multiplied by **k²**.",
            "Doubling the lengths of a rectangle gives 2² = 4 times the area, not twice the area.",
            "Going backwards: if areas are in ratio 9 : 1, the lengths are in ratio 3 : 1, because k² = 9 gives k = 3.",
            "This is why doubling a photograph's width and height quadruples the paper it covers.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Scaling area by k instead of k². Square the linear scale factor for any area comparison.",
            "Solving the quadratic and accepting a negative root. A length cannot be negative.",
            "Mixing units inside one equation (cm with m) so the area comes out wrong by a factor of 100.",
          ],
        },
      ],
    },
    {
      title: "Area and Circumference of Circles",
      body: `The **circumference** is the distance around a circle and the **area** is the space inside it. Use **C = πd = 2πr** and **A = πr²**, and reach for the π button on the calculator rather than 3.14.`,
      groups: [
        {
          subTitle: "The two circle formulas",
          bullets: [
            "**Circumference:** C = πd = 2πr, a length measured in linear units.",
            "**Area:** A = πr², measured in square units.",
            "**Radius and diameter:** d = 2r. If the question gives the diameter, halve it before using πr².",
            "**π button:** use the calculator's π key; writing 3.14 loses the accuracy mark in a multi-step question.",
            "**In terms of π:** when the question asks for the answer in terms of π, leave π as a symbol, for example 25π cm², and do not convert to a decimal.",
          ],
        },
        {
          subTitle: "Semi and quarter circles",
          bullets: [
            "**Semicircle area:** half of πr². Its perimeter adds the diameter: πr + 2r, because the straight edge counts.",
            "**Quadrant:** a quarter of the area, with perimeter ½πr + 2r.",
            "Reverse problems: given the circumference, find r with r = C ÷ 2π, then find the area.",
            "Given the area, find r with r = √(A ÷ π), then the circumference if asked.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Using the diameter in πr². Halve the diameter to get r first.",
            "Squaring r and cubing nothing, or writing (2πr)². Only r is squared, and the 2 is not.",
            "Rounding to a decimal when the answer should be in terms of π; that costs the final accuracy mark.",
          ],
        },
      ],
    },
    {
      title: "Arc Lengths and Sector Areas",
      body: `An **arc** is a part of the circumference and a **sector** is a pie-slice area between two radii. Both are simply the **fraction θ/360** of the whole circle's circumference or area, where θ is the angle at the centre.`,
      groups: [
        {
          subTitle: "The two fraction formulas",
          bullets: [
            "**Arc length** = (θ/360°) × 2πr, a fraction of the circumference.",
            "**Sector area** = (θ/360°) × πr², a fraction of the whole circle's area.",
            "**θ is the angle at the centre** in degrees, formed by the two radii bounding the sector.",
            "**Perimeter of a sector** = arc length + 2r, because the two straight radii are part of the boundary.",
            "Rearranged forms: r = (arc length × 360) ÷ (2πθ) when the arc is given, and θ = (sector area × 360) ÷ πr² when the area is given.",
          ],
        },
        {
          subTitle: "Major and minor",
          bullets: [
            "The **minor sector** uses θ < 180°; the **major sector** uses 360° − θ as its angle.",
            "A major arc plus the two radii gives the major sector's perimeter; the same radius r runs through both formulas.",
            "Core questions keep θ a factor of 360° (60, 90, 120); Extended questions use any angle, including reflex ones.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Adding 2r when only the arc length is asked, or forgetting 2r when the sector's perimeter is asked. Read which is wanted.",
            "Using the sector area formula to find an arc, or the arc formula for an area. An arc is a length; a sector is an area.",
            "Taking θ from the wrong place. θ must be the angle at the centre, not an angle on the circumference.",
          ],
        },
      ],
    },
    {
      title: "Volume",
      body: `**Volume** measures the 3D space a solid occupies, in cubic units. Every prism-type solid is **cross-section × length**; the pyramid family needs a **⅓**; the sphere needs **(4/3)πr³**.`,
      groups: [
        {
          subTitle: "The volume formulas",
          bullets: [
            "**Cuboid:** V = lwh, the three edge lengths multiplied.",
            "**Prism:** V = area of cross-section × length, for any uniform solid — a triangular prism, a cylinder, even an L-shaped extrusion.",
            "**Cylinder:** V = πr²h, which is just the circular cross-section times the height.",
            "**Pyramid:** V = ⅓ × base area × height, with height measured perpendicular to the base.",
            "**Cone:** V = ⅓πr²h, the circular version of the pyramid rule.",
            "**Sphere:** V = (4/3)πr³, where r is cubed. A hemisphere is half of this.",
            "Capacity links the units: **1 cm³ = 1 ml** and **1 m³ = 1000 litres**.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Forgetting the ⅓ on a pyramid or cone, which triples the answer.",
            "Using the slant height of a cone where the perpendicular height belongs. Pythagoras converts between them: l² = r² + h².",
            "Squaring r in the sphere formula instead of cubing it.",
          ],
        },
      ],
    },
    {
      title: "Problem Solving with Volumes",
      body: `Volume questions combine the formulas with real situations: **composite solids**, water in containers, filling **rates**, and solids that are melted and recast. The strategy is always to write the volumes as expressions and then relate them.`,
      groups: [
        {
          subTitle: "Composite solids",
          bullets: [
            "**Adding:** for a solid built from parts, such as a cylinder with a cone on top, find each volume and add.",
            "**Subtracting:** for a solid with a hole drilled through it, subtract the hole's volume from the whole solid's.",
            "Halves and quarters of solids: a hemisphere is half a sphere, and a half-cylinder keeps its curved surface area formula's shape.",
            "At Extended, a **frustum** is the full cone's volume minus the removed small cone's, using similar triangles to find the missing height.",
          ],
        },
        {
          subTitle: "Liquids, rates and recasting",
          bullets: [
            "**Volume of water in a container:** a part-filled tank is a smaller similar solid, or simply the cross-section times the water's depth for a prism tank.",
            "**Rate of filling:** time = volume ÷ rate. Watch the units: litres per minute against a volume in cm³ must be reconciled first.",
            "**Melted and recast:** the metal or wax keeps its volume, so set the original solid's volume equal to the new solid's volume and solve.",
            "**Depth problems:** with a recast sphere into a wire, treat the wire as a long thin cylinder and equate volumes.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Setting the surface areas equal when a solid is recast. Volume is what is conserved.",
            "Forgetting 1000 cm³ = 1 litre when a rate is given in litres per minute.",
            "Rounding down when the question needs a whole number of minutes to fill a tank; time must be rounded up.",
          ],
        },
      ],
    },
    {
      title: "Surface Area",
      body: `**Surface area** is the total area of all the faces of a solid, in square units. The formulas change with the solid, and the biggest decision is whether the solid is **open or closed**.`,
      groups: [
        {
          subTitle: "The surface area formulas",
          bullets: [
            "**Cuboid:** SA = 2(lw + lh + wh), the three pairs of identical faces.",
            "**Cylinder:** closed, SA = 2πr² + 2πrh (two circles plus the curved wall). An open tube has only the curved part; one closed end gives πr² + 2πrh.",
            "**Cone:** SA = πrl + πr², where **l is the slant height**, found from l = √(r² + h²).",
            "**Sphere:** SA = 4πr². A **hemisphere** open on its flat face has 2πr² + πr² = 3πr².",
            "**Open or closed:** read the question. A tank with no lid, a hollow pipe, a tin with a lid removed — each loses a face from the total.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Using the perpendicular height h in the cone's πrl. The slant height l is the one on the surface.",
            "Giving a closed cylinder's answer for an open container, or vice versa.",
            "Halving a sphere's 4πr² for a hemisphere and forgetting the flat circular face. It is 3πr², not 2πr².",
          ],
        },
      ],
    },
    {
      title: "Congruence",
      body: `Two shapes are **congruent** if they are exactly the same shape **and** the same size — matching sides and matching angles are equal. Congruent shapes may still be **reflected, rotated or translated** relative to each other.`,
      groups: [
        {
          subTitle: "Congruent triangles",
          bullets: [
            "**SSS:** three pairs of sides equal.",
            "**SAS:** two pairs of sides equal with the angle between them equal.",
            "**ASA:** one pair of sides equal with both adjacent angles equal.",
            "**AAS:** two angles and any corresponding side equal.",
            "**RHS:** right angle, hypotenuse and one other side equal, for right-angled triangles.",
            "Each condition must apply to **corresponding** parts of the two triangles, not just any parts.",
          ],
        },
        {
          subTitle: "Using congruence",
          bullets: [
            "State the condition by name and list the equal pairs in the same order for both triangles; the mark is for the reasoning.",
            "Congruence follows from a **transformation**: a translated, reflected or rotated copy is congruent to the original.",
            "In shapes made of triangles, congruence proves equal sides, which then feeds into symmetry and circle arguments.",
            "Congruent shapes have equal areas as well as equal sides and angles.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Claiming congruence from AAA. Equal angles alone prove similarity, not congruence.",
            "Mixing SSA as a condition; two different triangles can share two sides and a non-included angle.",
            "Not matching corresponding vertices when writing the congruence statement; order matters.",
          ],
        },
      ],
    },
    {
      title: "Similarity",
      body: `Two shapes are **similar** if one is an **enlargement** of the other: all angles equal and corresponding sides in the same ratio. The constant of proportionality is the **scale factor k**.`,
      groups: [
        {
          subTitle: "Defining and testing similarity",
          bullets: [
            "**Similar shapes:** same angles, proportional sides. Any regular hexagons are similar; any two circles are similar.",
            "**Scale factor:** k = corresponding side in the image ÷ corresponding side in the original.",
            "k > 1 means an enlargement; **0 < k < 1** means the image is smaller than the original.",
            "Testing triangles: equal angles are enough, because the sides then follow automatically.",
            "For polygons, check both equal angles and proportional sides; one without the other is not enough.",
          ],
        },
        {
          subTitle: "Beyond lengths",
          bullets: [
            "**Areas** of similar shapes scale by **k²**.",
            "**Volumes** of similar solids scale by **k³**; surface areas by k².",
            "Similar shapes with k = 1 are congruent — congruence is the special case of similarity.",
            "In similar triangle diagrams, match vertices in order (top with top, base with base) before reading off corresponding sides.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Saying two shapes are congruent when only their angles match. They are similar, not necessarily congruent.",
            "Scaling volume by k² or area by k. Match the power to the dimension: lengths k, areas k², volumes k³.",
            "Reading corresponding sides from the wrong ends of the two triangles. Mark equal angles first, then pair the sides between them.",
          ],
        },
      ],
    },
    {
      title: "Similar Lengths",
      body: `Once similarity is established, the **linear scale factor** converts every length. Identify the pair of corresponding sides you know, find k, then multiply or divide the given length by k.`,
      groups: [
        {
          subTitle: "Finding unknown lengths",
          bullets: [
            "**Scale factor first:** k = known side in the image ÷ corresponding known side in the original.",
            "**Unknown = known × scale factor** for lengths in the enlarged shape; divide by k to go back to the original.",
            "**Matching corresponding sides:** mark the equal angles, then pair the sides lying between the same pairs of angles.",
            "For a pair of similar triangles inside a bigger diagram, write the two triangles out separately with their vertices in order before taking ratios.",
            "Check with ratios: image side / original side must give the same k for every pair you use.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Pairing a base with a slant side. Corresponding sides sit between corresponding angles.",
            "Multiplying when the shape is getting smaller. For 0 < k < 1, multiplying by k makes it smaller, so dividing by k would enlarge it wrongly.",
            "Using area ratios as length ratios. Take the square root of the area ratio to get a length ratio.",
          ],
        },
      ],
    },
    {
      title: "Translations",
      body: `A **translation** slides every point of a shape by the same distance in the same direction. The movement is described by the **column vector** (a, b): a is the horizontal shift and b the vertical shift.`,
      groups: [
        {
          subTitle: "Using the column vector",
          bullets: [
            "**Vector (a, b):** add a to every x-coordinate and b to every y-coordinate.",
            "**Positive a** moves right, **negative a** left; **positive b** moves up, **negative b** down.",
            "The image is **congruent** to the original: same size, same shape, same orientation.",
            "The vector from a point to its image is the same for every point of the shape.",
            "To reverse a translation, apply (−a, −b).",
          ],
        },
        {
          subTitle: "Describing a translation",
          bullets: [
            "A full description gives the **column vector**, written as a vector in brackets.",
            "To find the vector between a point and its image, subtract: (image − original), coordinate by coordinate.",
            "Vectors are equal when they have the same components, which is why the whole shape moves together.",
            "On a grid, count squares across then up, and put signs on both numbers before writing the vector.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Swapping a and b, or forgetting the negative for a leftward or downward move.",
            "Describing the translation in words only; the mark needs the column vector.",
            "Changing the shape's size or turning it. A translation only slides.",
          ],
        },
      ],
    },
    {
      title: "Reflections",
      body: `A **reflection** flips a shape in a **mirror line**, producing a mirror image at the same perpendicular distance on the other side. The image is congruent to the original but its **orientation is reversed**.`,
      groups: [
        {
          subTitle: "Reflecting in the standard lines",
          bullets: [
            "**x-axis:** keep the x-coordinate, change the sign of the y-coordinate.",
            "**y-axis:** change the sign of the x-coordinate, keep the y-coordinate.",
            "**y = x:** swap the coordinates, (a, b) → (b, a).",
            "**y = −x:** swap and negate, (a, b) → (−b, −a).",
            "A point on the mirror line stays fixed; the mirror line is the perpendicular bisector of every point-image join.",
            "For a diagonal like y = x + 2, count the perpendicular distance to the line and repeat it on the other side.",
          ],
        },
        {
          subTitle: "Describing a reflection",
          bullets: [
            "A full description gives the transformation as a reflection **and** the equation of the mirror line.",
            "Distance to the mirror line is measured **perpendicular** to it, not vertically unless the line is horizontal.",
            "The image has opposite orientation (it cannot be obtained by sliding or turning), which is how you recognise a reflection in a mixed question.",
            "A reflection in the same line twice returns the original shape.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Negating the wrong coordinate for the x-axis versus the y-axis.",
            "For y = x, adding a sign change instead of swapping the coordinates.",
            "Giving only 'reflection' without the mirror line's equation; the description is incomplete without it.",
          ],
        },
      ],
    },
    {
      title: "Rotations",
      body: `A **rotation** turns a shape about a fixed **centre of rotation** through a given **angle** and **direction**. The image is congruent to the original and keeps its orientation order, unlike a reflection.`,
      groups: [
        {
          subTitle: "Specifying a rotation",
          bullets: [
            "A full description gives the **angle**, the **direction** (clockwise or anticlockwise) and the **centre of rotation**.",
            "A 180° rotation needs no direction, because clockwise and anticlockwise give the same result.",
            "Every point stays at the same distance from the centre; only its direction around the centre changes.",
            "The centre of rotation may lie outside the shape, on the shape, or at a vertex of it.",
          ],
        },
        {
          subTitle: "Finding the centre",
          bullets: [
            "**Tracing paper:** trace the shape, guess a centre, rotate the tracing, and adjust the guess until the tracing covers the image.",
            "**Perpendicular bisectors:** join a vertex to its image and construct the perpendicular bisector; repeat with a second pair. The intersection is the centre.",
            "Angles at the centre: the angle between a point, the centre and that point's image equals the rotation angle.",
            "Check the centre by rotating one vertex of the original through the stated angle and confirming it lands on its image.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Leaving out the centre (or the direction) when describing the rotation; both carry marks.",
            "Turning through the wrong angle because the direction was misread, 90° clockwise instead of anticlockwise.",
            "Using the shape's own corner as the centre when the rotation is about the origin.",
          ],
        },
      ],
    },
    {
      title: "Enlargements",
      body: `An **enlargement** stretches a shape away from a fixed **centre of enlargement** by a **scale factor k**. Every distance from the centre is multiplied by k, so the image is similar to the original.`,
      groups: [
        {
          subTitle: "Drawing an enlargement",
          bullets: [
            "**Scale factor k:** multiply each vertex's distance from the centre by k, keeping the same ray from the centre.",
            "Draw rays from the centre through each vertex; the image vertex sits at k times the distance along the ray.",
            "**Positive k:** the image lies on the same side of the centre as the original, same way up.",
            "**0 < k < 1:** the image is smaller than the original — still called an enlargement.",
            "Side lengths scale by k, so check by measuring: image side = original side × k.",
          ],
        },
        {
          subTitle: "Negative and fractional scale factors (Extended)",
          bullets: [
            "**Negative k:** the image lies on the opposite side of the centre and is upside down relative to the original.",
            "A k of −2 behaves like 2 for lengths, with the image on the far side of the centre, rotated through 180°.",
            "Finding k from a drawn pair: k = image side ÷ original side, with a negative sign when the image is on the opposite side of the centre.",
            "Finding the centre: draw lines through corresponding vertices of shape and image; they meet at the centre of enlargement.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Multiplying the coordinates instead of the distances from the centre. Only for centre (0, 0) does that coincide.",
            "Forgetting to state the centre and the scale factor when describing an enlargement; the description needs both.",
            "Assuming a negative k makes a smaller image. It is |k| that controls the size; the sign controls the side.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_5 = chapterFive;
export const MATHEMATICS_CHAPTERS_5: Chapter[] = [chapterFive];
