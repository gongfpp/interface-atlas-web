# Navbar / 顶部导航栏

> Components · `id: navbar`

A horizontal navigation bar pinned to the top of the page: brand on the left, primary links in the middle, search, actions and avatar on the right. It is the front door of a site — the 3–7 most important destinations compressed into one strip, folding into a hamburger menu on mobile. Usually kept visible with position: sticky.

**Aliases:** 导航栏 · 顶部菜单 · 页面最上面那一条 · header 导航 · 页头导航 · 汉堡菜单那条栏 · top bar

**Category:** Navigation

## When to use

- Marketing, product and docs sites with few flat destinations
- Brand and global actions must stay pinned above the fold
- Vertically scrolling layouts that can spare one horizontal strip

## When not to use

- Deep admin hierarchies — prefer a sidebar
- Scanning many nav items at once
- Immersive reading or editor modes

## Variants

- **Standard** (标准) — Brand left, links center, actions right
- **Centered** (居中) — Absolutely centered links, Apple-style
- **Transparent overlay** (透明悬浮) — Floats over the hero, gains a background on scroll

## Platform API

- `<nav>`
- `role="navigation"`

## Implementation

**CSS:** `position: sticky` `z-index` `flex` `justify-content: space-between`

Sticky top bar with a three-part flex row (brand / links / actions). Mark the current item with accent color or underline (aria-current="page"). Below the mobile breakpoint hide the links behind a hamburger that opens a dropdown or drawer; the overlay variant gains background and backdrop-filter after scrolling past the hero.

## Compare dimensions (`primary-navigation`)

- **Space footprint:** Low — one top strip
- **Layer capacity:** Low — mostly one flat level
- **Mobile friendly:** Medium — folds into a hamburger

## Agent task prompt

```text
Implement a navbar in the current project.

Check the existing routing structure and nav data source first; reuse brand assets and design tokens.
Requirements:
- Sticky top bar with brand, links, search entry and user area
- Active route highlighted (aria-current="page")
- Folds into a hamburger menu on mobile with smooth animation
- Consistent light/dark themes
- No unnecessary dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a navbar with a brand mark, a few primary links, a search entry and a user area.

**Design:** Create a navbar: 56px tall, sticky; logo + product name on the left, four links in the middle (active item marked with an accent underline), search box + primary button + avatar on the right. Folds into a hamburger dropdown on mobile. Consistent in light and dark themes.

**Implementation:** React + Tailwind navbar: header with sticky top-0 and z-index; data-driven links with a controlled activeId and aria-current="page" on the active item; below the sm breakpoint swap to a hamburger with a max-height transition panel. Expose gap and theme props. No new dependencies.

## Related

- [sidebar](/components/sidebar) — Alternative
- [menu](/components/menu) — Alternative
- [breadcrumb](/components/breadcrumb) — Similar
- [tabs](/components/tabs) — Similar
- [landing-page](/components/landing-page) — Used with

## Applicable styles

`minimalism` `glassmorphism` `editorial`

## Sources

- [Apple HIG — Navigation bars](https://developer.apple.com/design/human-interface-guidelines/navigation-bars)
- [NN/g — Navigation design](https://www.nngroup.com/articles/navigation-design/)

---

JSON: `/api/concept/components/navbar.json` · Site: /en/components/navbar
