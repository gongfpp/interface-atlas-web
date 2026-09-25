# Keyboard Navigation / 键盘导航

> Accessibility · `id: keyboard-navigation`

Make every feature operable by keyboard alone: Tab/Shift+Tab move focus in a sane order, composite widgets roam with arrow keys over a roving tabindex, Escape dismisses overlays and returns focus. The full focus discipline beyond the focus ring, codified in the ARIA APG.

**Aliases:** 键盘导航 · 键盘操作 · 键盘可达 · tab 顺序 · 不用鼠标操作 · keyboard nav

**Category:** Accessibility / Keyboard

## Name disambiguation

The Tab key moves focus; Tabs is a component. Same English word, two completely different things — one is an input key, one is a UI element.

## When to use

- Focus management inside composites — toolbars, menus, tab lists
- Overlays that need an open/close focus loop
- Any core flow that must be completable without a mouse

## When not to use

- Dragging non-interactive nodes into the tab order with tabindex="0"
- Making every item tabbable while arrows do not roam
- Escape closing an overlay and dropping focus at the top of body

## Variants

- **Linear tab order** (线性 Tab 序) — DOM order is focus order — the page-level default
- **Roving tabindex** (漫游 tabindex) — One tabindex="0" inside the group, arrows move it
- **Escape dismiss** (Escape 归还焦点) — Closing an overlay returns focus to its trigger

## Platform API

- `tabindex`
- `keydown`
- `:focus-visible`

## In code

| Framework | Name |
| --- | --- |
| WAI-ARIA APG | [Keyboard Interaction](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/) |
| WCAG | [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) |

## Implementation

**CSS:** `tabindex` `:focus-visible` `keydown`

Page level: natural DOM order with native interactive elements — never positive tabindex. Composites per APG: one tabindex="0" in the group, -1 elsewhere; keydown handles arrows/Home/End and focuses the target item. On open, move focus into the overlay; Escape closes and restores the trigger. Only preventDefault a key once you know the widget owns it.

## Agent task prompt

```text
Implement complete keyboard navigation in the current project.
Inspect the existing component system and design tokens first; reuse current components.
Requirements:
- Focus order matches visual order; no positive tabindex
- Composites roam with arrow keys over a roving tabindex
- Escape closes overlays and returns focus to the trigger
Keep the existing visual style. Add no unnecessary dependencies.
Respect prefers-reduced-motion.
Run the project's existing checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Make the page and components fully keyboard operable — Tab to move, arrows to pick, Escape to dismiss.

**Design:** Focus order matches visual order; toolbars and menus occupy one tab stop and roam with arrows; overlays take focus on open and return it to the trigger on Escape; every stop shows a visible focus ring.

**Implementation:** Composite: container role plus item refs, state tracks activeIndex; `tabIndex={i === active ? 0 : -1}`; onKeyDown maps Arrow/Home/End then focus(next). Overlays use dialog or role="menu", focus the first item on open, Escape closes and calls trigger.focus().

## Related

- [focus-ring](/a11y/focus-ring) — Used with
- [skip-link](/a11y/skip-link) — Used with
- [menu](/a11y/menu) — Used with
- [command-palette](/a11y/command-palette) — Used with

## Confusable

- [tabs](/a11y/tabs) — tabs is the tab component; the Tab key in keyboard-navigation is the focus-mover — same word, different things.

## Sources

- [WAI-ARIA APG — Keyboard Interaction](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)
- [WCAG 2.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)

---

JSON: `/api/concept/a11y/keyboard-navigation.json` · Site: /en/a11y/keyboard-navigation
