# Popover / 气泡卡片

> Components · `id: popover`

A non-modal layer that pops up beside its trigger on click, carrying medium-complex content such as text, a mini-form or a date picker. No backdrop and no blocking of the rest of the page; clicking outside or pressing Esc closes it.

**Aliases:** 气泡卡片 · 弹出卡片 · 浮层 · 气泡框 · 弹出面板 · 点击弹出的小卡片 · 帮助气泡

**Category:** Overlay

## Name disambiguation

A popover is a non-blocking anchored overlay with free-form content. A tooltip is read-only on hover. A dropdown list holds commands only.

## When to use

- Interactive content on click (mini-form, filters, color picker)
- Explanations longer than a one-line tooltip
- The page must stay visible and usable

## When not to use

- A one-line hint — use a tooltip
- Forced confirmation or long flows — use a modal
- Scroll-heavy content — use a drawer

## Variants

- **Plain** (纯文本) — Help text only, the lightest
- **Interactive** (交互式) — Contains inputs and buttons
- **Rich** (富内容) — Image or structured info card

## Platform API

- `popover`
- `[popover]`
- `role="dialog"`

## In code

| Framework | Name |
| --- | --- |
| HTML | [popover attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover) |
| shadcn/ui | [Popover](https://ui.shadcn.com/docs/components/popover) |
| MUI | [Popover](https://mui.com/material-ui/react-popover/) |
| AntD | [Popover](https://ant.design/components/popover) |

## Implementation

**CSS:** `position: absolute` `z-index` `box-shadow` `transform-origin`

Anchor to the trigger with absolute positioning (or measure and flip like floating-ui to prevent overflow). Close on outside click: listen for pointerdown on document and check the target; Esc closes too and focus moves into the panel. Enter with scale 0.95→1 plus fade, 150–200ms; respect prefers-reduced-motion.

## Compare dimensions (`overlay-container`)

- **Interruption:** Low — no backdrop, page stays live
- **Content capacity:** Medium — small interactive content
- **Mobile friendly:** Poor — anchored position overflows easily

## Agent task prompt

```text
Implement a Popover component in the current project.

Inspect the existing component system and design tokens first; reuse existing
surface, radius and shadow variables.
Usage: help explanations and small action panels.
Requirements:
- Anchored to the trigger, flips near screen edges
- Closes on outside click and Esc, with correct focus management
- Subtle enter animation, respecting prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a Popover component: clicking a button opens a small card next to it, clicking outside closes it.

**Design:** Create a Popover. Requirements: the card appears below the trigger (with a small arrow), rounded, bordered, heavily shadowed; title, body and optional action row; subtle zoom-and-fade entrance; closes on outside click and Esc; consistent light/dark themes.

**Implementation:** React + Tailwind Popover: relative wrapper around the trigger, absolute top-full panel; controlled open state; useEffect listens for pointerdown on document and closes when the target is outside, plus Esc on keydown; enter keyframes (scale + opacity) scaled by var(--demo-speed, 1); respect prefers-reduced-motion.

## Related

- [tooltip](/components/tooltip) — Similar
- [modal](/components/modal) — Alternative
- [drawer](/components/drawer) — Alternative
- [dropdown](/components/dropdown) — Similar

## Confusable

- [tooltip](/components/tooltip) — A tooltip is brief read-only on hover; a popover is interactive on click.
- [dropdown](/components/dropdown) — A dropdown list is commands; popover content is free-form.
- [modal](/components/modal) — A modal dims the page; a popover does not, and dismisses on outside click.

## Sources

- [MDN — Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [Apple HIG — Popovers](https://developer.apple.com/design/human-interface-guidelines/popovers)

---

JSON: `/api/concept/components/popover.json` · Site: /en/components/popover
