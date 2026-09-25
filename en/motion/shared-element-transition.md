# Shared Element Transition / 共享元素转场

> Motion · `id: shared-element-transition`

A thumbnail in a list "flies" into the hero of the detail view — the same element moving continuously across two states instead of both views fading. Identity stays continuous through the transition: the strongest form of context preservation.

**Aliases:** 共享元素转场 · 元素飞入详情 · 卡片放大成页面 · 无缝转场 · hero 动画

**Category:** Motion / Transition

## When to use

- List to detail — photos, cards, products
- Selection flows where "it's the same item" matters
- Media browsing — galleries, files, previews

## When not to use

- Very different layouts — the flight path distorts
- Large media transitions on weak devices — jank breaks the illusion
- Durations past 400ms — users start waiting

## Variants

- **Container transform** (容器变换) — The card grows into the detail container — Material 3 standard
- **Hero image** (主图飞行) — Only the image flies; the rest fades in
- **Fallback** (退化淡切) — Falls back to a crossfade when unsupported

## Implementation

**CSS:** `FLIP technique` `view-transition-name` `getBoundingClientRect` `transform-only`

FLIP — record the element's first getBoundingClientRect, switch views, measure the last rect, invert the transform back to the start, then play to zero. Modern web option — the View Transitions API (document.startViewTransition + view-transition-name). Keep it to 250–400ms; with prefers-reduced-motion switch instantly.

## Agent task prompt

```text
Add a shared element transition from list to detail in the project.

Check the routing/view switching and existing transitions first; pick FLIP or View Transitions.
Requirements:
- Continuous element motion, 250–400ms, transform/opacity only
- Return via the same path on close; crossfade fallback when unsupported
- Preserve scroll position and focus management
- Respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add a shared element transition to the gallery — a thumbnail flies into the enlarged detail hero.

**Design:** On tap, the card grows continuously into the detail container (350ms) while the remaining detail content fades in after; closing reverses the flight back to the original spot; the list dims behind the transition.

**Implementation:** FLIP — capture the card rect on tap, render the detail layer, measure the detail rect in useLayoutEffect, compute dx/dy/scale as an inverted transform, force a reflow, then transition to none (350ms). Reverse on close. Alternatively use the View Transitions API with view-transition-name. Switch instantly under reduced-motion.

## Related

- [page-transition](/motion/page-transition) — Similar
- [modal](/motion/modal) — Applies to
- [card](/motion/card) — Applies to
- [master-detail](/motion/master-detail) — Used with

## Sources

- [Material Design — Container transform](https://m3.material.io/styles/motion/transitions/transition-patterns)

---

JSON: `/api/concept/motion/shared-element-transition.json` · Site: /en/motion/shared-element-transition
