# Timeline / 时间线

> Components · `id: timeline`

A display that orders events by time, using timestamps, markers and content to explain sequence. It works for activity logs, project journals or order history. Unlike a stepper, which emphasizes task stages to complete, a timeline tells an event story. Keep titles and times visible when details expand.

**Aliases:** 按时间排的记录 · 活动时间轴 · 事件进展记录 · activity timeline

**Category:** Data Display

## When to use

- Project events, order history and activity logs.
- Stories where temporal sequence matters.

## When not to use

- Use a badge for a single current state.
- Use a table or chart for quantitative comparisons.

## Variants

- **Connected** (连线时间轴) — Markers and a connecting line emphasize sequence.
- **Event cards** (事件卡片) — Separate cards accommodate longer event descriptions.

## Implementation

**CSS:** `border-inline-start` `position: relative` `display: grid`

Use an ordered list and time with datetime for real timestamps. Expand with buttons and aria-expanded. Preserve the stable event ID when ordering changes. Treat markers and connecting lines as decoration, not substitutes for text.

## Agent task prompt

```text
Inspect existing components and tokens before implementing Timeline.
Requirements:
- Use an ordered list and time with datetime for real timestamps. Expand with buttons and aria-expanded. Preserve the stable event ID when ordering changes. Treat markers and connecting lines as decoration, not substitutes for text.
- Reordering preserves the event-detail relationship.
- Time and title remain visible when collapsed; expansion is keyboard accessible.
- Support narrow screens, both themes and reduced motion.
- Add no dependencies.
Run existing checks and list changed files and validation results.
```

### Other prompt layers

**Basic:** Create a Timeline component. Project events, order history and activity logs.

**Design:** Design a Timeline with clear hierarchy and state feedback. Markers and a connecting line emphasize sequence. Separate cards accommodate longer event descriptions. Reordering preserves the event-detail relationship. Time and title remain visible when collapsed; expansion is keyboard accessible.

**Implementation:** Use an ordered list and time with datetime for real timestamps. Expand with buttons and aria-expanded. Preserve the stable event ID when ordering changes. Treat markers and connecting lines as decoration, not substitutes for text.

## Related

- [accordion](/components/accordion) — Similar
- [card](/components/card) — Similar
- [badge](/components/badge) — Similar

## Sources

- [MDN — HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time)

---

JSON: `/api/concept/components/timeline.json` · Site: /en/components/timeline
