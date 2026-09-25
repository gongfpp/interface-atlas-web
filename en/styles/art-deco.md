# Art Deco / 装饰艺术

> Styles · `id: art-deco`

A decorative visual language built from geometry, symmetry, radiating lines and stepped forms. A contemporary web interpretation often pairs dark surfaces with metallic hairlines and display typography. Concentrate decoration in headings, frames and key visuals while keeping body text, forms and navigation straightforward.

**Aliases:** 盖茨比风格 · 黑金几何风 · 对称奢华风 · deco

**Category:** Style / Visual Language

## When to use

- Boutique hospitality, cultural events, dining and exhibitions.
- Brand introductions that call for elegance and ceremony.

## When not to use

- Avoid elaborate ornament in frequently used business tools.
- Fine gold lines cannot replace readable text and clear controls.

## Variants

- **Midnight gold** (午夜黑金) — Deep blue-black and warm gold create dramatic contrast.
- **Emerald gold** (翡翠金) — Deep green surfaces with symmetric geometry.

## Design spec

- **typography:** Display serif titles with tracked short labels.
- **color:** Midnight blue-black and warm gold; soft light body text.
- **border:** Hairlines, double frames and stepped outlines.
- **shadow:** Use borders for hierarchy instead of shadows.
- **spacing:** Axial alignment and balanced space; reduce ornament on mobile.

## Implementation

**CSS:** `border` `letter-spacing` `SVG path` `grid`

Draw radiating and stepped ornament with SVG, independent of semantic content. Use gold as an accent while keeping body contrast strong. Preserve title and form width on narrow screens by reducing surrounding ornament.

## Agent task prompt

```text
Inspect existing layouts, typography and theme tokens, then build an interactive Art Deco brand scene.
Display serif titles with tracked short labels. Midnight blue-black and warm gold; soft light body text. Hairlines, double frames and stepped outlines. Use borders for hierarchy instead of shadows. Axial alignment and balanced space; reduce ornament on mobile.
Draw radiating and stepped ornament with SVG, independent of semantic content. Use gold as an accent while keeping body contrast strong. Preserve title and form width on narrow screens by reducing surrounding ornament.
Make controls give clear feedback, support narrow screens, focus and reduced motion, and add no dependencies. Run checks and list modified files.
```

### Other prompt layers

**Basic:** Design a brand page in Art Deco. A decorative visual language built from geometry, symmetry, radiating lines and stepped forms. A contemporary web interpretation often pairs dark surfaces with metallic hairlines and display typography. Concentrate decoration in headings, frames and key visuals while keeping body text, forms and navigation straightforward.

**Design:** Display serif titles with tracked short labels. Midnight blue-black and warm gold; soft light body text. Hairlines, double frames and stepped outlines. Use borders for hierarchy instead of shadows. Axial alignment and balanced space; reduce ornament on mobile.

**Implementation:** Draw radiating and stepped ornament with SVG, independent of semantic content. Use gold as an accent while keeping body contrast strong. Preserve title and form width on narrow screens by reducing surrounding ornament.

## Related

- [bauhaus](/styles/bauhaus) — Similar
- [editorial](/styles/editorial) — Similar
- [retro-futurism](/styles/retro-futurism) — Similar
- [button](/styles/button) — Affects

## Sources

- [V&A — Art Deco](https://www.vam.ac.uk/collections/art-deco)

---

JSON: `/api/concept/styles/art-deco.json` · Site: /en/styles/art-deco
