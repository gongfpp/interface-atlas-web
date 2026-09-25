# Line Height / 行高

> Foundation · `id: line-height`

The vertical space one line of text occupies — it sets how tight or airy a paragraph feels. Display type tightens (1.1–1.3) to look built; body loosens (1.5–1.8) to support line-by-line reading; quotes can go looser still. Prefer unitless multiples so leading scales with font size instead of freezing in pixels.

**Aliases:** 行高 · 行距 · leading · 行间距 · 排得挤不挤 · 松紧 · line height

**Category:** Typography / Foundation

## When to use

- Multi-line body copy needs a trackable reading rhythm
- Headings and body share a page and leading must separate them
- Font sizes respond to viewport and leading must scale with them

## When not to use

- Single-line labels — use flex for vertical centring, not leading
- Body leading beyond 2.0 — lines lose their connection
- Pixel-locked leading that clips or overlaps when size changes

## Variants

- **Tight display** (收紧显示) — 1.1–1.3 — large headings stay solid
- **Comfortable body** (舒适正文) — 1.5–1.8 — long copy stays trackable
- **Loose editorial** (松弛编辑) — 1.9–2.2 — quotes and verse breathe

## Platform API

- `line-height`
- `leading`

## In code

| Framework | Name |
| --- | --- |
| CSS | [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) |
| Tailwind CSS | [leading-none / leading-normal / leading-relaxed](https://tailwindcss.com/docs/line-height) |

## Implementation

**CSS:** `line-height: 1.6` `line-height: normal` `leading-relaxed`

Set unitless multiples (line-height: 1.6) so children recompute against their own size; pixels freeze leading on the parent size. Starting points: display 1.15–1.3, body 1.6–1.75, captions 1.4. CJK body reads a touch looser than Latin — around 1.7. Verify separately if you use half-leading tricks for first-baseline alignment.

## Compare dimensions (`typography-trio`)

- **Best for text:** Body paragraphs mainly; display tightens separately
- **Adjust granularity:** Continuous — 0.05 is already perceptible
- **Responsive:** Medium — two steps across breakpoints

## Agent task prompt

```text
Implement line height in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- Three unitless leading tokens for display / body / caption
- Referenced together with the type scale; no pixel-locked leading
- CJK body copy set slightly looser
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Define the project's leading system — line-height for display, body and captions.

**Design:** Leading spec: display 1.15, subhead 1.3, body 1.65, caption 1.4 — all unitless. CJK long-form body loosens to 1.7. Paragraph spacing at least 0.75em. Deliver leading together with the type scale; never tune one without the other.

**Implementation:** Pair leading variables with the type scale: --leading-tight: 1.2; --leading-body: 1.65; --leading-loose: 1.9. Body classes combine font-size: var(--text-base) with line-height: var(--leading-body). Map to Tailwind leading-* tokens. Never write line-height: 24px inside a component.

## Related

- [type-scale](/foundation/type-scale) — Used with
- [measure](/foundation/measure) — Used with
- [font-stack](/foundation/font-stack) — Used with

## Sources

- [MDN — line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [Practical Typography — Line spacing](https://practicaltypography.com/line-spacing.html)

---

JSON: `/api/concept/foundation/line-height.json` · Site: /en/foundation/line-height
