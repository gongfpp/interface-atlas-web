# Bauhaus / 包豪斯

> Styles · `id: bauhaus`

A visual language of playing composition with geometry: circle, triangle and square in primary red, yellow and blue plus black, asymmetric yet balanced. Decoration obeys function — every plane and line carries structure, and a poster reads as a study in geometric relations.

**Aliases:** 包豪斯 · 包豪斯风格 · 几何构成主义 · 红黄蓝几何风 · 原色几何设计 · 圆三角方构成 · Bauhaus Design · Geometric Abstraction

**Category:** Style / Visual Language

## When to use

- Brands, posters and campaign pages that want bold graphic identity
- Education and creative tools — composing and making
- Hero visuals with few elements and high impact needs

## When not to use

- Data-dense UIs where geometric play hurts readability
- Long reading sessions — the visual noise accumulates
- Locked brand palettes that cannot yield to primaries

## Variants

- **Weimar** (魏玛时期) — Expressionist warmth under Itten's color theory
- **Dessau** (德绍时期) — The classic phase — rational geometry and primaries
- **Contemporary Bauhaus** (当代包豪斯) — Web-era constructivism with bolder whitespace and motion

## Design spec

- **typography:** Bauhaus geometric sans, uppercase
- **color:** Cream base; red #E23B2E, blue #21409A, yellow #F2B705
- **border:** Zero radius with thin black rules
- **shadow:** No shadows
- **spacing:** Compositional whitespace around geometry

## Implementation

**CSS:** `background: #D93025` `clip-path` `border-radius: 50%` `grid` `mix-blend-mode`

Give the primaries fixed roles: red as the hero plane, yellow the warm accent, blue the cool one, black for type and structural lines. Balance asymmetrically — one large form plus one or two structural lines and a small solid; shapes should touch or overlap, never float. Use border-radius: 50% and clip-path triangles instead of image assets. Whitespace is a compositional material too.

## Agent task prompt

```text
Implement a Bauhaus geometric hero section in the current project.

Inspect the existing design tokens first; keep primaries as isolated variables that do not pollute brand colors.
Requirements:
- Circle, triangle, square in red/yellow/blue/black forming an asymmetrically balanced composition
- Shapes in pure CSS (border-radius/clip-path) — no image assets
- Type interlocking with geometry; balanced center of gravity
- No gradients, shadows or textures
- Dark mode support
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** "Design an interface in Bauhaus style: compositions of circle, triangle and square in primary red, yellow and blue with black, asymmetrically balanced, form follows function."

**Design:** "Bauhaus spec: cream #F4EFE6 or black ground; hero geometry (at least two of red circle, yellow triangle, blue square) interlocking with type; black geometric sans, uppercase or heavy; no gradients, shadows or textures; asymmetric yet balanced. Dark mode on near-black with primaries lifted one step."

**Implementation:** "Implement Bauhaus composition in CSS: circles with border-radius: 50%; triangles with clip-path: polygon(50% 0, 0 100%, 100% 100%); 2px solid black structural lines; interleave type and shapes via negative margins or grid overlap; all planes solid, no shadows."

## Related

- [swiss-style](/styles/swiss-style) — Similar
- [memphis](/styles/memphis) — Similar
- [flat-design](/styles/flat-design) — Similar
- [button](/styles/button) — Affects
- [card](/styles/card) — Affects

## Sources

- [Bauhaus Dessau Foundation](https://www.bauhaus-dessau.de/en/)
- [Wikipedia — Bauhaus](https://en.wikipedia.org/wiki/Bauhaus)

---

JSON: `/api/concept/styles/bauhaus.json` · Site: /en/styles/bauhaus
