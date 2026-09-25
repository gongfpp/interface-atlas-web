# Split Button / 分体按钮

> Components · `id: split-button`

A two-part button whose main area runs the default action while an attached arrow opens a menu of related ones. It saves a targeting step compared with a separate button and menu, and hits the frequent action faster than a dropdown whose whole face opens a list. Common for save, send and new-with-variants.

**Aliases:** 分裂按钮 · 组合按钮 · 带下拉的按钮 · 主副按钮 · split button

**Category:** Action

## Name disambiguation

Versus a Dropdown the main face runs the default action; versus a separate button and menu the arrow stays visually and focally attached.

## When to use

- One frequent default action plus a few variants of it
- The default must fire in a single click
- Toolbar or form action rows are tight on space

## When not to use

- No clear default and all options rank equally — use a dropdown
- Related actions are loosely coupled — a separate button and menu reads clearer
- Only one action exists — a plain button is enough

## Variants

- **Horizontal** (水平分体) — Main face and arrow side by side — the common form
- **Vertical** (垂直分体) — Arrow stacks under the main face for narrow toolbars
- **With icon** (带图标) — Icon plus label on the main face for faster recognition

## Platform API

- `<button>`
- `aria-haspopup="menu"`
- `aria-expanded`

## In code

| Framework | Name |
| --- | --- |
| ARIA APG | [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) |
| MUI | [ButtonGroup](https://mui.com/material-ui/react-button-group/) |
| Bootstrap | [Split button](https://getbootstrap.com/docs/5.3/components/buttons/#split-buttons) |

## Implementation

**CSS:** `display: inline-flex` `border-radius: 0` `position: relative`

Seat both halves in an inline-flex row and flatten the seam radius and border so they read as one control; give the arrow a narrow hit area with a chevron. Position the menu absolutely against the container. Each half is its own tab stop; with the menu open, arrows move through items and Esc returns focus to the arrow.

## Agent task prompt

```text
Implement a Split Button component in the current project.
Inspect existing button and menu components first and reuse color, height and overlay primitives.
Usage: frequent actions with variants — save, send, new.
Requirements:
- The main face runs the default action; the arrow opens the sibling menu
- Two independently focusable targets with visible open state
- Esc closes the menu and restores focus to the arrow
- Respect prefers-reduced-motion; consistent light and dark themes
- No new dependencies
Run the existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a split button whose main face saves by default and whose arrow opens alternatives such as save-and-publish.

**Design:** Design a split button. Requirements: the two halves read as one control split by a hairline divider; the main face names its action clearly; the arrow uses a chevron that rotates or lights up when the menu opens; menu items stay in the same action family; consistent light and dark themes.

**Implementation:** React + Tailwind split button: a plain button for the main face and an aria-haspopup="menu" button for the arrow, sharing height and color; join the seam with a negative margin or border-l-0; absolutely position the menu under the arrow with aria-expanded="true" while open; Enter fires the default action and arrows walk the menu.

## Related

- [button](/components/button) — Similar
- [dropdown](/components/dropdown) — Used with
- [menu](/components/menu) — Used with

## Confusable

- [dropdown](/components/dropdown) — A dropdown opens a menu from the whole face; split-button runs an action on the main face
- [button](/components/button) — A plain button has one action; split-button folds sibling variants into an attached menu

## Sources

- [WAI-ARIA Authoring Practices — Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)
- [Bootstrap — Split buttons](https://getbootstrap.com/docs/5.3/components/buttons/#split-buttons)
- [Material Design — Buttons](https://m3.material.io/components/buttons/overview)

---

JSON: `/api/concept/components/split-button.json` · Site: /en/components/split-button
