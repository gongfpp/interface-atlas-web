# Neobrutalism / 新粗野主义

> Styles · `id: neobrutalism`

A loud visual language of thick black outlines, saturated clashing colors and hard offset shadows: elements sit on the page like bold stickers, paired with chunky radii and punchy badges. It deliberately rejects polish and subtlety, trading refinement for instant recognition and a rebellious, playful voice.

**Aliases:** 新粗野主义 · 粗野风 · 大黑边风格 · 硬阴影风格 · 新残酷主义 · Neo-brutalism · Brutalist Web Design

**Category:** Style / Visual Language

## When to use

- Youth-oriented brands, campaigns and developer-tool landing pages
- Standing out with strong personality among polished sites
- Marketing pages, portfolios and creative communities

## When not to use

- Finance, healthcare or enterprise products that must feel trustworthy
- Long-session productivity tools — loud decoration fatigues
- Dense content or data UIs where borders and color eat information space

## Variants

- **Classic Hard Shadow** (经典硬阴影) — Cream background, black borders, offset solid shadows
- **Candy** (糖果色) — Saturated pink, purple and yellow blocks colliding
- **Grunge** (粗粝噪点) — Adds noise, tilted elements and doodles

## Design spec

- **typography:** Ultra-bold sans, all caps
- **color:** Cream base, pure black, orange #FF6B00
- **border:** 3px solid black borders
- **shadow:** 5px 5px 0 hard offset shadows
- **spacing:** Zero radius, tight stacking

## Implementation

**CSS:** `border: 2-4px solid #000` `box-shadow: 4px 4px 0 #000` `border-radius: 8-16px` `background: saturate()` `transition`

The style hinges on three traits: thick black borders (2–4px), hard offset shadows (e.g. 4px 4px 0 #000 — never blurred) and cheerful radii. Use saturated candy colors and clash them boldly. Interactions shine: shift the element on hover, then zero the shadow on active as if pressed into paper. Add noise with SVG feTurbulence or repeating gradients.

## Agent task prompt

```text
Implement a card + button section in Neobrutalism style in the current project.

Inspect the existing components and design tokens first; check for reusable border/shadow variables.
Requirements:
- Thick black borders (2–3px) + hard offset shadows (no blur)
- Saturated clashing colors on a cream base
- Buttons that lift on hover and swallow their shadow on active
- Dark mode support (near-black base, colors stay bright)
- Transitions respect prefers-reduced-motion, under 120ms
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** "Design an interface in Neobrutalism style: thick black borders, saturated clashing colors and hard offset shadows — elements punchy as stickers."

**Design:** "Neobrutalism design spec: cream background (#FDF2D8); every element gets a 2–3px pure black border; shadows are solid offsets only (4px 4px 0 #000), never blurred; ~10px radii; saturated primary colors (#FF5D5D / #FFC900 / #4D9FFF) that clash boldly; heavy uppercase headings; buttons swallow their shadow when pressed. Dark mode keeps a near-black base with the bright colors intact."

**Implementation:** "Implement Neobrutalism in CSS: a .nb base class (border: 3px solid #000; box-shadow: 4px 4px 0 #000; border-radius: 10px), candy palette as CSS variables; hover lifts via translate(-2px,-2px) with a deeper 6px shadow, active resets it like a physical press; badges are solid color chips with black borders and uppercase labels; keep transitions under 120ms."

## Related

- [bauhaus](/styles/bauhaus) — Similar
- [memphis](/styles/memphis) — Similar
- [y2k](/styles/y2k) — Similar
- [button](/styles/button) — Affects
- [card](/styles/card) — Affects

## Sources

- [Gumroad — Neobrutalism 代表案例](https://gumroad.com/)
- [Wikipedia — Brutalist Architecture（风格词源）](https://en.wikipedia.org/wiki/Brutalist_architecture)

---

JSON: `/api/concept/styles/neobrutalism.json` · Site: /en/styles/neobrutalism
