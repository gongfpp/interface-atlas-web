# Modal / 模态框

> Components · `id: modal`

A dialog rendered above the page with a translucent backdrop that interrupts the current flow and demands a task or decision first. The backdrop blocks interaction with the underlying page and focus is temporarily trapped inside — the most disruptive of the overlay containers.

**Aliases:** 弹窗 · 对话框 · 模态弹窗 · 确认弹窗 · 弹出对话框 · 遮罩弹窗 · 网页中间弹出来的窗口

**Category:** Overlay / Feedback

## Name disambiguation

A modal interrupts and demands resolution. A drawer slides from the side keeping context. A popover anchors to its trigger without blocking. A sheet covers only the current window on macOS.

## When to use

- High-stakes confirmation such as delete or payment
- A task must finish before the flow continues (wizard, sign-in)
- Focused temporary content like a detail view or quick edit

## When not to use

- Supporting, dismissible content — use a popover or tooltip
- Users need the underlying page for context — use a drawer
- Long scrolling content on mobile — a full page holds up better

## Variants

- **Centered** (居中对话框) — The classic: title, body and action row
- **Confirm** (紧凑确认框) — Compact, one sentence plus two buttons
- **Sheet** (底部面板) — Mobile pattern, rising from the bottom for longer content

## Platform API

- `<dialog>`
- `role="dialog"`
- `aria-modal="true"`

## In code

| Framework | Name |
| --- | --- |
| ARIA | [role="dialog"](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) |
| shadcn/ui | [Dialog](https://ui.shadcn.com/docs/components/dialog) |
| MUI | [Modal / Dialog](https://mui.com/material-ui/react-modal/) |
| AntD | [Modal](https://ant.design/components/modal) |

## Implementation

**CSS:** `position: fixed` `inset: 0` `z-index` `transform` `background-color`

Backdrop is fixed inset-0 with translucent black; center the panel with flex or auto margins. Lock body scroll on open, move focus into the panel, close on Esc and backdrop click. Enter animation: scale 0.96→1 with fade, ~200ms; respect prefers-reduced-motion.

## Compare dimensions (`overlay-container`)

- **Interruption:** High — backdrop blocks the page
- **Content capacity:** Medium — short content and small forms
- **Mobile friendly:** Medium — go full-screen for long content

## Agent task prompt

```text
Implement a Modal component in the current project.

Inspect the existing component system and design tokens first; reuse existing
surface, radius and shadow variables.
Usage: delete confirmation and quick edit.
Requirements:
- Backdrop + centered panel; close on Esc and backdrop click
- Lock scroll and move focus into the panel while open
- Subtle enter animation, respecting prefers-reduced-motion
- Consistent light/dark themes
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a Modal component: a button opens a centered dialog with a backdrop, containing a title, body and action buttons.

**Design:** Create a modal. Requirements: translucent backdrop plus a centered surface panel (rounded, shadowed); title, body and a bottom-right action row (secondary + primary button); panel zooms in slightly with a fade on open; closes on Esc and backdrop click; consistent light/dark themes.

**Implementation:** React + Tailwind Modal: controlled open state; fixed inset-0 backdrop with a flex- centered panel; lock body overflow on open, move focus in with a simple focus trap, close on Esc; enter keyframes (scale + opacity) scaled by var(--demo-speed, 1); role="dialog" aria-modal="true"; respect prefers-reduced-motion.

## Related

- [drawer](/components/drawer) — Alternative
- [popover](/components/popover) — Alternative
- [toast](/components/toast) — Similar
- [alert](/components/alert) — Similar

## Confusable

- [drawer](/components/drawer) — A drawer slides from an edge with more room; a modal is centered and more interrupting.
- [popover](/components/popover) — A popover is non-modal and anchored; a modal dims the page and blocks.
- [alert](/components/alert) — Alert is in-page messaging; a modal is a blocking overlay.
- [lightbox](/components/lightbox) — Lightbox is media zoom; a modal hosts general tasks.

## Sources

- [WAI-ARIA Authoring Practices — Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [Material Design — Dialogs](https://m3.material.io/components/dialogs/overview)

---

JSON: `/api/concept/components/modal.json` · Site: /en/components/modal
