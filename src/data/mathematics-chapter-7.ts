import type { Chapter } from "../lib/notes/types";

// mathematics-chapter-7.ts — chapters 111–113 (Pythagoras & Trigonometry)
export const MATHEMATICS_CHAPTERS_7: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // 111. Pythagoras Theorem
  // ─────────────────────────────────────────────────────────────
  {
    number: 111,
    title: "Pythagoras Theorem",
    section: "Pythagoras & Trigonometry",
    topic: "Pythagoras & Trigonometry",
    intro: `Pythagoras' theorem relates the three sides of any right-angled triangle and is one of the most used results in IGCSE geometry. It lets you find a missing side when two sides are known, and it underpins distance calculations in coordinate geometry. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Pythagoras Theorem",
        body: `**Pythagoras' theorem** states that in any **right-angled triangle**, the square of the **hypotenuse** equals the sum of the squares of the other two sides: a² + b² = c², where **c is the hypotenuse** (the side opposite the right angle, always the longest side).\n\n**Finding the hypotenuse:** c = √(a² + b²). For a triangle with legs 3 cm and 4 cm: c = √(9 + 16) = √25 = **5 cm**.\n\n**Finding a shorter side:** a = √(c² − b²). For a triangle with hypotenuse 13 cm and one leg 5 cm: a = √(169 − 25) = √144 = **12 cm**.\n\n**3D problems:** apply Pythagoras twice — first find a diagonal across the base, then use that diagonal as one leg of a vertical triangle. For a cuboid with dimensions l, w, h, the space diagonal d satisfies d² = l² + w² + h².\n\n**Checking for right angles:** if a² + b² = c² for the three sides of a triangle, the triangle is right-angled. The classic Pythagorean triples to recognise are **3-4-5**, **5-12-13**, **8-15-17**, and any multiples of these (e.g. 6-8-10).\n\n**Distance between two points:** the straight-line distance between (x₁, y₁) and (x₂, y₂) is d = √((x₂ − x₁)² + (y₂ − y₁)²), which is simply Pythagoras applied to the horizontal and vertical separations.`,
        groups: [
          {
            subTitle: "Identifying the hypotenuse",
            bullets: [
              "**Hypotenuse:** always opposite the right angle (marked with a small square) and always the longest side of a right-angled triangle.",
              "**Label sides:** conventionally label the hypotenuse c and the two shorter sides a and b before substituting into a² + b² = c².",
              "**Right angle must exist:** Pythagoras' theorem only applies to right-angled triangles — confirm the right angle is marked before using the formula.",
              "**Scaling:** if 3-4-5 is a Pythagorean triple, so is 6-8-10 and 9-12-15 — multiply all three sides by the same factor.",
            ],
          },
          {
            subTitle: "Applying the theorem",
            bullets: [
              "**Finding c (hypotenuse):** c = √(a² + b²); substitute and evaluate under the root sign completely before taking the square root.",
              "**Finding a shorter side:** rearrange to a² = c² − b², then a = √(c² − b²); subtract the known shorter side's square from the hypotenuse squared.",
              "**Worked example — hypotenuse:** legs 7 cm and 24 cm → c = √(49 + 576) = √625 = 25 cm.",
              "**Worked example — shorter side:** hypotenuse 17 cm, one leg 8 cm → a = √(289 − 64) = √225 = 15 cm.",
              "**Exact answers:** leave as a surd (e.g. √50 = 5√2) unless the question asks for a decimal or a specific degree of accuracy.",
            ],
          },
          {
            subTitle: "3D applications",
            bullets: [
              "**Cuboid space diagonal:** d² = l² + w² + h²; for a box 3 × 4 × 12, d = √(9 + 16 + 144) = √169 = 13.",
              "**Base diagonal first:** in a pyramid or prism, calculate the base diagonal using Pythagoras in 2D, then use that result as one leg for the 3D triangle.",
              "**Height of a cone or pyramid:** use Pythagoras with the slant height as the hypotenuse and the base radius (or half base length) as one leg.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Adding squares for a shorter side:** a² = c² − b² not c² + b²; always subtract when finding a leg.",
              "**Squaring after adding:** compute a² and b² separately, add them, then take the square root — do not add a and b first.",
              "**Using Pythagoras on non-right-angled triangles:** check the right angle is marked; if not, use the cosine rule instead.",
              "**Rounding too early:** keep the full calculator value until the last step to avoid rounding errors in multi-step problems.",
            ],
          },
        ],
        examinerTips: [
          "Always identify and label the hypotenuse before substituting — it goes on its own on one side of the equation.",
          "For 3D problems, draw and label a 2D right-angled triangle extracted from the diagram to make the structure clear.",
          "If the answer is a perfect square under the root, the question likely has an integer answer — check for Pythagorean triples.",
          "Carry at least four significant figures through intermediate steps and only round the final answer to the required accuracy.",
        ],
        commonMistakes: [
          "Adding the squares and then subtracting instead of subtracting first: for a shorter side, compute c² − b², then take the root — not √(c² + b²).",
          "Forgetting that the hypotenuse is always opposite the right angle — misidentifying which side is c leads to an incorrect setup.",
          "Rounding a mid-calculation value and carrying it forward, introducing error into the final answer.",
        ],
        recap: [
          "A right-angled triangle has legs of 9 cm and 40 cm. Calculate the length of the hypotenuse. [2]",
          "The hypotenuse of a right-angled triangle is 26 cm and one leg is 10 cm. Find the length of the other leg. [2]",
          "A cuboid has dimensions 5 cm × 12 cm × 84 cm. Calculate the length of the space diagonal. [3]",
          "Show that a triangle with sides 7 cm, 24 cm, and 25 cm is right-angled. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 112. Trigonometry to Find Lengths
  // ─────────────────────────────────────────────────────────────
  {
    number: 112,
    title: "Trigonometry to Find Lengths",
    section: "Pythagoras & Trigonometry",
    topic: "Pythagoras & Trigonometry",
    intro: `Trigonometric ratios — sine, cosine, and tangent — connect the angles of a right-angled triangle to its side lengths. When an angle and one side are known, these ratios let you calculate any other side. This skill appears in geometry, mensuration, and 3D problems across both IGCSE papers. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Trigonometry to Find Lengths",
        body: `The three **trigonometric ratios** are defined for a right-angled triangle with respect to a chosen acute angle θ:\n\n- **sin θ = opposite / hypotenuse** (SOH)\n- **cos θ = adjacent / hypotenuse** (CAH)\n- **tan θ = opposite / adjacent** (TOA)\n\nThe memory aid **SOH–CAH–TOA** keeps the ratios in order. The side **opposite** θ is across the triangle from θ; the **adjacent** side is next to θ (and not the hypotenuse); the **hypotenuse** is the longest side opposite the right angle.\n\n**Finding an unknown side:** identify which ratio connects the given angle, the given side, and the unknown side, then rearrange.\n\n**Example 1 — finding the opposite:** angle θ = 30°, hypotenuse = 10 cm, find the opposite side.\nsin 30° = opposite / 10 → opposite = 10 × sin 30° = 10 × 0.5 = **5 cm**.\n\n**Example 2 — finding the adjacent:** angle θ = 40°, hypotenuse = 15 cm, find the adjacent side.\ncos 40° = adjacent / 15 → adjacent = 15 × cos 40° ≈ 15 × 0.766 = **11.5 cm**.\n\n**Example 3 — finding the hypotenuse:** angle θ = 25°, opposite = 8 cm, find the hypotenuse.\nsin 25° = 8 / hypotenuse → hypotenuse = 8 / sin 25° ≈ 8 / 0.423 ≈ **18.9 cm**.\n\n**Rearranging:** if the unknown is in the denominator (as in Example 3), divide the known side by the trigonometric ratio value.\n\n**3D trigonometry:** extract a right-angled triangle from the 3D solid, label its sides relative to the relevant angle, then apply SOH–CAH–TOA or Pythagoras as needed.`,
        groups: [
          {
            subTitle: "Labelling sides relative to the angle",
            bullets: [
              "**Hypotenuse:** always opposite the right angle; label it first — it does not change regardless of which acute angle is chosen.",
              "**Opposite:** the side directly across from the angle θ; it does not touch θ at all.",
              "**Adjacent:** the side that forms one arm of angle θ, excluding the hypotenuse.",
              "**Re-labelling for a different angle:** if you work from the other acute angle, opposite and adjacent swap — always re-label before substituting.",
            ],
          },
          {
            subTitle: "Choosing and applying the correct ratio",
            bullets: [
              "**SOH — sin θ:** use when you have or want the opposite and hypotenuse.",
              "**CAH — cos θ:** use when you have or want the adjacent and hypotenuse.",
              "**TOA — tan θ:** use when you have or want the opposite and adjacent (and the hypotenuse is not involved).",
              "**Rearranging to find the unknown side:** if unknown = ratio × known, multiply; if known = ratio × unknown, divide by the ratio.",
              "**Worked example:** θ = 55°, adjacent = 6 cm, find opposite → tan 55° = opposite/6 → opposite = 6 × tan 55° ≈ 6 × 1.428 ≈ 8.57 cm.",
            ],
          },
          {
            subTitle: "Angles of elevation and depression",
            bullets: [
              "**Angle of elevation:** the angle measured upward from the horizontal to a line of sight — forms the angle at the observer's position in a right-angled triangle.",
              "**Angle of depression:** the angle measured downward from the horizontal to the object — equal to the angle of elevation from the object (alternate angles).",
              "**Setting up the triangle:** draw a horizontal line at the observer, mark the angle, then identify opposite (vertical height difference) and adjacent (horizontal distance).",
              "**Example:** a 50 m tower is observed at an angle of elevation of 35° — tan 35° = 50/d → d = 50/tan 35° ≈ 71.4 m.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using the wrong ratio:** always check which two sides are involved (given and unknown) before selecting sin, cos, or tan.",
              "**Calculator in degrees mode:** ensure the calculator is set to DEG, not RAD or GRAD — a wrong mode gives a completely wrong answer.",
              "**Rounding too early:** keep the full display value of the trigonometric ratio in the calculator and only round the final length.",
              "**Forgetting to rearrange:** if the unknown is in the denominator, divide the known side by the ratio rather than multiplying.",
            ],
          },
        ],
        examinerTips: [
          "Label opposite, adjacent, and hypotenuse on the diagram before choosing a ratio — a labelled diagram earns clarity and prevents ratio errors.",
          "Write the ratio formula first (e.g. sin θ = opp/hyp), substitute values, then rearrange — this structure earns method marks.",
          "For angles of elevation and depression, always draw a horizontal reference line to identify the right angle and the given angle correctly.",
          "Check your answer is reasonable: the hypotenuse must be longer than either leg, and the side opposite the larger angle must be longer than the side opposite the smaller angle.",
        ],
        commonMistakes: [
          "Dividing instead of multiplying (or vice versa) when rearranging: if opp = hyp × sin θ and hyp is known, multiply — if opp is known and hyp is wanted, divide opp by sin θ.",
          "Labelling opposite and adjacent the wrong way round when switching to the other acute angle in the triangle.",
          "Leaving the calculator in radian mode — always check the mode setting before trigonometry calculations.",
        ],
        recap: [
          "In a right-angled triangle, angle θ = 48° and the hypotenuse is 20 cm. Find the length of the side opposite θ. [2]",
          "A ladder of length 8 m leans against a wall at an angle of 65° to the ground. Calculate the height the ladder reaches up the wall. [2]",
          "The angle of elevation of the top of a building from a point 30 m away on level ground is 42°. Find the height of the building. [3]",
          "In triangle ABC, angle B = 90°, angle A = 37°, and BC = 14 cm. Find the length of AB. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 113. Trigonometry to Find Angles
  // ─────────────────────────────────────────────────────────────
  {
    number: 113,
    title: "Trigonometry to Find Angles",
    section: "Pythagoras & Trigonometry",
    topic: "Pythagoras & Trigonometry",
    intro: `When two sides of a right-angled triangle are known, the inverse trigonometric functions — sin⁻¹, cos⁻¹, and tan⁻¹ — allow you to calculate either acute angle precisely. This technique is used in bearings, slope problems, and 3D angle calculations throughout IGCSE Mathematics. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Trigonometry to Find Angles",
        body: `To find an **angle** from two known sides, form the appropriate trigonometric ratio and then apply the **inverse function** on a calculator.\n\nThe three ratios and their inverses:\n- sin θ = opposite/hypotenuse → θ = sin⁻¹(opposite/hypotenuse)\n- cos θ = adjacent/hypotenuse → θ = cos⁻¹(adjacent/hypotenuse)\n- tan θ = opposite/adjacent → θ = tan⁻¹(opposite/adjacent)\n\n**Example 1 — using sin⁻¹:** opposite = 7 cm, hypotenuse = 14 cm.\nsin θ = 7/14 = 0.5 → θ = sin⁻¹(0.5) = **30°**.\n\n**Example 2 — using cos⁻¹:** adjacent = 5 cm, hypotenuse = 13 cm.\ncos θ = 5/13 → θ = cos⁻¹(5/13) ≈ cos⁻¹(0.3846) ≈ **67.4°**.\n\n**Example 3 — using tan⁻¹:** opposite = 9 cm, adjacent = 12 cm.\ntan θ = 9/12 = 0.75 → θ = tan⁻¹(0.75) ≈ **36.9°**.\n\n**Finding the second angle:** once one acute angle θ is found, the other acute angle = 90° − θ (since all angles in a triangle sum to 180° and one angle is 90°).\n\n**Bearings and direction angles:** angles measured clockwise from north are bearings; extract the relevant right-angled triangle, identify opposite and adjacent relative to the bearing angle, and use tan⁻¹ to find the angle, then convert to a three-digit bearing if required.\n\n**3D angles:** find the angle of inclination or the angle between a line and a plane by extracting the relevant right-angled triangle from the 3D diagram, label its sides, and apply the appropriate inverse ratio.`,
        groups: [
          {
            subTitle: "Choosing the correct inverse ratio",
            bullets: [
              "**sin⁻¹:** use when the two known sides are the opposite and hypotenuse — compute the ratio opp/hyp, then press sin⁻¹.",
              "**cos⁻¹:** use when the two known sides are the adjacent and hypotenuse — compute adj/hyp, then press cos⁻¹.",
              "**tan⁻¹:** use when the two known sides are the opposite and adjacent — compute opp/adj, then press tan⁻¹.",
              "**Label first:** identify opposite, adjacent, and hypotenuse relative to the angle you are finding before selecting the ratio.",
            ],
          },
          {
            subTitle: "Calculator technique",
            bullets: [
              "**Mode — degrees:** confirm the calculator is in DEG mode before pressing any trigonometric key.",
              "**Inputting the inverse:** press the SHIFT (or 2nd) key, then sin/cos/tan, then the decimal value inside the brackets.",
              "**Keep full precision:** compute the fraction (e.g. 7/14) inside the inverse function in one step — do not round the decimal before applying the inverse.",
              "**Rounding the angle:** give angles to one decimal place unless the question specifies otherwise (e.g. 'nearest degree' or 'nearest minute').",
              "**Verification:** check by substituting your angle back into the original ratio — the ratio should return the value of the fraction you started with.",
            ],
          },
          {
            subTitle: "Applications — bearings and 3D",
            bullets: [
              "**Bearings:** a bearing is measured clockwise from north and written as three digits (e.g. 047°). Identify the north direction, draw the right-angled triangle, then use tan⁻¹ with the east/west (opp) and north/south (adj) components.",
              "**Angle of inclination:** the angle a slope or line makes with the horizontal — use tan⁻¹(vertical rise / horizontal run).",
              "**Angle between a line and a plane in 3D:** project the line onto the plane to form the adjacent side, the perpendicular height is the opposite, and apply tan⁻¹.",
              "**Angle in a triangle given all three sides:** use Pythagoras first to confirm it is right-angled, then apply the appropriate inverse ratio.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Computing sin(ratio) instead of sin⁻¹(ratio):** pressing sin when you need sin⁻¹ gives a completely wrong answer — use the inverse key.",
              "**Rounding the decimal ratio before applying the inverse:** keep the fraction exact inside the inverse function to avoid a rounding error in the angle.",
              "**Misidentifying opposite and adjacent:** re-label the sides every time the reference angle changes.",
              "**Not converting to a three-digit bearing:** if the question asks for a bearing, write e.g. 047° not just 47°.",
            ],
          },
        ],
        examinerTips: [
          "Write the ratio equation first — e.g. tan θ = 9/12 — before applying the inverse, so the method is clearly shown for mark-scheme credit.",
          "Always check the calculator is in degree mode; a quick check is sin 30° — if the display shows 0.5 the mode is correct.",
          "For bearings questions, sketch a compass with north marked vertically and identify the right-angled triangle before writing any equation.",
          "Round only the final answer; carry the unrounded decimal from the ratio through the inverse function in one calculator sequence.",
        ],
        commonMistakes: [
          "Using sin instead of sin⁻¹ — finding an angle requires the inverse trigonometric function, not the forward function.",
          "Rounding the ratio to two decimal places before applying the inverse, losing accuracy in the calculated angle.",
          "Forgetting to re-label sides when finding the second angle: opposite and adjacent swap when you switch to the complementary angle.",
        ],
        recap: [
          "A right-angled triangle has an opposite side of 5 cm and a hypotenuse of 10 cm. Find the angle opposite the 5 cm side. [2]",
          "In triangle PQR, angle Q = 90°, PQ = 8 cm, and PR = 17 cm. Find angle P. [2]",
          "A ramp rises 3 m over a horizontal distance of 7 m. Calculate the angle the ramp makes with the horizontal. [2]",
          "A ship travels 12 km east and 9 km north. Calculate the bearing of the ship from its starting point, to the nearest degree. [3]",
        ],
      },
    ],
  },
];
