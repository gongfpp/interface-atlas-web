# Bento Grid / 便当盒网格

> Styles · `id: bento-grid`

A layout language that packs the interface like a bento box: rounded tiles of varying spans snap to one grid with narrow gutters — big cells carry the hero content, small cells hold stats and garnish. A card-grid upgrade where area itself encodes priority.

**Aliases:** 便当盒布局 · 便当格网格 · Bento网格 · 苹果发布会那种格子布局 · 拼块仪表盘 · 不等宽卡片网格 · Bento Box Layout · Bento Grid

**Category:** Style / Layout

## When to use

- Dashboards, profile pages and product overviews with mixed-priority modules
- Feature showcases — one tile, one selling point
- Guiding the eye with area contrast instead of uniform card rows

## When not to use

- Unpredictable content lengths that overflow or hollow out tiles
- Narrow screens that collapse to one column and void the bento structure
- Sequential long-form reading where tiling breaks the narrative

## Variants

- **Keynote** (发布会式) — Apple keynote style — big tiles, big type, product heroes
- **Dashboard** (仪表盘式) — Data-first — stat tiles and mini charts packed together
- **Profile** (个人主页式) — Personal bento mixing avatar, bio and link tiles

## Design spec

- **typography:** System sans with big in-card numerals
- **color:** Light grey #F5F5F7, white cards, violet #5B5BD6
- **border:** 1px #E5E7EB card borders
- **shadow:** 1px micro shadows for depth
- **spacing:** 16px radius, ~10px grid gaps

## Implementation

**CSS:** `display: grid` `grid-template-columns: repeat(4, 1fr)` `grid-auto-rows` `grid-column: span 2` `border-radius: 16px` `gap`

Grid first, content second: typically 4 columns (2 on mobile) with grid-auto-rows fixing row height; hero cells span 2×2, secondary 2×1 or 1×1; keep gap tight at 8–16px so the box reads as one object; unify radii (14–20px) and padding (16–24px) across cells. One topic per tile — heroes big, stats small. Aim for 5–9 tiles: fewer than 4 loses the collage, more than 10 becomes dashboard noise.

## Agent task prompt

```text
Implement a bento-grid overview section in the current project.

Inspect the existing grid, breakpoints and card components first; reuse current spacing and radius variables.
Requirements:
- One unified grid; tiles composed by span with tight aligned gutters
- One topic per tile; hierarchy expressed by area
- Uniform radii and padding so the set reads as a single box
- Mobile collapses to 2 columns or one column without breaking tiles
- Dark mode support
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** "Design an interface with a Bento Grid layout: rounded tiles of varying spans on one grid, big cells for hero content, small cells for stats and garnish, tight aligned gutters."

**Design:** "Bento spec: a 4-column grid (2 on mobile) with fixed grid-auto-rows; hero cells 2×2, secondary 2×1 or 1×1; 12px gap, uniform 16px radii and 20px padding; one topic per tile; hierarchy via area, not borders; tile fills in solid, light grey or dark card tones, heroes may carry imagery or gradients; 5–9 tiles total."

**Implementation:** "Implement a bento grid in CSS: .bento { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 96px; gap: 12px; } hero: .bento-hero { grid-column: span 2; grid-row: span 2; } wide: .bento-wide { grid-column: span 2; } all tiles get border-radius: 16px and padding: 20px; collapse to 2 columns under @media."

## Related

- [card](/styles/card) — Affects
- [minimalism](/styles/minimalism) — Similar
- [glassmorphism](/styles/glassmorphism) — Similar
- [dashboard](/styles/dashboard) — Used with
- [aurora](/styles/aurora) — Similar

## Sources

- [Bento Grids — gallery of bento layouts](https://bentogrids.com/)
- [Apple Newsroom](https://www.apple.com/newsroom/)

---

JSON: `/api/concept/styles/bento-grid.json` · Site: /en/styles/bento-grid
