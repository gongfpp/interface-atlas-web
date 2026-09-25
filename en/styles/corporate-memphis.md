# Corporate Memphis / 企业孟菲斯

> Styles · `id: corporate-memphis`

Flat abstract human figures and a limited solid palette as the friendly big-tech illustration look: small heads, exaggerated limbs, no facial detail, purple-yellow-peach blocks in rounded compositions. Cheap to mass-produce — and therefore highly homogenous.

**Aliases:** 企业孟菲斯 · 大厂插画风 · 蓝色小人插画 · 长手长脚扁平小人 · 科技公司插画风 · Alegria · Big Tech illustration · flat blob people

**Category:** Style / Visual Language

## When to use

- SaaS empty states, onboarding and marketing spots that need non-threatening friendliness
- Illustration systems produced by many hands that must stay consistent
- Abstract values of inclusion, collaboration and access

## When not to use

- Brands that need distinction — this look drowns you in big-tech sameness
- Premium, craft or serious subjects that flat figures cannot carry
- Explaining concrete product mechanics — abstract figures cannot

## Variants

- **Memphis people** (经典人形) — Small-headed long-limbed figures in exaggerated poses
- **Abstract shapes** (抽象色块) — No figures — rounded rectangles, dots and arcs only
- **Gradient flat** (渐变扁平) — Flat shapes washed with two-stop gradients

## Design spec

- **typography:** Geometric sans at medium weight, airy leading
- **color:** Purple #7B61FF, yellow #FAD141, peach #F48196, non-realistic skin
- **border:** No outlines — fills meet directly
- **shadow:** No shadows, flat fills only
- **spacing:** Airy padding, illustration and copy in split columns

## Implementation

**CSS:** `border-radius: 999px` `background: #7B61FF` `clip-path: ellipse()` `fill (SVG)` `no box-shadow`

Build illustrations from SVG or solid blocks: circle heads, rounded-rectangle torsos, limbs as thick round-cap strokes. Lock the palette to 3–5 colors; skin is blue, purple or green for abstract inclusivity. No outlines, gradients or shadows — flat fills only. UI follows the same source: pill buttons, borderless cards, airy padding. Dark mode swaps the ground but keeps the same saturated set.

## Agent task prompt

```text
Implement Corporate Memphis visual style in the current project.

Inspect existing illustration assets and design tokens first; collapse the palette into 3–5 scoped variables.
Requirements:
- Flat abstract figures (small heads, long limbs, no facial detail, non-realistic skin) or abstract rounded blocks
- Strictly flat fills — no strokes, gradients or shadows (gradient variant only, two stops max)
- Pill buttons, borderless cards, generous whitespace
- Illustration marked aria-hidden and never carrying key information
- Text contrast compliant; dark mode keeps saturation
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Design an interface in Corporate Memphis style: flat abstract figures with exaggerated limbs, a limited purple-yellow-peach palette and rounded solid shapes.

**Design:** "Corporate Memphis spec: primary purple #7B61FF, yellow #FAD141, peach #F48196, teal accent #14C88C, non-realistic skin like #86CCCA; illustrations strictly flat with no strokes or shadows; geometric sans (Poppins/Nunito family) at medium weight; full-pill buttons and borderless cards separated by fill; airy whitespace with illustration taking 40–60% of the hero; dark mode on deep purple-black with saturation kept."

**Implementation:** "Implement Corporate Memphis figures in SVG: circle head, rx rect torso, thick round-cap stroke limbs, fills from palette variables, no stroke. The gradient variant only overlays a two-stop linear-gradient — never 3D shading. On the UI side, unify 999px pills and 24px card radii; shadows are forbidden."

## Related

- [flat-design](/styles/flat-design) — Similar
- [memphis](/styles/memphis) — Alternative
- [organic](/styles/organic) — Alternative
- [empty-state](/styles/empty-state) — Used with
- [onboarding-tour](/styles/onboarding-tour) — Used with
- [card](/styles/card) — Affects

## Confusable

- [memphis](/styles/memphis) — Corporate Memphis is post-2017 flat figure illustration; Memphis is the 1980s Milano dots-and-squiggles movement.

## Sources

- [Wikipedia — Corporate Memphis](https://en.wikipedia.org/wiki/Corporate_Memphis)
- [Wikipedia — Flat design](https://en.wikipedia.org/wiki/Flat_design)

---

JSON: `/api/concept/styles/corporate-memphis.json` · Site: /en/styles/corporate-memphis
