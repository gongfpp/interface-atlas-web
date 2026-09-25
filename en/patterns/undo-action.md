# Undo Action / 撤销操作

> Patterns · `id: undo-action`

Handles risky actions with "apply first, allow regret": deletions take effect immediately and show the result, while a snackbar with a countdown offers one-tap undo until the timer expires. Unlike confirmation dialogs it never interrupts the flow, and unlike a single confirm it leaves a real window to change one's mind.

**Aliases:** 撤销 · 防误操作 · 撤销删除 · 撤回操作 · 后悔药 · 删除可恢复

**Category:** Feedback / Safety

## When to use

- Destructive but recoverable actions — delete, archive, clear
- High-frequency actions where confirm dialogs would grind the flow
- The result is visible at once and users decide after seeing it

## When not to use

- Irreversible actions (permanent delete, send) — undo creates false safety
- Major, infrequent actions deserve a real confirmation dialog
- Background operations with no visible result to inspect

## Variants

- **Snackbar** (撤销条) — Bottom bar with countdown, the classic Gmail archive pattern
- **Toast undo** (轻提示撤销) — Undo inside a toast that auto-dismisses
- **Delayed commit** (延迟提交) — UI updates at once; the request only fires after the timer

## Implementation

**CSS:** `linear-gradient` `position: fixed` `animation` `transform`

Update local state immediately and render an undo bar driven by setTimeout or a CSS linear animation; clicking undo clears the timer and restores the item, while expiry fires the real delete request. Pin the bar to the container bottom and visualize the countdown as a shrinking progress strip. Keep the undo target large and never stack multiple bars of the same kind.

## Agent task prompt

```text
Implement Undo Action in the current project.

Inspect existing toast/snackbar components first; prefer extending them with undo.
Usage: deleting items from a task list.
Requirements:
- Delete applies immediately; a bottom bar offers a 5-second undo window with countdown
- Undo restores the original position; the real delete only fires at countdown end
- No stacking with confirmation dialogs to avoid double interruption
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create an undo action demo where deleting a list item raises a bottom undo bar with a countdown that restores it.

**Design:** Create an undo action demo. Requirements: a task list with deletable items; on delete the row vanishes and a bottom undo bar appears with "deleted" copy, an undo button and a 5-second countdown strip; the bar auto-dismisses at zero; undo restores the item to its original place.

**Implementation:** Implement Undo Action in React: manage list and pending deletion in useState, remove the row at once on delete and commit via a 5s setTimeout; the undo button clears the timeout and splices the item back at its original index. Drive the countdown strip with a CSS linear width animation scaled by var(--demo-speed, 1). Clear pending timers on unmount.

## Related

- [toast](/patterns/toast) — Used with
- [optimistic-ui](/patterns/optimistic-ui) — Similar
- [modal](/patterns/modal) — Used with
- [empty-state](/patterns/empty-state) — Similar
- [progressive-disclosure](/patterns/progressive-disclosure) — Similar

## Applicable styles

`minimalism`

## Sources

- [Material Design — Snackbars](https://m3.material.io/components/snackbars/overview)
- [Nielsen Norman Group — Undo](https://www.nngroup.com/articles/undo/)

---

JSON: `/api/concept/patterns/undo-action.json` · Site: /en/patterns/undo-action
