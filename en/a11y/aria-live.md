# ARIA Live Region / 实时区域

> Accessibility · `id: aria-live`

A reserved region on the page that speaks dynamic updates to screen readers without moving focus. Saved states, result counts, async validation — the "it changed on screen but focus didn't move" class of news that blind users simply miss without it.

**Aliases:** 实时区域 · 实时播报 · 播报区域 · 读屏播报 · aria-live · live region

**Category:** Accessibility / Feedback

## Name disambiguation

aria-live is non-interrupting background speech; a modal is focus-stealing forced reading — both deliver news, one whispers it, one blocks the door.

## When to use

- Operation outcomes — saved, copied, submitted
- Async results and filter counts with no focus change
- Form errors that must be announced outside the field

## When not to use

- Announcing field errors instead of focusing the field
- High-frequency inserts that flood the screen reader queue
- Blocking errors that must interrupt, sent polite only

## Variants

- **Polite live** (礼貌播报) — aria-live="polite" — waits for a pause, right for ordinary results
- **Assertive alert** (紧急打断) — aria-live="assertive" / role="alert" — interrupts at once, critical warnings only
- **Status** (状态播报) — role="status" — implicit polite, suits loading and done states

## Platform API

- `aria-live`
- `role="status"`
- `role="alert"`
- `aria-atomic`

## In code

| Framework | Name |
| --- | --- |
| WCAG | [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages) |
| MDN | [ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) |

## Implementation

**CSS:** `aria-live` `role="status"` `role="alert"` `aria-atomic`

The live region must already be in the DOM (an empty container is fine) before its text changes — freshly created regions are often not announced. role="status" and role="alert" imply their own aria-live, so do not stack both. aria-atomic="true" re-reads the whole region; clear then write on rapid updates so messages do not merge. Use sr-only when hiding visually while staying readable.

## Agent task prompt

```text
Implement live-region announcements in the current project.
Inspect the existing component system and design tokens first; reuse current components.
Requirements:
- Pre-place live regions and write updates as text
- Choose polite / assertive / status by message urgency
- Toasts and form-validation results are announced too
Keep the existing visual style. Add no unnecessary dependencies.
Respect prefers-reduced-motion.
Run the project's existing checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Announce dynamic updates so screen readers speak them as state changes.

**Design:** Every toast and async result also writes into a page live region; ordinary news queues politely, blocking errors interrupt; announcement copy matches the visual message, short and outcome-first.

**Implementation:** Pre-place `<div aria-live="polite" aria-atomic="true" class="sr-only">` plus a role="alert" region; state changes write text in. Mount toasts into an existing container; avoid multiple writes into one region within 300ms.

## Related

- [toast](/a11y/toast) — Used with
- [alert](/a11y/alert) — Used with
- [form-validation](/a11y/form-validation) — Used with

## Confusable

- [modal](/a11y/modal) — modal seizes focus to force reading; aria-live voices updates without taking focus away.

## Sources

- [WCAG 2.1 Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages)
- [MDN — ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions)

---

JSON: `/api/concept/a11y/aria-live.json` · Site: /en/a11y/aria-live
