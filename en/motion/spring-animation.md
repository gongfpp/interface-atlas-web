# Spring Animation / 弹簧动画

> Motion · `id: spring-animation`

Motion driven by spring physics (stiffness, damping): it may overshoot and settle, or stop dead at critical damping. Compared with fixed easing it carries mass and continuity — good for drag snap-into-place, switch throws and emphatic entrances. Keep overshoot modest or it reads as broken.

**Aliases:** 弹簧动画 · 弹簧效果 · 弹一下 · 物理动画 · 回弹落位 · spring animation · spring physics · springy motion

**Category:** Motion / Physics

## When to use

- Snap-into-place moments — drag release, switch throws
- The UI should express mass, inertia and physical continuity
- Emphatic entrances or shared elements snapping home

## When not to use

- High-frequency micro actions — the bounce becomes noise
- Serious flows — payments, healthcare — needing restraint
- A plain fade suffices — springs add needless complexity

## Variants

- **Overshoot spring** (过冲弹簧) — Passes the target then settles — the springiest
- **Critically damped** (临界阻尼) — Fastest settle with zero overshoot — the steadiest
- **Bouncy** (弹跳) — Several decaying oscillations — playful, easy to overdo

## Platform API

- `linear()`
- `cubic-bezier()`
- `offset-path`

## Implementation

**CSS:** `cubic-bezier()` `linear()` `@keyframes` `transform: translate`

Approximate a spring in CSS with a rebounding cubic-bezier(0.34, 1.56, 0.64, 1) or explicit oscillating keyframes; for exact physics use linear() sampling or JS integrating stiffness/damping into transforms. Write every duration as calc(<duration> * var(--demo-speed, 1)). Keep overshoot within 10% of element size with a centered transform-origin. Respect prefers-reduced-motion by landing on the final state.

## Agent task prompt

```text
Implement spring animation for settle and emphasis moments in the current project.

Inspect the existing component system and design tokens first; reuse existing components.
Keep the project's visual style. Add no unnecessary dependencies.
Requirements:
- Express overshoot and settle with spring easing or oscillating keyframes
- Keep overshoot modest; write durations as calc(<duration> * var(--demo-speed, 1))
- Reserve for low-frequency key moments, never on high-frequency controls
- Respect prefers-reduced-motion
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Add a spring animation to element settlement — overshoot the target and ease back.

**Design:** On trigger the box springs to its target over ~450ms, overshooting about 8% before settling; the critically damped variant never overshoots; the bouncy variant oscillates two or three times.

**Implementation:** Use cubic-bezier(0.34, 1.56, 0.64, 1) or oscillating @keyframes in CSS; write durations as calc(<duration> * var(--demo-speed, 1)). Keep transform-origin centered and overshoot ≤ 10%. Respect prefers-reduced-motion.

## Related

- [elastic-bounce](/motion/elastic-bounce) — Alternative
- [press-feedback](/motion/press-feedback) — Used with
- [hover-lift](/motion/hover-lift) — Used with

## Sources

- [MDN — cubic-bezier()](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/cubic-bezier)
- [MDN — linear()](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/linear)
- [Material Design — Motion — Emphasized easing](https://m3.material.io/styles/motion/easing-and-duration)

---

JSON: `/api/concept/motion/spring-animation.json` · Site: /en/motion/spring-animation
