# Calendar Page / 日历页

> Pages · `id: calendar`

A page laying events onto a time grid with month, week and day views, click-to-edit blocks and drag-to-reschedule, anchored by today and prev/next controls.

**Aliases:** 日历页 · 日程页 · 日历界面 · 排期页面 · 日程表 · 月历 · 看日期的页面 · 安排时间的页面

**Category:** Page / Productivity

## When to use

- Events have clear start and end times
- Users compare plans across days or weeks
- Shared time resources across people — rooms, shifts

## When not to use

- Only due dates, no time slots — a list or board fits
- A purely chronological log — use a timeline
- A single booking with no grid browsing — a date picker is enough

## Variants

- **Month View** (月视图) — Six-week grid showing overall density first
- **Week View** (周视图) — Hour-by-hour columns, common for meetings and shifts
- **Agenda List** (议程列表) — Events listed by day, mobile friendly

## Page structure

1. **Toolbar** — Today, prev/next navigation, view switcher and a create-event entry.
2. **Date grid** — Row and column headers plus a time axis at each granularity.
3. **Event block** — Positioned by start and end, color-coded, click to edit and drag to reschedule.
4. **Today marker** — The current date is highlighted, dotted when events exist.
5. **Side agenda** — Tasks for the selected day plus time-conflict warnings.

## Implementation

**CSS:** `grid` `grid-template-columns: repeat(7, 1fr)` `overflow: auto` `position: sticky`

Month view uses a seven-column grid with square-ish cells that clamp overflowing events; week view pairs a time-axis grid with absolutely positioned blocks (top/height from time). Keep the toolbar sticky and the grid scrollable, and highlight a 200ms drop target when rescheduling via HTML5 drag-and-drop or pointer events.

## Agent task prompt

```text
Implement the calendar page in the current project.

Inspect the existing date utilities, event data and popover components first; reuse them.
Requirements:
- Toolbar, month/week/agenda views and a side agenda
- Today highlighted; event blocks positioned by time and color-coded
- Click an event for details; drag to reschedule
- Arrow-key navigation across the date grid
- Responsive, degrading to an agenda list on narrow screens
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a calendar page with a month grid, event blocks and a today marker.

**Design:** Build a team calendar page: a toolbar with today, prev/next, month/week/agenda switch and a create button; a seven-column month grid with today highlighted, color-coded events and side-by-side placement on conflicts; a right rail agenda for the selected day with conflict warnings. Responsive to an agenda list on narrow screens, theme-consistent and keyboard navigable.

**Implementation:** React + Tailwind calendar: compute the date matrix from the active month; keep selected day and view in controlled state; group events by date and split conflicting ones into columns; use roving tabindex for arrow-key navigation; reschedule with pointer events updating local state; respect prefers-reduced-motion; no new dependencies.

## Related

- [date-picker](/pages/date-picker) — Contains
- [segmented-control](/pages/segmented-control) — Contains
- [timeline](/pages/timeline) — Contains
- [drag-and-drop](/pages/drag-and-drop) — Uses pattern
- [empty-state](/pages/empty-state) — Uses pattern

## Sources

- [Material Design 3 — Date pickers](https://m3.material.io/components/date-pickers/overview)
- [W3C WAI-ARIA Authoring Practices — Grid pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)

---

JSON: `/api/concept/pages/calendar.json` · Site: /en/pages/calendar
