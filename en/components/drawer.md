# Drawer / 抽屉

> Components · `id: drawer`

A panel that slides in from a screen edge (usually right or left), usually with a backdrop. Lighter than a modal: it carries longer content without leaving the page, and closing restores the original context. On mobile it appears as a nav drawer or a bottom sheet.

**Aliases:** 抽屉 · 侧滑面板 · 滑出面板 · 侧边抽屉 · 侧拉页面 · 汉堡菜单点开的面板 · 手机上滑出来的面板

**Category:** Overlay / Navigation

## When to use

- Inspect details without leaving the list (mail, orders)
- Host side navigation on mobile
- Quick edit or filter while keeping page context

## When not to use

- A forced decision is required — use a modal
- One or two lines of content — use a popover or tooltip
- Persistent desktop navigation — use a sidebar

## Variants

- **Right edge** (右侧滑入) — The common direction for detail panels
- **Left edge** (左侧滑入) — Common for mobile navigation drawers
- **Bottom sheet** (底部抽屉) — Mobile action and filter panels

## Platform API

- `<dialog>`
- `role="dialog"`
- `aria-modal="true"`

## Implementation

**CSS:** `position: fixed` `transform: translateX(100%)` `transition` `z-index` `overflow-y: auto`

Fix the panel at the edge and animate transform translateX to hide/show (GPU-friendly, do not animate width); fade the backdrop in sync. Scroll long content inside with overflow-y-auto and pin footer actions. Focus management and scroll lock match the modal; close on Esc, add edge-swipe gestures on mobile.

## Compare dimensions (`overlay-container`)

- **Interruption:** High — backdrop covers the page while open
- **Content capacity:** High — long lists and forms fit
- **Mobile friendly:** Good — edge sliding feels natural

## Agent task prompt

```text
Implement a Drawer component in the current project.

Inspect the existing component system and design tokens first; reuse existing
surface, elevation and shadow variables.
Usage: list detail viewing and mobile navigation.
Requirements:
- Right-edge slide-in with backdrop; close on Esc and backdrop click
- Lock scroll and move focus into the panel while open
- Transform-based slide animation, respecting prefers-reduced-motion
- Support left-edge and bottom-sheet variants
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a Drawer component: a button slides a panel in from the right with a backdrop, containing a header, content and a close button.

**Design:** Create a drawer. Requirements: panel slides in from the right (~360px wide) over a translucent backdrop; header with title and close button, scrollable body, pinned footer actions; 240ms ease-out slide; closes on Esc and backdrop click; consistent light/dark themes.

**Implementation:** React + Tailwind Drawer: controlled open state; fixed inset-y-0 right-0 panel transitioning transform translate-x-full ↔ translate-x-0 (duration scaled by var(--demo-speed, 1)); backdrop opacity transition; lock body scroll and move focus in when open; close on Esc; role="dialog" aria-modal="true"; respect prefers-reduced-motion.

## Related

- [modal](/components/modal) — Alternative
- [sidebar](/components/sidebar) — Similar
- [popover](/components/popover) — Alternative
- [drawer-slide](/components/drawer-slide) — Used with

## Sources

- [Material Design — Navigation drawer](https://m3.material.io/components/navigation-drawer/overview)
- [Apple HIG — Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets)

---

JSON: `/api/concept/components/drawer.json` · Site: /en/components/drawer
