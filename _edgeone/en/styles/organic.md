# Organic / 有机自然

> Styles · `id: organic`

A visual language of natural shapes, warm materials and muted earth tones. Soft contours and generous spacing create an unhurried rhythm while text and controls keep clear boundaries. It suits lifestyle and sustainability themes, provided organic decoration supports content without weakening readability or interaction.

**Aliases:** 自然系设计 · 植物感网页 · 大地色风格 · organic design

**Category:** Style / Visual Language

## When to use

- Home, lifestyle, gardening and craft brands.
- Content that calls for a warm, calm and comfortable atmosphere.

## When not to use

- Avoid elaborate organic decoration in dense transactional interfaces.
- Avoid pale text over textured surfaces.

## Variants

- **Earthy** (大地色) — Cream, clay and moss form a muted palette.
- **Botanical** (植物形态) — Leaf contours and arched scenes form a focal point.

## Design spec

- **typography:** Serif headlines with clear sans-serif body text.
- **color:** Cream, moss and clay; deep green for body text.
- **border:** Soft radii and occasional arches; keep controls predictable.
- **shadow:** Gentle contact shadows without strong glow.
- **spacing:** Generous whitespace and leading, stacked on narrow screens.
- **motion:** 250–350ms ease-out organic growth and fades; honour prefers-reduced-motion
- **states:** Hover expands slightly and deepens the moss green; focus shows a visible green frame; active contracts one pixel; disabled fades to grey-green; error uses clay red

## Implementation

**CSS:** `border-radius` `linear-gradient()` `grid`

Unify cream and deep green with tokens. Use curves in display areas while keeping predictable button targets. CSS shapes can evoke plants and ceramics; mark decoration aria-hidden. Prioritize text contrast over a muted aesthetic.

## Agent task prompt

```text
Build a complete mori / 森 page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep mori / 森’s cream/deep-green/moss hierarchy, Georgia serif, 24px radii and existing CSS life-scene panel rather than replacing it with plant photography or sans body type. Products retain CSS linen/ceramic/wood-tray objects on arched grounds, with woodgrain only on the tray. Selection and totals remain readable content with predictable control targets.

Reuse current preview.tokens: background #f1efe5; foreground #29392b; accent #526445 / #fff; card #e3e5d6; border #b7bd9f; radius 24px; font Georgia, serif; card shadow none.

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Full-page operations:
Explore opens the natural-object collection. Inspect three products, add/remove selections and update the total. Collection and About reach objects and brand philosophy without submitting orders.

Share one renderer between static covers, the detail experience and /style-scenes/organic/ (English /en/style-scenes/organic/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** Design a brand page in Organic. A visual language of natural shapes, warm materials and muted earth tones. Soft contours and generous spacing create an unhurried rhythm while text and controls keep clear boundaries. It suits lifestyle and sustainability themes, provided organic decoration supports content without weakening readability or interaction.

**Design:** Serif headlines with clear sans-serif body text. Cream, moss and clay; deep green for body text. Soft radii and occasional arches; keep controls predictable. Gentle contact shadows without strong glow. Generous whitespace and leading, stacked on narrow screens.

**Implementation:** Build a complete mori / 森 page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep mori / 森’s cream/deep-green/moss hierarchy, Georgia serif, 24px radii and existing CSS life-scene panel rather than replacing it with plant photography or sans body type. Products retain CSS linen/ceramic/wood-tray objects on arched grounds, with woodgrain only on the tray. Selection and totals remain readable content with predictable control targets.

Reuse current preview.tokens: background #f1efe5; foreground #29392b; accent #526445 / #fff; card #e3e5d6; border #b7bd9f; radius 24px; font Georgia, serif; card shadow none.

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Explore opens the natural-object collection. Inspect three products, add/remove selections and update the total. Collection and About reach objects and brand philosophy without submitting orders.

Share one renderer between static covers, the detail experience and /style-scenes/organic/ (English /en/style-scenes/organic/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [minimalism](/en/styles/minimalism) — Similar
- [editorial](/en/styles/editorial) — Similar
- [claymorphism](/en/styles/claymorphism) — Similar
- [button](/en/components/button) — Affects

## Sources

- [V&A — Arts and Crafts](https://www.vam.ac.uk/articles/arts-and-crafts-an-introduction)

---

JSON: `/api/concept/styles/organic.json` · Site: /en/styles/organic
