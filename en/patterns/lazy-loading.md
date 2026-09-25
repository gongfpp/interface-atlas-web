# Lazy Loading / 懒加载

> Patterns · `id: lazy-loading`

Defers loading of off-viewport resources: images, list chunks and components are fetched and rendered only when they approach or enter the viewport. The first screen pays only for what is visible, with placeholders preventing layout jumps as content streams in.

**Aliases:** 懒加载 · 按需加载 · 延迟加载 · 滚动到才加载 · 图片懒加载 · 进入视口加载

**Category:** Performance / Loading

## When to use

- Pages with many images or long lists beyond the first screen
- First-load performance matters and initial requests must shrink
- Much of the content will likely never be scrolled to

## When not to use

- Assets sit in the first screen — deferring only adds delay
- Printing, SEO or no-JS contexts need the full content upfront
- Few tiny assets — splitting costs more than it saves

## Variants

- **Native** (原生懒加载) — One attribute, browser handles it
- **IntersectionObserver** (视口侦测) — Mount and fade in on intersection, more control
- **Placeholder** (占位渐进) — Blur-up or solid placeholder swaps in when ready

## Implementation

**CSS:** `loading: lazy` `IntersectionObserver` `opacity` `transform`

Prefer native loading="lazy" for images; use IntersectionObserver on a placeholder for custom timing or animation, then set the real src or mount the component with an opacity/translate reveal. Reserve space with aspect-ratio to avoid layout shift. Respect prefers-reduced-motion by revealing instantly.

## Agent task prompt

```text
Implement lazy image loading in the current project.

Inspect existing image components and loading states first; reuse them.
Usage: article lists and long marketing pages.
Requirements:
- Prefer native loading="lazy"; use IntersectionObserver when animation is needed
- Placeholders reserve the same size as the image to avoid layout shift
- Fade in on load, respecting prefers-reduced-motion
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a lazy loading demo where images load and fade in only as they scroll into the viewport.

**Design:** Create a lazy loading demo. Requirements: cards in a scrollable canvas show grey placeholders until they enter the viewport, then load and fade in; placeholders match final sizes to avoid layout shift; include a "simulate viewport" button for easy demoing.

**Implementation:** Implement lazy loading with React + IntersectionObserver. Render placeholder divs with fixed sizes; when a ref intersects (with rootMargin lead), set loaded and render real content with a CSS fade. Disconnect the observer on unmount. Respect prefers-reduced-motion.

## Related

- [infinite-scroll](/patterns/infinite-scroll) — Similar
- [skeleton-loading](/patterns/skeleton-loading) — Similar
- [progressive-disclosure](/patterns/progressive-disclosure) — Similar
- [empty-state](/patterns/empty-state) — Similar
- [pagination](/patterns/pagination) — Used with

## Applicable styles

`bento-grid` `minimalism`

## Sources

- [MDN — Lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Lazy_loading)
- [MDN — Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

JSON: `/api/concept/patterns/lazy-loading.json` · Site: /en/patterns/lazy-loading
