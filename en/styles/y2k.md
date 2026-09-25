# Y2K Aesthetic / Y2K 千禧美学

> Styles · `id: y2k`

A visual language reviving turn-of-the-millennium digital optimism: liquid chrome, iMac translucent candy plastics, bubble type, sparkle stars, and pink-purple-blue gradients on silver highlights. It mixes naive futurism with clumsy low-poly 3D — sweet, shiny, gloriously unrestrained.

**Aliases:** 千禧风 · Y2K风格 · 千禧年美学 · 镀铬金属质感 · iMac糖果色那种 · 闪亮科技感 · 千禧辣妹风 · Cyber Y2K

**Category:** Style / Visual Language

## When to use

- Music, streetwear and fashion brands chasing Y2K nostalgia
- Party, social and entertainment products that want sugary energy
- Retro-themed campaigns and limited packaging

## When not to use

- Fintech, healthcare and productivity — trust demands restraint
- Long reading sessions — saturation and sparkles fatigue the eye
- Accessibility-critical contexts — silver-on-pastel often fails contrast

## Variants

- **Candy Plastic** (糖果塑料) — iMac G3 translucent shells in blue, green, orange and pink
- **Liquid Chrome** (镀铬金属) — Liquid-metal type and mirror gradients — the Cyber Y2K branch
- **Iridescent** (珠光幻彩) — Pearlescent sheen and CD-rainbow gradients

## Design spec

- **typography:** Rounded type with chrome gradient titles
- **color:** Silver-lilac gradients with electric violet #7B61FF
- **border:** 1px lavender outlines, large radius
- **shadow:** Soft violet glow shadows
- **spacing:** Bubble 20px radii, relaxed spacing

## Implementation

**CSS:** `background: linear-gradient(#e0e0e0, #8f9096, #f5f5f5)` `background-clip: text` `text-shadow` `border-radius: 999px` `box-shadow: inset`

Chrome is a narrow multi-stop greyscale gradient — #f8f8f8 → #9a9ba2 → #ffffff → #7c7d84 — with a 1px white inset highlight and a dark shadow; chrome text is the same gradient through background-clip: text. Candy plastic is a saturated fill with a white inner glow across the top 40% to fake translucency. Spend sparkles and bubble type on two or three accents. Dark mode goes purple-black so silver pops.

## Agent task prompt

```text
Implement Y2K capsule buttons and candy cards in the current project.

Inspect the existing design tokens first; keep the Y2K palette scoped to avoid leaking into brand colors.
Requirements:
- Chrome via multi-stop greyscale gradients with background-clip: text or fills
- Candy plastic via saturated fills plus a white top inner glow
- Sparkles and stars limited to two or three accents
- Verify text contrast against the final backdrop; never carry meaning through sparkle alone
- Dark mode on purple-black with silver chrome highlights
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** "Design an interface in Y2K aesthetic: liquid chrome, iMac candy plastics, pink-purple-blue gradients and sparkle stars — sweet, shiny millennium texture."

**Design:** "Y2K spec: pink-purple gradient ground (#FFC8F0 → #C8B8FF → #A8D8FF) or silver; pill buttons with a four-stop chrome gradient and white inset highlight; cards as translucent candy rounded blocks with a top inner glow; bubble-bold or chrome headings (background-clip: text); four-point sparkle accents. Dark mode on purple-black with silver chrome highlights."

**Implementation:** "Implement Y2K chrome in CSS: .chrome { background: linear-gradient(180deg, #fdfdfd, #b9bac1 38%, #ffffff 50%, #83848c 62%, #e6e6ea); background-clip: text; color: transparent; -webkit-text-fill-color: transparent; } Candy button: .candy { background: #7DE2FF; box-shadow: inset 0 14px 18px rgba(255,255,255,0.75), inset 0 -8px 14px rgba(0,60,120,0.25); border-radius: 999px; }"

## Related

- [cyberpunk](/styles/cyberpunk) — Similar
- [aurora](/styles/aurora) — Similar
- [glassmorphism](/styles/glassmorphism) — Similar
- [retro-futurism](/styles/retro-futurism) — Similar
- [card](/styles/card) — Affects

## Sources

- [Wikipedia — Y2K aesthetic](https://en.wikipedia.org/wiki/Y2K_aesthetic)
- [MDN — linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)

---

JSON: `/api/concept/styles/y2k.json` · Site: /en/styles/y2k
