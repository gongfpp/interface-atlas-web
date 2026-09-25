# Notification Center / 通知中心

> Pages · `id: notification-center`

A page aggregating alerts into a scannable list, with tabs for all, unread and mentions and rows showing icon, title, snippet and time plus bulk mark-as-read.

**Aliases:** 通知中心 · 消息中心 · 站内信 · 消息盒子 · 通知列表页 · 消息提醒页 · 铃铛点开的页面 · 未读消息在哪看

**Category:** Page / Notifications

## When to use

- The system produces many kinds of alerts continuously
- Users need to review and triage later, not be interrupted now
- Alerts must be managed across devices and channels

## When not to use

- One-off critical alerts needing immediate action — use a modal or banner
- Very few updates that can fold into a timeline or activity feed
- Marketing pushes to visitors — use a landing page or email

## Variants

- **Notification List** (通知列表) — Reverse-chronological single column, the general default
- **Split Inbox** (收件箱分栏) — List left, detail right — efficient on desktop
- **Grouped Notifications** (分组通知) — Grouped by source or subject to cut repeated noise

## Page structure

1. **Header** — Title, mark-all-read and notification settings, pinned above the scroll area.
2. **View tabs** — All, unread, mentions and system groups, with unread counts shown as badges.
3. **Notification list** — Newest first, unread rows visually emphasized, loading more as you scroll.
4. **Notification item** — Source icon, title, a one-line snippet, relative time and inline read/archive actions.
5. **Bulk actions** — Appears after entering multi-select — mark read, archive or delete.
6. **Detail pane** — In the split variant, shows the full body and a link to the source.

## Implementation

**CSS:** `flex` `grid` `overflow-y: auto` `position: sticky`

Flex column for header, tabs and list; the split variant adds a grid with list and detail columns. Unread counts use badges, and rows flip their background via a conditional class. Trigger loading with IntersectionObserver, keep the bulk bar sticky above the list, and show a positive all-caught-up empty state instead of a blank.

## Agent task prompt

```text
Implement the notification center page in the current project.

Inspect the existing notification data source, badge and list components first; reuse them.
Requirements:
- Three-part layout: header, view tabs (unread counts), notification list
- Mark individual items read, with multi-select bulk actions
- Distinct unread vs read styling and relative timestamps
- A positive empty state when nothing is unread
- Scroll to load more; respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a notification center page with view tabs, a notification list and mark-all-read.

**Design:** Build a SaaS notification center: title and mark-all-read on top; tabs for all/unread/mentions with unread counts; each row shows source icon, title, two-line snippet and relative time, with an emphasis bar on unread; multi-select bulk read; an all-caught-up empty state. Responsive, theme-consistent and fully keyboard operable.

**Implementation:** React + Tailwind notification center: data-driven notifications with a controlled read set and active filter tab; paginate the list with IntersectionObserver; the split variant uses grid-cols-[320px_1fr] on wide screens; toggle unread styles with a conditional class; respect prefers-reduced-motion; no new dependencies.

## Related

- [tabs](/pages/tabs) — Contains
- [badge](/pages/badge) — Contains
- [avatar](/pages/avatar) — Contains
- [infinite-scroll](/pages/infinite-scroll) — Uses pattern
- [empty-state](/pages/empty-state) — Uses pattern

## Sources

- [Apple Human Interface Guidelines — Notifications](https://developer.apple.com/design/human-interface-guidelines/notifications)
- [Material Design 3 — Badges](https://m3.material.io/components/badges/overview)

---

JSON: `/api/concept/pages/notification-center.json` · Site: /en/pages/notification-center
