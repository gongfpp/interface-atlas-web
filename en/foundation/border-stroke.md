# Borders & Strokes / 边框与描边

> Foundation · `id: border-stroke`

Lines that mark an element's edge and its state. border takes up box-model space, outline paints just outside it without nudging layout, and a box-shadow ring draws a halo that costs no space. Pair a low-contrast border for quiet division with a darker hover, an outline for focus, and a recolour for errors so edges read clearly and nothing jumps.

**Aliases:** 边框 · 描边 · 线框 · 边界线 · 给元素加个框 · 点击时那圈高亮 · border · outline · ring

**Category:** Borders / Foundation

## When to use

- Inputs, cards and buttons need a thin line to mark the hit area
- Hover, focus and error states need a visible cue that does not reflow
- Flat styles with no shadows rely on strokes to separate surfaces

## When not to use

- Thick coloured borders on every block make the page a grid of boxes
- Toggling one element between border and outline makes widths jump
- Strokes used instead of whitespace or rules to organise hierarchy

## Variants

- **Solid border** (实体边框) — Counts in the box model and always takes space; pair with box-sizing: border-box
- **Outline** (轮廓描边) — Painted outside the box, offsettable, layout-neutral; first choice for focus
- **Shadow ring** (阴影环) — A 0 0 0 Npx box-shadow fakes a stroke with zero space and stackable layers

## Platform API

- `border`
- `outline`
- `box-shadow`
- `box-sizing`
- `border-radius`

## In code

| Framework | Name |
| --- | --- |
| CSS | [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border) |
| CSS | [outline](https://developer.mozilla.org/en-US/docs/Web/CSS/outline) |
| Tailwind CSS | [border / ring](https://tailwindcss.com/docs/border-width) |

## Implementation

**CSS:** `border: 1px solid var(--color-line)` `box-sizing: border-box` `outline: 2px solid var(--color-accent)` `outline-offset: 2px` `box-shadow: 0 0 0 3px var(--color-accent-soft)`

Set box-sizing: border-box globally so borders count inside the declared width and a heavier stroke cannot shove neighbours. Default to a 1px --color-line; swap to --color-line-strong on hover; use outline for focus (no space, offsettable) rather than border, which would jump the element by its own width. Errors recolour semantically and add text, never colour alone. For a zero-space stroke use box-shadow: 0 0 0 3px var(--color-accent-soft).

## Agent task prompt

```text
Implement borders and strokes in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- box-sizing: border-box globally
- Clear roles for border / outline / ring, with focus using outline only
- Hover, focus and error states differ without reflowing layout
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Define a stroke system — when to use border, outline and a shadow ring, plus a default 1px border token.

**Design:** Stroke spec: a 1px low-contrast border by default, one step darker on hover; focus is always a 2px outline with 2px offset, never a border; errors recolour semantically and add text; everything uses box-sizing: border-box; corner radii step 4/8/12/16; no more than three stroke colours on one screen.

**Implementation:** Ship it with CSS variables: --border-width: 1px; --color-line and --color-line-strong for default and hover; focus as :focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }; and * { box-sizing: border-box; } globally. For space-free strokes use box-shadow: 0 0 0 3px var(--color-accent-soft). Never hard-code pixel borders in content boxes.

## Related

- [focus-ring](/foundation/focus-ring) — Used with
- [input](/foundation/input) — Used with
- [card](/foundation/card) — Used with
- [elevation](/foundation/elevation) — Similar
- [neobrutalism](/foundation/neobrutalism) — Used with

## Sources

- [MDN — border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
- [MDN — outline](https://developer.mozilla.org/en-US/docs/Web/CSS/outline)
- [web.dev — The box model](https://web.dev/learn/css/box-model)
- [W3C — CSS Backgrounds and Borders Level 3](https://www.w3.org/TR/css-backgrounds-3/)

---

JSON: `/api/concept/foundation/border-stroke.json` · Site: /en/foundation/border-stroke
