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

## Implementation

**CSS:** `linear-gradient 粉紫青` `perspective + rotateX 网格地平线` `background-clip: text 镀铬字` `text-shadow 多层霓虹` `repeating-linear-gradient 扫描线`

The grid horizon is the signature: a perspective container holding a rotateX(70deg) repeating-linear-gradient plane, faded at the bottom. Chrome type is a multi-stop grey or pink-cyan gradient via background-clip: text with a dark outline. Neon is multi-layer same-hue text-shadow; lock the hue set to pink #FF71CE, cyan #01CDFE, violet #B967FF. Palm and column silhouettes as one or two stickers. Glitch stays brief and rare, respecting prefers-reduced-motion.

## Agent task prompt

```text
Implement Vaporwave visual style in the current project.

Inspect the existing theme and motion systems first; scope the Vaporwave palette and effects independently.
Requirements:
- Pink-purple-cyan neon palette + perspective grid horizon + chrome display type
- Palm/column silhouettes limited to one or two accents
- Scanlines at opacity ≤ 0.06; glitch brief and rare, respecting prefers-reduced-motion
- Body text contrast compliant; neon is accent-only
- Dark-first, with light mall-soft as a variant
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Design an interface in Vaporwave style: neon pink-cyan-purple, a perspective grid horizon, retro 3D chrome type, palm silhouettes and light glitch.

**Design:** "Vaporwave spec: deep purple-pink gradient ground (#2B0F54 → #FF71CE at the edges); cyan #01CDFE grid horizon; chrome headings (multi-stop silver or pink-cyan via background-clip: text); pill buttons with pink-cyan strokes and neon glow; one or two palm/column silhouettes; scanline overlay at opacity ≤ 0.06; dark is the native mode — a light ground only appears in the mall-soft variant."

**Implementation:** "Implement the grid horizon in CSS: .vapor-grid { perspective: 220px; overflow: hidden; } .vapor-grid i { display:block; height: 240px; transform: rotateX(72deg); background: repeating-linear-gradient(90deg, #01CDFE 0 2px, transparent 2px 48px), repeating-linear-gradient(0deg, #01CDFE 0 2px, transparent 2px 48px); } Chrome type via background-clip: text; glitch as two-layer RGB-offset pseudos in brief bursts."

## Related

- [y2k](/styles/y2k) — Similar
- [cyberpunk](/styles/cyberpunk) — Similar
- [retro-futurism](/styles/retro-futurism) — Similar
- [memphis](/styles/memphis) — Similar
- [card](/styles/card) — Affects
- [button](/styles/button) — Affects

## Sources

- [Wikipedia — Vaporwave](https://en.wikipedia.org/wiki/Vaporwave)
- [Wikipedia — Synthwave](https://en.wikipedia.org/wiki/Synthwave)

---

JSON: `/api/concept/styles/vaporwave.json` · Site: /en/styles/vaporwave
