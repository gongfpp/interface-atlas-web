# Color Palette / 调色板

> Foundation · `id: color-palette`

Start from one base hue and generate an ordered ramp (50–900), then assign primary, secondary, accent and neutral roles. Steps advance by lightness rather than ad-hoc picks, so hover, disabled and border always have the right depth on hand. Name roles before hex values and themes stay swappable.

**Aliases:** 调色板 · 配色 · 色板 · 色阶 · 颜色系统 · color palette · palette

**Category:** Color / Foundation

## When to use

- The product needs an extensible brand ramp plus neutral greys
- One hue needs several depths for hover, active and disabled
- Light and dark themes share roles and swap only ramp values

## When not to use

- One-off illustration or campaign colours with no system need
- Ten saturated hues stacked with no hierarchy
- A permanent two-colour black-and-white UI — hard-code it

## Variants

- **Single hue ramp** (单色相色阶) — One base hue stretched 50–900 plus neutrals
- **Complementary** (互补双色) — Secondary from the opposite side of the wheel — high contrast
- **Monochrome** (单色系) — Lightness-only with a single accent spark

## Platform API

- `color-mix()`
- `oklch()`
- `hsl()`

## In code

| Framework | Name |
| --- | --- |
| CSS | [oklch()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) — Perceptually even ramp interpolation |
| CSS | [color-mix()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix) |
| Tailwind CSS | [color palette (50–950)](https://tailwindcss.com/docs/colors) |

## Implementation

**CSS:** `oklch()` `color-mix()` `hsl()` `--color-primary-500`

Generate ten steps (50–900) in oklch() or hsl() by lightness: near L≈97% at the light end, L≈12% at the dark end, perceptually even between; ease saturation down at the light end and up at the dark. Name steps --color-primary-500, never --color-brand-blue. Keep a separate low-saturation neutral ramp — no pure black or white. Spot-check 500/600 against white text with a contrast tool.

## Agent task prompt

```text
Implement a colour palette in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- A 50–900 ramp from the base hue, advancing by lightness
- Primary / secondary / accent / neutral roles
- Names follow role and step, never the hue name
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Generate a colour palette — a 50–900 ramp from the brand hue plus primary, secondary, accent and neutral roles.

**Design:** Palette spec: one base hue generates ten steps 50–900 via oklch lightness; primary sits at 500–600; a single accent; a separate neutral ramp. Ease saturation down at the light end and up at the dark. Every text-on-background pair must pass WCAG AA. Name by role, not by hue.

**Implementation:** Emit the ramp as CSS custom properties: --color-primary-50: oklch(97% 0.02 250); … --color-primary-900: oklch(18% 0.05 250);. A role layer then references steps: --color-accent: var(--color-primary-600). Map into Tailwind @theme. Generate once from a script; afterwards only re-point roles.

## Related

- [semantic-color](/foundation/semantic-color) — Used with
- [contrast-ratio](/foundation/contrast-ratio) — Used with
- [minimalism](/foundation/minimalism) — Used with

## Sources

- [Material Design — Color system](https://m3.material.io/styles/color/system/overview)
- [MDN — oklch()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)
- [oklch.com — Color picker](https://oklch.com/)

---

JSON: `/api/concept/foundation/color-palette.json` · Site: /en/foundation/color-palette
