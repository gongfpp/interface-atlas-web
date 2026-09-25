# Alert / 警告提示

> Components · `id: alert`

An inline, status-coloured banner inside the page flow for messages that must be seen: errors, warnings, important notices. It takes layout space instead of overlaying, and stays until the issue is resolved or the user dismisses it.

**Aliases:** 警告条 · 提示横幅 · 警告框 · 通知横幅 · 错误提示条 · 页面顶部提示 · 表单提交后的错误提示

**Category:** Feedback

## Name disambiguation

An alert is persistent in-page status messaging. A toast is a brief floating confirmation. A modal is a blocking overlay that demands action.

## When to use

- A form-level error summary after submit
- System notices (maintenance, quota nearly full)
- An in-page warning before a destructive action

## When not to use

- Lightweight success feedback — use a toast
- Field-specific issues — use inline field errors
- Overuse dilutes attention — keep alerts rare

## Variants

- **Info** (信息) — Neutral tone, general notice
- **Success** (成功) — Confirms a completed operation
- **Warning** (警告) — Risky but continuable
- **Error** (错误) — Failed or dangerous, needs handling

## Platform API

- `role="alert"`
- `aria-live="assertive"`

## In code

| Framework | Name |
| --- | --- |
| ARIA | role="alert" |
| shadcn/ui | [Alert](https://ui.shadcn.com/docs/components/alert) |
| MUI | [Alert](https://mui.com/material-ui/react-alert/) |
| AntD | [Alert](https://ant.design/components/alert) |

## Implementation

**CSS:** `background-color` `border` `border-radius` `flex`

Map status colours: info/success/warning/error each get a low-saturation surface, a matching icon and a left accent border. Structure: icon, title, description, optional actions and close. Place it above or near the offending content rather than always stacking at the top. Never rely on colour alone — pair it with icons and text.

## Compare dimensions (`form-feedback`)

- **Interruption:** Medium — visible in the flow, not blocking
- **Persistence:** High — persists until resolved or dismissed
- **Error pinpointing:** Medium — explains cause and scope

## Agent task prompt

```text
Implement an Alert component in the current project.

Inspect the existing component system and design tokens first; reuse existing
status and semantic colour variables.
Usage: form error summaries and system-level notices.
Requirements:
- info/success/warning/error variants
- Icon + title + description + optional actions and close
- Never colour-only: icons and text accompany status
- Persistent, no auto-dismiss
- Consistent light/dark themes, no new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create an Alert component: a status-coloured banner with icon, title, description and a close button, supporting info/success/warning/error.

**Design:** Create an Alert. Requirements: low-saturation status surface with a matching left accent border; icon, title, description line and a top-right close button; moderate radius with accessible text contrast; persistent until dismissed; consistent light/dark themes.

**Implementation:** React + Tailwind Alert: variants map to a palette object (surface, border, icon and text colours); flex structure with icon, content (title + description), optional actions and a close button (aria-label); controlled visible state or parent conditional rendering; optional fade-in keyframes scaled by var(--demo-speed, 1); role="alert" for errors, role="status" otherwise.

## Related

- [toast](/components/toast) — Alternative
- [form-validation](/components/form-validation) — Alternative
- [modal](/components/modal) — Similar

## Confusable

- [toast](/components/toast) — A toast auto-dismisses; an alert stays until the condition clears.
- [modal](/components/modal) — A modal blocks and demands action; an alert only informs.

## Sources

- [Apple HIG — Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts)
- [Material Design — Banners](https://m3.material.io/components/banners/overview)

---

JSON: `/api/concept/components/alert.json` · Site: /en/components/alert
