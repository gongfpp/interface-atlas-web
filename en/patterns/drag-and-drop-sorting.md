# Drag & Drop Sorting / 拖拽排序

> Patterns · `id: drag-and-drop-sorting`

Reorders list items by direct manipulation: press an item (or its handle), drag it to a target slot while neighbours give way and a drop hint appears. It turns ordering into a spatial, what-you-see-is-what-you-get action — with buttons kept as an accessible fallback.

**Aliases:** 拖拽排序 · 拖动调整顺序 · 拖动排序 · 上下移动排序 · 拖拽换位置 · 拖放排列

**Category:** Manipulation / Lists

## When to use

- Users control the order — playlists, task lists, section config
- Moderately sized lists where all items fit on one screen
- Frequent reordering where stepping one-by-one is too slow

## When not to use

- Order is rule-based (time, alphabetical) — no manual control needed
- Very long lists where cross-screen dragging loses the drop target
- Small touch targets on mobile where drags misfire

## Variants

- **Whole item** (整行拖动) — Drag anywhere on the item, most direct
- **Handle** (把手拖动) — A six-dot handle constrains the drag zone, avoids scroll conflicts
- **Buttons** (按钮排序) — Move up/down buttons, keyboard and screen-reader friendly

## Implementation

**CSS:** `draggable` `transform` `transition` `cursor-grab`

HTML5 drag: set draggable on items, record the source index on dragstart, preventDefault on dragover to compute the drop target, then reorder the array on drop. Touch devices need buttons or pointer events as fallback. Keep a translucent ghost at the origin and highlight the target row. Respect prefers-reduced-motion by snapping without transition.

## Agent task prompt

```text
Implement drag & drop list sorting in the current project.

Inspect existing list components and ordering interactions first; stay consistent.
Usage: section ordering in settings.
Requirements:
- HTML5 draggable for whole-row reordering, data reordered on drop
- Move up/down buttons per row, keyboard operable
- Ghost placeholder and target highlight while dragging
- No DnD library or new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a drag & drop sorting demo where list items can be dragged to reorder, with move up/down buttons as fallback.

**Design:** Create a drag & drop sorting demo. Requirements: task rows reorderable by dragging, with a translucent ghost at the origin and a highlighted drop target; per-row move up/down buttons as fallback; a six-dot handle hinting draggability; subtle transition on reorder.

**Implementation:** Implement sorting with React + HTML5 DnD: keep the array in useState, handle dragstart/dragover/drop for index swaps, drive ghost styling from a dragging state. Provide moveUp/moveDown helpers for the buttons. Use cursor-grab and opacity for drag styling and respect prefers-reduced-motion for swap transitions. No DnD library.

## Related

- [kanban-board](/patterns/kanban-board) — Similar
- [inline-editing](/patterns/inline-editing) — Similar
- [optimistic-ui](/patterns/optimistic-ui) — Similar
- [button](/patterns/button) — Used with
- [accordion](/patterns/accordion) — Used with

## Applicable styles

`minimalism` `bento-grid`

## Sources

- [Apple HIG — Drag and drop](https://developer.apple.com/design/human-interface-guidelines/drag-and-drop)
- [MDN — HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

---

JSON: `/api/concept/patterns/drag-and-drop-sorting.json` · Site: /en/patterns/drag-and-drop-sorting
