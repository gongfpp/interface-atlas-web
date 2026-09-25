# Ripple / 点击涟漪

> Motion · `id: ripple`

A translucent circle expands from the exact tap point and fades out, visualising where the press landed. Material Design's signature press feedback — it gives clicks a physical sense, like a stone dropped on water.

**Aliases:** 水波纹 · 点击涟漪 · 波纹扩散 · material 点击效果 · 涟漪动画

**Category:** Motion / Feedback

## When to use

- Buttons, list items, cards — larger tappable surfaces
- Touch-first interfaces — fires on press, no hover needed
- Dense lists where the hit point matters

## When not to use

- Tiny icon buttons — the ripple overflows the target
- Rapid-fire toolbars — ripples smear together
- Components with strong press scale/shadow already

## Variants

- **Centered** (居中波纹) — Expands from center, CSS-only — simplest
- **Pointer** (触点波纹) — Expands from the real tap coordinates — Material standard
- **Bounded vs unbounded** (有界/无界) — Whether the ripple clips to rounded bounds

## Implementation

**CSS:** `position: relative + overflow hidden` `transform: scale(0 → 1)` `opacity fade` `pointer-events: none`

On press, insert a circular span at the tap point, scale it from 0 until it covers the element while fading out, remove after 300–500ms; the parent needs position:relative plus overflow:hidden. The pointer variant requires listening to offsetX/Y — pure CSS only does the centered version. Respect prefers-reduced-motion by falling back to a simple background darken.

## Agent task prompt

```text
Add ripple feedback to the project's buttons and list items.

Check existing button components and press feedback first; avoid double feedback.
Requirements:
- Expand from the real tap point, clipped to rounded bounds
- Complete within 400ms, clean up animated nodes to avoid leaks
- No layout impact (transform + opacity only)
- Respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add a ripple to buttons — a wave expanding from the tap point on press.

**Design:** On press, a translucent circular ripple expands from the tap point, scaling and fading within 400ms, clipped to the button's rounded bounds; size and layout stay unchanged.

**Implementation:** Listen to pointerdown for offsetX/Y, insert a span (positioned at the tap point, diameter = the diagonal), animate scale 0→1 with an opacity fade, remove on animationend. Give the button overflow:hidden and position:relative. Fall back to background darken under reduced-motion.

## Related

- [press-feedback](/motion/press-feedback) — Similar
- [button](/motion/button) — Applies to
- [magnetic-button](/motion/magnetic-button) — Similar
- [hover-lift](/motion/hover-lift) — Similar

## Sources

- [Material Design — States](https://m3.material.io/foundations/interaction/states/state-layers)

---

JSON: `/api/concept/motion/ripple.json` · Site: /en/motion/ripple
