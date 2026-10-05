# Liquid Glass / 液态玻璃

> Styles · `id: liquid-glass`

Thick refractive glass layers, specular highlights and liquid morphing as a functional overlay look. The glass is a thick lens — it bends content beneath and reflects the room, with edge lensing distortion. Volume and fluidity of the material are the point.

**Aliases:** 液态玻璃 · 苹果新玻璃 · 厚玻璃折射 · 玻璃透镜效果 · Liquid Glass · refractive glass UI

**Category:** Style / Visual Language

## When to use

- Navigation, toolbars and overlays that must share the system material language
- Over colorful photos or rich content worth refracting
- When you want the volume of a thick glass slab, not a thin veil

## When not to use

- Long-form reading where refraction and highlights keep interrupting
- Performance-sensitive or older devices — live refraction is expensive
- Light frosted layering only — glassmorphism is cheaper and clearer

## Variants

- **Sheet lens** (片状透镜) — Large thick slabs with obvious edge lensing
- **Button capsule** (胶囊按钮) — Small capsule controls with concentrated speculars
- **Full panel** (全幅面板) — Sidebar- or toolbar-scale glass that absorbs ambient color

## Design spec

- **typography:** System sans, slightly lighter weight on glass
- **color:** Hue inherited from the content beneath, speculars near-white
- **border:** 1px translucent white rims suggesting refraction edges
- **shadow:** Top inset specular plus a wide soft outer shadow
- **spacing:** 20px+ radii or pills, controls on a separate floating layer
- **motion:** 250–400ms ease-out refraction shifts and specular slide; honour prefers-reduced-motion
- **states:** Hover slides the specular along the rim and scales slightly; focus shows a visible white ring; active lowers refraction; disabled loses opacity and speculars; error tints refraction red, fading colour only

## Implementation

**CSS:** `backdrop-filter: blur() saturate()` `box-shadow: inset 高光 + 外投影` `border: 1px solid rgba(255,255,255,0.5)` `background: rgba(255,255,255,0.12)` `border-radius: 999px`

Thickness comes from three layers: low-opacity fill + backdrop-filter blur(20px) saturate(180%) + an inset top specular and a darker inset bottom edge. Edge lensing is approximated with a thicker translucent white rim plus a faint tint of the magnified backdrop. True refraction needs SVG filters or canvas; on the web, speculars and saturation sell it. Glass must float over colorful content. Dark mode darkens the fill and keeps the speculars.

## Agent task prompt

```text
Implement Liquid Glass visual style in the current project.

Inspect existing overlay and navigation components first; confirm colorful content beneath to refract.
Requirements:
- Thick glass: low-opacity fill + backdrop blur/saturate + top specular + bottom edge
- Translucent white rims to suggest lensing — not a thin blur veil
- Controls float on their own functional layer; glass never fully hides the content
- @supports fallback to a more opaque fill; speculars kept in dark mode
- Text contrast verified against the refracted result
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Design an interface in Liquid Glass style: thick refractive glass overlays with specular highlights and edge lensing, floating above colorful content.

**Design:** "Liquid Glass spec: colorful photo or gradient beneath; glass filled rgba(255,255,255,0.12) or rgba(20,20,30,0.35) in dark; backdrop-filter blur(20px) saturate(180%); inset 0 1px 0 rgba(255,255,255,0.7) top specular and inset 0 -1px 0 rgba(0,0,0,0.15) bottom edge; 1px translucent white rim; radii 20px or 999px pills; controls float on their own functional layer while content stays clear."

**Implementation:** "Implement Liquid Glass in CSS: .lg { background: rgba(255,255,255,0.12); backdrop-filter: blur(20px) saturate(180%); border: 1px solid rgba(255,255,255,0.45); box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.18); border-radius: 22px; } Gate with @supports and fall back to a more opaque fill; on hover, nudge the specular inset up 1px to catch light."

## Related

- [glassmorphism](/interface-atlas-web/preview/atlas-release-20261005/en/styles/glassmorphism) — Similar
- [skeuomorphism](/interface-atlas-web/preview/atlas-release-20261005/en/styles/skeuomorphism) — Similar
- [aurora](/interface-atlas-web/preview/atlas-release-20261005/en/styles/aurora) — Used with
- [navbar](/interface-atlas-web/preview/atlas-release-20261005/en/components/navbar) — Affects
- [modal](/interface-atlas-web/preview/atlas-release-20261005/en/components/modal) — Affects
- [button](/interface-atlas-web/preview/atlas-release-20261005/en/components/button) — Affects

## Confusable

- [glassmorphism](/interface-atlas-web/preview/atlas-release-20261005/en/styles/glassmorphism) — Glassmorphism is thin frosted blur (a veil of blur); liquid-glass is a thick refractive lens with edge distortion and speculars.

## Sources

- [Apple — Liquid Glass technology overview](https://developer.apple.com/documentation/technologyoverviews/liquid-glass)
- [WWDC25 — Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219)

---

JSON: `/interface-atlas-web/preview/atlas-release-20261005/api/concept/styles/liquid-glass.json` · Site: /interface-atlas-web/preview/atlas-release-20261005/en/styles/liquid-glass
