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
Build a complete GoodOldNet page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Reuse GoodOldNet’s #c4c4c4 grey chrome, #164479→#387ebd blue title bar, inset/outset bevels, Times New Roman copy and Arial menus. Keep the default 21% / 54% / 25% directory/copy/picture columns and blue underlined internal entries; reading content remains white with dark-blue text. Reflow through the existing wrapping toolbar/menu and single-column rules, never by shrinking a fixed vintage browser. Keep windows, address and directory in DOM with semantic focus, current-page and status feedback.

Full-page operations:
Directory and Back / Forward / Home navigate Home / About / Projects / Links / Guestbook; the local address follows navigation. Go opens a native dialog for home/about/projects/links/guestbook (with an optional goodoldnet/ prefix), adding valid navigation to internal history; unknown or external addresses show not-found feedback without leaving the site. Menus, Search, Favorites and window controls have reversible local behavior. Validate blank guestbook input and display accepted messages; disclose reload clears them with no service or browser storage.

Share one renderer between static covers, the detail experience and /style-scenes/retro-web/ (English /en/style-scenes/retro-web/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

Add no dependencies. Check both languages, original navigation/CTAs, concrete results, return/reset and narrow reflow; report checks actually run and pending items, never requirements as passed results.
```

### Other prompt layers

**Basic:** Design a personal homepage in Retro Web style with grey beveled chrome, serif copy, blue underlined links and a directory sidebar. Retain modern accessibility; avoid blinking text and intrusive pop-ups.

**Design:** Layer white content inside grey chrome with a dark-blue system-font title bar. Compact spacing, square corners and beveled borders evoke a vintage browser. Keep links recognizable and targets large enough.

**Implementation:** Build a complete GoodOldNet page in this style, extending the original hero into content, concrete operations and return paths rather than isolated controls or a partial demo. Preserve brand, hero copy, assets, composition, tokens and all variants. Keep preview.brand aligned with shared REFERENCE_BRANDS; ReferenceStyleScene defines the hero structure, actual navigation and assets.

Reuse GoodOldNet’s #c4c4c4 grey chrome, #164479→#387ebd blue title bar, inset/outset bevels, Times New Roman copy and Arial menus. Keep the default 21% / 54% / 25% directory/copy/picture columns and blue underlined internal entries; reading content remains white with dark-blue text. Reflow through the existing wrapping toolbar/menu and single-column rules, never by shrinking a fixed vintage browser. Keep windows, address and directory in DOM with semantic focus, current-page and status feedback.

Directory and Back / Forward / Home navigate Home / About / Projects / Links / Guestbook; the local address follows navigation. Go opens a native dialog for home/about/projects/links/guestbook (with an optional goodoldnet/ prefix), adding valid navigation to internal history; unknown or external addresses show not-found feedback without leaving the site. Menus, Search, Favorites and window controls have reversible local behavior. Validate blank guestbook input and display accepted messages; disclose reload clears them with no service or browser storage.

Share one renderer between static covers, the detail experience and /style-scenes/retro-web/ (English /en/style-scenes/retro-web/). Static covers contain no nested live buttons; the detail experience enables the same page’s semantic controls and brand continuation in an independent document. Original navigation and CTAs reach actual content or workflows, not placeholder links, color-only changes or one-line toasts.

Interaction state lives only in this page’s memory. Reload, toolbar reset and mode changes restore initial state; do not use localStorage or sessionStorage. In-page clear/reset undoes this visit’s operations without implying cross-page or persistent saves.

Provide return, cancel or clear/reset paths and disclose the page-memory state boundary; never fake real payments, email, login, AI or cloud sync. Reflow desktop, 390px and 320px layouts with readable text and usable targets rather than shrinking the desktop page. Give controls accessible names, keyboard access and visible focus; overlays close and return focus, validation/results are announced; respect prefers-reduced-motion.

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
