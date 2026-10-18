# Bauhaus / 包豪斯

> Styles · `id: bauhaus`

A visual language of playing composition with geometry: circle, triangle and square in primary red, yellow and blue plus black, asymmetric yet balanced. Decoration obeys function — every plane and line carries structure, and a poster reads as a study in geometric relations.

**Aliases:** 包豪斯 · 包豪斯风格 · 几何构成主义 · 红黄蓝几何风 · 原色几何设计 · 圆三角方构成 · Bauhaus Design · Geometric Abstraction

**Category:** Style / Visual Language

## When to use

- Brands, posters and campaign pages that want bold graphic identity
- Education and creative tools — composing and making
- Hero visuals with few elements and high impact needs

## When not to use

- Data-dense UIs where geometric play hurts readability
- Long reading sessions — the visual noise accumulates
- Locked brand palettes that cannot yield to primaries

## Variants

- **Weimar** (魏玛时期) — Expressionist warmth under Itten's color theory
- **Dessau** (德绍时期) — The classic phase — rational geometry and primaries
- **Contemporary Bauhaus** (当代包豪斯) — Web-era constructivism with bolder whitespace and motion

## Design spec

- **typography:** Bauhaus geometric sans, uppercase
- **color:** Cream base; red #E23B2E, blue #21409A, yellow #F2B705
- **border:** Zero radius with thin black rules
- **shadow:** No shadows
- **spacing:** Compositional whitespace around geometry
- **motion:** Primary-colour swaps within 100ms, no eased movement
- **states:** Hover swaps to another primary; focus shows a visible 2px black frame; active inverts the block; disabled drops to greyscale; error uses red #E23B2E

## Implementation

**CSS:** `background: #D93025` `clip-path` `border-radius: 50%` `grid` `mix-blend-mode`

Give the primaries fixed roles: red as the hero plane, yellow the warm accent, blue the cool one, black for type and structural lines. Balance asymmetrically — one large form plus one or two structural lines and a small solid; shapes should touch or overlap, never float. Use border-radius: 50% and clip-path triangles instead of image assets. Whitespace is a compositional material too.

## Agent task prompt

```text
Build a complete BAUHAUS page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep BAUHAUS’ cream hero, red primary action and red/blue/yellow cards. Retain the original circle/triangle/rectangle panel with its local shadows and uppercase sans display, without imposing new negative-margin overlaps. The workshop uses a #eee5d7 canvas, 2px black rim and CSS shapes in #e23b2e, #21409a and #f2b705.

Reuse current preview.tokens: background #F4EFE6; foreground #141414; accent #E23B2E / #fff; card #FFFFFF; border #141414; radius 0px; font 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif; card shadow none.

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Full-page operations:
Enter the workshop, choose a red circle, blue square or yellow triangle and place up to 12 shapes on the canvas, then clear and restart. Form, Color and Workshop have matching content.

Share one renderer between static covers, the detail experience and /style-scenes/bauhaus/ (English /en/style-scenes/bauhaus/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** "Design an interface in Bauhaus style: compositions of circle, triangle and square in primary red, yellow and blue with black, asymmetrically balanced, form follows function."

**Design:** "Bauhaus spec: cream #F4EFE6 or black ground; hero geometry (at least two of red circle, yellow triangle, blue square) interlocking with type; black geometric sans, uppercase or heavy; no gradients, shadows or textures; asymmetric yet balanced. Dark mode on near-black with primaries lifted one step."

**Implementation:** Build a complete BAUHAUS page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep BAUHAUS’ cream hero, red primary action and red/blue/yellow cards. Retain the original circle/triangle/rectangle panel with its local shadows and uppercase sans display, without imposing new negative-margin overlaps. The workshop uses a #eee5d7 canvas, 2px black rim and CSS shapes in #e23b2e, #21409a and #f2b705.

Reuse current preview.tokens: background #F4EFE6; foreground #141414; accent #E23B2E / #fff; card #FFFFFF; border #141414; radius 0px; font 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif; card shadow none.

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Enter the workshop, choose a red circle, blue square or yellow triangle and place up to 12 shapes on the canvas, then clear and restart. Form, Color and Workshop have matching content.

Share one renderer between static covers, the detail experience and /style-scenes/bauhaus/ (English /en/style-scenes/bauhaus/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [swiss-style](/interface-atlas-web/en/styles/swiss-style) — Similar
- [memphis](/interface-atlas-web/en/styles/memphis) — Similar
- [flat-design](/interface-atlas-web/en/styles/flat-design) — Similar
- [button](/interface-atlas-web/en/components/button) — Affects
- [card](/interface-atlas-web/en/components/card) — Affects

## Sources

- [Bauhaus Dessau Foundation](https://www.bauhaus-dessau.de/en/)
- [Wikipedia — Bauhaus](https://en.wikipedia.org/wiki/Bauhaus)

---

JSON: `/interface-atlas-web/api/concept/styles/bauhaus.json` · Site: /interface-atlas-web/en/styles/bauhaus
