# Radio / 单选框

> Components · `id: radio`

A set of circular buttons for mutually exclusive options — exactly one selected per group, never unset. The core contrast with checkboxes is single versus multi selection; the dot fills with animation on select, and with 2–5 options a visible radio group beats a dropdown.

**Aliases:** 单选框 · 单选按钮 · radio 按钮 · 圆形单选 · 单选项 · 单选选择器

**Category:** Form / Input

## When to use

- 2–5 mutually exclusive options that should stay visible
- A clear default exists and unselecting is not needed
- Parallel plans like payment or delivery methods

## When not to use

- Multiple selections — use checkboxes
- More than 5 options — a select saves space
- Binary on/off toggling — use a switch

## Variants

- **Default** (默认) — Classic dot-and-text layout
- **Card** (卡片式) — Clickable card with descriptions
- **Inline segmented** (行内分段) — Horizontal row for dense forms

## Platform API

- `<input type="radio">`
- `role="radio"`
- `role="radiogroup"`

## In code

| Framework | Name |
| --- | --- |
| HTML | [<input type="radio">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) |
| shadcn/ui | [RadioGroup](https://ui.shadcn.com/docs/components/radio-group) |
| MUI | [Radio / RadioGroup](https://mui.com/material-ui/react-radio-button/) |
| AntD | [Radio](https://ant.design/components/radio) |

## Implementation

**CSS:** `appearance` `accent-color` `border-radius: 50%` `transition`

Custom circles use a bordered ring with an inner dot scaling in; shared name keeps native exclusivity. In React, controlled value comparison drives selection. Make full rows clickable; arrow keys move within the group natively. Card styles emphasize via outer ring highlight while keeping radio semantics.

## Agent task prompt

```text
Implement a radio group component in the current project.

Inspect existing form components and design tokens first; stay consistent.
Requirements:
- Controlled single selection, exclusive, always one selected
- Default and card styles
- Keyboard accessible (native radio behavior + label association)
- Consistent light/dark themes; animation respects prefers-reduced-motion
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a radio group component with default, card and inline segmented styles.

**Design:** Create a radio group component. Requirements: inner dot scaling in inside a circular ring; card style fully clickable with an accent ring and description when selected; mutually exclusive with one always selected; consistent in light/dark.

**Implementation:** React + Tailwind RadioGroup: controlled value + onChange with data-driven options ({value, label, description}); hide native inputs but keep their keyboard behavior; dot animation scales 0 to 1 with duration multiplied by --demo-speed; card style toggles aria-checked and ring highlight.

## Related

- [checkbox](/components/checkbox) — Similar
- [switch](/components/switch) — Similar
- [select](/components/select) — Similar
- [form-validation](/components/form-validation) — Used with

## Applicable styles

`minimalism` `flat-design`

## Sources

- [W3C APG — Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
- [Material Design — Radio button](https://m3.material.io/components/radio-button/overview)

---

JSON: `/api/concept/components/radio.json` · Site: /en/components/radio
