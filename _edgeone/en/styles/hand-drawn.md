# Hand-drawn UI / 手绘涂鸦

> Styles · `id: hand-drawn`

Wobbly strokes, skewed borders, paper texture and marker highlights as a human-made interface look. Circles stay imperfect, outlines tremble, icons read as quick sketches. Human warmth against machine-perfect UI.

**Aliases:** 手绘风 · 涂鸦风格 · 手绘描边 · 歪歪扭扭的线 · 纸感手写界面 · hand-drawn UI · doodle UI · sketchy UI

**Category:** Style / Visual Language

## When to use

- Independent creators, craft brands and education products needing warmth
- Empty states, coach marks and easter eggs where doodles season the dish
- Breaking the over-smooth sameness of AI-generated UI

## When not to use

- Finance, legal and medical UIs that must read precise and authoritative
- Dense tables and dashboards — wobbly lines wreck numeric alignment
- Long reading areas where texture and highlights pile up and hurt

## Variants

- **Marker sketch** (马克笔草图) — Thick marker strokes with highlighter swipes under the type
- **Notebook doodle** (笔记本涂鸦) — Ruled paper, ballpoint thin lines, corner doodles
- **Sticker chaos** (贴纸乱贴) — Tilted doodle stickers stacked like a binder cover

## Design spec

- **typography:** Hand-feel sans or rounded face, headings slightly tilted
- **color:** Paper #FAF6EE, ink #2B2B2B, highlight yellow #FFE566
- **border:** 2px wobbly strokes with asymmetric radii
- **shadow:** Barely-there paper shadows, hugging the surface
- **spacing:** Casual misalignment and slight tilts
- **motion:** 150–250ms slight wobbly offsets with a hint of bounce; honour prefers-reduced-motion
- **states:** Hover tilts and deepens the wobbly stroke; focus shows a visible 2px hand-drawn frame; active flattens the wobble; disabled desaturates but keeps the stroke; error looks like a red pen correction

## Implementation

**CSS:** `border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px` `border: 2px solid #2B2B2B` `background: linear-gradient() #FFE566 高亮` `transform: rotate(-1deg)` `box-shadow: 2px 2px 0 rgba(0,0,0,0.08)`

Fake wobbly borders with asymmetric border-radius values — no SVG filter required. For more tremor use SVG feTurbulence displacement, but keep it static under prefers-reduced-motion. Marker highlight is a translucent yellow linear-gradient band behind the lower 60% of the text. Paper texture is low-opacity noise or repeating horizontal rules under 0.12 opacity. Tilt two to four elements per page; more reads unfinished.

## Agent task prompt

```text
Build a complete scribble& page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep scribble&’s paper ground, original copy and handwritten font fallbacks; use deep ochre #A24A26 for the text CTA so it remains legible on paper. Replace the generic CSS landscape with an original SVG of a hand-drawn flower, ruled note, tape and pencil. Use 1.1 / 1.5 / .65 desktop columns, then stack in reading order on phones with three vertical material notes. Extend the 32px notebook ruling with a double-line spine and tape while keeping form hit areas regular.

Reuse current preview.tokens: background #FAF6EE; foreground #2B2B2B; accent #FF8A65 / #2B2B2B; card #FFFDF7; border #2B2B2B; radius 14px 6px 18px 8px; font Comic Sans MS, Chalkboard SE, Marker Felt, PingFang SC, sans-serif; card shadow 2px 3px 0 rgba(43,43,43,0.08).

Reuse existing workspace tokens for dark and variants. Share StyleSignatureArt and style-signatures.css between cover and page, preserving the paper, geometric or radio materials. Reflow content on narrow screens.

Full-page operations:
Make a quick note opens editing. Save notes to the list, filter by keyword and delete entries. Journal, Materials, About and Search reveal content with blank-input validation, no-match and deletion results.

Share one renderer between static covers, the detail experience and /style-scenes/hand-drawn/ (English /en/style-scenes/hand-drawn/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** Design an interface in Hand-drawn UI style: wobbly outlines, skewed radii, paper texture and marker highlights, with icons that read as quick sketches.

**Design:** "Hand-drawn spec: paper #FAF6EE, ink #2B2B2B, highlight yellow #FFE566, coral accent #FF8A65; every container gets asymmetric radii (four different corner values); buttons with 2px wobbly strokes and a slight rotate(-1deg); highlighter bars under key words; icons as sketchy paths or thick simple strokes; dark mode on deep kraft brown with cream ink, highlight kept."

**Implementation:** Build a complete scribble& page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep scribble&’s paper ground, original copy and handwritten font fallbacks; use deep ochre #A24A26 for the text CTA so it remains legible on paper. Replace the generic CSS landscape with an original SVG of a hand-drawn flower, ruled note, tape and pencil. Use 1.1 / 1.5 / .65 desktop columns, then stack in reading order on phones with three vertical material notes. Extend the 32px notebook ruling with a double-line spine and tape while keeping form hit areas regular.

Reuse current preview.tokens: background #FAF6EE; foreground #2B2B2B; accent #FF8A65 / #2B2B2B; card #FFFDF7; border #2B2B2B; radius 14px 6px 18px 8px; font Comic Sans MS, Chalkboard SE, Marker Felt, PingFang SC, sans-serif; card shadow 2px 3px 0 rgba(43,43,43,0.08).

Reuse existing workspace tokens for dark and variants. Share StyleSignatureArt and style-signatures.css between cover and page, preserving the paper, geometric or radio materials. Reflow content on narrow screens.

Make a quick note opens editing. Save notes to the list, filter by keyword and delete entries. Journal, Materials, About and Search reveal content with blank-input validation, no-match and deletion results.

Share one renderer between static covers, the detail experience and /style-scenes/hand-drawn/ (English /en/style-scenes/hand-drawn/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [organic](/en/styles/organic) — Similar
- [neobrutalism](/en/styles/neobrutalism) — Similar
- [minimalism](/en/styles/minimalism) — Alternative
- [empty-state](/en/patterns/empty-state) — Used with
- [button](/en/components/button) — Affects
- [card](/en/components/card) — Affects

## Sources

- [Wikipedia — Doodle](https://en.wikipedia.org/wiki/Doodle)
- [Wikipedia — Sketch (drawing)](https://en.wikipedia.org/wiki/Sketch_(drawing))

---

JSON: `/api/concept/styles/hand-drawn.json` · Site: /en/styles/hand-drawn
