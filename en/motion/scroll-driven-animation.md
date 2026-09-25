# Scroll-driven Animation / 滚动驱动动画

> Motion · `id: scroll-driven-animation`

Animation progress is tied to scroll position rather than time: scrub to where you want, even backwards. It powers scroll-linked progress bars, scroll-unfurled storytelling and parallax layers. Unlike scroll reveal it does not play once after a trigger — scroll position scrubs the timeline.

**Aliases:** 滚动驱动动画 · 滚动动画 · 随滚动动 · 滑到哪动到哪 · scroll animation · scroll-driven · scroll-linked animation

**Category:** Motion / Scroll

## When to use

- Narrative unfurls with reading and must stay in sync with scroll
- Scroll progress or reading-depth feedback is needed
- Spatial layering — parallax planes, sticky chapters

## When not to use

- Users scroll straight to content — animation slows arrival
- Nested scrollers where progress ownership is ambiguous
- A single entrance is enough — plain scroll reveal is simpler

## Variants

- **Scroll-linked** (滚动联动) — Progress maps straight to scroll — scrubbable both ways
- **Scroll-triggered** (滚动触发) — Fires past a threshold then plays on a clock, not on scroll
- **Parallax layers** (视差层) — Layers move at different rates to fake depth

## Platform API

- `animation-timeline: scroll()`
- `scroll()`
- `Intersection Observer`

## Implementation

**CSS:** `animation-timeline: scroll()` `animation-range` `transform: translateY` `progress`

Prefer CSS: animation-timeline: scroll() with animation-range binds keyframes to scroll progress; where unsupported, a JS scroll listener writes a CSS variable (e.g. --scroll) that calc drives transform/opacity. Any timed portion of a triggered animation must still use calc(<duration> * var(--demo-speed, 1)). Make scroll listeners passive and rAF-throttled. Respect prefers-reduced-motion by landing on the final state.

## Agent task prompt

```text
Implement scroll-driven animation in the current project.

Inspect the existing component system and design tokens first; reuse existing components.
Keep the project's visual style. Add no unnecessary dependencies.
Requirements:
- Progress bound to scroll position and reversible
- Prefer animation-timeline: scroll() with a JS fallback
- Timed animation durations written calc(<duration> * var(--demo-speed, 1))
- Respect prefers-reduced-motion
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Add scroll-driven animation to a long page: a progress bar grows with scroll and sections unfurl.

**Design:** A thin top progress bar runs 0% to 100% with scroll position; section cards rise and fade under scrub and reverse on the way back; a parallax backdrop moves at about half speed.

**Implementation:** Prefer animation-timeline: scroll(); fall back to a passive scroll listener plus rAF writing a CSS variable. Drive transforms/opacity via calc(var(--scroll) * …). Multiply timed animation durations by var(--demo-speed, 1). Respect prefers-reduced-motion.

## Related

- [scroll-reveal](/motion/scroll-reveal) — Alternative
- [parallax](/motion/parallax) — Alternative
- [text-reveal](/motion/text-reveal) — Used with

## Sources

- [MDN — CSS scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
- [MDN — animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)
- [MDN — Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)

---

JSON: `/api/concept/motion/scroll-driven-animation.json` · Site: /en/motion/scroll-driven-animation
