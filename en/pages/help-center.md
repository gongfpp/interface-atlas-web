# Help Center / 帮助中心

> Pages · `id: help-center`

A self-service support page gathering docs, FAQs and contact routes: search guesses intent, articles group by topic, and contact sits at the bottom.

**Aliases:** 帮助中心 · 帮助页 · 帮助文档 · 客服帮助页 · 常见问题页 · FAQ 页 · 说明书页面 · 怎么用的页面

**Category:** Page / Support

## When to use

- Users look for answers on their own first
- Support volume needs to be deflected into docs
- Content is maintained by product area over time

## When not to use

- Urgent incidents needing live humans — use live chat or a hotline
- Only a few scattered tips — inline hints or tooltips suffice
- Public marketing overview — a landing page fits

## Variants

- **Help Portal** (门户型) — Search plus category cards, the fullest coverage
- **FAQ** (常见问题) — A collapsible Q&A list, lightweight and direct
- **Docs Hub** (文档型) — Sidebar outline plus article, for long documentation

## Page structure

1. **Search hero** — One line of orientation plus a large search box with title suggestions while typing.
2. **Topic grid** — Entry cards grouped by product area, with icons and article counts.
3. **Article list** — Articles ranked by popularity and recency within a topic.
4. **Popular** — Quick links to frequent questions that shortcut the search.
5. **Contact support** — The fallback route to live chat or a ticket.
6. **Footer** — Service status, community and legal links closing the page.

## Implementation

**CSS:** `grid` `flex` `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))` `position: sticky`

Pin the search hero and filter article titles as the user types (250ms debounce); lay topics out as an auto-fit card grid that collapses to one column on narrow screens. Pair the article list with a popular rail, and close with a full-width contact block. A no-results search shows popular terms and the contact route instead of a blank.

## Agent task prompt

```text
Implement the help center page in the current project.

Inspect the existing docs data source, search and accordion components first; reuse them.
Requirements:
- Search hero, topic grid, article list and contact support
- Live article filtering with highlighted hits
- Collapsible FAQ list
- Popular terms and contact route on empty results
- Responsive, keyboard accessible, theme-consistent
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a help center page with a search box, topic categories and an FAQ list.

**Design:** Build a product help center: a centered search box with one line of copy on top; a grid of topic cards below (icon, title, article count); an article list beside a popular-articles rail; collapsible FAQ items; and a full-width contact / open-a-ticket block at the bottom. Search filters live and highlights hits; no-results shows popular terms and the contact route. Responsive and theme-consistent.

**Implementation:** React + Tailwind help center: a controlled query with debounced article filtering; segmented hit highlighting; auto-fit category cards; FAQ items tracking an open set; topic and query synced to URL search params; popular terms on empty results; respect prefers-reduced-motion; no new dependencies.

## Related

- [accordion](/pages/accordion) — Contains
- [card](/pages/card) — Contains
- [search-filtering](/pages/search-filtering) — Uses pattern
- [progressive-disclosure](/pages/progressive-disclosure) — Uses pattern
- [empty-state](/pages/empty-state) — Uses pattern

## Sources

- [Nielsen Norman Group — Help and documentation](https://www.nngroup.com/articles/help-and-documentation/)
- [Apple Human Interface Guidelines — Searching](https://developer.apple.com/design/human-interface-guidelines/searching)

---

JSON: `/api/concept/pages/help-center.json` · Site: /en/pages/help-center
