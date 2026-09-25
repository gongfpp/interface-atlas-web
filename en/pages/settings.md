# Settings Page / 设置页

> Pages · `id: settings`

A utility page for managing account preferences and system configuration: a stable settings nav on one side (general, notifications, security…), and rows of "label + control + hint" forms on the other — low-frequency edits, saved as they change. Organized by configuration domain rather than task flow; users locate sections by scanning titles, change, and leave.

**Aliases:** 设置页面 · 设置面板 · 偏好设置 · 系统设置页 · 账号设置 · 配置页面 · 个人设置

**Category:** Page / Utility

## When to use

- Central management of profile, notifications, security
- Many options that need sectioned navigation
- Edits are infrequent but the entry must stay reachable

## When not to use

- High-frequency task flows — put them in the working surface
- Minimal products with two or three toggles — fold into a menu
- Approval workflows that need admin review

## Variants

- **Sidebar Settings** (侧栏导航设置) — Sectioned nav left, forms right — the common default
- **Tabbed Settings** (标签页设置) — Top tabs switch domains — good for few sections
- **Sectioned Single Page** (分组单页) — All sections scroll vertically on one page
- **Modal Settings** (弹窗设置) — Lightweight settings in a modal, no page exit

## Page structure

1. **Settings nav** — Grouped by section, marking the active one.
2. **Sections** — One category of settings per section with a clear title and description.
3. **Form rows** — Label, control and help text; pick instant or batched saving, not both.
4. **Danger zone** — Irreversible actions isolated in red with a second confirmation.
5. **Save bar** — Appears when dirty, making the unsaved state explicit.

## Implementation

**CSS:** `flex` `grid` `position: sticky` `scroll-margin-top: 6rem`

Sidebar variant: sticky nav, content renders row-style forms per section (label left, control right). The single-page variant links anchors with scroll-margin and highlights the active section. Toggles are controlled switches; when unsaved changes exist, a sticky bottom save bar appears. Isolate the danger zone at the end with red borders and a confirm dialog.

## Agent task prompt

```text
Implement the settings page in the current project.

Inspect the existing settings entry, form components and design tokens first; stay consistent.
Requirements:
- Sectioned nav + data-driven row forms
- Controlled toggles/inputs with unsaved-changes hint and save feedback
- Danger zone with confirmation
- Consistent light/dark; keyboard accessible
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a settings page with sectioned navigation, row-style forms and a save button.

**Design:** Build a sidebar-style settings page: left nav (General, Notifications, Security, Billing), right side row-style forms per section (label + hint + toggle/input); notifications has email/push/SMS toggles; a red "Danger Zone" (delete account with confirmation) at the bottom; a save bar floats when there are unsaved changes.

**Implementation:** React + Tailwind settings page: data-driven options ({section, rows:[{label, hint, type}]}); controlled switches/inputs; dirty state drives a sticky save bar with toast on success; danger-zone button opens a confirm dialog; section nav supports keyboard and aria-current. No new dependencies.

## Related

- [sidebar](/pages/sidebar) — Contains
- [switch](/pages/switch) — Contains
- [input](/pages/input) — Contains
- [tabs](/pages/tabs) — Contains
- [toast](/pages/toast) — Contains

## Sources

- [Nielsen Norman Group — Settings](https://www.nngroup.com/articles/settings-ux/)
- [Apple HIG — Settings](https://developer.apple.com/design/human-interface-guidelines/settings)

---

JSON: `/api/concept/pages/settings.json` · Site: /en/pages/settings
