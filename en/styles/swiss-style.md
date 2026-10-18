# Swiss Style / 瑞士风格

> Styles · `id: swiss-style`

A visual language of objective grids and typography: strict mathematical grids, sans-serif faces, flush-left setting, black and white plus one accent (classically red). Order comes from whitespace and type scale. Decoration is noise; the goal is information read along the shortest path.

**Aliases:** 瑞士风格 · 瑞士平面设计 · 国际主义排版风格 · 网格排版风格 · 黑白红海报风 · Helvetica风格 · International Typographic Style · Swiss Design

**Category:** Style / Visual Language

## When to use

- Design systems, museums and institutions that need objective rigor
- Data, documentation and catalog content that is inherently structured
- Posters and covers that thrive on typographic tension

## When not to use

- Brands needing warmth, approachability or playfulness
- Unstructured content — a strict grid only amplifies the mess
- Reading contexts dominated by CJK and serif mixes — the idiom misfits

## Variants

- **Zurich School** (苏黎世学派) — Josef Müller-Brockmann's strict modular grid
- **Basel School** (巴塞尔学派) — Emil Ruder and Armin Hofmann — typographic rhythm first
- **New Swiss** (新瑞士) — Contemporary web-flavored Swiss with mono type and hairlines

## Design spec

- **typography:** Helvetica-style sans; bold uppercase headlines
- **color:** Paper grey, pure black, signal red #E63312
- **border:** 1px solid black column rules
- **shadow:** Zero shadows — strictly flat
- **spacing:** Strict modular grid, consistent gutters
- **motion:** Near-instant colour swaps within 100ms, no eased movement
- **states:** Hover switches to signal red or knock-out white; focus shows a visible 2px black solid frame; active inverts the block; disabled drops to grey; error uses signal red at a heavier weight

## Implementation

**CSS:** `grid` `font-family: Helvetica` `text-align: left` `letter-spacing` `border-top: 2px solid`

Grid first: a 12-column or simple 3×3 grid that every element snaps to — no arbitrary spacing. One sans family (Helvetica/Inter/Neue Haas); hierarchy from size jumps (e.g. 12/48px), not weight ramps; flush-left text, centered setting banned. Black, white, grey plus a single red that only marks indices and key rules. Separate with two rule weights (2px/1px).

## Agent task prompt

```text
Build a complete VERTEX page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Reuse .vertex-body with grid-template-columns: 49% 27% 24%: the IDEAS / BUILD / TOMORROW display, central copy and full #ff3511 poster. Use the existing Atlas Heavy (Anton) / Atlas Display / Impact condensed stack, 8.1cqw/.95 for the left display and 3.65cqw for poster type; retain Arial body copy and 1px column rules. Preserve the existing glyph-width treatment, not whole-page scaling. Continue with three case-study columns and red/black/paper-grey project art, stacking hero and cases below 600px. Do not introduce a 12-column 44px Helvetica section or restrict red to indices/rules; use the existing document dark/variants selectors.

Full-page operations:
Explore work opens selected projects; inspect NORTH / OPEN / FORM and return. The menu reaches WORK / STUDIO / APPROACH / CONTACT. Validate name, email and brief and show an editable local summary without sending email; the language control opens the translated page.

Share one renderer between static covers, the detail experience and /style-scenes/swiss-style/ (English /en/style-scenes/swiss-style/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** "Design an interface in Swiss Style: strict grid typography, sans-serif, flush-left, black-and-white with a single red accent, hierarchy from scale contrast and whitespace."

**Design:** "Swiss style spec: white ground, black Helvetica (or Inter); a 12-column grid everything aligns to; headings at 4x+ body size; one red #E30613 for indices and heavy rules only; generous modular whitespace (multiples of 8); no shadows, gradients or big radii. Dark mode: near-black ground, inverted text, red retained."

**Implementation:** Build a complete VERTEX page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Reuse .vertex-body with grid-template-columns: 49% 27% 24%: the IDEAS / BUILD / TOMORROW display, central copy and full #ff3511 poster. Use the existing Atlas Heavy (Anton) / Atlas Display / Impact condensed stack, 8.1cqw/.95 for the left display and 3.65cqw for poster type; retain Arial body copy and 1px column rules. Preserve the existing glyph-width treatment, not whole-page scaling. Continue with three case-study columns and red/black/paper-grey project art, stacking hero and cases below 600px. Do not introduce a 12-column 44px Helvetica section or restrict red to indices/rules; use the existing document dark/variants selectors.

Explore work opens selected projects; inspect NORTH / OPEN / FORM and return. The menu reaches WORK / STUDIO / APPROACH / CONTACT. Validate name, email and brief and show an editable local summary without sending email; the language control opens the translated page.

Share one renderer between static covers, the detail experience and /style-scenes/swiss-style/ (English /en/style-scenes/swiss-style/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [minimalism](/interface-atlas-web/en/styles/minimalism) — Similar
- [editorial](/interface-atlas-web/en/styles/editorial) — Similar
- [bauhaus](/interface-atlas-web/en/styles/bauhaus) — Similar
- [card](/interface-atlas-web/en/components/card) — Affects
- [table](/interface-atlas-web/en/components/table) — Affects

## Sources

- [Wikipedia — International Typographic Style](https://en.wikipedia.org/wiki/International_Typographic_Style)
- [Design reviewed — Swiss Style Principles](https://www.designreviewed.com/swiss-style/)

---

JSON: `/interface-atlas-web/api/concept/styles/swiss-style.json` · Site: /interface-atlas-web/en/styles/swiss-style
