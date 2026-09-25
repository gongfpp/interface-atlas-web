# Menu / 菜单

> Components · `id: menu`

A temporary overlay listing actions, opened by click or right-click: flat or grouped command items that execute and close on selection. It houses infrequent actions (more, settings, delete), usually behind a "⋯" button or a context click.

**Aliases:** 菜单 · 下拉菜单 · 右键菜单 · 上下文菜单 · 操作菜单 · 更多操作 · 三个点点出来的菜单

**Category:** Navigation / Overlay

## Name disambiguation

A menu lists commands that run on click. Navigation (Navbar/Sidebar) lists destinations. A dropdown is the combined control — a button plus a menu.

## When to use

- Stash infrequent actions instead of crowding buttons
- Context actions on right-click (files, canvas items)
- Site section entry points in a top nav

## When not to use

- Frequent primary actions — expose real buttons
- Very deep trees — use a sidebar or command palette
- Destructive items need confirmation, not one-click firing

## Variants

- **Dropdown** (下拉) — Opens below its trigger button
- **Context** (上下文) — Opens at the pointer on right-click
- **Grouped** (分组) — Group labels with separators

## Platform API

- `role="menu"`
- `role="menuitem"`

## Implementation

**CSS:** `position: absolute` `z-index` `box-shadow` `min-width`

Anchor to the trigger with absolute positioning, opening below by default and flipping near screen edges. Items are buttons with role="menuitem"; ↑↓ cycles, Enter executes, Esc closes; destructive items get red text and a separator before them. Close on outside click: listen for pointerdown on document and check the target.

## Compare dimensions (`primary-navigation`)

- **Space footprint:** Low — hidden until invoked
- **Layer capacity:** Medium — two levels at most
- **Mobile friendly:** Medium — needs larger touch targets

## Agent task prompt

```text
Implement a Menu component in the current project.

Inspect the existing component system and design tokens first; reuse existing
surface and shadow variables.
Usage: row "more" actions and right-click context.
Requirements:
- Anchored to the trigger, flips near screen edges
- Keyboard: ↑↓ cycling, Enter to execute, Esc to close
- Destructive items in red with a divider and a confirm hook
- Closes on outside click; consistent light/dark themes
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a Menu component: a "⋯" button opens an action list (rename, copy link, delete); selecting an item executes it and closes the menu.

**Design:** Create a Menu. Requirements: overlay min-w 160px, rounded, bordered, heavily shadowed; consistent item rows with light hover highlight; small grey group labels; destructive items in red separated by a divider; the trigger keeps an accent state while open; consistent light/dark themes.

**Implementation:** React + Tailwind Menu: controlled open state; relative wrapper with an absolute top-full mt-1 panel; document pointerdown listener closes on outside click, Esc closes; focus moves into the panel and ArrowUp/ArrowDown cycles items (role="menuitem"), Enter executes via onSelect; items are data-driven {label, danger?, separator?}; enter animation scale + fade (duration scaled by var(--demo-speed, 1)).

## Related

- [dropdown](/components/dropdown) — Similar
- [navbar](/components/navbar) — Alternative
- [command-palette](/components/command-palette) — Similar
- [popover](/components/popover) — Similar

## Confusable

- [dropdown](/components/dropdown) — Dropdown is the full button+menu control; Menu is only the popup command list.
- [navbar](/components/navbar) — Navbar jumps to destinations; Menu runs immediate commands.
- [select](/components/select) — Select picks a value for a form; Menu triggers an action.

## Sources

- [WAI-ARIA Authoring Practices — Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)
- [Apple HIG — Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

---

JSON: `/api/concept/components/menu.json` · Site: /en/components/menu
