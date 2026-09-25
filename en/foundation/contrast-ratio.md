# Contrast Ratio / 对比度

> Foundation · `id: contrast-ratio`

The luminance ratio between foreground and background — the measure of whether text can be read. WCAG 2.1 sets hard floors: 4.5:1 for AA body, 7:1 for AAA, dropping to 3:1 and 4.5:1 for large text. APCA refines this by weight and size against perception. Compute the ratio before picking colours; never sign off by eye.

**Aliases:** 对比度 · 文字对比度 · 可读性对比 · WCAG 对比 · 看不清 · contrast ratio · color contrast

**Category:** Color / Foundation

## When to use

- Body copy, labels and button text must meet accessibility floors
- Text legibility must be re-verified after a theme switch
- Greyscale muted text silently drops below 3:1

## When not to use

- Decorative display type or pure graphics — non-text contrast rules apply instead
- Disabled control text — explicitly exempt in WCAG
- Mandating AAA everywhere and strangling the design space

## Variants

- **AA body text** (AA 正文) — 4.5:1 — the default floor for most UI
- **AAA** (AAA 高标) — 7:1 — long-form and older audiences
- **Large text exception** (大号文字豁免) — ≥24px or 18.66px bold drops the floor to 3:1

## Platform API

- `WCAG 2.1`
- `APCA`
- `contrast-ratio()`

## In code

| Framework | Name |
| --- | --- |
| W3C | [WCAG 2.1 — Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) |
| W3C | [APCA](https://www.myndex.com/APCA/) |
| CSS | [contrast-ratio()](https://drafts.csswg.org/css-color-5/#contrast-ratio) — The ratio function in CSS Color 5 |

## Implementation

**CSS:** `color-mix()` `oklch()` `contrast-ratio()` `@media (prefers-contrast: more)`

The formula: convert sRGB to linear luminance Y, then (L1+0.05)/(L2+0.05). Lock body text at 4.5:1 and large text at 3:1. Do not fake hierarchy with opacity — use the ink-2 step instead. High-contrast themes come from prefers-contrast: more or a dedicated role table. Spot-check every text role pair before shipping, muted and line especially.

## Agent task prompt

```text
Implement contrast ratio in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- Text pairs pass WCAG AA (4.5:1 body, 3:1 large)
- Helpers for ratio computation and pass/fail judgement
- High contrast via its own role table or prefers-contrast
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Check interface contrast — body, headings and captions must meet WCAG AA against their backgrounds.

**Design:** Contrast spec: body ≥4.5:1; large text (≥24px or 18.66px bold) ≥3:1; AAA targets 7:1 and 4.5:1. Borders and icons need non-text contrast ≥3:1. Disabled states are exempt but must stay recognisable. High contrast uses its own value table. Compute ratios before colours enter the design.

**Implementation:** Ship relativeLuminance(hex) and contrastRatio(a, b) helpers and assert every semantic pair in Storybook or the design-system docs. Switch high-contrast role values with @media (prefers-contrast: more). Have CI batch-check the token table and list failing pairs.

## Related

- [semantic-color](/foundation/semantic-color) — Used with
- [color-palette](/foundation/color-palette) — Used with
- [elevation](/foundation/elevation) — Used with

## Sources

- [W3C — Understanding Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [APCA — Advanced Perceptual Contrast Algorithm](https://www.myndex.com/APCA/)
- [WebAIM — Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

JSON: `/api/concept/foundation/contrast-ratio.json` · Site: /en/foundation/contrast-ratio
