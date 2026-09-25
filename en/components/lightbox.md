# Lightbox / 灯箱

> Components · `id: lightbox`

A media overlay that enlarges an image or video over a dimmed, temporarily inert page. The media is centered and usually paired with prev/next, zoom and close. It is a modal specialised for viewing rather than for forms or copy — that is what separates it from a generic dialog.

**Aliases:** 图片灯箱 · 大图预览 · 图片放大预览 · 看大图 · lightbox

**Category:** Overlay / Media

## Name disambiguation

A lightbox is a media-focused Modal; Modal is the generic container. A lightbox opens something to look at, a dialog opens something to deal with.

## When to use

- Inspecting image detail, full-size originals or photo sets
- Video must play focused, free of the page layout
- Thumbnails are expected to open a larger preview on click

## When not to use

- Content is a form, message or confirmation — use a modal
- Users must act on the page while looking — use a drawer or popover
- Media is the page itself — use a gallery page or player page

## Variants

- **Image zoom** (图片放大) — One image full-screen with zoom or pan for detail
- **Gallery** (画廊切换) — Arrows plus a counter to step through a set
- **Video lightbox** (视频灯箱) — Video plays inside the overlay, often autoplaying to full screen

## Platform API

- `<dialog>`
- `role="dialog"`
- `aria-modal="true"`

## In code

| Framework | Name |
| --- | --- |
| ARIA APG | [Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) |
| yet-another-react-lightbox | [Lightbox](https://github.com/igordanchenko/yet-another-react-lightbox) |
| MUI | [Dialog (full-screen image)](https://mui.com/material-ui/react-dialog/) |

## Implementation

**CSS:** `position: fixed` `object-fit: contain` `z-index` `background-color`

Fix a dimmed backdrop across the viewport and center the media with object-fit: contain so nothing is cropped. Lock page scroll and trap focus while open; arrows and Esc work from the keyboard. Cross-fade between items rather than sliding hard, and respect prefers-reduced-motion.

## Agent task prompt

```text
Implement a Lightbox component in the current project.
Inspect existing overlays and design tokens first and reuse backdrop, radius and shadow variables.
Usage: enlarged preview of images and video.
Requirements:
- Dimmed backdrop with centered media, prev/next and close
- Focus trapped in the overlay and restored to the trigger on close
- Replacement message when an image fails to load
- Respect prefers-reduced-motion and support keyboard operation
- No new dependencies
Run the existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a lightbox that opens an enlarged image over a dimmed backdrop, with prev/next and close.

**Design:** Design a lightbox. Requirements: translucent dimmed backdrop with centered media; counter and caption at the bottom; prev/next arrows and a top-right close; gentle cross-fade when switching; close on Esc and backdrop click; consistent light and dark themes.

**Implementation:** React + Tailwind lightbox: controlled open and index state; fixed inset-0 backdrop with a flex-centered figure; object-fit: contain bounds the media; trap focus, close on Esc and restore focus to the trigger thumbnail; show a placeholder message on image error.

## Related

- [modal](/components/modal) — Alternative
- [carousel](/components/carousel) — Used with
- [drawer](/components/drawer) — Similar

## Confusable

- [modal](/components/modal) — Modal hosts generic tasks and copy; lightbox exists to view media enlarged
- [carousel](/components/carousel) — Carousel rotates in-page; lightbox presents full-screen over a dimmed page

## Sources

- [WAI-ARIA Authoring Practices — Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [MDN — dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [Apple Human Interface Guidelines — Full Screen Modal](https://developer.apple.com/design/human-interface-guidelines/modality)

---

JSON: `/api/concept/components/lightbox.json` · Site: /en/components/lightbox
