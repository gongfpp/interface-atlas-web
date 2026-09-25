# Magnetic Button / 磁吸按钮

> Motion · `id: magnetic-button`

As the cursor approaches, the button is pulled toward it like iron to a magnet, then springs home on leave. The offset is computed from cursor-to-center distance and usually clamped to 8–20px. A tactile desktop flourish common on portfolios and creative sites.

**Aliases:** 磁吸按钮 · 磁性按钮 · 按钮被鼠标吸过去 · 鼠标靠近按钮偏移 · magnetic effect · 磁力吸附

**Category:** Motion / Hover

## When to use

- A few key targets — landing-page CTAs, nav icons
- Creative or portfolio sites leaning into personality
- Desktop-first layouts with room to move

## When not to use

- Touch devices — no hover, no effect
- Form controls and dense toolbars — offset ruins aiming
- Magnetizing every button on the page — dizzying and cheap

## Variants

- **Translate follow** (平移跟随) — The whole button translates toward the cursor
- **Layered follow** (按钮与文字分层跟随) — The label travels further than the shell — parallax
- **Magnet + tilt** (磁吸 + 微倾斜) — Adds subtle rotateX/Y for depth

## Implementation

**CSS:** `transform: translate` `transition` `mousemove` `getBoundingClientRect`

Listen for mousemove on a hotspot wrapping the button; derive the cursor's offset ratio from center via getBoundingClientRect, multiply by max travel (e.g. 0.3 × 40px) and write it to `transform: translate`. On mouseleave, return to zero with a springy 300–500ms transition (cubic-bezier(.2,.8,.3,1.2)); shorten to ~100ms while inside so the follow feels sticky. Disable on touch behind @media (hover:hover).

## Agent task prompt

```text
Add a magnetic interaction to the project's primary CTA buttons.

Confirm button component structure and accent tokens first; stay consistent.
Requirements:
- Hotspot 1.5x button size; offset capped at 12px; 100ms follow, 400ms spring
- Keyboard focus and touch behavior unaffected
- Respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add a magnetic effect to buttons — the button drifts toward the nearby cursor and springs back on leave.

**Design:** Within a 1.5x hotspot the button translates proportionally toward the cursor (max 12px), 100ms follow and a 400ms springy return; reserve for primary CTAs, keep touch and keyboard unaffected.

**Implementation:** React: attach onMouseMove/onMouseLeave to a hotspot div, compute the center-relative offset with getBoundingClientRect, drive `transform: translate(x,y)` from state; add will-change: transform. 100ms follow, 400ms return with cubic-bezier(.2,.8,.3,1.2). Gate behind @media (hover:hover); disable offsets under prefers-reduced-motion.

## Related

- [hover-lift](/motion/hover-lift) — Similar
- [press-feedback](/motion/press-feedback) — Similar
- [hover-glow](/motion/hover-glow) — Similar
- [elastic-bounce](/motion/elastic-bounce) — Similar

## Sources

- [MDN — Element: mousemove event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event)

---

JSON: `/api/concept/motion/magnetic-button.json` · Site: /en/motion/magnetic-button
