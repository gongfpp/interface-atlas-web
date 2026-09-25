# Breadcrumb / 面包屑

> Components · `id: breadcrumb`

A hierarchical path like "Home / Library / Page" that states where the user sits in the information architecture: every ancestor is a link back, and the last item marks the current page. The cheapest way to keep users oriented — the name comes from the breadcrumbs Hansel dropped to find his way home. Usually placed above the page title.

**Aliases:** 面包屑导航 · 路径导航 · 层级路径 · 位置导航 · 首页大于分类那种路径 · 网站路径条 · trail

**Category:** Navigation

## When to use

- Content sites deeper than two levels — docs, category trees
- Users land on deep pages from search or external links
- A cheap path to walk back level by level

## When not to use

- Flat single-level apps — it is pure noise
- Personalized feeds without a stable hierarchy
- Tight mobile screens with shallow levels — can be omitted

## Variants

- **Text** (文字型) — Plain links + separator, the default
- **With icons** (带图标) — Home icon at the root, small icons per item
- **Truncated** (截断型) — Middle levels collapse into an expandable ellipsis

## Platform API

- `<nav aria-label="Breadcrumb">`
- `<ol>`
- `<li>`

## Implementation

**CSS:** `flex` `white-space: nowrap` `overflow: hidden` `text-overflow: ellipsis`

Build with nav[aria-label="Breadcrumb"] and an ordered list; render separators via CSS ::before or a dedicated span — never inside the link target. The last item is plain text with aria-current="page". For deep paths collapse middle levels into an expandable ellipsis and keep the container single-line with ellipsis overflow.

## Agent task prompt

```text
Implement breadcrumbs in the current project.

Check the existing routing structure first; derive hierarchy from route metadata if possible.
Requirements:
- nav + ol semantics with aria-label="Breadcrumb"
- Ancestors link back; current page is non-clickable with aria-current="page"
- Beyond 5 levels fold the middle into an expandable ellipsis
- Respect prefers-reduced-motion (an instant expand is fine)
- No unnecessary dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a breadcrumb that shows a "Home / Category / Current" path where ancestors link back and the last item is the current page.

**Design:** Create a breadcrumb: small text (12–13px), "/" or ">" separators; a home icon at the root; ancestors in secondary color that accent on hover; the current page as plain primary text with aria-current. Collapse middle levels into an ellipsis for deep paths. Consistent in light and dark themes.

**Implementation:** React breadcrumb: nav + ol/li semantics; data-driven items whose last entry renders as plain text with aria-current="page"; separators outside the link targets; a maxItems prop folds middle levels into an expandable ellipsis. Single-line overflow with ellipsis. No new dependencies.

## Related

- [navbar](/components/navbar) — Similar
- [sidebar](/components/sidebar) — Similar
- [tabs](/components/tabs) — Similar
- [pagination](/components/pagination) — Similar
- [menu](/components/menu) — Similar

## Applicable styles

`minimalism` `editorial`

## Sources

- [WAI-ARIA Authoring Practices — Breadcrumb](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)
- [NN/g — Breadcrumbs](https://www.nngroup.com/articles/breadcrumbs/)

---

JSON: `/api/concept/components/breadcrumb.json` · Site: /en/components/breadcrumb
