# Type Scale / 字号阶梯

> Foundation · `id: type-scale`

A ratio-based set of font sizes that assigns heading and body levels a stable rhythm. Multiply a base body size by a fixed ratio (1.25 major third, 1.333 perfect fourth) to step upward, producing predictable contrast between headings instead of hand-picked pixels. Ship it as sm/md/lg tokens or fluid clamp() steps.

**Aliases:** 字号阶梯 · 标题比例 · 字级 · 字体大小层级 · 字号系统 · type scale · modular scale

**Category:** Typography / Foundation

## When to use

- The page carries multiple text levels — headings, body, captions
- Teams need one shared size system instead of ad-hoc 13px and 15px
- Responsive type should scale fluidly or step at breakpoints with restraint

## When not to use

- Icon toolbars and micro UI where one size is enough
- Pixel-exact design reproduction that forbids any rounding
- More than eight steps — the hierarchy stops being legible

## Variants

- **Modular scale** (模数比例) — Base size times a fixed ratio per step — discrete and rhythmic
- **Fluid type** (流式字号) — clamp(min, viewport interpolation, max) — continuous across viewports
- **T-shirt sizes** (尺码档位) — Semantic sm / md / lg / xl tokens — easy to reference in code

## Platform API

- `font-size`
- `clamp()`
- `rem`
- `calc()`

## In code

| Framework | Name |
| --- | --- |
| CSS | [clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) — The go-to for fluid type steps |
| CSS | [font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) |
| Tailwind CSS | [text-sm / text-base / text-lg](https://tailwindcss.com/docs/font-size) |

## Implementation

**CSS:** `clamp()` `rem` `calc()` `font-size: var(--text-lg)`

Define six to eight rem size variables (--text-xs … --text-3xl) with the ratio noted in a comment. Jump levels rather than stacking near-equal sizes — adjacent steps need at least a 1.15× gap to read. Fluid steps look like clamp(0.95rem, 0.8rem + 0.6vw, 1.25rem) with both ends capped. CJK body starts at 15–17px, Latin at 16px. Any size change must re-check leading and measure.

## Compare dimensions (`typography-trio`)

- **Best for text:** Every heading and body level
- **Adjust granularity:** Steps by ratio — one level at a time
- **Responsive:** High — continuous with clamp()

## Agent task prompt

```text
Implement a type scale in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- Six to eight size variables generated from a 1.25 or 1.333 ratio
- Headings and body share one ladder; never hard-code pixels in components
- Use capped clamp() fluid steps where responsiveness is needed
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Build a type scale — ratio-based heading and body sizes exposed as reusable design tokens.

**Design:** Type scale spec: 16px body base, 1.25 (major third) or 1.333 (perfect fourth) ratio; six to eight steps named xs/sm/base/lg/xl/2xl/3xl; headings and body share one ladder — no hard-coded pixels outside it; fluid clamp() interpolation capped at both ends on mobile; pair every step with a leading suggestion.

**Implementation:** Ship the scale as CSS custom properties: :root { --text-base: 1rem; --text-lg: 1.25rem; --text-xl: 1.5625rem; } and reference var(--text-2xl) from headings; fluid steps like --text-h1: clamp(2rem, 1.2rem + 2.5vw, 3.5rem). Map them into Tailwind @theme --text-* tokens. Changing the ladder means editing root variables only, never components.

## Related

- [font-stack](/foundation/font-stack) — Used with
- [line-height](/foundation/line-height) — Used with
- [measure](/foundation/measure) — Used with
- [editorial](/foundation/editorial) — Used with

## Sources

- [Type Scale — A Visual Calculator](https://typescale.com/)
- [MDN — clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [Material Design — Typography](https://m3.material.io/styles/typography)

---

JSON: `/api/concept/foundation/type-scale.json` · Site: /en/foundation/type-scale
