# Rating / 评分

> Components · `id: rating`

An input for a bounded subjective score, often represented by stars or labeled satisfaction levels. Hover previews a value; pointer or keyboard selection commits it. Give each level a text meaning, distinguish no rating from the lowest score, and label read-only averages and their sample counts clearly.

**Aliases:** 点星星评分 · 五颗星评价 · 满意度打分 · star rating

**Category:** Feedback

## When to use

- Collect satisfaction after a service or product experience.
- Gather lightweight feedback with defined score levels.

## When not to use

- Add text feedback when reasons matter.
- Use numeric input for precise quantities or measurements.

## Variants

- **Stars** (星级评分) — Five stars with labeled score levels.
- **Sentiment** (感受评分) — Use expressive symbols to indicate satisfaction.

## Implementation

**CSS:** `:checked` `:focus-visible` `transform: scale()`

Use same-name radios for one score. Label each value and keep hover preview separate from the committed score. Disable submission before selection and respect reduced motion. Do not use interactive roles for read-only ratings.

## Agent task prompt

```text
Inspect existing components and tokens before implementing Rating.
Requirements:
- Use same-name radios for one score. Label each value and keep hover preview separate from the committed score. Disable submission before selection and respect reduced motion. Do not use interactive roles for read-only ratings.
- Hover is temporary; leaving restores the selected score.
- An unset value is distinct from a score; submission gives feedback.
- Support narrow screens, both themes and reduced motion.
- Add no dependencies.
Run existing checks and list changed files and validation results.
```

### Other prompt layers

**Basic:** Create a Rating component. Collect satisfaction after a service or product experience.

**Design:** Design a Rating with clear hierarchy and state feedback. Five stars with labeled score levels. Use expressive symbols to indicate satisfaction. Hover is temporary; leaving restores the selected score. An unset value is distinct from a score; submission gives feedback.

**Implementation:** Use same-name radios for one score. Label each value and keep hover preview separate from the committed score. Disable submission before selection and respect reduced motion. Do not use interactive roles for read-only ratings.

## Related

- [radio](/components/radio) — Similar
- [slider](/components/slider) — Similar
- [button](/components/button) — Similar

## Sources

- [W3C WAI — Accessible interaction patterns](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)

---

JSON: `/api/concept/components/rating.json` · Site: /en/components/rating
