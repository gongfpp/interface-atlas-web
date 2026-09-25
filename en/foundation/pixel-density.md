# Pixel Density & Resolution / 像素密度与分辨率

> Foundation · `id: pixel-density`

A screen counts pixels two ways: physical device pixels and the CSS pixels used for layout. The device pixel ratio, or DPR, is how many device pixels fill one CSS pixel. Phones pack many device pixels into few CSS pixels, so a bitmap shown at its CSS size looks blurry. Serve 2x/3x assets with srcset and vectors, and size text in rem.

**Aliases:** 像素密度 · 设备像素比 · 为什么图在手机上发虚 · 手机上看图模糊 · 高清屏 · Retina · DPR · pixel density · device pixel ratio

**Category:** Foundation / Rendering / Responsive

## When to use

- Bitmaps, icons and screenshots must stay sharp on dense phone screens
- The design spec is annotated in px and must map onto different DPRs
- Debugging why an image looks soft on Retina, or setting up responsive images

## When not to use

- A text-only page with no bitmaps or icons, where density barely shows
- A fixed 1x signage or projector target with no dense displays
- Multiplying every size by DPR and hard-coding it, losing the CSS-pixel abstraction

## Variants

- **Standard 1x** (标清 1x) — One CSS pixel equals one device pixel — assets show as-is
- **Retina 2x** (Retina 2x) — One CSS pixel covers four device pixels — ship 2x bitmaps
- **Dense 3x + vectors** (高密度 3x 与矢量) — Phones reach 3x; icons and text are safest as SVG and rem

## Platform API

- `dppx`
- `devicePixelRatio`
- `srcset`
- `image-set()`
- `rem`

## In code

| Framework | Name |
| --- | --- |
| CSS | [resolution media query / dppx](https://developer.mozilla.org/en-US/docs/Web/CSS/resolution) — Switch assets or styles by screen density |
| HTML | [srcset / sizes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) — Lets the browser pick the right crop per DPR |
| React | [window.devicePixelRatio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) |

## Implementation

**CSS:** `image-set(url(logo.png) 1x, url(logo@2x.png) 2x)` `@media (min-resolution: 2dppx)` `srcset="hero@2x.png 2x"` `width: 24px; height: 24px` `font-size: 1rem`

Export bitmaps at 2x/3x for the target DPR and let image-set() or srcset/sizes choose; never upscale a 1x asset. Always write CSS sizes in CSS pixels and leave the mapping to device pixels to the browser. Prefer SVG and rem for icons and text, and keep hairlines at 1px. Use devicePixelRatio only for canvas or image previews that need exact pixel math, never to scale the whole UI.

## Agent task prompt

```text
Implement pixel density handling in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Requirements:
- Write all layout and sizes in CSS pixels; never multiply by DPR
- Provide 1x/2x/3x bitmaps and choose with image-set() or srcset/sizes
- Prefer SVG and rem for icons and text; keep hairlines at 1px
Keep the project's existing visual style. Do not add unnecessary dependencies.
Respect prefers-reduced-motion.
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Keep bitmaps and icons crisp on dense phone screens — serve multiple densities and explain CSS pixels versus device pixels.

**Design:** Pixel density spec: lay out and annotate in CSS pixels, deliver 1x/2x/3x bitmaps, use SVG for icons and logos, set body text in rem and hairlines at 1px. Name exports with @2x/@3x, state the target DPR range, and never annotate the design in device pixels.

**Implementation:** Serve multiple densities with image-set() or srcset/sizes, e.g. img { width: 24px; height: 24px; content: image-set(url(icon.png) 1x, url(icon@2x.png) 2x); } and refine details under @media (min-resolution: 2dppx). Use rem for text and spacing; in canvas multiply window.devicePixelRatio for the backing store and scale the context back to CSS size.

## Related

- [relative-units](/foundation/relative-units) — Similar
- [type-scale](/foundation/type-scale) — Used with
- [alt-text](/foundation/alt-text) — Used with
- [pixel-art](/foundation/pixel-art) — Used with

## Sources

- [MDN — window.devicePixelRatio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio)
- [MDN — CSS resolution (dppx)](https://developer.mozilla.org/en-US/docs/Web/CSS/resolution)
- [Apple HIG — Images](https://developer.apple.com/design/human-interface-guidelines/images)

---

JSON: `/api/concept/foundation/pixel-density.json` · Site: /en/foundation/pixel-density
