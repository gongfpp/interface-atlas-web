# Grid System / 栅格系统

> Foundation · `id: grid-system`

A reusable skeleton of columns, gutters and margins. Twelve columns is the default because 2, 3, 4 and 6 all divide into it, so any block can snap to the lines. A fixed grid is stable but brittle; repeat(auto-fit, minmax(240px, 1fr)) adds and drops tracks as space allows, and container queries reflow a component by its own width, not the viewport.

**Aliases:** 栅格 · 栅格系统 · 网格 · 12 列 · 分几栏 · 布局网格 · grid system · 12-column grid

**Category:** Layout / Foundation

## When to use

- Several page blocks must align to one shared set of column lines
- A card wall should add or drop columns as width allows
- One component must adapt in a sidebar and a main column, not just by viewport

## When not to use

- A single-block page where a grid only adds nesting
- Forcing a grid onto free-form art that never needed alignment
- Nesting grids more than three deep until gutters compound out of control

## Variants

- **Fixed 12-column** (固定 12 栏) — repeat(12, minmax(0, 1fr)) with blocks spanning tracks — stable but breakpoints are fixed
- **Auto-fit** (自动适应) — repeat(auto-fit, minmax(240px, 1fr)) — the browser picks the count from content width
- **Container query** (容器查询) — container-type: inline-size reflows by the component's own width, not the viewport

## Platform API

- `grid-template-columns`
- `repeat()`
- `minmax()`
- `gap`
- `@container`

## In code

| Framework | Name |
| --- | --- |
| CSS | [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) |
| CSS | [@container](https://developer.mozilla.org/en-US/docs/Web/CSS/@container) |
| Tailwind CSS | [grid-cols-12 / @container](https://tailwindcss.com/docs/grid-template-columns) |

## Implementation

**CSS:** `grid-template-columns: repeat(12, minmax(0, 1fr))` `gap: var(--grid-gutter)` `repeat(auto-fit, minmax(240px, 1fr))` `container-type: inline-size` `@container (min-width: 40rem)`

Cap an outer container with a max width and side margins (--grid-margin); space columns with gap, never margins, so the last column has no extra offset. A fixed grid is repeat(12, minmax(0, 1fr)) — the 0 stops content from blowing out a track. Self-managing lists use repeat(auto-fit, minmax(240px, 1fr)) and let the browser pick the count. For component-level responsiveness use container-type: inline-size with @container instead of always bending to viewport breakpoints.

## Agent task prompt

```text
Implement a grid system in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- 12 columns desktop / 8 tablet / 4 mobile with gap tokens for gutters
- Card walls adapt their column count with auto-fit + minmax
- Component-level responsiveness via container-type and @container
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Build a grid system — columns, gutters and margins that align blocks to one set of lines.

**Design:** Grid spec: 12 columns desktop, 8 tablet, 4 mobile; gutters at 16 and 24; side margins capped with the container; lists adapt with auto-fit + minmax and components use container queries; never fake gutters with margins; do not nest more than three grids deep.

**Implementation:** Ship it with CSS variables: --grid-gutter and --grid-margin, with a centred max-width outer container. Grids are display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: var(--grid-gutter). Adaptive lists use repeat(auto-fit, minmax(240px, 1fr)). Wrap components in container-type: inline-size and pair with @container rules.

## Related

- [dashboard](/foundation/dashboard) — Used with
- [landing-page](/foundation/landing-page) — Used with
- [card](/foundation/card) — Used with
- [bento-grid](/foundation/bento-grid) — Used with

## Sources

- [MDN — CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [web.dev — Learn CSS Grid](https://web.dev/learn/css/grid)
- [MDN — Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- [W3C — CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)

---

JSON: `/api/concept/foundation/grid-system.json` · Site: /en/foundation/grid-system
