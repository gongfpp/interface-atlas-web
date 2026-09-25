# Press Feedback / 按压反馈

> Motion · `id: press-feedback`

When users press a clickable element it scales down slightly (typically 0.95–0.98) and springs back on release. A few tens of milliseconds that make a UI feel like physical buttons instead of flat web pages.

**Aliases:** 点击反馈 · 按钮缩一下 · 按下缩放 · 按压缩小 · tap feedback · active scale

**Category:** Feedback / Interaction

## When to use

- All tappable elements — buttons, cards, icon buttons
- Touch-first interfaces where pressing is the primary gesture
- Products aiming for a tactile feel

## When not to use

- Very large tap areas — scaling the whole card makes text wobble
- Small inline actions inside rows — avoid whole-row jitter
- When stronger feedback already exists — avoid stacking effects

## Variants

- **Scale** (缩放) — Most common, scale(0.96)
- **Scale + shadow** (缩放 + 阴影收紧) — Tighten shadow simultaneously to simulate pressing
- **Darken** (变暗) — No scaling; dim instead — suits desktop

## Implementation

**CSS:** `transform: scale` `transition` `:active`

Use the :active pseudo-class with `transition: transform 80ms`; relax to ~150ms on release for a spring feel. Pure CSS suffices. On touch devices, :active can be flaky — add a touchstart listener or handle -webkit-tap-highlight.

## Compare dimensions (`click-feedback`)

- **Intensity:** Medium, restrained
- **Mobile friendly:** Good — triggers on press
- **Best for:** Buttons / small cards

## Agent task prompt

```text
Add unified press feedback to all clickable elements in the current project.

Check for existing global button styles first and stay consistent.
Requirements:
- scale(0.96) + tightened shadow on press; 80ms down, 150ms back
- Cover the Button component and clickable cards
- Reliable on touch devices
- Respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add press feedback to buttons — a slight scale-down on press, springing back on release.

**Design:** On press, scale the button to 0.96 and tighten its shadow; 80ms down, 150ms spring back — a tactile key feel that also works on touch devices.

**Implementation:** CSS-only: `active:scale-[0.96]` with `transition-transform duration-75` down and ~150ms back; `active:shadow-sm`. Make :active reliable on touch (touchstart listener or the ontouchstart hack). Respect prefers-reduced-motion.

## Related

- [hover-lift](/motion/hover-lift) — Similar
- [magnetic-button](/motion/magnetic-button) — Similar
- [ripple](/motion/ripple) — Similar
- [button](/motion/button) — Alternative

## Applicable styles

`minimalism` `neobrutalism` `claymorphism`

## Sources

- [Material Design — States](https://m3.material.io/foundations/interaction/states/state-layers)

---

JSON: `/api/concept/motion/press-feedback.json` · Site: /en/motion/press-feedback
