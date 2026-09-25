# Floating Action Button / 悬浮按钮

> Components · `id: fab`

A circular button anchored to a corner of the viewport, floating above the content and carrying the one primary action of the current view (create, compose, scan). Shadow and placement declare "I sit above everything" — louder than an inline primary button, but there should be only one per screen. On click it may expand into a labeled bar or fan out into a set of quick actions.

**Aliases:** 悬浮按钮 · 浮动按钮 · 悬浮球 · 右下角那个圆按钮 · FAB · floating action button

**Category:** Action

## Name disambiguation

A FAB is not "a louder primary button": a primary button lives inside the layout and scrolls with content; a FAB detaches from the flow, stays pinned to a corner and overlays content. The test is whether it floats above scrolling content — not how bright its color is.

## When to use

- The view has one frequent, constructive primary action (create, compose)
- A persistent entry point in the bottom thumb zone
- A tool-like surface needs a stronger call to action than an inline button

## When not to use

- Several co-equal primary actions — they cancel out; use a bottom action bar
- Destructive actions (delete, wipe)
- It would cover key content or the bottom navigation

## Variants

- **Single** (单一圆形) — Icon-only circle — the classic form
- **Extended** (扩展标签) — Icon plus label — a clearer call to action
- **Speed dial** (快捷扇出) — Fans out several sub-actions on click, retracts on second click

## Platform API

- `<button>`
- `position`
- `box-shadow`
- `aria-expanded`

## In code

| Framework | Name |
| --- | --- |
| MUI | [Fab](https://mui.com/material-ui/react-fab/) |
| Ionic | [Fab](https://ionicframework.com/docs/api/fab) |
| Material Design | [FAB](https://m3.material.io/components/floating-action-button/overview) |

## Implementation

**CSS:** `position: fixed` `border-radius` `box-shadow` `transform` `transition`

Anchor the corner with position: fixed (or absolute outside the scroller); make it circular with border-radius: 9999px; elevation comes from layered box-shadows, not outlines. Speed-dial actions stagger in with scale + opacity while the main button rotates 45° into a close affordance. Press feedback is scale(0.94); keep the touch target ≥ 48px; respect prefers-reduced-motion.

## Agent task prompt

```text
Implement a Floating Action Button in the current project.
Inspect the existing component system and design tokens first; reuse button and shadow
variables.
Keep it distinct from an inline primary button: floating, persistent, one per screen.
Keep the project's visual style. Add no unnecessary dependencies.
Respect prefers-reduced-motion and support keyboard operation.
Run the project's existing checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a Floating Action Button: a circular icon button pinned to the bottom-right corner that fans out several sub-actions on click.

**Design:** Create a FAB: a 56px circle, accent fill, white icon, layered soft shadow; 16px from the bottom-right edge; the extended form is an icon-plus-label pill; speed-dial actions are 40px mini circles staggering upward; subtle press scale; consistent light/dark themes.

**Implementation:** React + Tailwind FAB: a variant map for single / extended / speed-dial; controlled open state with staggered CSS transition delays on sub-actions; role="menu" or group semantics with aria-expanded on the main button; clicking toggles open, Esc retracts and restores focus; active:scale-[0.94] press feedback; respect prefers-reduced-motion. No new dependencies.

## Related

- [button](/components/button) — Alternative
- [press-feedback](/components/press-feedback) — Used with
- [ripple](/components/ripple) — Used with

## Sources

- [Material Design — Floating action button](https://m3.material.io/components/floating-action-button/overview)
- [Apple HIG — Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons)

---

JSON: `/api/concept/components/fab.json` · Site: /en/components/fab
