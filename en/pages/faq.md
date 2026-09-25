# FAQ Page / 常见问题页

> Pages · `id: faq`

A page that groups recurring questions by topic and expands each answer. Question-style headings cut search cost and keep answers self-serve.

**Aliases:** 常见问题 · 常见问题页 · 问答页 · 帮助问答 · 疑难解答 · 帮助中心问答 · 你问我答

**Category:** Page / Support

## When to use

- Support questions cluster around a few common topics
- Repetitive support tickets must be reduced
- Pre-sales, billing and account policies need self-service answers

## When not to use

- Every case needs individual troubleshooting
- Content changes every release — a docs site fits better
- A full knowledge base or community forum already exists

## Variants

- **Accordion** (折叠问答) — Questions as headings with click-to-expand answers
- **Categorized** (分类问答) — Group or switch by topic first, then expand each item
- **Searchable** (可搜索问答) — A search field filters questions instantly when the list is long

## Page structure

1. **Heading and intro** — One line on what this page solves, plus where to go if nothing fits.
2. **Search** — Filter question titles live; an empty result points to support.
3. **Categories** — Segment or switch by account, billing, features and similar topics.
4. **Questions** — Question-style headings that expand, with shareable anchors per item.
5. **Answers** — Lead with the answer, then steps, keeping paragraphs short and cross-linking.
6. **Support CTA** — A closing contact or ticket link catches what the page did not resolve.

## Implementation

**CSS:** `flex` `grid` `scroll-margin-top` `content-visibility: auto` `max-width: 72ch`

Cap the question list at max-width 72ch, and lay out categories with an adaptive grid. Give expanded items scroll-margin-top so anchor jumps clear sticky headers, and add content-visibility auto for long lists. Build the accordion from a button with aria-expanded and aria-controls rather than clickable divs.

## Agent task prompt

```text
Implement the FAQ page in the current project.

Inspect existing content components, accordions and design tokens first; reuse them.
Requirements:
- Search filters question titles live and categories switch
- Accordion uses aria-expanded and aria-controls
- Empty results offer a support entry
- Good scroll performance for long lists and working anchors
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create an FAQ page with a heading, a list of questions and expandable answers.

**Design:** Design an FAQ page: a heading and search box on top, category tabs below, and a question list that expands per item with a clear single-or-multi-open rule. Close with a support entry, keep light and dark consistent, and design mobile first.

**Implementation:** React plus Tailwind FAQ: a controlled search field that filters live, category switching drives the list, and the accordion uses aria-expanded and aria-controls. Show a support entry on empty results, respect prefers-reduced-motion, and add no dependencies.

## Related

- [accordion](/pages/accordion) — Contains
- [input](/pages/input) — Contains
- [filter-panel](/pages/filter-panel) — Contains
- [progressive-disclosure](/pages/progressive-disclosure) — Uses pattern
- [documentation](/pages/documentation) — Similar

## Sources

- [Nielsen Norman Group — Accordions on Complex Content](https://www.nngroup.com/articles/accordions-complex-content/)
- [Nielsen Norman Group — Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)

---

JSON: `/api/concept/pages/faq.json` · Site: /en/pages/faq
