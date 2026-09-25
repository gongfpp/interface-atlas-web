# Pull to Refresh / 下拉刷新

> Patterns · `id: pull-to-refresh`

Press at the top of a list and drag downward: an indicator tracks the pull distance, and releasing past a threshold refetches the latest data. It solves the "content may be stale" problem — the user requests a refresh deliberately and predictably, staying in control of both timing and outcome instead of waiting for background polling.

**Aliases:** Pull to Refresh · 下拉刷新 · 下拉更新 · 拉动刷新 · 手势刷新 · 下拉加载最新

**Category:** Navigation / Mobile

## When to use

- Mobile timelines, inboxes and activity feeds
- Content with freshness needs but no polling requirement
- Users already trained by iOS / Android conventions

## When not to use

- Desktop mouse environments — the gesture feels unnatural
- Important sticky top actions that a pull would disrupt
- High-frequency data — prefer auto-sync or push updates

## Variants

- **Tracked spinner** (指示器跟随) — Indicator position and rotation track the pull; flips past the threshold
- **Text hint** (文字提示) — Two-stage copy — pull to refresh / release to refresh
- **Skeleton handoff** (骨架接管) — After release, a skeleton bridges into the refreshed content

## Implementation

**CSS:** `touch-action` `overscroll-behavior` `transform` `transition`

Take over the gesture only when scrollTop is 0: listen to touchmove with passive: false so preventDefault works, map pull distance through a damping factor to the indicator offset, and on release past the threshold enter the refreshing state with a lock until done, then spring back. Use pointer events for mouse-driven desktop demos. Add overscroll-behavior: contain so the outer page doesn't scroll along.

## Compare dimensions (`scroll-loading`)

- **Trigger:** Deliberate pull gesture by the user
- **Data control:** User-initiated request for fresh data
- **Suitable content:** Feeds and messages needing a manual refresh

## Agent task prompt

```text
Implement Pull to Refresh in the current project.

Inspect the existing list and loading indicator components first; reuse the existing spinner styles.
Usage: manual refresh for a mobile activity list.
Requirements:
- Take over the pull gesture only at the top of the list; never interfere with normal scrolling
- Indicator translates and rotates with distance, flips past the threshold, refresh on release
- Lock during refresh to prevent re-triggering; spring back and update content when done
- Works with both touch and mouse dragging; respect prefers-reduced-motion
- No unnecessary dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a pull-to-refresh list where dragging down at the top reveals an indicator; releasing past the threshold triggers a refresh, then content updates and the indicator springs back.

**Design:** Design a pull-to-refresh feed. Requirements: the indicator translates and rotates with pull distance and flips past the threshold ("release to refresh"); during refresh it holds at the threshold with a continuous animation; on completion new content fades in and the indicator springs back; light/dark themes.

**Implementation:** Implement Pull to Refresh in React + Tailwind. Bind native touch listeners (passive: false) plus mouse pointer events on a container ref; when scrollTop <= 0 and dragging down, set pull = (clientY - startY) * 0.45 and preventDefault; on release with pull >= threshold enter the refreshing state, simulate the request with setTimeout, then update data and reset. Add overscroll-contain and select-none on the container.

## Related

- [infinite-scroll](/patterns/infinite-scroll) — Alternative
- [pagination](/patterns/pagination) — Alternative
- [loading-spinner](/patterns/loading-spinner) — Used with
- [skeleton-loading](/patterns/skeleton-loading) — Similar
- [toast](/patterns/toast) — Used with

## Sources

- [Apple HIG — Pull to Refresh](https://developer.apple.com/design/human-interface-guidelines/pull-to-refresh)
- [Material Design — Swipe to Refresh](https://m3.material.io/components/pull-to-refresh/overview)

---

JSON: `/api/concept/patterns/pull-to-refresh.json` · Site: /en/patterns/pull-to-refresh
