# Skeuomorphism / 拟物化

> Styles · `id: skeuomorphism`

A visual language that borrows real-world materials and physical forms for digital controls: leather stitching, wood grain, brushed metal, glass gloss. Buttons look pressable, switches look like levers — highlights, shadows and bevels make "what it looks like" teach "how it works".

**Aliases:** 拟物化 · 拟物风格 · 仿真质感设计 · 苹果早期那种真皮缝线效果 · 带纹理立体感的老式UI · 皮革木纹质感界面 · Realistic UI · Skeuomorphic Design

**Category:** Style / Visual Language

## When to use

- Unfamiliar users who learn controls from real-world metaphors
- Brands seeking vintage, nostalgic or crafted-premium feel
- Playful physical interactions — flipping, pressing, turning

## When not to use

- Dense productivity tools where decoration crowds out content
- Multi-platform products — heavy textures are costly to maintain
- Minimal brand contexts where skeuomorphism reads as dated

## Variants

- **Leather** (皮革缝线) — Leather grain with stitching — early iOS Calendar and Notes
- **Brushed Metal** (拉丝金属) — Metal gradients with beveled highlights — classic iTunes
- **Paper** (纸质) — Paper corners and embossed type — the iBooks shelf

## Design spec

- **typography:** System sans close to print
- **color:** Aluminium gradients with blue highlights
- **border:** Metal outlines with inner highlight lines
- **shadow:** Outer shadows plus inset highlights
- **spacing:** Padding mimics physical proportions

## Implementation

**CSS:** `background-image: url(texture)` `box-shadow: inset 0 1px 0` `linear-gradient` `border-radius` `text-shadow`

Three depth layers: a material base (texture image or a fine gradient), a 1px inset top highlight for the lit upper edge, and an outer bottom shadow for thickness. On press, flip the inset shadow to feel pushed in. Keep gradient bands narrow (3–8% luminance) or it reads as cheap plastic. Emboss text with a 1px dark shadow plus a 1px same-hue highlight. Dark mode darkens the material but keeps the highlight structure.

## Agent task prompt

```text
Implement dimensional skeuomorphic buttons and switches in the current project.

Inspect the existing design tokens first; express material parameters as configurable variables, not magic values.
Requirements:
- Buttons and switches with gradient + inset highlight + drop shadow, :active flips the inset shadow
- Materials as procedural gradients or inline SVG — no heavy texture assets
- Keyboard focus states and readable contrast
- Dark mode lowers material luminance but keeps the highlight structure
- Respect prefers-reduced-motion for any transitions
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** "Design an interface in Skeuomorphism style: controls rendered in real materials — leather, metal, wood — with pressable dimensional buttons and switch-like toggles."

**Design:** "Skeuomorphism design spec: leather-grain or wood texture backgrounds; buttons with a narrow linear gradient (under 8% luminance swing), 1px inset top highlight and a bottom drop shadow; 6–10px radii; embossed type (1px dark shadow + 1px highlight); dashed borders for stitching; pressed state flips the inset shadow and shifts down 1px. Dark mode drops material luminance ~20% and keeps highlights."

**Implementation:** "Implement a skeuomorphic button in CSS: background: linear-gradient(#f5f0e6, #d8d0c0); box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 3px rgba(0,0,0,0.35); border: 1px solid rgba(0,0,0,0.4); on :active use inset 0 2px 4px rgba(0,0,0,0.4). Prefer procedural gradients or inline SVG over heavy texture images; keep focus states and contrast compliant."

## Related

- [glassmorphism](/styles/glassmorphism) — Similar
- [flat-design](/styles/flat-design) — Similar
- [retro-futurism](/styles/retro-futurism) — Similar
- [button](/styles/button) — Affects
- [switch](/styles/switch) — Affects

## Sources

- [Nielsen Norman Group — Flat Design and Skeuomorphism](https://www.nngroup.com/articles/death-of-flat-design/)
- [Apple HIG — Materials](https://developer.apple.com/design/human-interface-guidelines/materials)

---

JSON: `/api/concept/styles/skeuomorphism.json` · Site: /en/styles/skeuomorphism
