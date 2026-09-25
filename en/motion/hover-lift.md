# Hover Lift / 悬浮上浮

> Motion · `id: hover-lift`

On hover, a card or button lifts slightly (translateY -2–6px) while its shadow deepens — as if raised by an invisible hand. The most common desktop affordance for "this is clickable": nearly free, instantly adds depth and life.

**Aliases:** 卡片悬浮 · hover 浮起 · 鼠标放上去浮起来 · 上浮效果 · 悬停抬升 · 卡片浮起来

**Category:** Feedback / Hover

## When to use

- Card grids, product cards, article cards — clickable blocks
- Desktop-first contexts — hover is a desktop language
- When flat layouts need to separate interactive from static elements

## When not to use

- Touch devices — no hover, sticky triggers; use press feedback instead
- Everything lifts — the affordance inflates and stops meaning anything
- Large offsets — beyond 8px it feels jumpy

## Variants

- **Lift + shadow** (上浮 + 投影) — The classic — -4px + deeper shadow
- **Lift + scale** (上浮 + 微放大) — Adds scale(1.02) — more e-commerce energy
- **Lift + border** (上浮 + 边框着色) — Swap shadow for accent border — suits flat styles

## Implementation

**CSS:** `transform: translateY` `box-shadow` `transition` `:hover`

`transition: transform 200ms ease, box-shadow 200ms`; on hover translateY(-4px) plus a larger, softer shadow (e.g. 0 12px 24px rgba(0,0,0,.12)). The shadow grows and lifts together with the element. Pairs with press-feedback: lift on hover, scale back on press.

## Compare dimensions (`hover-feedback`)

- **Intensity:** Medium
- **Best for:** Cards / medium blocks
- **Mobile friendly:** Poor — no hover on touch

## Agent task prompt

```text
Add hover lift feedback to the project's card lists.

Inspect existing card components first; keep radius and shadow tokens consistent.
Requirements:
- 4px rise + deeper shadow on hover, 200ms transition
- Only on hover-capable devices (@media hover:hover)
- Respect prefers-reduced-motion
- No layout shift (transform-based)
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add a hover lift to cards — a slight upward shift with a deepening shadow.

**Design:** On hover, cards rise 4px while the shadow deepens to 0 12px 24px rgba(0,0,0,.12); 200ms ease; shadow follows the lift; no layout shift.

**Implementation:** "CSS-only: `transition: transform .2s ease", box-shadow .2s ease` with `hover:-translate-y-1 hover:shadow-lg`. Gate behind @media (hover:hover) for touch. Respect prefers-reduced-motion (shadow-only fallback).

## Related

- [press-feedback](/motion/press-feedback) — Similar
- [hover-glow](/motion/hover-glow) — Alternative
- [card](/motion/card) — Applies to
- [magnetic-button](/motion/magnetic-button) — Similar

## Applicable styles

`minimalism` `bento-grid` `neobrutalism`

## Sources

- [Material Design — Elevation](https://m3.material.io/styles/elevation/overview)

---

JSON: `/api/concept/motion/hover-lift.json` · Site: /en/motion/hover-lift
