# Tag Input / 标签输入

> Components · `id: tag-input`

Pressing Enter or typing a separator turns the current text into a removable chip; chips line up inside the field while the caret stays at the end. It mixes free typing with per-item management — common for recipients, hashtags, file names and filter terms. Backspace removes the last chip, the × removes a specific one.

**Aliases:** 标签输入 · 标签框 · 打标签的输入框 · chips 输入 · token input · tag box

**Category:** Form / Input

## When to use

- Multi-value input where each item is removable (recipients, tags, filters)
- The option set is open and users may invent new values
- Users must see what is already entered while still typing

## When not to use

- A small fixed option set — use a select or radio group
- A single short string — a plain input is enough
- Ordering or grouping of options — use a multi-select or transfer list

## Variants

- **Free-form tags** (自由输入) — Enter creates a chip; no vocabulary check
- **Autocomplete tokens** (自动补全) — Suggests candidates while typing, still allows new values
- **File-name chips** (文件名标签) — Shows chosen file names; removable but not editable

## Platform API

- `<input>`
- `role="listbox"`
- `aria-live`
- `keydown`

## In code

| Framework | Name |
| --- | --- |
| MUI | [Autocomplete (multiple)](https://mui.com/material-ui/react-autocomplete/) |
| React Select | [Multi value](https://react-select.com/advanced#multi-value) |
| AntD | [Select mode="tags"](https://ant.design/components/select) |

## Implementation

**CSS:** `flex` `flex-wrap` `gap` `border-radius: 9999px`

The container is a flex-wrap region that looks like one input: pill chips fill the front and a real input flexes into the remaining width. Commit a trimmed, de-duplicated value on Enter, comma or blur; Backspace deletes the last chip only when the input is empty. Use a real button (not a styled span) for remove and announce "removed xx" via aria-live. The autocomplete variant drops an absolutely positioned suggestion list under the container with arrow-key highlight.

## Agent task prompt

```text
Implement a Tag Input component in the current project.
Inspect the existing component system and design tokens first; reuse field and badge styles.
Support free-form, autocomplete and file-name-chip shapes.
Keep the project's visual style. Add no unnecessary dependencies.
Respect prefers-reduced-motion and support keyboard operation.
Run the project's existing checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a Tag Input: Enter in the text field mints a removable chip; Backspace deletes the last one.

**Design:** Create a tag input: the container looks like a field (rounded, bordered) holding soft pills with × remove buttons while the caret stays typable; the border turns accent on focus; the container grows by wrapping when tags overflow; consistent light/dark themes.

**Implementation:** React + Tailwind tag input: controlled tags: string[]; handle Enter, comma and Backspace on the input keydown; commit trimmed de-duplicated values; each chip is a removable button; announce adds and removes with aria-live="polite"; the autocomplete variant filters candidates with arrow-key highlight; empty or duplicate values mint nothing. No new dependencies.

## Related

- [input](/components/input) — Similar
- [combobox](/components/combobox) — Similar
- [badge](/components/badge) — Used with
- [multi-select](/components/multi-select) — Used with

## Sources

- [Material Design — Chips](https://m3.material.io/components/chips/overview)
- [ARIA APG — Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [MDN — The Input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

---

JSON: `/api/concept/components/tag-input.json` · Site: /en/components/tag-input
