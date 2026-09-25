# Progressive Disclosure / 渐进式披露

> Patterns · `id: progressive-disclosure`

Layer the information: show only the most common and necessary parts first, hiding secondary details behind "expand", "next step" or "show more" until the user asks for them. It solves the problem of overwhelming users at once — the initial cognitive load stays low and the surface easy to learn, while depth remains available on demand for advanced users.

**Aliases:** Progressive Disclosure · 渐进式披露 · 逐步展开 · 分步显示 · 折叠收起详情 · 点开看更多 · 显示高级选项

**Category:** Content / Interaction

## When to use

- Advanced, low-frequency options on settings pages
- Optional form fields needed only in specific cases
- Summaries that can stand alone before the full text

## When not to use

- Frequently used features — hiding them hurts discoverability
- Users must compare all options side by side
- Critical-path steps — hiding them blocks the task

## Variants

- **Collapsible section** (折叠展开) — A collapsed panel holds secondary details, arrow shows state
- **Excerpt + show more** (摘要 + 显示更多) — Show an excerpt first; expand to the full list or text on demand
- **Stepwise reveal** (分步呈现) — Wizard-style screens revealing one thing at a time

## Implementation

**CSS:** `max-height transition` `grid-template-rows` `aria-expanded` `rotate`

Wire the trigger with aria-expanded and aria-controls; transition height via max-height or grid-template-rows: 0fr/1fr. Keep hidden fields unrendered or display:none when collapsed so they skip validation. Rotate the chevron with state and respect prefers-reduced-motion.

## Agent task prompt

```text
Implement Progressive Disclosure in the current project.

Inspect the existing accordion components and form system first; reuse existing expand animations and chevron icons.
Usage: an advanced-options region on a publish form.
Requirements:
- Only essential fields visible by default; advanced options collapsed
- Trigger carries aria-expanded / aria-controls with a state-rotated chevron
- Smooth height transition on expand; no layout jump for the rest of the form
- Collapsed fields excluded from validation
- Respect prefers-reduced-motion
- No unnecessary dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a progressive disclosure form where only title and body are visible by default; clicking "Advanced options" expands tags and visibility settings.

**Design:** Design a publish form with progressive disclosure. Requirements: the primary form keeps only essential fields; the "Advanced options" trigger has a rotating chevron and aria-expanded; the expanded region transitions height smoothly with clear field grouping; collapsing causes no layout jump; light/dark themes.

**Implementation:** Implement Progressive Disclosure in React + Tailwind. Manage `open` with useState; set aria-expanded on the trigger and rotate the chevron; animate height with grid-template-rows: 0fr / 1fr plus transition; keep secondary fields hidden while collapsed so form validation skips them. Respect prefers-reduced-motion (disable the height transition).

## Related

- [accordion](/patterns/accordion) — Used with
- [form-validation](/patterns/form-validation) — Similar
- [onboarding-tour](/patterns/onboarding-tour) — Similar
- [drawer](/patterns/drawer) — Used with
- [tooltip](/patterns/tooltip) — Used with

## Sources

- [NN/g — Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)
- [Apple HIG — Expanding Content](https://developer.apple.com/design/human-interface-guidelines/)

---

JSON: `/api/concept/patterns/progressive-disclosure.json` · Site: /en/patterns/progressive-disclosure
