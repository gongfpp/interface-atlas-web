# Tooltip / 工具提示

> Components · `id: tooltip`

A small text bubble that appears briefly on hover, explaining icon buttons, abbreviations or truncated text. Purely informational and non-interactive, it disappears on mouse leave; usually shows after a ~300ms delay to avoid flicker while moving across the screen.

**Aliases:** 提示气泡 · 悬浮提示 · 气泡提示 · 悬停提示 · 小黑框提示 · title 提示 · 鼠标放上去显示的小提示

**Category:** Overlay / Feedback

## Name disambiguation

A tooltip is a brief hover/focus hint. A popover is interactive. A label is a persistent form tag. Tooltips must not hold interactions or essential info.

## When to use

- Icon-only buttons need a text label
- Truncated text needs to reveal the full value
- Explain non-critical jargon or shortcuts

## When not to use

- The info must stay readable — use visible text or a help popover
- Touch devices have no hover — disable it or use long-press
- Interactive elements inside — use a popover instead

## Variants

- **Dark** (深色气泡) — Light text on dark bubble, the common desktop default
- **Light** (浅色卡片) — Bordered and shadowed, carries a bit more
- **Rich** (富提示) — Title, shortcuts or icons, still non-interactive

## Platform API

- `role="tooltip"`
- `aria-describedby`

## In code

| Framework | Name |
| --- | --- |
| ARIA APG | [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) |
| shadcn/ui | [Tooltip](https://ui.shadcn.com/docs/components/tooltip) |
| MUI | [Tooltip](https://mui.com/material-ui/react-tooltip/) |
| AntD | [Tooltip](https://ant.design/components/tooltip) |

## Implementation

**CSS:** `position: absolute` `pointer-events: none` `z-index` `transition`

Trigger is relative, the bubble absolute and offset per placement; delay the show by 300–500ms and hide immediately on leave. pointer-events: none on the bubble prevents flicker; also show on focus for keyboard access (aria-describedby). Provide a touch fallback or omit it on touch devices.

## Agent task prompt

```text
Implement a Tooltip component in the current project.

Inspect the existing component system and design tokens first; reuse existing
surface and radius variables.
Usage: text labels for icon-only buttons.
Requirements:
- ~300ms hover delay to show, immediate hide on leave
- pointer-events: none bubble, four placements supported
- Also shows on focus; trigger carries aria-describedby
- Animation respects prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a Tooltip component: hovering a button shows a text bubble above it, which disappears on mouse leave.

**Design:** Create a Tooltip. Requirements: a small dark bubble (rounded, small type) centered above the trigger with a downward arrow; appears after ~300ms hover delay with 150ms fade in/out; the bubble must not be selectable nor intercept the pointer; support four placements.

**Implementation:** React + Tailwind Tooltip: relative trigger with the bubble absolutely positioned on the opposite side; onMouseEnter shows after a setTimeout delay (keep the timer for cleanup), onMouseLeave hides immediately; bubble is pointer-events-none + aria-hidden and the trigger gets aria-describedby; fade + small offset animation scaled by var(--demo-speed, 1); also show on focus; respect prefers-reduced-motion.

## Related

- [popover](/components/popover) — Similar
- [modal](/components/modal) — Similar
- [toast](/components/toast) — Similar
- [button](/components/button) — Similar

## Confusable

- [popover](/components/popover) — A popover opens on click and is interactive; a tooltip shows on hover and is read-only.
- [toast](/components/toast) — Toast is system feedback that auto-dismisses; a tooltip explains a control near the pointer.

## Sources

- [WAI-ARIA Authoring Practices — Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
- [Apple HIG — Tooltips](https://developer.apple.com/design/human-interface-guidelines/tooltips)

---

JSON: `/api/concept/components/tooltip.json` · Site: /en/components/tooltip
