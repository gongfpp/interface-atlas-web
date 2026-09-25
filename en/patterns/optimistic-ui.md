# Optimistic UI / 乐观界面

> Patterns · `id: optimistic-ui`

Update the interface immediately as if the operation will succeed while the real request runs in the background; settle on success, roll back to the original state with a notice on failure. It solves the "wait for the server on every action" problem — trading brief uncertainty for a zero-latency feel, ideal for frequent light actions like likes and bookmarks.

**Aliases:** Optimistic UI · 乐观更新 · 乐观界面 · 先改后等 · 即时假成功 · 先显示后确认

**Category:** Feedback / Interaction

## When to use

- High-frequency light actions — likes, saves, follows
- Flaky networks where responsiveness matters
- Failures that are safely reversible and low-stakes

## When not to use

- Irreversible or high-value operations — payments, orders
- Results that decide which flow branch comes next
- Costly or confusing rollbacks

## Variants

- **Pending** (等待确认) — Optimistic value carries a pending state until the request settles
- **Rollback** (失败回滚) — On failure the change is reverted with a visible notice
- **Queued** (排队确认) — Rapid actions queue up and settle one by one

## Implementation

**CSS:** `opacity transition` `transform scale` `animation` `keyframes`

Apply the local state change synchronously on click and enter a pending state (dimmed or gently pulsing); settle when the request resolves. On failure restore the previous value and surface a rollback notice. Sequence rapid requests to prevent out-of-order overwrites; pair the rollback notice with undo where relevant. Respect prefers-reduced-motion for the pending animation.

## Agent task prompt

```text
Implement Optimistic UI in the current project.

Inspect the existing request layer and notice components first; reuse existing toast and button state styles.
Usage: like / bookmark actions on content cards.
Requirements:
- Update the interface instantly on click with a pending state; block duplicate submits
- Settle on success; roll back to the original value with a notice on failure
- Sequence rapid requests to avoid out-of-order overwrites
- Pair the rollback notice with undo where relevant
- Respect prefers-reduced-motion
- No unnecessary dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create an optimistic-UI like button where the count increments instantly with a pending state, confirms on success, and rolls back with a notice on failure.

**Design:** Design an optimistic like interaction. Requirements: value and icon change instantly with a dimmed pending state; success settles into the accent color; failure rolls back with an "action failed, restored" notice; include a "simulate failure" toggle for demonstration; light/dark themes.

**Implementation:** Implement Optimistic UI in React + Tailwind. Keep liked / count / status(idle|pending|confirmed) in useState; on click flip the state and adjust the count immediately, simulate the request with a 1.2s setTimeout — if the failure toggle is on, roll back and set a toast, otherwise settle as confirmed; auto-dismiss the toast after 2s. Block re-clicks while pending and multiply animation durations by var(--demo-speed, 1).

## Related

- [toast](/patterns/toast) — Used with
- [undo-action](/patterns/undo-action) — Similar
- [skeleton-loading](/patterns/skeleton-loading) — Similar
- [loading-spinner](/patterns/loading-spinner) — Used with
- [button](/patterns/button) — Used with

## Sources

- [Smashing Magazine — Optimistic UI](https://www.smashingmagazine.com/)
- [web.dev — Latency and perceived performance](https://web.dev/articles/perceived-performance)

---

JSON: `/api/concept/patterns/optimistic-ui.json` · Site: /en/patterns/optimistic-ui
