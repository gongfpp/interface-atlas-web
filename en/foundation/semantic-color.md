# Semantic Color Token / 语义色

> Foundation · `id: semantic-color`

Colour variables named by purpose, not hue: bg, surface, text, muted, accent, danger. Components consume roles only, so a theme switch re-points the mapping layer instead of touching components. Light, dark, high-contrast and brand skins are simply different value tables over the same roles.

**Aliases:** 语义色 · 语义色 token · 角色色 · 主题色变量 · 换肤 · semantic color · color token

**Category:** Color / Foundation

## When to use

- Light and dark themes, or skinnable branding, are required
- A component library ships across products and colour meaning must stay stable
- Accessibility demands a high-contrast or forced-colours theme

## When not to use

- A one-page campaign where the colour is the final visual
- More role names than actual colours — --color-card-header-icon-hover
- Illustration-only colours forced into the semantic layer

## Variants

- **Light / dark dual** (浅深双主题) — Two value tables per role, swapped under .dark
- **High contrast** (高对比) — Tightened lightness gaps, heavier borders and text
- **Brand override** (品牌覆盖) — Swap accent and a few roles; leave the rest alone

## Platform API

- `:root`
- `color-scheme`
- `CSS custom properties`

## In code

| Framework | Name |
| --- | --- |
| CSS | [color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme) — Lets UA controls follow the theme |
| CSS | [:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) |
| Tailwind CSS | [@theme / dark:](https://tailwindcss.com/docs/dark-mode) |

## Implementation

**CSS:** `:root` `color-scheme` `--color-bg` `--color-surface`

Two layers: the ramp (--color-primary-500) and the role layer (--color-accent: var(--color-primary-600)). Components may only reference roles. The dark theme overrides role values and sets color-scheme: dark so scrollbars and form controls follow. High contrast gets its own table — do not pile conditionals onto the dark one. Add forced-colors handling where the OS palette applies.

## Agent task prompt

```text
Implement semantic colour in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- A role layer of bg / surface / text / muted / accent / danger
- Light and dark value tables; components never hard-code colours
- color-scheme set and pairings pass AA contrast
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Define semantic colour tokens — bg, surface, text, muted, accent, danger roles with light and dark themes.

**Design:** Semantic colour spec: role layer fixed to bg, surface, raised, text, muted, line, accent, danger. One value table per theme; components stay theme-agnostic. A single global accent; danger reserved for destructive actions. Every text role passes WCAG AA against its background. No #hex inside components.

**Implementation:** Implement with CSS custom properties: :root { --color-bg: #fafaf7; --color-surface: #fff; --color-text: #17150f; --color-accent: var(--color-primary-600); } and .dark { --color-bg: #121210; … } with color-scheme: dark. Map into Tailwind via @theme inline for bg-bg / text-text utilities. Theming is a class swap.

## Related

- [color-palette](/foundation/color-palette) — Used with
- [contrast-ratio](/foundation/contrast-ratio) — Used with
- [elevation](/foundation/elevation) — Used with

## Sources

- [Material Design — Color roles](https://m3.material.io/styles/color/roles)
- [MDN — color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme)
- [W3C — CSS Custom Properties](https://www.w3.org/TR/css-variables-1/)

---

JSON: `/api/concept/foundation/semantic-color.json` · Site: /en/foundation/semantic-color
