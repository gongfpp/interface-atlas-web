# Scroll Reveal / 滚动显现

> Motion · `id: scroll-reveal`

Elements stay hidden until they enter the viewport, then play a fade, rise or slide-in — once. It replaces "dump everything at once" with content revealed at the pace of reading, giving long pages a sense of order. Usually triggered by IntersectionObserver.

**Aliases:** 滚动显现 · 滚动淡入 · 进入视口动画 · 滑到那里才出现 · 滚动出现 · scroll into view animation

**Category:** Motion / Scroll

## When to use

- Long landing pages revealing sections one by one
- Linear reading — articles, case studies, showcases
- When the eye should be led top-to-bottom

## When not to use

- Content users came for — late reveal hurts
- Decision-critical info — forms, pricing
- Revealing everything on the page — waiting fatigue

## Variants

- **Fade up** (淡入上浮) — opacity 0→1 + translateY(24px→0) — the default
- **Slide in** (侧向滑入) — Enter from a side — suits alternating image/text layouts
- **Scale in** (缩放浮现) — 0.92→1 scale — good for cards and images

## Implementation

**CSS:** `IntersectionObserver` `opacity` `transform: translateY` `transition`

Observe targets with IntersectionObserver (threshold 0.15–0.25); on entry add a .revealed class driving `transition: opacity 0→1, translateY(24px)→0` over 600ms ease-out, then unobserve. Scale durations by a speed variable. The hidden initial state breaks no-JS rendering — always ship a fallback; respect prefers-reduced-motion (show immediately).

## Agent task prompt

```text
Add scroll-reveal animations to the landing page's sections.

Check for an existing reveal/observer utility first; reuse it.
Requirements:
- Fade up 24px on viewport entry, 600ms, once only
- 80ms stagger for on-screen siblings
- No-JS and SSR above-the-fold content never hidden
- Respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add scroll reveal to page sections — fade up as they enter the viewport.

**Design:** Sections fade up 24px when crossing 80% of viewport height, 600ms ease-out, once only; siblings on screen stagger 80ms apart.

**Implementation:** IntersectionObserver (rootMargin: '0px 0px -15% 0px') adds .revealed and unobserves; CSS: `.reveal{opacity:0;transform:translateY(24px)}` `.revealed{opacity:1;transform:none;transition:all .6s ease-out}`. Ship a no-JS fallback (noscript or visible-by-default). Respect prefers-reduced-motion.

## Related

- [lazy-loading](/motion/lazy-loading) — Used with
- [infinite-scroll](/motion/infinite-scroll) — Used with
- [text-reveal](/motion/text-reveal) — Similar
- [stagger-reveal](/motion/stagger-reveal) — Similar

## Sources

- [MDN — Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)

---

JSON: `/api/concept/motion/scroll-reveal.json` · Site: /en/motion/scroll-reveal
