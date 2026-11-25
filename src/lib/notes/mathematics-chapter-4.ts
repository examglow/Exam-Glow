import type { Chapter } from "./types";

const chapterFour: Chapter = {
  number: 4,
  title: "Geometry",
  intro: `Geometry marks are split between **knowing the words** and **giving the reason**. A correct angle with no reason scores half or nothing.\n\nThree-letter notation (angle ABC) is required, and reasons must use the exact property named in the syllabus.`,
  subheadings: [
    {
      title: "Introduction to Lines and Angles",
      body: `### Naming the Angles and the Lines\nAn **angle** measures a turn between two lines, from 0° to 360°. The type of angle is decided by its size: **acute, right, obtuse, straight and reflex**.\n\nLines are named by how they sit relative to each other: **parallel, perpendicular and transversal**, and every angle you meet later in the chapter is built from these five angle types and three line types.\n\nThe **protractor** is the instrument for measuring and drawing them.`,
      groups: [
        {
          subTitle: "Types of angles",
          bullets: [
            "**Acute angle:** between 0° and 90°, so 35° and 89° are both acute.",
            "**Right angle:** exactly 90°, shown with a small square at the vertex, never with a curved arrow.",
            "**Obtuse angle:** between 90° and 180°, such as 135°.",
            "**Straight angle:** exactly 180°, a half turn along a straight line.",
            "**Reflex angle:** between 180° and 360°, such as 300°; the protractor reading needs 360° subtracting from the full turn.",
            "A full turn is **360°**, and every angle type is a slice of that full turn.",
          ],
        },
        {
          subTitle: "Types of lines",
          bullets: [
            "**Parallel lines** run in the same direction and never meet, however far they are extended; arrowheads mark them.",
            "**Perpendicular lines** meet at exactly 90°.",
            "**A transversal** is any line that crosses two or more other lines, creating the angle pairs used in the parallel-line rules.",
            "A transversal crossing **non-parallel** lines creates no equal angle pairs — the rules only hold when the lines are parallel.",
            "**Measuring with a protractor:** place the centre on the vertex, the zero line on one arm of the angle, and read the scale that starts from zero on that arm.",
            "**Drawing an angle:** draw one arm, place the protractor, mark the required angle, remove the protractor and join the mark to the vertex with a ruler.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Reading the wrong scale on the protractor and reporting 60° instead of 120°; check which side of 90° the angle should fall.",
            "Calling a 180° angle reflex; reflex starts **after** 180°.",
            "Using the parallel-line rules on lines that are not marked parallel, or assuming lines are parallel because they look it.",
          ],
        },
      ],
    },
    {
      title: "Rotational Symmetry",
      body: `### How Many Times It Fits On Itself\nThe **order of rotational symmetry** of a shape is the number of times it maps onto itself in one full **360° rotation**.\n\nA **regular hexagon** has order 6, because it fits onto itself every 60°. If a shape fits onto itself only once in a full turn, its order is **1**, which means it has **no rotational symmetry**.`,
      groups: [
        {
          subTitle: "Working out the order",
          bullets: [
            "**Count the fits:** rotate the shape slowly through 360° and count every position where it looks unchanged.",
            "**Regular polygons** have order equal to their number of sides: a regular pentagon has order 5, a regular octagon order 8.",
            "**A rectangle** has order 2 — it fits at 0° and 180° only.",
            "**A parallelogram and a rhombus** have order 2, while a square has order 4.",
            "**A circle** has infinite rotational symmetry; it fits at every angle of turn.",
            "Every shape fits once at 0°, so the **minimum order is 1** — that single fit is what makes the counting work.",
            "A shape with no rotational symmetry, such as a scalene triangle, has **order 1**.",
          ],
        },
        {
          subTitle: "Describing it in an answer",
          bullets: [
            "State the order as a number: 'rotational symmetry of order 4', not 'it rotates four times'.",
            "The **centre of rotation** is the fixed point the shape turns about, usually the centre of the shape.",
            "The **angle of each turn** that maps the shape onto itself is 360° ÷ order.",
            "For a shape with order 6, one fit occurs every **60°** of turn.",
            "A tracing-paper rotation is the practical method: trace, pin the centre, turn, and count the matching positions.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Reporting the order as the number of degrees (60 instead of 6); order is a count, not an angle.",
            "Counting the starting position twice, or not counting it at all — the 0° position counts as the first fit.",
            "Confusing rotational symmetry with lines of symmetry; a parallelogram has order 2 but **no lines** of symmetry.",
          ],
        },
      ],
    },
    {
      title: "Lines of Symmetry",
      body: `### Folding the Shape Onto Itself\nA **line of symmetry** divides a shape into two halves that are exact mirror images: fold along the line and the shape maps onto itself.\n\nCounting and drawing these lines for triangles, quadrilaterals and regular polygons is a direct syllabus requirement, and the counts follow fixed rules you can learn once.`,
      groups: [
        {
          subTitle: "The counts to learn",
          bullets: [
            "**A rectangle has 2 lines of symmetry**, one through each pair of opposite midpoints — not through the diagonals.",
            "**A square has 4**, the two midlines and the two diagonals.",
            "**A regular pentagon has 5**, one from each vertex to the midpoint of the opposite side.",
            "**Every regular polygon** has as many lines of symmetry as it has sides; a regular hexagon has 6.",
            "**An equilateral triangle** has 3, one from each vertex; an **isosceles triangle** has 1, through the apex and the base midpoint; a **scalene triangle** has none.",
            "**A kite** has 1 line of symmetry through its main diagonal; a **rhombus** has 2, through both diagonals.",
            "**A parallelogram** has no line of symmetry, even though it has rotational symmetry of order 2.",
          ],
        },
        {
          subTitle: "Drawing and justifying",
          bullets: [
            "Draw each line as a **dashed straight line** through the shape, long enough to show the whole fold.",
            "A line of symmetry must pass through vertices or midpoints of sides; a line that merely 'looks central' is not evidence.",
            "Test a candidate line by folding or by mirror: every point on one side must have a matching point the same distance on the other.",
            "For a **regular polygon**, draw one line from a vertex to the midpoint of the opposite side, then repeat from each vertex.",
            "The **diagonals of a rectangle** are not lines of symmetry, though they are equal in length.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Giving the diagonals of a rectangle as lines of symmetry; folding along a diagonal of a 2-by-1 rectangle does not match the corners.",
            "Saying a parallelogram has 2 lines of symmetry; it has none.",
            "Forgetting that the question may ask for lines to be **drawn**, not just counted — a count with no drawn line loses the mark.",
          ],
        },
      ],
    },
    {
      title: "Properties of Polygons",
      body: `### Triangles and Quadrilaterals, Side by Side\nA **polygon** is a closed shape with straight sides, and its properties are stated in sides, angles and diagonals.\n\nThe four triangle types and the six special quadrilaterals each carry a fixed set of properties that exam questions test directly.`,
      groups: [
        {
          subTitle: "Triangles",
          bullets: [
            "**Equilateral:** 3 equal sides, 3 equal angles of **60° each**, 3 lines of symmetry and rotational symmetry of order 3.",
            "**Isosceles:** 2 equal sides, and the **two base angles are equal**; it has 1 line of symmetry through the apex.",
            "**Scalene:** no equal sides, no equal angles, no symmetry at all.",
            "**Right-angled:** one angle of 90°; the side opposite the right angle is the **hypotenuse**, the longest side.",
            "In every triangle, the **longest side faces the largest angle**, a fact that identifies valid and impossible triangles.",
            "A right-angled triangle can also be isosceles (45°, 45°, 90°) or scalene (for example 30°, 60°, 90°).",
          ],
        },
        {
          subTitle: "Quadrilaterals",
          bullets: [
            "**Square:** 4 equal sides, 4 right angles, 2 equal diagonals that bisect each other at 90°; 4 lines of symmetry.",
            "**Rectangle:** 2 pairs of equal opposite sides, 4 right angles, 2 equal diagonals that bisect each other; 2 lines of symmetry.",
            "**Rhombus:** 4 equal sides, opposite angles equal, diagonals bisect each other at 90° but are not equal; 2 lines of symmetry.",
            "**Parallelogram:** opposite sides equal and parallel, opposite angles equal, diagonals bisect each other but are not equal; no line symmetry, rotational order 2.",
            "**Trapezium:** exactly one pair of parallel sides; an isosceles trapezium adds equal non-parallel sides and equal base angles.",
            "**Kite:** 2 pairs of adjacent equal sides, 1 line of symmetry, one pair of equal opposite angles, diagonals cross at 90°.",
            "The square is the most special case: it is a rectangle, a rhombus and a parallelogram all at once.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Saying a rhombus has right angles; only the square does — a rhombus has equal sides but only opposite angles equal.",
            "Saying the diagonals of a parallelogram are equal; that belongs to the rectangle.",
            "Forgetting the kite's equal sides are **adjacent pairs**, not opposite pairs.",
          ],
        },
      ],
    },
    {
      title: "Properties of Circles",
      body: `### The Vocabulary of the Circle\nA circle is the set of all points a fixed distance, the **radius**, from the **centre**.\n\nThe parts of a circle have exact names — **diameter, chord, arc, sector, segment, tangent, circumference** — and every circle theorem later in the chapter is stated using them.`,
      groups: [
        {
          subTitle: "The words and what they mean",
          bullets: [
            "**Centre and radius:** the radius is the fixed distance from the centre to any point on the circle; all radii are equal.",
            "**Diameter = 2 × radius:** the chord through the centre, the longest chord in the circle.",
            "**Chord:** any straight line joining two points on the circumference.",
            "**Arc:** part of the circumference, the **minor arc** being the shorter piece and the **major arc** the longer.",
            "**Sector:** a 'pie slice' bounded by two radii and an arc.",
            "**Segment:** the region between a chord and an arc; the diameter divides the circle into two equal **semicircular segments**.",
            "**Tangent:** a straight line touching the circle at exactly one point; it is **perpendicular to the radius at that point of contact**.",
          ],
        },
        {
          subTitle: "Using the vocabulary",
          bullets: [
            "A **circumference** is the full distance around the circle; the word is not the name of the disc.",
            "The **perpendicular from the centre to a chord bisects the chord** — this is the symmetry property that links chords to the centre.",
            "**Equal chords are equidistant from the centre**, and the further a chord is from the centre, the shorter it is.",
            "The **perpendicular bisector of any chord passes through the centre**, which is how you find the centre of a circle in a construction question.",
            "A radius drawn to the point of contact of a **tangent** always creates the 90° used in tangent questions.",
            "Read questions for the words: 'the chord AB' means the straight line AB, while 'the arc AB' means the curved part of the circumference between A and B.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Calling any line through the circle a diameter; it must pass through the centre.",
            "Mixing up **sector** (radii plus arc) and **segment** (chord plus arc).",
            "Forgetting the tangent–radius 90°, then being unable to start a tangent question that depends on it.",
          ],
        },
      ],
    },
    {
      title: "Properties of 3D Shapes",
      body: `### Faces, Edges, Vertices\nA solid shape is described by its **faces** (flat or curved surfaces), **edges** (where two faces meet) and **vertices** (where edges meet).\n\nThe named solids are the prism, cylinder, pyramid, cone, sphere and cuboid, and they obey one universal counting rule: **Euler's formula, F + V − E = 2**.`,
      groups: [
        {
          subTitle: "The named solids",
          bullets: [
            "**Prism:** a constant cross-section along its length; a triangular prism has 5 faces, 9 edges and 6 vertices.",
            "**Cylinder:** circular cross-section, 2 flat faces and 1 curved surface, 2 curved edges and no vertices.",
            "**Cuboid:** a rectangular prism, 6 faces, 12 edges, 8 vertices; the cube is the special case with all faces square.",
            "**Pyramid:** a polygon base with triangular faces meeting at an apex; a square-based pyramid has 5 faces, 8 edges and 5 vertices.",
            "**Cone:** one circular base, one curved surface, and an apex that is not a vertex in the counting sense; one curved edge.",
            "**Sphere:** one curved surface, no edges and no vertices; every point of it is the same distance from the centre.",
          ],
        },
        {
          subTitle: "Cross-sections and Euler",
          bullets: [
            "**The cross-section of a prism is constant:** every slice taken parallel to the base is the same shape and size, which is what defines a prism.",
            "A slice of a **cone or pyramid parallel to the base is a smaller copy of the base**, so cones and pyramids are not prisms.",
            "**Euler's formula** for any closed solid with flat faces: **F + V − E = 2**; test it on a cube, 6 + 8 − 12 = 2.",
            "Euler's formula applies to polyhedra; it does not apply to the sphere, cone or cylinder, whose faces are curved.",
            "A **net** of a solid unfolds it into one flat piece; a net of a cuboid has 6 rectangles, and a triangular prism's net has 3 rectangles and 2 triangles.",
            "For a net, count the shared edges carefully: a cuboid's opposite faces are the equal pairs.",
            "Slicing parallel to the base of a cylinder gives a circle of the same size every time, so the cylinder behaves like a prism in cross-section questions.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Counting curved surfaces as faces of a cylinder and then quoting Euler's formula for it; F + V − E = 2 is for flat-faced solids only.",
            "Calling the apex of a cone a vertex and so miscounting V.",
            "Drawing a net whose faces overlap when folded — check the folding mentally before answering.",
          ],
        },
      ],
    },
    {
      title: "Angles Around Points and Lines",
      body: `### The Two Sums and the Equal Pair\nThree facts govern every basic angle chase: **angles on a straight line sum to 180°**, **angles around a point sum to 360°**, and **vertically opposite angles are equal**.\n\nThey are used on diagrams with several angles meeting at one point, usually with an algebraic unknown among them.`,
      groups: [
        {
          subTitle: "The rules",
          bullets: [
            "**Angles on a straight line** sharing a vertex sum to **180°**; two angles on a line are therefore supplementary.",
            "**Angles around a point** sum to **360°**, whatever their number.",
            "**Vertically opposite angles** — the pair opposite each other where two straight lines cross — are **equal**.",
            "**Adjacent angles** share a vertex and one arm, and sit next to each other; adjacent angles on a line add to 180°.",
            "The reason must be written in words: 'angles on a straight line = 180°', not just the number.",
            "A reflex angle at a crossing is found from its adjacent angle: reflex = 360° − the angle given.",
            "Where two lines cross, four angles form two equal pairs, each pair made of the vertically opposite angles.",
          ],
        },
        {
          subTitle: "Angle chasing with algebra",
          bullets: [
            "Write the sum as an equation: three angles on a line of x°, 2x° and 30° give x + 2x + 30 = 180.",
            "**Solve, then substitute back** to find each angle, not just the unknown.",
            "Check the total at the end: your angles around the point must add to 360°, or on the line to 180°.",
            "Mark every equal angle on the diagram with the same symbol before writing anything.",
            "A common pattern: one angle at a point is given in algebra, the others in numbers, and the 360° total unties the knot.",
            "Where a right angle is marked, treat its 90° as two angles of 90° or as part of a 180° line, depending on the diagram.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Adding angles around a point to 180°; the point total is 360°.",
            "Assuming all four angles at a crossing are equal; only the vertically opposite pairs are, and adjacent ones are supplementary.",
            "Solving for x and forgetting to give the angle the question actually asked for.",
          ],
        },
      ],
    },
    {
      title: "Angles in Triangles",
      body: `### The 180° and the Exterior Angle Rule\nThe **interior angles of any triangle sum to 180°**, and the **exterior angle** of a triangle equals the sum of the two **non-adjacent interior angles**.\n\nThese two facts, combined with the equal base angles of an isosceles triangle, answer almost every triangle angle question in the paper.`,
      groups: [
        {
          subTitle: "The two core rules",
          bullets: [
            "**Interior angle sum 180°:** for angles a, b and c, a + b + c = 180°.",
            "**Exterior angle rule:** an exterior angle formed by extending one side equals the **sum of the two opposite interior angles**.",
            "The exterior angle and its adjacent interior angle lie on a straight line, so they also add to 180°.",
            "The two exterior angles at each vertex (one on each side) are equal, being vertically opposite.",
            "The three exterior angles of any triangle, one at each vertex, sum to **360°**.",
            "In an **isosceles triangle**, once one base angle is found, the second is equal to it — this is a reason worth writing.",
            "In an **equilateral triangle** every angle is 60°, and no working earns the mark if the reason is missing.",
          ],
        },
        {
          subTitle: "Types of triangles and their angles",
          bullets: [
            "**Equilateral:** all angles 60°, the reason being 'equilateral triangle' or 'all angles equal in an equilateral triangle'.",
            "**Isosceles:** the two base angles are equal, so two known angles with a 180° total finishes the shape.",
            "**Right-angled:** the other two angles sum to 90°, since 90° + a + b = 180°.",
            "**Scalene:** no equal angles; each one is found by arithmetic alone.",
            "A triangle cannot hold two right angles, because 90° + 90° already exhausts the 180° total.",
            "The largest angle in a triangle faces the longest side, which links angle work to side-length reasoning.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Using the exterior angle rule but naming only one interior angle; it is the **sum of both** non-adjacent interior angles.",
            "Calling the angle between a side and an extension the vertically opposite angle; it is the adjacent supplementary angle.",
            "Forgetting the isosceles equal base angles when the diagram marks only one of them.",
          ],
        },
      ],
    },
    {
      title: "Angles in Quadrilaterals",
      body: `### The 360° Total and Its Extra Rules\nThe **interior angles of any quadrilateral sum to 360°**.\n\nThe special quadrilaterals add constraints on top of that: a **parallelogram has opposite angles equal**, and a **rectangle has all four angles 90°**.`,
      groups: [
        {
          subTitle: "The general rule and the special cases",
          bullets: [
            "**Any quadrilateral:** the four interior angles add to 360°, provable by splitting it into two triangles along a diagonal.",
            "**Parallelogram:** opposite angles are equal, and adjacent angles are supplementary (they add to 180°).",
            "**Rectangle and square:** all four angles are 90° by definition, so angle questions there are usually decoys for other work.",
            "**Rhombus:** opposite angles equal, and the diagonals bisect the angles at the vertices they join.",
            "**Kite:** one pair of opposite angles equal, the pair between the unequal sides.",
            "**Trapezium:** an isosceles trapezium has two pairs of equal angles at the ends of each parallel side.",
            "The **diagonal of a quadrilateral** creates two triangles, each with the 180° sum, which is where the 360° comes from.",
          ],
        },
        {
          subTitle: "Using the rules in questions",
          bullets: [
            "With three angles known, the fourth is 360° minus their sum — write the subtraction, not just the answer.",
            "In a parallelogram, one given angle fixes all four: the opposite is equal, the two adjacent are 180° minus it.",
            "In a **kite or rhombus**, the diagonal often bisects an angle, creating the 90° or the half-angle the question wants.",
            "Algebra questions pair the rule with an equation such as x + 2x + 90 + 110 = 360.",
            "Reasons matter as much as arithmetic: 'opposite angles of a parallelogram are equal' must appear beside the value.",
            "Where a quadrilateral sits inside parallel lines, expect to combine the 360° total with the parallel-line angle pairs.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Using 180° for a quadrilateral; that total belongs to the triangle.",
            "Assuming all parallelogram angles are 90°; only the rectangle and square have that.",
            "Adding opposite angles of a general quadrilateral and expecting 180° — that property belongs to the **cyclic** quadrilateral.",
          ],
        },
      ],
    },
    {
      title: "Angles in Polygons",
      body: `### The Formulas for n Sides\nFor a polygon with **n sides**, the **sum of interior angles is (n − 2) × 180°**, and in a regular polygon **each interior angle is (n − 2) × 180° ÷ n**.\n\nThe **exterior angles of any polygon, regular or not, sum to 360°**, because walking the boundary means one full turn.`,
      groups: [
        {
          subTitle: "The three formulas",
          bullets: [
            "**Interior sum:** (n − 2) × 180°; a pentagon gives (5 − 2) × 180° = 540°.",
            "**Each interior angle of a regular polygon:** (n − 2) × 180° ÷ n; a regular hexagon gives 120°.",
            "**Each exterior angle of a regular polygon:** 360° ÷ n; a regular hexagon gives 60°.",
            "**Exterior sum, any polygon:** the exterior angles always add to 360°, however irregular the shape.",
            "Interior and exterior angles at the same vertex lie on a straight line, so they add to 180°.",
            "The sum comes from splitting the polygon into n − 2 triangles, each worth 180°.",
            "A regular polygon has all sides equal and all angles equal; an irregular one may share the totals without sharing the parts.",
          ],
        },
        {
          subTitle: "Working forwards and backwards",
          bullets: [
            "Given the interior angle of a regular polygon, **find n** by rearranging: n = 360 ÷ (180 − interior angle), using the exterior angle.",
            "Given the sum of interior angles, find n from n = (sum ÷ 180°) + 2.",
            "A polygon whose exterior angle is 30° has n = 360 ÷ 30 = 12 sides, a dodecagon.",
            "For an irregular polygon, one interior angle is found by subtracting the others from the (n − 2) × 180° total.",
            "Check answers against sense: each interior angle of a convex polygon is less than 180°.",
            "Questions often chain: exterior from 360 ÷ n, then interior from 180 − exterior.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Giving the **sum** when the question asks for **one** interior angle, and vice versa; read 'each' versus 'sum of' carefully.",
            "Using (n − 2) × 180° for the exterior angles; the exterior total is always 360°.",
            "Substituting the number of sides minus one, or plus one, into the formula — it is n − 2, the triangles the polygon splits into.",
          ],
        },
      ],
    },
    {
      title: "Angles in Parallel Lines",
      body: `### Z, F and C\nWhen a transversal crosses **parallel lines**, three angle pairs appear, and the reason must name the pair.\n\n**Alternate angles are equal (Z)**, **corresponding angles are equal (F)**, and **co-interior angles are supplementary (C, summing to 180°)**.`,
      groups: [
        {
          subTitle: "The three pairs",
          bullets: [
            "**Alternate angles (Z-angles):** on opposite sides of the transversal and inside the parallel lines; they are **equal**.",
            "**Corresponding angles (F-angles):** in matching corners at each crossing, both above or both below, on the same side; they are **equal**.",
            "**Co-interior angles (C-angles, same-side interior):** between the parallel lines on the same side of the transversal; they sum to **180°**.",
            "Each crossing of the transversal creates four angles, and vertically opposite and straight-line facts link them within each crossing.",
            "The rules run both ways: if a pair of alternate angles comes out equal, the lines are parallel — this proves parallelism.",
            "The 90° case: when the transversal is perpendicular to one line, it is perpendicular to the other, and all four angles at each crossing are 90°.",
          ],
        },
        {
          subTitle: "Writing the reason",
          bullets: [
            "**Always state the reason** beside the number: 'alternate angles, AB parallel to CD', not just 'they are equal'.",
            "Mark the Z, F or C shape lightly on the diagram to be sure which pair you have before writing.",
            "For co-interior angles, the reason must say **supplementary** or 'angles sum to 180°', never 'equal'.",
            "Name the parallel lines in the reason, since the rule depends on the lines being parallel.",
            "A two-step answer is common: find an alternate angle, then use angles on a straight line to reach the asked-for angle.",
            "When the diagram shows no parallel marks, do not use the rules; use only vertically opposite and straight-line facts.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Saying co-interior angles are equal; they are supplementary, and this single word changes the answer.",
            "Mixing up alternate and corresponding; if the angles are on opposite sides of the transversal they are alternate, same side corresponding.",
            "Using the rules on lines that are not marked parallel, or forgetting to name the lines in the reason.",
          ],
        },
      ],
    },
    {
      title: "Bearings",
      body: `### Clockwise From North, Three Digits\nA **bearing** is the direction of one point from another, **measured clockwise from north** and always **written as three digits**, like 045° or 270°.\n\nThe **back bearing** reverses the direction, and the **north line** drawn at the starting point is the tool that unlocks every bearing diagram.`,
      groups: [
        {
          subTitle: "The rules of the bearings system",
          bullets: [
            "**Measured clockwise from north**, from 000° (north itself) round to 359°.",
            "**Three digits always:** 045°, not 45°, and never N45°E — the exam wants the number alone.",
            "**Back bearing:** bearing + 180° if the bearing is under 180°, bearing − 180° if it is over 180°; the forward and back bearings differ by 180°.",
            "A bearing of 025° from A to B gives a back bearing of 205° from B to A.",
            "**Draw a north line at the starting point** before measuring; every bearing is measured at the point you are going **from**.",
            "North lines at two different points are parallel, which is why bearing diagrams become parallel-line questions.",
            "The four easy ones: north 000°, east 090°, south 180°, west 270°.",
          ],
        },
        {
          subTitle: "Solving bearing problems",
          bullets: [
            "Mark the journey A to B with its bearing, then **draw the north line at B** and use the 180° back bearing to fix the return direction.",
            "Distances with bearings turn into **scale drawings or right-angled triangles**, where the bearing gives the angle and trigonometry or Pythagoras gives the missing length.",
            "The angle between the outward and return journeys is the difference of the two bearings, taken the short way round.",
            "For a journey due east then due north, the direct distance is the hypotenuse of the right-angled triangle formed.",
            "On a scale drawing, measure the bearing with a protractor from the drawn north line, and state the answer to the degree.",
            "A question asking 'the bearing of A from B' is the reverse of 'the bearing of B from A' — check which point you stand at.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Writing 25° or N25°E instead of 045°-style three-digit bearings; both score zero.",
            "Measuring anticlockwise or from another compass point instead of clockwise from north.",
            "Adding 180° to a bearing already over 180°, giving a value past 360° — subtract instead.",
          ],
        },
      ],
    },
    {
      title: "Circle Theorems",
      body: `### The Theorems You Must Name\nA circle theorem answer is two marks: the number, and the **theorem in words** beside it.\n\nThe core theorems are the **angle at the centre**, **angles in the same segment**, the **angle in a semicircle**, the **cyclic quadrilateral**, the **tangent–radius 90°**, **two tangents from an external point** and the **alternate segment theorem**.`,
      groups: [
        {
          subTitle: "The angle theorems",
          bullets: [
            "**Angle at the centre is twice the angle at the circumference** when both stand on the same arc; the centre angle is the double.",
            "**Angles in the same segment are equal:** two angles at the circumference standing on the same arc, on the same side of the chord, match.",
            "**Angle in a semicircle is 90°:** the angle at the circumference standing on a diameter is a right angle.",
            "**Opposite angles of a cyclic quadrilateral sum to 180°** — a cyclic quadrilateral has all four vertices on the circle.",
            "The equal-chord facts: **equal chords are equidistant from the centre**, and the **perpendicular bisector of a chord passes through the centre**.",
            "Two radii plus a chord make an **isosceles triangle**, because the radii are equal — its base angles are equal.",
            "For a reflex angle at the centre, the angle at the circumference is half the **reflex** angle, not half the obtuse one; check which arc is meant.",
          ],
        },
        {
          subTitle: "The tangent theorems",
          bullets: [
            "**Tangent–radius:** a tangent is **perpendicular to the radius at the point of contact**, creating a 90° the moment you draw the radius.",
            "**Two tangents from an external point are equal in length**, and the line from the centre to the external point bisects the angle between them.",
            "The quadrilateral formed by the centre, the external point and the two contact points has two right angles.",
            "**Alternate segment theorem:** the angle between a tangent and a chord equals the angle in the alternate segment, the angle subtended by the chord on the far side.",
            "Drawing the radius to the point of contact is the standard first move in any tangent question, since it makes the 90° available.",
            "The alternate segment theorem is often the reason that unlocks the odd-looking angle; identify the tangent, the chord, and then the far-side angle.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Quoting the theorem number alone; the mark is for the **words**, so write 'angle at centre = 2 × angle at circumference'.",
            "Mixing up the alternate **segment** theorem with alternate **angles** in parallel lines — same adjective, different fact.",
            "For the cyclic quadrilateral, adding adjacent angles and expecting 180°; it is the **opposite** pair that sums to 180°.",
            "Halving the wrong centre angle when the centre angle is reflex; the circumference angle is half the arc it stands on.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_4 = chapterFour;
