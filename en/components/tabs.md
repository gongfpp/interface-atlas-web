# Tabs / 标签页

> Components · `id: tabs`

A row of switchable labels that divide one region into mutually exclusive views: the tab headers stay visible and clickable, and only the active tab's panel shows while the rest stay hidden. Packs several tightly related contents into one area to switch in place instead of full-page navigation. Arrow-key navigation between tabs makes it a classic accessibility showcase.

**Aliases:** 选项卡 · tab 切换 · 页签 · 切换标签 · 浏览器那种标签 · 分栏切换

**Category:** Navigation / Layout

## Name disambiguation

Tabs switch peer content panels. A segmented control is a compact mode/filter switch. A breadcrumb shows hierarchical location.

## When to use

- Parallel views of one object — overview / activity / settings
- Switching in place instead of full-page navigation
- Tightly related contents with ≤ 7 tabs

## When not to use

- Unrelated contents — split into pages or routes
- Users must compare two panes side by side
- Sequential flows — use a stepper

## Variants

- **Underline** (下划线式) — Active marker under the label, Material-style
- **Pill / Segmented** (胶囊分段式) — Rounded segmented control, iOS-style
- **Card** (卡片式) — Tab cards fused with the panel

## Platform API

- `role="tablist"`
- `role="tab"`
- `role="tabpanel"`

## In code

| Framework | Name |
| --- | --- |
| ARIA APG | [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) |
| shadcn/ui | [Tabs](https://ui.shadcn.com/docs/components/tabs) |
| MUI | [Tabs](https://mui.com/material-ui/react-tabs/) |
| AntD | [Tabs](https://ant.design/components/tabs) |

## Implementation

**CSS:** `flex` `border-bottom: 2px solid` `transform` `transition`

Semantics: role="tablist" > role="tab" (aria-selected) + role="tabpanel" (aria-labelledby, non-active panels hidden). Animate the active indicator with an absolutely positioned bar sliding via transform: translateX; panels may fade on switch. Keyboard support needs roving tabindex with arrow keys.

## Agent task prompt

```text
Implement a Tabs component in the current project.

Check whether a tabs or segmented control already exists; extend rather than rewrite.
Requirements:
- Full ARIA semantics (tablist / tab / tabpanel / aria-selected)
- Arrow-key switching (roving tabindex)
- Sliding active indicator that respects prefers-reduced-motion
- Preserve per-panel scroll or form state (keep-mounted or caching strategy)
- No unnecessary dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a tabs component: a row of tab headers plus panels, switched by click or arrow keys, showing only the active panel.

**Design:** Create tabs: equal-width headers in a row, active label in primary color with a 2px accent underline that slides between tabs; 16px panel padding; inactive labels in secondary color. Subtle fade on switch. Consistent in light and dark themes.

**Implementation:** React + Tailwind tabs: full role="tablist"/"tab"/"tabpanel" semantics; controlled activeId; indicator as an absolutely positioned bar animated with translateX (duration multiplied by a speed variable for debugging); panels fade in via key changes, respecting prefers-reduced-motion; roving tabindex with arrow keys. No new dependencies.

## Related

- [accordion](/components/accordion) — Similar
- [breadcrumb](/components/breadcrumb) — Similar
- [pagination](/components/pagination) — Similar
- [dropdown](/components/dropdown) — Similar
- [sidebar](/components/sidebar) — Similar

## Confusable

- [segmented-control](/components/segmented-control) — A segmented control is compact for modes/filters; tabs section content.
- [breadcrumb](/components/breadcrumb) — A breadcrumb shows hierarchy; tabs show peers.
- [sidebar](/components/sidebar) — A sidebar is persistent navigation; tabs are a strip inside content.

## Applicable styles

`minimalism` `bento-grid`

## Sources

- [WAI-ARIA Authoring Practices — Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [Material Design 3 — Tabs](https://m3.material.io/components/tabs/overview)

---

JSON: `/api/concept/components/tabs.json` · Site: /en/components/tabs
