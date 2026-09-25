# Badge / 徽标

> Components · `id: badge`

A small status marker attached to an element's corner or inline: a dot, a count or a short label. It signals unread counts, status (new, deprecated) or category; non-interactive and visually subordinate to its host element.

**Aliases:** 徽章 · 小红点 · 角标 · 状态标签 · 计数气泡 · 数字角标 · 图标右上角的小圆点

**Category:** Display / Status

## When to use

- Unread counts, cart quantity
- Inline status labels (success, expired, beta)
- An attention dot on an icon corner

## When not to use

- It needs to be clickable — use a button or chip
- Cap large counts (99+) and avoid jitter
- Long explanatory text — use an alert or body copy

## Variants

- **Count** (计数) — Numeric bubble, caps at 99+
- **Dot** (圆点) — A bare dot for pure attention
- **Label** (标签) — A short text status on a tinted surface

## Platform API

- `<span>`

## Implementation

**CSS:** `position: absolute` `border-radius: 9999px` `box-shadow` `font-variant-numeric: tabular-nums`

Host is relative; the badge sits absolute at -top/-right with a ring or shadow matching the surface so it does not bleed into images. Use tabular-nums to stop width jitter and cap at 99+. Keep status colour semantics stable: red = error or urgent, green = success, grey = neutral; convey meaning beyond colour with aria-label.

## Agent task prompt

```text
Implement a Badge component in the current project.

Inspect the existing component system and design tokens first; reuse existing
status colour variables.
Usage: unread counts and status marking.
Requirements:
- Count / dot / text-label forms
- 99+ cap and jitter-free numbers
- Ring blends with the host surface; consistent light/dark themes
- Never colour-only (aria-label or text)
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a Badge component: count, dot and label forms, attachable to icon or button corners.

**Design:** Create a Badge. Requirements: count form as an accent bubble (white ring, tabular-nums, 99+ cap); dot form at 8px; label form on a low-saturation surface with matching text (success/warning/error/info); anchored to the host's top-right with a 2px ring gap against the surface; consistent light/dark themes.

**Implementation:** React + Tailwind Badge: relative host, absolute -top-1 -right-1 badge, rounded-full min-w with px to fit two digits, ring-2 ring-[surface] or shadow for the gap; counts over 99 render "99+"; label form uses a palette mapping object; host carries an aria-label describing the count; scale transition on value change (duration scaled by var(--demo-speed, 1)).

## Related

- [avatar](/components/avatar) — Similar
- [button](/components/button) — Similar
- [card](/components/card) — Similar

## Sources

- [Material Design — Badges](https://m3.material.io/components/badges/overview)
- [Carbon Design System — Tag](https://carbondesignsystem.com/components/tag/usage/)

---

JSON: `/api/concept/components/badge.json` · Site: /en/components/badge
