# Z-index & Stacking / 层级与堆叠

> Foundation · `id: z-index`

z-index orders positioned elements on the page, but stacking contexts decide who really wins: once an ancestor gains transform, opacity or isolation, a child's 9999 only competes inside that box and can never beat an outside z-index: 1. Replace scattered magic numbers with one small named ladder.

**Aliases:** 层级 · 堆叠 · 图层顺序 · 谁盖住谁 · 弹窗被盖住 · 层叠上下文 · z-index · stacking context

**Category:** Stacking / Foundation

## When to use

- Dropdowns, tooltips, drawers and modals need a fixed stacking order
- Sticky bars and floating buttons must stay above scrolling content
- When an overlay is hidden, find the stacking context before raising numbers

## When not to use

- Treating 9999 as a cure-all and bumping digits when it fails
- Random values — 1, 5, 100, 9999 — with no shared ladder
- Expecting lift from z-index on an element that is not positioned

## Variants

- **Numeric ladder** (数字档位) — 10 / 20 / 40 leave gaps to insert layers later
- **Named tokens** (命名档位) — --z-dropdown, --z-modal, --z-toast referenced by purpose
- **Isolated context** (隔离上下文) — Parent isolation: isolate traps children locally so values cannot leak

## Platform API

- `z-index`
- `position`
- `isolation`
- `transform`
- `opacity`

## In code

| Framework | Name |
| --- | --- |
| CSS | [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) |
| CSS | [isolation](https://developer.mozilla.org/en-US/docs/Web/CSS/isolation) |
| Tailwind CSS | [z-10 / z-50](https://tailwindcss.com/docs/z-index) |

## Implementation

**CSS:** `z-index: 40` `position: relative` `isolation: isolate` `--z-modal: 40` `transform: translateZ(0)`

z-index only applies to positioned elements, so non-static position comes first. Tokenise the ladder: --z-base: 0; --z-dropdown: 10; --z-sticky: 20; --z-modal: 40; --z-toast: 60. To trap children locally give a parent isolation: isolate (or an explicit position plus z-index) so a big child number cannot escape. Never fall back to 9999 — leave room to insert layers.

## Agent task prompt

```text
Implement stacking and z-index in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- A named z-index ladder (base / dropdown / sticky / modal / toast)
- Overlay containers use isolation: isolate so inner values cannot escape
- Remove magic numbers such as 9999
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Build a stacking system — a small z-index ladder giving overlays and content a stable order.

**Design:** Stacking spec: fixed levels base 0 / dropdown 10 / sticky 20 / modal 40 / toast 60 with gaps between; overlays on one screen stay within two levels; use isolation: isolate for local containment; no magic numbers like 9999; z-index describes order only, never visual depth.

**Implementation:** Ship the ladder as CSS variables: --z-base: 0; --z-dropdown: 10; --z-sticky: 20; --z-modal: 40; --z-toast: 60; consume them as z-index: var(--z-modal) with a position. Add isolation: isolate on overlay containers so inner values cannot escape. When something is covered, first check whether an ancestor created a new stacking context via transform, opacity or filter, then choose between raising a value and fixing the structure.

## Related

- [modal](/foundation/modal) — Used with
- [dropdown](/foundation/dropdown) — Used with
- [tooltip](/foundation/tooltip) — Used with
- [elevation](/foundation/elevation) — Similar

## Sources

- [MDN — z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
- [MDN — isolation](https://developer.mozilla.org/en-US/docs/Web/CSS/isolation)
- [W3C — CSS 2.2 Visual formatting model](https://www.w3.org/TR/CSS22/visuren.html)

---

JSON: `/api/concept/foundation/z-index.json` · Site: /en/foundation/z-index
