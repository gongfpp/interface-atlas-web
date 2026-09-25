# Blog Index / 博客列表页

> Pages · `id: blog-index`

An index of posts by date or topic: a featured story leads, then cards show thumbnail, title, excerpt and date, with category nav and pagination.

**Aliases:** 博客列表页 · 文章列表 · 博客首页 · 资讯列表页 · 文章列表页 · 博客目录 · blog 首页

**Category:** Page / Content

## When to use

- The site publishes a steady stream of articles
- Users browse by topic, tag or time
- You want to spotlight a few key posts

## When not to use

- There are only a handful of static items
- Content needs heavy retrieval, not browsing — a search page fits better
- A single article already is the whole product page

## Variants

- **Card Grid** (卡片网格) — Equal-height visual cards with a unified thumbnail ratio
- **Compact List** (紧凑列表) — Title, excerpt and date only — maximum information per screen
- **Featured Hero** (头条英雄区) — A large visual promotes one post, with a normal list below

## Page structure

1. **Header** — Site nav, search entry and subscribe button, consistent sitewide.
2. **Featured post** — One pinned post with a large image or headline, the strongest first-screen weight.
3. **Category nav** — Horizontal tags or category links that filter the list on switch.
4. **Post list** — Repeated cards or rows, each with thumbnail, title, excerpt and metadata.
5. **Pagination** — Page numbers or a load-more button, replaceable by infinite scroll.
6. **Newsletter** — An email capture before the footer, turning one-off visits into returns.

## Implementation

**CSS:** `flex` `grid` `grid-template-columns: repeat(auto-fill, minmax(240px, 1fr))` `gap` `aspect-ratio: 16 / 9`

Lay the list out with an auto-fill grid and stack thumbnail and text inside each card with flex; lock thumbnails to one aspect-ratio so heights do not jump. Keep the featured post before the list in the DOM for correct keyboard and screen-reader order; keep pagination as real links and announce load-more via aria-live.

## Agent task prompt

```text
Implement the blog index page in the current project.

Inspect existing routes, card and pagination components first; reuse them.
Requirements:
- Featured post + category nav + post list + pagination
- Category switch filters instantly and is deep-linkable
- Fixed-ratio, lazy-loaded thumbnails
- Keyboard accessible; respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a blog index page with a featured post, category nav and a post card list.

**Design:** Design a content blog index: sticky header with search and subscribe; a large featured post on top; horizontal category tags with an accent selected state; a three-column card grid with 16:9 thumbnails, title, two-line excerpt, category and date; pagination below. Theme-consistent with a subtle hover lift.

**Implementation:** React + Tailwind blog index: responsive auto-fill card grid; category state filters the list; thumbnails share one aspect-ratio and lazy-load; pagination links are deep-linkable; load-more preserves focus and announces via aria-live; respect prefers-reduced-motion; no new dependencies.

## Related

- [card](/pages/card) — Contains
- [pagination](/pages/pagination) — Contains
- [infinite-scroll](/pages/infinite-scroll) — Uses pattern
- [search-filtering](/pages/search-filtering) — Uses pattern
- [blog-post](/pages/blog-post) — Similar

## Sources

- [MDN — CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [web.dev — Learn CSS: Grid](https://web.dev/learn/css/grid)
- [Nielsen Norman Group — F-Shaped Pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)

---

JSON: `/api/concept/pages/blog-index.json` · Site: /en/pages/blog-index
