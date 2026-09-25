# Carousel / 轮播

> Components · `id: carousel`

A horizontally scrolling track of items where one slide takes focus at a time and the rest slide out or peek at the edge as a hint. Switching uses dots, arrows or autoplay — common in hero banners, image galleries and recommendation rails. Fits "browse one item after another" content, not information that must be compared side by side.

**Aliases:** 轮播 · 图片轮播 · 轮播图 · banner 切换 · 跑马灯切换 · carousel · slider gallery

**Category:** Display / Media

## When to use

- A set of similar items browsed one at a time (banner, gallery, rails)
- Horizontal space is tight but you still want a "more exists" cue
- Image- or card-led slides with brief captions

## When not to use

- Users must compare items side by side — use a card grid or table
- Only three to five equally important items — lay them out flat
- Critical actions or forms hidden on one slide — switching breaks the task

## Variants

- **Dot pagination** (分页点) — Small dots mark position and jump directly — the most compact
- **Arrow controls** (箭头) — Prev/next arrows step through slides — the desktop default
- **Autoplay with pause** (自动播放) — Timed advance with pause on hover or focus — a pause control is required

## Platform API

- `aria-roledescription="carousel"`
- `scroll-snap-type`
- `aria-live`

## In code

| Framework | Name |
| --- | --- |
| ARIA APG | [Carousel](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) |
| shadcn/ui | [Carousel (Embla)](https://ui.shadcn.com/docs/components/carousel) |
| MUI | Carousel |

## Implementation

**CSS:** `scroll-snap-type` `overflow-x` `transform`

The track uses overflow-x: auto with scroll-snap-type: x mandatory and items set scroll-snap-align: center so pure CSS scrolling works; control-driven switching animates transform: translateX(-index * 100%). Mark off-screen items aria-hidden or inert to cut screen-reader noise, label the region aria-roledescription="carousel", and announce "n of N" via aria-live="polite" on change. Autoplay needs a pause control and must shut off under prefers-reduced-motion.

## Agent task prompt

```text
Implement a Carousel component in the current project.
Inspect the existing component system and design tokens first; reuse what is already there.
Keep the project's visual style. Add no unnecessary dependencies.
Respect prefers-reduced-motion and support keyboard operation.
Run the project's existing checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a carousel: a horizontally scrolling track of items switched by dots and left/right arrows.

**Design:** Create a carousel: the track peeks the next slide as a hint while the current slide sits fully in view; dot pagination below (active dot stretches in the accent color); translucent arrows float at the sides and sharpen on hover; 300ms slide transition; consistent in light and dark themes.

**Implementation:** React + Tailwind carousel: controlled activeIndex; a flex track with overflow-hidden and an inner translateX transition (duration scaled by var(--demo-speed, 1)); dots and arrows stay in sync with activeIndex; Left/Right keys switch, the container uses role="group" plus aria-roledescription="carousel"; autoplay via setInterval, stopped on hover, focus or the pause button; respect prefers-reduced-motion. No new dependencies.

## Related

- [tabs](/components/tabs) — Alternative
- [marquee](/components/marquee) — Alternative
- [card](/components/card) — Used with

## Sources

- [ARIA APG Carousel](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)
- [MDN scroll-snap-type](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)

---

JSON: `/api/concept/components/carousel.json` · Site: /en/components/carousel
