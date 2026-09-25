# Segmented Control / 分段控制器

> Components · `id: segmented-control`

A compact group of mutually exclusive choices with an immediately visible selection. Use it to change a time range or display mode within the same view. Keep labels short and all choices visible. Unlike tabs, it usually changes how the current content is presented rather than moving between separate panels.

**Aliases:** 分段选择 · 几个按钮连在一起 · 周月年切换 · segmented buttons

**Category:** Selection

## Name disambiguation

A segmented control is a compact mutually-exclusive switch for modes or filters. Tabs swap content panels. Radio is in-form single choice.

## When to use

- Choose a week, month or year for a chart.
- Change density or ordering in one view.

## When not to use

- Use a select for many or lengthy options.
- Use checkboxes for multiple selections.

## Variants

- **Filled** (填充分段) — A shared surface with a raised selection for utility interfaces.
- **Outlined** (描边分段) — An outer border with an accented selection.

## Implementation

**CSS:** `display: flex` `:checked` `:focus-visible`

Use native radios with the same name to retain arrow-key navigation. Give the group an accessible name and make selection visible beyond color. Aim for a 40px target height and update the result immediately.

## Agent task prompt

```text
Inspect existing components and tokens before implementing Segmented Control.
Requirements:
- Use native radios with the same name to retain arrow-key navigation. Give the group an accessible name and make selection visible beyond color. Aim for a 40px target height and update the result immediately.
- The selected option must agree with the displayed result.
- Exactly one option is selected; arrow keys move through the group.
- Support narrow screens, both themes and reduced motion.
- Add no dependencies.
Run existing checks and list changed files and validation results.
```

### Other prompt layers

**Basic:** Create a Segmented Control component. Choose a week, month or year for a chart.

**Design:** Design a Segmented Control with clear hierarchy and state feedback. A shared surface with a raised selection for utility interfaces. An outer border with an accented selection. The selected option must agree with the displayed result. Exactly one option is selected; arrow keys move through the group.

**Implementation:** Use native radios with the same name to retain arrow-key navigation. Give the group an accessible name and make selection visible beyond color. Aim for a 40px target height and update the result immediately.

## Related

- [radio](/components/radio) — Similar
- [tabs](/components/tabs) — Similar
- [switch](/components/switch) — Similar

## Confusable

- [tabs](/components/tabs) — Tabs map to content panels; segmented control to state or mode.
- [radio](/components/radio) — Radio is a form field; segmented control is a view switch.
- [switch](/components/switch) — A switch is on/off; a segmented control picks one of several.

## Sources

- [W3C WAI — Accessible interaction patterns](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)

---

JSON: `/api/concept/components/segmented-control.json` · Site: /en/components/segmented-control
