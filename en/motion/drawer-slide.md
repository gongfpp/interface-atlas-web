# Drawer Slide / 抽屉滑入

> Motion · `id: drawer-slide`

A panel slides in from a screen edge — usually right or bottom — over a scrim, like pulling out a drawer. Direction carries the spatial metaphor: entering from the edge marks it as a temporary layer, and it exits back the same way, keeping the mental model intact.

**Aliases:** 抽屉滑入 · 侧滑面板 · 侧边栏滑出 · 底部抽屉 · 滑出层

**Category:** Motion / Overlay

## When to use

- Secondary content on mobile — filters, settings, detail sheets
- Side panels that must keep the main page in context
- Bottom sheets for quick mobile actions

## When not to use

- Unskippable tasks — drawers are dismissed on a whim
- Complex content needing room — use a page or modal
- Slide durations past 300ms — waits feel long

## Variants

- **Right sheet** (右侧滑入) — X-axis motion — the desktop default
- **Bottom sheet** (底部抽屉) — Slides up on the Y axis — the mobile standard
- **Scrim fade** (遮罩渐变) — Scrim fades in with the panel for depth

## Implementation

**CSS:** `transform: translateX/Y` `cubic-bezier(0.32, 0.72, 0, 1)` `scrim opacity` `transform-only (no reflow)`

Animate the panel transform from translateX(100%) (or translateY(100%)) to 0 over 260–300ms using the Material drawer curve cubic-bezier(0.32, 0.72, 0, 1); reverse on close. Fade the scrim opacity 0→1 in sync. Animate transform/opacity only to avoid reflow; lock body scroll and manage focus plus Esc-to-close while open.

## Agent task prompt

```text
Add a drawer-slide transition to the project (right-side filter drawer).

Check existing drawer/modal components first; reuse their focus trap and scroll lock.
Requirements:
- transform slide 260–300ms with the Material drawer curve
- Scrim fades in sync; close on Esc and scrim click
- transform/opacity only, no layout shift
- Respect prefers-reduced-motion (fall back to fades)
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add a drawer slide to the filter panel — sliding in from the right over a scrim.

**Design:** The filter drawer slides in from the right over 280ms with a decelerating-with-snap curve, scrim fading in sync; it exits back the same way; on mobile the bottom sheet slides up instead.

**Implementation:** transform translateX(100%) ↔ 0 with transition 280ms cubic-bezier(0.32, 0.72, 0, 1); scrim opacity in sync. Toggle the state after a double rAF on mount to avoid a first-frame jump. Lock body overflow while open, close on Esc and scrim click, move focus into the drawer.

## Related

- [drawer](/motion/drawer) — Applies to
- [modal](/motion/modal) — Applies to
- [sidebar](/motion/sidebar) — Applies to
- [popover](/motion/popover) — Applies to

## Sources

- [Material Design — Side sheets](https://m3.material.io/components/side-sheets/overview)

---

JSON: `/api/concept/motion/drawer-slide.json` · Site: /en/motion/drawer-slide
