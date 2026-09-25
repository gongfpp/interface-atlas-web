# Sidebar / 侧边栏

> Components · `id: sidebar`

A vertical navigation area pinned to one side of the page (usually the left), carrying the primary hierarchy of a product. The de facto standard of admin systems: brand and global search on top, module tree in the sidebar, content focused on the task.

**Aliases:** 左侧菜单 · 侧栏 · 左边菜单 · 导航侧栏 · 固定菜单 · 网页左边固定菜单 · 侧边导航

**Category:** Navigation

## When to use

- Deep-hierarchy admin panels, docs sites, dashboards
- Navigation must stay visible for quick switching
- Desktop-first, wide-screen layouts

## When not to use

- Mobile — use a drawer or bottom nav instead
- Simple sites with few sections — a top nav is lighter
- Width-hungry content like reading or writing modes

## Variants

- **Fixed** (固定宽) — Persistent ~240px, the classic
- **Collapsible** (可折叠) — Collapses to icon rail — balances density and space
- **Floating** (浮动) — Detached, floating card style (Linear-like)

## Platform API

- `<aside>`
- `<nav>`

## Implementation

**CSS:** `position: sticky` `flex` `width` `overflow-y: auto`

Flex layout: fixed-width sidebar + flex-1 content; sidebar scrolls internally, sticky top. Collapse animates width (240px ↔ 64px) with icon-centered items and text fading out. On mobile breakpoints it becomes a fixed drawer with backdrop. Mark the active item with an accent block or left bar.

## Compare dimensions (`primary-navigation`)

- **Space footprint:** High — persistent width
- **Layer capacity:** High — multi-level tree
- **Mobile friendly:** Poor — becomes a drawer

## Agent task prompt

```text
Implement an admin sidebar in the current project.

Check the existing routing structure and navigation data source first; stay consistent.
Requirements:
- Fixed 240px, collapsible to a 64px icon rail (persist collapsed state)
- Data-driven grouped nav; active route highlighted (aria-current)
- Becomes a drawer with backdrop on mobile
- Consistent light/dark themes
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create an admin sidebar with a brand area, grouped navigation and a bottom user section.

**Design:** Create a fixed sidebar (240px): logo on top; two-level grouped nav (small grey group labels + items); active item marked with an accent left bar and soft background; bottom avatar + settings. Collapsible to a 64px icon rail with smooth animation. Consistent in light/dark.

**Implementation:** React + Tailwind sidebar: fixed-width aside with internal scroll; data-driven groups ({label, items}); controlled activeId; collapsed state via width transition with icon tooltips; below lg it becomes a fixed drawer with backdrop, open state controlled. Accessibility: nav landmark + aria-current.

## Related

- [navbar](/components/navbar) — Alternative
- [drawer](/components/drawer) — Similar
- [command-palette](/components/command-palette) — Similar
- [breadcrumb](/components/breadcrumb) — Similar

## Applicable styles

`minimalism` `swiss-style`

## Sources

- [Apple HIG — Sidebars](https://developer.apple.com/design/human-interface-guidelines/sidebars)
- [Atlassian Design System — Navigation](https://atlassian.design/)

---

JSON: `/api/concept/components/sidebar.json` · Site: /en/components/sidebar
