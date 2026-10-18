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
- **motion:** Colours and opacity only, under 150ms, no movement
- **states:** Hover changes colour only; focus shows a black hairline ring; active darkens slightly; disabled drops to 40% opacity; error uses a single red

## Implementation

**CSS:** `whitespace` `font-weight` `letter-spacing` `border: 1px solid` `grid`

Typography and whitespace carry the design: at most three type sizes with restrained line-height; a palette of black, white, grey plus at most one accent; separate with 1px hairlines or pure space instead of boxes; buttons are solid black or outlined, no shadows or gradients. Remove everything first, then refine what remains.

## Agent task prompt

```text
Build a complete LUMO page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Continue LUMO from ReferenceStyleScene and reference-scenes.css: #fdfdfc ground, the existing white-to-grey horizontal hero gradient, and the device/stone photograph with its desktop mask and crop. Keep the Georgia display at 6.45cqw/.94 with tight tracking, grey sans body and black pill CTAs with a faint inset highlight. On narrow screens move the photograph below the copy in normal flow; do not remove it or flatten every surface into gradient-free square cards.

Full-page operations:
Explore Lumo opens the focus-device collection; Shop now shows device specifications and finishes. Cycle three daily rituals, select a device and inspect the local shopping result without placing an order.

Share one renderer between static covers, the detail experience and /style-scenes/minimalism/ (English /en/style-scenes/minimalism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** "Design an interface in Minimalism style: generous whitespace, a monochrome palette, zero decoration, hierarchy built from type scale and space alone."

**Design:** Minimalism design spec: pure white surface, near-black text (#111); at most three type sizes with tight heading tracking; palette limited to black, white, grey plus one accent; separate with 1px hairlines or whitespace — no shadows, gradients or textures; buttons are solid black or 1px outlined; whitespace at least half the content height. Dark mode: near-black surface, inverted text.

**Implementation:** Build a complete LUMO page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Continue LUMO from ReferenceStyleScene and reference-scenes.css: #fdfdfc ground, the existing white-to-grey horizontal hero gradient, and the device/stone photograph with its desktop mask and crop. Keep the Georgia display at 6.45cqw/.94 with tight tracking, grey sans body and black pill CTAs with a faint inset highlight. On narrow screens move the photograph below the copy in normal flow; do not remove it or flatten every surface into gradient-free square cards.

Explore Lumo opens the focus-device collection; Shop now shows device specifications and finishes. Cycle three daily rituals, select a device and inspect the local shopping result without placing an order.

Share one renderer between static covers, the detail experience and /style-scenes/minimalism/ (English /en/style-scenes/minimalism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [flat-design](/interface-atlas-web/en/styles/flat-design) — Similar
- [swiss-style](/interface-atlas-web/en/styles/swiss-style) — Similar
- [editorial](/interface-atlas-web/en/styles/editorial) — Similar
- [button](/interface-atlas-web/en/components/button) — Affects
- [card](/interface-atlas-web/en/components/card) — Affects

## Sources

- [Apple HIG — Visual Design](https://developer.apple.com/design/human-interface-guidelines/visual-design)
- [Dieter Rams — 10 Principles of Good Design](https://www.vitsoe.com/us/about/good-design)

---

JSON: `/interface-atlas-web/api/concept/styles/minimalism.json` · Site: /interface-atlas-web/en/styles/minimalism
