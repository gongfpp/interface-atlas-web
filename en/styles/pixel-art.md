# Pixel Art UI / 像素风

> Styles · `id: pixel-art`

Hard pixel edges, a limited palette and bitmap faces as a console-nostalgia interface look. Aliasing is correct, scaling must be integer, dithering does the gradients. Deliberately against anti-aliasing.

**Aliases:** 像素风 · 像素游戏界面 · 8位机风格 · 马赛克复古风 · 点阵字界面 · pixel art UI · 8-bit UI · pixel retro

**Category:** Style / Visual Language

## When to use

- Games, indie releases and retro-themed products where style is worldbuilding
- Nostalgic warmth via bitmap and limited color, or gamified progress
- Badges, achievements and status dots that must read at small size

## When not to use

- Long reading and dense tables — bitmap type degrades when scaled
- Continuous gradients, photo galleries and smooth motion
- Formal enterprise and finance UIs where pixels undercut trust

## Variants

- **8-bit retro** (8位复古) — NES-style hard edges, 3–6 color palette, black-outlined blocks
- **Modern pixel** (现代像素) — Finer pixel grid, wider palette, radii as stepped corners
- **Isometric pixel** (等距像素) — 2:1 isometric vignettes like a SimCity minimap

## Design spec

- **typography:** Bitmap or monospace face at integer sizes
- **color:** A palette of six colors or fewer, hard high-contrast cuts
- **border:** 2px solid pixel outlines, radius 0
- **shadow:** Hard offset pixel-block shadows, no blur
- **spacing:** 8px grid alignment, elements snapped to the pixel lattice

## Implementation

**CSS:** `image-rendering: pixelated` `border-radius: 0` `font-family: monospace` `box-shadow: 多层硬阶梯模拟圆角` `background: repeating-conic-gradient() 抖动网点`

Pixel feel hinges on integer scaling: design assets at 1x and present via transform: scale(integer) or image-rendering: pixelated. Approximate radii with multi-layer hard box-shadow steps — or stay square. Fake gradients with dithering: repeating-conic-gradient alternating two colors. Type is a bitmap face (e.g. Press Start 2P) or monospace with letter-spacing. Dark mode swaps the palette but keeps the same grid.

## Agent task prompt

```text
Implement Pixel Art UI visual style in the current project.

Inspect existing icon and font assets first; manage pixel assets at integer scale factors.
Requirements:
- Hard pixel edges, border-radius 0, solid pixel-block outlines
- Palette collapsed to 6 colors or fewer; gradients always dithered
- Bitmap or monospace type at integer sizes
- Buttons swallow their hard shadow on press; image-rendering: pixelated for bitmaps
- Dark mode on the palette's dark tier; text contrast compliant
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Design an interface in Pixel Art UI style: hard pixel edges, limited palette, bitmap type and dithered transitions — console nostalgia.

**Design:** "Pixel Art spec: palette locked to 6 colors (e.g. #1A1C2C #5D275D #B13E53 #EF7D57 #FFCD75 #A7F070); zero radii; 2px pure-black pixel outlines; buttons with 2px hard edges that swallow their outline on press via a 2px shift; bitmap headings at integer 16px multiples; all gradients dithered; dark mode uses the dark tier of the same palette."

**Implementation:** "Implement a pixel button in CSS: .px-btn { border-radius: 0; border: 2px solid #1A1C2C; box-shadow: 4px 4px 0 #1A1C2C; image-rendering: pixelated; } Dither: background: repeating-conic-gradient(#EF7D57 0% 25%, #FFCD75 0% 50%) 0 0/4px 4px; scale the stage with transform: scale(2) and transform-origin: top left."

## Related

- [y2k](/styles/y2k) — Similar
- [retro-futurism](/styles/retro-futurism) — Similar
- [cyberpunk](/styles/cyberpunk) — Used with
- [button](/styles/button) — Affects
- [badge](/styles/badge) — Affects
- [progress-bar](/styles/progress-bar) — Affects

## Sources

- [Wikipedia — Pixel art](https://en.wikipedia.org/wiki/Pixel_art)
- [MDN — image-rendering](https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering)

---

JSON: `/api/concept/styles/pixel-art.json` · Site: /en/styles/pixel-art
