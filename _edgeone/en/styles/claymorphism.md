# Claymorphism / 黏土风

> Styles · `id: claymorphism`

A visual language that molds controls from soft clay: generous radii on pastel grounds, with a double shadow — an inner concave plus an outer inflated drop — so elements feel like air-puffed clay: round, plump, squishable. A tactile middle ground between neumorphism and 3D cartoon.

**Aliases:** 黏土风 · 黏土拟物 · 软糖质感设计 · 膨胀立体卡片 · 3D黏土按钮 · 橡皮泥风格 · Clay 3D · Puffy UI

**Category:** Style / Visual Language

## When to use

- Kids, education and casual games that want approachable tactility
- Relaxed social and consumer brands signaling cuteness and ease
- Mobile touch interactions that want tactile feedback

## When not to use

- Professional, fintech and enterprise contexts — clay reads unserious
- Dense dashboards where inflated shadows eat space and focus
- Heavy dark-mode usage where pastel inflation is hard to sustain

## Variants

- **Soft Clay** (软黏土) — Classic pastel with the inflated double shadow
- **Candy Clay** (糖果黏土) — Saturated jelly tones close to game UI
- **Dark Clay** (深色黏土) — Matte clay on dark grey, inflation kept

## Design spec

- **typography:** Rounded sans
- **color:** Lavender base #EDF0FF, white cards, violet #6C7BFF
- **border:** Borderless with 22px+ radius
- **shadow:** Outer + inset shadows create the clay feel
- **spacing:** Puffy spacing, elements float apart
- **motion:** 180–240ms soft elastic press transitions; honour prefers-reduced-motion
- **states:** Hover lifts and deepens the outer shadow; focus shows a visible violet ring; active becomes an inset press; disabled flattens and desaturates; error uses a coral inset

## Implementation

**CSS:** `border-radius: 20px` `box-shadow: inset 0 -6px 12px` `box-shadow: 0 12px 24px` `pastel`

Inflation formula = big radii (20–32px) plus three shadows: a large blurred same-hue drop (e.g. 0 14px 28px at 35% of the base color), an inner bottom press (inset 0 -8px 16px), and an inner top light (inset 0 3px 6px white). Tinted shadows must stay in-family — never grey. On press, shrink the drop and deepen the inner shadow to feel squeezed. Dark clay uses deep grey with a darker same-hue drop.

## Agent task prompt

```text
Build a complete Claymates page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep Claymates’ lavender ground, white 22px-radius cards, violet actions and dimensional device panel. Reuse token drop/inset shadows rather than replacing every button with a new 18px clay recipe. The cabin’s .gs-blob retains irregular soft contours, upper/lower inset shadows and a tinted drop; squeezing triggers only the existing .35s deformation.

Reuse current preview.tokens: background #EDF0FF; foreground #3A3F5C; accent #6C7BFF / #fff; card #FFFFFF; border rgba(108,123,255,.18); radius 22px; font 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif; card shadow 0 14px 28px rgba(108,123,255,.22), inset 0 -6px 12px rgba(108,123,255,.10).

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Full-page operations:
Give it a squeeze opens the clay cabin. Pick a color, squeeze repeatedly and update counter and character together, then save to the cabin. Home, Cabin, Shop and the bear entry reveal content without real purchases.

Share one renderer between static covers, the detail experience and /style-scenes/claymorphism/ (English /en/style-scenes/claymorphism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** "Design an interface in Claymorphism style: big-radius pastel elements with an inflated outer drop plus an inner concave shadow — controls like puffed clay."

**Design:** "Claymorphism spec: pastel grounds (#EAF0FF or soft pink/green/lilac); gentle saturated primary like #6C8CFF; cards at 24px radii with triple shadows — 0 14px 28px primary 35%, inset 0 -8px 16px primary 30%, inset 0 3px 6px white 70%; pressed buttons shrink the drop and deepen the concave; near-black text for contrast. Dark mode: deep grey #23252E with a darker same-hue drop."

**Implementation:** Build a complete Claymates page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep Claymates’ lavender ground, white 22px-radius cards, violet actions and dimensional device panel. Reuse token drop/inset shadows rather than replacing every button with a new 18px clay recipe. The cabin’s .gs-blob retains irregular soft contours, upper/lower inset shadows and a tinted drop; squeezing triggers only the existing .35s deformation.

Reuse current preview.tokens: background #EDF0FF; foreground #3A3F5C; accent #6C7BFF / #fff; card #FFFFFF; border rgba(108,123,255,.18); radius 22px; font 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif; card shadow 0 14px 28px rgba(108,123,255,.22), inset 0 -6px 12px rgba(108,123,255,.10).

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Give it a squeeze opens the clay cabin. Pick a color, squeeze repeatedly and update counter and character together, then save to the cabin. Home, Cabin, Shop and the bear entry reveal content without real purchases.

Share one renderer between static covers, the detail experience and /style-scenes/claymorphism/ (English /en/style-scenes/claymorphism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [glassmorphism](/en/styles/glassmorphism) — Similar
- [neobrutalism](/en/styles/neobrutalism) — Similar
- [button](/en/components/button) — Affects
- [card](/en/components/card) — Affects
- [badge](/en/components/badge) — Affects

## Sources

- [Hype4 Academy — Claymorphism in design](https://www.hype4.academy/articles/design/claymorphism-in-web-design)
- [MDN — box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

---

JSON: `/api/concept/styles/claymorphism.json` · Site: /en/styles/claymorphism
