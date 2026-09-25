# Inline Editing / 行内编辑

> Patterns · `id: inline-editing`

The text on the page is itself the editor: a click swaps it for an input in place, Enter or blur commits, Escape cancels — what you fix is what you see. It solves the overhead of a full edit page for tiny changes, driving the cost of a correction down to a single click, ideal for quick single-field revisions.

**Aliases:** Inline Editing · 行内编辑 · 就地编辑 · 点击变输入框 · 原地编辑 · 即点即改 · 单击编辑

**Category:** Interaction / Forms

## When to use

- Quick single-field edits like doc titles and display names
- Lightweight revisions on kanban cards and table cells
- Low-risk text that is easy to revert

## When not to use

- Fields with complex validation or cross-field logic
- Error-prone zones without an explicit edit affordance
- Flows needing drafts, versions or other edit context

## Variants

- **Click to edit** (点击编辑) — Static text and input swap in place
- **Hover affordance** (悬停提示) — A dotted underline or pencil icon appears on hover to signal editability
- **Commit and cancel** (确认与取消) — Enter or blur commits; Escape reverts and exits

## Implementation

**CSS:** `contenteditable` `focus outline` `border-accent` `aria-live`

Two-state swap: render a button (or role="button" text) when idle, and an auto-focused, select-all input/textarea when editing. Enter (Shift+Enter for newlines) or blur commits, Escape reverts, empty input falls back to the original. A hover dotted underline signals editability; add a subtle height transition if sizes differ.

## Agent task prompt

```text
Implement Inline Editing in the current project.

Inspect the existing input components and validation system first; reuse existing input styles and submit logic.
Usage: quick edits for name and bio on a profile page.
Requirements:
- Click swaps text for an in-place input, auto-focused and select-all
- Enter or blur commits, Escape reverts, empty input falls back
- Hover affordance (dotted underline or pencil icon)
- Multiline fields support Shift+Enter newlines
- Respect prefers-reduced-motion
- No unnecessary dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create an inline editing component where clicking text swaps it for an input in place; Enter commits, Escape cancels — for titles, names and similar fields.

**Design:** Design a set of inline-editable fields. Requirements: a hover dotted underline and pencil icon signal editability; the editing input matches the text size with an accent border; small commit and cancel buttons are available; multiline fields support Shift+Enter for newlines; light/dark themes.

**Implementation:** Implement Inline Editing in React + Tailwind. Keep value / editing / draft per field; clicking the text enters edit mode with autoFocus + select; onKeyDown commits on Enter, reverts on Escape, and onBlur commits; an empty draft falls back to the original. Use textarea for multiline. Editing input gets border-accent outline-none; idle text gets a hover dotted underline.

## Related

- [input](/patterns/input) — Used with
- [textarea](/patterns/textarea) — Used with
- [form-validation](/patterns/form-validation) — Similar
- [optimistic-ui](/patterns/optimistic-ui) — Similar
- [button](/patterns/button) — Used with

## Sources

- [NN/g — In-Page Editing](https://www.nngroup.com/articles/)
- [MDN — contenteditable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable)

---

JSON: `/api/concept/patterns/inline-editing.json` · Site: /en/patterns/inline-editing
