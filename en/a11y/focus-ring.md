# Focus Ring / 焦点环

> Accessibility · `id: focus-ring`

A visible outline marking the currently focused element, so users know where the next keystroke will land. Pointer users rarely need it, but keyboard and assistive-tech users must always see focus or they are operating blind. Usually driven by :focus-visible — shown for keyboard focus, silent for mouse clicks.

**Aliases:** 焦点环 · 键盘焦点框 · 键盘框 · 蓝框 · 聚焦框 · focus outline · focus ring

**Category:** Accessibility / Keyboard

## Name disambiguation

A focus ring is not a hover highlight — focus serves keyboard users, hover serves pointer users.

## When to use

- Any focusable element — buttons, links, inputs, custom widgets
- Targeting :focus-visible rather than :focus so clicks stay clean
- After custom styles have overridden the browser default outline

## When not to use

- Removing outline: none without a replacement indicator
- Cloning the hover highlight so focus is only visible to the pointer
- Rings below 3:1 contrast, or clipped by neighbouring elements

## Variants

- **Outline ring** (外轮廓) — outline plus outline-offset — universal, survives forced-colors
- **Shadow ring** (阴影环) — Layered box-shadow ring that hugs custom border-radius
- **Border tint** (描边染色) — Border-color only — weakest, needs a weight bump to pass

## Platform API

- `:focus-visible`
- `outline`
- `outline-offset`
- `focus()`

## In code

| Framework | Name |
| --- | --- |
| WCAG | [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible) |
| CSS | [:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) |

## Implementation

**CSS:** `:focus-visible` `outline` `outline-offset`

Base recipe: `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px }`. Switch to a two-layer `box-shadow` ring when you need it to hug custom radii. Never drop the default outline without a replacement; keep outline under forced-colors. Use `:focus:not(:focus-visible)` to strip click-only rings precisely.

## Agent task prompt

```text
Implement a visible keyboard focus ring in the current project.
Inspect the existing component system and design tokens first; reuse current components.
Requirements:
- :focus-visible shows a 2px accent outline at 3px offset; mouse clicks do not
- No bare outline: none anywhere without a replacement
- Custom-radius components use a shape-hugging box-shadow ring
Keep the existing visual style. Add no unnecessary dependencies.
Respect prefers-reduced-motion.
Run the project's existing checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Add a clear keyboard focus ring to buttons and links so Tab navigation is always visible.

**Design:** Every focusable shows a 2px accent outline at 3px offset matching its radius; visible on keyboard focus only; at least 3:1 contrast in both light and dark themes.

**Implementation:** Global: `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px }`; never ship bare outline:none; use a box-shadow ring for custom radii; `:focus:not(:focus-visible) { outline: none }` strips click rings.

## Related

- [keyboard-navigation](/a11y/keyboard-navigation) — Used with
- [skip-link](/a11y/skip-link) — Used with
- [contrast-ratio](/a11y/contrast-ratio) — Used with

## Confusable

- [hover-glow](/a11y/hover-glow) — hover-glow is decorative pointer feedback; a focus ring is required keyboard affordance.

## Sources

- [WCAG 2.1 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible)
- [MDN — :focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)

---

JSON: `/api/concept/a11y/focus-ring.json` · Site: /en/a11y/focus-ring
