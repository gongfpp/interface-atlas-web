# Search Filtering / 搜索筛选

> Patterns · `id: search-filtering`

Narrows a large list to whatever matches the current input: every keystroke filters the list in place, with hit counts and an empty-state hint. Finding becomes pruning — no submit, no page jump, feedback stays right in front of the user.

**Aliases:** 搜索筛选 · 列表过滤 · 即时搜索 · 输入即搜 · 关键字过滤 · 筛选列表

**Category:** Search / Navigation

## When to use

- Tens to hundreds of items that can be loaded once and filtered client-side
- Users recall part of a name or tag — scanning beats paging
- Lookup-heavy pages such as settings, contacts, component libraries

## When not to use

- Huge server-side datasets that require backend search
- Items with no obvious text or tag to match against
- Complex multi-facet conditions belong in a filter panel

## Variants

- **Instant** (即时过滤) — Filter on every keystroke, no submit button
- **Filter chips** (标签筛选) — Category chips that stack with the query
- **Highlight** (命中高亮) — Highlights the matched fragment to justify each hit

## Implementation

**CSS:** `transition` `mark` `:placeholder-shown` `background-color`

A controlled input plus useMemo filtering (case-insensitive includes to start) over items rendered with subtle transitions. Show the hit count; render an empty state with a clear button on zero matches; highlight matched fragments with mark or accent color. Use type="search" with an aria-label; debounce only for remote requests. Respect prefers-reduced-motion.

## Agent task prompt

```text
Implement search filtering in the current project.

Inspect existing list and search input components first; reuse them.
Usage: finding settings entries.
Requirements:
- Instant filtering on input, no submit button
- Match count plus an empty state with clear entry on zero hits
- Matched fragments highlighted
- No search-specific dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a search filtering demo where typing instantly filters a list and shows the match count.

**Design:** Create a search filtering demo. Requirements: a search box live-filtering a component list with matched fragments highlighted; a "N matches" counter; an empty state with one-tap clear on zero results; a subtle fade on filter changes; a clear button inside the input.

**Implementation:** Implement Search Filtering in React: keep the query in useState, filter in useMemo case-insensitively, and highlight matches via split + mark. Items show name and tags; render an empty state on zero hits. No search library; respect prefers-reduced-motion.

## Related

- [filter-panel](/patterns/filter-panel) — Used with
- [command-palette](/patterns/command-palette) — Used with
- [input](/patterns/input) — Used with
- [empty-state](/patterns/empty-state) — Similar
- [infinite-scroll](/patterns/infinite-scroll) — Similar

## Applicable styles

`minimalism`

## Sources

- [Nielsen Norman Group — Filtering](https://www.nngroup.com/articles/filters-vs-facets/)
- [Material Design — Search](https://m3.material.io/components/search-bar/overview)

---

JSON: `/api/concept/patterns/search-filtering.json` · Site: /en/patterns/search-filtering
