# Onboarding Tour / 新手引导

> Patterns · `id: onboarding-tour`

Introduces an interface with an overlay, a spotlight cutout and step bubbles: each step reveals one key area and explains it in place, paced by prev/next controls and a step indicator, always skippable. The explanation lives where the feature happens instead of making users hunt for docs.

**Aliases:** 新手引导 · 功能引导 · 引导蒙层 · 步骤引导 · 高亮引导 · 首次使用引导

**Category:** Navigation / Guidance

## When to use

- There are 3–5 core features worth introducing proactively
- A release moved or re-meaning of key entry points
- Most visitors are first-timers and features are hard to discover alone

## When not to use

- The UI is simple enough to explore faster without a tour
- Long tours get button-mashed through and teach nothing
- Forcing it on every visit — show once, keep a replay entry

## Variants

- **Spotlight** (聚光引导) — The overlay cuts a hole around the target, tightest focus
- **Tooltip sequence** (气泡序列) — Sequential bubbles that never block the whole page
- **Checklist** (任务清单) — A side checklist users complete at their own pace

## Implementation

**CSS:** `position: absolute` `box-shadow` `z-index` `transition`

Build the overlay with a huge box-shadow on the target (or four mask blocks) to fake the cutout; position the bubble via the target's getBoundingClientRect. Drive steps with a useState index, support Esc and overlay-click to dismiss. Transitions respect prefers-reduced-motion by jumping without animation.

## Agent task prompt

```text
Implement an onboarding tour in the current project.

Inspect existing tooltip/popover components first; reuse bubble styling.
Usage: introducing workspace features on first visit.
Requirements:
- 3–5 steps, each spotlighting one key area with in-place explanation
- Prev/next controls, step indicator, skippable at any time
- Auto-show on first visit only, with a replay entry
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create an onboarding tour demo that highlights key UI areas step by step with explanation bubbles.

**Design:** Create an onboarding tour demo. Requirements: a mock UI with 3 key areas, an overlay spotlighting the current step's target, a nearby bubble explaining the feature; prev/next buttons, step dots and a skip; a "replay tour" entry after finishing.

**Implementation:** Implement Onboarding Tour in React: a step array of target selectors and copy, a useState index; highlight targets with a ring and an oversized box-shadow to fake the cutout, with the bubble absolutely positioned nearby. Support Esc to skip and a replay button after finishing. Respect prefers-reduced-motion.

## Related

- [tooltip](/patterns/tooltip) — Used with
- [popover](/patterns/popover) — Used with
- [modal](/patterns/modal) — Used with
- [progressive-disclosure](/patterns/progressive-disclosure) — Similar
- [empty-state](/patterns/empty-state) — Similar

## Applicable styles

`minimalism` `bento-grid`

## Sources

- [Nielsen Norman Group — Onboarding](https://www.nngroup.com/articles/first-two-days-onboarding/)
- [Material Design — Feature discovery](https://m3.material.io/foundations/interactive-patterns/feature-discovery/overview)

---

JSON: `/api/concept/patterns/onboarding-tour.json` · Site: /en/patterns/onboarding-tour
