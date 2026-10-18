# Flat Design / 扁平化设计

> Styles · `id: flat-design`

A visual language that strips out all simulation: solid color blocks, simple geometry, no gradients, shadows or textures. Hierarchy comes from color, shape and typography alone. The opposite of skeuomorphism — the interface admits it is a glowing plane and trades decoration for clarity.

**Aliases:** 扁平化 · 扁平风格 · 扁平化设计 · 没有阴影那种平面设计 · 色块图标风格 · 扁平UI · Flat UI · Flat Design

**Category:** Style / Visual Language

## When to use

- System products that need cross-platform consistency at low cost
- Icons, infographics and dashboards that must scan instantly
- Small mobile screens where decoration crowds out content

## When not to use

- Complex hierarchies where users need depth cues to see what is clickable
- Brands that need warmth, emotion or crafted refinement
- Grey on grey with hairline buttons — weak affordance triggered Flat 2.0

## Variants

- **Metro Tiles** (Metro 磁贴) — Microsoft Metro — big color tiles, rectangles all the way
- **Flat UI Colors** (Flat UI 撞色) — Saturated clash colors on pale surfaces with 1px borders
- **Flat 2.0** (扁平 2.0) — Shadows return subtly — the prelude to Material

## Design spec

- **typography:** Geometric sans at medium weights
- **color:** Flat fills: blue #1FA2FF, yellow #FFD54F
- **border:** No outlines — blocks define areas
- **shadow:** Completely shadowless
- **spacing:** Small 6px radius, even grid
- **motion:** Linear 100–150ms colour and opacity transitions, no movement
- **states:** Hover uses a brighter flat fill; focus shows a visible 2px dark solid frame; active uses a deeper fill; disabled drops to 50% opacity; error uses a red flat fill with no shadow

## Implementation

**CSS:** `solid-color` `border: 0` `box-shadow: none` `transition: background-color`

Discipline over technique: solid fills and 1px borders only, box-shadow always none, gradients and textures banned. Hierarchy lives in color area and luminance steps. Keep interactive elements on saturated accents or clear outlines; hover changes background-color only, within 150ms. Maintain separate light and dark palettes instead of inverting.

## Agent task prompt

```text
Build a complete Flatly page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep Flatly’s blue hero, yellow actions and yellow/white/teal feature cards: 2/5 copy, 3/5 geometry and three cards below, not a new six-color card experiment. Preserve the renderer’s circle/triangle/rectangle and local shadows rather than flattening existing art with global no-gradient/no-shadow bans. Continue with the existing workspace form and result list.

Reuse current preview.tokens: background #1FA2FF; foreground #FFFFFF; accent #FFD54F / #333333; card rgba(255,255,255,.16); border rgba(255,255,255,.35); radius 8px; font 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif; card shadow none.

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Full-page operations:
Get started creates a named workspace with a chosen plan and shows the matching result. Features, Pricing, Blog and Log in reach relevant content or a demo identity explanation.

Share one renderer between static covers, the detail experience and /style-scenes/flat-design/ (English /en/style-scenes/flat-design/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** "Design an interface in Flat Design style: solid color blocks with no gradients, shadows or textures; hierarchy from color and typography; interactive elements marked by saturated accents."

**Design:** "Flat design spec: white or light grey background with 5–6 saturated tiles (Flat UI Colors: #3498DB, #E74C3C, #2ECC71...); no borders, no shadows, 0–4px radii; inverted or near-black text with clear type scale; hover darkens the fill by 8% only; dark mode uses its own palette, not a simple inversion."

**Implementation:** Build a complete Flatly page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep Flatly’s blue hero, yellow actions and yellow/white/teal feature cards: 2/5 copy, 3/5 geometry and three cards below, not a new six-color card experiment. Preserve the renderer’s circle/triangle/rectangle and local shadows rather than flattening existing art with global no-gradient/no-shadow bans. Continue with the existing workspace form and result list.

Reuse current preview.tokens: background #1FA2FF; foreground #FFFFFF; accent #FFD54F / #333333; card rgba(255,255,255,.16); border rgba(255,255,255,.35); radius 8px; font 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif; card shadow none.

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Get started creates a named workspace with a chosen plan and shows the matching result. Features, Pricing, Blog and Log in reach relevant content or a demo identity explanation.

Share one renderer between static covers, the detail experience and /style-scenes/flat-design/ (English /en/style-scenes/flat-design/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [minimalism](/interface-atlas-web/en/styles/minimalism) — Similar
- [skeuomorphism](/interface-atlas-web/en/styles/skeuomorphism) — Similar
- [swiss-style](/interface-atlas-web/en/styles/swiss-style) — Similar
- [button](/interface-atlas-web/en/components/button) — Affects
- [card](/interface-atlas-web/en/components/card) — Affects

## Sources

- [Nielsen Norman Group — Flat Design](https://www.nngroup.com/articles/flat-design/)
- [Apple HIG — Visual Design](https://developer.apple.com/design/human-interface-guidelines/visual-design)

---

JSON: `/interface-atlas-web/api/concept/styles/flat-design.json` · Site: /interface-atlas-web/en/styles/flat-design
