# Vaporwave / 蒸汽波

> Styles · `id: vaporwave`

Neon pink-cyan-purple, a perspective grid horizon, retro 3D chrome type and palm silhouettes as consumer-nostalgia look. It collages 80s-90s mall culture, early CGI and signal glitch — sweet, hazy, hollowly optimistic.

**Aliases:** 蒸汽波 · 蒸汽波风格 · 粉紫蓝复古未来 · 霓虹网格地平线 · 80年代商场美学 · vaporwave · synthwave UI · retro mall aesthetic

**Category:** Style / Visual Language

## When to use

- Music, club, streetwear and retro events where style is the mood
- Campaign pages that must signal subculture and haze
- Players, tickets and virtual goods in entertainment contexts

## When not to use

- Finance, healthcare and civic UIs that must stay calm and trustworthy
- Long reading and form entry — neon and flicker drain attention
- Accessibility-critical contexts — pink-purple contrast and flicker are risky

## Variants

- **Mall soft** (商场软调) — Pastel marble, Greek columns and Win95 chrome — sweet and hollow
- **Neon glitch** (霓虹故障) — Pink-cyan neon with RGB offset and scanlines, signal unstable
- **Holographic chrome** (全息镀铬) — Liquid-metal 3D type with CD-rainbow sheen

## Design spec

- **typography:** Chrome-gradient display type plus wide-tracked sans
- **color:** Pink #FF71CE, cyan #01CDFE, violet #B967FF
- **border:** 1px neon rims, pills and hard corners mixed
- **shadow:** Multi-layer same-hue neon glows
- **spacing:** Centered symmetric horizon, elements floating over the grid
- **motion:** 300–400ms neon warm-up and horizon glide; honour prefers-reduced-motion
- **states:** Hover strengthens the layered neon glow; focus shows a visible cyan ring; active lowers saturation; disabled loses glow and opacity; error uses pink neon

## Implementation

**CSS:** `linear-gradient 粉紫青` `perspective + rotateX 网格地平线` `background-clip: text 镀铬字` `text-shadow 多层霓虹` `repeating-linear-gradient 扫描线`

The grid horizon is the signature: a perspective container holding a rotateX(70deg) repeating-linear-gradient plane, faded at the bottom. Chrome type is a multi-stop grey or pink-cyan gradient via background-clip: text with a dark outline. Neon is multi-layer same-hue text-shadow; lock the hue set to pink #FF71CE, cyan #01CDFE, violet #B967FF. Palm and column silhouettes as one or two stickers. Glitch stays brief and rare, respecting prefers-reduced-motion.

## Agent task prompt

```text
Build a complete MALL★95 page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep MALL★95’s original pink/violet gradient, cyan actions/rims, mountain-silhouette panel and pill feature cards; do not add a mandatory perspective horizon, clipped chrome type, palm/column stickers or glitches. The floor map uses its existing orthogonal repeating-gradient grid, cyan text glow and three-floor hue shifts; passport entries remain in normal document flow.

Reuse current preview.tokens: background linear-gradient(180deg,#2B0F54 0%,#5B1E8C 45%,#FF71CE 100%); foreground #FFE9FF; accent #01CDFE / #0A0030; card rgba(255,113,206,.12); border rgba(1,205,254,.55); radius 999px; font Arial Black, Futura, Helvetica Neue, PingFang SC, sans-serif; card shadow 0 0 16px rgba(1,205,254,.45).

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Full-page operations:
Enter the atrium opens the floor guide. Choose floors for media and food venues; stamp a passport without counting duplicates. Media, Food court and About return to the matching guide; there are no real purchases.

Share one renderer between static covers, the detail experience and /style-scenes/vaporwave/ (English /en/style-scenes/vaporwave/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** Design an interface in Vaporwave style: neon pink-cyan-purple, a perspective grid horizon, retro 3D chrome type, palm silhouettes and light glitch.

**Design:** "Vaporwave spec: deep purple-pink gradient ground (#2B0F54 → #FF71CE at the edges); cyan #01CDFE grid horizon; chrome headings (multi-stop silver or pink-cyan via background-clip: text); pill buttons with pink-cyan strokes and neon glow; one or two palm/column silhouettes; scanline overlay at opacity ≤ 0.06; dark is the native mode — a light ground only appears in the mall-soft variant."

**Implementation:** Build a complete MALL★95 page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep MALL★95’s original pink/violet gradient, cyan actions/rims, mountain-silhouette panel and pill feature cards; do not add a mandatory perspective horizon, clipped chrome type, palm/column stickers or glitches. The floor map uses its existing orthogonal repeating-gradient grid, cyan text glow and three-floor hue shifts; passport entries remain in normal document flow.

Reuse current preview.tokens: background linear-gradient(180deg,#2B0F54 0%,#5B1E8C 45%,#FF71CE 100%); foreground #FFE9FF; accent #01CDFE / #0A0030; card rgba(255,113,206,.12); border rgba(1,205,254,.55); radius 999px; font Arial Black, Futura, Helvetica Neue, PingFang SC, sans-serif; card shadow 0 0 16px rgba(1,205,254,.45).

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Enter the atrium opens the floor guide. Choose floors for media and food venues; stamp a passport without counting duplicates. Media, Food court and About return to the matching guide; there are no real purchases.

Share one renderer between static covers, the detail experience and /style-scenes/vaporwave/ (English /en/style-scenes/vaporwave/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [y2k](/interface-atlas-web/en/styles/y2k) — Similar
- [cyberpunk](/interface-atlas-web/en/styles/cyberpunk) — Similar
- [retro-futurism](/interface-atlas-web/en/styles/retro-futurism) — Similar
- [memphis](/interface-atlas-web/en/styles/memphis) — Similar
- [card](/interface-atlas-web/en/components/card) — Affects
- [button](/interface-atlas-web/en/components/button) — Affects

## Sources

- [Wikipedia — Vaporwave](https://en.wikipedia.org/wiki/Vaporwave)
- [Wikipedia — Synthwave](https://en.wikipedia.org/wiki/Synthwave)

---

JSON: `/interface-atlas-web/api/concept/styles/vaporwave.json` · Site: /interface-atlas-web/en/styles/vaporwave
