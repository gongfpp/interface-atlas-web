# Elastic Bounce / 弹性回跳

> Motion · `id: elastic-bounce`

The element overshoots its resting point and oscillates once or twice before settling — a springy "boing". It injects physics and playfulness, best saved for success states, reward moments and branded entrances.

**Aliases:** 弹性回跳 · 果冻效果 · 回弹动画 · 弹簧动效 · Q弹效果

**Category:** Motion / Personality

## When to use

- Positive peaks — success, rewards, level-ups
- Playful brands that want a signature moment
- Snap-back after releasing a drag

## When not to use

- High-frequency buttons — the bounce wears out fast
- Serious contexts — payments, healthcare, legal
- Oversized bounce — past ~10% of size it looks broken

## Variants

- **Overshoot** (过冲回落) — One overshoot via cubic-bezier(0.34, 1.56, 0.64, 1) — simplest
- **Jelly** (果冻抖动) — Keyframed scale 1→1.2→0.9→1 for continuous wobble
- **Spring drag** (拖拽回弹) — Snaps back with spring physics on release

## Implementation

**CSS:** `cubic-bezier(0.34, 1.56, 0.64, 1)` `@keyframes overshoot` `transform-origin: center`

Simplest recipe — a cubic-bezier with y>1, (0.34, 1.56, 0.64, 1), lets the transition overshoot the end and settle back; multi-oscillation needs explicit keyframed scale sequences. Keep transform-origin centered and the amplitude within 10% of the element's size; with prefers-reduced-motion land on the final state directly.

## Agent task prompt

```text
Add an elastic bounce to success and reward moments in the project.

Check existing motion tokens and easing variables first; don't invent private curves.
Requirements:
- Overshoot within 10% of element size, total ≤ 600ms
- Only on low-frequency positive moments, never on routine buttons
- Centered transform-origin, no layout impact
- Respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add an elastic bounce to the success state — the icon lands with a springy pop.

**Design:** The success badge scales from 0.6 to 1 with a single overshoot over 450ms; amplitude stays under 10% of size; triggered only at the moment of success.

**Implementation:** Use cubic-bezier(0.34, 1.56, 0.64, 1) for transitions/animations; the jelly variant writes keyframes scale 1→1.08→0.96→1 over 400–600ms total. When combined with opacity, let only scale overshoot. Land on the final state directly under reduced-motion.

## Related

- [press-feedback](/motion/press-feedback) — Similar
- [magnetic-button](/motion/magnetic-button) — Similar
- [confetti](/motion/confetti) — Similar
- [card](/motion/card) — Applies to

## Sources

- [MDN — easing functions](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)

---

JSON: `/api/concept/motion/elastic-bounce.json` · Site: /en/motion/elastic-bounce
