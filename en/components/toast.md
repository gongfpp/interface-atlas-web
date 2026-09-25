# Toast / 轻提示

> Components · `id: toast`

A small message bar that appears in a viewport corner and dismisses itself, reporting an operation result (saved, copied, upload done). Non-blocking, usually with one action (undo, view), lingering for about 3–5 seconds before fading out.

**Aliases:** 消息提示条 · 吐司 · 轻提示 · 通知条 · snackbar · 自动消失提示 · 右下角弹出的小提示

**Category:** Feedback / Overlay

## Name disambiguation

A toast (snackbar) is brief non-blocking feedback that auto-dismisses. Alerts persist. Modals interrupt. Never put essential info in a toast.

## When to use

- Lightweight feedback: success, status updates
- Paired with undo after light destructive actions
- Notify finished background tasks (upload, export)

## When not to use

- Errors that must be seen and handled — use an alert or inline form errors
- Long or queued messages — use a notification center
- A user decision is required — use a modal

## Variants

- **Success** (成功) — Status dot or check icon
- **Error** (错误) — Danger colour, lingers longer or needs manual dismiss
- **Action** (带操作) — Carries an undo or view button (snackbar style)

## Platform API

- `role="status"`
- `aria-live="polite"`

## In code

| Framework | Name |
| --- | --- |
| ARIA | role="status" |
| shadcn/ui | [Sonner / Toast](https://ui.shadcn.com/docs/components/toast) — Sonner is the default toast in the shadcn ecosystem |
| MUI | [Snackbar](https://mui.com/material-ui/react-snackbar/) |
| AntD | [message / notification](https://ant.design/components/message) |

## Implementation

**CSS:** `position: fixed` `z-index` `transform: translateY` `animation`

Pin to the bottom-right (or bottom-center); enter and exit with slide + fade using transforms only to avoid reflow; stack multiple toasts. Pause the auto-dismiss timer on hover. Error toasts may linger longer or require manual dismissal; respect prefers-reduced-motion.

## Compare dimensions (`form-feedback`)

- **Interruption:** Low — brief and non-blocking
- **Persistence:** Low — auto-dismisses in seconds
- **Error pinpointing:** Poor — no field-level context

## Agent task prompt

```text
Implement a Toast component in the current project.

Inspect the existing component system and design tokens first; reuse existing
surface and status colour variables.
Usage: operation feedback (saved, copied, undo after delete).
Requirements:
- Pinned to a viewport corner, auto-dismiss, pause timer on hover
- Success/error variants plus one optional action button
- Stack multiple toasts; transform-based animation respecting prefers-reduced-motion
- Imperative API (toast.show) or a Provider-based usage
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a Toast component: clicking a button pops a message bar in the bottom-right corner that auto-dismisses after 3 seconds and can be closed manually.

**Design:** Create a Toast. Requirements: bars pinned bottom-right, rounded, dark surface with success/error status accents; slide in from below with fade, fade out on exit; optional "Undo" action and close button; stack multiple bars; consistent light/dark themes.

**Implementation:** React + Tailwind Toast: toasts array state (id/type/text/action); container fixed bottom-4 right-4 z-50 flex-col-reverse; per-toast enter keyframes (translateY + opacity, duration scaled by var(--demo-speed, 1)); remove after a 3s setTimeout, clearing the timer on hover and resetting on leave; expose remove(id); respect prefers-reduced-motion (opacity-only fallback).

## Related

- [alert](/components/alert) — Alternative
- [modal](/components/modal) — Similar
- [toast-slide-in](/components/toast-slide-in) — Used with
- [undo-action](/components/undo-action) — Used with

## Confusable

- [alert](/components/alert) — Alert persists and may carry actions; a toast is brief at a corner.
- [tooltip](/components/tooltip) — A tooltip explains a control; a toast reports a system event.

## Sources

- [Material Design — Snackbar](https://m3.material.io/components/snackbar/overview)
- [Nielsen Norman Group — Toasts or Snackbars](https://www.nngroup.com/articles/toasts-or-snackbars/)

---

JSON: `/api/concept/components/toast.json` · Site: /en/components/toast
