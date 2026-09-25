# Elevation / 层级

> Foundation · `id: elevation`

Shadow depth expresses how far an element sits from the page: 0 rests flat, 1–2 lift, 3 and above become overlays. Each shadow stacks umbra, penumbra and ambient layers — higher levels mean larger, softer casts. Use elevation to describe stacking relations, never as ornament.

**Aliases:** 层级 · 投影层级 · 阴影层级 · 海拔 · z-depth · elevation · shadow level

**Category:** Surface / Foundation

## When to use

- Cards, menus and popovers need a perceivable stacking order
- Clickable blocks must suggest they float above the page
- Modals and sticky bars need a higher level than content

## When not to use

- Flat or neobrutalist languages where shadows clash
- High levels everywhere — inflation destroys the signal
- Shadows used instead of rules or whitespace to divide regions

## Variants

- **Material 2-layer** (双层材质投影) — Umbra plus penumbra — clear levels 0–5
- **Flat border-only** (扁平描边) — No shadow — 1px borders and surface tints
- **Soft ambient** (柔和环境投影) — One large, faint cast — airy and light

## Platform API

- `box-shadow`
- `env(safe-area-inset-*)`
- `z-index`

## In code

| Framework | Name |
| --- | --- |
| CSS | [box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) |
| Material Design | [Elevation](https://m3.material.io/styles/elevation/overview) |
| Tailwind CSS | [shadow-sm / shadow-md / shadow-xl](https://tailwindcss.com/docs/box-shadow) |

## Implementation

**CSS:** `box-shadow` `env(safe-area-inset-*)` `z-index`

Tokenise the levels: --elev-0: none; --elev-1: 0 1px 2px rgba(0,0,0,.3), 0 1px 3px 1px rgba(0,0,0,.12); each step spreads wider and lighter. Shadows barely read on dark surfaces — switch to brighter borders or lighter surface tints. Pair overlays with a z-index ladder and keep edge-docked layers clear of gestures via env(safe-area-inset-*).

## Agent task prompt

```text
Implement elevation in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- Levels 0–5 as shadow tokens, spreading lighter as they rise
- Fixed levels for cards / popovers / modals
- Dark mode compensated with borders or lighter surfaces
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Build an elevation system — 0–5 box-shadow tokens giving cards and overlays clear depth.

**Design:** Elevation spec: 0 flat, 1–2 cards, 3–4 popovers, 5 modals. Each level stacks umbra, penumbra and ambient — higher means larger and fainter. On dark surfaces use borders or lighter tints. Keep at most three level gaps among stacked overlays. Shadows describe stacking only, never decoration.

**Implementation:** Define --elev-0 … --elev-5 as CSS variables and consume them as box-shadow: var(--elev-2). Overlays get z-index tokens (--z-dropdown: 40; --z-modal: 50). Override --elev-* to a border scheme under .dark. Edge-docked overlays take env(safe-area-inset-bottom) padding.

## Related

- [semantic-color](/foundation/semantic-color) — Used with
- [glassmorphism](/foundation/glassmorphism) — Used with
- [hover-lift](/foundation/hover-lift) — Used with

## Sources

- [Material Design — Elevation](https://m3.material.io/styles/elevation/overview)
- [MDN — box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- [Apple HIG — Materials](https://developer.apple.com/design/human-interface-guidelines/materials)

---

JSON: `/api/concept/foundation/elevation.json` · Site: /en/foundation/elevation
