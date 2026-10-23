# Editorial / 杂志编辑风

> Styles · `id: editorial`

A visual language that lays out the page like a magazine spread: serif display headings, drop caps, hairline column rules, issue numbering and generous margins, with imagery woven into a page-turning rhythm. Black, white and grey grounds, serif-and-sans pairing — the layout tells the story, not ornament.

**Aliases:** 杂志编辑风 · 杂志风 · 编辑排版风 · 报刊风格 · 首字下沉那种排版 · 衬线大标题风 · Magazine Layout · Editorial Design

**Category:** Style / Visual Language

## When to use

- Content products — long-form, digital magazines, portfolios, brand journals
- Brands that want cultural gravitas and respect for the written word
- Narrative pages with a clear image-text hierarchy

## When not to use

- Task-oriented tools where efficiency beats reading experience
- Dashboards and lists meant for rapid scanning
- Teams without typographic skill — bad serif work exposes itself

## Variants

- **Broadsheet** (大报风) — Newspaper columns, dense setting, B&W photography, hairline rules
- **Glossy Magazine** (光面杂志) — Big imagery, display type, generous whitespace — fashion monthly
- **Digital Editorial** (数字编辑风) — Web-adapted — serif display with modern body typography

## Design spec

- **typography:** Italic serif headlines with serif body
- **color:** Warm paper #FBF9F4, ink text, brown accents
- **border:** Hairline rules instead of card boxes
- **shadow:** Soft shadow on photo cards only
- **spacing:** Multi-column layout, airy leading
- **motion:** 150–200ms fades and underline transitions, restrained, no bounce
- **states:** Hover reveals an underline and turns brown; focus shows a visible ink dotted frame; active sinks one pixel; disabled fades to light grey; error uses a brown accent with an italic note

## Implementation

**CSS:** `font-family: Georgia` `font-variant-numeric: oldstyle-nums` `column-count` `border-top: 1px solid` `text-indent`

Type carries it: high-contrast serif display (Playfair/Georgia), serif or humanist sans body at 60–75 characters per line; drop caps float over 3–4 lines; separate with 1px hairlines and whitespace plus small-caps eyebrows at 0.15em tracking; oldstyle numerals for numbering. Prefer black-and-white or duotone imagery; dark mode uses warm black to keep the paper feel.

## Agent task prompt

```text
Build a complete The Paper Room page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Continue .paper-body’s 34% / 36% / 26% columns with 2% gaps: Georgia italic display, the morning-life photograph and three sidebar stories. Retain #fdfdf9 warm paper, hairline separators and existing image colors/local filters rather than forcing every photograph into monochrome. Keep the reading dialog’s Georgia 18px/1.9 and italic lede, with the existing four-story category data; stack copy, photograph and stories below 600px. Continue the existing photos into dated index rows and the reading sheet; use a restrained drop cap, hairline bookmark state and 380ms sheet entrance. Preserve the four stories and their actions.

Full-page operations:
Read the journal opens the index. Read Morning in the mountains, The art of wandering, A slower weekend and An afternoon with a potter, save/unsave and return. Search filters four stories and reports counts; clear a no-match query to restore them. Journal, Living, Travel, People and About reveal content.

Share one renderer between static covers, the detail experience and /style-scenes/editorial/ (English /en/style-scenes/editorial/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** "Design an interface in Editorial style: serif display headings, drop caps, hairline rules and issue numbering — lay out content like a magazine spread."

**Design:** "Editorial spec: paper white #FAF8F4 ground, near-black #1A1816 text; high-contrast serif headings 36px+, small-caps eyebrows with wide tracking; serif body 17px/1.75 at 60–75 characters; 3-line drop caps; 1px hairlines with Roman or oldstyle numerals; B&W or duotone imagery. Dark mode: warm black #17150F with cream text."

**Implementation:** Build a complete The Paper Room page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Continue .paper-body’s 34% / 36% / 26% columns with 2% gaps: Georgia italic display, the morning-life photograph and three sidebar stories. Retain #fdfdf9 warm paper, hairline separators and existing image colors/local filters rather than forcing every photograph into monochrome. Keep the reading dialog’s Georgia 18px/1.9 and italic lede, with the existing four-story category data; stack copy, photograph and stories below 600px. Continue the existing photos into dated index rows and the reading sheet; use a restrained drop cap, hairline bookmark state and 380ms sheet entrance. Preserve the four stories and their actions.

Read the journal opens the index. Read Morning in the mountains, The art of wandering, A slower weekend and An afternoon with a potter, save/unsave and return. Search filters four stories and reports counts; clear a no-match query to restore them. Journal, Living, Travel, People and About reveal content.

Share one renderer between static covers, the detail experience and /style-scenes/editorial/ (English /en/style-scenes/editorial/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [swiss-style](/interface-atlas-web/en/styles/swiss-style) — Similar
- [minimalism](/interface-atlas-web/en/styles/minimalism) — Similar
- [documentation](/interface-atlas-web/en/pages/documentation) — Used with
- [card](/interface-atlas-web/en/components/card) — Affects
- [navbar](/interface-atlas-web/en/components/navbar) — Affects

## Sources

- [Butterick's Practical Typography](https://practicaltypography.com/)
- [Wikipedia — Editorial design](https://en.wikipedia.org/wiki/Editorial_design)

---

JSON: `/interface-atlas-web/api/concept/styles/editorial.json` · Site: /interface-atlas-web/en/styles/editorial
