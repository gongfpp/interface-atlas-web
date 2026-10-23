# Aurora Gradient / 极光渐变

> Styles · `id: aurora`

An atmosphere built from large flowing gradient blooms: teal, violet and blue blurred blobs drift and merge across the background while the foreground stays minimal. Color is the protagonist — soft, cross-hue, aurora-like transitions that give the interface breath and warmth.

**Aliases:** 极光渐变 · 极光风格 · 渐变光斑背景 · 流动光晕设计 · 那种绿紫渐变的模糊背景 · 大面积渐变光效 · Aurora Background · Mesh Gradient

**Category:** Style / Visual Language

## When to use

- Landing pages, heroes and brand pages that need instant atmosphere
- AI and creative tools where gradients are a category signature
- Minimal foregrounds that need warmth in either mode

## When not to use

- Data-dense tools where blooms interfere with scanning
- Accessibility-critical contexts — text over blooms is hard to keep compliant
- Performance-sensitive devices when animated blobs are used

## Variants

- **Static Mesh** (静态网格渐变) — A one-shot multi-point mesh gradient, no motion
- **Flowing Blobs** (流动光斑) — Heavily blurred blobs drifting slowly — aurora in motion
- **Dark Aurora** (暗夜极光) — Denser light bands over deep space, higher contrast

## Design spec

- **typography:** Sans-serif white display
- **color:** Night base #0D0B1E with green-violet-pink glow
- **border:** 1px translucent violet borders
- **shadow:** Deep shadows with glow
- **spacing:** Floating stacked cards, roomy gaps
- **motion:** 300–500ms ease-in-out drift of the glow, with fades; honour prefers-reduced-motion
- **states:** Hover brightens the glow; focus shows a visible violet-pink ring; active dims the bloom; disabled loses opacity and glow; error tints the glow red, fading colour only

## Implementation

**CSS:** `background: radial-gradient` `filter: blur()` `@keyframes drift` `mix-blend-mode` `background-clip: text`

Three ingredients: two to four large radial-gradient blooms (40–80% of the canvas), heavy blur around 60px, and hues spanning two or three segments (teal→violet→blue) that partially overlap. Keep foreground minimal — solid text or translucent panels hold contrast. Animated blobs drift slowly (20s+) on transform only, multiply durations by var(--demo-speed, 1), and freeze under prefers-reduced-motion.

## Agent task prompt

```text
Build a complete Borealis page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep Borealis’ green/violet/pink radial light field over #0D0B1E, with the existing CSS mountain silhouette, translucent cards and pale-violet actions; do not impose a new 60px blur or 24s automatic drift. The light-field tool changes --light-hue and --light-intensity live, initially Emerald / 65%; saved recipes do not redraw the original hero.

Reuse current preview.tokens: background radial-gradient(60% 80% at 20% 10%, rgba(52,211,153,.35), transparent), radial-gradient(55% 70% at 80% 25%, rgba(129,140,248,.4), transparent), radial-gradient(60% 60% at 50% 95%, rgba(236,72,153,.3), transparent), #0D0B1E; foreground #F4F3FF; accent #A5B4FC / #1E1B4B; card rgba(255,255,255,.08); border rgba(165,180,252,.3); radius 14px; font 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif; card shadow none.

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Full-page operations:
Light it up opens light-field mixing. Choose a spectrum and intensity, preview live and save the recipe, then edit/save again. Light, Color, Space and v2.0 reveal matching content.

Share one renderer between static covers, the detail experience and /style-scenes/aurora/ (English /en/style-scenes/aurora/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** "Design an interface in Aurora Gradient style: teal, violet and blue blurred blooms drifting across the background, minimal restrained foreground, soft breathing atmosphere."

**Design:** "Aurora spec: light ground #F6F7FB, dark ground #0B0E1A; two to four radial-gradient blooms (#5EEAD4, #818CF8, #C084FC...) blurred ~60px overlapping by ~20%; foreground text solid (white on dark, near-black on light), buttons may carry the same gradient; blob motion is slow drift/scale over 20s+, respecting prefers-reduced-motion."

**Implementation:** Build a complete Borealis page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. The current YAML preview is authoritative for the brand, original navigation and CTAs; never substitute a generic marketing template.

Keep Borealis’ green/violet/pink radial light field over #0D0B1E, with the existing CSS mountain silhouette, translucent cards and pale-violet actions; do not impose a new 60px blur or 24s automatic drift. The light-field tool changes --light-hue and --light-intensity live, initially Emerald / 65%; saved recipes do not redraw the original hero.

Reuse current preview.tokens: background radial-gradient(60% 80% at 20% 10%, rgba(52,211,153,.35), transparent), radial-gradient(55% 70% at 80% 25%, rgba(129,140,248,.4), transparent), radial-gradient(60% 60% at 50% 95%, rgba(236,72,153,.3), transparent), #0D0B1E; foreground #F4F3FF; accent #A5B4FC / #1E1B4B; card rgba(255,255,255,.08); border rgba(165,180,252,.3); radius 14px; font 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif; card shadow none.

Use generic-style-pages.css’s existing workspace dark/variants selectors rather than redrawing the hero from generic historical variants; retain each rendered visual panel’s local highlights, gradients and shadows.

Light it up opens light-field mixing. Choose a spectrum and intensity, preview live and save the recipe, then edit/save again. Light, Color, Space and v2.0 reveal matching content.

Share one renderer between static covers, the detail experience and /style-scenes/aurora/ (English /en/style-scenes/aurora/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

## Related

- [glassmorphism](/en/styles/glassmorphism) — Similar
- [bento-grid](/en/styles/bento-grid) — Similar
- [minimalism](/en/styles/minimalism) — Similar
- [card](/en/components/card) — Affects
- [landing-page](/en/pages/landing-page) — Used with

## Sources

- [MDN — radial-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)
- [Stripe — brand gradient practice](https://stripe.com/blog)

---

JSON: `/api/concept/styles/aurora.json` · Site: /en/styles/aurora
