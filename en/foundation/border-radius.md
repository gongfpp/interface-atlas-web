# Border Radius / 圆角

> Foundation · `id: border-radius`

Rounding a box's corners softens it; the bigger the radius, the more it reads as a card or bubble. Radius must scale with the component — small on buttons, medium on cards, large on containers — so everything looks like one family. Adjacent rounded boxes leave an awkward notch, fixed with concentric radii (outer = inner + gap) or by aligning them flush.

**Aliases:** 圆角 · 圆角半径 · 为什么卡片看起来不精致 · 按钮圆角 · 胶囊形状 · border radius · rounded corners · corner radius

**Category:** Foundation / Shape / Visual

## When to use

- Softening the brand feel while separating cards, buttons and containers
- Buttons, inputs and avatars need one shared rounding language
- Nested containers need concentric radii so inner and outer corners stay smooth

## When not to use

- Serious data tables and pixel-aligned grids
- Heavy rounding on a 12px icon just smears it
- Blowing a rectangular card into a pill and losing information density

## Variants

- **Soft** (柔和小圆角) — 4–8px — restrained and professional for tables and dense controls
- **Rounded** (圆润中圆角) — 12–16px — the usual card and panel step, friendly but not gimmicky
- **Pill & circle** (胶囊与圆形) — 9999px or 50% — for buttons, tags and avatars

## Platform API

- `border-radius`
- `border-start-start-radius`
- `50%`
- `--radius-lg`

## In code

| Framework | Name |
| --- | --- |
| CSS | [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) — Slash syntax controls horizontal and vertical radii separately |
| Tailwind CSS | [rounded-lg / rounded-full](https://tailwindcss.com/docs/border-radius) — Stepped rounding utilities |
| Design tokens | --radius-sm / --radius-md / --radius-full |

## Implementation

**CSS:** `border-radius: 8px` `border-radius: 0.5rem` `border-radius: 9999px` `border-radius: 50%` `border-radius: calc(var(--radius-md) - var(--space-2))`

Define four or five rem steps — --radius-sm 4px, --radius-md 8px, --radius-lg 12px, --radius-xl 16px, --radius-full 9999px. Components pick a step by their own size, and inside a visibly rounded parent the child uses calc(var(--radius-lg) - var(--space-2)) to stay concentric. Avatars and switches take 50% or --radius-full. Watch anti-aliasing under 1px borders and inset by 1px where needed.

## Agent task prompt

```text
Implement a border-radius system in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- Four to five radius tokens; components pick a step by size
- Nested containers use concentric calc(outer − padding)
- Avatars and switches use 50% / full; no scattered raw px
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Build a radius system — stepped tokens unifying buttons, cards and containers, with concentric radii for nesting.

**Design:** Radius spec: four to five steps (sm 4 / md 8 / lg 12 / xl 16 / full 9999px); buttons use md, cards lg, large panels xl, avatars 50%. For nested containers, inner radius = outer − padding. Keep to four radius steps per screen, and align inner and outer edges under 1px borders.

**Implementation:** Write the tokens as :root { --radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px; --radius-xl: 16px; --radius-full: 9999px; } and reference var(--radius-md) from components. For concentric corners use border-radius: calc(var(--radius-lg) - var(--space-2)). Map them into Tailwind theme --radius-* tokens and avoid scattering raw px values in components.

## Related

- [spacing-scale](/foundation/spacing-scale) — Similar
- [elevation](/foundation/elevation) — Used with
- [button](/foundation/button) — Used with
- [card](/foundation/card) — Used with

## Sources

- [MDN — border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
- [Material Design — Shape](https://m3.material.io/styles/shape/overview)
- [Tailwind CSS — Border Radius](https://tailwindcss.com/docs/border-radius)

---

JSON: `/api/concept/foundation/border-radius.json` · Site: /en/foundation/border-radius
