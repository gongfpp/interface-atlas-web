# Dropdown / 下拉菜单

> Components · `id: dropdown`

A menu of actions popping near its trigger to tuck away secondary operations and keep the interface tidy — the classic form being a "···" more button. The panel floats over content with a shadow; picking an item executes and closes, and destructive actions sit isolated below a divider in red.

**Aliases:** 下拉菜单 · 下拉选项 · 更多菜单 · 操作菜单 · 溢出菜单 · 三个点菜单

**Category:** Navigation / Overlay

## Name disambiguation

A dropdown pairs a trigger button with a popup menu. A Select is a form-value control. A Popover can hold arbitrary content, not only commands.

## When to use

- Secondary actions do not warrant permanent visibility
- Row-level actions collected behind a "···" button
- Toolbar space is tight and actions must fold up

## When not to use

- Frequent primary actions deserve real buttons
- Picking a value for a form — use a select instead
- Nested menus beyond one level on touch — use a drawer or page

## Variants

- **More button** (更多按钮) — Row actions behind a "···" trigger
- **Hover** (悬停展开) — Opens on pointer hover — desktop navigation
- **With icons & divider** (带图标与分隔) — Icons aid scanning; a divider isolates the danger item

## Platform API

- `role="menu"`
- `role="menuitem"`
- `aria-haspopup`

## In code

| Framework | Name |
| --- | --- |
| ARIA APG | [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) |
| shadcn/ui | [DropdownMenu](https://ui.shadcn.com/docs/components/dropdown-menu) |
| MUI | [Menu](https://mui.com/material-ui/react-menu/) |
| AntD | [Dropdown](https://ant.design/components/dropdown) |

## Implementation

**CSS:** `position: absolute` `z-index: 10` `box-shadow` `transition`

Absolutely position the panel below the trigger with a subtle opacity + translateY transition (durations multiplied by --demo-speed). Mark up with role="menu" and role="menuitem"; arrow keys move, Escape and outside click close. Isolate the danger item below a divider in red to prevent misclicks, and keep the trigger highlighted while open.

## Compare dimensions (`navigation-overlay`)

- **Interruption:** Low — a small panel near the trigger
- **Content capacity:** Low to medium — a few to a dozen items
- **Trigger cost:** Low — a single click

## Agent task prompt

```text
Implement a dropdown component in the current project.

Inspect existing overlay components and z-index conventions first; keep layers consistent.
Requirements:
- Controlled open, panel pops near the trigger
- Items with icons; danger item in red isolated by a divider
- Close on outside click / Escape; arrow-key selection
- Consistent light/dark themes; animation respects prefers-reduced-motion
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a dropdown component that opens an action menu on click and closes after selection.

**Design:** Create a dropdown component. Requirements: triggered by a "···" button, a shadowed panel popping just below, menu items with icons, a red danger item (delete) isolated by a divider; a subtle float-in animation; closes on outside click and Escape; consistent in light/dark.

**Implementation:** React + Tailwind Dropdown: controlled open; panel absolute right-0 top-full with shadow-lg and an opacity + translateY transition (duration multiplied by --demo-speed); items data-driven ({label, icon, danger}); close on document click and Escape; role="menu" + role="menuitem" with arrow-key focus movement and Enter to execute and close.

## Related

- [menu](/components/menu) — Similar
- [popover](/components/popover) — Similar
- [command-palette](/components/command-palette) — Alternative
- [select](/components/select) — Similar
- [modal](/components/modal) — Similar

## Confusable

- [menu](/components/menu) — Menu is just the popup list; Dropdown includes trigger and dismiss logic.
- [select](/components/select) — Select collects form values; Dropdown runs commands.
- [popover](/components/popover) — Popover content is free-form; a dropdown list is command items.

## Applicable styles

`minimalism` `glassmorphism`

## Sources

- [W3C APG — Menu Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)
- [Material Design — Dropdown menu](https://m3.material.io/components/menus/overview)

---

JSON: `/api/concept/components/dropdown.json` · Site: /en/components/dropdown
