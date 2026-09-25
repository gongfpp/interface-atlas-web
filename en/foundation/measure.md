# Measure / 行宽

> Foundation · `id: measure`

How many characters fit on one line — it decides whether the eye can return to the next line without effort. The comfort zone is roughly 45–75 Latin characters (28–40 CJK glyphs), with 65ch the usual target. Too narrow and the eye turns constantly; too wide and it loses the line. Control it with max-width in ch rather than guessing in pixels.

**Aliases:** 行宽 · 行长 · 每行字数 · 一行多少字 · 字符数每行 · measure · characters per line

**Category:** Typography / Foundation

## When to use

- Long-form reading — articles, docs, help centre copy
- Containers grow with the viewport and body copy needs a hard cap
- Multi-column layouts where each column caps its own measure

## When not to use

- Tables and data grids — column structure dictates width
- Single-line fields and button labels — not paragraph text
- Fancy line-breaking tuning on top of a 65ch cap — diminishing returns

## Variants

- **Optimal 65ch** (舒适 65ch) — The long-form default — easy on the return sweep
- **Narrow column** (窄栏) — Sidebars and pull quotes — around 45ch
- **Wide UI text** (宽界面文字) — Settings and form help — may stretch to 80ch

## Platform API

- `max-width`
- `ch`
- `text-wrap`
- `hyphens`

## In code

| Framework | Name |
| --- | --- |
| CSS | [max-width: 65ch](https://developer.mozilla.org/en-US/docs/Web/CSS/length#ch) — Line cap measured in zero-glyph width |
| Tailwind CSS | [max-w-prose](https://tailwindcss.com/docs/max-width) — The ~65ch preset |

## Implementation

**CSS:** `max-width: 65ch` `max-width: 45rem` `text-wrap` `hyphens`

Cap body containers at max-width: 65ch (or about 36rem) inside a fluid shell so side margins breathe with the viewport. The ch unit tracks the current font's zero width and recalculates on font swap — steadier than pixels. For CJK, 28–40 glyphs is the target. Cap each column individually; never let whole-page width decide the measure.

## Compare dimensions (`typography-trio`)

- **Best for text:** Long-form body and explanatory copy
- **Adjust granularity:** Drag container width, measured in ch
- **Responsive:** High — max-width inside a fluid container

## Agent task prompt

```text
Implement measure in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- Long-form body containers capped near 65ch inside a fluid shell
- Each multi-column column capped independently
- Paired with leading and the type scale; no pixel-locked measure
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Set an optimal measure for long-form body copy — cap characters per line for comfortable reading.

**Design:** Measure spec: long-form body at 65ch (≈28–40 CJK glyphs); sidebars and pull quotes at 45ch; form help up to 80ch. Pair measure with 1.6–1.75 leading. On narrow screens let the container shrink naturally — no extra indents. Enable hyphens: auto on Latin paragraphs only after checking the dictionary.

**Implementation:** Cap .prose body containers with max-width: 65ch while the outer shell stays width: 100%. Define grid columns as minmax(45ch, 1fr) in multi-column layouts. Tailwind offers max-w-prose. When tuning, estimate CPL from element width over average glyph width, or count with Intl.Segmenter.

## Related

- [line-height](/foundation/line-height) — Used with
- [type-scale](/foundation/type-scale) — Used with
- [editorial](/foundation/editorial) — Used with

## Sources

- [Practical Typography — Line length](https://practicaltypography.com/line-length.html)
- [MDN — ch unit](https://developer.mozilla.org/en-US/docs/Web/CSS/length#ch)
- [web.dev — CSS](https://web.dev/learn/css)

---

JSON: `/api/concept/foundation/measure.json` · Site: /en/foundation/measure
