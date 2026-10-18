# Corporate Memphis / 企业孟菲斯

> Styles · `id: corporate-memphis`

Flat abstract human figures and a limited solid palette as the friendly big-tech illustration look: small heads, exaggerated limbs, no facial detail, purple-yellow-peach blocks in rounded compositions. Cheap to mass-produce — and therefore highly homogenous.

**Aliases:** 企业孟菲斯 · 大厂插画风 · 蓝色小人插画 · 长手长脚扁平小人 · 科技公司插画风 · Alegria · Big Tech illustration · flat blob people

**Category:** Style / Visual Language

## When to use

- SaaS empty states, onboarding and marketing spots that need non-threatening friendliness
- Illustration systems produced by many hands that must stay consistent
- Abstract values of inclusion, collaboration and access

## When not to use

- Brands that need distinction — this look drowns you in big-tech sameness
- Premium, craft or serious subjects that flat figures cannot carry
- Explaining concrete product mechanics — abstract figures cannot

## Variants

- **Memphis people** (经典人形) — Small-headed long-limbed figures in exaggerated poses
- **Abstract shapes** (抽象色块) — No figures — rounded rectangles, dots and arcs only
- **Gradient flat** (渐变扁平) — Flat shapes washed with two-stop gradients

## Design spec

- **typography:** Geometric sans at medium weight, airy leading
- **color:** Purple #7B61FF, yellow #FAD141, peach #F48196, non-realistic skin
- **border:** No outlines — fills meet directly
- **shadow:** No shadows, flat fills only
- **spacing:** Airy padding, illustration and copy in split columns
- **motion:** 150–200ms flat fill colour swaps, no movement
- **states:** Hover switches to an adjacent fill; focus shows a visible 2px violet frame; active uses a darker flat fill; disabled reduces opacity; error uses a peach fill

## Implementation

**CSS:** `border-radius: 999px` `background: #7B61FF` `clip-path: ellipse()` `fill (SVG)` `no box-shadow`

Build illustrations from SVG or solid blocks: circle heads, rounded-rectangle torsos, limbs as thick round-cap strokes. Lock the palette to 3–5 colors; skin is blue, purple or green for abstract inclusivity. No outlines, gradients or shadows — flat fills only. UI follows the same source: pill buttons, borderless cards, airy padding. Dark mode swaps the ground but keeps the same saturated set.

## Agent task prompt

```text
Build a complete alegria page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Preserve alegria’s original .gs-tasko-grid: intro/avatars, real calendar/task entry, green focus statistics, and notes/motivation, not a replacement figure illustration occupying 40–60% of the hero. Keep #FFF8F0, #7B61FF actions, white cards, #E8DFF5 rims, the 24px token radius and Poppins/Nunito fallback stack; retain the existing stats/motivation gradients. The calendar uses a fixed six-week grid and violet selected day; existing container rules pair columns below 1020px and stack below 600px. Continue real task/note lists rather than substituting abstract figures.

Reuse current preview.tokens: background #FFF8F0; foreground #2B2140; accent #7B61FF / #FFFFFF; card #FFFFFF; border #E8DFF5; radius 24px; font Poppins, Nunito, Helvetica Neue, PingFang SC, sans-serif; card shadow none.

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Full-page operations:
Try it free opens the collaboration workspace. Operate the original hero calendar’s previous/next month and date controls, including year boundaries and date selection; the fixed initial date is 2024-01-17. The original Tasks 5 and Notes 12 entries open five actual seeded tasks and twelve readable notes. Create an owner-assigned task for the selected date; complete/uncomplete tasks to update pending counts, progress and the selected-date summary. Add, read and delete notes with synchronized hero note totals. In-page reset or reload restores 2024-01-17, five pending tasks and twelve notes. Product, Customers, Pricing, Careers and Log in reveal content without real accounts or team invitations.

Share one renderer between static covers, the detail experience and /style-scenes/corporate-memphis/ (English /en/style-scenes/corporate-memphis/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** Design an interface in Corporate Memphis style: flat abstract figures with exaggerated limbs, a limited purple-yellow-peach palette and rounded solid shapes.

**Design:** "Corporate Memphis spec: primary purple #7B61FF, yellow #FAD141, peach #F48196, teal accent #14C88C, non-realistic skin like #86CCCA; illustrations strictly flat with no strokes or shadows; geometric sans (Poppins/Nunito family) at medium weight; full-pill buttons and borderless cards separated by fill; airy whitespace with illustration taking 40–60% of the hero; dark mode on deep purple-black with saturation kept."

**Implementation:** Build a complete alegria page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Preserve alegria’s original .gs-tasko-grid: intro/avatars, real calendar/task entry, green focus statistics, and notes/motivation, not a replacement figure illustration occupying 40–60% of the hero. Keep #FFF8F0, #7B61FF actions, white cards, #E8DFF5 rims, the 24px token radius and Poppins/Nunito fallback stack; retain the existing stats/motivation gradients. The calendar uses a fixed six-week grid and violet selected day; existing container rules pair columns below 1020px and stack below 600px. Continue real task/note lists rather than substituting abstract figures.

Reuse current preview.tokens: background #FFF8F0; foreground #2B2140; accent #7B61FF / #FFFFFF; card #FFFFFF; border #E8DFF5; radius 24px; font Poppins, Nunito, Helvetica Neue, PingFang SC, sans-serif; card shadow none.

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Try it free opens the collaboration workspace. Operate the original hero calendar’s previous/next month and date controls, including year boundaries and date selection; the fixed initial date is 2024-01-17. The original Tasks 5 and Notes 12 entries open five actual seeded tasks and twelve readable notes. Create an owner-assigned task for the selected date; complete/uncomplete tasks to update pending counts, progress and the selected-date summary. Add, read and delete notes with synchronized hero note totals. In-page reset or reload restores 2024-01-17, five pending tasks and twelve notes. Product, Customers, Pricing, Careers and Log in reveal content without real accounts or team invitations.

Share one renderer between static covers, the detail experience and /style-scenes/corporate-memphis/ (English /en/style-scenes/corporate-memphis/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [flat-design](/interface-atlas-web/en/styles/flat-design) — Similar
- [memphis](/interface-atlas-web/en/styles/memphis) — Alternative
- [organic](/interface-atlas-web/en/styles/organic) — Alternative
- [empty-state](/interface-atlas-web/en/patterns/empty-state) — Used with
- [onboarding-tour](/interface-atlas-web/en/patterns/onboarding-tour) — Used with
- [card](/interface-atlas-web/en/components/card) — Affects

## Confusable

- [memphis](/interface-atlas-web/en/styles/memphis) — Corporate Memphis is post-2017 flat figure illustration; Memphis is the 1980s Milano dots-and-squiggles movement.

## Sources

- [Wikipedia — Corporate Memphis](https://en.wikipedia.org/wiki/Corporate_Memphis)
- [Wikipedia — Flat design](https://en.wikipedia.org/wiki/Flat_design)

---

JSON: `/interface-atlas-web/api/concept/styles/corporate-memphis.json` · Site: /interface-atlas-web/en/styles/corporate-memphis
