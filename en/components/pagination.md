# Pagination / 分页

> Components · `id: pagination`

A page-numbered control that slices long result sets into discrete pages: users explicitly click a page number or prev / next to fetch that slice, so the current position is always known, shareable and reversible. The controlled counterpart to infinite scrolling's endless drift — the default for search results and admin tables.

**Aliases:** 分页器 · 翻页 · 页码 · 上一页下一页 · 页码条 · pager

**Category:** Navigation / Data

## When to use

- Ordered results where users track and revisit positions
- Shareable page URLs — search results, admin tables
- Jumping to an exact page or the last page matters

## When not to use

- Casual feeds meant for endless browsing
- Tiny result sets that fit on one page
- Content that cannot be evenly or stably sliced

## Variants

- **Numbered** (页码型) — Full numbers + ellipsis, most control
- **Simple** (简洁型) — Prev / next with a counter only
- **Jump** (跳页型) — Numbers + jump input for huge sets

## Platform API

- `<nav aria-label="Pagination">`
- `role="navigation"`

## Implementation

**CSS:** `flex` `gap` `min-width` `aria-disabled`

Windowing algorithm: always show the first and last pages plus current ± 1, folding the middle into ellipses. Mark the current page with aria-current="page" and an accent block; disable prev / next at the edges (disabled + aria-disabled). Sync the URL with ?page=n so positions are shareable and reversible.

## Compare dimensions (`scroll-loading`)

- **Trigger:** Explicit clicks on page numbers
- **Data control:** Strong — the user holds the position
- **Suitable content:** Ordered, addressable result sets

## Agent task prompt

```text
Implement pagination in the current project.

Check how existing lists or tables fetch data; page state should sync with the route query (?page=n).
Requirements:
- Controlled page / total, URL-synced
- Windowed numbers with ellipses, aria-current="page" on the active one
- Prev / next correctly disabled at the edges
- Scroll the list back to the top after switching
- Keyboard accessible (page buttons; jump input submits on Enter)
- No unnecessary dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a pagination control: prev, a page list with ellipsis folding, next, active page highlighted, switching on click.

**Design:** Create pagination: 28px square page buttons with the current page in solid accent and reversed text; fold middles into ellipses beyond 7 slots; disable prev/next at the edges in secondary color; show "page n of m" on the right. Consistent in light and dark themes.

**Implementation:** React + Tailwind pagination: controlled total and page with an onChange callback; windowing algorithm (first/last + current ± 1 + ellipses); aria-current="page" on the active item; prev/next disabled at the edges; simple (prev/next only) and jump (input + Enter) variants. No new dependencies.

## Related

- [infinite-scroll](/components/infinite-scroll) — Alternative
- [pull-to-refresh](/components/pull-to-refresh) — Alternative
- [table](/components/table) — Similar
- [tabs](/components/tabs) — Similar
- [search-filtering](/components/search-filtering) — Used with

## Applicable styles

`minimalism` `swiss-style`

## Sources

- [NN/g — Pagination](https://www.nngroup.com/articles/pagination/)
- [WAI-ARIA Authoring Practices — Pagination](https://www.w3.org/WAI/ARIA/apg/patterns/pagination/)

---

JSON: `/api/concept/components/pagination.json` · Site: /en/components/pagination
