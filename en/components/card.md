# Card / 卡片

> Components · `id: card`

A self-contained rectangular container outlined by rounded borders or a surface colour, aggregating related content: cover, title, excerpt and actions. The universal display unit of content feeds, dashboards and commerce lists.

**Aliases:** 卡片 · 卡片容器 · 信息卡 · 内容卡片 · 卡片式布局 · 商品卡片 · 一块一块的内容板

**Category:** Layout / Display

## When to use

- Feed items with cover, title and excerpt
- Side-by-side metric summaries on a dashboard
- Clickable aggregate entries (product, article, project)

## When not to use

- Row-aligned comparison matters — use a table
- Very high-density data — use a table
- Purely decorative wrapping dilutes content — prefer whitespace

## Variants

- **Basic** (基础) — Border or surface plus content, the general case
- **Media** (带封面) — Top image above a content area
- **Actionable** (可点击) — Whole card clickable with hover lift or border emphasis

## Platform API

- `<article>`

## Implementation

**CSS:** `border-radius` `box-shadow` `border` `aspect-ratio`

Card = container (radius, border or shadow) + padding + optional sections (media, content, actions). For a clickable card wrap it in an a or button and give hover feedback (border colour or slight lift); fix the media area's aspect-ratio to prevent layout shift after images load.

## Compare dimensions (`primary-display`)

- **Information density:** Low — one topic per card
- **Scannability:** Medium — scannable but space-hungry
- **Good for:** Cover-led content, metric summaries

## Agent task prompt

```text
Implement a Card component in the current project.

Inspect the existing component system and design tokens first; reuse existing
surface, radius and shadow variables.
Usage: content feeds and dashboard summaries.
Requirements:
- Container + optional media + title/description + action row
- Optional whole-card click (mind semantics and nested interactives)
- Restrained hover feedback, respecting prefers-reduced-motion
- Consistent light/dark themes, no new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a Card component: a rounded bordered container with a cover image, title, description and action buttons.

**Design:** Create a Card. Requirements: rounded corners with a hairline border (or soft surface), consistent padding; optional 16:9 media area; bold title, two-line clamped description; hover shifts the border to accent or lifts slightly (120ms); both whole-card-click and footer-action forms.

**Implementation:** React + Tailwind Card: rounded-xl border bg-raised container; media area with aspect-video overflow-hidden; description with line-clamp-2; for whole-card click wrap in an a/button with transition hover:border-accent hover:shadow and mind nested interactive semantics; support an as prop; durations scaled by var(--demo-speed, 1).

## Related

- [table](/components/table) — Alternative
- [bento-grid](/components/bento-grid) — Used with
- [hover-lift](/components/hover-lift) — Used with
- [badge](/components/badge) — Similar

## Sources

- [Material Design — Cards](https://m3.material.io/components/cards/overview)
- [Ant Design — Card](https://ant.design/components/card)

---

JSON: `/api/concept/components/card.json` · Site: /en/components/card
