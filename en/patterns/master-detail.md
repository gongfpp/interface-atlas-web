# Master Detail / 主从视图

> Patterns · `id: master-detail`

A summary list on one side with the selected item's full detail on the other; clicking an entry updates the detail pane instantly. It solves the constant back-and-forth between list and detail pages — overview and depth share one screen, so users keep their sense of place and switching or comparing multiple items becomes cheap.

**Aliases:** Master Detail · 主从视图 · 主从布局 · 列表详情联动 · 左右分栏 · 双栏视图 · 左边列表右边详情

**Category:** Layout / Navigation

## When to use

- Item-dense tools like mail clients and file managers
- Fast switching or comparison across many items
- Wide viewports with room for both panes

## When not to use

- Narrow screens — degrade to list page then detail page
- Heavy detail content that crowds out the list
- Unrelated items where users inspect a single object

## Variants

- **Two-pane** (双栏同屏) — Classic side-by-side layout for wide screens, click syncs panes
- **Stacked** (窄屏堆叠) — On narrow screens list comes first, detail opens over it with a back affordance
- **Persistent selection** (常驻选中) — The list keeps a visible selection and scroll position across switches

## Implementation

**CSS:** `flex` `overflow-y-auto` `aria-selected` `min-width`

Lay out with flex: the master list gets a fixed or fluid width with its own overflow-y-auto, and the detail pane fills the rest. Express selection with role="listbox"/option or buttons carrying aria-selected. On narrow screens use container queries or breakpoints to stack: list first, detail pushed in or overlaid on selection, with an explicit back affordance.

## Agent task prompt

```text
Implement Master Detail in the current project.

Inspect the existing list, sidebar and detail components first; reuse existing selection styles.
Usage: a projects screen syncing list and detail on one canvas.
Requirements:
- Summary list on the left, detail pane on the right, synced instantly on click
- Clear selection state (highlight + accent bar); list scroll position preserved
- Independent pane scrolling; degrade to a stacked layout with a back action on narrow screens
- Dark mode support
- No unnecessary dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a master-detail layout with a project list on the left and the selected project's details on the right; clicking a row syncs the detail pane instantly.

**Design:** Design a master-detail interface. Requirements: the left column shows summary rows (name + status) with the selected row highlighted by an accent bar; the detail pane shows title, status badge, owner and a progress bar; both panes scroll independently; include a stacked narrow-screen variant; light/dark themes.

**Implementation:** Implement Master Detail in React + Tailwind. Track the selected id with useState; outer flex with a fixed height, left column w-40 overflow-y-auto, row buttons highlighted via aria-selected and bg-accent-soft; the right flex-1 pane renders details (title, badge, progress bar). In variants mode render small two-pane and stacked samples. Respect prefers-reduced-motion.

## Related

- [sidebar](/patterns/sidebar) — Used with
- [table](/patterns/table) — Used with
- [card](/patterns/card) — Used with
- [drawer](/patterns/drawer) — Used with
- [tabs](/patterns/tabs) — Used with

## Sources

- [Apple HIG — Split Views](https://developer.apple.com/design/human-interface-guidelines/split-views)
- [Material Design — Lists](https://m3.material.io/components/lists/overview)

---

JSON: `/api/concept/patterns/master-detail.json` · Site: /en/patterns/master-detail
