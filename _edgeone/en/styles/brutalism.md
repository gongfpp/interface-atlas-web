# Brutalism / 粗野主义

> Styles · `id: brutalism`

Raw structure, oversized type and blunt contrast as an anti-polish web look. Monochrome cuts, visible grids and hard square edges keep the honesty of default HTML. Information hits the reader straight on; radii, gradients and decorative refinement are refused.

**Aliases:** 粗野主义 · 野兽派网页 · 那种很糙的黑白网页 · 超大字不修边幅 · 原始网页风 · brutalism · web brutalism · brutalist web design

**Category:** Style / Visual Language

## When to use

- Designer portfolios, indie publishing and art institutions where attitude is the content
- Standing out among polished sites through deliberate unpolish
- Low-density manifesto or campaign pages where type is the poster

## When not to use

- Finance, healthcare and civic tools that must feel trustworthy
- Long forms and dense data backends — blunt contrast fatigues reading
- Brands that must feel refined, premium or caring

## Variants

- **Classic brutalism** (经典粗野) — Monochrome cuts with one harsh accent, default-browser honesty kept
- **Soft brutalism** (软粗野) — Raw contrast and oversized type kept, radii and whitespace loosened
- **Typographic brutalism** (排印粗野) — Size, weight and leading carry everything — almost no graphics

## Design spec

- **typography:** Ultra-bold sans or mono with cliff-edge size contrast
- **color:** Paper white, pure black and one harsh orange-red #FF3B00
- **border:** 2px solid square edges, radius always 0
- **shadow:** No shadows; inverted blocks or thick strokes instead
- **spacing:** Hard cuts on the grid, whitespace in big blunt blocks
- **motion:** Near-instant, no transition
- **states:** Hover inverts immediately; focus shows a 2px solid black frame; active switches to harsh orange-red #FF3B00; disabled drops to 50% grey; error uses a solid #FF3B00 block

## Implementation

**CSS:** `font-size: clamp(2.5rem, 8vw, 6rem)` `border-radius: 0` `border: 2px solid currentColor` `background-image: repeating-linear-gradient()` `font-family: system-ui, monospace`

The point is unpolish: radii stay 0, shadows are replaced by hard borders, type is system or monospace. A repeating-linear-gradient fakes the visible grid — no need for real CSS Grid. Keep exactly one harsh accent (classically #FF3B00); everything else is black and white. Dark mode inverts the value relationship but keeps the same blunt cuts. Never lower text contrast or scramble reading order just to look brutalist.

## Agent task prompt

```text
Build a complete STUDIO VOID page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Continue STUDIO VOID’s 40% / 28% / 29% columns with 1.5% gaps: Atlas Heavy (Anton) condensed display, studio copy and monochrome concrete photograph. Keep 8.9cqw/.95 display type and the navigation’s 2px black bottom rule. The default is direct near-white/black contrast with a square black CTA, not an orange-red background-grid template. Cases retain their black/white panels and heavy display; stack below 600px while preserving the photograph and overlaid white lettering. Variants may use the existing #c52f1b display accent; dark mode does not invert photographs.

Full-page operations:
View our work opens the project index; inspect a project and return. WORK / ABOUT / NEWS / CONTACT reveal matching content; the contact form validates and shows a local summary without sending email.

Share one renderer between static covers, the detail experience and /style-scenes/brutalism/ (English /en/style-scenes/brutalism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** Design an interface in Brutalism style: monochrome cuts, oversized type, visible grid, hard square edges and one harsh accent — deliberately anti-polish.

**Design:** "Brutalism spec: paper white #F5F5F0 or near-black ground; pure black #0A0A0A body; exactly one harsh accent #FF3B00; zero radii everywhere; headings at clamp(2.5rem, 8vw, 6rem) in ultra-bold sans or mono; 1px visible grid rules; buttons as 2px outline or solid inverted blocks, hover just inverts colors; dark mode flips to near-black with paper-white type, accent unchanged."

**Implementation:** Build a complete STUDIO VOID page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Continue STUDIO VOID’s 40% / 28% / 29% columns with 1.5% gaps: Atlas Heavy (Anton) condensed display, studio copy and monochrome concrete photograph. Keep 8.9cqw/.95 display type and the navigation’s 2px black bottom rule. The default is direct near-white/black contrast with a square black CTA, not an orange-red background-grid template. Cases retain their black/white panels and heavy display; stack below 600px while preserving the photograph and overlaid white lettering. Variants may use the existing #c52f1b display accent; dark mode does not invert photographs.

View our work opens the project index; inspect a project and return. WORK / ABOUT / NEWS / CONTACT reveal matching content; the contact form validates and shows a local summary without sending email.

Share one renderer between static covers, the detail experience and /style-scenes/brutalism/ (English /en/style-scenes/brutalism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [neobrutalism](/en/styles/neobrutalism) — Similar
- [minimalism](/en/styles/minimalism) — Alternative
- [swiss-style](/en/styles/swiss-style) — Similar
- [button](/en/components/button) — Affects
- [card](/en/components/card) — Affects
- [navbar](/en/components/navbar) — Affects

## Confusable

- [neobrutalism](/en/styles/neobrutalism) — Brutalism is raw, unstyled web in monochrome; neobrutalism is candy stickers with thick borders and hard shadows.

## Sources

- [Wikipedia — Brutalist architecture](https://en.wikipedia.org/wiki/Brutalist_architecture)
- [NN/g — Brutalism and Antidesign](https://www.nngroup.com/articles/brutalism-antidesign)

---

JSON: `/api/concept/styles/brutalism.json` · Site: /en/styles/brutalism
