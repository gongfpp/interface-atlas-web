# Drag and Drop / 拖放

> Patterns · `id: drag-and-drop`

Move an object to a new slot or container by press-drag-release direct manipulation. It is spatial and immediate, closer to intuition than menu commands; a clear drop indicator and an accepting target are required while dragging. Broader than mere reordering — moving, filing and cross-list delivery all count.

**Aliases:** 拖放 · 拖拽移动 · 拖过去 · 拖到那边 · 拖来拖去 · drag and drop · dnd · drag to move

**Category:** Interaction / Direct manipulation

## When to use

- Objects move between containers or slots — filing, sorting assets
- Spatial position carries meaning — kanban columns, canvas, grid layouts
- Pointer-first audiences for whom dragging is a natural gesture

## When not to use

- Reordering only — drag-to-sort or move buttons are more precise
- Drop targets off-screen — mis-drops become likely
- Keyboard/screen-reader-first flows with no button fallback

## Variants

- **Drag to move** (拖动移动) — Drag an object to a new slot or container — the general case
- **Drag to reorder** (拖动排序) — Swap places inside one list; neighbours give way live
- **Drag between lists** (跨列表拖放) — Drag from a source list into a target list, leaving a ghost behind

## Platform API

- `draggable`
- `drop`
- `Pointer Events`

## Implementation

**CSS:** `cursor-grab` `transform: translate` `opacity` `transition` `pointer-events`

HTML5 drag uses draggable plus dragstart / dragover / drop; touch devices do not support it, so fall back to Pointer Events or buttons. Keep a translucent ghost at the origin and highlight the target with a drop line. Update the data source on drop, with optimistic rollback if needed. Respect prefers-reduced-motion — snap into place without transition.

## Agent task prompt

```text
Implement drag-and-drop interaction in the current project.

Inspect the existing component system and design tokens first; reuse existing components.
Keep the project's visual style. Add no unnecessary dependencies.
Requirements:
- Press-drag-release to move, with a ghost and drop indicator while dragging
- Target containers highlight when they can accept the item
- Keyboard-reachable button or menu fallback
- Respect prefers-reduced-motion
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a drag-and-drop demo where an object can be pressed and dragged into a target container.

**Design:** Create a drag-and-drop demo. Requirements: cards on the left can be dragged into two bins on the right; a translucent ghost stays at the origin while the target bin highlights with a drop line; on release the card lands in the bin and the count updates; light and dark themes.

**Implementation:** Implement with React + HTML5 DnD or Pointer Events: record the source on dragstart, preventDefault and highlight on dragover, migrate data on drop. Style the drag with cursor-grab and opacity and draw the drop line with a border or pseudo-element. Provide a keyboard-reachable "Move to" button fallback. Scale animation durations by var(--demo-speed, 1) and respect prefers-reduced-motion.

## Related

- [drag-and-drop-sorting](/patterns/drag-and-drop-sorting) — Similar
- [inline-editing](/patterns/inline-editing) — Used with
- [kanban-board](/patterns/kanban-board) — Used with

## Sources

- [MDN — HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [MDN — Pointer events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
- [Apple HIG — Drag and drop](https://developer.apple.com/design/human-interface-guidelines/drag-and-drop)

---

JSON: `/api/concept/patterns/drag-and-drop.json` · Site: /en/patterns/drag-and-drop
