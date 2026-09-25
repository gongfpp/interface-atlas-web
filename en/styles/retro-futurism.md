# Retro-Futurism / 复古未来主义

> Styles · `id: retro-futurism`

The future as imagined by the past: cream-orange-brown warm palettes, chunky rounded casings, orbit lines and planet decals, pixel screens and CRT phosphor — optimistic tech that has aged. Space-age dashboards, vintage appliances and space-race posters fold into one warm nostalgic future.

**Aliases:** 复古未来主义 · 复古未来风 · 太空时代风 · 原子时代设计 · 七八十年代科幻风 · 落日灰壳那种怀旧科技 · Atompunk · Raygun Gothic

**Category:** Style / Visual Language

## When to use

- Games, music and nostalgia-tech brand storytelling
- Futures that feel warm and optimistic instead of cold-cyber
- Concept pages where "yesterday's tomorrow" is the story

## When not to use

- Modern productivity tools — vintage casing metaphors hurt perceived efficiency
- Minimal premium brands where retro garnish dilutes the signal
- Accessibility-critical contexts — warm palettes often run low contrast

## Variants

- **Atompunk** (原子时代) — 50s–60s space race — orbit lines and rockets
- **Cassette Futurism** (卡带未来) — 70s–80s CRTs on beige dashboard casings
- **Synth Sunset** (合成器落日) — Sunset stripes over grid horizons — adjacent to Y2K

## Design spec

- **typography:** Mono chrome caps display
- **color:** Deep purple gradient to #7A1F63 with pink #FF71CE
- **border:** 1px neon pink outlines
- **shadow:** Neon glow
- **spacing:** Horizon-grid composition

## Implementation

**CSS:** `background: linear-gradient(#F5E6C8, #E8B87A)` `border-radius: 24px` `box-shadow: inset` `repeating-linear-gradient` `font-family: monospace`

Lock the palette to warm tones: cream #F2E4C2, apricot #E8965A, terracotta #8A4B2E with a dash of lake blue #3D7A99. Casing comes from big radii (20px+) plus a double inset shadow (lit top, dark bottom) faking plastic thickness; orbit lines are thin ellipse borders; grid horizons use repeating-linear-gradient. Mix wide geometric sans with mono screen type. Dark mode goes CRT — warm black with phosphor amber or cyan type.

## Agent task prompt

```text
Implement a retro-futurist casing card and button section in the current project.

Inspect the existing design tokens first; scope the warm retro palette independently.
Requirements:
- Locked cream-orange-brown warm palette, no cold greys
- Big radii + double inset shadow for plastic casing; buttons with tangible press feel
- Orbit lines and grid horizons capped at two or three accents
- Dark mode as CRT warm black with phosphor amber screen type
- Respect prefers-reduced-motion for any motion
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** "Design an interface in Retro-Futurism style: cream-orange-brown warm ground, chunky rounded casing cards, orbit lines and pixel-screen accents — the future as imagined by the past."

**Design:** "Retro-futurism spec: cream #F2E4C2 to apricot #E8965A gradient ground; cards at 24px radii with a double inset shadow (lit top edge, dark bottom) for plastic casing; pill or chunky square buttons with lake blue #3D7A99 accents; 1px ellipse orbit lines and a repeating-linear-gradient grid horizon; wide geometric sans headings, mono screen numerals. Dark mode: CRT warm black with phosphor amber."

**Implementation:** "Implement a retro casing card in CSS: .casing { background: linear-gradient(#F7EDD6, #EBD9B4); border-radius: 24px; box-shadow: inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -4px 8px rgba(120,70,30,0.25), 0 6px 14px rgba(90,50,20,0.25); } Grid horizon: repeating-linear-gradient(0deg, rgba(61,122,153,0.35) 0 1px, transparent 1px 12px)."

## Related

- [y2k](/styles/y2k) — Similar
- [cyberpunk](/styles/cyberpunk) — Similar
- [aurora](/styles/aurora) — Similar
- [glassmorphism](/styles/glassmorphism) — Similar
- [card](/styles/card) — Affects

## Sources

- [Wikipedia — Retrofuturism](https://en.wikipedia.org/wiki/Retrofuturism)
- [Wikipedia — Cassette futurism](https://en.wikipedia.org/wiki/Cassette_futurism)

---

JSON: `/api/concept/styles/retro-futurism.json` · Site: /en/styles/retro-futurism
