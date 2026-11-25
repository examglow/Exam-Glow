import type { Chapter } from "../lib/notes/types";

// mathematics-chapter-6.ts — chapters 95–110 (Lengths, Areas & Volumes + Transformations)
export const MATHEMATICS_CHAPTERS_6: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // 95. Perimeter
  // ─────────────────────────────────────────────────────────────
  {
    number: 95,
    title: "Perimeter",
    section: "Lengths, Areas & Volumes",
    topic: "Perimeter & Area",
    intro: `The **perimeter** of a shape is the total distance around its boundary — the sum of all its side lengths. Calculating perimeters appears throughout IGCSE examinations, from simple polygons to compound shapes and sectors. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Perimeter",
        body: `**Perimeter** is the total length of the boundary of a 2D shape. For polygons, add all the side lengths together. For a **rectangle** with length l and width w: P = 2(l + w). For a **square** with side s: P = 4s. For a **regular polygon** with n sides each of length l: P = nl.\n\nFor **compound shapes**, add the outer edges only — do not include any internal lines. Break the shape into recognisable pieces to find unknown side lengths first, then sum all outer edges.\n\n**Example:** a compound L-shape has an outer boundary of sides measuring 8, 5, 3, 2, 5, and 3 cm. Perimeter = 8 + 5 + 3 + 2 + 5 + 3 = **26 cm**.\n\nFor a **semicircle** attached to a rectangle, the perimeter includes the diameter's straight edge replaced by the arc length: arc = πr. Add the two straight sides and the arc.`,
        groups: [
          {
            subTitle: "Standard perimeter formulas",
            bullets: [
              "**Rectangle:** P = 2(l + w) — add length and width, then double.",
              "**Square:** P = 4s — multiply one side by 4.",
              "**Triangle:** P = a + b + c — sum of all three sides.",
              "**Regular polygon:** P = n × l where n is the number of sides and l is the side length.",
              "**Semicircle (diameter d):** P = πr + d = πd/2 + d — the curved arc plus the straight diameter.",
            ],
          },
          {
            subTitle: "Finding perimeters of compound shapes",
            bullets: [
              "**Identify all outer edges:** only edges forming the boundary count — not internal dividing lines.",
              "**Find missing lengths:** use known lengths to deduce unknown sides by addition or subtraction.",
              "**Example:** if the full width is 10 cm and a notch 4 cm wide is cut, the two shorter horizontal sides add to 10 cm.",
              "**Curved boundaries:** replace any curved edge with its arc length formula before summing.",
              "**Units:** always state the unit (cm, m, mm) — a perimeter without a unit loses the final mark.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Including internal lines:** a compound shape split into two rectangles has an internal line; do not add it to the perimeter.",
              "**Forgetting both pairs in a rectangle:** P = 2(l + w), not l + w.",
              "**Using diameter instead of radius in arc length:** arc length = πr, not πd.",
              "**Not deducing missing sides:** always work out every side length before attempting to sum.",
            ],
          },
        ],
        examinerTips: [
          "Label every side on the diagram, including deduced lengths, before adding — this prevents missing a side.",
          "For a shape with a curved boundary, write the arc length formula first, substitute, then add to the straight sides.",
          "Check that the number of edges you have added matches the number of sides the shape actually has.",
          "Give the answer to the same precision as the data (usually 3 significant figures for IGCSE unless a different rounding is requested).",
        ],
        commonMistakes: [
          "Adding the diagonal or internal cut line of a compound shape to the perimeter — only boundary edges count.",
          "Using P = l + w instead of P = 2(l + w) for a rectangle, halving the correct answer.",
          "Confusing perimeter (length) with area (length squared) — check units: perimeter is in cm, area in cm².",
        ],
        recap: [
          "Find the perimeter of a rectangle with length 12 cm and width 7 cm. [1]",
          "A regular hexagon has a perimeter of 54 cm. Find the length of one side. [1]",
          "A compound L-shaped figure has outer sides of 10 cm, 6 cm, 4 cm, 2 cm, 6 cm, and 4 cm. Find its perimeter. [2]",
          "A semicircle has diameter 10 cm. Find the total perimeter of the semicircle, giving your answer in terms of π. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 96. Area
  // ─────────────────────────────────────────────────────────────
  {
    number: 96,
    title: "Area",
    section: "Lengths, Areas & Volumes",
    topic: "Perimeter & Area",
    intro: `Area measures the amount of 2D space enclosed by a shape, expressed in square units. IGCSE questions test the area formulas for rectangles, triangles, parallelograms, trapeziums, and circles, often in multi-step problems. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Area",
        body: `**Area** is the amount of surface enclosed by a 2D boundary, measured in square units (cm², m²). Each standard shape has a dedicated formula:\n\n- **Rectangle:** A = lw\n- **Triangle:** A = ½bh where b is the base and h is the **perpendicular** height\n- **Parallelogram:** A = bh where h is the perpendicular height (not the slant side)\n- **Trapezium:** A = ½(a + b)h where a and b are the two parallel sides and h is the perpendicular height\n- **Circle:** A = πr²\n\n**Example — trapezium:** parallel sides 5 cm and 9 cm, perpendicular height 4 cm: A = ½(5 + 9) × 4 = ½ × 14 × 4 = **28 cm²**.\n\nFor the **triangle**, always use the perpendicular height, not a slant side. If only three side lengths are given, use **Heron's formula**: A = √(s(s−a)(s−b)(s−c)) where s = (a+b+c)/2.`,
        groups: [
          {
            subTitle: "Area formulas to memorise",
            bullets: [
              "**Rectangle:** A = l × w — length times width.",
              "**Triangle:** A = ½ × base × perpendicular height.",
              "**Parallelogram:** A = base × perpendicular height (not slant height).",
              "**Trapezium:** A = ½ × (sum of parallel sides) × perpendicular height.",
              "**Circle:** A = πr² — always use radius (half the diameter).",
            ],
          },
          {
            subTitle: "Identifying the correct height",
            bullets: [
              "**Perpendicular height:** always the vertical distance between the base and the opposite vertex or side — never the slant.",
              "**Right-angled triangles:** one leg is the base, the other is the height — use A = ½ × leg₁ × leg₂.",
              "**Parallelogram:** the height is the perpendicular distance between the two parallel sides, not the length of the slant sides.",
              "**Trapezium:** h is perpendicular between the two parallel sides a and b.",
              "**Using trigonometry:** if height is not given directly, find it using sin: h = a × sin(θ).",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using slant height instead of perpendicular height** in triangle and parallelogram formulas — always check which measurement is marked as height.",
              "**Forgetting the ½ in the triangle formula** — A = bh (without ½) gives the area of a parallelogram.",
              "**Using diameter instead of radius** in the circle formula — square the radius, not the diameter.",
              "**Wrong units:** area must be in square units — cm², not cm.",
            ],
          },
        ],
        examinerTips: [
          "Write the formula before substituting values — this earns a method mark and keeps working organised.",
          "Circle the perpendicular height on the diagram; it is often shown with a small square at 90°.",
          "For circles, check whether the question gives radius or diameter before substituting into A = πr².",
          "Round area answers to 3 significant figures unless the question specifies otherwise.",
        ],
        commonMistakes: [
          "Using the slant side of a parallelogram or triangle as the height — the height must be perpendicular to the base.",
          "Forgetting to square the radius: A = π × r², not A = π × r.",
          "Giving area in linear units (cm) rather than square units (cm²).",
        ],
        recap: [
          "Find the area of a triangle with base 8 cm and perpendicular height 5 cm. [1]",
          "A trapezium has parallel sides of 6 cm and 10 cm and a perpendicular height of 4 cm. Find its area. [2]",
          "Find the area of a circle with radius 7 cm, giving your answer in terms of π. [1]",
          "A parallelogram has a base of 9 m and a perpendicular height of 4 m. Find its area. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 97. Adding & Subtracting Areas
  // ─────────────────────────────────────────────────────────────
  {
    number: 97,
    title: "Adding & Subtracting Areas",
    section: "Lengths, Areas & Volumes",
    topic: "Perimeter & Area",
    intro: `Compound shapes are formed by joining or cutting standard shapes together. Finding their areas requires splitting the shape into recognisable pieces and adding or subtracting the individual areas. This technique applies to any combination of rectangles, triangles, circles, and other polygons. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Adding & Subtracting Areas",
        body: `A **compound shape** is made by combining two or more standard shapes. The strategy is:\n1. Divide the shape into standard pieces (rectangles, triangles, semicircles, etc.).\n2. Find the dimensions of each piece — often by deducing missing lengths from given information.\n3. Calculate each individual area.\n4. Add areas for shapes joined together; subtract the smaller area from the larger if a piece is cut out.\n\n**Example — adding:** an L-shape can be split into two rectangles. Rectangle 1: 8 × 5 = 40 cm². Rectangle 2: 3 × 4 = 12 cm². Total = **52 cm²**.\n\n**Example — subtracting:** a rectangular field (12 × 8 m) has a circular pond (radius 2 m) in the middle. Shaded area = area of rectangle − area of circle = 96 − 4π ≈ **83.4 m²**.`,
        groups: [
          {
            subTitle: "Method for compound shapes",
            bullets: [
              "**Sketch and label:** mark all known lengths on the diagram and deduce any missing ones before starting calculations.",
              "**Choose the split:** decide whether it is easier to add two smaller shapes or subtract a cut-out from a larger shape.",
              "**Calculate each part:** apply the correct formula to each individual shape.",
              "**Combine:** add or subtract the parts as appropriate.",
              "**Check units:** the final answer must be in square units consistent with the given measurements.",
            ],
          },
          {
            subTitle: "Common shape combinations",
            bullets: [
              "**L-shape:** split into two or three rectangles; ensure no region is counted twice.",
              "**Rectangle with circular hole:** A = rectangle area − circle area; use r = diameter/2 for the circle.",
              "**Semi-circle on a rectangle:** A = rectangle area + (1/2)πr²; the radius equals half the width of the rectangle.",
              "**Triangle on top of a rectangle:** A = rectangle area + triangle area; the triangle base equals the rectangle width.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Overlapping regions:** when adding shapes, make sure no area is counted twice.",
              "**Wrong dimensions for a piece:** always re-label each piece's dimensions after splitting — a sub-rectangle may have a different length than the whole shape.",
              "**Forgetting to subtract:** shade the region in question and ask whether each standard piece is inside or outside the required area.",
              "**Units mismatch:** if some lengths are in cm and others in m, convert to the same unit before calculating.",
            ],
          },
        ],
        examinerTips: [
          "Draw dotted lines on the diagram to show your split, and label the sub-shapes — this makes working clear to examiners.",
          "When a shape has a cut-out, calculate the outer shape's area first, then subtract the inner shape.",
          "Always state which formula you are using for each sub-shape.",
          "If a question asks for the shaded area, identify whether the shaded region requires addition or subtraction before calculating.",
        ],
        commonMistakes: [
          "Adding the total area of a large rectangle when only a portion of it belongs to the compound shape.",
          "Miscalculating a missing side length — always check that horizontal totals and vertical totals are consistent.",
          "Using the full circle area instead of the semicircle area (½πr²) when only half a circle is involved.",
        ],
        recap: [
          "An L-shaped figure measures 10 cm × 7 cm overall with a 4 cm × 3 cm rectangle removed from one corner. Find its area. [3]",
          "A rectangle 15 m × 8 m has a semicircle of diameter 8 m removed from one end. Find the remaining area, giving your answer to 3 significant figures. [3]",
          "A shape is formed by placing a triangle of base 6 cm and height 4 cm on top of a rectangle 6 cm × 5 cm. Find the total area. [2]",
          "A circular disc of radius 3 cm is cut from a square piece of card of side 8 cm. Find the area of card remaining, in terms of π. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 98. Problem Solving with Areas
  // ─────────────────────────────────────────────────────────────
  {
    number: 98,
    title: "Problem Solving with Areas",
    section: "Lengths, Areas & Volumes",
    topic: "Perimeter & Area",
    intro: `Area problems in IGCSE examinations go beyond straight substitution into a formula — they require setting up equations, working backwards from a given area to find a missing dimension, or applying area formulas within multi-step real-world contexts. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Problem Solving with Areas",
        body: `Many IGCSE area questions give the area and ask for a missing length, or embed area in a context requiring algebra. The strategy is to write the area formula, substitute the known values, then solve for the unknown.\n\n**Example 1 — reverse calculation:** A rectangle has area 48 cm² and length 8 cm. Find the width. A = lw → 48 = 8 × w → w = **6 cm**.\n\n**Example 2 — forming an equation:** A triangle has base (2x + 1) cm and height x cm, and an area of 15 cm². ½(2x + 1)(x) = 15 → x(2x + 1) = 30 → 2x² + x − 30 = 0 → (2x − 7·...) — solve by factorising or quadratic formula.\n\n**Example 3 — cost from area:** carpet costs £12 per m². A room is 4.5 m × 3.2 m. Area = 14.4 m². Cost = 14.4 × 12 = **£172.80**.\n\nAlways check that your answer is dimensionally consistent and reasonable in context.`,
        groups: [
          {
            subTitle: "Working backwards from area",
            bullets: [
              "**Find a missing side:** write the area formula, substitute the known side and the given area, then solve for the unknown.",
              "**Rectangle:** if A = lw and A and l are known, w = A/l.",
              "**Triangle:** if A = ½bh and A and b are known, h = 2A/b.",
              "**Circle:** if A = πr² and A is known, r = √(A/π).",
              "**Parallelogram:** if A = bh and A and h are known, b = A/h.",
            ],
          },
          {
            subTitle: "Setting up equations from area",
            bullets: [
              "**Express dimensions algebraically:** if one side is x and another is (x + 3), write the area formula in terms of x.",
              "**Set equal to the given area:** e.g. x(x + 3) = 40 → x² + 3x − 40 = 0.",
              "**Solve the equation:** factorise, complete the square, or use the quadratic formula.",
              "**Reject negative lengths:** a length must be positive — discard negative solutions.",
              "**Cost and tiling problems:** total cost = area × cost per unit area; number of tiles = total area ÷ area per tile (round up for whole tiles).",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Not rejecting negative solutions:** both solutions of a quadratic may be valid mathematically, but a negative length is physically impossible.",
              "**Rounding too early:** keep exact values through the working and round only the final answer.",
              "**Tiles and coverage:** always round the number of tiles up (ceiling), not to the nearest whole number.",
              "**Unit conversion before cost:** if area is in cm² but cost is per m², convert to m² first.",
            ],
          },
        ],
        examinerTips: [
          "Start by writing the area formula, then identify which quantities are known and which is the unknown.",
          "In algebraic area questions, expand and rearrange to standard form ax² + bx + c = 0 before solving.",
          "Show the rejection of negative solutions explicitly — write 'x > 0 so x = …' to earn the full mark.",
          "In context problems (cost, tiling), read whether you need an exact answer or a practical whole-number answer.",
        ],
        commonMistakes: [
          "Keeping a negative root as a valid dimension — always check the context requires a positive value.",
          "Forgetting to round the number of tiles or rolls of wallpaper up — you cannot buy a fraction of a tile.",
          "Calculating area in the wrong units before multiplying by a price — ensure consistent units throughout.",
        ],
        recap: [
          "A rectangle has area 60 cm² and length 12 cm. Find the width. [1]",
          "A triangle has base (x + 2) cm and height x cm and an area of 24 cm². Form an equation and solve it to find x. [4]",
          "Tiles measuring 20 cm × 20 cm are needed to cover a floor 3.6 m × 2.4 m. How many tiles are needed? [3]",
          "A circle has area 50π cm². Find its radius and hence its circumference in terms of π. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 99. Area & Circumference of Circles
  // ─────────────────────────────────────────────────────────────
  {
    number: 99,
    title: "Area & Circumference of Circles",
    section: "Lengths, Areas & Volumes",
    topic: "Circles & Sectors",
    intro: `The two fundamental circle formulas — circumference C = 2πr and area A = πr² — appear in almost every IGCSE geometry paper, often embedded in multi-step problems involving sectors, annuli, or compound shapes. Mastering these formulas and knowing when to use diameter versus radius is essential. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Area & Circumference of Circles",
        body: `A **circle** is defined as all points equidistant from a fixed centre. The key measurements are:\n- **Radius (r):** distance from centre to circumference.\n- **Diameter (d):** distance across the circle through the centre; d = 2r.\n- **Circumference (C):** the perimeter of the circle.\n- **Area (A):** the region enclosed by the circle.\n\n**Circumference:** C = 2πr = πd. Use C = πd when the diameter is given directly.\n\n**Area:** A = πr². Always use the radius — if given the diameter, halve it first.\n\n**Example 1:** circle of radius 5 cm: C = 2π(5) = 10π ≈ 31.4 cm; A = π(5²) = 25π ≈ 78.5 cm².\n\n**Example 2:** circle of diameter 14 cm: r = 7 cm; C = 2π(7) = 14π ≈ 44.0 cm; A = π(7²) = 49π ≈ 154 cm².\n\n**Annulus (ring):** the area between two concentric circles with radii R and r is A = π(R² − r²) = π(R+r)(R−r).`,
        groups: [
          {
            subTitle: "Circle formula summary",
            bullets: [
              "**Circumference:** C = 2πr = πd — use whichever form matches the given information.",
              "**Area:** A = πr² — always requires the radius; convert diameter to radius first.",
              "**Finding radius from circumference:** r = C/(2π).",
              "**Finding radius from area:** r = √(A/π).",
              "**Annulus area:** A = π(R² − r²) where R is the outer radius and r is the inner radius.",
            ],
          },
          {
            subTitle: "Exact answers vs decimal approximations",
            bullets: [
              "**Leaving answers in terms of π:** write 25π cm² instead of 78.539… cm² when the question asks for an exact answer.",
              "**Using a calculator:** press the π button — do not use 3.14 unless specified, as it introduces rounding error.",
              "**Rounding:** round to 3 significant figures unless the question states otherwise.",
              "**Reverse calculations:** if C = 31.4, then r = 31.4/(2π) ≈ 5.00 cm.",
              "**Unit consistency:** circumference is in linear units (cm); area is in square units (cm²).",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using diameter instead of radius in A = πr²:** if the diameter is 10 cm, r = 5 cm; area = 25π, not 100π.",
              "**Confusing circumference and area:** circumference answers are in cm; area answers are in cm².",
              "**Using 3.14 for π on a calculator paper:** always use the π key to avoid rounding errors.",
              "**Forgetting to square the radius:** A = πr² requires r to be squared before multiplying by π.",
            ],
          },
        ],
        examinerTips: [
          "If the question gives the diameter, write r = d/2 as your first step — this single step prevents the most common error.",
          "When a question asks for an 'exact' answer, leave it in terms of π (e.g. 36π cm²) rather than converting to a decimal.",
          "For reverse problems (find r given C or A), show the rearrangement step clearly.",
          "Check units at the end: perimeter/circumference → cm or m; area → cm² or m².",
        ],
        commonMistakes: [
          "Squaring the diameter instead of the radius in A = πr² — always halve the diameter first.",
          "Using C = πr² (the area formula) for the circumference, mixing up the two formulas.",
          "Forgetting the ² on the units for area: 25π cm, not 25π cm².",
        ],
        recap: [
          "Find the circumference and area of a circle with radius 6 cm. Give your answers in terms of π. [2]",
          "A circle has circumference 40π cm. Find its area in terms of π. [3]",
          "An annulus has outer radius 10 cm and inner radius 6 cm. Find its area, giving your answer to 3 significant figures. [3]",
          "A circular pond has area 78.5 m². Calculate the diameter of the pond, giving your answer to 3 significant figures. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 100. Arc Lengths & Sector Areas
  // ─────────────────────────────────────────────────────────────
  {
    number: 100,
    title: "Arc Lengths & Sector Areas",
    section: "Lengths, Areas & Volumes",
    topic: "Circles & Sectors",
    intro: `A sector is a 'pizza slice' of a circle, bounded by two radii and an arc. Its arc length and area are fractions of the full circle's circumference and area, determined by the angle at the centre. These formulas are frequently tested at IGCSE, often combined with perimeter and area questions. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Arc Lengths & Sector Areas",
        body: `A **sector** is the region bounded by two radii and the arc between them. The **angle at the centre** is θ (in degrees). Since a full circle corresponds to 360°, a sector is a fraction θ/360 of the whole circle.\n\n**Arc length:** l = (θ/360) × 2πr\n\n**Sector area:** A = (θ/360) × πr²\n\n**Example:** a sector with radius 8 cm and angle 135°:\n- Arc length = (135/360) × 2π(8) = (3/8) × 16π = 6π ≈ **18.8 cm**\n- Sector area = (135/360) × π(8²) = (3/8) × 64π = 24π ≈ **75.4 cm²**\n\n**Perimeter of a sector:** add the arc length to both radii: P = l + 2r = 6π + 16 ≈ **34.8 cm**.\n\n**Working in radians (Extended):** arc length = rθ; sector area = ½r²θ, where θ is measured in radians.`,
        groups: [
          {
            subTitle: "Sector formulas",
            bullets: [
              "**Arc length:** l = (θ/360) × 2πr — the fraction of the full circumference.",
              "**Sector area:** A = (θ/360) × πr² — the fraction of the full circle area.",
              "**Perimeter of sector:** P = arc length + 2r — include both straight radii.",
              "**Semicircle (θ = 180):** arc length = πr; sector area = ½πr².",
              "**Quarter circle (θ = 90):** arc length = ½πr; sector area = ¼πr².",
            ],
          },
          {
            subTitle: "Finding unknown angle or radius from arc/area",
            bullets: [
              "**Find θ from arc length:** θ = (l × 360)/(2πr) — rearrange the arc length formula.",
              "**Find r from sector area:** r = √(360A/(πθ)) — rearrange and take the square root.",
              "**Check result:** once you find θ or r, substitute back to verify the formula gives the stated arc/area.",
              "**Non-calculator:** simplify the fraction θ/360 first, e.g. 120/360 = 1/3, to keep arithmetic manageable.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Forgetting to add the two radii to the arc length** when calculating the perimeter of a sector.",
              "**Using diameter instead of radius** in arc and sector formulas.",
              "**Applying the full circle formula** without multiplying by θ/360 — always scale by the angle fraction.",
              "**Rounding the fraction θ/360 prematurely:** simplify it as a fraction first to retain accuracy.",
            ],
          },
        ],
        examinerTips: [
          "Write the full formula first, then simplify the fraction θ/360 before substituting r — this reduces arithmetic errors.",
          "For sector perimeter, explicitly write P = arc + r + r so you do not forget the two radii.",
          "If asked for an exact answer, leave as a multiple of π rather than converting to a decimal.",
          "Check whether the question asks for arc length, sector area, or perimeter — they are three different things and are regularly confused.",
        ],
        commonMistakes: [
          "Calculating sector area but only the arc length is asked for — read the question carefully.",
          "Computing θ/360 × 2πr² instead of θ/360 × πr² — the area formula uses πr², not 2πr².",
          "Forgetting the two radii when the question asks for the perimeter of the sector.",
        ],
        recap: [
          "A sector has radius 10 cm and angle 72°. Find its arc length and area, giving your answers in terms of π. [4]",
          "Find the perimeter of a sector with radius 6 cm and angle 120°, giving your answer to 3 significant figures. [3]",
          "A sector has arc length 15π cm and radius 18 cm. Find the angle at the centre. [3]",
          "A sector has area 48π cm² and angle 135°. Find the radius. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 101. Volume
  // ─────────────────────────────────────────────────────────────
  {
    number: 101,
    title: "Volume",
    section: "Lengths, Areas & Volumes",
    topic: "Volume & Surface Area",
    intro: `Volume measures the amount of 3D space a solid occupies, expressed in cubic units. IGCSE examinations test the volume formulas for prisms, cylinders, pyramids, cones, and spheres — often in multi-step or reverse-calculation problems. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Volume",
        body: `**Volume** is the amount of 3D space enclosed by a solid, measured in cubic units (cm³, m³).\n\nKey formulas:\n- **Cuboid:** V = l × w × h\n- **Prism (any cross-section):** V = cross-sectional area × length\n- **Cylinder:** V = πr²h (a prism with circular cross-section)\n- **Pyramid:** V = ⅓ × base area × height\n- **Cone:** V = ⅓πr²h\n- **Sphere:** V = (4/3)πr³\n\n**Example — cylinder:** radius 4 cm, height 10 cm: V = π(4²)(10) = 160π ≈ **502 cm³**.\n\n**Example — cone:** radius 3 cm, height 7 cm: V = ⅓π(9)(7) = 21π ≈ **66.0 cm³**.\n\n**Composite solids:** find the volume of each part separately and add (or subtract for a hollow region).`,
        groups: [
          {
            subTitle: "Volume formulas to memorise",
            bullets: [
              "**Cuboid:** V = lwh — multiply length, width, and height.",
              "**Prism:** V = A_cross × l — any prism equals the cross-sectional area times the length.",
              "**Cylinder:** V = πr²h — radius must be squared.",
              "**Cone:** V = ⅓πr²h — one-third of the equivalent cylinder.",
              "**Sphere:** V = (4/3)πr³ — radius is cubed.",
            ],
          },
          {
            subTitle: "Working with composite and hollowed solids",
            bullets: [
              "**Composite solid:** split into standard parts and add their volumes.",
              "**Hollow cylinder:** V = π(R² − r²)h where R is outer radius and r is inner radius.",
              "**Cone on a cylinder:** V_total = πr²h_cylinder + ⅓πr²h_cone.",
              "**Reverse calculation:** given the volume, solve for a missing dimension using algebra.",
              "**Liquid-filled containers:** volume of liquid = volume of container × fraction filled.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Forgetting ⅓ for cone and pyramid** — a common source of lost marks.",
              "**Using diameter instead of radius** in cylinder, cone, or sphere formulas.",
              "**Cubing instead of squaring for the cylinder** — V = πr²h, not πr³h.",
              "**Units:** volume must be in cubic units — cm³, not cm² or cm.",
            ],
          },
        ],
        examinerTips: [
          "List the formula you are using and the values you are substituting before carrying out the arithmetic.",
          "For prisms, always find the cross-sectional area first as a separate step, then multiply by the length.",
          "When the question gives the diameter, write r = d/2 as your first step.",
          "In reverse problems (e.g. find height given volume and radius), rearrange the formula before substituting.",
        ],
        commonMistakes: [
          "Omitting the ⅓ factor in the cone and pyramid formulas — always write the ⅓ explicitly.",
          "Using radius² in the sphere formula instead of radius³: V = (4/3)πr³, not (4/3)πr².",
          "Calculating in mixed units — convert all lengths to the same unit before substituting.",
        ],
        recap: [
          "Find the volume of a cylinder with radius 5 cm and height 12 cm, giving your answer to 3 significant figures. [2]",
          "A cone has radius 6 cm and height 8 cm. Find its volume in terms of π. [2]",
          "A sphere has radius 3 cm. Find its volume in terms of π. [2]",
          "A triangular prism has a right-triangle cross-section with legs 5 cm and 8 cm, and a length of 10 cm. Find its volume. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 102. Problem Solving with Volumes
  // ─────────────────────────────────────────────────────────────
  {
    number: 102,
    title: "Problem Solving with Volumes",
    section: "Lengths, Areas & Volumes",
    topic: "Volume & Surface Area",
    intro: `Volume problems at IGCSE go beyond direct substitution: they include pouring liquid between containers, finding dimensions from given volumes, and calculating the number of objects that fill a larger container. Setting up an equation from the volume formula is the core skill. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Problem Solving with Volumes",
        body: `Volume problem solving involves four common question types:\n\n**Type 1 — find a missing dimension:** given the volume and some dimensions, rearrange the volume formula to find the unknown. Example: a cylinder has volume 200π cm³ and radius 5 cm. 200π = π(25)h → h = **8 cm**.\n\n**Type 2 — pouring/filling:** when liquid is poured from one container into another, the volume of liquid is conserved. Example: a cone is filled with water and emptied into a cylinder of the same radius — use V_cone = V_cylinder to find the height of water in the cylinder.\n\n**Type 3 — number of small objects:** divide the total volume by the volume of one small object (rounding up for capacity questions). Example: how many spheres of radius 1 cm can be melted down from a sphere of radius 3 cm? V_large = (4/3)π(27) = 36π; V_small = (4/3)π(1) = (4/3)π; number = 36π ÷ (4/3)π = **27**.\n\n**Type 4 — density:** density = mass/volume; mass = density × volume; volume = mass/density.`,
        groups: [
          {
            subTitle: "Finding a missing dimension",
            bullets: [
              "**Write the formula:** identify which volume formula applies and write it out in full.",
              "**Substitute known values:** replace the known quantities with their numerical values.",
              "**Solve for the unknown:** rearrange algebraically and calculate.",
              "**Cylinder height:** h = V/(πr²).",
              "**Cone radius:** r = √(3V/(πh)).",
            ],
          },
          {
            subTitle: "Pouring and density problems",
            bullets: [
              "**Conservation of volume:** when liquid is transferred, volume in = volume out.",
              "**Setting up:** V₁ = V₂; substitute formulas for each container shape.",
              "**Density formula:** ρ = m/V; therefore m = ρV and V = m/ρ.",
              "**Example:** a metal sphere of radius 4 cm has density 8 g/cm³. Mass = 8 × (4/3)π(64) = 8 × (256π/3) ≈ 2145 g.",
              "**Number of objects:** total volume ÷ volume per object — round down for how many fit, round up for how many to melt.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Not conserving volume when pouring:** always equate volumes of liquid, not volumes of containers.",
              "**Rounding direction error:** how many whole objects fit → round down; how many needed to produce → round up.",
              "**Density unit confusion:** ensure volume is in cm³ when density is in g/cm³.",
              "**Missing ⅓ in cone formula** when setting up conservation equations.",
            ],
          },
        ],
        examinerTips: [
          "For 'filling' questions, write V_full container × fraction filled = volume of liquid as your starting equation.",
          "Show the equation V₁ = V₂ explicitly before substituting — examiners award a method mark for the correct equation.",
          "In density problems, write the formula triangle (ρ = m/V) and cover the quantity you want.",
          "After finding a dimension, check it is realistic — a negative or extremely large height indicates an error.",
        ],
        commonMistakes: [
          "Equating capacities (container volumes) instead of volumes of liquid in pouring problems.",
          "Rounding the number of objects to the nearest integer instead of always rounding down for 'how many fit'.",
          "Applying the wrong volume formula — re-read the shape description in the question.",
        ],
        recap: [
          "A cylinder has volume 450π cm³ and radius 5 cm. Find its height. [2]",
          "A cone of radius 6 cm and height 9 cm is filled with water and poured into a cylinder of radius 6 cm. Find the height of the water in the cylinder. [3]",
          "A metal bar of volume 240 cm³ is melted and formed into spheres of radius 1 cm. How many complete spheres can be made? [3]",
          "A rectangular block of wood measures 8 cm × 5 cm × 4 cm and has a mass of 192 g. Find its density in g/cm³. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 103. Surface Area
  // ─────────────────────────────────────────────────────────────
  {
    number: 103,
    title: "Surface Area",
    section: "Lengths, Areas & Volumes",
    topic: "Volume & Surface Area",
    intro: `Surface area is the total area of all the faces of a 3D solid. It is measured in square units and is tested in IGCSE problems involving cuboids, cylinders, cones, and spheres — often in contexts such as painting, wrapping, or material cost. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Surface Area",
        body: `**Surface area (SA)** is the sum of the areas of every face of a 3D solid. The key formulas are:\n\n- **Cuboid:** SA = 2(lw + lh + wh)\n- **Cylinder (closed):** SA = 2πr² + 2πrh (two circular ends + curved surface)\n- **Curved surface of a cylinder:** 2πrh\n- **Cone (closed):** SA = πr² + πrl where l is the **slant height**\n- **Curved surface of a cone:** πrl\n- **Sphere:** SA = 4πr²\n\n**Slant height of a cone:** l = √(r² + h²) using Pythagoras' theorem, where h is the vertical height.\n\n**Example — cone:** radius 3 cm, vertical height 4 cm. Slant height l = √(9 + 16) = 5 cm. SA = π(9) + π(3)(5) = 9π + 15π = **24π ≈ 75.4 cm²**.`,
        groups: [
          {
            subTitle: "Surface area formulas",
            bullets: [
              "**Cuboid:** SA = 2(lw + lh + wh) — three distinct pairs of faces.",
              "**Closed cylinder:** SA = 2πr² + 2πrh — two circular ends plus the curved jacket.",
              "**Cone total:** SA = πrl + πr² — curved surface plus the circular base.",
              "**Sphere:** SA = 4πr² — four times the area of a great circle.",
              "**Slant height:** l = √(r² + h²) — always required for cone surface area problems.",
            ],
          },
          {
            subTitle: "Open vs closed surfaces",
            bullets: [
              "**Open cylinder (no lids):** SA = 2πrh — only the curved surface.",
              "**Half-open cylinder (one lid):** SA = 2πrh + πr².",
              "**Hemisphere total:** SA = 2πr² (curved) + πr² (flat circular base) = 3πr².",
              "**Curved hemisphere only:** SA = 2πr².",
              "**Reading the question:** 'total surface area' includes all faces; 'curved surface area' excludes flat faces.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using vertical height instead of slant height** in the cone formula — always compute l = √(r² + h²) first.",
              "**Omitting the base of a cone or cylinder** when total surface area is required.",
              "**Using diameter instead of radius** in any formula.",
              "**Forgetting that SA is in square units** — cm², not cm³.",
            ],
          },
        ],
        examinerTips: [
          "Always find the slant height of a cone before calculating surface area — draw the right-angled triangle with r, h, and l.",
          "Write out each face's area separately, then add — this shows clear method and earns partial marks.",
          "Check whether a base is included: an open container has no bottom; a closed container does.",
          "After calculating SA, check the units are square (cm², m²) — a cubic unit signals an error.",
        ],
        commonMistakes: [
          "Substituting the vertical height h into the formula πrl instead of the slant height l.",
          "Calculating the volume formula instead of the surface area formula — write 'SA =' clearly at the start.",
          "Omitting one face of a cuboid — always list all six faces (three pairs) before summing.",
        ],
        recap: [
          "Find the total surface area of a closed cylinder with radius 4 cm and height 7 cm, giving your answer in terms of π. [3]",
          "A cone has base radius 5 cm and vertical height 12 cm. Find its total surface area to 3 significant figures. [4]",
          "Find the surface area of a sphere with diameter 10 cm, giving your answer in terms of π. [2]",
          "A cuboid measures 6 cm × 4 cm × 3 cm. Find its total surface area. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 104. Congruence
  // ─────────────────────────────────────────────────────────────
  {
    number: 104,
    title: "Congruence",
    section: "Lengths, Areas & Volumes",
    topic: "Similarity & Congruence",
    intro: `Two shapes are **congruent** if they are identical in size and shape — one can be mapped onto the other by a combination of translations, rotations, and reflections. IGCSE questions test both the identification of congruent triangles and the proof of congruence using the four standard conditions. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Congruence",
        body: `**Congruent** shapes are exactly the same shape and size. All corresponding sides are equal and all corresponding angles are equal.\n\nFor triangles, four conditions are sufficient to prove congruence:\n1. **SSS (Side-Side-Side):** all three pairs of corresponding sides are equal.\n2. **SAS (Side-Angle-Side):** two pairs of corresponding sides and the included angle are equal.\n3. **ASA (Angle-Side-Angle):** two pairs of corresponding angles and the included side are equal.\n4. **RHS (Right angle-Hypotenuse-Side):** both triangles have a right angle, equal hypotenuses, and one other equal side.\n\n**AAA alone is not sufficient** for congruence — it only proves similarity (the triangles may be different sizes).\n\n**Example:** triangles ABC and DEF have AB = DE, BC = EF, and angle B = angle E (included). This is **SAS**, so the triangles are congruent and AC = DF.`,
        groups: [
          {
            subTitle: "The four congruence conditions",
            bullets: [
              "**SSS:** if all three sides match, the triangles are congruent — no angle information needed.",
              "**SAS:** two sides and the angle between them (the included angle) must match.",
              "**ASA:** two angles and the side between them (the included side) must match.",
              "**RHS:** applies only to right-angled triangles — right angle, hypotenuse, and one other side.",
              "**AAS:** two angles and a non-included side — equivalent to ASA since the third angle is determined.",
            ],
          },
          {
            subTitle: "Writing a congruence proof",
            bullets: [
              "**State the equal pairs:** clearly list each pair of equal sides or angles with a brief reason (given, common side, vertically opposite, etc.).",
              "**Name the condition:** state SSS, SAS, ASA, or RHS explicitly.",
              "**Conclude:** write 'Therefore triangle ABC ≡ triangle DEF' (using the ≡ symbol).",
              "**Order matters:** when naming congruent triangles, list vertices in corresponding order — if A corresponds to D, write ABC ≡ DEF, not ABF ≡ DEC.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using AAA as a congruence condition** — three equal angles only proves similarity, not congruence.",
              "**Picking the non-included angle for SAS** — the angle must be between the two stated sides.",
              "**Incorrect vertex ordering** in the congruence statement — vertices must be in corresponding order.",
              "**Insufficient reasoning** — state why each pair of sides or angles is equal, not just that they are.",
            ],
          },
        ],
        examinerTips: [
          "In a proof question, structure your answer as three numbered statements (the equal pairs) followed by the condition name and the conclusion.",
          "Look for 'common side' — a side shared by two triangles is automatically equal to itself (reflexive property).",
          "Vertically opposite angles and alternate angles (parallel lines) are frequently used justifications in congruence proofs.",
          "When stating the condition, write the full words (e.g. Side-Angle-Side) or the abbreviation — both are accepted.",
        ],
        commonMistakes: [
          "Claiming congruence from AAA — this only establishes similarity; a size comparison is needed for congruence.",
          "Listing vertices in the wrong order in the congruence statement, implying incorrect correspondences.",
          "Stating that sides or angles are equal without giving a geometric reason.",
        ],
        recap: [
          "State the four conditions sufficient to prove two triangles are congruent. [2]",
          "Triangles PQR and XYZ have PQ = XY, QR = YZ, and angle PQR = angle XYZ. State the congruence condition and write the full congruence statement. [2]",
          "Triangles ABC and DEF share side BC = EF, angle ABC = angle DEF = 90°, and AC = DF. Name the congruence condition used. [1]",
          "Explain why knowing all three angles of two triangles are equal is not sufficient to prove congruence. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 105. Similarity
  // ─────────────────────────────────────────────────────────────
  {
    number: 105,
    title: "Similarity",
    section: "Lengths, Areas & Volumes",
    topic: "Similarity & Congruence",
    intro: `Two shapes are **similar** if they have the same shape but not necessarily the same size — all corresponding angles are equal and all corresponding sides are in the same ratio. The scale factor links every length in the two shapes and must be identified correctly before solving IGCSE problems. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Similarity",
        body: `**Similar** shapes have equal corresponding angles and proportional corresponding sides. The **scale factor (k)** is the ratio of a side in the larger shape to the corresponding side in the smaller shape: k = new length / original length.\n\nFor triangles, **AA (Angle-Angle)** is sufficient to establish similarity: if two pairs of corresponding angles are equal, all three must be equal (angle sum = 180°), and the sides are in proportion.\n\n**Finding a missing side:** set up a proportion using corresponding sides. Example: triangles ABC and PQR are similar. AB = 4 cm, PQ = 10 cm, BC = 6 cm. Find QR.\nScale factor k = 10/4 = 2.5. QR = 6 × 2.5 = **15 cm**.\n\nAlternatively, use the ratio: AB/PQ = BC/QR → 4/10 = 6/QR → QR = 15 cm.`,
        groups: [
          {
            subTitle: "Establishing similarity",
            bullets: [
              "**AA condition:** two pairs of equal angles are sufficient — the third is determined by the angle sum.",
              "**Equal angles:** look for alternate angles, corresponding angles (parallel lines), vertically opposite angles, and angles in the same segment.",
              "**SSS similarity:** all three ratios of corresponding sides are equal.",
              "**SAS similarity:** two sides in proportion and the included angle equal.",
              "**Write the correspondence:** always match vertices in the correct order before writing ratios.",
            ],
          },
          {
            subTitle: "Using the scale factor",
            bullets: [
              "**Scale factor k:** k = corresponding side of new shape / corresponding side of original shape.",
              "**Enlargement:** k > 1 means the new shape is larger.",
              "**Reduction:** 0 < k < 1 means the new shape is smaller.",
              "**Finding a side:** multiply the known side by k (or divide by k to go in reverse).",
              "**Setting up a proportion:** use corresponding sides: a₁/a₂ = b₁/b₂ = c₁/c₂ = k.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Matching non-corresponding sides** — always identify which angles are equal first, then match the sides that are between or opposite those angles.",
              "**Using k = small/large instead of large/small** — be consistent with the direction of the scale factor.",
              "**Confusing similarity with congruence** — congruence is similarity with k = 1.",
              "**Not simplifying the ratio** — always divide to find k as a decimal or simple fraction.",
            ],
          },
        ],
        examinerTips: [
          "Start every similarity question by identifying and labelling the equal angles and stating why they are equal.",
          "Write the scale factor as a single number before using it — this prevents errors in multi-step calculations.",
          "Match vertices in order of correspondence (e.g. A↔P, B↔Q, C↔R) and keep this order throughout.",
          "After finding a missing side, check it is in the right ratio to its counterpart.",
        ],
        commonMistakes: [
          "Pairing sides that are not corresponding — always use angles to establish correspondence before reading off side lengths.",
          "Dividing instead of multiplying by k (or vice versa) — decide the direction of scaling (enlarging or reducing) first.",
          "Assuming similarity from equal areas — equal areas do not imply similar shapes.",
        ],
        recap: [
          "Two triangles have angles 50°, 70°, 60° and 50°, 70°, 60°. Are they similar? Give a reason. [1]",
          "Triangles ABC and PQR are similar with AB = 5 cm, BC = 8 cm, and PQ = 7.5 cm. Find QR. [2]",
          "A shape is enlarged by a scale factor of 3/2. A side of the original shape is 10 cm. Find the corresponding side in the enlarged shape. [1]",
          "In triangles LMN and XYZ, angle L = angle X and angle M = angle Y. Write a similarity statement and explain the condition used. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 106. Similar Lengths
  // ─────────────────────────────────────────────────────────────
  {
    number: 106,
    title: "Similar Lengths",
    section: "Lengths, Areas & Volumes",
    topic: "Similarity & Congruence",
    intro: `When two shapes are similar, corresponding lengths scale by the linear scale factor k, corresponding areas scale by k², and corresponding volumes scale by k³. These three scale factors are distinct and must not be confused in IGCSE examination questions. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Similar Lengths",
        body: `For two similar shapes with linear scale factor k (the ratio of corresponding lengths):\n\n- **Lengths:** multiply by k → new length = k × original length\n- **Areas:** multiply by k² → new area = k² × original area\n- **Volumes:** multiply by k³ → new volume = k³ × original volume\n\n**Example 1 — area:** two similar triangles have corresponding sides 4 cm and 6 cm. k = 6/4 = 1.5. If the small triangle has area 20 cm², the large triangle has area 20 × 1.5² = 20 × 2.25 = **45 cm²**.\n\n**Example 2 — volume:** two similar cylinders have radii 3 cm and 5 cm. k = 5/3. If the small cylinder has volume 54π cm³, the large has volume 54π × (5/3)³ = 54π × (125/27) = 250π ≈ **785 cm³**.\n\n**Reverse:** if the area ratio is given, find k = √(area ratio); if the volume ratio is given, find k = ∛(volume ratio).`,
        groups: [
          {
            subTitle: "The three scale factors",
            bullets: [
              "**Linear scale factor (k):** ratio of any pair of corresponding lengths.",
              "**Area scale factor:** k² — always square the linear scale factor for areas.",
              "**Volume scale factor:** k³ — always cube the linear scale factor for volumes.",
              "**Finding k from area ratio:** k = √(A₂/A₁) — take the square root of the area ratio.",
              "**Finding k from volume ratio:** k = ∛(V₂/V₁) — take the cube root of the volume ratio.",
            ],
          },
          {
            subTitle: "Applying scale factors in problems",
            bullets: [
              "**Given areas, find a length:** find k from √(area ratio), then multiply or divide the known length by k.",
              "**Given volumes, find a surface area:** find k from ∛(volume ratio), then multiply surface area by k².",
              "**Cost and quantity problems:** if two similar containers hold liquids, the quantity ratio is k³; use this to compare costs.",
              "**Map/model scale:** a map scale of 1 : 50 000 means 1 cm on the map = 50 000 cm = 500 m in reality; areas scale by 50 000².",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using k for area instead of k²** — the most common error in this topic.",
              "**Using k² for volume instead of k³** — always identify whether the quantity is a length, area, or volume first.",
              "**Forgetting to take the square/cube root** when working backwards from an area or volume ratio.",
              "**Applying scale factor to already-squared dimensions** — do not square r before multiplying by k²; apply k² to the final area.",
            ],
          },
        ],
        examinerTips: [
          "Write a small table: k (lengths), k² (areas), k³ (volumes) — this reference prevents applying the wrong power.",
          "When working backwards from an area ratio, write k = √(ratio) explicitly before finding lengths.",
          "The question will tell you the type of measurement — 'area of cross-section' means use k², 'volume of water' means use k³.",
          "Show all three steps: state k, state k² or k³, then multiply — examiners award marks at each stage.",
        ],
        commonMistakes: [
          "Multiplying an area by k instead of k² — always square the linear scale factor before applying it to an area.",
          "Calculating k as large/small when going from large to small — always define the direction of k clearly.",
          "Confusing the volume ratio with the linear ratio — the numbers look very different; cube-root the volume ratio to get k.",
        ],
        recap: [
          "Two similar rectangles have corresponding sides 5 cm and 8 cm. The area of the smaller rectangle is 30 cm². Find the area of the larger. [2]",
          "Two similar cylinders have volumes 125 cm³ and 1000 cm³. Find the ratio of their radii. [3]",
          "Two similar cones have base radii 4 cm and 6 cm. The surface area of the smaller cone is 80 cm². Find the surface area of the larger cone. [3]",
          "A model car is built to a scale of 1 : 20. The actual car has a volume of 4 m³. Find the volume of the model in cm³. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 107. Translations
  // ─────────────────────────────────────────────────────────────
  {
    number: 107,
    title: "Translations",
    section: "Transformations",
    topic: "Transformations",
    intro: `A translation moves every point of a shape the same distance in the same direction, without changing its size, shape, or orientation. Translations are described by a **column vector** and are one of the four standard transformations tested at IGCSE. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Translations",
        body: `A **translation** is a transformation that shifts a shape by a fixed displacement in the horizontal and vertical directions. The shape, size, and orientation of the object are all preserved — a translation is an **isometry** (distance-preserving).\n\nTranslations are described by a **column vector**: the vector (a, b) written vertically as a column means 'move a units in the x-direction and b units in the y-direction'.\n- Positive a: move right; negative a: move left.\n- Positive b: move up; negative b: move down.\n\n**Applying a translation:** add the column vector to the coordinates of each vertex. If vertex A is at (3, 2) and the translation vector is (4, −1), the image A' is at (3 + 4, 2 + (−1)) = **(7, 1)**.\n\n**Describing a translation:** state that it is a translation and give the column vector — both are required for full marks.`,
        groups: [
          {
            subTitle: "Column vectors",
            bullets: [
              "**Form:** a column vector is written as a vertical pair: top number = horizontal shift, bottom number = vertical shift.",
              "**Right/left:** positive top number → right; negative top number → left.",
              "**Up/down:** positive bottom number → up; negative bottom number → down.",
              "**Example:** vector (−3, 5) means 3 units left and 5 units up.",
              "**Inverse translation:** to return to the original, use the negative vector: the inverse of (a, b) is (−a, −b).",
            ],
          },
          {
            subTitle: "Applying and describing translations",
            bullets: [
              "**Applying:** add the vector components to each vertex's coordinates.",
              "**Example:** triangle with vertices (1, 2), (4, 2), (1, 5) translated by (3, −4) gives (4, −2), (7, −2), (4, 1).",
              "**Describing from a diagram:** find the change in x and the change in y from any object vertex to its image vertex.",
              "**All vertices shift equally:** check that every vertex moves by the same vector as a verification step.",
              "**Label the image:** use prime notation — if the object is ABC, the image is A'B'C'.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Swapping x and y in the vector:** the top component is always the horizontal (x) shift.",
              "**Writing the description as coordinates instead of a column vector** — the description must be a vector, not a point.",
              "**Only translating some vertices:** every vertex must be moved by the same vector.",
              "**Not naming the transformation:** writing only the vector without saying 'translation' loses a mark.",
            ],
          },
        ],
        examinerTips: [
          "To describe a translation fully: write 'Translation by vector (a, b)' — name the transformation and give the vector.",
          "To find the vector, subtract the object's coordinates from the image's coordinates: vector = image − object.",
          "Plot all image vertices before connecting them to avoid drawing the wrong shape.",
          "Check all three (or more) vertices have moved by exactly the same vector.",
        ],
        commonMistakes: [
          "Describing a translation with only the vector and not naming it as a 'translation'.",
          "Calculating vector as object − image instead of image − object, giving the inverse vector.",
          "Moving only one or two vertices and connecting them incorrectly to fixed points.",
        ],
        recap: [
          "Translate the point (2, −3) by the vector (5, 4). Write down the coordinates of the image. [1]",
          "A triangle has vertices A(1, 1), B(4, 1), C(1, 5). Draw the image after a translation of (−2, 3). [2]",
          "A shape is translated so that the point (3, 7) maps to (1, 2). Write down the translation vector. [1]",
          "Describe fully the single transformation that maps triangle P onto triangle Q, given their vertices. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 108. Reflections
  // ─────────────────────────────────────────────────────────────
  {
    number: 108,
    title: "Reflections",
    section: "Transformations",
    topic: "Transformations",
    intro: `A reflection maps every point of a shape onto a mirror image across a fixed line called the **mirror line** (or **line of reflection**). The object and its image are congruent, with the mirror line acting as the perpendicular bisector of every segment joining a point to its image. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Reflections",
        body: `A **reflection** is an isometry (preserves distances and angles) that flips a shape across a mirror line. Key properties:\n- Each image point is the same distance from the mirror line as the corresponding object point, but on the opposite side.\n- The mirror line is the **perpendicular bisector** of the segment joining any object point to its image.\n- The shape is **laterally inverted** — it appears as a mirror image, not a rotation.\n\n**Common mirror lines and their rules:**\n- **x-axis (y = 0):** (x, y) → (x, −y) — the y-coordinate changes sign.\n- **y-axis (x = 0):** (x, y) → (−x, y) — the x-coordinate changes sign.\n- **y = x:** (x, y) → (y, x) — swap the two coordinates.\n- **y = −x:** (x, y) → (−y, −x) — swap and change both signs.\n- **y = k (horizontal line):** (x, y) → (x, 2k − y).\n- **x = k (vertical line):** (x, y) → (2k − x, y).`,
        groups: [
          {
            subTitle: "Rules for standard mirror lines",
            bullets: [
              "**Reflect in y = 0 (x-axis):** negate the y-coordinate: (x, y) → (x, −y).",
              "**Reflect in x = 0 (y-axis):** negate the x-coordinate: (x, y) → (−x, y).",
              "**Reflect in y = x:** swap x and y: (x, y) → (y, x).",
              "**Reflect in y = −x:** swap and negate both: (x, y) → (−y, −x).",
              "**Reflect in a general line y = k:** image y = 2k − y_object; x remains the same.",
            ],
          },
          {
            subTitle: "Describing a reflection",
            bullets: [
              "**Name the transformation:** state 'Reflection'.",
              "**Give the mirror line:** state its equation, e.g. 'in the line y = x' or 'in the line x = 3'.",
              "**Finding the mirror line:** the mirror line passes through the midpoints of all object–image point pairs and is perpendicular to the segments joining them.",
              "**Check:** every object–image pair should be equidistant from the mirror line.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Describing a reflection as a rotation** — reflections produce mirror images, not rotations; check whether the orientation has been reversed.",
              "**Reflecting in the wrong axis** — always check whether the question asks for reflection in x or y axis.",
              "**Using the wrong formula for y = x** — many students reflect in y = 0 instead.",
              "**Not giving the equation of the mirror line** in the description — the full description requires 'Reflection in y = …'.",
            ],
          },
        ],
        examinerTips: [
          "To find the mirror line from a diagram, join each object point to its image, find the midpoint, and draw a line through all midpoints at 90° to these segments.",
          "Always state the full equation of the mirror line, not just 'the x-axis' — write 'the line y = 0'.",
          "Use the coordinate rules to check each reflected vertex rather than relying on a rough sketch.",
          "An orientation check: if the shape appears the same way round (not flipped), it is a rotation or translation, not a reflection.",
        ],
        commonMistakes: [
          "Swapping x and y when reflecting in the x-axis (instead of negating y) — only the y-axis reflection swaps coordinates.",
          "Giving the mirror line as a point rather than a line equation.",
          "Reflecting only visually (by eye) without checking the perpendicular bisector property — this leads to inaccurate images.",
        ],
        recap: [
          "Reflect the point (3, −2) in the x-axis. Write down the coordinates of the image. [1]",
          "Reflect triangle A with vertices (1, 1), (3, 1), (3, 4) in the line y = x. Write down the coordinates of the image vertices. [2]",
          "A point P maps to P'(5, −3) under a reflection in the y-axis. Find the coordinates of P. [1]",
          "Describe fully the single transformation that maps shape A to shape B, where A and B appear as mirror images across the line x = 2. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 109. Rotations
  // ─────────────────────────────────────────────────────────────
  {
    number: 109,
    title: "Rotations",
    section: "Transformations",
    topic: "Transformations",
    intro: `A rotation turns a shape through a given angle about a fixed point called the **centre of rotation**. To describe a rotation fully, you must state the centre, the angle, and the direction (clockwise or anticlockwise). Rotations are isometries — they preserve size and shape but change orientation. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Rotations",
        body: `A **rotation** is a transformation that turns every point of a shape through the same angle about a fixed **centre of rotation**. The image is congruent to the object.\n\n**To describe a rotation fully, give:**\n1. The transformation name: Rotation.\n2. The centre of rotation: a coordinate, e.g. (0, 0).\n3. The angle: e.g. 90°, 180°.\n4. The direction: clockwise or anticlockwise (not needed for 180° since it is the same both ways).\n\n**Rotation rules about the origin:**\n- **90° anticlockwise:** (x, y) → (−y, x)\n- **90° clockwise:** (x, y) → (y, −x)\n- **180°:** (x, y) → (−x, −y)\n\n**Example:** rotate (3, 2) by 90° anticlockwise about the origin: image = (−2, 3).`,
        groups: [
          {
            subTitle: "Coordinate rules for rotation about the origin",
            bullets: [
              "**90° anticlockwise (or 270° clockwise):** (x, y) → (−y, x).",
              "**90° clockwise (or 270° anticlockwise):** (x, y) → (y, −x).",
              "**180° (either direction):** (x, y) → (−x, −y).",
              "**360°:** the image coincides with the object — no visible change.",
              "**Verification:** the distance from the centre of rotation to a vertex equals the distance from the centre to the corresponding image vertex.",
            ],
          },
          {
            subTitle: "Finding the centre of rotation",
            bullets: [
              "**Method:** draw the perpendicular bisector of the segment joining each object vertex to its image vertex — the centre lies at the intersection.",
              "**Tracing paper method:** place tracing paper over the diagram, trace the object, and rotate until it coincides with the image; the pin point is the centre.",
              "**Check all vertices:** the centre must be equidistant from each object–image pair.",
              "**Common centres:** the origin (0, 0) and points like (1, 0) or (0, 1) are frequently used in IGCSE questions.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Omitting the direction** for 90° rotations — clockwise and anticlockwise give different images.",
              "**Applying the wrong sign** in the coordinate rule — write the formula down before substituting.",
              "**Describing a rotation as a reflection** — check whether the orientation of the shape is reversed (reflection) or preserved (rotation).",
              "**Not specifying the centre** in the description — without the centre, the description is incomplete.",
            ],
          },
        ],
        examinerTips: [
          "Learn the three rotation rules about the origin by heart — they appear in almost every transformations question.",
          "To describe a rotation: 'Rotation of [angle]° [direction] about the point (a, b)' — all four pieces of information are required.",
          "For centre-finding, draw the perpendicular bisectors carefully — intersection by eye is acceptable in a show question but should be confirmed.",
          "A 180° rotation does not need a direction; write 'Rotation of 180° about (a, b)'.",
        ],
        commonMistakes: [
          "Using (y, −x) for anticlockwise instead of (−y, x) — learn the two 90° rules and their directions explicitly.",
          "Forgetting to give the direction for 90° rotations in the description.",
          "Identifying the transformation as a translation or reflection because the diagram looks ambiguous — apply the orientation test.",
        ],
        recap: [
          "Rotate the point (4, 1) by 90° anticlockwise about the origin. Write down the coordinates of the image. [1]",
          "A triangle has vertices (1, 2), (3, 2), (3, 5). Rotate it 180° about the origin. Write down the image vertices. [2]",
          "Describe fully the single transformation that maps shape P onto shape Q, given that P has vertices (1,1), (3,1), (3,3) and Q has vertices (−1,−1), (−3,−1), (−3,−3). [2]",
          "A shape is rotated 90° clockwise about the point (2, 0). The point (5, 3) maps to what image point? [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 110. Enlargements
  // ─────────────────────────────────────────────────────────────
  {
    number: 110,
    title: "Enlargements",
    section: "Transformations",
    topic: "Transformations",
    intro: `An enlargement changes the size of a shape by a **scale factor** relative to a fixed **centre of enlargement**. The image is similar (not congruent) to the object unless the scale factor is ±1. Enlargements with fractional or negative scale factors are also tested at IGCSE. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Enlargements",
        body: `An **enlargement** maps every point P to a point P' such that the distance from the centre of enlargement O to P' equals k × the distance from O to P, where k is the **scale factor**.\n\n**Key properties:**\n- If k > 1: the image is larger than the object and on the same side of the centre.\n- If 0 < k < 1: the image is smaller (a reduction) and on the same side.\n- If k < 0: the image is on the **opposite side** of the centre from the object (and inverted).\n- All corresponding angles are preserved; the image is **similar** to the object.\n\n**Applying an enlargement:** multiply the position vector of each vertex from the centre by k.\n- Object vertex A at position vector a from centre O → image A' at position vector ka from O.\n- In coordinates: if centre is (cx, cy) and object is (x, y), image = (cx + k(x − cx), cy + k(y − cy)).\n\n**Example:** enlarge (5, 3) by scale factor 2 about centre (1, 1): image = (1 + 2(4), 1 + 2(2)) = **(9, 5)**.`,
        groups: [
          {
            subTitle: "Applying an enlargement",
            bullets: [
              "**Step 1:** find the vector from the centre to each object vertex: (x − cx, y − cy).",
              "**Step 2:** multiply this vector by the scale factor k.",
              "**Step 3:** add the result back to the centre coordinates to get the image vertex.",
              "**Negative scale factor:** the image is inverted; vectors from the centre are reversed in direction.",
              "**Scale factor 1/2:** each image point is halfway between the centre and the object point — a reduction.",
            ],
          },
          {
            subTitle: "Describing an enlargement",
            bullets: [
              "**Name:** state 'Enlargement'.",
              "**Scale factor:** give the numerical value, including sign for negative enlargements.",
              "**Centre:** state the coordinates of the centre of enlargement.",
              "**Finding the scale factor:** SF = image length / object length (choose corresponding sides).",
              "**Finding the centre:** draw lines through each object–image vertex pair; the centre is their intersection.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Measuring from the wrong centre:** always measure from the stated centre, not from the origin.",
              "**Forgetting the direction for negative scale factors:** the image is on the opposite side of the centre.",
              "**Not labelling the description completely:** an enlargement requires three pieces of information — name, scale factor, and centre.",
              "**Calculating SF as object/image instead of image/object:** SF = new/old.",
            ],
          },
        ],
        examinerTips: [
          "To describe an enlargement fully: 'Enlargement, scale factor k, centre (a, b)' — all three are compulsory for full marks.",
          "To find the centre, draw rays through each matching vertex pair — the rays should meet at a single point.",
          "For a negative scale factor, draw the ray from the object vertex through the centre and continue to the other side.",
          "Confirm the scale factor by measuring (or calculating) the ratio of image side to object side for two different sides.",
        ],
        commonMistakes: [
          "Using the origin as the centre of enlargement when a different centre is specified.",
          "Applying the scale factor to the coordinates directly instead of to the displacement from the centre.",
          "Calculating SF as the ratio of object to image (inverse) — always image ÷ object.",
        ],
        recap: [
          "Enlarge the point (3, 1) by scale factor 3 about the centre (0, 0). Write down the image coordinates. [1]",
          "A triangle with vertices (2, 2), (4, 2), (2, 6) is enlarged by scale factor 1/2 about the origin. Find the image vertices. [2]",
          "Describe fully the single transformation that maps triangle A (vertices (6, 2), (10, 2), (10, 6)) to triangle B (vertices (3, 1), (5, 1), (5, 3)). [3]",
          "A triangle is enlarged by scale factor −2 about the point (1, 1). The object vertex is at (3, 2). Find the image vertex. [2]",
        ],
      },
    ],
  },
];
