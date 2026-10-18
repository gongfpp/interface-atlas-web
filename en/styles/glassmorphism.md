# Glassmorphism / 玻璃拟态

> Styles · `id: glassmorphism`

A visual language that expresses floating layers as frosted glass: a blurred backdrop (backdrop-filter), a low-opacity fill and a thin white rim of light. Panels literally reveal the vivid background beneath them, so the style is about depth — it only works over rich, colorful content worth revealing.

**Aliases:** 毛玻璃 · 苹果那种透明玻璃效果 · 玻璃拟态 · 磨砂玻璃 · 玻璃效果 · 半透明模糊背景 · Frosted Glass · Glassmorphism UI

**Category:** Style / Visual Language

## When to use

- Over gradients, photos or colorful backdrops worth revealing
- Overlays, players and floating system panels that should feel light
- Evoking the familiar macOS/iOS material language

## When not to use

- Plain backgrounds — frosted glass over nothing is just grey fog
- Long-form reading areas where blur keeps eroding text contrast
- Performance-sensitive or older devices — backdrop-filter is costly

## Variants

- **Frost** (磨砂) — High blur, low opacity — the classic milky glass
- **Clear Glass** (透明玻璃) — Light blur, high transparency, leans on the light rim
- **Tinted Glass** (有色玻璃) — Color-tinted glass, the iOS vibrancy tradition

## Design spec

- **typography:** Sans-serif with white display type
- **color:** Blue-purple-pink gradient with white glass rgba(255,255,255,.45)
- **border:** 1px translucent white borders
- **shadow:** Large soft coloured shadows
- **spacing:** 16px+ radii with roomy card padding
- **motion:** 200–300ms ease-out transitions for movement and blur; honour prefers-reduced-motion
- **states:** Hover raises opacity and blur and lifts slightly; focus shows a visible white ring; active lowers the glow; disabled loses opacity and blur; error tints the glass red, fading colour only

## Implementation

**CSS:** `backdrop-filter: blur()` `background: rgba(255,255,255,0.1~0.4)` `border: 1px solid rgba(255,255,255,0.4)` `box-shadow: inset 0 1px 0 rgba(255,255,255,0.5)` `@supports`

Three ingredients: a translucent fill (white at 10–40% opacity), backdrop-filter blur(8–24px), and a 1px translucent white top rim that sells the glass thickness. It shines on dark backgrounds — add an inner top glow. Always gate with @supports and fall back to a more opaque fill where backdrop-filter is unsupported. Verify text contrast against the blurred result, not the raw backdrop.

## Agent task prompt

```text
Build a complete Aurora page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Keep Aurora’s snowy dusk photograph, translucent blue-violet light layer and 38% / 30% / 26% columns with 3% gaps, not a replacement generic gradient. The feature list uses its existing translucent white gradient, 1px white rim and blur(9px); the separate chart uses blur(8px), inset highlights and a pink bloom. Retain white CTAs and sans display placement. The continuation uses its existing pale blue-violet surfaces and blur(14px) sections, stacking below 600px. Dark/variants follow existing surface/light selectors without inverting the photograph.

Full-page operations:
Start creating and Try it now open creation. Turn an idea into an editable local draft; assistant, simulated sync and the original Flexible export entry explain the corresponding features. Actual export saves the current draft as .txt; save/restore a page snapshot and return to editing. Label AI and cloud sync as local simulations.

Share one renderer between static covers, the detail experience and /style-scenes/glassmorphism/ (English /en/style-scenes/glassmorphism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** "Design an interface in Glassmorphism style: translucent frosted-glass panels that blur and reveal a gradient or photo beneath, edged with a thin white highlight."

**Design:** "Glassmorphism design spec: a vivid gradient or photo background (dark works best); panels filled with rgba(255,255,255,0.15) and backdrop-filter blur(16px); 1px rgba(255,255,255,0.35) rims with an optional inner top glow; radii 16px+; text on glass must keep 4.5:1 contrast. Dark mode deepens the backdrop and slightly raises transparency."

**Implementation:** Build a complete Aurora page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Keep Aurora’s snowy dusk photograph, translucent blue-violet light layer and 38% / 30% / 26% columns with 3% gaps, not a replacement generic gradient. The feature list uses its existing translucent white gradient, 1px white rim and blur(9px); the separate chart uses blur(8px), inset highlights and a pink bloom. Retain white CTAs and sans display placement. The continuation uses its existing pale blue-violet surfaces and blur(14px) sections, stacking below 600px. Dark/variants follow existing surface/light selectors without inverting the photograph.

Start creating and Try it now open creation. Turn an idea into an editable local draft; assistant, simulated sync and the original Flexible export entry explain the corresponding features. Actual export saves the current draft as .txt; save/restore a page snapshot and return to editing. Label AI and cloud sync as local simulations.

Share one renderer between static covers, the detail experience and /style-scenes/glassmorphism/ (English /en/style-scenes/glassmorphism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [skeuomorphism](/interface-atlas-web/en/styles/skeuomorphism) — Similar
- [aurora](/interface-atlas-web/en/styles/aurora) — Similar
- [minimalism](/interface-atlas-web/en/styles/minimalism) — Similar
- [card](/interface-atlas-web/en/components/card) — Affects
- [modal](/interface-atlas-web/en/components/modal) — Affects

## Sources

- [Apple HIG — Materials](https://developer.apple.com/design/human-interface-guidelines/materials)
- [MDN — backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)

---

JSON: `/interface-atlas-web/api/concept/styles/glassmorphism.json` · Site: /interface-atlas-web/en/styles/glassmorphism
