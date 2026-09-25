# Onboarding / 新手引导

> Pages · `id: onboarding`

A first-run page that guides new users to one key action with short explanations, samples and progress cues, rather than every feature.

**Aliases:** 新手引导 · 引导流程 · 新手教程 · 第一次用怎么玩 · 上手引导 · 首次使用引导 · onboarding

**Category:** Page / Onboarding

## When to use

- First-run product that must teach a core action
- A new feature ships and existing users must migrate
- Multi-step setup needs lower drop-off

## When not to use

- Everyday use by returning power users
- Simple tools whose navigation already explains itself
- Forced intro popups on every launch

## Variants

- **Step Tour** (分步导览) — Spotlight overlay with step bubbles that focus the current target
- **Checklist** (任务清单) — A list of setup tasks that can be checked off and resumed later
- **Interactive Walkthrough** (实操引导) — Learners complete one real action to learn by doing

## Page structure

1. **Welcome** — One-line value proposition plus a start button stating the immediate payoff.
2. **Guided steps** — One action per step; the overlay focuses a target and the copy stays skippable.
3. **Task checklist** — Three to five tasks with visible progress that resume after leaving.
4. **Completion** — On finish, jump into a real task or a sample instead of an empty screen.

## Implementation

**CSS:** `flex` `grid` `position: fixed` `backdrop-filter: blur(6px)` `transition: opacity 200ms ease`

The tour overlay is position fixed over the viewport; highlight the target with a box-shadow cutout or an SVG mask. Center progress bars and step dots with flex, and write durations as calc multiplied by var(--demo-speed, 1). Keep step state in one place (current step plus done flag); skip and back drive the same state machine rather than one boolean per step.

## Agent task prompt

```text
Implement onboarding in the current project.

Inspect existing routes, overlay components and design tokens first; reuse them.
Requirements:
- Support both a step tour and a task checklist
- A single state drives progress and the current step
- Complete skip, back and finish paths
- Animations respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create an onboarding page with a welcome message, step-by-step copy and a start button.

**Design:** Design a three-step onboarding flow: a centered card with progress dots on top, an illustration and one line of copy in the middle, a primary button and a skip link below. Keep dark mode consistent, respect prefers-reduced-motion in step transitions, and finish by handing over a sample task instead of an empty screen.

**Implementation:** React plus Tailwind onboarding: a single step state drives card content and progress. The overlay is fixed-positioned with CSS variables controlling animation speed; skip jumps straight to the main UI; no new dependencies.

## Related

- [onboarding-tour](/pages/onboarding-tour) — Uses pattern
- [wizard](/pages/wizard) — Uses pattern
- [stepper](/pages/stepper) — Contains
- [progress-bar](/pages/progress-bar) — Contains
- [button](/pages/button) — Contains

## Sources

- [Apple Human Interface Guidelines — Onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding)
- [Nielsen Norman Group — Mobile App Onboarding](https://www.nngroup.com/articles/mobile-app-onboarding/)

---

JSON: `/api/concept/pages/onboarding.json` · Site: /en/pages/onboarding
