# Y2K Aesthetic / Y2K 千禧美学

> Styles · `id: y2k`

A visual language reviving turn-of-the-millennium digital optimism: liquid chrome, iMac translucent candy plastics, bubble type, sparkle stars, and pink-purple-blue gradients on silver highlights. It mixes naive futurism with clumsy low-poly 3D — sweet, shiny, gloriously unrestrained.

**Aliases:** 千禧风 · Y2K风格 · 千禧年美学 · 镀铬金属质感 · iMac糖果色那种 · 闪亮科技感 · 千禧辣妹风 · Cyber Y2K

**Category:** Style / Visual Language

## When to use

- Music, streetwear and fashion brands chasing Y2K nostalgia
- Party, social and entertainment products that want sugary energy
- Retro-themed campaigns and limited packaging

## When not to use

- Fintech, healthcare and productivity — trust demands restraint
- Long reading sessions — saturation and sparkles fatigue the eye
- Accessibility-critical contexts — silver-on-pastel often fails contrast

## Variants

- **Candy Plastic** (糖果塑料) — iMac G3 translucent shells in blue, green, orange and pink
- **Liquid Chrome** (镀铬金属) — Liquid-metal type and mirror gradients — the Cyber Y2K branch
- **Iridescent** (珠光幻彩) — Pearlescent sheen and CD-rainbow gradients

## Design spec

- **typography:** Rounded type with chrome gradient titles
- **color:** Silver-lilac gradients with electric violet #7B61FF
- **border:** 1px lavender outlines, large radius
- **shadow:** Soft violet glow shadows
- **spacing:** Bubble 20px radii, relaxed spacing
- **motion:** 150–250ms transitions with a slight bounce and glow shifts; honour prefers-reduced-motion
- **states:** Hover strengthens the chrome gradient and glow; focus shows a visible violet ring; active scales down and darkens; disabled loses opacity and glow; error uses a red-pink gradient

## Implementation

**CSS:** `background: linear-gradient(#e0e0e0, #8f9096, #f5f5f5)` `background-clip: text` `text-shadow` `border-radius: 999px` `box-shadow: inset`

Chrome is a narrow multi-stop greyscale gradient — #f8f8f8 → #9a9ba2 → #ffffff → #7c7d84 — with a 1px white inset highlight and a dark shadow; chrome text is the same gradient through background-clip: text. Candy plastic is a saturated fill with a white inner glow across the top 40% to fake translucency. Spend sparkles and bubble type on two or three accents. Dark mode goes purple-black so silver pops.

## Agent task prompt

```text
Build a complete ☆ CyberDream ☆ page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep CyberDream’s pale silver/lilac/pink gradient, rounded type, violet CTA, right-side chart and three pale feature cards; do not replace original text with mandatory clipped chrome lettering or new sparkle components. The member card retains its pastel pink/blue gradient, 2px white rim, 28px radius and -2deg tilt, with nickname and outfit as real content.

Reuse current preview.tokens: background linear-gradient(160deg,#DDE7F5 0%,#EFD3E8 55%,#C9C8F4 100%); foreground #3A3A55; accent #7B61FF / #fff; card rgba(255,255,255,.78); border #B8B8E0; radius 20px; font ui-rounded, 'Arial Rounded MT Bold', 'PingFang SC', sans-serif; card shadow 0 8px 18px rgba(123,97,255,.18).

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Full-page operations:
Enter now, supply a nickname and outfit and generate a matching member card; edit and regenerate it. Music, Outfits, Planet and Member card reveal content; identity is generated locally only.

Share one renderer between static covers, the detail experience and /style-scenes/y2k/ (English /en/style-scenes/y2k/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** "Design an interface in Y2K aesthetic: liquid chrome, iMac candy plastics, pink-purple-blue gradients and sparkle stars — sweet, shiny millennium texture."

**Design:** "Y2K spec: pink-purple gradient ground (#FFC8F0 → #C8B8FF → #A8D8FF) or silver; pill buttons with a four-stop chrome gradient and white inset highlight; cards as translucent candy rounded blocks with a top inner glow; bubble-bold or chrome headings (background-clip: text); four-point sparkle accents. Dark mode on purple-black with silver chrome highlights."

**Implementation:** Build a complete ☆ CyberDream ☆ page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep CyberDream’s pale silver/lilac/pink gradient, rounded type, violet CTA, right-side chart and three pale feature cards; do not replace original text with mandatory clipped chrome lettering or new sparkle components. The member card retains its pastel pink/blue gradient, 2px white rim, 28px radius and -2deg tilt, with nickname and outfit as real content.

Reuse current preview.tokens: background linear-gradient(160deg,#DDE7F5 0%,#EFD3E8 55%,#C9C8F4 100%); foreground #3A3A55; accent #7B61FF / #fff; card rgba(255,255,255,.78); border #B8B8E0; radius 20px; font ui-rounded, 'Arial Rounded MT Bold', 'PingFang SC', sans-serif; card shadow 0 8px 18px rgba(123,97,255,.18).

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Enter now, supply a nickname and outfit and generate a matching member card; edit and regenerate it. Music, Outfits, Planet and Member card reveal content; identity is generated locally only.

Share one renderer between static covers, the detail experience and /style-scenes/y2k/ (English /en/style-scenes/y2k/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [cyberpunk](/en/styles/cyberpunk) — Similar
- [aurora](/en/styles/aurora) — Similar
- [glassmorphism](/en/styles/glassmorphism) — Similar
- [retro-futurism](/en/styles/retro-futurism) — Similar
- [card](/en/components/card) — Affects

## Sources

- [Wikipedia — Y2K aesthetic](https://en.wikipedia.org/wiki/Y2K_aesthetic)
- [MDN — linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)

---

JSON: `/api/concept/styles/y2k.json` · Site: /en/styles/y2k
