# Skeuomorphism / 拟物化

> Styles · `id: skeuomorphism`

A visual language that borrows real-world materials and physical forms for digital controls: leather stitching, wood grain, brushed metal, glass gloss. Buttons look pressable, switches look like levers — highlights, shadows and bevels make "what it looks like" teach "how it works".

**Aliases:** 拟物化 · 拟物风格 · 仿真质感设计 · 苹果早期那种真皮缝线效果 · 带纹理立体感的老式UI · 皮革木纹质感界面 · Realistic UI · Skeuomorphic Design

**Category:** Style / Visual Language

## When to use

- Unfamiliar users who learn controls from real-world metaphors
- Brands seeking vintage, nostalgic or crafted-premium feel
- Playful physical interactions — flipping, pressing, turning

## When not to use

- Dense productivity tools where decoration crowds out content
- Multi-platform products — heavy textures are costly to maintain
- Minimal brand contexts where skeuomorphism reads as dated

## Variants

- **Leather** (皮革缝线) — Leather grain with stitching — early iOS Calendar and Notes
- **Brushed Metal** (拉丝金属) — Metal gradients with beveled highlights — classic iTunes
- **Paper** (纸质) — Paper corners and embossed type — the iBooks shelf

## Design spec

- **typography:** System sans close to print
- **color:** Aluminium gradients with blue highlights
- **border:** Metal outlines with inner highlight lines
- **shadow:** Outer shadows plus inset highlights
- **spacing:** Padding mimics physical proportions
- **motion:** 150–200ms pressed-feel transitions mimicking a physical rebound
- **states:** Hover deepens the highlight; focus shows a visible blue glow outline; active presses via inset shadow; disabled lowers contrast; error uses a red highlight

## Implementation

**CSS:** `background-image: url(texture)` `box-shadow: inset 0 1px 0` `linear-gradient` `border-radius` `text-shadow`

Three depth layers: a material base (texture image or a fine gradient), a 1px inset top highlight for the lit upper edge, and an outer bottom shadow for thickness. On press, flip the inset shadow to feel pushed in. Keep gradient bands narrow (3–8% luminance) or it reads as cheap plastic. Emboss text with a 1px dark shadow plus a 1px same-hue highlight. Dark mode darkens the material but keeps the highlight structure.

## Agent task prompt

```text
Build a complete Daily Goods page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Keep Daily Goods’ original camera/wood/book/plant photograph, occupying the right 74% on desktop, with #e7ddcd warmth and the left cream overlay supporting copy. Use Georgia for the brand and the existing bold sans copy; retain the #9b6c36→#775025 brown CTA gradient, inset highlight, thin rim and .25cqw radius, plus the rotated warm-paper note and shadow. Continue with cream product cards and brown material buttons; on narrow screens flow copy, the 320px-high photograph and note in sequence. Do not replace the photograph with procedural texture or rebuild an aluminium-grey note tool.

Full-page operations:
Explore the collection and 01/02/03 show matching objects. Search including no matches, inspect an object and add it to the bag, adjust/remove items and inspect totals. Objects, Stories, Craft and Stores have matching content; checkout creates no real order.

Share one renderer between static covers, the detail experience and /style-scenes/skeuomorphism/ (English /en/style-scenes/skeuomorphism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** "Design an interface in Skeuomorphism style: controls rendered in real materials — leather, metal, wood — with pressable dimensional buttons and switch-like toggles."

**Design:** "Skeuomorphism design spec: leather-grain or wood texture backgrounds; buttons with a narrow linear gradient (under 8% luminance swing), 1px inset top highlight and a bottom drop shadow; 6–10px radii; embossed type (1px dark shadow + 1px highlight); dashed borders for stitching; pressed state flips the inset shadow and shifts down 1px. Dark mode drops material luminance ~20% and keeps highlights."

**Implementation:** Build a complete Daily Goods page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Keep Daily Goods’ original camera/wood/book/plant photograph, occupying the right 74% on desktop, with #e7ddcd warmth and the left cream overlay supporting copy. Use Georgia for the brand and the existing bold sans copy; retain the #9b6c36→#775025 brown CTA gradient, inset highlight, thin rim and .25cqw radius, plus the rotated warm-paper note and shadow. Continue with cream product cards and brown material buttons; on narrow screens flow copy, the 320px-high photograph and note in sequence. Do not replace the photograph with procedural texture or rebuild an aluminium-grey note tool.

Explore the collection and 01/02/03 show matching objects. Search including no matches, inspect an object and add it to the bag, adjust/remove items and inspect totals. Objects, Stories, Craft and Stores have matching content; checkout creates no real order.

Share one renderer between static covers, the detail experience and /style-scenes/skeuomorphism/ (English /en/style-scenes/skeuomorphism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [glassmorphism](/en/styles/glassmorphism) — Similar
- [flat-design](/en/styles/flat-design) — Similar
- [retro-futurism](/en/styles/retro-futurism) — Similar
- [button](/en/components/button) — Affects
- [switch](/en/components/switch) — Affects

## Sources

- [Nielsen Norman Group — Flat Design and Skeuomorphism](https://www.nngroup.com/articles/death-of-flat-design/)
- [Apple HIG — Materials](https://developer.apple.com/design/human-interface-guidelines/materials)

---

JSON: `/api/concept/styles/skeuomorphism.json` · Site: /en/styles/skeuomorphism
