# Search Page / 搜索页

> Pages · `id: search`

A content-discovery page answering a query: a persistent search box on top (keeping the term, editable to re-search), type and facet filters on one side, and results ranked by relevance in the body (title + snippet + highlighted hits), continued by pagination or infinite scroll. Empty state and no-results state must be designed explicitly.

**Aliases:** 搜索结果页 · 搜索页面 · 搜东西的页面 · 全站搜索 · 查询结果页 · 搜索列表页 · 搜一搜

**Category:** Page / Discovery

## When to use

- Large content bases located by keywords
- Results need type, time or tag filtering
- Matching must be transparent — highlights and counts

## When not to use

- Tiny content bases where browsing suffices
- Precise structured queries — filters or tables are direct
- Command-style quick actions — a command palette is lighter

## Variants

- **Results List** (列表结果) — Title + snippet rows, the classic search engine
- **Grid Results** (网格结果) — Card grid for images or products
- **Instant Search** (即时搜索) — Results while typing, no Enter needed
- **Faceted Search** (多面筛选) — Facets left + results right, common in commerce and docs

## Page structure

1. **Search box** — The page entry point, keeping the last query and supporting suggestions.
2. **Filter panel** — Category, scope and sort — collapsible or a persistent sidebar.
3. **Results** — Shows hit count and timing; guides instead of a blank when empty.
4. **Result item** — Clickable title, snippet with highlighted terms, source and time.
5. **Pagination** — Paging or infinite scroll, preserving filters and scroll position.

## Implementation

**CSS:** `grid` `flex` `scroll-behavior: smooth` `text-wrap: balance`

Keep the box persistent with the term preserved (controlled input); instant search uses debounce (250–400ms) plus AbortController to cancel stale requests. Highlight hits with a distinct <mark> style. Sync filters to URL query params (shareable, back-button friendly). Empty input gets a guide state; no results get alternate suggestions and popular content.

## Agent task prompt

```text
Implement the search results page in the current project.

Inspect the existing search API and filter components first; stay consistent.
Requirements:
- Persistent search box (term preserved, clearable)
- Filters linked to results, state synced to URL
- Hit highlighting + result count
- Designed no-results empty state
- Consistent light/dark; keyboard accessible
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a search results page with a search box, filters and a result list.

**Design:** Build a docs search page: prominent search box on top (kept term, clear button, Enter to search); filters on the left (type checkboxes, time range); each result shows a title with highlighted hits, a two-line snippet and a breadcrumb path; "about 128 results" count on top; no-results state with term suggestions. Responsive — filters collapse on mobile.

**Implementation:** React + Tailwind search page: controlled query with debounced mock filtering; data-driven results with segmented hit highlighting; filter state synced to URL searchParams; arrow-key result selection; respect prefers-reduced-motion. No new dependencies.

## Related

- [command-palette](/pages/command-palette) — Contains
- [filter-panel](/pages/filter-panel) — Contains
- [search-filtering](/pages/search-filtering) — Uses pattern
- [pagination](/pages/pagination) — Contains
- [empty-state](/pages/empty-state) — Uses pattern

## Sources

- [Nielsen Norman Group — Search Results](https://www.nngroup.com/articles/search-results-pages/)
- [W3C WAI — Search accessibility](https://www.w3.org/WAI/)

---

JSON: `/api/concept/pages/search.json` · Site: /en/pages/search
