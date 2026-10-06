# Retro Web / 复古互联网

> Styles · `id: retro-web`

A visual language borrowed from early personal websites and desktop browsers: grey beveled borders, serif text, blue underlined links, directory sidebars and visitor counters. It recalls the intimacy of a handmade website without sacrificing modern keyboard access, responsive layout or readability.

**Aliases:** 老网页 · 早期互联网 · 个人主页风格 · Web 1.0 · old-school web · retro website

**Category:** Style / Visual Language

## When to use

- Personal sites, fan pages, internet-history exhibits and nostalgic creative projects.
- Content that celebrates human curation, slow discovery and personal expression.

## When not to use

- Dense work applications and critical payment or identity flows.
- Do not bring back blinking text, pop-up ads, rigid widths or tiny touch targets.

## Variants

- **Personal homepage** (个人主页) — A handmade site with a directory sidebar, short writing and curated links.
- **Vintage browser window** (旧浏览器窗口) — Title bars, menus and beveled borders evoke a desktop window.

## Design spec

- **typography:** Serif body copy, system-font menus and readable blue underlined links.
- **color:** Grey chrome, white content and dark-blue title bars and links.
- **border:** Square corners and 2px beveled borders without blurred shadows.
- **shadow:** Use light and dark border edges for relief, without blurred shadows.
- **spacing:** Compact spacing with adequate targets and a wrapping directory.
- **motion:** Immediate changes without blinking or automatic scrolling.
- **states:** Bold current-page text, a clear focus ring and a live region for form feedback.

## Implementation

**CSS:** `border-style` `text-decoration` `font-family` `:focus-visible` `flex-wrap`

Use inset/outset borders or layered shadows for grey panels. Keep readable type and underlined links. A visual study may preserve its composition, while the interactive area must wrap and support keyboards. Store demo messages in component state only and disclose that they are not persisted.

## Agent task prompt

```text
Inspect existing routing and styles, then create a Retro Web personal homepage.
Include working directory navigation, content and a local-only guestbook simulation.
Use grey beveled chrome, a navy title bar, serif copy and blue underlined links; never replace the DOM with a screenshot.
Add no backend, credentials or external requests. Support keyboard navigation and messages, clear empty-submit feedback and narrow layouts without page overflow.
Verify both languages, focus, navigation and state after reload. Report passed and unverified checks accurately.
```

### Other prompt layers

**Basic:** Design a personal homepage in Retro Web style with grey beveled chrome, serif copy, blue underlined links and a directory sidebar. Retain modern accessibility; avoid blinking text and intrusive pop-ups.

**Design:** Layer white content inside grey chrome with a dark-blue system-font title bar. Compact spacing, square corners and beveled borders evoke a vintage browser. Keep links recognizable and targets large enough.

**Implementation:** Use semantic HTML and flex-wrap to adapt the sidebar and content. Use real buttons or links, visible focus and aria-current. Keep guestbook entries as a local simulation with explicit feedback and no external requests.

## Related

- [pixel-art](/interface-atlas-web/en/styles/pixel-art) — Similar
- [skeuomorphism](/interface-atlas-web/en/styles/skeuomorphism) — Similar
- [y2k](/interface-atlas-web/en/styles/y2k) — Similar
- [tabs](/interface-atlas-web/en/components/tabs) — Used with

## Confusable

- [pixel-art](/interface-atlas-web/en/styles/pixel-art) — Pixel art is defined by bitmap edges and limited palettes; Retro Web is defined by page structure, hyperlinks and browser-era conventions, and can include photos and ordinary type.

## Sources

- [MDN — border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
- [MDN — The anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a)

---

JSON: `/interface-atlas-web/api/concept/styles/retro-web.json` · Site: /interface-atlas-web/en/styles/retro-web
