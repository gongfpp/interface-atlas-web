# Toast Slide-in / 提示滑入

> Motion · `id: toast-slide-in`

A short notice slides in from a screen edge — bottom or top-right — lingers a few seconds, then slides back out. Three phases: enter, hold, exit; it always returns toward the edge it came from.

**Aliases:** 消息提示滑入 · 弹出提示 · toast 动画 · 通知滑入 · 底部提示浮现

**Category:** Motion / Feedback

## When to use

- Lightweight results — saved, failed, undone
- Async completions that must not interrupt
- Undo windows ("Message archived — Undo")

## When not to use

- Must-act information — use an alert or modal
- Several long toasts stacked — they expire before reading
- Critical errors — toasts get missed; make them recoverable

## Variants

- **Bottom-up** (底部浮现) — The mobile standard — slides up via translateY
- **Top-right** (右上角滑入) — Desktop notification favourite — slides in via translateX
- **Auto-dismiss** (自动消失) — Holds 3–5s then exits in reverse

## Implementation

**CSS:** `transform: translateY/X` `ease-out enter` `auto-dismiss timer` `aria-live: polite`

Enter with transform from translateY(16px) (or X 24px) plus opacity 0 to visible over 200–250ms ease-out; hold 3–5s, then exit in reverse over 150–200ms. Give the container aria-live="polite", pause the timer on hover, and respect prefers-reduced-motion with a pure crossfade.

## Agent task prompt

```text
Add slide-in toast feedback for operation results.

Check existing toast/notification components first; reuse their queue and timer logic.
Requirements:
- Enter 200–250ms ease-out, exit in reverse 150–200ms
- Auto-dismiss after 3–5s; pause the countdown on hover
- aria-live announcements; crossfade fallback under reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add a toast for saves — it slides up from the bottom on success and auto-dismisses after 3 seconds.

**Design:** The success toast slides up from the bottom over 220ms ease-out, holds 3s, then slides back down; single-line copy with an optional undo action; at most one toast at a time.

**Implementation:** Enter with transform+opacity transition 220ms ease-out (translateY(16px)→0), a 3s setTimeout triggers the reverse exit (180ms). Fixed-position container with aria-live="polite"; clear the timer on hover and restart on leave; use an opacity-only transition under reduced-motion.

## Related

- [toast](/motion/toast) — Applies to
- [alert](/motion/alert) — Applies to
- [undo-action](/motion/undo-action) — Used with
- [optimistic-ui](/motion/optimistic-ui) — Used with

## Sources

- [Material Design — Snackbars](https://m3.material.io/components/snackbars/overview)

---

JSON: `/api/concept/motion/toast-slide-in.json` · Site: /en/motion/toast-slide-in
