# Glassmorphism / 玻璃拟态

> Styles · `id: glassmorphism`

A visual language that expresses floating layers as frosted glass: a blurred backdrop (backdrop-filter), a low-opacity fill and a thin white rim of light. Panels literally reveal the vivid background beneath them, so the style is about depth — it only works over rich, colorful content worth revealing.

**Aliases:** 毛玻璃 · 苹果那种透明玻璃效果 · 玻璃拟态 · 磨砂玻璃 · 玻璃效果 · 半透明模糊背景 · Frosted Glass · Glassmorphism UI

**Category:** Style / Visual Language

## When to use

- Over gradients, photos or colorful backdrops worth revealing
- Overlays, players and floating system panels that should feel light
- Evoking the familiar macOS/iOS material language

## When not to use

- Plain backgrounds — frosted glass over nothing is just grey fog
- Long-form reading areas where blur keeps eroding text contrast
- Performance-sensitive or older devices — backdrop-filter is costly

## Variants

- **Frost** (磨砂) — High blur, low opacity — the classic milky glass
- **Clear Glass** (透明玻璃) — Light blur, high transparency, leans on the light rim
- **Tinted Glass** (有色玻璃) — Color-tinted glass, the iOS vibrancy tradition

## Design spec

- **typography:** Sans-serif with white display type
- **color:** Blue-purple-pink gradient with white glass rgba(255,255,255,.45)
- **border:** 1px translucent white borders
- **shadow:** Large soft coloured shadows
- **spacing:** 16px+ radii with roomy card padding

## Implementation

**CSS:** `backdrop-filter: blur()` `background: rgba(255,255,255,0.1~0.4)` `border: 1px solid rgba(255,255,255,0.4)` `box-shadow: inset 0 1px 0 rgba(255,255,255,0.5)` `@supports`

Three ingredients: a translucent fill (white at 10–40% opacity), backdrop-filter blur(8–24px), and a 1px translucent white top rim that sells the glass thickness. It shines on dark backgrounds — add an inner top glow. Always gate with @supports and fall back to a more opaque fill where backdrop-filter is unsupported. Verify text contrast against the blurred result, not the raw backdrop.

## Agent task prompt

```text
Implement a floating glass card + button section in Glassmorphism style in the current project.

Inspect the existing design tokens and overlay components first; settle the backdrop layer (gradient or image).
Requirements:
- A colorful gradient page layer beneath translucent, backdrop-blurred panels
- 1px translucent white rims plus an inner top highlight for glass thickness
- An @supports fallback that raises panel opacity when backdrop-filter is unavailable
- Dark mode with a deeper gradient backdrop (glass is most typical on dark)
- Text contrast on glass stays readable
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** "Design an interface in Glassmorphism style: translucent frosted-glass panels that blur and reveal a gradient or photo beneath, edged with a thin white highlight."

**Design:** "Glassmorphism design spec: a vivid gradient or photo background (dark works best); panels filled with rgba(255,255,255,0.15) and backdrop-filter blur(16px); 1px rgba(255,255,255,0.35) rims with an optional inner top glow; radii 16px+; text on glass must keep 4.5:1 contrast. Dark mode deepens the backdrop and slightly raises transparency."

**Implementation:** "Implement Glassmorphism in CSS: a .glass class (background: rgba(255,255,255,0.16); backdrop-filter: blur(16px) saturate(160%); border: 1px solid rgba(255,255,255,0.35); border-radius: 16px), with an @supports fallback that raises fill opacity; add an inset 0 1px 0 top highlight for thickness; remember backdrop-filter creates a containing block — hoist inner fixed positioning."

## Related

- [skeuomorphism](/styles/skeuomorphism) — Similar
- [aurora](/styles/aurora) — Similar
- [minimalism](/styles/minimalism) — Similar
- [card](/styles/card) — Affects
- [modal](/styles/modal) — Affects

## Sources

- [Apple HIG — Materials](https://developer.apple.com/design/human-interface-guidelines/materials)
- [MDN — backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)

---

JSON: `/api/concept/styles/glassmorphism.json` · Site: /en/styles/glassmorphism
