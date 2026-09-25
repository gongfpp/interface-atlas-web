# Button / 按钮

> Components · `id: button`

A clickable block that triggers one clear action — the most basic interactive element of any interface. Fill, outline and ghost styles rank primary against secondary actions; presses give instant sink-in feedback, and a busy state disables further clicks to prevent double submission.

**Aliases:** 按钮 · 按键 · 点击按钮 · 主按钮 · 提交按钮 · CTA 按钮

**Category:** Action / Form

## When to use

- A user-initiated action such as submit, create or confirm
- Multiple actions coexist and need visual hierarchy
- The action mutates data and must guard against double submits

## When not to use

- Pure navigation — a link matches expectations better
- Frequently toggled reversible state — use a switch or checkbox
- Many repeated secondary actions — demote to text buttons to cut noise

## Variants

- **Primary** (主要) — Solid fill — the single primary action per view
- **Secondary** (次要) — Outlined style, paired with the primary
- **Ghost** (幽灵) — Borderless text-only, minimal visual weight
- **Danger** (危险) — Warning color for irreversible actions

## Platform API

- `<button>`
- `type`
- `role="button"`

## In code

| Framework | Name |
| --- | --- |
| HTML | [<button>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) |
| shadcn/ui | [Button](https://ui.shadcn.com/docs/components/button) |
| MUI | [Button](https://mui.com/material-ui/react-button/) |
| AntD | [Button](https://ant.design/components/button) |

## Implementation

**CSS:** `transition` `transform: scale(0.97)` `background` `box-shadow`

Transition colors and shadows smoothly; add scale(0.97) on the press frame. Keep a focus-visible ring for keyboard access. In the busy state swap the label for a spinner while disabled, preserving width to avoid layout shift. Touch targets should be at least 44px tall.

## Compare dimensions (`click-feedback`)

- **Intensity:** Low to medium — a subtle sink is enough
- **Mobile friendly:** Good — keep touch targets ≥ 44px
- **Best for:** Buttons / small clickable blocks

## Agent task prompt

```text
Implement a button component in the current project.

Inspect the existing design tokens and button-like styles first; reuse existing color and radius variables.
Requirements:
- Primary / secondary / ghost / danger variants
- Press feedback and a focus-visible keyboard focus style
- Loading state: spinner + disabled + unchanged width
- Consistent light/dark themes, respect prefers-reduced-motion
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a button component with primary, secondary, ghost and danger styles plus a loading state.

**Design:** Create a button component. Requirements: four levels (solid primary, outlined secondary, ghost text, danger), a subtle press-down feedback, a loading state with spinner that disables clicks and preserves width, optional leading icon, consistent in light/dark themes.

**Implementation:** React + Tailwind Button: variant and size via lookup maps; disabled and loading merged into pointer control; press feedback with active:scale-[0.97] and transition; busy state renders a spinner and keeps min-width; support an anchor variant for link use. Respect prefers-reduced-motion.

## Related

- [press-feedback](/components/press-feedback) — Alternative
- [ripple](/components/ripple) — Used with
- [magnetic-button](/components/magnetic-button) — Used with
- [hover-lift](/components/hover-lift) — Used with
- [loading-spinner](/components/loading-spinner) — Used with

## Applicable styles

`minimalism` `neobrutalism` `glassmorphism`

## Sources

- [Material Design — Common buttons](https://m3.material.io/components/buttons/overview)
- [Apple HIG — Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons)

---

JSON: `/api/concept/components/button.json` · Site: /en/components/button
