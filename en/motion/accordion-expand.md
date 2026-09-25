# Accordion Expand / 手风琴展开

> Motion · `id: accordion-expand`

Tapping a header expands or collapses the content vertically, like a bellows. The crux is animating grid-template-rows from 0fr to 1fr so content unfolds instead of popping in, with the chevron rotating in sync.

**Aliases:** 手风琴展开 · 折叠展开 · 展开收起动画 · 下拉展开 · 折叠面板

**Category:** Motion / Disclosure

## When to use

- FAQs, grouped settings, supplementary detail sections
- Long pages hiding low-priority content
- Exclusive sections — one open at a time

## When not to use

- Comparing several sections open at once
- Content over two screens — scrolling beats folding
- Critical steps in a flow — hiding adds friction

## Variants

- **Single open** (互斥展开) — One open at a time — the classic accordion
- **Multi-open** (多开) — Independent toggles for parallel content
- **Grid rows** (grid 动画) — grid-template-rows 0fr→1fr — no height measuring

## Implementation

**CSS:** `display: grid` `grid-template-rows 0fr → 1fr` `min-height: 0` `transition grid/height`

Modern CSS recipe — outer display:grid with grid-template-rows transitioning between 0fr and 1fr (300ms), inner min-height:0 plus overflow:hidden. No height measuring needed. Keep expand/collapse symmetric; rotate the chevron 90/180 in sync; under prefers-reduced-motion switch instantly.

## Agent task prompt

```text
Add accordion expand motion to the project's FAQ section.

Check existing accordion/collapse components first; avoid duplicating them.
Requirements:
- grid-template-rows 0fr→1fr height animation, 300ms
- Mutually exclusive within a group (multi-open configurable), chevron in sync
- Correct aria-expanded and keyboard operability
- Respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add accordion expand to the FAQ — tapping a header reveals the answer, tapping again collapses it.

**Design:** On tap, the answer unfolds from 0fr to 1fr within 300ms while the chevron rotates 180°; sections are mutually exclusive — one open at a time; no page jump.

**Implementation:** Outer grid with grid-template-rows 0fr/1fr transition over 300ms, inner overflow:hidden + min-height:0. Store the open id in useState; mutual exclusion means a single value. Add aria-expanded and button semantics; switch instantly under reduced-motion.

## Related

- [accordion](/motion/accordion) — Applies to
- [progressive-disclosure](/motion/progressive-disclosure) — Used with
- [filter-panel](/motion/filter-panel) — Applies to
- [settings](/motion/settings) — Used with

## Sources

- [MDN — grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)

---

JSON: `/api/concept/motion/accordion-expand.json` · Site: /en/motion/accordion-expand
