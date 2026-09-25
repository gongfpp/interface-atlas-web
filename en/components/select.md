# Select / 下拉选择

> Components · `id: select`

A collapsed single-line control holding a set of mutually exclusive options; expanding the panel reveals them and the chosen value stays on the trigger. More space-efficient than radios, suited to more than 5 options; the panel can scroll, group or search, and picking one closes it.

**Aliases:** 下拉选择 · 下拉框 · 选择器 · 下拉列表 · 下拉选项框 · select 下拉

**Category:** Form / Input

## When to use

- More than 5 mutually exclusive options
- Tight form space — options must stay collapsed
- Long or groupable option sets like countries, timezones, categories

## When not to use

- Fewer than 5 options — visible radios are faster
- Many options needing quick search — use a searchable select or command palette
- Multi-select semantics must be explicit — do not disguise it as single select

## Variants

- **Native** (原生) — OS control — best on mobile
- **Custom panel** (自定义面板) — Fully styleable with grouping
- **Multiple** (多选) — Selected set shown as chips

## Platform API

- `<select>`
- `role="listbox"`
- `role="option"`

## In code

| Framework | Name |
| --- | --- |
| HTML | [<select>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) |
| shadcn/ui | [Select](https://ui.shadcn.com/docs/components/select) |
| MUI | [Select](https://mui.com/material-ui/react-select/) |
| AntD | [Select](https://ant.design/components/select) |

## Implementation

**CSS:** `position: absolute` `max-height: overflow` `z-index: 10` `transition`

Style the trigger like an input with a chevron rotating when open; the panel is absolutely positioned below with max-height and overflow-y-auto. Mark up with aria-expanded, role="listbox", role="option" and aria-selected; close on Escape and outside click. In multi-select, clicks stay open and selections render as chips.

## Agent task prompt

```text
Implement a select component in the current project.

Inspect existing form components and overlay implementations first; keep styles and z-index consistent.
Requirements:
- Controlled single select; trigger shows the value + rotating chevron
- Panel: scrollable, highlighted current option, closes on outside click and Escape
- Accessibility: aria-expanded, role=listbox/option, arrow-key selection
- Consistent light/dark themes
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a select component that opens an option panel on click and shows the chosen value on the trigger.

**Design:** Create a select component. Requirements: trigger styled like an input (border + rotating chevron); panel with shadow, highlighted current option and scrolling; selecting closes the panel and updates the trigger; option groups supported; consistent in light/dark.

**Implementation:** React + Tailwind Select: controlled value and open state; panel absolutely positioned with max-h-60 overflow-auto; options with role="option" and aria-selected; close on document click and Escape; arrow keys move the highlight. Multi-select keeps the panel open, value is an array rendered as removable chips.

## Related

- [dropdown](/components/dropdown) — Similar
- [menu](/components/menu) — Similar
- [radio](/components/radio) — Similar
- [form-validation](/components/form-validation) — Used with
- [command-palette](/components/command-palette) — Similar

## Applicable styles

`minimalism` `swiss-style`

## Sources

- [W3C APG — Select-Only Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [Material Design — Menus](https://m3.material.io/components/menus/overview)

---

JSON: `/api/concept/components/select.json` · Site: /en/components/select
