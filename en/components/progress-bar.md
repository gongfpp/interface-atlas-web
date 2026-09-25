# Progress Bar / 进度条

> Components · `id: progress-bar`

A loading indicator where a horizontal bar fills left to right to express task completion, usually with a percentage or step label. For determinate tasks with predictable duration: uploads, downloads, installs and multi-step forms.

**Aliases:** 进度条 · 加载进度 · 进度指示条 · 百分比进度条 · 上传进度条 · linear progress · 显示百分之多少的横条

**Category:** Feedback / Loading

## When to use

- Determinate tasks with known duration (upload, export)
- Step position in a multi-step flow
- Tasks over 3 seconds where magnitude matters

## When not to use

- Indeterminate duration — use a spinner or skeleton
- Very short tasks — just let them finish
- Unknown progress — show indeterminate rather than faking it

## Variants

- **Determinate** (确定进度) — Fills by value when the ratio is known
- **Indeterminate** (不定进度) — A slider loop: working, duration unknown
- **Labeled** (带标签) — Percentage or step text beside the bar

## Platform API

- `<progress>`
- `role="progressbar"`
- `aria-valuenow`

## In code

| Framework | Name |
| --- | --- |
| ARIA | role="progressbar" |
| HTML | [<progress>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) |
| shadcn/ui | [Progress](https://ui.shadcn.com/docs/components/progress) |
| MUI | [LinearProgress](https://mui.com/material-ui/react-progress/) |

## Implementation

**CSS:** `width` `transition` `background-color` `border-radius` `@keyframes`

Fixed-height (4–8px) rounded track; fill transitions by width percentage or transform scaleX; indeterminate loops a small block with keyframes. Bind to real progress events — prefer indeterminate over a fake bar. Accessibility: role="progressbar" with aria-valuenow / aria-valuemin / aria-valuemax.

## Compare dimensions (`loading-indicator`)

- **Interruption:** Low — inline, hides nothing
- **Information volume:** Medium — shows proportion remaining
- **Suitable duration:** 3+ seconds, determinate
- **Result consistency:** High — must reflect real progress

## Agent task prompt

```text
Implement a Progress Bar component in the current project.

Inspect the existing component system and design tokens first; reuse existing
accent and surface colour variables.
Usage: file uploads and multi-step forms.
Requirements:
- Determinate mode bound to real progress; indeterminate loop animation
- role="progressbar" + aria-valuenow accessibility
- Clear visual change on completion
- Animations respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a Progress Bar component: shows task completion as a percentage, supporting determinate and indeterminate states.

**Design:** Create a progress bar. Requirements: 6px rounded track with an accent fill; the percentage beside or above in tabular figures; turns success-coloured with a check on completion; indeterminate state slides a small block back and forth; consistent light/dark themes.

**Implementation:** React + Tailwind ProgressBar: controlled value 0–100; inner fill div with style={{ width: `${value}%` }} and a transition (duration scaled by var(--demo-speed, 1)); indeterminate loop via translateX keyframes; role="progressbar" + aria-valuenow; switch to a success state at 100; respect prefers-reduced-motion.

## Related

- [loading-spinner](/components/loading-spinner) — Alternative
- [skeleton-loading](/components/skeleton-loading) — Alternative
- [number-counter](/components/number-counter) — Used with
- [optimistic-ui](/components/optimistic-ui) — Used with

## Sources

- [Material Design — Linear progress](https://m3.material.io/components/linear-progress/overview)
- [MDN — ARIA progressbar role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role)

---

JSON: `/api/concept/components/progress-bar.json` · Site: /en/components/progress-bar
