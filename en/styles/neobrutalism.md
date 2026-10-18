# Neobrutalism / 新粗野主义

> Styles · `id: neobrutalism`

A loud visual language of thick black outlines, saturated clashing colors and hard offset shadows: elements sit on the page like bold stickers, paired with chunky radii and punchy badges. It deliberately rejects polish and subtlety, trading refinement for instant recognition and a rebellious, playful voice.

**Aliases:** 新粗野主义 · 粗野风 · 大黑边风格 · 硬阴影风格 · 新残酷主义 · Neo-brutalism · Brutalist Web Design

**Category:** Style / Visual Language

## When to use

- Youth-oriented brands, campaigns and developer-tool landing pages
- Standing out with strong personality among polished sites
- Marketing pages, portfolios and creative communities

## When not to use

- Finance, healthcare or enterprise products that must feel trustworthy
- Long-session productivity tools — loud decoration fatigues
- Dense content or data UIs where borders and color eat information space

## Variants

- **Classic Hard Shadow** (经典硬阴影) — Cream background, black borders, offset solid shadows
- **Candy** (糖果色) — Saturated pink, purple and yellow blocks colliding
- **Grunge** (粗粝噪点) — Adds noise, tilted elements and doodles

## Design spec

- **typography:** Ultra-bold sans, all caps
- **color:** Cream base, pure black, orange #FF6B00
- **border:** 3px solid black borders
- **shadow:** 5px 5px 0 hard offset shadows
- **spacing:** Zero radius, tight stacking
- **motion:** Roughly 100ms hard positional press, no easing
- **states:** Hover shifts into the hard shadow; focus shows a visible 3px black frame; active presses down and removes the shadow; disabled greys out without shifting; error uses a harsh orange-red border

## Implementation

**CSS:** `border: 2-4px solid #000` `box-shadow: 4px 4px 0 #000` `border-radius: 8-16px` `background: saturate()` `transition`

The style hinges on three traits: thick black borders (2–4px), hard offset shadows (e.g. 4px 4px 0 #000 — never blurred) and cheerful radii. Use saturated candy colors and clash them boldly. Interactions shine: shift the element on hover, then zero the shadow on active as if pressed into paper. Add noise with SVG feTurbulence or repeating gradients.

## Agent task prompt

```text
Build a complete PlayLab page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Preserve PlayLab’s 47% / 53% copy/stacked-window composition, #ffff13 title highlights, square #f4a1d1 CTA, yellow navigation CTA, #4e96f9 blue and #3bbc8b green blocks. Retain 2px black rims, unblurred hard shadows, tilted idea windows, smile and actionable checklist rather than a 10px-rounded orange BRUTAL* template. The continuation keeps pink/blue/green case buttons and heavy rules; below 600px flow the copy and 360px-high window artwork separately with usable checklist controls.

Full-page operations:
Let’s make it and Start a project open a brief with an editable local summary. Toggle Design / Develop / Create independently; Work, Services and About reach portfolio, services and team content.

Share one renderer between static covers, the detail experience and /style-scenes/neobrutalism/ (English /en/style-scenes/neobrutalism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** "Design an interface in Neobrutalism style: thick black borders, saturated clashing colors and hard offset shadows — elements punchy as stickers."

**Design:** "Neobrutalism design spec: cream background (#FDF2D8); every element gets a 2–3px pure black border; shadows are solid offsets only (4px 4px 0 #000), never blurred; ~10px radii; saturated primary colors (#FF5D5D / #FFC900 / #4D9FFF) that clash boldly; heavy uppercase headings; buttons swallow their shadow when pressed. Dark mode keeps a near-black base with the bright colors intact."

**Implementation:** Build a complete PlayLab page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Preserve PlayLab’s 47% / 53% copy/stacked-window composition, #ffff13 title highlights, square #f4a1d1 CTA, yellow navigation CTA, #4e96f9 blue and #3bbc8b green blocks. Retain 2px black rims, unblurred hard shadows, tilted idea windows, smile and actionable checklist rather than a 10px-rounded orange BRUTAL* template. The continuation keeps pink/blue/green case buttons and heavy rules; below 600px flow the copy and 360px-high window artwork separately with usable checklist controls.

Let’s make it and Start a project open a brief with an editable local summary. Toggle Design / Develop / Create independently; Work, Services and About reach portfolio, services and team content.

Share one renderer between static covers, the detail experience and /style-scenes/neobrutalism/ (English /en/style-scenes/neobrutalism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [bauhaus](/interface-atlas-web/en/styles/bauhaus) — Similar
- [memphis](/interface-atlas-web/en/styles/memphis) — Similar
- [y2k](/interface-atlas-web/en/styles/y2k) — Similar
- [button](/interface-atlas-web/en/components/button) — Affects
- [card](/interface-atlas-web/en/components/card) — Affects

## Sources

- [Gumroad — Neobrutalism 代表案例](https://gumroad.com/)
- [Wikipedia — Brutalist Architecture（风格词源）](https://en.wikipedia.org/wiki/Brutalist_architecture)

---

JSON: `/interface-atlas-web/api/concept/styles/neobrutalism.json` · Site: /interface-atlas-web/en/styles/neobrutalism
