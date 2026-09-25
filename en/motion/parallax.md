# Parallax / 视差滚动

> Motion · `id: parallax`

On scroll, layers move at different speeds — background slower, foreground faster — and the velocity gap reads as depth. The cheapest way to fake 3D in 2D; a staple of hero sections and scrollytelling.

**Aliases:** 视差滚动 · 背景慢速滚动 · 分层滚动 · 视差效果

**Category:** Motion / Depth

## When to use

- Hero imagery that needs depth and a cinematic feel
- Scrollytelling where layers stage the story
- Decorative background textures drifting slowly

## When not to use

- Long-form reading — offset motion causes nausea
- Heavy parallax on mobile — jank and motion sickness
- When it harms legibility or blocks targets

## Variants

- **Slow background** (背景减速) — Background scrolls at 0.3–0.5x — the default
- **Multi-layer** (多层深度) — Three-plus layers at different rates — deeper feel
- **Scroll-driven** (滚动驱动动画) — animation-timeline scroll() binds to scroll progress

## Implementation

**CSS:** `transform: translateY(scrollY * factor)` `rAF throttle` `animation-timeline: scroll()` `will-change: transform`

The classic way — listen to scroll and, inside rAF, apply translateY(scrollTop * factor) per layer, factor < 1 for slow layers (background 0.3, foreground 1.2); the modern way is CSS scroll-driven animations (animation-timeline: scroll()). Transform-only changes stay on the compositor; default off on mobile and under prefers-reduced-motion.

## Agent task prompt

```text
Add parallax scrolling to the project's hero section.

Inspect the hero structure and scroll container first; confirm the performance budget.
Requirements:
- Layered speeds, transform-only (compositor)
- rAF throttling or CSS scroll-timeline
- No readability or scroll-performance regressions (no layout thrash)
- Off by default on mobile and under reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add parallax to the hero — the background image moves slower than the foreground.

**Design:** Split the hero into three layers — far 0.3x, mid 0.6x, near 1x — so the velocity gap creates depth while scrolling; decorative layers never harm legibility.

**Implementation:** Listen to the scroll container, set style.transform = translateY(scrollTop * factor) per layer inside rAF; add will-change: transform to background layers. Or CSS: animation-timeline: scroll() + keyframed offsets. Static by default under reduced-motion and on touch.

## Related

- [scroll-reveal](/motion/scroll-reveal) — Similar
- [landing-page](/motion/landing-page) — Used with
- [editorial](/motion/editorial) — Used with
- [aurora](/motion/aurora) — Used with

## Sources

- [MDN — scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations)

---

JSON: `/api/concept/motion/parallax.json` · Site: /en/motion/parallax
