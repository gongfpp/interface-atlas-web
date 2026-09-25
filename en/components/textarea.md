# Textarea / 多行输入框

> Components · `id: textarea`

A growing multi-line field for long text — bios, notes, messages and feedback. It grows manually or automatically, usually paired with a counter and submit button; the count turns red past the limit and content wraps instead of clipping.

**Aliases:** 多行输入框 · 文本域 · 大输入框 · 留言框 · 备注框 · 富文本输入区

**Category:** Form / Input

## When to use

- Long-form text like bios, notes and messages
- Users need line breaks to structure content
- Character limits need a live counter

## When not to use

- Short single-line fields — an input is more compact
- Formatting like bold and headings — use a rich-text editor
- Structured data like key-value pairs — use dedicated controls

## Variants

- **Fixed** (固定高) — Fixed rows scroll internally — stable layout
- **Autosize** (自动增高) — Grows with content — chat and comment boxes
- **With counter** (带字数) — Live counter bottom-right, red past the limit

## Platform API

- `<textarea>`

## In code

| Framework | Name |
| --- | --- |
| HTML | [<textarea>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) |
| shadcn/ui | [Textarea](https://ui.shadcn.com/docs/components/textarea) |
| MUI | [TextField multiline](https://mui.com/material-ui/react-text-field/) |
| AntD | [Input.TextArea](https://ant.design/components/input) |

## Implementation

**CSS:** `resize` `field-sizing: content` `max-height: overflow` `counter: length`

Base styling matches input but multi-line: a min-h starting point and resize-y for manual growth; autosize via field-sizing: content (or JS setting height from scrollHeight on input). The counter compares value.length against maxLength, turning red past the limit and blocking submit.

## Agent task prompt

```text
Implement a textarea component in the current project.

Inspect existing form components and design tokens first; stay consistent.
Requirements:
- Controlled multi-line input with autosize and manual resize
- Live character counter, red past the limit with submit disabled
- Focus ring and accessibility labels
- Consistent light/dark themes
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a textarea component with a label, character counter and submit button.

**Design:** Create a textarea component. Requirements: four-row min height, vertically resizable; live counter bottom-right turning red past the limit; a submit button disabled when empty or over limit; accent focus ring; consistent in light/dark.

**Implementation:** React + Tailwind Textarea: controlled value + maxLength; autosize by setting height to auto then scrollHeight on input (or field-sizing: content); counter of value.length / maxLength with a warning tint near the limit and red past it; submit disabled when empty or over limit; resize-y + max-h to cap growth.

## Related

- [input](/components/input) — Similar
- [form-validation](/components/form-validation) — Used with
- [inline-editing](/components/inline-editing) — Used with
- [toast](/components/toast) — Similar

## Applicable styles

`minimalism` `editorial`

## Sources

- [MDN — textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
- [Apple HIG — Text views](https://developer.apple.com/design/human-interface-guidelines/text-fields)

---

JSON: `/api/concept/components/textarea.json` · Site: /en/components/textarea
