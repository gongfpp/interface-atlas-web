# Bulk Actions / 批量操作

> Patterns · `id: bulk-actions`

Tick many rows with checkboxes, then run one command against the whole selection at once. An action bar surfaces on selection with a count and an undo affordance. It collapses repetitive single-row clicks into one batch decision — ideal for list maintenance such as cleanup, archive, tagging and export.

**Aliases:** 批量操作 · 批量处理 · 勾选后操作 · 多选了一起弄 · 全选后删除 · bulk actions · batch actions · mass actions

**Category:** Data / Actions

## When to use

- One action must hit many rows — delete, archive, status change
- Lists are the maintenance surface — admin, inbox, asset library
- Mistakes are recoverable and undo can be offered

## When not to use

- Sparse per-row work — one-by-one clicking is fine
- Irreversible actions with no audit or undo — batching amplifies risk
- Narrow mobile screens where checkboxes misfire and bars crowd

## Variants

- **Checkbox + action bar** (复选框 + 操作栏) — A bar appears on selection at the bottom or top — the default
- **Select-all + inverse** (全选 + 反选) — Tri-state header select-all with invert to narrow the set
- **Sticky footer bar** (粘性底栏) — Bar pinned to the viewport bottom, always reachable while scrolling

## Implementation

**CSS:** `position` `transform` `transition` `opacity`

Keep the selection as a Set or id array; the header checkbox uses indeterminate for partial selection. Slide the action bar in (translateY + opacity, durations scaled by var(--demo-speed, 1)) when the count exceeds zero. After running, show a toast with undo and respect prefers-reduced-motion. Bulk endpoints must be idempotent to survive double-submits.

## Agent task prompt

```text
Implement table bulk actions in the current project.

Inspect the existing component system and design tokens first; reuse existing components.
Keep the project's visual style. Add no unnecessary dependencies.
Requirements:
- Checkbox column with a tri-state header select-all
- Action bar appears on selection with a live count
- Offer undo after a bulk operation
- Respect prefers-reduced-motion
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a bulk-actions demo: select many rows, then delete or archive them in one go.

**Design:** Create a bulk-actions demo. Requirements: a checkbox column with a tri-state header select-all; a bottom action bar reading "N selected" when anything is ticked; Archive, Delete and Clear; a toast with undo after execution; light and dark themes.

**Implementation:** Keep a Set<string> of selected ids in React state; set indeterminate on the header checkbox; conditionally render the action bar with an enter transition (durations scaled by var(--demo-speed, 1)). Delete optimistically and offer undo in the toast. Express row selection with role="row" / aria-selected. Respect prefers-reduced-motion.

## Related

- [table](/patterns/table) — Used with
- [checkbox](/patterns/checkbox) — Used with
- [undo-action](/patterns/undo-action) — Used with
- [filter-panel](/patterns/filter-panel) — Used with

## Sources

- [W3C ARIA APG — Grid Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)
- [Material Design — Data tables](https://m3.material.io/components/data-tables/overview)
- [MDN — input checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)

---

JSON: `/api/concept/patterns/bulk-actions.json` · Site: /en/patterns/bulk-actions
