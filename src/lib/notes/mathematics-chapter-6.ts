import type { Chapter } from "./types";

const chapterSix: Chapter = {
  number: 6,
  title: "Pythagoras & Trigonometry",
  intro:
    "Every trigonometry problem starts with a single question: does the triangle contain a right angle?\n\nIf it does, **Pythagoras' theorem** and **SOH CAH TOA** are the tools. If it does not, the sine rule or cosine rule takes over.\n\nThis chapter covers the three right-angle skills that the exam tests most often: finding a side with Pythagoras, finding a side with trigonometry, and finding an angle with inverse trigonometry.",
  subheadings: [
    {
      title: "Pythagoras Theorem",
      body: `**Pythagoras' theorem** states that in any right-angled triangle, the square of the **hypotenuse** equals the sum of the squares of the other two sides: **a² + b² = c²**, where c is always the hypotenuse.\n\nThe **hypotenuse** is the side opposite the right angle and is always the longest side of the triangle. Rearranging the formula lets you find any side as long as the other two are known.`,
      groups: [
        {
          subTitle: "Understanding the formula",
          bullets: [
            "**a² + b² = c²** is the standard form; c is the hypotenuse and a, b are the two shorter sides.",
            "**Identify the hypotenuse first** — it always sits opposite the right angle (the small square marked in the corner). If you mislabel the hypotenuse you will use the wrong version of the formula.",
            "**To find the hypotenuse:** c = √(a² + b²). Square both known sides, add, then square root.",
            "**To find a shorter side:** rearrange to a = √(c² − b²). Square the hypotenuse, subtract the square of the known side, then square root.",
            "**The triangle must have a right angle** for the theorem to apply. If no right angle is marked or stated, Pythagoras cannot be used.",
            "**Always check your answer** is sensible: the hypotenuse must be longer than either of the two shorter sides.",
          ],
        },
        {
          subTitle: "Working through a calculation",
          bullets: [
            "**Label the sides** a, b, and c before writing any numbers. Identify which side is the hypotenuse and which is the unknown.",
            "**Substitute the known values** into the correct form of the formula. Write the substitution line as working, even if the step seems obvious.",
            "**Square the values exactly** — do not round at this intermediate stage. Keep the full value on your calculator screen.",
            "**Take the square root** as the last step and round only at the end, to the degree of accuracy the question requests.",
            "**Include units** in the final answer. A length answer with no units loses the presentation mark.",
            "**Verify by substituting back:** if a² + b² really does equal c², the answer is correct.",
          ],
        },
        {
          subTitle: "Common applications",
          bullets: [
            "**Diagonal of a rectangle:** split the rectangle into two right-angled triangles; the diagonal is the hypotenuse.",
            "**Distance between two grid points:** the horizontal and vertical distances form the two shorter sides.",
            "**Height of an isosceles triangle:** drop a perpendicular from the apex to the base to create two right-angled triangles, then apply the theorem.",
            "**3D problems:** find a diagonal across the base first, then use that result as one side in a second Pythagoras step going upward.",
            "**Deciding whether a triangle is right-angled:** check whether a² + b² = c² for the three given side lengths; if yes, it has a right angle.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Forgetting to square root:** writing c = a² + b² instead of c = √(a² + b²) is the single most common Pythagoras error.",
            "**Adding instead of subtracting when finding a shorter side:** if c is the hypotenuse and you want a, the formula is a = √(c² − b²), not √(c² + b²).",
            "**Rounding too early:** rounding an intermediate diagonal in a 3D question and then using that rounded value introduces a compounding error — keep the full decimal until the final answer.",
          ],
        },
      ],
    },
    {
      title: "Trigonometry to Find Lengths",
      body: `**SOH CAH TOA** summarises the three trigonometric ratios for a right-angled triangle: **sin θ = Opposite / Hypotenuse**, **cos θ = Adjacent / Hypotenuse**, **tan θ = Opposite / Adjacent**.\n\nThe side names — opposite, adjacent, hypotenuse — are always defined **relative to the angle you are working with**, not relative to the right angle. Label the sides every time you start a new problem.`,
      groups: [
        {
          subTitle: "Labelling the sides correctly",
          bullets: [
            "**Hypotenuse (H):** always the side opposite the right angle; it is the longest side and does not change regardless of which angle you pick.",
            "**Opposite (O):** the side directly across the triangle from the angle θ you are using — it does not touch that angle.",
            "**Adjacent (A):** the side that forms one arm of angle θ but is not the hypotenuse.",
            "**Mark the angle first** on your diagram, then label H, O, A from that angle's perspective. If you switch to a different angle, O and A swap roles.",
            "**Write 'H', 'O', 'A' next to the sides** on a quick sketch before choosing your ratio. This one habit prevents the majority of SOH CAH TOA errors.",
          ],
        },
        {
          subTitle: "Choosing and applying the correct ratio",
          bullets: [
            "**SOH:** use sine when you have (or need) the side opposite the angle and the hypotenuse.",
            "**CAH:** use cosine when you have (or need) the side adjacent to the angle and the hypotenuse.",
            "**TOA:** use tangent when you have (or need) the opposite and adjacent sides — the hypotenuse is not involved.",
            "**Write the ratio in fraction form first:** e.g. sin 35° = x / 12, then multiply both sides by 12 to find x = 12 sin 35°.",
            "**If the unknown is in the denominator** (e.g. sin 35° = 7 / x), rearrange to x = 7 / sin 35° before evaluating.",
            "**Evaluate on a calculator** in degree mode and round the final answer to the precision specified in the question.",
            "**Include units** — the answer is a length, so write cm, m, or whatever unit the question uses.",
          ],
        },
        {
          subTitle: "Angles of elevation and depression",
          bullets: [
            "**Angle of elevation:** the angle measured upward from the horizontal to the line of sight.",
            "**Angle of depression:** the angle measured downward from the horizontal to the line of sight.",
            "**Draw a horizontal dashed line** at the observer's position first. The angle of depression is between that horizontal and the line of sight going down.",
            "**The alternate angles are equal:** the angle of depression from the top equals the angle of elevation from the bottom, because the two horizontals are parallel.",
            "**Set up the right-angled triangle** using the angle given, then identify the known side and the unknown side to choose sin, cos, or tan.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Using the wrong angle:** always label sides relative to the angle stated in the question, not the right angle and not the other acute angle.",
            "**Calculator in radian mode:** if the calculator gives an unexpected decimal (e.g. sin 30° = −0.988...), it is in radians — switch to degrees immediately.",
            "**Rounding a side mid-calculation:** if the problem has two trigonometry steps, keep the full unrounded value from the first step as input to the second.",
          ],
        },
      ],
    },
    {
      title: "Trigonometry to Find Angles",
      body: `When both sides of the relevant ratio are known, use the **inverse trigonometric functions** to calculate the angle: **θ = sin⁻¹(O/H)**, **θ = cos⁻¹(A/H)**, or **θ = tan⁻¹(O/A)**.\n\nThe inverse functions undo the ratio and return the angle in degrees. Ensure the calculator is in **degree mode** before pressing the inverse key.`,
      groups: [
        {
          subTitle: "Setting up the inverse calculation",
          bullets: [
            "**Identify the two known sides** relative to the unknown angle: label them O, A, and H.",
            "**Write the ratio first** as a fraction: e.g. tan θ = 5/8. This shows the examiner which ratio you chose before you use the inverse function.",
            "**Apply the inverse function:** θ = tan⁻¹(5/8). On a calculator this is usually the SHIFT or 2nd key followed by tan.",
            "**Read the display in degrees** — the answer should be a sensible acute angle (between 0° and 90°) for a right-angled triangle.",
            "**Round the final answer** to one decimal place unless the question specifies otherwise.",
            "**Label the answer** with a degree symbol: θ = 32.0°, not just 32.0.",
          ],
        },
        {
          subTitle: "Choosing which inverse function to use",
          bullets: [
            "**sin⁻¹:** use when you know the opposite side and the hypotenuse.",
            "**cos⁻¹:** use when you know the adjacent side and the hypotenuse.",
            "**tan⁻¹:** use when you know the opposite and adjacent sides — the hypotenuse is not needed.",
            "**Two angles in a right-angled triangle sum to 90°:** once you have found one acute angle, you can subtract from 90° to get the other rather than repeating a trig calculation.",
            "**Check the angle sum:** the three interior angles of any triangle must add up to 180°. Use this as a quick verification after finding both acute angles.",
          ],
        },
        {
          subTitle: "Practical contexts",
          bullets: [
            "**Slope and gradient questions:** the angle of a ramp is tan⁻¹(rise/run), where rise is the vertical height and run is the horizontal distance.",
            "**Bearings:** after finding the triangle's angle with an inverse function, convert it to a three-figure bearing by considering the direction from north.",
            "**3D problems:** find the required sides using Pythagoras first, then apply the inverse trig function to the resulting right-angled triangle.",
            "**Angle between a line and the base plane:** identify the shadow of the line on the base, calculate its length with Pythagoras, then use tan⁻¹(height / shadow length).",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Writing tan θ = 5/8 and then giving 5/8 as the answer:** the inverse function must be applied — tan θ = 5/8 gives θ = tan⁻¹(5/8) ≈ 32.0°, not 0.625.",
            "**Using sin⁻¹ when tan⁻¹ is needed:** always re-label the sides before choosing the ratio. A quick O, A, H label on the sketch prevents this.",
            "**Forgetting degree mode:** inverse trig in radian mode gives a value between 0 and π/2, which looks plausible but is wrong — always verify that your calculator shows the ° symbol.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_6 = chapterSix;
export const MATHEMATICS_CHAPTERS_6: Chapter[] = [chapterSix];
