# Switch / 开关

> Components · `id: switch`

A thumb sliding on a track represents a binary setting that takes effect immediately, no confirmation needed. Thumb travel and track color change together signal the state, with an on/off text hint beside or inside — the standard control of settings pages.

**Aliases:** 开关 · 拨动开关 · 切换开关 · toggle 开关 · 滑动开关 · 开关键

**Category:** Form / Input

## When to use

- Binary settings that apply immediately like notifications or dark mode
- Changes take visible effect without submitting
- Settings pages organized around on/off mental models

## When not to use

- Changes need a save step — use a checkbox in a form
- Selecting several from a list — use checkboxes
- A third middle state is needed — use a segmented control

## Variants

- **Basic** (基础) — Bare track without text
- **With text** (带状态文字) — On/off text inside for clarity
- **Settings row** (设置行) — Title left, switch right — the settings layout

## Platform API

- `<input type="checkbox" role="switch">`

## In code

| Framework | Name |
| --- | --- |
| ARIA | role="switch" |
| shadcn/ui | [Switch](https://ui.shadcn.com/docs/components/switch) |
| MUI | [Switch](https://mui.com/material-ui/react-switch/) |
| AntD | [Switch](https://ant.design/components/switch) |

## Implementation

**CSS:** `transition` `transform: translateX` `background` `border-radius: 999px`

Fixed track width; the thumb translates between ends while the track color crossfades between grey and accent, all durations multiplied by --demo-speed. Express state with role="switch" and aria-checked; make the whole row clickable; hit height at least 32px even if visually smaller. Fade the status text with opacity to avoid jumps.

## Agent task prompt

```text
Implement a switch component in the current project.

Inspect existing form components and the accent color variable first; stay consistent.
Requirements:
- Controlled checked, effect applied on toggle
- Thumb travel and track color transitions respecting prefers-reduced-motion
- role="switch" + aria-checked + space-key toggling
- Consistent light/dark themes
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a switch component that flips state on toggle and reflects it immediately.

**Design:** Create a switch component. Requirements: dual feedback of thumb travel and track color, smooth animation; three forms — bare track, on/off text inside, and a settings row with title left and switch right; role="switch" + aria-checked; consistent in light/dark.

**Implementation:** React + Tailwind Switch: controlled checked; an absolutely positioned thumb with a translateX transition (duration multiplied by --demo-speed); track bg-accent vs bg-ink-3/30 by checked; status text fades via opacity; role="switch" + aria-checked + aria-labelledby for the title.

## Related

- [checkbox](/components/checkbox) — Similar
- [press-feedback](/components/press-feedback) — Used with
- [settings](/components/settings) — Used with

## Applicable styles

`minimalism` `claymorphism`

## Sources

- [Apple HIG — Toggles](https://developer.apple.com/design/human-interface-guidelines/toggles)
- [Material Design — Switch](https://m3.material.io/components/switch/overview)

---

JSON: `/api/concept/components/switch.json` · Site: /en/components/switch
