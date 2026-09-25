# Hand-drawn UI / 手绘涂鸦

> Styles · `id: hand-drawn`

Wobbly strokes, skewed borders, paper texture and marker highlights as a human-made interface look. Circles stay imperfect, outlines tremble, icons read as quick sketches. Human warmth against machine-perfect UI.

**Aliases:** 手绘风 · 涂鸦风格 · 手绘描边 · 歪歪扭扭的线 · 纸感手写界面 · hand-drawn UI · doodle UI · sketchy UI

**Category:** Style / Visual Language

## When to use

- Independent creators, craft brands and education products needing warmth
- Empty states, coach marks and easter eggs where doodles season the dish
- Breaking the over-smooth sameness of AI-generated UI

## When not to use

- Finance, legal and medical UIs that must read precise and authoritative
- Dense tables and dashboards — wobbly lines wreck numeric alignment
- Long reading areas where texture and highlights pile up and hurt

## Variants

- **Marker sketch** (马克笔草图) — Thick marker strokes with highlighter swipes under the type
- **Notebook doodle** (笔记本涂鸦) — Ruled paper, ballpoint thin lines, corner doodles
- **Sticker chaos** (贴纸乱贴) — Tilted doodle stickers stacked like a binder cover

## Design spec

- **typography:** Hand-feel sans or rounded face, headings slightly tilted
- **color:** Paper #FAF6EE, ink #2B2B2B, highlight yellow #FFE566
- **border:** 2px wobbly strokes with asymmetric radii
- **shadow:** Barely-there paper shadows, hugging the surface
- **spacing:** Casual misalignment and slight tilts

## Implementation

**CSS:** `border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px` `border: 2px solid #2B2B2B` `background: linear-gradient() #FFE566 高亮` `transform: rotate(-1deg)` `box-shadow: 2px 2px 0 rgba(0,0,0,0.08)`

Fake wobbly borders with asymmetric border-radius values — no SVG filter required. For more tremor use SVG feTurbulence displacement, but keep it static under prefers-reduced-motion. Marker highlight is a translucent yellow linear-gradient band behind the lower 60% of the text. Paper texture is low-opacity noise or repeating horizontal rules under 0.12 opacity. Tilt two to four elements per page; more reads unfinished.

## Agent task prompt

```text
Implement Hand-drawn UI visual style in the current project.

Inspect existing components and texture assets first; keep hand-drawn effects on the visual layer only, hit targets untouched.
Requirements:
- Asymmetric wobbly radii and strokes, two to four slightly tilted elements
- Paper ground (rules or noise under 0.12 opacity) plus marker highlights
- Sketchy icon paths, decoration aria-hidden
- Buttons keep regular rectangular hit areas; only the visual stroke wobbles
- Dark mode on kraft brown; motion respects prefers-reduced-motion
- Text contrast compliant, no new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Design an interface in Hand-drawn UI style: wobbly outlines, skewed radii, paper texture and marker highlights, with icons that read as quick sketches.

**Design:** "Hand-drawn spec: paper #FAF6EE, ink #2B2B2B, highlight yellow #FFE566, coral accent #FF8A65; every container gets asymmetric radii (four different corner values); buttons with 2px wobbly strokes and a slight rotate(-1deg); highlighter bars under key words; icons as sketchy paths or thick simple strokes; dark mode on deep kraft brown with cream ink, highlight kept."

**Implementation:** "Implement a wobbly container in CSS: .sketchy { border: 2px solid #2B2B2B; border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px; } Highlight: background: linear-gradient(transparent 55%, #FFE566 55%); paper: repeating-linear-gradient(#0000 0 27px, #2B2B2B12 27px 28px); tilt via transform: rotate(-1deg) with transitions gated on prefers-reduced-motion."

## Related

- [organic](/styles/organic) — Similar
- [neobrutalism](/styles/neobrutalism) — Similar
- [minimalism](/styles/minimalism) — Alternative
- [empty-state](/styles/empty-state) — Used with
- [button](/styles/button) — Affects
- [card](/styles/card) — Affects

## Sources

- [Wikipedia — Doodle](https://en.wikipedia.org/wiki/Doodle)
- [Wikipedia — Sketch (drawing)](https://en.wikipedia.org/wiki/Sketch_(drawing))

---

JSON: `/api/concept/styles/hand-drawn.json` · Site: /en/styles/hand-drawn
