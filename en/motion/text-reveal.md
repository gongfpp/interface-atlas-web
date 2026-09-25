# Text Reveal / 文字显现

> Motion · `id: text-reveal`

Reveals a headline line by line or word by word instead of fading the whole block in. The spoken-rhythm staggering gives copy order and weight — a staple of landing-page hero titles, section intros and scrollytelling, usually triggered once on entering the viewport.

**Aliases:** 文字一段一段出现 · 文字逐行出现 · 标题文字渐显 · 一行一行浮现 · 打字机出现

**Category:** Motion / Text

## When to use

- Hero headlines and taglines that need an entrance
- Scroll-triggered sections that guide reading order
- Editorial layouts where type is the protagonist

## When not to use

- Animating body copy word by word — it delays reading
- Interfaces built for scanning — dashboards, tables, docs
- Multiple competing text entrances in one viewport

## Variants

- **Line mask** (行遮罩上滑) — Lines slide up from behind a mask — cinematic captions
- **Word stagger** (按词浮现) — Words fade in one by one — quicker tempo
- **Typewriter** (打字机) — Types characters with a blinking caret — terminal feel

## Implementation

**CSS:** `overflow: hidden` `@keyframes translateY 100% → 0` `animation-delay stagger` `clip-path`

Line-mask recipe — wrap each line in overflow:hidden and animate the inner span from translateY(100%) to 0, stepping animation-delay 80–120ms per line. Faster to read than a typewriter. Text must be visible without animation — keep the initial opacity:0 inside the keyframes; with prefers-reduced-motion show everything at once.

## Agent task prompt

```text
Add a line-by-line text reveal to the project's hero headline.

Check existing entrance animations and tokens first; keep the rhythm consistent.
Requirements:
- Line mask slide-up, 80–120ms stagger, under 600ms total
- Triggered once when entering the viewport
- Text visible without JS (progressive enhancement)
- Respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add a text reveal to the hero headline — lines float up one after another.

**Design:** Split the hero title into three lines, each sliding up from a mask, 600ms ease-out with a 100ms per-line delay; the animation plays once; text stays visible without animation.

**Implementation:** CSS-only: outer overflow:hidden, inner keyframes translateY(100%) → 0, animation-delay calc(index * 100ms), fill-mode forwards. Add @media (prefers-reduced-motion: reduce) to show text immediately.

## Related

- [scroll-reveal](/motion/scroll-reveal) — Similar
- [stagger-reveal](/motion/stagger-reveal) — Similar
- [number-counter](/motion/number-counter) — Similar
- [editorial](/motion/editorial) — Used with
- [landing-page](/motion/landing-page) — Used with

## Sources

- [MDN — CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)

---

JSON: `/api/concept/motion/text-reveal.json` · Site: /en/motion/text-reveal
