# Neumorphism / 新拟态

> Styles · `id: neumorphism`

A soft relief style that uses paired light and dark shadows on similarly colored surfaces. Controls appear pressed into or raised from a shared material. It works best with a small number of elements. Shadows alone cannot communicate interactivity, selection or disabled states; retain labels, visible focus and sufficient contrast.

**Aliases:** 软浮雕风格 · 凹凸按钮 · 柔和双阴影 · soft UI

**Category:** Style / Visual Language

## When to use

- Music controls, lightweight utilities and product demonstrations.
- Sparse interfaces that benefit from a soft material feel.

## When not to use

- Dense tables and complex interfaces requiring strong boundaries.
- Never make shadow direction the only state signal.

## Variants

- **Raised** (凸起表面) — Paired outer shadows suggest raised controls.
- **Inset** (凹陷表面) — Inset shadows suggest pressed controls or tracks.

## Design spec

- **typography:** Clear sans-serif type; avoid overly light weights.
- **color:** Light blue-grey surfaces, dark text and blue accents.
- **border:** Medium to large radii with a visible focus outline.
- **shadow:** Paired outer shadows for elevation; inset shadows for pressing.
- **spacing:** Space controls so shadows do not collide.
- **motion:** 150–200ms raised-to-inset shadow transitions
- **states:** Hover deepens and raises the shadow; focus must keep a visible 2px outline; active switches to an inset press; disabled lowers contrast; error uses a red inset shadow

## Implementation

**CSS:** `box-shadow` `inset` `border-radius` `:focus-visible`

Derive shadows from the shared surface; use positive and negative offsets for raised controls and inset for pressed states. Reinforce focus and selection with labels or icons. Avoid large animated shadows and support reduced motion.

## Agent task prompt

```text
Build a complete Mellow page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Keep Mellow’s same-material pale greys, #f4f5f6→#eeeff0, Georgia brand/display and grey sans copy, with the original copy/weather/tilted soft clock/tool-column composition. Preserve outer paired shadows and the separate circular inset clock face, dark-gradient CTA and raised login button rather than replacing them with generic blue sans cards. Below 600px return positioned elements to a single content flow and pair the tools; reuse existing dark/high-contrast styles and never make shadows the only state signal.

Full-page operations:
Explore Mellow and Get started open focus tools. Start/pause/reset the timer; Focus, Tasks, Stats and Settings reveal matching tools. Cycle focus tips; login explains local demo identity only.

Share one renderer between static covers, the detail experience and /style-scenes/neumorphism/ (English /en/style-scenes/neumorphism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** Design a brand page in Neumorphism. A soft relief style that uses paired light and dark shadows on similarly colored surfaces. Controls appear pressed into or raised from a shared material. It works best with a small number of elements. Shadows alone cannot communicate interactivity, selection or disabled states; retain labels, visible focus and sufficient contrast.

**Design:** Clear sans-serif type; avoid overly light weights. Light blue-grey surfaces, dark text and blue accents. Medium to large radii with a visible focus outline. Paired outer shadows for elevation; inset shadows for pressing. Space controls so shadows do not collide.

**Implementation:** Build a complete Mellow page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Keep Mellow’s same-material pale greys, #f4f5f6→#eeeff0, Georgia brand/display and grey sans copy, with the original copy/weather/tilted soft clock/tool-column composition. Preserve outer paired shadows and the separate circular inset clock face, dark-gradient CTA and raised login button rather than replacing them with generic blue sans cards. Below 600px return positioned elements to a single content flow and pair the tools; reuse existing dark/high-contrast styles and never make shadows the only state signal.

Explore Mellow and Get started open focus tools. Start/pause/reset the timer; Focus, Tasks, Stats and Settings reveal matching tools. Cycle focus tips; login explains local demo identity only.

Share one renderer between static covers, the detail experience and /style-scenes/neumorphism/ (English /en/style-scenes/neumorphism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [skeuomorphism](/en/styles/skeuomorphism) — Similar
- [claymorphism](/en/styles/claymorphism) — Similar
- [minimalism](/en/styles/minimalism) — Similar
- [button](/en/components/button) — Affects

## Sources

- [MDN — box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

---

JSON: `/api/concept/styles/neumorphism.json` · Site: /en/styles/neumorphism
