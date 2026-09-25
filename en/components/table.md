# Table / 表格

> Components · `id: table`

A two-dimensional grid aligning data in rows and columns — one record per row, one field per column — built for column-by-column comparison, sorting and high-volume browsing. Rows highlight on hover and support selection; column headers usually carry sort controls.

**Aliases:** 表格 · 数据表格 · 数据列表 · 二维表 · 可排序表格 · 后台数据列表 · 订单列表那种表

**Category:** Display / Data

## When to use

- Many fields needing column-by-column comparison
- Admin lists (orders, users, logs)
- Dense data with sorting, filtering and batch actions

## When not to use

- Narrow mobile screens cannot fit columns — switch to card lists
- Browsing-oriented content — use a card feed
- Few fields with visual emphasis — use cards or lists

## Variants

- **Bordered** (带边框) — Cell rules, the traditional look
- **Striped** (斑马纹) — Alternating row tint eases long scans
- **Sticky header** (固定表头) — Header stays put while scrolling

## Platform API

- `<table>`
- `<thead>`
- `<tbody>`

## Implementation

**CSS:** `border-collapse` `text-align` `overflow-x: auto` `position: sticky`

Wrap in overflow-x-auto for narrow screens; right-align numbers, left-align text; stripe with an odd-row tint. Sorting: a button inside th with aria-sort, second click reverses. Sticky header via sticky top-0 over a header background. Control density with row padding (~8px compact vs ~16px comfortable).

## Compare dimensions (`primary-display`)

- **Information density:** High — compact rows and columns
- **Scannability:** High — aligned columns ease comparison
- **Good for:** Structured records, finance, logs

## Agent task prompt

```text
Implement a data Table component in the current project.

Inspect the existing component system and design tokens first; reuse existing
surface and text hierarchy variables.
Usage: admin order/member lists.
Requirements:
- Click-to-sort headers (aria-sort) with ascending/descending toggle
- Right-aligned numeric columns, left-aligned text columns
- Row hover highlight and a striped variant
- overflow-x handling on narrow screens; consistent light/dark themes
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a Table component: an order list with sortable column headers, row hover highlight and a status column.

**Design:** Create a data table. Requirements: hairline row separators (or stripes), bold small grey headers that click to sort (with direction indicator), right-aligned numeric columns with tabular figures, light row hover, a status column with coloured dot + text, compact and comfortable row densities.

**Implementation:** React + Tailwind Table: data array with controlled sortKey/sortDir, sorting via useMemo; a button inside thead th triggers sorting and sets aria-sort="ascending/descending"; numeric columns get text-right tabular-nums; container overflow-x-auto; stripes with odd:bg-code-bg; row selection with state + aria-selected; animation durations scaled by var(--demo-speed, 1).

## Related

- [card](/components/card) — Alternative
- [pagination](/components/pagination) — Similar
- [filter-panel](/components/filter-panel) — Similar
- [master-detail](/components/master-detail) — Used with

## Sources

- [W3C WAI Tables Tutorial](https://www.w3.org/WAI/tutorials/tables/)
- [Apple HIG — Tables (macOS)](https://developer.apple.com/design/human-interface-guidelines/tables)

---

JSON: `/api/concept/components/table.json` · Site: /en/components/table
