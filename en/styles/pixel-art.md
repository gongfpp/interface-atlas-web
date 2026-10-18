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
- **motion:** No tweening, stepped and instant
- **states:** Hover switches to a highlight pixel colour; focus shows a visible 2px pixel outline; active shifts by one pixel block; disabled drops to two greys; error uses a red pixel block

## Implementation

**CSS:** `image-rendering: pixelated` `border-radius: 0` `font-family: monospace` `box-shadow: 多层硬阶梯模拟圆角` `background: repeating-conic-gradient() 抖动网点`

Pixel feel hinges on integer scaling: design assets at 1x and present via transform: scale(integer) or image-rendering: pixelated. Approximate radii with multi-layer hard box-shadow steps — or stay square. Fake gradients with dithering: repeating-conic-gradient alternating two colors. Type is a bitmap face (e.g. Press Start 2P) or monospace with letter-spacing. Dark mode swaps the palette but keeps the same grid.

## Agent task prompt

```text
Build a complete BITMAP page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep BITMAP’s dark ground, uppercase Courier New monospace, square black rims, hard card shadows and original screen panel; do not convert existing screen gradients, web text or every neutral into six-color dithering. The six-color limit belongs to the actual 8×8 paint palette. Use the normal repeat(8,minmax(0,1fr)) board, 4px black outer rim and visible cell focus, without transforming page/text scale or introducing real coin payment.

Reuse current preview.tokens: background #1A1C2C; foreground #F4F4F4; accent #EF7D57 / #1A1C2C; card #29366F; border #000000; radius 0px; font Courier New, ui-monospace, monospace; card shadow 4px 4px 0.

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Full-page operations:
INSERT COIN starts an 8×8 six-color pixel board. Move drawing focus with arrows and paint with Space or click cells; clear and redraw. Start, Atlas and Shop reveal content without real coin payments.

Share one renderer between static covers, the detail experience and /style-scenes/pixel-art/ (English /en/style-scenes/pixel-art/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** Design an interface in Pixel Art UI style: hard pixel edges, limited palette, bitmap type and dithered transitions — console nostalgia.

**Design:** "Pixel Art spec: palette locked to 6 colors (e.g. #1A1C2C #5D275D #B13E53 #EF7D57 #FFCD75 #A7F070); zero radii; 2px pure-black pixel outlines; buttons with 2px hard edges that swallow their outline on press via a 2px shift; bitmap headings at integer 16px multiples; all gradients dithered; dark mode uses the dark tier of the same palette."

**Implementation:** Build a complete BITMAP page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep BITMAP’s dark ground, uppercase Courier New monospace, square black rims, hard card shadows and original screen panel; do not convert existing screen gradients, web text or every neutral into six-color dithering. The six-color limit belongs to the actual 8×8 paint palette. Use the normal repeat(8,minmax(0,1fr)) board, 4px black outer rim and visible cell focus, without transforming page/text scale or introducing real coin payment.

Reuse current preview.tokens: background #1A1C2C; foreground #F4F4F4; accent #EF7D57 / #1A1C2C; card #29366F; border #000000; radius 0px; font Courier New, ui-monospace, monospace; card shadow 4px 4px 0.

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

INSERT COIN starts an 8×8 six-color pixel board. Move drawing focus with arrows and paint with Space or click cells; clear and redraw. Start, Atlas and Shop reveal content without real coin payments.

Share one renderer between static covers, the detail experience and /style-scenes/pixel-art/ (English /en/style-scenes/pixel-art/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [y2k](/interface-atlas-web/en/styles/y2k) — Similar
- [retro-futurism](/interface-atlas-web/en/styles/retro-futurism) — Similar
- [cyberpunk](/interface-atlas-web/en/styles/cyberpunk) — Used with
- [button](/interface-atlas-web/en/components/button) — Affects
- [badge](/interface-atlas-web/en/components/badge) — Affects
- [progress-bar](/interface-atlas-web/en/components/progress-bar) — Affects

## Sources

- [Wikipedia — Pixel art](https://en.wikipedia.org/wiki/Pixel_art)
- [MDN — image-rendering](https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering)

---

JSON: `/interface-atlas-web/api/concept/styles/pixel-art.json` · Site: /interface-atlas-web/en/styles/pixel-art
