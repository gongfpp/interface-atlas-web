# Loading Spinner / 加载指示器

> Motion · `id: loading-spinner`

A continuously rotating ring or dots that says "work in progress". Tiny in footprint and universally understood, it fits inside buttons, cursors or small regions as lightweight feedback. It communicates busyness only — neither progress amount nor time remaining.

**Aliases:** 加载图标 · 转圈加载 · 加载中图标 · 转圈圈 · loading 转圈 · 旋转加载

**Category:** Motion / Loading

## When to use

- Short waits of 1–5 seconds — requests, submits, refreshes
- Inline in a button to confirm the click registered
- Small local regions where a full skeleton is overkill

## When not to use

- Waits beyond 5–10 seconds — use a progress bar
- Initial content loads — skeletons preserve layout
- Potentially failing tasks — spinner alone offers no escape

## Variants

- **Ring** (圆环) — Partial arc rotating — Material style
- **Dots** (圆点跳动) — Three dots waving — social products' favorite
- **Dual ring** (双环) — Two counter-rotating rings — more techy

## Implementation

**CSS:** `@keyframes spin` `border-radius: 50%` `border-top-color`

Simplest recipe: a 16–24px circle with a 2–3px border where only the top arc takes the accent color, animated with `spin 0.8s linear infinite`. The dots variant staggers animation-delay across three circles. Always add role="status" with an aria-label, and respect prefers-reduced-motion (fall back to a gentle opacity pulse).

## Compare dimensions (`loading-indicator`)

- **Interruption:** Low — minimal footprint
- **Information volume:** Low — busyness only
- **Suitable duration:** 1–5 seconds
- **Result consistency:** Low — no shape of the result

## Agent task prompt

```text
Unify the loading indicator for async buttons and local regions in the project.

Check existing loading components and tokens first; don't reinvent.
Requirements:
- 16px ring, 0.8s linear spin, accent token color
- In buttons: disable interaction and lock width to prevent shift
- Accessibility: role="status" + aria-label
- Respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add a spinner to the button — show a rotating icon and disable clicks while submitting.

**Design:** While submitting, swap the button label for a 16px accent ring spinning at 0.8s linear infinite; disable the button, keep its width fixed, restore the label when done.

**Implementation:** CSS-only: `border: 2px solid transparent; border-top-color: var(--accent);` with `animation: spin .8s linear infinite`. Inline in buttons via flex centering and a min-width to avoid layout shift. Add role="status" + aria-label; respect prefers-reduced-motion (opacity pulse instead).

## Related

- [skeleton-loading](/motion/skeleton-loading) — Alternative
- [progress-bar](/motion/progress-bar) — Alternative
- [button](/motion/button) — Applies to

## Sources

- [Material Design — Progress indicators](https://m3.material.io/components/progress-indicators/overview)

---

JSON: `/api/concept/motion/loading-spinner.json` · Site: /en/motion/loading-spinner
