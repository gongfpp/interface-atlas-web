# Confetti / 撒花彩带

> Motion · `id: confetti`

On completing a key action, a burst of coloured pieces erupts and falls — a one-shot, high-energy celebration. It belongs only to milestones: submission success, task done, subscription reached. Rarity is what gives it weight.

**Aliases:** 撒花 · 彩带动画 · 庆祝特效 · 五彩纸屑 · 撒花庆祝

**Category:** Motion / Celebration

## When to use

- Milestones — first publish, payment success, goal reached
- First-time moments and achievements unlocked
- Consumer products whose brand welcomes celebration

## When not to use

- Frequent actions — confetti on every save is a disaster
- Serious or professional tooling
- Moments where it obscures the result itself

## Variants

- **Burst** (中心爆开) — Erupts from the button center — the default
- **Cannons** (双侧礼炮) — Two cannons firing from both sides — more ceremony
- **Rain** (顶部飘落) — Drifts down from the top for seconds — maximum coverage

## Implementation

**CSS:** `absolute particles` `random transform translate/rotate` `@keyframes fall` `cleanup after animation`

Spawn absolutely positioned small pieces (divs or canvas particles) with random angle, initial velocity and colour, falling in a parabola while spinning; remove them from the DOM as soon as the 1–2s animation ends to prevent node leaks. Fire once, never loop; respect prefers-reduced-motion with a static success glyph instead.

## Agent task prompt

```text
Add confetti celebration to the project's milestone moments.

Check brand tone and the trigger list first; confirm confetti fits (low-frequency, positive).
Requirements:
- 30–60 pieces, 1–2s parabola, DOM cleaned up afterwards
- One-shot, brand token colours
- Never obscures results; pointer-events must not block clicks
- Respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add a confetti celebration to task completion — a burst of colour when the task is done.

**Design:** On completion, 30–60 pieces burst from the button center, fall in parabolas for 1.5s, then vanish; colours come from the brand palette; one-shot, never looping.

**Implementation:** On click, spawn N absolutely positioned divs with random --dx/--dy/--rot custom properties driving a parabola + spin keyframe; remove() each on animationend. Container gets pointer-events:none and overflow:hidden. Under reduced-motion show the success state directly.

## Related

- [elastic-bounce](/motion/elastic-bounce) — Similar
- [empty-state](/motion/empty-state) — Used with
- [button](/motion/button) — Applies to
- [optimistic-ui](/motion/optimistic-ui) — Used with

## Sources

- [canvas-confetti — canonical implementation](https://github.com/catdad/canvas-confetti)

---

JSON: `/api/concept/motion/confetti.json` · Site: /en/motion/confetti
