# Relative Units / 相对单位

> Foundation · `id: relative-units`

A length can be absolute (px) or relative: rem scales from the root font size, em from the element's own font size, % from the container, and vw/vh from the viewport. When a user raises the browser's default font size, px layouts refuse to move while rem-based ones grow with it. Prefer rem for type, spacing and radius; keep px for borders and hairlines.

**Aliases:** 相对单位 · 相对长度 · rem 和 em 的区别 · 为什么改浏览器字号界面不变大 · 响应式单位 · relative units · rem vs em · px vs rem

**Category:** Foundation / Layout / Typography

## When to use

- Users can change the browser default font size and the UI must scale with it
- One component is reused across containers and font sizes and must adapt
- Fluid type, spacing or full-screen sections that follow the viewport

## When not to use

- 1px hairlines and borders that must be exactly one pixel
- Bitmaps aligned to exact source pixels, where any rounding hurts
- Nested em compounding until the size runs away entirely

## Variants

- **Root-relative rem** (相对根字号 rem) — 1rem equals the root size — change it and the page scales together
- **Local em** (相对父级 em) — 1em follows the current font size and compounds when nested
- **Viewport units** (视口单位 vw/vh) — Follows the window — good for full-bleed sections and fluid spacing

## Platform API

- `rem`
- `em`
- `vw`
- `vh`
- `calc()`

## In code

| Framework | Name |
| --- | --- |
| CSS | [rem / em](https://developer.mozilla.org/en-US/docs/Web/CSS/length) — Relative to the root and to the parent size |
| CSS | [vw / vh / dvh](https://developer.mozilla.org/en-US/docs/Web/CSS/length) — Relative to viewport — dvh handles mobile browser chrome |
| Tailwind CSS | [rem-based spacing scale](https://tailwindcss.com/docs/theme) |

## Implementation

**CSS:** `font-size: 1rem` `padding: 1.5rem` `width: 50vw` `height: 100dvh` `border: 1px solid var(--color-line)`

Never hard-set font-size on :root — keep the browser default adjustable. Set body copy in 1rem, and use rem for type and spacing inside components, with ch/rem for max widths. Reserve vw/vh for full-screen sections, and prefer dvh on mobile to dodge the address bar. Keep hairlines and borders at 1px. Use em only where a size must follow the local font size, and watch for nesting compounding.

## Agent task prompt

```text
Implement a relative-unit system in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- Never hard-set the html root size; keep body text at 1rem
- Use rem for type, spacing and radius, and dvh for viewport sections
- Keep borders and hairlines in px; use em only locally
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Convert a layout to relative units — rem for type, spacing and radius, vw/vh for full-screen sections, px only for borders.

**Design:** Relative unit spec: leave the root font size at the browser default (do not hard-set html); use rem for body and component type, spacing and radius; use dvh for full-height; keep hairlines at 1px. Never size body text in vw or it collapses on small screens. Use em only for local scaling and no more than two nesting levels.

**Implementation:** Centralise the basis in custom properties — :root { --space-4: 1rem; --radius-md: 0.5rem; } — and have components reference variables instead of px. Write fluid sizes as clamp(1rem, 2.5vw, 2rem) and full-height sections as min-height: 100dvh. To verify, change the browser default from 16px to 20px and check that layout and controls scale proportionally.

## Related

- [type-scale](/foundation/type-scale) — Used with
- [pixel-density](/foundation/pixel-density) — Similar
- [spacing-scale](/foundation/spacing-scale) — Similar
- [measure](/foundation/measure) — Used with

## Sources

- [MDN — CSS values and units](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- [web.dev — Learn Design: Typography](https://web.dev/learn/design/typography)
- [W3C — CSS Values and Units Module Level 4](https://www.w3.org/TR/css-values-4/)

---

JSON: `/api/concept/foundation/relative-units.json` · Site: /en/foundation/relative-units
