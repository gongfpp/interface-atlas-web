# Kanban Board / 看板

> Patterns · `id: kanban-board`

A column-per-status task board — usually "To do / In progress / Done" — where cards move between columns as work advances. Column position is the process stage, a card's home is its status: the whole flow and its bottleneck column are visible at a glance.

**Aliases:** 看板 · 任务看板 · kanban · 拖拽看板 · 任务面板

**Category:** Layout / Workflow

## When to use

- Task management with stable, limited statuses — dev, hiring, content pipelines
- Teams that need bottlenecks visible — which column is piling up
- Lightweight personal pipelines advanced by stage

## When not to use

- More than 4–5 status columns — cognitive load explodes
- Complex dependencies and hierarchies — use a Gantt or tree
- Scheduling purely by time — a calendar fits better

## Variants

- **Classic three-column** (经典三列) — To do / In progress / Done — the universal default
- **WIP limit** (WIP 限制) — Column header caps concurrent cards; overflow highlights
- **Swimlanes** (泳道) — Horizontal lanes inside columns by owner or priority

## Implementation

**CSS:** `flex/grid columns` `drag-and-drop or button moves` `data-status per column` `optimistic move`

Structure — a horizontal flex of column containers, each holding a vertical card list; moving a card is really a status-field change (optimistic update: move first, sync after). Drag ordering uses native DnD or pointer events; simple cases can settle for left/right move buttons. Show counts in headers; give empty columns a minimum drop-target height and keyboard users a button alternative to dragging.

## Agent task prompt

```text
Implement a task kanban board in the current project.

Check the existing state management and card components first; reuse current tokens.
Requirements:
- Three columns (To do / In progress / Done) with counts in headers
- Cards move between columns (buttons or drag) with instant optimistic updates
- Keyboard operable (buttons as drag alternative), empty columns droppable
- Dark mode support
- No unnecessary dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a three-column kanban board (To do / In progress / Done) with cards movable between columns.

**Design:** An equal-width three-column board whose headers show status name and count; cards carry a title and tags and move between adjacent columns via buttons, applying instantly; empty columns keep a droppable minimum height.

**Implementation:** React — group a tasks array by status to render three columns; the move buttons update task.status (optimistic, no request wait). Give column containers a min-h so empty columns stay droppable. For drag ordering, use native dragstart/dragover/drop to capture the target column and position.

## Related

- [drag-and-drop-sorting](/patterns/drag-and-drop-sorting) — Similar
- [optimistic-ui](/patterns/optimistic-ui) — Similar
- [dashboard](/patterns/dashboard) — Used with
- [master-detail](/patterns/master-detail) — Similar

## Applicable styles

`minimalism` `bento-grid`

## Sources

- [Apple HIG — Drag and drop](https://developer.apple.com/design/human-interface-guidelines/drag-and-drop)
- [Material Design — Cards](https://m3.material.io/components/cards/overview)

---

JSON: `/api/concept/patterns/kanban-board.json` · Site: /en/patterns/kanban-board
