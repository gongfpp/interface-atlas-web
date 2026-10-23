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
- **motion:** 160–200ms ease-out card lift and shadow transition
- **states:** Hover lifts slightly and deepens the shadow; focus shows a visible violet ring; active settles back flat; disabled reduces opacity; error uses a red border

## Implementation

**CSS:** `display: grid` `grid-template-columns: repeat(4, 1fr)` `grid-auto-rows` `grid-column: span 2` `border-radius: 16px` `gap`

Grid first, content second: typically 4 columns (2 on mobile) with grid-auto-rows fixing row height; hero cells span 2×2, secondary 2×1 or 1×1; keep gap tight at 8–16px so the box reads as one object; unify radii (14–20px) and padding (16–24px) across cells. One topic per tile — heroes big, stats small. Aim for 5–9 tiles: fewer than 4 loses the collage, more than 10 becomes dashboard noise.

## Agent task prompt

```text
Build a complete ◉ Tasko page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Preserve Tasko’s .tasko-body columns at 32% / 14.5% / 14.5% / 35%, rows at 13.6cqw / 11.8cqw and 1.15cqw gaps. The intro spans both rows; the calendar spans the middle columns; green stats and a mountain tile occupy the right, with separate task/note entries below. Keep the distinct pale blue/lilac/green fills and 1.65cqw radii, not equal-width columns, fixed 96px rows or uniformly purple cards. Use the existing height adjustment for six-week months; below 600px major tiles span the width while tasks and notes remain paired.

Full-page operations:
Get started opens the local workspace. Change calendar month and date, add/complete tasks and edit/save notes. Login explains demo identity without claiming real signup or cloud sync.

Share one renderer between static covers, the detail experience and /style-scenes/bento-grid/ (English /en/style-scenes/bento-grid/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** "Design an interface with a Bento Grid layout: rounded tiles of varying spans on one grid, big cells for hero content, small cells for stats and garnish, tight aligned gutters."

**Design:** "Bento spec: a 4-column grid (2 on mobile) with fixed grid-auto-rows; hero cells 2×2, secondary 2×1 or 1×1; 12px gap, uniform 16px radii and 20px padding; one topic per tile; hierarchy via area, not borders; tile fills in solid, light grey or dark card tones, heroes may carry imagery or gradients; 5–9 tiles total."

**Implementation:** Build a complete ◉ Tasko page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Preserve Tasko’s .tasko-body columns at 32% / 14.5% / 14.5% / 35%, rows at 13.6cqw / 11.8cqw and 1.15cqw gaps. The intro spans both rows; the calendar spans the middle columns; green stats and a mountain tile occupy the right, with separate task/note entries below. Keep the distinct pale blue/lilac/green fills and 1.65cqw radii, not equal-width columns, fixed 96px rows or uniformly purple cards. Use the existing height adjustment for six-week months; below 600px major tiles span the width while tasks and notes remain paired.

Get started opens the local workspace. Change calendar month and date, add/complete tasks and edit/save notes. Login explains demo identity without claiming real signup or cloud sync.

Share one renderer between static covers, the detail experience and /style-scenes/bento-grid/ (English /en/style-scenes/bento-grid/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [card](/en/components/card) — Affects
- [minimalism](/en/styles/minimalism) — Similar
- [glassmorphism](/en/styles/glassmorphism) — Similar
- [dashboard](/en/pages/dashboard) — Used with
- [aurora](/en/styles/aurora) — Similar

## Sources

- [Bento Grids — gallery of bento layouts](https://bentogrids.com/)
- [Apple Newsroom](https://www.apple.com/newsroom/)

---

JSON: `/api/concept/styles/bento-grid.json` · Site: /en/styles/bento-grid
