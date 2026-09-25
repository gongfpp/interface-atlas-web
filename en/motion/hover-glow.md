# Hover Glow / 悬停发光

> Motion · `id: hover-glow`

On hover, a soft glow blooms around the element's edges — an outer box-shadow or radial gradient tinted with the brand accent. Unlike a shadow's physical lift, glow signals energy and interactivity; common on dark UIs, gaming products and neon-style buttons.

**Aliases:** 悬浮发光 · hover 发光 · 按钮发光 · 鼠标放上去发光 · 边缘光晕 · glow effect

**Category:** Motion / Hover

## When to use

- Highlighting primary actions or icons on dark UIs
- Neon, gaming or sci-fi product tones
- Choose instead of hover-lift — avoid stacking both

## When not to use

- Low-contrast glow on light backgrounds — nearly invisible
- Large surfaces glowing wholesale — harsh and cheap-looking
- Dense utility interfaces — glow steals attention

## Variants

- **Soft outer glow** (柔和外发光) — Large-blur accent box-shadow — the default
- **Border gradient** (边框流光) — Radial gradient tracing the border — more neon
- **Inner glow** (内发光) — Inset shadow glowing inward — suits dark cards

## Implementation

**CSS:** `box-shadow` `radial-gradient` `transition` `:hover`

Base recipe: `transition: box-shadow 200ms`, then on :hover stack two accent shadows (a 1px ring + a ~24px blur bloom). The border-gradient variant uses a pseudo-element with a radial gradient behind a mask, or animates background position. Tint the glow with the accent at 40–60% opacity; avoid pure white. Gate behind @media (hover:hover) for touch devices.

## Compare dimensions (`hover-feedback`)

- **Intensity:** Medium to strong — visually loud
- **Best for:** Buttons / icons / dark cards
- **Mobile friendly:** Poor — no hover on touch

## Agent task prompt

```text
Add a hover glow to the project's primary action buttons.

Inspect existing button hierarchy and accent tokens first; stay consistent.
Requirements:
- 1px ring + 24px accent glow on hover, 200ms transition
- Glow only on primary buttons; secondary gets ring tint only
- Only on hover-capable devices (@media hover:hover)
- Respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add a hover glow to buttons — a soft halo blooming around the edges on hover.

**Design:** On hover, buttons bloom with an accent-colored halo — a 1px matching ring plus a 24px blurred outer glow, 200ms transition; reserve it for primary actions.

**Implementation:** CSS-only: `transition: box-shadow .2s`; on hover `box-shadow: 0 0 0 1px var(--accent), 0 0 24px color-mix(in srgb, var(--accent) 50%, transparent)`. Gate behind @media (hover:hover); respect prefers-reduced-motion (ring-color-only fallback).

## Related

- [hover-lift](/motion/hover-lift) — Alternative
- [press-feedback](/motion/press-feedback) — Similar
- [button](/motion/button) — Applies to
- [glassmorphism](/motion/glassmorphism) — Used with

## Sources

- [MDN — box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

---

JSON: `/api/concept/motion/hover-glow.json` · Site: /en/motion/hover-glow
