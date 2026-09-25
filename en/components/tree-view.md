# Tree View / 树形控件

> Components · `id: tree-view`

An expandable list that shows hierarchy as nested branches: each node folds or opens and its children indent underneath. Fits file directories, org charts and taxonomies. Nodes may be single- or multi-select, and expanded state stays independent of selection.

**Aliases:** 树形列表 · 文件树 · 目录树 · 树结构 · tree

**Category:** Data Display / Navigation

## Name disambiguation

Tree may also mean a mind map or org chart; this entry covers the expandable, selectable list control.

## When to use

- Data is naturally hierarchical — directories, org charts, taxonomies
- Branches must fold to manage a large number of siblings
- The nesting itself is part of the information

## When not to use

- Two shallow levels with few items — accordion or grouped list is lighter
- Hierarchy is site chrome rather than content — use a sidebar or menu
- A flat long list serves better — use a table or list

## Variants

- **Single select** (单选树) — One node selected at a time, often feeding a detail pane
- **Multi select** (多选树) — Nodes checkable in batches, parents exposing an indeterminate state
- **File tree** (文件树) — Directory tree with type icons — the familiar product form

## Platform API

- `role="tree"`
- `role="treeitem"`
- `aria-expanded`

## In code

| Framework | Name |
| --- | --- |
| ARIA APG | [Tree View](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/) |
| Radix Primitives | [Collapsible](https://www.radix-ui.com/primitives/docs/components/collapsible) |
| MUI | [TreeView](https://mui.com/material-ui/react-tree-view/) |

## Implementation

**CSS:** `padding-left` `border-left` `transform`

Show depth with recursive indent (padding-left or margin-left), optionally with guide rules. The twisty is a small triangle or plus/minus that rotates or swaps with state; collapsed subtrees hide visually while keeping tree semantics. Use a roving tabindex and let arrows walk visible nodes.

## Agent task prompt

```text
Implement a Tree View component in the current project.
Inspect existing lists, collapsibles and design tokens first and reuse indent, icon and highlight styles.
Usage: file directories, org charts and taxonomies.
Requirements:
- Nested nodes expand and collapse; expanded state is independent of selection
- role=tree / treeitem with correct aria-expanded
- Keyboard focus walks nodes continuously and can select
- Respect prefers-reduced-motion; consistent light and dark themes
- No new dependencies
Run the existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a tree view of expandable hierarchical nodes with node selection.

**Design:** Design a tree view. Requirements: children indent under parents; the twisty is legible across states; the selected row highlights; indent stays readable when nesting goes deep; empty branches explain themselves; consistent light and dark themes.

**Implementation:** React + Tailwind tree view: render a nested node array recursively into role="tree" and role="treeitem"; nodes carry aria-expanded and the container takes aria-multiselectable as needed; a roving tabindex with arrow keys (up/down/left/right) drives focus and Enter or Space selects.

## Related

- [accordion](/components/accordion) — Alternative
- [sidebar](/components/sidebar) — Used with
- [menu](/components/menu) — Similar

## Confusable

- [accordion](/components/accordion) — Accordion opens sibling sections; tree-view expresses parent-child nesting at any depth
- [menu](/components/menu) — Menu issues commands and navigation; tree-view browses and selects hierarchical data

## Sources

- [ARIA APG — Tree View](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/)
- [WAI-ARIA — tree role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [Material Design — Lists](https://m3.material.io/components/lists/overview)

---

JSON: `/api/concept/components/tree-view.json` · Site: /en/components/tree-view
