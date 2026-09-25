# Reduced Motion / 减弱动效

> Accessibility · `id: reduced-motion`

Honour the OS "reduce motion" preference by demoting large translations, zooms and parallax to a plain fade or no motion at all. Large motion can trigger nausea and vertigo in vestibular-sensitive users — a health risk, not a taste question. WCAG 2.3.3 requires non-essential animation to be disable-able.

**Aliases:** 减弱动效 · 减弱动态效果 · 减少动画 · 动效降级 · 关掉动画 · reduced motion

**Category:** Accessibility / Motion

## Name disambiguation

prefers-reduced-motion is an OS-level health preference, not an in-app "kill animations" switch — the former is declared in system settings, the latter is just a product toggle.

## When to use

- Landing pages, transitions and parallax with large movement
- Auto-playing decorative motion — marquee, bounce, number rolls
- JS-driven animation libraries that need a non-CSS fallback path

## When not to use

- Slashing functional feedback too — press and loading states still need motion cues
- Substituting it for real fixes such as a missing focus ring
- Demoting CSS only while JS bounce and parallax keep running

## Variants

- **Fade only** (仅淡入) — Drop translation and scale, keep opacity — the default demotion
- **No animation** (完全取消) — animation: none / transition: none — state lands instantly
- **Static replace** (静态替代) — Swap the whole motion story for a static image or instant result

## Platform API

- `prefers-reduced-motion`
- `matchMedia`
- `animation: none`

## In code

| Framework | Name |
| --- | --- |
| WCAG | [2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions) |
| CSS | [@media (prefers-reduced-motion)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) |

## Implementation

**CSS:** `@media (prefers-reduced-motion: reduce)` `animation: none` `matchMedia` `transition-duration`

CSS-wide gate: `@media (prefers-reduced-motion: reduce) { *, ::before, ::after { animation-duration: .01ms !important; transition-duration: .01ms !important; } }`, then re-enable opacity for functional feedback as needed. JS animation reads matchMedia("(prefers-reduced-motion: reduce)").matches and reconfigures on change; scroll-driven motion and parallax must switch off together.

## Agent task prompt

```text
Implement reduced-motion support in the current project.
Inspect the existing component system and design tokens first; reuse current components.
Requirements:
- Honour prefers-reduced-motion globally; demote translation/scale motion to fade or nothing
- JS-driven animation reads matchMedia and reacts to change
- Keep functional feedback (press, loading) intact
Keep the existing visual style. Add no unnecessary dependencies.
Respect prefers-reduced-motion.
Run the project's existing checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Make the site honour the OS "reduce motion" setting, demoting animation when it is on.

**Design:** When reduce motion is on, entrances lose translation and scale and become a 200ms fade, transitions go instant or crossfade, marquee and parallax stop entirely; press and loading feedback stay.

**Implementation:** Compress animation/transition durations under @media (prefers-reduced-motion: reduce); JS reads matchMedia and listens for change; scroll-scrub, parallax and counters render their end state in the reduce branch. Map any in-product toggle onto the same demotion function.

## Related

- [scroll-reveal](/a11y/scroll-reveal) — Used with
- [hover-lift](/a11y/hover-lift) — Used with
- [focus-ring](/a11y/focus-ring) — Used with

## Confusable

- [page-transition](/a11y/page-transition) — page-transition is the transition motion itself; reduced-motion is the system policy deciding whether to soften it — one builds motion, the other trims it.

## Sources

- [WCAG 2.1 Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)
- [MDN — prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

---

JSON: `/api/concept/a11y/reduced-motion.json` · Site: /en/a11y/reduced-motion
