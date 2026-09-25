# Minimalism / 极简主义

> Styles · `id: minimalism`

A visual language built on "less is more": generous whitespace, a restrained monochrome palette and very few type scales let the content speak. All decoration is stripped away; hierarchy is created purely by space, weight and rhythm. Quiet, restrained, content-first.

**Aliases:** 极简风 · 简约风格 · 性冷淡风 · 大量留白那种设计 · 性冷淡设计 · Minimal · Minimalist Design · Less is more

**Category:** Style / Visual Language

## When to use

- Content-first products — reading, writing, photography, portfolios
- Conveying a professional, restrained, premium brand voice
- Pages with few elements and clear structure (hero, detail pages)

## When not to use

- Dense dashboards — excessive whitespace wastes efficiency
- Marketing or festive contexts that need energy and warmth
- Without strong typographic skill it reads as empty rather than elegant

## Variants

- **Monochrome Minimal** (黑白极简) — Pure black, white and grey — the sharpest version
- **Flat Minimal** (扁平极简) — No shadows or gradients; hierarchy via whitespace and weight
- **Warm Minimal** (暖调极简) — Cream and warm-grey tones, Japanese or Nordic feel

## Design spec

- **typography:** Serif display with grey sans body
- **color:** Off-white #FAFAF8 × near-black #161513, one accent
- **border:** Frameless; 1px #EDEDE9 hairlines at most
- **shadow:** No shadows — depth via greyscale
- **spacing:** Generous whitespace on a relaxed 8pt grid

## Implementation

**CSS:** `whitespace` `font-weight` `letter-spacing` `border: 1px solid` `grid`

Typography and whitespace carry the design: at most three type sizes with restrained line-height; a palette of black, white, grey plus at most one accent; separate with 1px hairlines or pure space instead of boxes; buttons are solid black or outlined, no shadows or gradients. Remove everything first, then refine what remains.

## Agent task prompt

```text
Implement a minimal content card section in Minimalism style in the current project.

Inspect the existing design tokens and component system first; reuse the current font and spacing variables.
Requirements:
- Generous whitespace; hierarchy from type scale, weight and space only
- Palette restrained to black, white, grey plus at most one accent
- No shadows, gradients or textures; separate with 1px hairlines or whitespace
- Dark mode support
- If any transitions are added, respect prefers-reduced-motion and keep them under 150ms
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** "Design an interface in Minimalism style: generous whitespace, a monochrome palette, zero decoration, hierarchy built from type scale and space alone."

**Design:** Minimalism design spec: pure white surface, near-black text (#111); at most three type sizes with tight heading tracking; palette limited to black, white, grey plus one accent; separate with 1px hairlines or whitespace — no shadows, gradients or textures; buttons are solid black or 1px outlined; whitespace at least half the content height. Dark mode: near-black surface, inverted text.

**Implementation:** Implement minimalism in CSS: a whitespace scale (multiples of 8) and three font-size tokens; .btn-solid (black on white) and .btn-outline (1px border) with no or 2px radius; cards separated by 1px borders or whitespace with box-shadow: none; inputs keep a bottom hairline that turns accent on focus. Transition colors only, under 150ms.

## Related

- [flat-design](/styles/flat-design) — Similar
- [swiss-style](/styles/swiss-style) — Similar
- [editorial](/styles/editorial) — Similar
- [button](/styles/button) — Affects
- [card](/styles/card) — Affects

## Sources

- [Apple HIG — Visual Design](https://developer.apple.com/design/human-interface-guidelines/visual-design)
- [Dieter Rams — 10 Principles of Good Design](https://www.vitsoe.com/us/about/good-design)

---

JSON: `/api/concept/styles/minimalism.json` · Site: /en/styles/minimalism
