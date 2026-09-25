# Documentation Page / 文档页

> Pages · `id: documentation`

A long-lived, reading-first content page: a collapsible docs tree on one side, the article column carrying heading hierarchy, paragraphs, code blocks and callouts, and on wide screens a page TOC marking the current position. Permanent links and prev/next links chain pages into a site; search is the primary entry; the structure is stable enough to memorize.

**Aliases:** 文档站 · 帮助文档 · 开发者文档 · 使用手册 · 说明文档 · API 文档 · 帮助中心页面

**Category:** Page / Content

## When to use

- Product docs, API references, tutorials
- Long-lived content needing stable structure and deep links
- Readers follow along and need copyable code

## When not to use

- Time-sensitive marketing — a landing page or blog fits better
- Content needing collaborative editing — use an editor or wiki
- Purely presentational visual pages

## Variants

- **Three-column Docs** (三栏文档) — Tree + article + TOC, the desktop standard
- **Sidebar Docs** (侧栏文档) — Tree + article, friendly to mid-size screens
- **API Reference** (API 参考) — Description left, code right — entry-style layout
- **Single-page Manual** (单页手册) — All sections on one page, navigated by TOC

## Page structure

1. **Doc tree** — Left nav grouped by version and section, collapsible and searchable.
2. **Article** — Clear heading hierarchy, short paragraphs, shareable anchors.
3. **Code blocks** — Syntax highlighting plus one-click copy, labelled with language and file name.
4. **On-page TOC** — A right-hand TOC for long pages, highlighting the active section.
5. **Prev/next** — Chained in reading order to reduce navigation cost.

## Implementation

**CSS:** `grid` `grid-template-columns: 240px minmax(0, 1fr) 180px` `position: sticky` `overflow-x: auto`

Three columns via grid (240px / 1fr / 180px); hide the TOC on mid screens and turn the tree into a drawer on mobile. Cap article width around 70ch; code blocks scroll horizontally with a copy button; the TOC highlights the current section via IntersectionObserver; each page gets a stable slug permalink and prev/next links.

## Agent task prompt

```text
Implement the documentation page in the current project.

Inspect existing routes, the markdown pipeline and the sidebar component first; stay consistent.
Requirements:
- Three-column layout (tree / article / TOC) with responsive degradation
- Article components: copyable code blocks, callouts
- Scroll-linked TOC highlighting
- Prev/next links and slug deep links
- Consistent light/dark; no new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a documentation page with a sidebar tree, article body and page TOC.

**Design:** Build a three-column docs page: left tree (groups + active item highlight); article with breadcrumb, H1, paragraphs, a code block with language label and copy button, a blue callout; right sticky TOC with current-section highlight; prev/next cards at the bottom. Tree becomes a drawer and TOC hides on mobile.

**Implementation:** React + Tailwind docs page: data-driven tree ({group, items}) with controlled expansion; the markdown layer emits heading anchors; TOC highlights via IntersectionObserver; code copy uses navigator.clipboard with success feedback; routes deep-link by slug. No new dependencies.

## Related

- [sidebar](/pages/sidebar) — Contains
- [breadcrumb](/pages/breadcrumb) — Contains
- [command-palette](/pages/command-palette) — Contains
- [tabs](/pages/tabs) — Contains
- [alert](/pages/alert) — Contains

## Sources

- [Diátaxis documentation framework](https://diataxis.fr/)
- [MDN Web Docs — Writing guidelines](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines)

---

JSON: `/api/concept/pages/documentation.json` · Site: /en/pages/documentation
