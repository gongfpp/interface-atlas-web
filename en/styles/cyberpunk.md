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

## Implementation

**CSS:** `box-shadow: 0 0 8px #0ff` `text-shadow` `clip-path` `@keyframes glitch` `repeating-linear-gradient`

Ground runs #0a0a12–#12101f. Neon needs both glow (box-shadow/text-shadow 0 0 8px in the same hue) and a solid border — glow alone smears. Replace radii with clip-path corner cuts (8–12px, one or opposite corners). Scanlines are a repeating-linear-gradient overlay kept under 0.06 opacity. Glitch is two-layer RGB offset text — short bursts, rare, respecting prefers-reduced-motion.

## Agent task prompt

```text
Implement a terminal-style Cyberpunk input and panel section in the current project.

Inspect the existing theme system first; scope the neon-dark theme behind an isolated class so the default theme stays untouched.
Requirements:
- Near-black ground with neon cyan/magenta borders and glow; corner-cut panels via clip-path
- Monospace type and terminal glyphs ("> _") throughout
- Scanline overlay at opacity ≤ 0.06; glitch animations rare, brief, respecting prefers-reduced-motion
- Body text keeps compliant contrast; neon is accent-only, never body color
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** "Design an interface in Cyberpunk style: near-black ground, glowing neon cyan and magenta edges, corner-cut panels, monospace terminal type, scanlines and glitch accents."

**Design:** "Cyberpunk spec: ground #0d0b14; neon cyan #00E5FF primary, magenta #FF2E88 secondary, glow radius under 8px; corner-cut panels via clip-path with 1px neon borders and faint glow; monospace type (JetBrains Mono/system mono); headings with two-layer RGB offset; scanline overlay at 0.05 opacity; hover brightens borders. Dark only — a light ground contradicts the style."

**Implementation:** "Implement a Cyberpunk panel in CSS: .cyber-panel { background: #12101f; color: #d8f6ff; clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)); border: 1px solid rgba(0,229,255,0.7); box-shadow: 0 0 10px rgba(0,229,255,0.25); } Scanline pseudo-element: repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 3px). Multiply glitch animation duration by var(--demo-speed, 1)."

## Related

- [y2k](/styles/y2k) — Similar
- [retro-futurism](/styles/retro-futurism) — Similar
- [neobrutalism](/styles/neobrutalism) — Similar
- [input](/styles/input) — Affects
- [card](/styles/card) — Affects

## Sources

- [Wikipedia — Cyberpunk derivatives](https://en.wikipedia.org/wiki/Cyberpunk_derivatives)
- [MDN — CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)

---

JSON: `/api/concept/styles/cyberpunk.json` · Site: /en/styles/cyberpunk
