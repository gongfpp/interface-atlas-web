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
- **motion:** 200–300ms neon warm-up and scanline drift; honour prefers-reduced-motion
- **states:** Hover brightens the chrome and pink glow; focus shows a visible pink ring; active lowers brightness; disabled loses glow and saturation; error uses magenta neon

## Implementation

**CSS:** `background: linear-gradient(#F5E6C8, #E8B87A)` `border-radius: 24px` `box-shadow: inset` `repeating-linear-gradient` `font-family: monospace`

Lock the palette to warm tones: cream #F2E4C2, apricot #E8965A, terracotta #8A4B2E with a dash of lake blue #3D7A99. Casing comes from big radii (20px+) plus a double inset shadow (lit top, dark bottom) faking plastic thickness; orbit lines are thin ellipse borders; grid horizons use repeating-linear-gradient. Mix wide geometric sans with mono screen type. Dark mode goes CRT — warm black with phosphor amber or cyan type.

## Agent task prompt

```text
Build a complete SYNTH-84 page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep SYNTH-84’s deep purple gradient, pink accent, uppercase monospace DRIVE INTO / THE SUNSET and existing functions. Replace the unrelated bar chart with an original SVG of a striped sunset, mountain silhouette, perspective road and SIDE A cassette. Give the player a dark instrument face and inset scale window. Preserve FM 84.0, three local tracks, volume and playback; dim the equalizer while paused and run its .8s animation only during actual playback, stopping for reduced motion.

Reuse current preview.tokens: background linear-gradient(180deg,#140A33 0%,#3D1170 62%,#7A1F63 100%); foreground #FFE8F6; accent #FF71CE / #2A0A2E; card rgba(255,113,206,.12); border rgba(255,113,206,.45); radius 6px; font 'SF Mono', Menlo, monospace; card shadow none.

Reuse existing workspace tokens for dark and variants. Share StyleSignatureArt and style-signatures.css between cover and page, preserving the paper, geometric or radio materials. Reflow content on narrow screens.

Full-page operations:
Play the radio starts a WebAudio synthesized tone after a user gesture. Play/pause, choose among three tracks and adjust volume. Radio, Tour, Tapes and REC reveal content; disclose local synthesis, not live broadcasting or recording uploads.

Share one renderer between static covers, the detail experience and /style-scenes/retro-futurism/ (English /en/style-scenes/retro-futurism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** "Design an interface in Retro-Futurism style: cream-orange-brown warm ground, chunky rounded casing cards, orbit lines and pixel-screen accents — the future as imagined by the past."

**Design:** "Retro-futurism spec: cream #F2E4C2 to apricot #E8965A gradient ground; cards at 24px radii with a double inset shadow (lit top edge, dark bottom) for plastic casing; pill or chunky square buttons with lake blue #3D7A99 accents; 1px ellipse orbit lines and a repeating-linear-gradient grid horizon; wide geometric sans headings, mono screen numerals. Dark mode: CRT warm black with phosphor amber."

**Implementation:** Build a complete SYNTH-84 page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep SYNTH-84’s deep purple gradient, pink accent, uppercase monospace DRIVE INTO / THE SUNSET and existing functions. Replace the unrelated bar chart with an original SVG of a striped sunset, mountain silhouette, perspective road and SIDE A cassette. Give the player a dark instrument face and inset scale window. Preserve FM 84.0, three local tracks, volume and playback; dim the equalizer while paused and run its .8s animation only during actual playback, stopping for reduced motion.

Reuse current preview.tokens: background linear-gradient(180deg,#140A33 0%,#3D1170 62%,#7A1F63 100%); foreground #FFE8F6; accent #FF71CE / #2A0A2E; card rgba(255,113,206,.12); border rgba(255,113,206,.45); radius 6px; font 'SF Mono', Menlo, monospace; card shadow none.

Reuse existing workspace tokens for dark and variants. Share StyleSignatureArt and style-signatures.css between cover and page, preserving the paper, geometric or radio materials. Reflow content on narrow screens.

Play the radio starts a WebAudio synthesized tone after a user gesture. Play/pause, choose among three tracks and adjust volume. Radio, Tour, Tapes and REC reveal content; disclose local synthesis, not live broadcasting or recording uploads.

Share one renderer between static covers, the detail experience and /style-scenes/retro-futurism/ (English /en/style-scenes/retro-futurism/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [y2k](/en/styles/y2k) — Similar
- [cyberpunk](/en/styles/cyberpunk) — Similar
- [aurora](/en/styles/aurora) — Similar
- [glassmorphism](/en/styles/glassmorphism) — Similar
- [card](/en/components/card) — Affects

## Sources

- [Wikipedia — Retrofuturism](https://en.wikipedia.org/wiki/Retrofuturism)
- [Wikipedia — Cassette futurism](https://en.wikipedia.org/wiki/Cassette_futurism)

---

JSON: `/api/concept/styles/retro-futurism.json` · Site: /en/styles/retro-futurism
