# Infinite Scroll / 无限滚动

> Patterns · `id: infinite-scroll`

Replaces pagination with automatic loading: as the user scrolls to the bottom, the next page of content appends seamlessly, bridged by a loading indicator or sentinel element. It solves the broken browsing rhythm of hunting for a "next page" button — attention stays on the feed while long lists arrive in imperceptible chunks.

**Aliases:** Infinite Scroll · 无限加载 · 滚动到底自动加载 · 下滑加载更多 · 滚动加载 · 自动翻页

**Category:** Navigation / Data Display

## When to use

- Feeds and timelines that grow over time
- Browsing tasks rather than pinpoint lookups
- Very large datasets where paging is costly

## When not to use

- Users need to jump to or relocate specific items
- Important footer — it gets pushed away endlessly
- Users need a clear sense of total result count

## Variants

- **Sentinel** (滚动哨兵) — A bottom sentinel triggers loading on viewport entry
- **Fallback button** (兜底按钮) — A manual "load more" button when auto-load stalls or fails
- **End notice** (到底提示) — A "no more items" notice closes out exhausted data

## Implementation

**CSS:** `overflow-y-auto` `IntersectionObserver` `min-height` `scroll event`

Prefer an IntersectionObserver on a bottom sentinel, or listen to scroll and prefetch near the bottom. Show an indicator and lock re-entry while loading; keep the scroll position stable and match placeholder heights to avoid layout shift. Provide a manual "load more" fallback and an explicit end-of-list notice.

## Compare dimensions (`scroll-loading`)

- **Trigger:** Automatic — fires at scroll bottom
- **Data control:** System-paced — user passively receives more
- **Suitable content:** Browsing-oriented feeds and timelines

## Agent task prompt

```text
Implement Infinite Scroll in the current project.

Inspect the existing list components and data layer first; reuse existing loading indicators and empty states.
Usage: a feed page that auto-loads the next page.
Requirements:
- Auto-load at scroll bottom, prefetch slightly before the edge
- Lock against duplicate triggers and show a lightweight indicator
- Manual "load more" fallback on failure; end-of-list notice when exhausted
- Preserve scroll position and avoid layout shift when appending
- Respect prefers-reduced-motion
- No unnecessary dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create an infinite scroll list that loads the next page as the user reaches the bottom, shows an indicator while loading, and an end-of-list notice when data runs out.

**Design:** Design an infinite scroll feed. Requirements: next page appends at scroll bottom; a lightweight loading indicator that doesn't interrupt reading; a manual "load more" fallback on failure; an "you've reached the end" notice; light/dark themes.

**Implementation:** Implement Infinite Scroll in React + Tailwind. Fixed-height container with overflow-y-auto; detect bottom via onScroll math or IntersectionObserver on a sentinel; guard with a busy flag, simulate the request with setTimeout, then append data and bump the page counter; render an end state when exhausted. Respect prefers-reduced-motion — keep the indicator animation minimal.

## Related

- [pagination](/patterns/pagination) — Alternative
- [pull-to-refresh](/patterns/pull-to-refresh) — Alternative
- [skeleton-loading](/patterns/skeleton-loading) — Similar
- [lazy-loading](/patterns/lazy-loading) — Similar
- [search-filtering](/patterns/search-filtering) — Similar

## Sources

- [MDN — Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [NN/g — Infinite Scrolling Tips](https://www.nngroup.com/articles/infinite-scrolling-tips/)

---

JSON: `/api/concept/patterns/infinite-scroll.json` · Site: /en/patterns/infinite-scroll
