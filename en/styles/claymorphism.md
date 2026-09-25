# Claymorphism / 黏土风

> Styles · `id: claymorphism`

A visual language that molds controls from soft clay: generous radii on pastel grounds, with a double shadow — an inner concave plus an outer inflated drop — so elements feel like air-puffed clay: round, plump, squishable. A tactile middle ground between neumorphism and 3D cartoon.

**Aliases:** 黏土风 · 黏土拟物 · 软糖质感设计 · 膨胀立体卡片 · 3D黏土按钮 · 橡皮泥风格 · Clay 3D · Puffy UI

**Category:** Style / Visual Language

## When to use

- Kids, education and casual games that want approachable tactility
- Relaxed social and consumer brands signaling cuteness and ease
- Mobile touch interactions that want tactile feedback

## When not to use

- Professional, fintech and enterprise contexts — clay reads unserious
- Dense dashboards where inflated shadows eat space and focus
- Heavy dark-mode usage where pastel inflation is hard to sustain

## Variants

- **Soft Clay** (软黏土) — Classic pastel with the inflated double shadow
- **Candy Clay** (糖果黏土) — Saturated jelly tones close to game UI
- **Dark Clay** (深色黏土) — Matte clay on dark grey, inflation kept

## Design spec

- **typography:** Rounded sans
- **color:** Lavender base #EDF0FF, white cards, violet #6C7BFF
- **border:** Borderless with 22px+ radius
- **shadow:** Outer + inset shadows create the clay feel
- **spacing:** Puffy spacing, elements float apart

## Implementation

**CSS:** `border-radius: 20px` `box-shadow: inset 0 -6px 12px` `box-shadow: 0 12px 24px` `pastel`

Inflation formula = big radii (20–32px) plus three shadows: a large blurred same-hue drop (e.g. 0 14px 28px at 35% of the base color), an inner bottom press (inset 0 -8px 16px), and an inner top light (inset 0 3px 6px white). Tinted shadows must stay in-family — never grey. On press, shrink the drop and deepen the inner shadow to feel squeezed. Dark clay uses deep grey with a darker same-hue drop.

## Agent task prompt

```text
Implement inflated clay buttons and cards in the current project.

Inspect the existing design tokens and shadow variables first; express the inflation parameters as configurable variables.
Requirements:
- Big radii + triple shadow (tinted drop, inner bottom press, inner top light) for the clay inflation
- Pressed state shrinks the drop and deepens the concave — a squeezing feel
- Tinted same-family shadows only, never muddy grey
- Compliant text contrast; dark mode with matte deep-grey clay
- Respect prefers-reduced-motion for any motion
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** "Design an interface in Claymorphism style: big-radius pastel elements with an inflated outer drop plus an inner concave shadow — controls like puffed clay."

**Design:** "Claymorphism spec: pastel grounds (#EAF0FF or soft pink/green/lilac); gentle saturated primary like #6C8CFF; cards at 24px radii with triple shadows — 0 14px 28px primary 35%, inset 0 -8px 16px primary 30%, inset 0 3px 6px white 70%; pressed buttons shrink the drop and deepen the concave; near-black text for contrast. Dark mode: deep grey #23252E with a darker same-hue drop."

**Implementation:** "Implement a clay button in CSS: .clay-btn { background: #6C8CFF; color: #fff; border: none; border-radius: 18px; padding: 12px 24px; box-shadow: 0 12px 22px rgba(108,140,255,0.4), inset 0 -6px 12px rgba(30,50,150,0.35), inset 0 3px 6px rgba(255,255,255,0.55); } :active { box-shadow: 0 5px 10px rgba(108,140,255,0.35), inset 0 -3px 8px rgba(30,50,150,0.4), inset 0 4px 8px rgba(0,0,0,0.15); }"

## Related

- [glassmorphism](/styles/glassmorphism) — Similar
- [neobrutalism](/styles/neobrutalism) — Similar
- [button](/styles/button) — Affects
- [card](/styles/card) — Affects
- [badge](/styles/badge) — Affects

## Sources

- [Hype4 Academy — Claymorphism in design](https://www.hype4.academy/articles/design/claymorphism-in-web-design)
- [MDN — box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

---

JSON: `/api/concept/styles/claymorphism.json` · Site: /en/styles/claymorphism
