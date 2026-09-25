# Swiss Style / 瑞士风格

> Styles · `id: swiss-style`

A visual language of objective grids and typography: strict mathematical grids, sans-serif faces, flush-left setting, black and white plus one accent (classically red). Order comes from whitespace and type scale. Decoration is noise; the goal is information read along the shortest path.

**Aliases:** 瑞士风格 · 瑞士平面设计 · 国际主义排版风格 · 网格排版风格 · 黑白红海报风 · Helvetica风格 · International Typographic Style · Swiss Design

**Category:** Style / Visual Language

## When to use

- Design systems, museums and institutions that need objective rigor
- Data, documentation and catalog content that is inherently structured
- Posters and covers that thrive on typographic tension

## When not to use

- Brands needing warmth, approachability or playfulness
- Unstructured content — a strict grid only amplifies the mess
- Reading contexts dominated by CJK and serif mixes — the idiom misfits

## Variants

- **Zurich School** (苏黎世学派) — Josef Müller-Brockmann's strict modular grid
- **Basel School** (巴塞尔学派) — Emil Ruder and Armin Hofmann — typographic rhythm first
- **New Swiss** (新瑞士) — Contemporary web-flavored Swiss with mono type and hairlines

## Design spec

- **typography:** Helvetica-style sans; bold uppercase headlines
- **color:** Paper grey, pure black, signal red #E63312
- **border:** 1px solid black column rules
- **shadow:** Zero shadows — strictly flat
- **spacing:** Strict modular grid, consistent gutters

## Implementation

**CSS:** `grid` `font-family: Helvetica` `text-align: left` `letter-spacing` `border-top: 2px solid`

Grid first: a 12-column or simple 3×3 grid that every element snaps to — no arbitrary spacing. One sans family (Helvetica/Inter/Neue Haas); hierarchy from size jumps (e.g. 12/48px), not weight ramps; flush-left text, centered setting banned. Black, white, grey plus a single red that only marks indices and key rules. Separate with two rule weights (2px/1px).

## Agent task prompt

```text
Implement a typography-led Swiss Style section in the current project.

Inspect the existing design tokens and font stacks first; map grid spacing onto the current spacing variables.
Requirements:
- A 12-column grid every element snaps to; modular spacing
- One sans-serif family; hierarchy from size jumps, not weight ramps
- Black, white, grey plus a single red reserved for indices and key rules
- Flush-left text; 2px/1px rule hierarchy
- Dark mode support
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** "Design an interface in Swiss Style: strict grid typography, sans-serif, flush-left, black-and-white with a single red accent, hierarchy from scale contrast and whitespace."

**Design:** "Swiss style spec: white ground, black Helvetica (or Inter); a 12-column grid everything aligns to; headings at 4x+ body size; one red #E30613 for indices and heavy rules only; generous modular whitespace (multiples of 8); no shadows, gradients or big radii. Dark mode: near-black ground, inverted text, red retained."

**Implementation:** "Implement Swiss style in CSS: .swiss-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px; }; headings in 'Helvetica Neue', Arial, 44px/1.05, letter-spacing -0.02em; .rule { border-top: 2px solid #000 } and .rule-thin { border-top: 1px solid #ccc }; indices in small red mono type."

## Related

- [minimalism](/styles/minimalism) — Similar
- [editorial](/styles/editorial) — Similar
- [bauhaus](/styles/bauhaus) — Similar
- [card](/styles/card) — Affects
- [table](/styles/table) — Affects

## Sources

- [Wikipedia — International Typographic Style](https://en.wikipedia.org/wiki/International_Typographic_Style)
- [Design reviewed — Swiss Style Principles](https://www.designreviewed.com/swiss-style/)

---

JSON: `/api/concept/styles/swiss-style.json` · Site: /en/styles/swiss-style
