# Cyberpunk / 赛博朋克

> Styles · `id: cyberpunk`

"High tech, low life" as a visual language: neon cyan and magenta edges cut through a near-black ground, monospace type and terminal glyphs run throughout, and scanlines plus glitch offsets suggest overloaded systems. Light is sliced out of darkness — the screen feels hijacked.

**Aliases:** 赛博朋克 · 赛博风格 · 霓虹故障风 · 黑底荧光紫青 · 数字废土风 · 黑客终端风 · Cyberpunk UI · Neon Glitch

**Category:** Style / Visual Language

## When to use

- Games, sci-fi projects and hacker communities where style is worldbuilding
- Music, club and esports brands signaling subculture
- Already-dark products that can layer neon accents cheaply

## When not to use

- Accessibility-critical reading — neon flicker and contrast hurt
- Enterprise contexts where subculture erodes trust
- Existing light-theme systems — a hard pivot is costly

## Variants

- **Neon City** (霓虹都市) — Cyan-magenta duo like a Ghost in the Shell nightscape
- **Terminal Hacker** (终端黑客) — Monochrome phosphor green or amber on CRT
- **Glitch Art** (故障艺术) — RGB channel offsets and datamosh strips take over

## Design spec

- **typography:** Monospace type with neon glow titles
- **color:** Night navy #0B0F1A with cyan #00E5FF
- **border:** 1px neon cyan borders, tiny radius
- **shadow:** Cyan neon glow shadows
- **spacing:** Terminal-dense layout
- **motion:** 120ms neon ignition transitions; honour prefers-reduced-motion
- **states:** Hover brightens the cyan neon; focus shows a visible 2px cyan outline; active flickers inverted once; disabled fades to dim grey without glow; error uses magenta neon

## Implementation

**CSS:** `box-shadow: 0 0 8px #0ff` `text-shadow` `clip-path` `@keyframes glitch` `repeating-linear-gradient`

Ground runs #0a0a12–#12101f. Neon needs both glow (box-shadow/text-shadow 0 0 8px in the same hue) and a solid border — glow alone smears. Replace radii with clip-path corner cuts (8–12px, one or opposite corners). Scanlines are a repeating-linear-gradient overlay kept under 0.06 opacity. Glitch is two-layer RGB offset text — short bursts, rare, respecting prefers-reduced-motion.

## Agent task prompt

```text
Build a complete NEON://CITY page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep NEON://CITY’s navy-black ground, cyan rims/glow, uppercase monospace, right-side bar chart and terminal cards. Panels retain their existing 4px radius rather than new 12px cuts, scanlines or glitch overlays. Continue with the offline terminal and cyan signal bars, expressing state through real HUD text and gear checkboxes.

Reuse current preview.tokens: background #0B0F1A; foreground #EAF6FF; accent #00E5FF / #050810; card rgba(0,229,255,.06); border rgba(0,229,255,.35); radius 4px; font 'SF Mono', Menlo, monospace; card shadow 0 0 14px rgba(0,229,255,.25).

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Full-page operations:
Connect to the network establishes an offline district connection and can disconnect. Toggle gear to update the district, connection and loadout HUD. Districts, Gear, Black market and SYS status reveal local content without real networking or trades.

Share one renderer between static covers, the detail experience and /style-scenes/cyberpunk/ (English /en/style-scenes/cyberpunk/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** "Design an interface in Cyberpunk style: near-black ground, glowing neon cyan and magenta edges, corner-cut panels, monospace terminal type, scanlines and glitch accents."

**Design:** "Cyberpunk spec: ground #0d0b14; neon cyan #00E5FF primary, magenta #FF2E88 secondary, glow radius under 8px; corner-cut panels via clip-path with 1px neon borders and faint glow; monospace type (JetBrains Mono/system mono); headings with two-layer RGB offset; scanline overlay at 0.05 opacity; hover brightens borders. Dark only — a light ground contradicts the style."

**Implementation:** Build a complete NEON://CITY page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep NEON://CITY’s navy-black ground, cyan rims/glow, uppercase monospace, right-side bar chart and terminal cards. Panels retain their existing 4px radius rather than new 12px cuts, scanlines or glitch overlays. Continue with the offline terminal and cyan signal bars, expressing state through real HUD text and gear checkboxes.

Reuse current preview.tokens: background #0B0F1A; foreground #EAF6FF; accent #00E5FF / #050810; card rgba(0,229,255,.06); border rgba(0,229,255,.35); radius 4px; font 'SF Mono', Menlo, monospace; card shadow 0 0 14px rgba(0,229,255,.25).

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Connect to the network establishes an offline district connection and can disconnect. Toggle gear to update the district, connection and loadout HUD. Districts, Gear, Black market and SYS status reveal local content without real networking or trades.

Share one renderer between static covers, the detail experience and /style-scenes/cyberpunk/ (English /en/style-scenes/cyberpunk/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [y2k](/en/styles/y2k) — Similar
- [retro-futurism](/en/styles/retro-futurism) — Similar
- [neobrutalism](/en/styles/neobrutalism) — Similar
- [input](/en/components/input) — Affects
- [card](/en/components/card) — Affects

## Sources

- [Wikipedia — Cyberpunk derivatives](https://en.wikipedia.org/wiki/Cyberpunk_derivatives)
- [MDN — CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)

---

JSON: `/api/concept/styles/cyberpunk.json` · Site: /en/styles/cyberpunk
