# Input / 输入框

> Components · `id: input`

A single-line bordered field for collecting text — the basic unit of every form. Placeholder hints the expected format, focus highlights the border to guide the eye, and failed validation switches to an error color with a hint. Prefix and suffix icons or a clear button can live inside, and the value is controlled state.

**Aliases:** 输入框 · 文本输入框 · 文本框 · 输入栏 · 表单输入框 · 单行输入框

**Category:** Form / Input

## When to use

- Short single-line values like name, email or title
- Forms that need instant validation feedback
- Search-like fields with icons or a clear button

## When not to use

- Multi-line content like bios — use a textarea
- Fewer than 5 fixed options — radio or select is faster
- Complex formats like rich text or dates — use dedicated components

## Variants

- **Outline** (描边) — Bordered box — the default everywhere
- **Filled** (填充) — Tinted background, borderless — Material style
- **With addons** (带前后缀) — Inline icons and a clear button

## Platform API

- `<input>`
- `type`
- `role="textbox"`

## In code

| Framework | Name |
| --- | --- |
| HTML | [<input>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) |
| shadcn/ui | [Input](https://ui.shadcn.com/docs/components/input) |
| MUI | [TextField](https://mui.com/material-ui/react-text-field/) |
| AntD | [Input](https://ant.design/components/input) |

## Implementation

**CSS:** `border` `outline` `box-shadow: ring` `transition`

Base style is border + rounded + horizontal padding; focus adds an accent ring via box-shadow without shifting layout; the error state swaps border and hint colors. The clear button is absolutely positioned inside. Keep height 36–44px, low-contrast placeholder, and always attach a label or aria-label.

## Agent task prompt

```text
Implement an input component in the current project.

Inspect the existing form components and design tokens first; stay consistent.
Requirements:
- Controlled input with label, placeholder, prefix/suffix
- Focus ring and error state (message passed in from external validation)
- Clear button when non-empty
- Consistent light/dark themes and complete accessibility labels
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create an input component with a label, placeholder, clear button and error hint.

**Design:** Create an input component. Requirements: left-aligned external label, accent ring on focus, a clear button appearing when non-empty, red error state with a message; outline and filled styles; consistent in light/dark.

**Implementation:** React + Tailwind Input: controlled value; focus with focus:border-accent and ring; error driven by an error prop; absolutely positioned clear button with right padding reserved; prefix/suffix slots and maxLength support. Associate the label with htmlFor.

## Related

- [textarea](/components/textarea) — Similar
- [select](/components/select) — Similar
- [form-validation](/components/form-validation) — Used with
- [search-filtering](/components/search-filtering) — Used with

## Applicable styles

`minimalism` `swiss-style`

## Sources

- [Material Design — Text fields](https://m3.material.io/components/text-fields/overview)
- [Apple HIG — Text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields)

---

JSON: `/api/concept/components/input.json` · Site: /en/components/input
