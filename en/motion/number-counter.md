# Number Counter / 数字滚动

> Motion · `id: number-counter`

Animates a number from zero (or a previous value) up to its target, so the counting itself tells the story of growth. Common on dashboard KPIs, stats sections and milestones ("100k users") — the digit becomes the animation, far more persuasive than a static figure.

**Aliases:** 数字滚动增长 · 数字从小到大 · 计数动画 · 数字跳到目标值 · 数据滚动

**Category:** Motion / Data

## When to use

- Big numbers on heroes and stats — KPIs, users, downloads
- One-shot count-up when the figure scrolls into view
- Transitioning from an old value to a new one

## When not to use

- Rapidly updating live values — perpetual rolling is unreadable
- Figures users must transcribe exactly — amounts, IDs
- Dense small numbers inside tables — noise over value

## Variants

- **Eased count** (缓动计数) — Fast start, eased landing — the natural default
- **Tabular digits** (等宽数字) — tabular-nums prevents width jitter
- **Formatted count** (带格式计数) — Thousands separators, units and decimals interpolate in sync

## Implementation

**CSS:** `requestAnimationFrame` `ease-out interpolation` `font-variant-numeric: tabular-nums` `@property counter (CSS-only)`

CSS cannot count text; the practical recipe is requestAnimationFrame interpolation with an ease-out curve over 1–2s. Always add font-variant-numeric: tabular-nums to stop width jitter, and format separators/units every frame. Respect prefers-reduced-motion by showing the final value directly.

## Agent task prompt

```text
Add a count-up animation to the project's stat numbers.

Check existing number display components first; avoid conflicts with live refresh logic.
Requirements:
- rAF + ease-out interpolation, 1–2s, triggered once in view
- tabular-nums to prevent jitter, thousands formatting
- Show the final value directly under reduced-motion or without JS
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add a count-up animation to the stats — numbers roll from 0 to their target.

**Design:** When stats enter the viewport, count from 0 to target over 1.6s with an ease-out landing, tabular digits to prevent jitter, thousands separators formatted per frame; trigger once only.

**Implementation:** Interpolate with requestAnimationFrame, ease via easeOutCubic(t), value = Math.round(target * p), formatted with toLocaleString. Apply tabular-nums to the container. Trigger once via IntersectionObserver; render the final value under prefers-reduced-motion.

## Related

- [dashboard](/motion/dashboard) — Used with
- [scroll-reveal](/motion/scroll-reveal) — Similar
- [progress-bar](/motion/progress-bar) — Applies to
- [text-reveal](/motion/text-reveal) — Similar

## Sources

- [MDN — requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)

---

JSON: `/api/concept/motion/number-counter.json` · Site: /en/motion/number-counter
