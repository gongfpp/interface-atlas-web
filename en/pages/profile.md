# Profile Page / 个人主页

> Pages · `id: profile`

An identity-centered page answering "who is this, what do they have, what do they do": cover and avatar establish visual identity, name, bio and stats follow, and tabs switch between content streams like posts, works or articles. Visitors see follow/message actions; the owner sees edit entries — same structure, different actions.

**Aliases:** 个人主页 · 个人资料页 · 用户主页 · 个人介绍页 · 头像主页 · 空间主页 · 介绍一下自己的页面

**Category:** Page / Social

## When to use

- Communities and creator platforms showing identity and content
- Team member or author pages
- Users view or manage their public presence

## When not to use

- Pure account data editing — fold into settings
- Minimal contact cards with no content stream
- Official brand pages with conversion goals

## Variants

- **Card Profile** (卡片式) — Info contained in one card, restrained and universal
- **Cover Profile** (封面头图式) — Big cover with overlapping avatar, the social standard
- **Minimal Profile** (极简列表式) — Avatar, one-liner and links — business-card style
- **Portfolio Profile** (作品集式) — A work grid carries the page

## Page structure

1. **Cover & avatar** — First impression of identity; fixed cover and avatar ratios to avoid shift.
2. **Identity** — Name, role, bio, location and contact.
3. **Stats** — Key numbers such as followers or works, laid out horizontally.
4. **Tabs** — Works, saves, about — switching without leaving the page.
5. **Actions** — Follow, edit or share actions shown by permission.

## Implementation

**CSS:** `flex` `grid` `transform: translateY(50%)` `object-fit: cover`

Cover variant: overlap the avatar on the cover's lower edge with a negative margin and a ring stroke to separate it from the image. Stats split across flex columns; tabs switch streams while preserving scroll. Follow button has three states (follow/following/mutual) with distinct hover; owner view swaps actions for an avatar menu.

## Agent task prompt

```text
Implement the profile page in the current project.

Inspect the user data model and existing avatar/tabs components first; stay consistent.
Requirements:
- Cover + overlapping avatar + identity info + stats
- Tabs switch content streams (with empty states)
- Three-state follow button; owner vs visitor views
- Consistent light/dark; responsive
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a profile page with an avatar, bio, stats and content tabs.

**Design:** Build a social profile page: gradient cover, round avatar with a white ring overlapping the cover edge; follow/message buttons on the right (edit-profile in owner view); name + verified badge + one-line bio; three-column stats (followers / following / works); tabs switching between Posts / Works / About lists.

**Implementation:** React + Tailwind profile page: controlled tab state switching streams; three-state controlled follow button; avatar overlap via -mt-8 + ring-2 ring-paper; data-driven streams with empty states; stats and buttons wrap on mobile. Consistent light/dark; no new dependencies.

## Related

- [avatar](/pages/avatar) — Contains
- [tabs](/pages/tabs) — Contains
- [card](/pages/card) — Contains
- [button](/pages/button) — Contains
- [badge](/pages/badge) — Contains

## Sources

- [Nielsen Norman Group — Profile Pages](https://www.nngroup.com/articles/about-us/)
- [Material Design — Cards](https://m3.material.io/components/cards)

---

JSON: `/api/concept/pages/profile.json` · Site: /en/pages/profile
