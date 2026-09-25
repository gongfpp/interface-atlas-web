# Slider / 滑块

> Components · `id: slider`

A draggable handle on a track picks a value from a continuous range, with the number and filled track following in real time. Ideal for magnitudes like volume, brightness or price ranges — more intuitive than a text box; supports tick marks, steps and a dual-handle range form.

**Aliases:** 滑块 · 滑动条 · 拖动条 · 调节杆 · 滑杆 · range 滑块

**Category:** Form / Input

## When to use

- Picking a magnitude in a range like volume, opacity or budget
- Exact numbers matter less than relative magnitude
- Range scenarios like dual-handle price bounds

## When not to use

- Precise input is required — use a validated number field
- Fewer than 5 discrete options — use radios or a segmented control
- Tiny touch targets without keyboard fallback make dragging hard

## Variants

- **Single** (单值) — One handle, one value
- **With marks** (带刻度) — Tick labels under the track
- **Range** (双端区间) — Two handles bound an interval

## Platform API

- `<input type="range">`
- `role="slider"`

## Implementation

**CSS:** `appearance` `::-webkit-slider-thumb` `linear-gradient` `transition`

Hide the native appearance; render fill with a two-stop linear-gradient (accent left, grey right) and overlay the thumb via pseudo-elements with a generous hit area. Dual-handle range stacks two input[type=range] with pointer-events reserved for thumbs. Arrow keys step, aria-valuenow mirrors the value, and transition durations multiply by --demo-speed.

## Agent task prompt

```text
Implement a slider component in the current project.

Inspect existing form components and the accent color variable first; stay consistent.
Requirements:
- Controlled value updating number and filled track while dragging
- Single-value and dual-handle range forms
- Arrow-key stepping with aria-valuenow in sync
- Consistent light/dark themes
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a slider component that picks a value by dragging and shows it live.

**Design:** Create a slider component. Requirements: accent-filled track following the handle with the current value shown beside or above; single, ticked and dual-handle range forms; hover grow and dragging feedback on the thumb; consistent in light/dark.

**Implementation:** React + Tailwind Slider: controlled value; single input[type=range] with the track as background: linear-gradient(to right, accent pct%, grey pct%) computed live; dual-handle stacks two range inputs with min/max linkage to prevent crossing; custom ::-webkit-slider-thumb; aria-valuenow synced with the value text; native keyboard stepping preserved.

## Related

- [progress-bar](/components/progress-bar) — Similar
- [input](/components/input) — Similar
- [number-counter](/components/number-counter) — Used with
- [form-validation](/components/form-validation) — Used with

## Applicable styles

`minimalism` `swiss-style`

## Sources

- [W3C APG — Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/)
- [Material Design — Slider](https://m3.material.io/components/sliders/overview)

---

JSON: `/api/concept/components/slider.json` · Site: /en/components/slider
