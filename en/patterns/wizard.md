# Wizard / 多步表单

> Patterns · `id: wizard`

A long form split into ordered steps, each focusing on a few fields, advancing toward completion. A step indicator marks progress and the current slot; users can revisit finished steps, correct them, and press on, usually with a final review. It turns an endless form into finishable small tasks and lightens per-screen cognitive load.

**Aliases:** 多步表单 · 分步填写 · 向导 · 步骤表单 · 一步步填的表单 · wizard · stepper form

**Category:** Form / Flow

## When to use

- More than ~8 fields that group naturally by topic
- Later answers depend on earlier ones — order matters
- Long applications — signup, booking, onboarding, claims

## When not to use

- Few fields — one screen beats stepping through
- Steps are independent — forced linearity only gets in the way
- Users must cross-check every field side by side

## Variants

- **Linear** (线性) — Strictly one step at a time, no skipping — the default
- **Free-order** (自由顺序) — Steps are clickable; finished ones get a check
- **With review** (带确认步) — Final step summarizes answers for a last check before submit

## Implementation

**CSS:** `grid` `flexbox` `aria-current="step"` `fieldset`

Mark the step indicator as an ordered list with aria-current="step" on the active item and make finished steps clickable; wrap each step's fields in fieldset + legend. Validate the current step before advancing, keep values in memory, and persist on submit. On mobile collapse the indicator to "Step N of M". Respect prefers-reduced-motion — step changes may fade or jump.

## Agent task prompt

```text
Implement a multi-step wizard in the current project.

Inspect the existing component system and design tokens first; reuse existing components.
Keep the project's visual style. Add no unnecessary dependencies.
Requirements:
- Step indicator, a few fields per step, Prev / Next navigation
- Validate the current step before advancing; accumulate values in memory and submit at the end
- Mark the active step with aria-current="step"; keyboard Tab traversable
- Respect prefers-reduced-motion
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a wizard that splits a long form into ordered steps filled in sequence.

**Design:** Create a wizard. Requirements: a top step indicator (Account / Profile / Review, active step highlighted); 2–3 fields per step; Prev / Next nav at the bottom; a final review summarizing answers; light and dark themes.

**Implementation:** Implement Wizard in React with controlled state: a step index plus a values object; validate the current step before Next; mark the indicator with ol + aria-current="step"; group fields in fieldset; collapse the indicator to a progress caption on mobile. Scale step-change durations by var(--demo-speed, 1) and respect prefers-reduced-motion.

## Related

- [form-validation](/patterns/form-validation) — Used with
- [stepper](/patterns/stepper) — Used with
- [progressive-disclosure](/patterns/progressive-disclosure) — Similar
- [onboarding-tour](/patterns/onboarding-tour) — Similar

## Sources

- [Material Design — Steppers](https://m3.material.io/components/steppers/overview)
- [W3C — HTML form element](https://html.spec.whatwg.org/multipage/forms.html)
- [Nielsen Norman Group — Wizard](https://www.nngroup.com/articles/wizards/)

---

JSON: `/api/concept/patterns/wizard.json` · Site: /en/patterns/wizard
