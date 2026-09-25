# Date Picker / 日期选择器

> Components · `id: date-picker`

A composite control picking dates on a calendar grid, usually popped from a trigger input but often shown inline. The header navigates months, the grid lays days out by week highlighting today and the selection; the range form bounds an interval with two dates. It avoids manual date-entry mistakes.

**Aliases:** 日期选择器 · 日历选择 · 选日期控件 · 日历弹层 · 日期输入框 · 时间选择

**Category:** Form / Input

## When to use

- Forms need dates where formats cause errors like booking or reports
- Weekday and month context must be visible while choosing
- Interval selection like check-in/checkout or event spans

## When not to use

- Year or month only — a lighter picker fits better
- Simple mobile dates — the native date input feels better
- High-volume data entry — typing with shortcuts is faster

## Variants

- **Inline** (内嵌日历) — Always visible — panel and sidebar friendly
- **Trigger** (触发弹出) — Input + popup — the standard form shape
- **Range** (范围选择) — Two clicks bound the interval

## Platform API

- `<input type="date">`
- `aria-haspopup`
- `role="dialog"`

## Implementation

**CSS:** `grid` `position: absolute` `z-index: 10` `transition`

Grid with grid-cols-7; the leading offset comes from the weekday of the 1st. Delegate date math to Date / Intl APIs for timezones and month ends. The popup panel sits below the trigger, closing on outside click and Escape. Today gets an outline, selection an accent fill; in range mode the start and end record bounds and in-between days take a soft accent background. Arrow keys move focus.

## Agent task prompt

```text
Implement a date picker component in the current project.

Inspect existing form and overlay components first; keep styles and z-index consistent.
Requirements:
- Trigger input + popup calendar, controlled value
- Highlight today and the selection; navigate months
- Range selection form (optional)
- Close on outside click / Escape, keyboard accessible
- Consistent light/dark themes, no new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a date picker that pops a calendar panel from a trigger input to pick a date.

**Design:** Create a date picker. Requirements: trigger input showing the chosen date (placeholder "Pick a date"); popup calendar with a month header and prev/next buttons, 7-column grid highlighting today (outline) and the selection (accent fill); closes on outside click; inline and range variants; consistent in light/dark.

**Implementation:** React + Tailwind DatePicker: controlled value; compute days in month and leading offset from Date, weekday titles via Intl; panel absolutely positioned closing on outside document click; prev/next month paging; range keeps [start, end] with a picking phase and tints in-between days. Arrow keys move the date focus; each day gets an aria-label.

## Related

- [input](/components/input) — Similar
- [popover](/components/popover) — Similar
- [dropdown](/components/dropdown) — Similar
- [form-validation](/components/form-validation) — Used with

## Applicable styles

`minimalism` `flat-design`

## Sources

- [W3C APG — Dialog (Modal) Date Picker](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [Apple HIG — Date pickers](https://developer.apple.com/design/human-interface-guidelines/date-pickers)

---

JSON: `/api/concept/components/date-picker.json` · Site: /en/components/date-picker
