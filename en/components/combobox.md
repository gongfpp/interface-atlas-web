# Combobox / 可搜索选择框

> Components · `id: combobox`

A text field paired with a list of suggestions. People type to narrow a set, then commit a value with pointer or keyboard. Typed text, the active suggestion and the committed selection are separate states. Provide a clear empty result and a way to clear the field when nothing matches.

**Aliases:** 可以搜索的下拉框 · 输入筛选选项 · 自动补全选择 · autocomplete

**Category:** Form

## When to use

- Choose a city, team member or style from a sizable known set.
- Filter while typing while preserving a clear committed value.

## When not to use

- Use radios for only two or three choices.
- Use a plain input when there is no suggestion set.

## Variants

- **Editable** (可输入筛选) — Type to filter suggestions.
- **Select only** (只选不输) — Choose a fixed value without free-form input.

## Implementation

**CSS:** `position: relative` `overflow-y: auto` `:focus-visible`

Keep focus in the input and point aria-activedescendant at the active option. Connect aria-expanded, aria-controls, listbox and option semantics. Support arrows, Enter and Escape, and reset the active index when filtering changes.

## Agent task prompt

```text
Inspect existing components and tokens before implementing Combobox.
Requirements:
- Keep focus in the input and point aria-activedescendant at the active option. Connect aria-expanded, aria-controls, listbox and option semantics. Support arrows, Enter and Escape, and reset the active index when filtering changes.
- The active descendant must reference an existing option.
- Clearing restores options; Escape closes the list.
- Support narrow screens, both themes and reduced motion.
- Add no dependencies.
Run existing checks and list changed files and validation results.
```

### Other prompt layers

**Basic:** Create a Combobox component. Choose a city, team member or style from a sizable known set.

**Design:** Design a Combobox with clear hierarchy and state feedback. Type to filter suggestions. Choose a fixed value without free-form input. The active descendant must reference an existing option. Clearing restores options; Escape closes the list.

**Implementation:** Keep focus in the input and point aria-activedescendant at the active option. Connect aria-expanded, aria-controls, listbox and option semantics. Support arrows, Enter and Escape, and reset the active index when filtering changes.

## Related

- [input](/components/input) — Similar
- [select](/components/select) — Similar
- [command-palette](/components/command-palette) — Similar

## Sources

- [W3C WAI — Accessible interaction patterns](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

---

JSON: `/api/concept/components/combobox.json` · Site: /en/components/combobox
