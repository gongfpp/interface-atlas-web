# Brutalism / 粗野主义

> Styles · `id: brutalism`

Raw structure, oversized type and blunt contrast as an anti-polish web look. Monochrome cuts, visible grids and hard square edges keep the honesty of default HTML. Information hits the reader straight on; radii, gradients and decorative refinement are refused.

**Aliases:** 粗野主义 · 野兽派网页 · 那种很糙的黑白网页 · 超大字不修边幅 · 原始网页风 · brutalism · web brutalism · brutalist web design

**Category:** Style / Visual Language

## When to use

- Designer portfolios, indie publishing and art institutions where attitude is the content
- Standing out among polished sites through deliberate unpolish
- Low-density manifesto or campaign pages where type is the poster

## When not to use

- Finance, healthcare and civic tools that must feel trustworthy
- Long forms and dense data backends — blunt contrast fatigues reading
- Brands that must feel refined, premium or caring

## Variants

- **Classic brutalism** (经典粗野) — Monochrome cuts with one harsh accent, default-browser honesty kept
- **Soft brutalism** (软粗野) — Raw contrast and oversized type kept, radii and whitespace loosened
- **Typographic brutalism** (排印粗野) — Size, weight and leading carry everything — almost no graphics

## Design spec

- **typography:** Ultra-bold sans or mono with cliff-edge size contrast
- **color:** Paper white, pure black and one harsh orange-red #FF3B00
- **border:** 2px solid square edges, radius always 0
- **shadow:** No shadows; inverted blocks or thick strokes instead
- **spacing:** Hard cuts on the grid, whitespace in big blunt blocks

## Implementation

**CSS:** `font-size: clamp(2.5rem, 8vw, 6rem)` `border-radius: 0` `border: 2px solid currentColor` `background-image: repeating-linear-gradient()` `font-family: system-ui, monospace`

The point is unpolish: radii stay 0, shadows are replaced by hard borders, type is system or monospace. A repeating-linear-gradient fakes the visible grid — no need for real CSS Grid. Keep exactly one harsh accent (classically #FF3B00); everything else is black and white. Dark mode inverts the value relationship but keeps the same blunt cuts. Never lower text contrast or scramble reading order just to look brutalist.

## Agent task prompt

```text
Implement Brutalism visual style in the current project.

Inspect the existing component system and design tokens first; reuse components and swap only the visual layer.
Requirements:
- Zero radii, no gradients, no soft shadows; hierarchy via thick strokes or inverted blocks
- Oversized clamp headings in system sans or monospace
- Visible background grid, exactly one harsh accent (#FF3B00), rest monochrome
- Buttons invert on hover; no bounce or lift
- Dark mode inverts values while keeping the blunt vocabulary
- Text contrast at 4.5:1 minimum; reading order never scrambled by decoration
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Design an interface in Brutalism style: monochrome cuts, oversized type, visible grid, hard square edges and one harsh accent — deliberately anti-polish.

**Design:** "Brutalism spec: paper white #F5F5F0 or near-black ground; pure black #0A0A0A body; exactly one harsh accent #FF3B00; zero radii everywhere; headings at clamp(2.5rem, 8vw, 6rem) in ultra-bold sans or mono; 1px visible grid rules; buttons as 2px outline or solid inverted blocks, hover just inverts colors; dark mode flips to near-black with paper-white type, accent unchanged."

**Implementation:** "Implement Brutalism in CSS: global border-radius 0; headings with font-size clamp and weight 800+; grid via background-image: repeating-linear-gradient(to right, #0A0A0A14 0 1px, transparent 1px 48px) plus a vertical twin; buttons with border: 2px solid #0A0A0A that invert fill/text on hover; no box-shadow — hierarchy comes from thick strokes or inverted blocks; system-ui or ui-monospace stack."

## Related

- [neobrutalism](/styles/neobrutalism) — Similar
- [minimalism](/styles/minimalism) — Alternative
- [swiss-style](/styles/swiss-style) — Similar
- [button](/styles/button) — Affects
- [card](/styles/card) — Affects
- [navbar](/styles/navbar) — Affects

## Confusable

- [neobrutalism](/styles/neobrutalism) — Brutalism is raw, unstyled web in monochrome; neobrutalism is candy stickers with thick borders and hard shadows.

## Sources

- [Wikipedia — Brutalist architecture](https://en.wikipedia.org/wiki/Brutalist_architecture)
- [NN/g — Brutalism and Antidesign](https://www.nngroup.com/articles/brutalism-antidesign)

---

JSON: `/api/concept/styles/brutalism.json` · Site: /en/styles/brutalism
