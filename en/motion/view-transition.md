# View Transition / 视图过渡

> Motion · `id: view-transition`

A browser-native transition between page states via the View Transitions API: the old view fades out, the new one fades in, and key elements can morph as shared targets. It hides the jump inside continuous spatial narrative so "a new screen" reads as "one step over" rather than a hard cut.

**Aliases:** 视图过渡 · 页面过渡动画 · 切换动画 · 换页过渡 · view transition · view transitions api

**Category:** Motion / Navigation

## When to use

- In-document state or route changes needing continuity — list to detail
- Key elements that should persist visually — titles, images, buttons
- Target browsers already support the View Transitions API

## When not to use

- Long animations on every hop — frequent navigation bogs down
- Old and new views differ wildly — morphing distorts content
- Must support no-API environments without a fallback path

## Variants

- **Cross-fade** (交叉淡入) — Old fades out, new fades in — the safe default
- **Slide** (滑动) — Push in/out along the navigation axis — clear forward/back semantics
- **Shared-axis** (共享轴) — Shared elements morph in place; the rest moves along an axis

## Platform API

- `document.startViewTransition()`
- `view-transition-name`

## Implementation

**CSS:** `@keyframes` `opacity` `transform: translate` `view-transition-name`

The native path calls document.startViewTransition(() => updateDOM()) and assigns view-transition-name to elements that should morph. Without the API fall back to CSS animation: the old view fades or slides out as the new one enters, all durations written calc(<duration> * var(--demo-speed, 1)). Respect prefers-reduced-motion by cutting instantly.

## Agent task prompt

```text
Implement view transitions in the current project.

Inspect the existing component system and design tokens first; reuse existing components.
Keep the project's visual style. Add no unnecessary dependencies.
Requirements:
- State or route changes transition continuously, with key elements staying visually continuous
- CSS fallback when the View Transitions API is missing
- All animation durations written calc(<duration> * var(--demo-speed, 1))
- Respect prefers-reduced-motion
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Add a view transition between list and detail states.

**Design:** Opening a card morphs its title and image into the detail counterparts while the rest cross-fades over ~300ms; going back reverses the move.

**Implementation:** Prefer document.startViewTransition with view-transition-name; fall back to @keyframes with stacked absolute views cross-fading or sliding. Write every duration as calc(<duration> * var(--demo-speed, 1)). Respect prefers-reduced-motion.

## Related

- [page-transition](/motion/page-transition) — Alternative
- [shared-element-transition](/motion/shared-element-transition) — Similar
- [morphing-icon](/motion/morphing-icon) — Used with

## Sources

- [MDN — View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- [W3C — CSS View Transitions Module Level 1](https://www.w3.org/TR/css-view-transitions-1/)
- [MDN — view-transition-name](https://developer.mozilla.org/en-US/docs/Web/CSS/view-transition-name)

---

JSON: `/api/concept/motion/view-transition.json` · Site: /en/motion/view-transition
