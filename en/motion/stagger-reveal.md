# Stagger Reveal / 逐项浮现

> Motion · `id: stagger-reveal`

Instead of appearing at once, a group of items enters one after another at a fixed interval — like roll call. A 40–120ms gap lets a list wake up in order: livelier than a single fade, less impatient than true sequential loading.

**Aliases:** 逐项浮现 · 列表交错出现 · 依次淡入 · 逐个加载出现 · 瀑布式出现

**Category:** Motion / Entrance

## When to use

- Lists, card grids and nav items entering the viewport
- Grouped content inside overlays — menus, notification lists
- Emphasising order across a batch of results

## When not to use

- Long lists — past ~15 items the tail waits too long
- High-frequency workflows where every delay is a cost
- Over-long gaps — beyond 150ms it turns theatrical

## Variants

- **Fade-up** (淡入上浮) — translateY + opacity per item — the universal default
- **Scale-in** (缩放浮现) — Grows from 0.96 to 1 — extra card presence
- **Slide-in** (侧向滑入) — Slides in from one side — menu favourite

## Implementation

**CSS:** `animation-delay: calc(index * 60ms)` `@keyframes fade-up` `opacity 0 → 1` `animation-fill-mode: both`

Share one set of keyframes across items and only stagger animation-delay by index (index × 40–120ms), always with animation-fill-mode: both so items stay hidden during their delay. Multiply both delay and duration by the speed factor. With prefers-reduced-motion show everything at once.

## Agent task prompt

```text
Add a staggered entrance to the project's list pages.

Check existing entrance animations and scroll-trigger logic first; stay consistent.
Requirements:
- Shared keyframes, stagger via animation-delay only (40–120ms)
- fill-mode both to prevent flashes during delays
- Trigger once in view; respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add a stagger reveal to the card list — items fade up one after another in view.

**Design:** As the list enters the viewport, cards fade up sequentially — 400ms per item with a 70ms stagger, the whole group done within 1s, matching reading order.

**Implementation:** One shared keyframe (translateY(16px) + opacity 0 → normal), per item style={{ animationDelay: `${i * 0.07}s` }}, fill-mode both. Trigger once with IntersectionObserver. Show immediately under reduced-motion.

## Related

- [scroll-reveal](/motion/scroll-reveal) — Similar
- [text-reveal](/motion/text-reveal) — Similar
- [card](/motion/card) — Applies to
- [menu](/motion/menu) — Applies to

## Sources

- [Material Design — Motion choreography](https://m2.material.io/design/motion/the-motion-system.html)

---

JSON: `/api/concept/motion/stagger-reveal.json` · Site: /en/motion/stagger-reveal
