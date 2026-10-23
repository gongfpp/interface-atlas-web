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
Build a complete Lumen page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep Lumen’s peach/violet/blue gradient, CSS mountain scene, 22px glass cards, blur(20px) saturate(180%) and upper highlight/lower edge. The workbench uses a 36px specimen, a grid/stripe/ring optical backdrop and double highlight rims. Clear blurs at 0.22 times depth, Frost at depth plus 12px, and Prism at 0.5 times depth with colored reflections. Depth also changes elevation/shadow; ambient angle changes the background and specular band, without new SVG displacement refraction or floating navigation. Depth/highlights/refraction remain the current readable CSS approximation.

Reuse current preview.tokens: background linear-gradient(145deg,#FF9A8B 0%,#A18CD1 45%,#6DD5FA 100%); foreground #FFFFFF; accent rgba(255,255,255,.92) / #1A1030; card rgba(255,255,255,.14); border rgba(255,255,255,.5); radius 22px; font SF Pro Display, Helvetica Neue, PingFang SC, sans-serif; card shadow inset 0 1px 0 rgba(255,255,255,.7), inset 0 -1px 0 rgba(0,0,0,.15), 0 8px 24px rgba(0,0,0,.18).

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Full-page operations:
Explore refraction opens material sampling. Adjust material, thickness and angle, preview live and save a recipe. Optics, Materials and Pricing reveal content; refraction/speculars are web approximations, not physical optical simulation.

Share one renderer between static covers, the detail experience and /style-scenes/liquid-glass/ (English /en/style-scenes/liquid-glass/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** Design an interface in Liquid Glass style: thick refractive glass overlays with specular highlights and edge lensing, floating above colorful content.

**Design:** "Liquid Glass spec: colorful photo or gradient beneath; glass filled rgba(255,255,255,0.12) or rgba(20,20,30,0.35) in dark; backdrop-filter blur(20px) saturate(180%); inset 0 1px 0 rgba(255,255,255,0.7) top specular and inset 0 -1px 0 rgba(0,0,0,0.15) bottom edge; 1px translucent white rim; radii 20px or 999px pills; controls float on their own functional layer while content stays clear."

**Implementation:** Build a complete Lumen page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep Lumen’s peach/violet/blue gradient, CSS mountain scene, 22px glass cards, blur(20px) saturate(180%) and upper highlight/lower edge. The workbench uses a 36px specimen, a grid/stripe/ring optical backdrop and double highlight rims. Clear blurs at 0.22 times depth, Frost at depth plus 12px, and Prism at 0.5 times depth with colored reflections. Depth also changes elevation/shadow; ambient angle changes the background and specular band, without new SVG displacement refraction or floating navigation. Depth/highlights/refraction remain the current readable CSS approximation.

Reuse current preview.tokens: background linear-gradient(145deg,#FF9A8B 0%,#A18CD1 45%,#6DD5FA 100%); foreground #FFFFFF; accent rgba(255,255,255,.92) / #1A1030; card rgba(255,255,255,.14); border rgba(255,255,255,.5); radius 22px; font SF Pro Display, Helvetica Neue, PingFang SC, sans-serif; card shadow inset 0 1px 0 rgba(255,255,255,.7), inset 0 -1px 0 rgba(0,0,0,.15), 0 8px 24px rgba(0,0,0,.18).

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Explore refraction opens material sampling. Adjust material, thickness and angle, preview live and save a recipe. Optics, Materials and Pricing reveal content; refraction/speculars are web approximations, not physical optical simulation.

Share one renderer between static covers, the detail experience and /style-scenes/liquid-glass/ (English /en/style-scenes/liquid-glass/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [glassmorphism](/en/styles/glassmorphism) — Similar
- [skeuomorphism](/en/styles/skeuomorphism) — Similar
- [aurora](/en/styles/aurora) — Used with
- [navbar](/en/components/navbar) — Affects
- [modal](/en/components/modal) — Affects
- [button](/en/components/button) — Affects

## Confusable

- [glassmorphism](/en/styles/glassmorphism) — Glassmorphism is thin frosted blur (a veil of blur); liquid-glass is a thick refractive lens with edge distortion and speculars.

## Sources

- [Apple — Liquid Glass technology overview](https://developer.apple.com/documentation/technologyoverviews/liquid-glass)
- [WWDC25 — Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219)

---

JSON: `/api/concept/styles/liquid-glass.json` · Site: /en/styles/liquid-glass
