# Stepper / 步骤条

> Components · `id: stepper`

An ordered progress indicator that explains the stages of a task, the current step and completed work. Pair it with a multi-step form to make a long task easier to understand. Validate before advancing, preserve values when going back, and keep progress indication distinct from the controls that move the flow forward.

**Aliases:** 分步表单 · 第几步那个进度 · 步骤指示器 · wizard steps

**Category:** Feedback

## Name disambiguation

Stepper is ambiguous: it names both a numeric +/- input (input stepper) and a multi-step progress indicator. Pick by context — changing a number vs reading progress.

## When to use

- Ordered setup, registration or checkout flows.
- Tasks where people need to see how much work remains.

## When not to use

- A single step or a short form that fits together.
- Highly branching flows with an unpredictable number of stages.

## Variants

- **Horizontal** (水平步骤) — Show progress across a wide canvas.
- **Vertical** (垂直步骤) — Stack stages for narrow screens or longer labels.

## Implementation

**CSS:** `display: flex` `aria-current="step"` `gap`

Represent ordered stages with ol and mark the current stage with aria-current="step". Keep form values in the flow owner so going back preserves them. Explain validation failures in place and provide a clear completion message.

## Agent task prompt

```text
Inspect existing components and tokens before implementing Stepper.
Requirements:
- Represent ordered stages with ol and mark the current stage with aria-current="step". Keep form values in the flow owner so going back preserves them. Explain validation failures in place and provide a clear completion message.
- Invalid input blocks advancement with an actionable message.
- Going back preserves values; the last step summarizes them.
- Support narrow screens, both themes and reduced motion.
- Add no dependencies.
Run existing checks and list changed files and validation results.
```

### Other prompt layers

**Basic:** Create a Stepper component. Ordered setup, registration or checkout flows.

**Design:** Design a Stepper with clear hierarchy and state feedback. Show progress across a wide canvas. Stack stages for narrow screens or longer labels. Invalid input blocks advancement with an actionable message. Going back preserves values; the last step summarizes them.

**Implementation:** Represent ordered stages with ol and mark the current stage with aria-current="step". Keep form values in the flow owner so going back preserves them. Explain validation failures in place and provide a clear completion message.

## Related

- [progress-bar](/components/progress-bar) — Similar
- [input](/components/input) — Similar
- [button](/components/button) — Similar

## Confusable

- [wizard](/components/wizard) — A wizard is the multi-step flow itself; a progress stepper is only its indicator.
- [slider](/components/slider) — A slider picks along a continuum; an input stepper steps by a fixed delta.
- [pagination](/components/pagination) — Pagination moves through data pages; a stepper advances task steps.

## Sources

- [W3C WAI — Accessible interaction patterns](https://www.w3.org/WAI/tutorials/forms/multi-page/)

---

JSON: `/api/concept/components/stepper.json` · Site: /en/components/stepper
