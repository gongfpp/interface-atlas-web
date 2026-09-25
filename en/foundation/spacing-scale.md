# Spacing Scale / 间距系统

> Foundation · `id: spacing-scale`

A fixed ladder of spacing steps (4, 8, 12, 16, 24, 32, 48px, usually multiples of 4 or 8) that all padding, margin and gap values come from. Drawing every gap off one ruler instead of inventing numbers keeps density consistent, and spacing also signals grouping: the larger the gap, the looser the relationship between elements.

**Aliases:** 间距系统 · 间距阶梯 · 间距规范 · 为什么留白忽大忽小 · 间距尺寸 · spacing scale · spacing tokens · 4pt grid

**Category:** Foundation / Layout / Spacing

## When to use

- Many components and pages need one density rhythm instead of ad-hoc numbers
- The design system must ship spacing tokens for padding, margin and gap
- Grouping and hierarchy should come from spacing, not divider lines everywhere

## When not to use

- A one-off illustration or layout experiment where spacing should stay free
- Optical alignment still needs hand tuning rather than a fixed step
- Too many steps (one every 2px) makes picking slower, not easier

## Variants

- **Linear 4px** (4px 线性) — Every step a multiple of 4 — the most common and granular
- **8px base** (8px 基准) — Based on 8 with 4 and 12 as fillers — a looser rhythm
- **Semantic spacing** (语义间距) — Named inline / stack / section by relationship — stable across components

## Platform API

- `gap`
- `padding`
- `margin`
- `calc()`
- `--space-4`

## In code

| Framework | Name |
| --- | --- |
| CSS | [gap / padding / margin](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) — The three properties spacing lands on |
| Tailwind CSS | [p-4 / gap-4 (spacing scale)](https://tailwindcss.com/docs/padding) — A 4px-based set of multiplier utilities |
| Design tokens | --space-1 … --space-8 |

## Implementation

**CSS:** `--space-1: 0.25rem` `gap: var(--space-4)` `padding: var(--space-3) var(--space-4)` `margin-block: var(--space-6)` `gap: calc(var(--space-4) * var(--density, 1))`

Define six to eight rem steps — --space-1 through --space-8 (4/8/12/16/24/32/48/64px). Components reference tokens only, never raw numbers; siblings share one step, and larger groups take larger steps. Scale the whole density with one multiplier (--density) and tighten it per breakpoint or dark theme. Merge steps that are too close; keep the ladder under eight entries.

## Agent task prompt

```text
Implement a spacing scale in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- Six to eight rem spacing tokens based on multiples of 4 or 8
- Components reference tokens only; no raw margin/padding numbers
- Express grouping through spacing and expose a density multiplier
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Build a spacing scale — six to eight 4/8-based tokens that unify padding, margin and gap across components.

**Design:** Spacing spec: a 4px (or 8px) base with steps 4/8/12/16/24/32/48/64; siblings share a step and larger groups take larger steps; components reference tokens only, never raw numbers. Expose a --density multiplier for compact and loose modes. Keep adjacent steps at least 4px apart and the ladder to eight entries or fewer.

**Implementation:** Ship as custom properties — :root { --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem; --space-4: 1rem; --space-6: 1.5rem; --space-8: 2rem; } — and use gap: var(--space-4) with padding: var(--space-3) var(--space-4). Map into Tailwind theme spacing. Adjust overall density through a single --density multiplier.

## Related

- [relative-units](/foundation/relative-units) — Similar
- [border-radius](/foundation/border-radius) — Similar
- [type-scale](/foundation/type-scale) — Used with
- [button](/foundation/button) — Used with

## Sources

- [Material Design — Spacing](https://m3.material.io/foundations/layout/understanding-layout/spacing)
- [Apple HIG — Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- [Tailwind CSS — Padding](https://tailwindcss.com/docs/padding)

---

JSON: `/api/concept/foundation/spacing-scale.json` · Site: /en/foundation/spacing-scale
