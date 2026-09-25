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

## Implementation

**CSS:** `background: radial-gradient` `filter: blur()` `@keyframes drift` `mix-blend-mode` `background-clip: text`

Three ingredients: two to four large radial-gradient blooms (40–80% of the canvas), heavy blur around 60px, and hues spanning two or three segments (teal→violet→blue) that partially overlap. Keep foreground minimal — solid text or translucent panels hold contrast. Animated blobs drift slowly (20s+) on transform only, multiply durations by var(--demo-speed, 1), and freeze under prefers-reduced-motion.

## Agent task prompt

```text
Implement an aurora-gradient hero section in the current project.

Inspect the existing design tokens first; expose bloom colors as theme-configurable variables.
Requirements:
- Two to four blurred radial-gradient blooms spanning two or three hues with partial overlap
- Minimal foreground: solid text or translucent panels keep contrast
- Blob motion is slow transform-only drift, durations multiplied by var(--demo-speed, 1), frozen under prefers-reduced-motion
- Aurora palettes for both light and dark modes
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** "Design an interface in Aurora Gradient style: teal, violet and blue blurred blooms drifting across the background, minimal restrained foreground, soft breathing atmosphere."

**Design:** "Aurora spec: light ground #F6F7FB, dark ground #0B0E1A; two to four radial-gradient blooms (#5EEAD4, #818CF8, #C084FC...) blurred ~60px overlapping by ~20%; foreground text solid (white on dark, near-black on light), buttons may carry the same gradient; blob motion is slow drift/scale over 20s+, respecting prefers-reduced-motion."

**Implementation:** "Implement an aurora background in CSS: .aurora { position: relative; overflow: hidden; background: #0B0E1A; } .aurora::before { content: ''; position: absolute; inset: -20%; background: radial-gradient(40% 40% at 30% 30%, #5EEAD4aa, transparent 70%), radial-gradient(45% 45% at 70% 40%, #818CF8aa, transparent 70%), radial-gradient(40% 40% at 50% 80%, #C084FCaa, transparent 70%); filter: blur(60px); animation: aurora-drift 24s ease-in-out infinite alternate; } Animate transform only; multiply duration by var(--demo-speed, 1)."

## Related

- [glassmorphism](/styles/glassmorphism) — Similar
- [bento-grid](/styles/bento-grid) — Similar
- [minimalism](/styles/minimalism) — Similar
- [card](/styles/card) — Affects
- [landing-page](/styles/landing-page) — Used with

## Sources

- [MDN — radial-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)
- [Stripe — brand gradient practice](https://stripe.com/blog)

---

JSON: `/api/concept/styles/aurora.json` · Site: /en/styles/aurora
