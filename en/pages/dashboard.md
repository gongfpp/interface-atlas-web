# Dashboard / 仪表盘

> Pages · `id: dashboard`

An admin home screen that concentrates key data and entry points into one view, organized as regional grids: header and sidebar handle navigation, while KPI cards, charts and a primary table fill the content area so users grasp system status at a glance and drill down directly. It anchors the information architecture of the product.

**Aliases:** 后台管理首页 · 仪表盘 · 后台首页 · 数据看板 · 管理面板首页 · 数据大盘 · admin 后台

**Category:** Page / Admin

## When to use

- Admin systems needing at-a-glance key metrics
- Users check status first, then drill into details
- Mixed data forms — numbers, charts, tables — on one screen

## When not to use

- Public marketing pages — a landing page fits better
- Single-action tools with no data to show
- Mobile-first flows — degrade metrics to lists or card feeds

## Variants

- **Sidebar Dashboard** (侧栏仪表盘) — Left sidebar + content, the classic SaaS admin layout
- **Top Navigation Dashboard** (顶部导航仪表盘) — Nav lives in the header — wider content area
- **Dense Dashboard** (高密度仪表盘) — More metrics and denser tables for power operators
- **Card Dashboard** (卡片仪表盘) — Fully card-based bento layout
- **Analytical Dashboard** (分析型仪表盘) — Chart-led, with tables and filters as support

## Page structure

1. **Top bar** — Brand, global search, notifications and account menu — fixed while content scrolls.
2. **Side nav** — Grouped primary navigation, collapsible; becomes a drawer on mobile.
3. **KPI cards** — Three to five core metrics with value and trend, in the top row.
4. **Charts** — One primary and one secondary chart sharing a single time-range control.
5. **Primary table** — Sortable, paginated, with row actions and switchable density.
6. **Filter bar** — Time range and dimension filters applied to the whole page.

## Implementation

**CSS:** `grid` `flex` `gap` `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`

Flex skeleton: header on top, below it sidebar + content; inside content use CSS Grid to layer KPI cards, charts and the table. Cards adapt with repeat(auto-fit, minmax(180px, 1fr)); keep chart heights fixed to avoid shift. Use skeletons while data loads; keep filters sticky above the table or at the top of the sidebar.

## Agent task prompt

```text
Implement the admin dashboard home in the current project.

Inspect the existing routes, layout shell and chart/table components first; reuse them.
Requirements:
- Layout: sidebar + header + 12-column content grid
- KPI cards, charts, table as separate components with loading skeletons
- Range filter drives chart and table refresh
- Consistent light/dark themes; respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create an admin dashboard page with KPI cards, a chart area and a primary table.

**Design:** Build a SaaS admin dashboard: fixed left sidebar, header with breadcrumb and range filter; content on a 12-column grid — four KPI cards (value + trend arrow) on top, a primary and a secondary chart in the middle, a paginated data table below. Consistent light/dark, skeleton placeholders while loading.

**Implementation:** React + Tailwind dashboard: outer flex (aside + main), main laid out with grid grid-cols-12 gap-4. Split cards, charts and table into components with skeleton states; the range state feeds the charts; controlled table pagination; respect prefers-reduced-motion; no new dependencies.

## Related

- [sidebar](/pages/sidebar) — Contains
- [card](/pages/card) — Contains
- [table](/pages/table) — Contains
- [filter-panel](/pages/filter-panel) — Contains
- [skeleton-loading](/pages/skeleton-loading) — Uses pattern

## Sources

- [Nielsen Norman Group — Dashboards](https://www.nngroup.com/articles/dashboards/)
- [Atlassian Design System — Dashboards](https://atlassian.design/)

---

JSON: `/api/concept/pages/dashboard.json` · Site: /en/pages/dashboard
