# Bottom Sheet / 底部抽屉

> Components · `id: bottom-sheet`

A panel that rises from the bottom edge over the current page, with a grabber for dragging or swipe-to-dismiss. Its interruption level sits between a modal and a popover: there is a backdrop, yet it is thumb-reachable and collapses on a downward swipe. The default mobile container for filters, sharing and short forms; on desktop prefer a side drawer or centered dialog.

**Aliases:** 底部抽屉 · 底部面板 · 上拉面板 · 手机底部弹出来的面板 · 底部弹层 · bottom sheet · action sheet

**Category:** Overlay / Mobile

## Name disambiguation

"Sheet" is overloaded: a bottom sheet rises from the bottom edge; a drawer slides from a side edge; a macOS window sheet drops down inside a window; a spreadsheet sheet is a worksheet and has nothing to do with overlays.

## When to use

- Short mobile tasks — filter, sort, share — layered over the current page
- A short action or option list that one thumb can reach
- More content than a one-line tooltip, less than a full-page flow

## When not to use

- Desktop-first interfaces — use a drawer or modal
- A forced decision that must not be dismissed casually — use a modal
- Long forms or long reads — a full page holds up better

## Variants

- **Fixed height** (固定高度) — Predictable content size — lands in one shot, no dragging
- **Draggable detents** (可拖拽档位) — Grabber drags between half and full detents, iOS-sheet style
- **Full expand** (全屏展开) — Pulls up to full screen for long content or on-screen keyboards

## Platform API

- `<dialog>`
- `role="dialog"`
- `aria-modal="true"`

## In code

| Framework | Name |
| --- | --- |
| iOS | [UISheetPresentationController](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller) |
| MUI | [SwipeableDrawer](https://mui.com/material-ui/react-swipeable-drawer/) |
| Radix | [Dialog](https://www.radix-ui.com/primitives/docs/components/dialog) |

## Implementation

**CSS:** `position: fixed` `transform` `transition` `touch-action`

Pin the panel with fixed positioning and animate transform: translateY(100%) ↔ 0 to show and hide (never animate height — GPU-friendly); the grabber is a 36×4 rounded bar. Detents track dy via pointer events and snap to the nearest stop on release; a swipe past the threshold dismisses. Fade the backdrop in, lock body scroll, move focus into the panel, close on Esc; respect prefers-reduced-motion.

## Compare dimensions (`overlay-container`)

- **Interruption:** Medium-high — backdrop blocks, but a swipe dismisses fast
- **Content capacity:** Medium-high — action lists and short forms fit
- **Mobile friendly:** Excellent — the thumb zone is the bottom of the screen

## Agent task prompt

```text
Implement a Bottom Sheet component in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Keep it distinct from side drawers and centered modals — it only rises from the bottom edge.
Keep the project's visual style. Add no unnecessary dependencies.
Respect prefers-reduced-motion; support keyboard and drag interaction.
Run the project's existing checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a Bottom Sheet: a button raises a panel from the bottom of the screen with a grabber and backdrop; a downward swipe closes it.

**Design:** Create a bottom sheet: rounded top corners with a centered grabber over a translucent backdrop; a title row, scrollable body and pinned footer action; 240ms rise and dismiss animation; the grabber drags between half and full detents; consistent light/dark themes.

**Implementation:** React + Tailwind bottom sheet: controlled open state; a fixed inset-x-0 bottom-0 panel transitioning transform translateY (duration scaled by var(--demo-speed, 1)); the grabber starts a pointer drag and snaps to a detent or dismisses past a threshold; role="dialog" aria-modal="true", focus moves in, Esc and backdrop click close; respect prefers-reduced-motion. No new dependencies.

## Related

- [drawer](/components/drawer) — Alternative
- [modal](/components/modal) — Alternative
- [pull-to-refresh](/components/pull-to-refresh) — Used with

## Confusable

- [drawer](/components/drawer) — A drawer slides from a side edge; a bottom sheet only rises from the bottom.
- [modal](/components/modal) — A modal sits centered and demands a decision; a bottom sheet hugs the bottom and swipes away.

## Sources

- [Apple HIG — Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets)
- [Material Design — Bottom sheets](https://m2.material.io/components/bottom-sheets/overview)
- [ARIA APG — Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

---

JSON: `/api/concept/components/bottom-sheet.json` · Site: /en/components/bottom-sheet
