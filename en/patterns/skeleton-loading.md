# Skeleton Loading / 骨架屏

> Patterns · `id: skeleton-loading`

Grey placeholder blocks that mirror the real content structure while loading, usually with a subtle shimmer or pulse. It tells users "content is coming and it will look like this" instead of a blank page or a bare spinner.

**Aliases:** Skeleton · 骨架加载 · 内容占位 · 灰色占位 · 加载占位图 · shimmer 占位

**Category:** Feedback / Loading

## When to use

- Content structure is stable and predictable
- Expected load time is 1–3 seconds
- Lists and card feeds with repeating structures

## When not to use

- Very fast loads (< 300ms) — the skeleton itself becomes flicker
- Unpredictable content — placeholders that wildly mismatch the result
- Background operations with unchanged layout — prefer progress or button state

## Variants

- **Static** (静态占位) — Plain grey blocks, most restrained
- **Pulse** (呼吸) — Slow opacity oscillation
- **Shimmer** (微光扫过) — A highlight sweeping across, iOS-style

## Implementation

**CSS:** `background` `animation` `background-clip: text` `linear-gradient`

Shape placeholders with border-radius; shimmer is a gradient highlight layer animated via background-position or a translated pseudo-element; pulse animates opacity. Match placeholder size to real content to avoid layout shift on load.

## Compare dimensions (`loading-indicator`)

- **Interruption:** Low — layout unchanged
- **Information volume:** Low — structure only
- **Suitable duration:** 1–3 seconds
- **Result consistency:** High

## Agent task prompt

```text
Implement Skeleton Loading in the current project.

Inspect the existing component system and design tokens first; reuse existing surface colors and radius variables.
Usage: article list loading state.
Requirements:
- Grey placeholder blocks for structure (avatar, title, body)
- Subtle shimmer animation, respecting prefers-reduced-motion
- Placeholder sizes close to real content to avoid layout shift
- Dark mode support
- No unnecessary dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a skeleton loading component that shows grey placeholders matching the real content structure while data loads.

**Design:** "Create a skeleton loading component. Requirements: grey blocks (round avatar", title line, two body lines) with a subtle shimmer sweep; support light/dark themes; placeholder sizes must match the final content.

**Implementation:** "Implement Skeleton Loading in React + Tailwind. Structure: placeholder divs with animate-pulse or custom shimmer keyframes (gradient highlight + background-position animation). Export Skeleton", SkeletonCircle, SkeletonText with className size overrides. Respect prefers-reduced-motion (fall back to static blocks).

## Related

- [loading-spinner](/patterns/loading-spinner) — Alternative
- [progress-bar](/patterns/progress-bar) — Alternative
- [optimistic-ui](/patterns/optimistic-ui) — Similar
- [lazy-loading](/patterns/lazy-loading) — Similar
- [empty-state](/patterns/empty-state) — Similar

## Applicable styles

`minimalism` `bento-grid`

## Sources

- [Material Design — Text fields & placeholders](https://m3.material.io/)
- [Apple HIG — Loading](https://developer.apple.com/design/human-interface-guidelines/loading)

---

JSON: `/api/concept/patterns/skeleton-loading.json` · Site: /en/patterns/skeleton-loading
