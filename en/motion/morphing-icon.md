# Morphing Icon / 图标变形

> Motion · `id: morphing-icon`

One icon smoothly morphs between two states instead of being swapped — classically the hamburger turning into a close X. Built from the same strokes rotating, translating and fading, it says "same control, new state".

**Aliases:** 图标变形 · 汉堡变叉 · 图标切换动画 · 菜单变关闭 · 图标过渡

**Category:** Motion / Feedback

## When to use

- Paired states — menu/close, play/pause
- Toggle-type icon buttons in a fixed spot
- Emphasising a state change without moving layout

## When not to use

- Semantically unrelated icons — morphing misleads
- Shapes too different — the in-between looks broken
- Tiny icons under 16px — the morph is illegible

## Variants

- **Hamburger to X** (汉堡变叉) — Middle line fades out, outer lines rotate to cross
- **Plus to X** (加号变叉) — A 45° rotation of the whole icon — the easiest morph
- **Play to pause** (播放变暂停) — Triangle and double bars morph into each other

## Implementation

**CSS:** `transform: rotate + translate` `transition 300ms` `opacity: middle line`

Three spans (or SVG lines) with transition transform 300ms. Hamburger to X — top line translateY(6px) rotate(45°), bottom translateY(-6px) rotate(-45°), middle opacity 0. The aria-label must switch with the state; respect prefers-reduced-motion by swapping the glyph directly.

## Agent task prompt

```text
Implement a hamburger-to-X morph for the project's nav toggle.

Check the existing icon system (SVG or iconfont) first and pick a feasible layer.
Requirements:
- rotate/translate/opacity transitions on the same strokes, 300ms
- aria-label switches with state; keyboard operable
- Fixed icon footprint, no layout shift
- Respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add a hamburger-to-X morph to the nav toggle button.

**Design:** On menu toggle, the three bars morph into a close X within 300ms — outer lines rotate to cross, the middle fades out; the icon footprint never moves and the aria-label switches in sync.

**Implementation:** Three absolutely positioned spans; when open — top translateY(6px) rotate(45deg), bottom translateY(-6px) rotate(-45deg), middle opacity 0; transition transform+opacity 300ms. Set aria-label={open ? Close : Menu}. Disable the transition under reduced-motion.

## Related

- [button](/motion/button) — Applies to
- [menu](/motion/menu) — Applies to
- [drawer](/motion/drawer) — Applies to
- [press-feedback](/motion/press-feedback) — Similar

## Sources

- [MDN — CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions)

---

JSON: `/api/concept/motion/morphing-icon.json` · Site: /en/motion/morphing-icon
