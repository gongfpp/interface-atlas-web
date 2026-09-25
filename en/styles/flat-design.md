# Flat Design / 扁平化设计

> Styles · `id: flat-design`

A visual language that strips out all simulation: solid color blocks, simple geometry, no gradients, shadows or textures. Hierarchy comes from color, shape and typography alone. The opposite of skeuomorphism — the interface admits it is a glowing plane and trades decoration for clarity.

**Aliases:** 扁平化 · 扁平风格 · 扁平化设计 · 没有阴影那种平面设计 · 色块图标风格 · 扁平UI · Flat UI · Flat Design

**Category:** Style / Visual Language

## When to use

- System products that need cross-platform consistency at low cost
- Icons, infographics and dashboards that must scan instantly
- Small mobile screens where decoration crowds out content

## When not to use

- Complex hierarchies where users need depth cues to see what is clickable
- Brands that need warmth, emotion or crafted refinement
- Grey on grey with hairline buttons — weak affordance triggered Flat 2.0

## Variants

- **Metro Tiles** (Metro 磁贴) — Microsoft Metro — big color tiles, rectangles all the way
- **Flat UI Colors** (Flat UI 撞色) — Saturated clash colors on pale surfaces with 1px borders
- **Flat 2.0** (扁平 2.0) — Shadows return subtly — the prelude to Material

## Design spec

- **typography:** Geometric sans at medium weights
- **color:** Flat fills: blue #1FA2FF, yellow #FFD54F
- **border:** No outlines — blocks define areas
- **shadow:** Completely shadowless
- **spacing:** Small 6px radius, even grid

## Implementation

**CSS:** `solid-color` `border: 0` `box-shadow: none` `transition: background-color`

Discipline over technique: solid fills and 1px borders only, box-shadow always none, gradients and textures banned. Hierarchy lives in color area and luminance steps. Keep interactive elements on saturated accents or clear outlines; hover changes background-color only, within 150ms. Maintain separate light and dark palettes instead of inverting.

## Agent task prompt

```text
Implement a flat-design card and button section in the current project.

Inspect the existing design tokens and color variables first; map the flat palette into them.
Requirements:
- Solid fills only — no gradients, shadows or textures
- Saturated accents for interactive elements; hover changes background-color only
- Hierarchy from color area, luminance and type weight
- Dark mode with its own palette, not a naive inversion
- Respect prefers-reduced-motion for transitions, under 150ms
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** "Design an interface in Flat Design style: solid color blocks with no gradients, shadows or textures; hierarchy from color and typography; interactive elements marked by saturated accents."

**Design:** "Flat design spec: white or light grey background with 5–6 saturated tiles (Flat UI Colors: #3498DB, #E74C3C, #2ECC71...); no borders, no shadows, 0–4px radii; inverted or near-black text with clear type scale; hover darkens the fill by 8% only; dark mode uses its own palette, not a simple inversion."

**Implementation:** "Implement flat design in CSS: six color variables (--c-primary etc.); .btn-flat { background: var(--c-primary); color: #fff; border-radius: 3px; transition: background-color 150ms; } hover darkens 8%; cards as solid blocks or 1px dividers; keep interactive vs. non-interactive elements color-distinguishable."

## Related

- [minimalism](/styles/minimalism) — Similar
- [skeuomorphism](/styles/skeuomorphism) — Similar
- [swiss-style](/styles/swiss-style) — Similar
- [button](/styles/button) — Affects
- [card](/styles/card) — Affects

## Sources

- [Nielsen Norman Group — Flat Design](https://www.nngroup.com/articles/flat-design/)
- [Apple HIG — Visual Design](https://developer.apple.com/design/human-interface-guidelines/visual-design)

---

JSON: `/api/concept/styles/flat-design.json` · Site: /en/styles/flat-design
