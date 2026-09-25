# Font Stack / 字体栈

> Foundation · `id: font-stack`

An ordered fallback chain of typefaces: when the first face is missing the browser walks down to the next, with a generic family as the final safety net. System stacks cost nothing and render instantly; web fonts carry brand character but need font-display to tame flashing; local-first splits the difference. The order of the stack is the order of rendering decisions.

**Aliases:** 字体栈 · 字体回退 · 备用字体 · 字体族 · 字体列表 · font stack · font-family

**Category:** Typography / Foundation

## When to use

- Body and UI text must render reliably on any device
- Brand fonts cover only some weights or scripts and need a solid fallback
- First paint matters and font requests must not block text

## When not to use

- Layout collapses without one display face — e.g. a logotype
- Seven or eight near-identical faces — decision cost with no payoff
- Fallbacks with wildly different metrics that break the layout on swap

## Variants

- **System stack** (系统栈) — Zero download, zero flash — varies with the OS
- **Web font + fallback** (网络字体 + 回退) — Brand consistency first — needs font-display and metric matching
- **Local-first** (本地优先) — Use the local face when present, download only when missing

## Platform API

- `font-family`
- `@font-face`
- `font-display`
- `font-weight`

## In code

| Framework | Name |
| --- | --- |
| CSS | [font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) |
| CSS | [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) |
| Next.js | [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Automatic subsetting and size-adjust matching |

## Implementation

**CSS:** `font-family` `@font-face` `font-display` `size-adjust`

Write the stack in one line: 'Inter', 'PingFang SC', system-ui, sans-serif. For CJK, always place a Chinese family after the Latin face or glyphs fall to an ugly default. Load web fonts with font-display: swap or optional; use size-adjust and ascent-override to match fallback metrics so nothing jumps on swap. Keep a separate mono stack for code.

## Agent task prompt

```text
Implement font stacks in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- Three font-family chains for body / display / mono, each ending in a generic family
- Web fonts use font-display and metric-matched fallbacks
- CJK fallback sits directly after the Latin face
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Set up font stacks — three font-family fallback chains for body, display and mono.

**Design:** Font stack spec: body 'Inter', 'PingFang SC', system-ui, sans-serif; display may use a high-contrast serif with a CJK fallback; mono 'JetBrains Mono', 'SF Mono', Menlo, monospace. Web fonts load with font-display: swap and size-adjust metric matching. Every stack ends in a generic sans-serif / serif / monospace.

**Implementation:** Centralise stacks in CSS variables: :root { --font-sans: 'Inter', 'PingFang SC', system-ui, sans-serif; --font-mono: 'JetBrains Mono', Menlo, monospace; }. Declare font-display: swap and size-adjust on @font-face; map to Tailwind font-sans / font-serif / font-mono. Never scatter raw font-family strings inside components.

## Related

- [type-scale](/foundation/type-scale) — Used with
- [line-height](/foundation/line-height) — Used with
- [minimalism](/foundation/minimalism) — Used with

## Sources

- [MDN — font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
- [MDN — @font-face font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display)
- [CSS-Tricks — Using System Font Stack](https://css-tricks.com/snippets/css/system-font-stack/)

---

JSON: `/api/concept/foundation/font-stack.json` · Site: /en/foundation/font-stack
