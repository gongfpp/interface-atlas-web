# Filter Panel / 筛选面板

> Components · `id: filter-panel`

A panel concentrating filter controls beside the list (or revealed in a drawer or popover): checkbox groups, radios and sliders compose the current query. It syncs with the list to refresh result counts, echoes selected conditions and offers clear-all.

**Aliases:** 筛选面板 · 过滤器 · 筛选器 · 过滤面板 · 条件筛选 · 侧边筛选 · 左边勾选条件的那种面板

**Category:** Data / Navigation

## When to use

- Multi-facet browsing (commerce, search results)
- Admin lists locating records by combined conditions
- Showing per-option result counts (facets)

## When not to use

- One or two dimensions — a select or search box suffices
- Slow filtering — debounce and show a loading state
- On mobile move it into a bottom drawer, do not stack it inline

## Variants

- **Sidebar** (侧边常驻) — Persistent left rail on desktop list pages
- **Drawer** (抽屉唤起) — Mobile hosts it in a bottom drawer
- **Chips** (条件胶囊) — Selected conditions echo as removable chips above the list

## Platform API

- `<fieldset>`
- `<form>`

## Implementation

**CSS:** `flex` `grid` `overflow-y: auto` `position: sticky`

Two-pane layout: filters left, results right (collapse into a drawer below lg). Manage multi-select with Set<string> and derive filtered results with useMemo; keep result count and clear-all pinned at the panel top; echo selections as removable chips. Annotate options with facet counts to set expectations; debounce and show a list loading state on re-filter.

## Agent task prompt

```text
Implement a Filter Panel in the current project.

Inspect the existing component system, route params and data source first; keep the
state-sync approach consistent.
Usage: search results pages and admin lists.
Requirements:
- Grouped checkboxes + facet counts + live filtering
- Persistent result count and clear-all; selections echoed as chips
- An empty state with a clear entry when nothing matches
- Restorable from URL params or state; consistent light/dark themes
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a Filter Panel: grouped checkboxes on the left, a product list on the right; checking a box filters the list live and updates the result count.

**Design:** Create a filter panel. Requirements: group labels and checkboxes (facet counts in grey at the right); panel top shows "N results" with a clear-all button; selected conditions echo as removable chips above the list; checked items marked with the accent; mobile folds into a bottom drawer; consistent light/dark themes.

**Implementation:** React + Tailwind FilterPanel: selected: Set<string> controlled state, filtered = useMemo(() => items.filter(...), [selected]); each group renders checkboxes with facet counts; the results area shows filtered.length with an empty-state; clear-all empties the set; chips echo selections with an × to remove; container lg:grid-cols-[200px_1fr] collapsing to a drawer on small screens; debounce when the source is async.

## Related

- [search-filtering](/components/search-filtering) — Used with
- [checkbox](/components/checkbox) — Similar
- [drawer](/components/drawer) — Similar
- [search](/components/search) — Used with

## Sources

- [Nielsen Norman Group — Faceted Navigation](https://www.nngroup.com/articles/faceted-navigation/)
- [MDN — :checked pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked)

---

JSON: `/api/concept/components/filter-panel.json` · Site: /en/components/filter-panel
