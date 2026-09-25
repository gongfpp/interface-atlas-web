# Multi-select / 多选框组

> Components · `id: multi-select`

A control for picking several values from one option set, echoing the chosen ones as removable chips. Unlike a single select, the panel stays open after each pick and every chip can be removed on its own. Fits tags, permissions and filter facets; pair it with search when the set is large.

**Aliases:** 多选 · 多选下拉 · 可多选的选择框 · 多选框 · multi select

**Category:** Form / Input

## Name disambiguation

Colloquially "multi-select" may mean a plain checkbox; this entry covers the list-plus-chips composite control.

## When to use

- Several values must be committed at once — tags, permissions, filter facets
- Selections must stay visible and individually removable
- A fixed option set that may grow large and need search or grouping

## When not to use

- Only one value is allowed — select or combobox states that better
- Fewer than 5 options with no echo needed — visible checkboxes are faster
- Values are free-form inventions rather than list picks — use a tag input

## Variants

- **Chip echo** (标签回显) — Selected values sit in the control as removable chips
- **Checkbox list** (复选列表) — Options laid out as checkboxes — what you see is what you get
- **Dual listbox** (双列表) — Two panes with transfer buttons for managing large selections

## Platform API

- `role="listbox"`
- `aria-multiselectable`
- `aria-selected`

## In code

| Framework | Name |
| --- | --- |
| ARIA APG | [Listbox (multi-select)](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) |
| shadcn/ui | [Combobox (multiple)](https://ui.shadcn.com/docs/components/combobox) |
| React Select | [isMulti](https://react-select.com/advanced) |

## Implementation

**CSS:** `flex-wrap` `scroll`

Lay chips out with flex-wrap so the control grows with the selection; park the listbox below with max-height and overflow-y-auto. Picking keeps the panel open, Escape collapses it and outside click closes it. Mark choices with aria-selected, and keep each chip's remove button focusable.

## Agent task prompt

```text
Implement a Multi-select control in the current project.
Inspect the existing component system and design tokens first and reuse what is already there.
Keep the current visual style. Add no unnecessary dependencies.
Respect prefers-reduced-motion and support keyboard operation.
Run the existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a multi-select that picks several values from a list and echoes them as individually removable chips.

**Design:** Design a multi-select. Requirements: selected values echo as chips with remove buttons inside the control; open options show a checked state; empty and no-result cases are explained; the panel stays open after picking; consistent light and dark themes.

**Implementation:** React + Tailwind multi-select: value is a string array; the list uses role="listbox" with aria-multiselectable="true" and options use role="option" plus aria-selected; toggling membership keeps the panel open; chip remove buttons and options are keyboard reachable; provide clear-all.

## Related

- [select](/components/select) — Alternative
- [combobox](/components/combobox) — Alternative
- [tag-input](/components/tag-input) — Similar

## Confusable

- [select](/components/select) — Select commits one value; multi-select accumulates many and echoes them as chips
- [combobox](/components/combobox) — Combobox searches and commits one value; multi-select manages a set

## Sources

- [ARIA APG Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- [Material Design — Chips](https://m3.material.io/components/chips/overview)
- [MDN — ARIA listbox role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)

---

JSON: `/api/concept/components/multi-select.json` · Site: /en/components/multi-select
