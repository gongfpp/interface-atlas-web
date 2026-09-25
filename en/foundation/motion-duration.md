# Motion Duration & Easing / 动效时长与缓动

> Foundation · `id: motion-duration`

Motion duration is how long an animation runs: micro 100–150ms, standard 200–300ms, entrances 300–500ms. Ease out on entry; honour prefers-reduced-motion.

**Aliases:** 动效时长 · 动画时长 · 缓动曲线 · 动画快慢 · 动效快慢 · 弹跳顺不顺 · easing · duration and easing

**Category:** Motion / Foundation

## When to use

- Hover, press and state changes on buttons, switches and cards
- Entrances and exits for popovers, drawers and panels
- One motion rhythm for the whole product instead of per-component timing

## When not to use

- When the user enables prefers-reduced-motion — fall back to a short fade or none
- Critical feedback slowed to the point of feeling laggy
- Decorative animations over 500ms looping and stealing attention

## Variants

- **Micro feedback** (微反馈) — 100–150ms — presses and hovers must feel instant
- **Standard** (标准过渡) — 200–300ms — expand, switch, cross-fade
- **Emphasised** (强调入场) — 300–500ms — page and full-screen overlay entrances

## Platform API

- `transition-duration`
- `transition-timing-function`
- `animation-duration`
- `cubic-bezier()`
- `prefers-reduced-motion`

## In code

| Framework | Name |
| --- | --- |
| Material Design | [Duration & easing tokens](https://m3.material.io/styles/motion/overview) — Staged durations and standard easing tokens |
| Apple HIG | [Motion](https://developer.apple.com/design/human-interface-guidelines/motion) — Use motion to convey hierarchy and spatial relationships |
| CSS | [transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration) — The property that controls transition length |

## Implementation

**CSS:** `transition-duration: 200ms` `transition-timing-function: cubic-bezier(0.2, 0, 0, 1)` `animation-duration: 300ms` `@media (prefers-reduced-motion: reduce)` `transition-property: transform, opacity`

Stage durations as variables (--motion-fast: 120ms; --motion-base: 240ms; --motion-slow: 400ms) keyed to interaction type. Use ease-out or cubic-bezier(0.2, 0, 0, 1) for entrances, ease-in for exits, and make exits slightly faster than entrances. Animate transform and opacity only to avoid layout. Under prefers-reduced-motion: reduce, swap travel for an opacity fade capped at 150ms, or set transition: none.

## Agent task prompt

```text
Unify motion duration and easing in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- Define fast / standard / slow duration tokens and a standard easing curve
- Animate transform and opacity only; exits slightly faster than entrances
- Under prefers-reduced-motion, demote travel to a short fade or drop animation
Keep the project's existing visual style. Do not add unnecessary dependencies.
Reuse the existing timing system instead of per-component values.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Define one set of motion durations and easings so every interaction shares a rhythm.

**Design:** Motion spec: micro feedback 100–150ms, standard transitions 200–300ms, emphasised entrances 300–500ms, exits about 20% faster than entrances; ease-out for entrances, ease-in for exits, cubic-bezier(0.2, 0, 0, 1) as the standard; animate transform and opacity only; under prefers-reduced-motion drop travel and keep only a fade of 150ms or less.

**Implementation:** Stage durations as CSS variables: --motion-fast: 120ms; --motion-base: 240ms; --motion-slow: 400ms, with --ease-standard: cubic-bezier(0.2, 0, 0, 1). Elements use transition: transform var(--motion-base) var(--ease-standard), opacity var(--motion-base) var(--ease-standard). Override with @media (prefers-reduced-motion: reduce) to a short fade or transition: none. Never use transition: all.

## Related

- [reduced-motion](/foundation/reduced-motion) — Used with
- [hover-lift](/foundation/hover-lift) — Used with
- [page-transition](/foundation/page-transition) — Used with
- [press-feedback](/foundation/press-feedback) — Used with

## Sources

- [Material Design — Motion](https://m3.material.io/styles/motion/overview)
- [Apple HIG — Motion](https://developer.apple.com/design/human-interface-guidelines/motion)
- [web.dev — Learn CSS Animations](https://web.dev/learn/css/animations)
- [MDN — easing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)

---

JSON: `/api/concept/foundation/motion-duration.json` · Site: /en/foundation/motion-duration
