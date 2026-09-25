# Skip Link / 跳过链接

> Accessibility · `id: skip-link`

The first focusable element on the page — usually a visually hidden link. Keyboard users meet it on the first Tab, activate it, and land straight in the main content without walking every nav link. The mandatory escape hatch on nav-heavy sites; WCAG calls it "bypass blocks".

**Aliases:** 跳过导航 · 跳到主内容 · 跳过链接 · 一键跳正文 · skip nav · skip navigation

**Category:** Accessibility / Navigation

## Name disambiguation

A skip link is not "back to top" — the skip link sits first in the document for keyboard users escaping nav; back-to-top sits at the bottom of long pages for scrollers.

## When to use

- Repeated page chrome with more than a handful of nav links
- SPAs where focus needs a resting place after route changes
- Headers crowded with search, login and locale switchers

## When not to use

- Navs with two or three links — bypassing costs more than it saves
- Shipping it as a permanent first nav item instead of a hidden link
- Targets without tabindex="-1" so the jump lands on an unfocusable node

## Variants

- **Corner chip** (左上角芯片) — Appears top-left on focus — the common default
- **Full-width bar** (全宽横条) — Spans the header on focus — harder to miss
- **Persistent inline** (行内常驻) — Always-visible small link — costs a line of visual space

## Platform API

- `<a href="#main">`
- `tabindex`
- `landmark roles`

## In code

| Framework | Name |
| --- | --- |
| WCAG | [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks) |
| WebAIM | [Skip Navigation](https://webaim.org/techniques/skipnav/) |

## Implementation

**CSS:** `clip-path` `:focus` `position: absolute` `scroll-margin-top`

Hide with `position:absolute` + `clip-path:inset(50%)` (or left:-9999px) and restore inside the viewport on :focus with solid contrast. Give the target main `tabindex="-1"` and scroll-margin-top to clear sticky headers. Place it first in <body>, before the header. SPAs can reuse it to park focus after route changes.

## Agent task prompt

```text
Implement a skip link in the current project.
Inspect the existing component system and design tokens first; reuse current components.
Requirements:
- Link first in the document, visually hidden until focused
- Activation moves focus and scroll position to the main landmark
- Integrate with the existing header/nav without altering the visual design
Keep the existing visual style. Add no unnecessary dependencies.
Respect prefers-reduced-motion.
Run the project's existing checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Add a skip link so the first Tab jumps over the top nav straight to the main content.

**Design:** Place a hidden "Skip to main content" link before the header; on focus it surfaces top-left on the accent surface with passing contrast; activating it moves focus into main and spares the user every nav item.

**Implementation:** First in body: `<a href="#main" class="skip-link">Skip to main</a>`. CSS hides it with clip-path:inset(50%), on :focus resets clip-path and pins it top-left. Target `<main id="main" tabindex="-1">`; optionally call main.focus() on activation so reading continues there.

## Related

- [keyboard-navigation](/a11y/keyboard-navigation) — Used with
- [navbar](/a11y/navbar) — Used with
- [focus-ring](/a11y/focus-ring) — Used with

## Confusable

- [navbar](/a11y/navbar) — navbar is the long nav being skipped, not the skipping mechanism — making "skip nav" its first item defeats the point.

## Sources

- [WCAG 2.1 Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks)
- [WebAIM — Skip Navigation](https://webaim.org/techniques/skipnav/)

---

JSON: `/api/concept/a11y/skip-link.json` · Site: /en/a11y/skip-link
