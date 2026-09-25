# Breakpoints / 响应式断点

> Foundation · `id: breakpoints`

Breakpoints are viewport widths where a layout changes. Pick them where content crowds, not device names, then stack mobile-first min-width rules.

**Aliases:** 响应式断点 · 媒体查询断点 · 断点 · 手机和电脑的分界 · 什么时候换布局 · 大屏小屏切换点 · breakpoint · media query breakpoint

**Category:** Responsive / Layout / Foundation

## When to use

- One page needs different column counts or navigation on phone and desktop
- A width threshold should switch the sidebar, type scale or density
- Building mobile-first and enhancing upward step by step

## When not to use

- A fixed-width embedded widget that never adapts
- Naming breakpoints after device models such as iPhone 15 or iPad Pro
- A dozen breakpoints fighting each other and hard to maintain

## Variants

- **Mobile-first** (移动优先) — Write the narrow baseline first, then stack min-width rules
- **Content-driven** (内容驱动) — Widen the window; wherever it crowds is the breakpoint
- **Breakpoint tokens** (断点令牌) — Centralise breakpoint values as tokens, not scattered magic numbers

## Platform API

- `@media`
- `min-width`
- `container-type`
- `clamp()`

## In code

| Framework | Name |
| --- | --- |
| CSS | [@media (min-width: 48rem)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) — Mobile-first minimum-width media query |
| Tailwind CSS | [sm: / md: / lg:](https://tailwindcss.com/docs/responsive-design) — Prefixes are min-width breakpoints |
| CSS Container Queries | [@container (min-width: 30rem)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) — Switch on component width, not the viewport |

## Implementation

**CSS:** `@media (min-width: 48rem)` `min-width: 0` `grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr))` `container-type: inline-size` `padding-inline: clamp(1rem, 4vw, 2.5rem)`

Write narrow styles as the base, then override upward with @media (min-width: ...) instead of desktop-first max-width. Express breakpoints in em/rem (48rem = 768px) so they follow zoom; define them once as CSS variables or Tailwind screens and never scatter magic numbers inside components. Where flex-wrap, grid auto-fit or clamp() can adapt, skip the breakpoint entirely.

## Agent task prompt

```text
Implement responsive breakpoints in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- Mobile-first, min-width media queries only
- Breakpoint values defined in one place (CSS variables or Tailwind screens); no magic numbers in components
- Three to five breakpoints at most; prefer adaptive layout over new breakpoints
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Establish a set of responsive breakpoints — define switch widths from content needs so the layout adapts from small to large screens.

**Design:** Breakpoint spec: mobile-first, min-width only; values in rem (48rem = 768px, 64rem = 1024px) defined in one place; document what changes at each step (columns, navigation, spacing); keep to three to five breakpoints; prefer flex-wrap, grid auto-fit and clamp() for adaptation, adding a breakpoint only when the structure truly changes.

**Implementation:** Layer min-width queries from narrow to wide: .grid { display: grid; grid-template-columns: 1fr; } @media (min-width: 48rem) { .grid { grid-template-columns: repeat(2, 1fr); } }. Keep breakpoint values in CSS variables or Tailwind screens; for component-scoped switching add container-type: inline-size and use @container. Avoid desktop-first max-width rewrites and per-element hard-coded thresholds.

## Related

- [type-scale](/foundation/type-scale) — Similar
- [touch-target](/foundation/touch-target) — Similar
- [navbar](/foundation/navbar) — Used with
- [sidebar](/foundation/sidebar) — Used with

## Sources

- [MDN — Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [web.dev — Learn Responsive Design](https://web.dev/learn/design/)
- [W3C — Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/)

---

JSON: `/api/concept/foundation/breakpoints.json` · Site: /en/foundation/breakpoints
