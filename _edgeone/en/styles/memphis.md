# Memphis Design / 孟菲斯风格

> Styles · `id: memphis`

The postmodern anti-functionalist language: squiggles, dots, zigzags and confetti spots in saturated clashing colors with bold black outlines, deliberately breaking grids and order. It embraces the cheap and the festive — happily ugly against modernist good taste.

**Aliases:** 孟菲斯风格 · 孟菲斯设计 · 八十年代波普风 · 波点波浪线装饰风 · 彩色几何涂鸦风 · 水磨石撞色风 · Memphis Milano · Postmodern Pop

**Category:** Style / Visual Language

## When to use

- Streetwear, toys, parties and festivals that need joyful energy
- Children and creative education products — festive, non-threatening
- Short campaigns that must be unforgettable at a glance

## When not to use

- Tools and reading products used for long focused sessions
- Premium, restrained brands or serious decision-makers
- Dense interfaces where decoration drowns function

## Variants

- **Classic Memphis** (经典孟菲斯) — Ettore Sottsass — black-and-white ground, big blobs, squiggles
- **Terrazzo** (水磨石) — Confetti fragments across the surface — density as texture
- **Neo-Memphis** (新孟菲斯) — Web-adapted — more whitespace, thinner outlines

## Design spec

- **typography:** Bold sans with playful type
- **color:** Cream base; pink #FF5C8A, yellow #FFD23F, teal #3EC6A8
- **border:** 2px black outlines
- **shadow:** 4px 4px 0 offset hard shadows
- **spacing:** Deliberately tilted, misaligned
- **motion:** 150ms light bouncy offsets with a short ease-out; honour prefers-reduced-motion
- **states:** Hover offsets and deepens the hard shadow; focus shows a visible 2px black frame; active shifts flush to the shadow; disabled desaturates without shifting; error uses a pink accent

## Implementation

**CSS:** `background-image: radial-gradient` `border: 3px solid #000` `box-shadow: 5px 5px 0` `border-radius: 50%` `clip-path`

The classic recipe: a black-and-white geometric ground (dots via tiled radial-gradient, stripes via repeating-linear-gradient); elements in saturated clashes (lemon, coral, lake blue, violet) with 2–3px black outlines and offset solid shadows; squiggles and zigzags as SVG or clip-path, capped at three to five. Dark mode swaps black for ink blue and keeps the saturation.

## Agent task prompt

```text
Build a complete Milano '88 page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep Milano ’88’s cream ground, pink CTA, pink/yellow/teal cards and circle/triangle/rectangle hero. Retain the cards’ 2px radius and 4px 4px hard shadow, without adding full-screen monochrome dots or forcing 10px radii. The invitation uses its existing 2px black rim, 7px 7px hard shadow and 2deg tilt; name, guest count and palette update that card.

Reuse current preview.tokens: background #FFF4E3; foreground #232323; accent #FF5C8A / #fff; card #FFFFFF; border #232323; radius 2px; font 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif; card shadow 4px 4px 0 #232323.

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Full-page operations:
Start the party, enter a name, guest count and colors and generate an invitation; edit and regenerate it. Homeware, Patterns, Party and Made in Italy reveal content; no invitations are sent.

Share one renderer between static covers, the detail experience and /style-scenes/memphis/ (English /en/style-scenes/memphis/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** "Design an interface in Memphis Design style: squiggles, dots and zigzags in saturated clashing colors with bold black outlines and offset shadows — festive, anti-order, postmodern."

**Design:** "Memphis spec: a black-and-white dot or stripe geometric ground; blocks in lemon #FFD53D, coral #FF6B6B, lake blue #4D96FF, violet #B388FF with 3px black borders and 5px offset solid shadows; three to five squiggles, zigzags and confetti shapes; chunky sans type, slightly tilted OK. Dark mode on ink blue #14143C with saturation kept."

**Implementation:** Build a complete Milano '88 page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep Milano ’88’s cream ground, pink CTA, pink/yellow/teal cards and circle/triangle/rectangle hero. Retain the cards’ 2px radius and 4px 4px hard shadow, without adding full-screen monochrome dots or forcing 10px radii. The invitation uses its existing 2px black rim, 7px 7px hard shadow and 2deg tilt; name, guest count and palette update that card.

Reuse current preview.tokens: background #FFF4E3; foreground #232323; accent #FF5C8A / #fff; card #FFFFFF; border #232323; radius 2px; font 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif; card shadow 4px 4px 0 #232323.

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Start the party, enter a name, guest count and colors and generate an invitation; edit and regenerate it. Homeware, Patterns, Party and Made in Italy reveal content; no invitations are sent.

Share one renderer between static covers, the detail experience and /style-scenes/memphis/ (English /en/style-scenes/memphis/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [bauhaus](/en/styles/bauhaus) — Similar
- [neobrutalism](/en/styles/neobrutalism) — Similar
- [y2k](/en/styles/y2k) — Similar
- [button](/en/components/button) — Affects
- [card](/en/components/card) — Affects

## Sources

- [Memphis Milano](https://memphis-milano.com/)
- [Wikipedia — Memphis Group](https://en.wikipedia.org/wiki/Memphis_Group)

---

JSON: `/api/concept/styles/memphis.json` · Site: /en/styles/memphis
