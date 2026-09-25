# Memphis Design / 孟菲斯风格

> Styles · `id: memphis`

The postmodern anti-functionalist language: squiggles, dots, zigzags and confetti spots in saturated clashing colors with bold black outlines, deliberately breaking grids and order. It embraces the cheap and the festive — happily ugly against modernist good taste.

**Aliases:** 孟菲斯风格 · 孟菲斯设计 · 八十年代波普风 · 波点波浪线装饰风 · 彩色几何涂鸦风 · 水磨石撞色风 · Memphis Milano · Postmodern Pop

**Category:** Style / Visual Language

## When to use

- Streetwear, toys, parties and festivals that need joyful energy
- Children and creative education products — festive, non-threatening
- Short campaigns that must be unforgettable at a glance

## When not to use

- Tools and reading products used for long focused sessions
- Premium, restrained brands or serious decision-makers
- Dense interfaces where decoration drowns function

## Variants

- **Classic Memphis** (经典孟菲斯) — Ettore Sottsass — black-and-white ground, big blobs, squiggles
- **Terrazzo** (水磨石) — Confetti fragments across the surface — density as texture
- **Neo-Memphis** (新孟菲斯) — Web-adapted — more whitespace, thinner outlines

## Design spec

- **typography:** Bold sans with playful type
- **color:** Cream base; pink #FF5C8A, yellow #FFD23F, teal #3EC6A8
- **border:** 2px black outlines
- **shadow:** 4px 4px 0 offset hard shadows
- **spacing:** Deliberately tilted, misaligned

## Implementation

**CSS:** `background-image: radial-gradient` `border: 3px solid #000` `box-shadow: 5px 5px 0` `border-radius: 50%` `clip-path`

The classic recipe: a black-and-white geometric ground (dots via tiled radial-gradient, stripes via repeating-linear-gradient); elements in saturated clashes (lemon, coral, lake blue, violet) with 2–3px black outlines and offset solid shadows; squiggles and zigzags as SVG or clip-path, capped at three to five. Dark mode swaps black for ink blue and keeps the saturation.

## Agent task prompt

```text
Implement a Memphis Design card and button section in the current project.

Inspect the existing design tokens first; scope the Memphis palette and ground patterns independently.
Requirements:
- Black-and-white geometric ground (dots/stripes) + saturated clash blocks + black outlines + offset solid shadows
- Three to five doodle accents (squiggles, zigzags, shapes)
- Text contrast compliant; decoration never carries key information
- Dark mode on ink blue with saturation kept
- Respect prefers-reduced-motion for hover effects
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** "Design an interface in Memphis Design style: squiggles, dots and zigzags in saturated clashing colors with bold black outlines and offset shadows — festive, anti-order, postmodern."

**Design:** "Memphis spec: a black-and-white dot or stripe geometric ground; blocks in lemon #FFD53D, coral #FF6B6B, lake blue #4D96FF, violet #B388FF with 3px black borders and 5px offset solid shadows; three to five squiggles, zigzags and confetti shapes; chunky sans type, slightly tilted OK. Dark mode on ink blue #14143C with saturation kept."

**Implementation:** "Implement a Memphis ground in CSS: .memphis-dots { background-image: radial-gradient(#000 2.5px, transparent 2.5px); background-size: 18px 18px; } Clash card: .memphis-card { border: 3px solid #000; box-shadow: 6px 6px 0 #000; border-radius: 10px; } Squiggles as inline SVG paths; zigzags via clip-path polygon."

## Related

- [bauhaus](/styles/bauhaus) — Similar
- [neobrutalism](/styles/neobrutalism) — Similar
- [y2k](/styles/y2k) — Similar
- [button](/styles/button) — Affects
- [card](/styles/card) — Affects

## Sources

- [Memphis Milano](https://memphis-milano.com/)
- [Wikipedia — Memphis Group](https://en.wikipedia.org/wiki/Memphis_Group)

---

JSON: `/api/concept/styles/memphis.json` · Site: /en/styles/memphis
