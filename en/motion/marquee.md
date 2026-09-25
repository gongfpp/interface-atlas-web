# Marquee / 跑马灯

> Motion · `id: marquee`

A horizontal strip of content scrolling continuously and looping seamlessly. Used for logo walls, partner lists, announcements and promo banners — the endless flow signals abundance; it never asks users to read every item.

**Aliases:** 横向滚动广告位 · 跑马灯 · 无限滚动条带 · 循环滚动横幅 · 滚动字幕

**Category:** Motion / Decoration

## When to use

- Logo walls showing who else trusts the product
- Announcement bars and looping promo banners
- Content far wider than the container that nobody must read in full

## When not to use

- Critical copy users must finish reading
- Items users need to pause on and click
- Long strips on narrow mobile screens — perceived speed worsens

## Variants

- **Seamless** (无缝拼接) — Duplicate the content, translate -50% — no visible seam
- **Hover pause** (悬停暂停) — Pauses via animation-play-state so items can be read
- **Reverse pair** (反向双条) — Two strips scrolling opposite ways — editorial hero energy

## Implementation

**CSS:** `overflow: hidden` `@keyframes translateX 0 → -50%` `linear infinite` `animation-play-state: paused`

Duplicate the content inside a flex container and run animation marquee Xs linear infinite, keyframes to translateX(-50%); both copies must be identical in width for a seamless loop. Duration 15–40s depending on volume, linear, never eased. Pause on hover with animation-play-state; under prefers-reduced-motion fall back to a static horizontally scrollable strip.

## Agent task prompt

```text
Add a partner-logo marquee to the project's landing page.

Check existing logo assets and spacing tokens first.
Requirements:
- Duplicate content for a seamless loop, linear motion only
- Pause on hover and on focus (accessibility)
- Decorative: aria-hidden, outside the accessibility reading flow
- Respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Add a marquee — partner logos scrolling horizontally in a seamless loop.

**Design:** A partner strip loops at 30s linear with the content duplicated for a seamless seam, pausing on hover; greyscale logos, even spacing; never a primary information channel.

**Implementation:** CSS-only: outer overflow:hidden, inner flex holding two identical copies, animation marquee 30s linear infinite, keyframes to translateX(-50%). Hover pause via animation-play-state: paused. Degrade to a static scrollable strip under prefers-reduced-motion.

## Related

- [editorial](/motion/editorial) — Used with
- [landing-page](/motion/landing-page) — Used with
- [scroll-reveal](/motion/scroll-reveal) — Similar
- [text-reveal](/motion/text-reveal) — Similar

## Sources

- [MDN — CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)

---

JSON: `/api/concept/motion/marquee.json` · Site: /en/motion/marquee
