# Toolbar / 工具条

> Components · `id: toolbar`

A strip of controls that act on the current view or selection, grouped by function and split by separators. A toolbar runs actions; a menu lists options; site navigation says where to go. Think of an editor's bold/italic bar, an image viewer's rotate/download bar, or a list page's bulk-action bar.

**Aliases:** 工具条 · 工具栏 · 操作栏 · 快捷操作那一排 · toolbar · tool bar

**Category:** Navigation / Controls

## Name disambiguation

A toolbar is a row of action buttons that fire immediately; a menubar is a row of menu triggers that open lists requiring a second choice; a navbar is a set of destinations that change the route or page. Decide by what happens after the click: run an action → toolbar; open options → menu; go somewhere else → navbar.

## When to use

- A cluster of frequent actions on the current view or selection (format, bulk ops)
- Actions must stay visible and one click away
- Icons carry the meaning and labels can be dropped

## When not to use

- Rare or debatable actions — hide them in an overflow menu
- Picking one option from a set — that is a menu or select
- Global site destinations — that is a navbar or sidebar

## Variants

- **Icon toolbar** (图标工具条) — Icon-only buttons with tooltips for meaning
- **Formatting toolbar** (排版工具条) — Bold / italic / align text actions with toggle states
- **Contextual toolbar** (上下文工具条) — Appears only on selection and hides when the selection clears

## Platform API

- `role="toolbar"`
- `aria-label`
- `roving tabindex`

## In code

| Framework | Name |
| --- | --- |
| ARIA APG | [Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) |
| Radix | [Toolbar](https://www.radix-ui.com/primitives/docs/components/toolbar) |
| MUI | [Toolbar](https://mui.com/material-ui/react-toolbar/) |

## Implementation

**CSS:** `flex` `gap` `border-radius` `background` `transition`

The container is role="toolbar" with an aria-label; cluster related controls in role="group" regions each labeled, and make separators 1px rules marked aria-hidden. Keyboard uses roving tabindex — one tab stop for the strip, Left/Right (or Up/Down for a vertical bar) moves inside, Home / End jump to the ends. Toggle buttons use aria-pressed. On narrow screens wrap or collapse into an overflow menu.

## Agent task prompt

```text
Implement a Toolbar component in the current project.
Inspect the existing component system and design tokens first; reuse existing buttons.
Keep it distinct from navbars and menubars — only actions on the current context belong here.
Keep the project's visual style. Add no unnecessary dependencies.
Respect prefers-reduced-motion; support keyboard operation (roving tabindex).
Run the project's existing checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a Toolbar: a strip of grouped icon buttons acting on the current content, with toggle states.

**Design:** Create a toolbar: a soft rounded strip with 4px padding, 32px square icon buttons whose active state washes with the accent tint, 1px separators between groups, hover deepens and press sinks slightly, wraps on narrow screens; consistent light/dark themes.

**Implementation:** React + Tailwind toolbar: role="toolbar" with roving tabindex and arrow-key movement inside; toggle buttons bind aria-pressed to a Set<string>; separators are aria-hidden; action buttons run on click and update state; flex-wrap on narrow screens. Respect prefers-reduced-motion. No new dependencies.

## Related

- [navbar](/components/navbar) — Alternative
- [menu](/components/menu) — Used with
- [button](/components/button) — Used with

## Confusable

- [navbar](/components/navbar) — A navbar navigates to destinations; a toolbar runs actions in the current context.
- [menu](/components/menu) — A menu opens a list to choose from; a toolbar button acts on click.

## Sources

- [ARIA APG — Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)
- [Apple HIG — Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars)
- [MDN — ARIA toolbar role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)

---

JSON: `/api/concept/components/toolbar.json` · Site: /en/components/toolbar
