# Touch Target / 触控目标

> Foundation · `id: touch-target`

A touch target is the tappable area a finger must hit, not the icon size. Aim for 44×44 CSS px (48dp), about 8px between targets, and pad small icons to size.

**Aliases:** 触控目标 · 点击热区 · 可点区域 · 按钮太小点不到 · 手指点得中的范围 · 点按热区 · touch target · tap target

**Category:** Accessibility / Interaction / Foundation

## When to use

- Any control a finger or pointer taps, drags or presses
- Icon buttons, close buttons and list rows that look small
- Edge and corner actions that sit close to their neighbours

## When not to use

- Decorative icons that are never interactive
- Dense desktop data grids where cells are selected intentionally
- Blowing up hit areas until neighbouring targets overlap

## Variants

- **Comfortable** (舒适大热区) — Hit area from 44×44 — safest for primary actions
- **Padded icon** (图标加内边距) — 24px glyph grown to 44px with transparent padding
- **Inline text link** (行内文字链) — Extend the hit area with line-height and padding

## Platform API

- `min-height`
- `min-width`
- `padding`
- `touch-action`

## In code

| Framework | Name |
| --- | --- |
| Apple HIG | [44×44 pt](https://developer.apple.com/design/human-interface-guidelines/accessibility) — Apple's recommended minimum tappable size |
| Material Design | [48×48 dp](https://m3.material.io/foundations/accessible-design/overview) — Material's minimum touch target |
| WCAG 2.2 | [Target Size (Minimum) — 24×24](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) — The accessibility floor — ship larger in practice |

## Implementation

**CSS:** `min-height: 44px` `min-width: 44px` `padding: 10px` `touch-action: manipulation` `aspect-ratio: 1`

Give interactive elements min-width / min-height: 44px (or 48px) and use gap on the container for spacing instead of margins. Keep the glyph at 24px and pad it to 44px; when padding is awkward, expand with ::before { content: ''; position: absolute; inset: -10px; }. Content only revealed on hover is not a valid target. On touch devices add touch-action: manipulation to drop the 300ms double-tap delay.

## Agent task prompt

```text
Enforce touch target sizes in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- Every interactive element has a hit area of at least 44×44 CSS px with 8px spacing
- Small icons extend their hit area via padding or pseudo-elements without changing visual size
- Provide visible press and focus feedback; never rely on hover
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Unify touch target sizes across controls so every action is easy to tap on a phone.

**Design:** Touch target spec: tappable area at least 44×44 CSS px (Material 48dp); 8px or more between neighbours; pad small glyphs up to the minimum with transparent padding or a pseudo-element; the default 24px icon plus 10px padding reaches 44px; list rows no shorter than 44px; no action should be hover-only.

**Implementation:** Back buttons, icon buttons and list rows with min-height: 44px; min-width: 44px, and space them with display: flex; gap: 8px. When an icon's hit area is short, extend it with padding or a negative-inset ::before rather than enlarging the glyph. Provide :active / :focus-visible feedback. Verify no targets overlap at 320px wide.

## Related

- [breakpoints](/foundation/breakpoints) — Similar
- [button](/foundation/button) — Used with
- [fab](/foundation/fab) — Used with
- [focus-ring](/foundation/focus-ring) — Used with

## Sources

- [Apple HIG — Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)
- [Material Design — Accessible design](https://m3.material.io/foundations/accessible-design/overview)
- [W3C WAI — WCAG 2.2 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

---

JSON: `/api/concept/foundation/touch-target.json` · Site: /en/foundation/touch-target
