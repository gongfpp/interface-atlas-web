# Checkbox / 复选框

> Components · `id: checkbox`

Square toggles for a set of independently selectable items, flipping between checked and unchecked on click. A parent can show an indeterminate state when only some children are checked — used for bulk selection, filters and consent.

**Aliases:** 复选框 · 勾选框 · 多选框 · 打勾框 · 勾选项 · 勾选框选择

**Category:** Form / Input

## When to use

- Multiple options can be selected independently
- Checking list items before a bulk action
- Single standalone confirmations like agreeing to terms

## When not to use

- Mutually exclusive choice — use radios
- Immediate-effect on/off settings — a switch is clearer
- More than ~15 options needing search — use a searchable multi-select

## Variants

- **Single** (单项) — One standalone item
- **Group** (分组) — Parallel items, bulk-checkable
- **Indeterminate** (半选) — Parent dash state for partial selection

## Platform API

- `<input type="checkbox">`
- `role="checkbox"`

## In code

| Framework | Name |
| --- | --- |
| HTML | [<input type="checkbox">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) |
| shadcn/ui | [Checkbox](https://ui.shadcn.com/docs/components/checkbox) |
| MUI | [Checkbox](https://mui.com/material-ui/react-checkbox/) |
| AntD | [Checkbox](https://ant.design/components/checkbox) |

## Implementation

**CSS:** `appearance` `accent-color` `border-radius: 4px` `transition`

For custom styling hide the native appearance and draw the check with a pseudo-element or inline SVG — accent fill with a white check scaling in; the indeterminate state draws a dash. The quick native route is accent-color. Make the whole label row clickable with a ≥ 24px hit area; drive the parent's indeterminate property from JS.

## Agent task prompt

```text
Implement a checkbox component in the current project.

Inspect existing form components and color variables first; stay consistent.
Requirements:
- Controlled checked; single / group / indeterminate support
- Check animation respecting prefers-reduced-motion
- Keyboard accessible (space to toggle, label association)
- Consistent light/dark themes
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a checkbox component supporting single items, group select-all and an indeterminate state.

**Design:** Create a checkbox component. Requirements: rounded square box, accent fill with a white check scaling in on select; a parent "select all" showing a dash when children are partially checked; full-row clickable; consistent in light/dark.

**Implementation:** React + Tailwind Checkbox: controlled checked and onChange; custom box with peer + pseudo-element or inline SVG check (scale transition multiplied by --demo-speed); set the parent's indeterminate via effect on its ref; space-bar toggling and htmlFor label association. Groups are data-driven ({label, children}).

## Related

- [radio](/components/radio) — Similar
- [switch](/components/switch) — Similar
- [filter-panel](/components/filter-panel) — Similar
- [form-validation](/components/form-validation) — Used with

## Applicable styles

`minimalism` `flat-design`

## Sources

- [W3C APG — Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)
- [Material Design — Checkbox](https://m3.material.io/components/checkbox/overview)

---

JSON: `/api/concept/components/checkbox.json` · Site: /en/components/checkbox
