# Page Transition / 页面切换过渡

> Motion · `id: page-transition`

When navigating, the outgoing page slides or fades away while the incoming one arrives — turning a hard cut into 200–400ms of continuous motion. Direction should mirror hierarchy: pushing left to go deeper, exiting right to go back, building a spatial mental model.

**Aliases:** 页面转场 · 切换动画 · 页面跳转动画 · 转场效果 · 路由过渡 · page switch animation

**Category:** Motion / Navigation

## When to use

- SPA route changes, step wizards, tab-like flows
- When parent-child hierarchy between pages matters
- Web products aiming for a native-app feel

## When not to use

- Transitions beyond 300ms — they drag the browsing rhythm
- Rapid back-and-forth navigation — animation lags the clicks
- Traditional MPAs with full reloads — nothing to animate between

## Variants

- **Push** (推入) — New page pushes in from the right — expresses depth
- **Cross-fade** (淡入淡出) — Both pages cross-fade — neutral, directionless
- **Shared axis** (共享轴) — Material's paired same-axis enter/exit

## Implementation

**CSS:** `transform: translateX` `opacity` `transition`

Minimal recipe: on navigation give the outgoing page an "exit" class (translateX(-30%) + opacity:0) and animate the incoming one from translateX(30%) to 0 over 250–300ms ease-out. The modern route is the View Transitions API — wrap the router update in document.startViewTransition for a cross-fade you can restyle per direction in CSS. Respect prefers-reduced-motion.

## Agent task prompt

```text
Add page transitions to the current SPA's route changes.

Confirm the routing setup and page container structure first.
Requirements:
- Opposing slide-and-fade directions for forward/back, 280ms ease-out
- No glitchy overlap during rapid successive navigations
- No transition on first load
- Respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add a transition between route changes — the new page fades in as the old one fades out.

**Design:** Use a shared-axis transition: forward navigations slide the new page in from +30% while the old one fades left; backward reverses it. 280ms ease-out; ignore re-triggers while animating.

**Implementation:** React Router: apply a key-driven CSS animation class to the route container (slide-in-left/right, 250ms ease-out both). Or use document.startViewTransition(() => flushSync(update)) and steer direction via ::view-transition-old/new. Respect prefers-reduced-motion (fall back to a 120ms cross-fade or an instant swap).

## Related

- [drawer-slide](/motion/drawer-slide) — Similar
- [modal](/motion/modal) — Applies to
- [tabs](/motion/tabs) — Applies to
- [toast-slide-in](/motion/toast-slide-in) — Similar

## Sources

- [MDN — View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)

---

JSON: `/api/concept/motion/page-transition.json` · Site: /en/motion/page-transition
