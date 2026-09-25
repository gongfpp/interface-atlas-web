# Avatar / 头像

> Components · `id: avatar`

A small round or rounded-square image representing a user or organisation: photo, initials or an icon placeholder. Appears with names in navs, comments and member lists; can carry a status dot or stack several people together.

**Aliases:** 头像 · 用户头像 · 圆形头像 · 人员头像 · 账号图片 · 首字母头像 · 名字前面的小圆图

**Category:** Display / Identity

## When to use

- A stable identity anchor (nav, comments, members)
- Fall back to initials on brand colours when no image exists
- Stacked avatars for teams or multiple owners

## When not to use

- Non-personal system objects — use an icon
- The image is the content — use a full image
- Rich personal info needed — use a profile page or card

## Variants

- **Image** (图片) — An uploaded photo, cropped to fill
- **Initials** (首字母) — No-photo fallback; colour derived from the name
- **Stacked** (叠加) — Overlapping members plus an overflow count

## Platform API

- `<img>`

## Implementation

**CSS:** `border-radius: 9999px` `object-fit: cover` `width` `height`

Crop photos with object-fit: cover to avoid distortion; hash the name into a fixed palette so a person's initials colour stays stable; status dot absolute at bottom-right with a ring. Common size steps: 24/32/40/48px. Images need alt text; use aria-hidden or empty alt when purely decorative.

## Agent task prompt

```text
Implement an Avatar component in the current project.

Inspect the existing component system and design tokens first; reuse existing
surface colour variables.
Usage: nav user area, comment lists, member stacks.
Requirements:
- Image / initials content with automatic fallback on load error
- Stable name-hashed initials colours
- Size steps + optional presence dot + stacked form
- Accessibility: meaningful alt, aria-hidden when decorative
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create an Avatar component: image and initials content, three size steps, with an optional presence dot.

**Design:** Create an Avatar. Requirements: circular (or rounded-square) crop; initials fallback on a low-saturation surface with dark text, colour hashed from the name; presence dot at bottom-right with a ring; sizes 24/32/40; stacked form overlaps with -ml-2 and ring separation; consistent light/dark themes.

**Implementation:** React + Tailwind Avatar: img with object-cover rounded-full; without src render initials (first grapheme) on a palette colour picked by name.charCodeAt hash; presence dot as an absolute span bottom-0 right-0 with ring-2 ring-[surface]; sizes map to w/h; stack with flex -space-x-2 and a final +N item; fall back to initials on img error.

## Related

- [badge](/components/badge) — Similar
- [dropdown](/components/dropdown) — Similar
- [profile](/components/profile) — Used with

## Sources

- [Atlassian Design System — Avatar](https://atlassian.design/components/avatar/overview)
- [Ant Design — Avatar](https://ant.design/components/avatar)

---

JSON: `/api/concept/components/avatar.json` · Site: /en/components/avatar
