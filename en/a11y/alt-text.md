# Alt Text / 替代文本

> Accessibility · `id: alt-text`

A text alternative for every image: informative images convey the same information, decorative images get empty alt so readers skip them, functional images describe the action rather than the pixels. Screen-reader users, users on failed image loads and search engines all lean on this one line.

**Aliases:** 替代文本 · 图片描述 · 图说 · alt 文本 · 图片替代文本 · alt text

**Category:** Accessibility / Content

## Name disambiguation

Alt text is the image's text alternative; a tooltip is a pointer-hover add-on — the former serves screen readers and failed loads, the latter only sighted pointer users.

## When to use

- Images that carry information — charts, illustrations, QR codes
- Semantic content — avatars, product shots, article figures
- When an image is the sole content of a link or button

## When not to use

- Writing "image" / "图片" for decorative texture or dividers
- Stuffing essays into alt — use a visible caption or aria-describedby
- Re-reading text that the adjacent copy already states

## Variants

- **Informative** (信息型) — Conveys the image's information — e.g. "March sales up 18% month over month"
- **Decorative** (装饰型) — alt="" so readers skip it without noise
- **Functional** (功能型) — Describes the action — "Close", not "grey X icon"

## Platform API

- `alt`
- `aria-label`
- `role="presentation"`

## In code

| Framework | Name |
| --- | --- |
| WCAG | [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) |
| W3C WAI | [Images Tutorial](https://www.w3.org/WAI/tutorials/images/) |

## Implementation

**CSS:** `alt` `aria-label` `role="presentation"`

Always set alt on <img>. Purely decorative images take alt="" (or role="presentation" + aria-hidden) — omitting the attribute makes readers speak the filename. Icon-only buttons get aria-label or visible text, never icon-font pseudo-element text. Keep text in images out of the bitmap when possible; complex charts point aria-describedby at a long description.

## Agent task prompt

```text
Implement an alt-text convention in the current project.
Inspect the existing component system and design tokens first; reuse current components.
Requirements:
- Every informative image has alt that states the takeaway
- Decorative images use alt="" so readers skip them
- Icon buttons and links describe the action via aria-label
Keep the existing visual style. Add no unnecessary dependencies.
Respect prefers-reduced-motion.
Run the project's existing checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Audit and fill in alt text for every image, marking decorative ones as skippable.

**Design:** Informative alt states the takeaway, not the paint; decorative alt is empty; icon buttons name the action; product and avatar alt carries identifying facts — name, colour.

**Implementation:** Set alt explicitly on every <img>; decorative images get alt=""; decorative <svg> takes aria-hidden="true", meaningful ones role="img" with a <title>. Icon-only buttons take aria-label. Lint for missing alt at build time.

## Related

- [avatar](/a11y/avatar) — Used with
- [card](/a11y/card) — Used with
- [empty-state](/a11y/empty-state) — Used with

## Confusable

- [tooltip](/a11y/tooltip) — tooltip is hover-only supplementary text; alt text is the image's required accessible stand-in.

## Sources

- [WCAG 2.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content)
- [W3C WAI — Images Tutorial](https://www.w3.org/WAI/tutorials/images/)

---

JSON: `/api/concept/a11y/alt-text.json` · Site: /en/a11y/alt-text
