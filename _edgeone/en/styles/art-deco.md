# Art Deco / 装饰艺术

> Styles · `id: art-deco`

A decorative visual language built from geometry, symmetry, radiating lines and stepped forms. A contemporary web interpretation often pairs dark surfaces with metallic hairlines and display typography. Concentrate decoration in headings, frames and key visuals while keeping body text, forms and navigation straightforward.

**Aliases:** 盖茨比风格 · 黑金几何风 · 对称奢华风 · deco

**Category:** Style / Visual Language

## When to use

- Boutique hospitality, cultural events, dining and exhibitions.
- Brand introductions that call for elegance and ceremony.

## When not to use

- Avoid elaborate ornament in frequently used business tools.
- Fine gold lines cannot replace readable text and clear controls.

## Variants

- **Midnight gold** (午夜黑金) — Deep blue-black and warm gold create dramatic contrast.
- **Emerald gold** (翡翠金) — Deep green surfaces with symmetric geometry.

## Design spec

- **typography:** Display serif titles with tracked short labels.
- **color:** Midnight blue-black and warm gold; soft light body text.
- **border:** Hairlines, double frames and stepped outlines.
- **shadow:** Use borders for hierarchy instead of shadows.
- **spacing:** Axial alignment and balanced space; reduce ornament on mobile.
- **motion:** 200–300ms ease-out fades and border reveals; honour prefers-reduced-motion
- **states:** Hover brightens the gold rule; focus shows a visible double gold frame; active tightens the border; disabled fades to dim gold; error uses red-gold, staying axially symmetric

## Implementation

**CSS:** `border` `letter-spacing` `SVG path` `grid`

THE AURELIA pairs midnight blue-black, warm gold and deep green. Its right-hand SVG uses nested architectural arches, a diamond A monogram and a perspective floor, separate from semantic text. The evening result echoes the arched double frame. Use lighter serif headlines, tracked labels, 280ms entry and saved-plan border feedback, with full rectangular form targets.

## Agent task prompt

```text
Build a complete THE AURELIA page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

THE AURELIA pairs midnight blue-black, warm gold and deep green. Its right-hand SVG uses nested architectural arches, a diamond A monogram and a perspective floor, separate from semantic text. The evening result echoes the arched double frame. Use lighter serif headlines, tracked labels, 280ms entry and saved-plan border feedback, with full rectangular form targets.

Reuse current preview.tokens: background #151c24; foreground #e8ce92; accent #d7b571 / #151c24; card #25312e; border #a88b51; radius 0px; font Georgia, serif; card shadow none.

Retain the existing workspace dark and variant modes. style-signatures.css owns this brand’s hero, continuation and microinteractions; covers and full pages share one renderer.

Full-page operations:
Explore opens dinner interest. Enter a name, date and party size, save the matching result and return to edit. Collection and About show evening experiences and brand information; local interest is not a table reservation.

Share one renderer between static covers, the detail experience and /style-scenes/art-deco/ (English /en/style-scenes/art-deco/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** Design a brand page in Art Deco. A decorative visual language built from geometry, symmetry, radiating lines and stepped forms. A contemporary web interpretation often pairs dark surfaces with metallic hairlines and display typography. Concentrate decoration in headings, frames and key visuals while keeping body text, forms and navigation straightforward.

**Design:** Display serif titles with tracked short labels. Midnight blue-black and warm gold; soft light body text. Hairlines, double frames and stepped outlines. Use borders for hierarchy instead of shadows. Axial alignment and balanced space; reduce ornament on mobile.

**Implementation:** Build a complete THE AURELIA page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep THE AURELIA’s midnight blue-black, warm-gold display, deep-green cards, square gold rims and right-side geometry; do not add radiating/stepped SVG ornament that rewrites the composition. The evening result card retains centered text, a 1px inset gold outline and tracked short labels; forms keep full rectangular input targets.

Reuse current preview.tokens: background #151c24; foreground #e8ce92; accent #d7b571 / #151c24; card #25312e; border #a88b51; radius 0px; font Georgia, serif; card shadow none.

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Explore opens dinner interest. Enter a name, date and party size, save the matching result and return to edit. Collection and About show evening experiences and brand information; local interest is not a table reservation.

Share one renderer between static covers, the detail experience and /style-scenes/art-deco/ (English /en/style-scenes/art-deco/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [bauhaus](/en/styles/bauhaus) — Similar
- [editorial](/en/styles/editorial) — Similar
- [retro-futurism](/en/styles/retro-futurism) — Similar
- [button](/en/components/button) — Affects

## Sources

- [V&A — Art Deco](https://www.vam.ac.uk/collections/art-deco)

---

JSON: `/api/concept/styles/art-deco.json` · Site: /en/styles/art-deco
