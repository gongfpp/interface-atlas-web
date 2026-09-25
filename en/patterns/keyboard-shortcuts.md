# Keyboard Shortcuts / 快捷键

> Patterns · `id: keyboard-shortcuts`

Discoverable keyboard accelerators for frequent commands, paired with a help entry. Hints can live in tooltips, a shortcuts dialog (⌘K-style) or vim-like sequences. It speeds up experts while keeping focus visible, never stealing keys from text inputs, and staying discoverable for newcomers.

**Aliases:** 快捷键 · 键盘快捷键 · 快捷键提示 · 键盘加速键 · 按键操作 · keyboard shortcuts · hotkeys · key bindings

**Category:** Interaction / Keyboard

## When to use

- Dense, repetitive commands — editors, admin tools, design apps
- Keyboard-first users chasing muscle memory
- A command palette exists and needs key bindings plus help

## When not to use

- Form-heavy pages where global key capture breaks typing
- Touch-first products with no keyboard to accelerate
- Shortcuts with no discoverability path — newcomers are stuck

## Variants

- **Tooltip hints** (工具条标注) — Key chips beside buttons or in tooltips — lightest touch
- **Shortcuts dialog** (快捷键对话框) — ⌘K or ? opens a full cheat sheet
- **Vim-style sequences** (vim 式序列) — Multi-key sequences (gg, dd) — steep, but blazing for experts

## Platform API

- `keydown`
- `KeyboardEvent`
- `:focus-visible`

## Implementation

**CSS:** `:focus-visible` `outline` `kbd` `grid`

On keydown inspect event.target — skip single-key bindings when focus sits in input, textarea or contenteditable. Match on event.key plus metaKey/ctrlKey/shiftKey and only preventDefault when the combination is not reserved by the OS or browser. The shortcuts dialog can be role="dialog" with kbd elements showing keys. Style focus with :focus-visible and respect prefers-reduced-motion.

## Agent task prompt

```text
Implement a keyboard shortcut system in the current project.

Inspect the existing component system and design tokens first; reuse existing components.
Keep the project's visual style. Add no unnecessary dependencies.
Requirements:
- Key bindings for frequent commands, discoverable in the UI
- A shortcuts help dialog or cheat-sheet entry
- Never steal keys from text inputs; focus rings via :focus-visible
- Respect prefers-reduced-motion
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a keyboard-shortcuts demo: buttons respond to clicks and keys, with a cheat-sheet help entry.

**Design:** Create a shortcuts demo. Requirements: key chips such as ⌘K / ⌘S beside toolbar buttons; ? opens a grouped cheat-sheet dialog; real key presses trigger the actions with feedback; clear focus rings; light and dark themes.

**Implementation:** Implement with React + window keydown: bind/unbind in useEffect and skip when event.target is an input control; drive bindings from data ({keys, label, run}). Close the dialog on Esc and return focus. Render keys with kbd. Scale animation durations by var(--demo-speed, 1) and respect prefers-reduced-motion.

## Related

- [command-palette](/patterns/command-palette) — Used with
- [tooltip](/patterns/tooltip) — Used with
- [focus-ring](/patterns/focus-ring) — Used with
- [keyboard-navigation](/patterns/keyboard-navigation) — Used with

## Sources

- [W3C ARIA APG — Keyboard Interaction](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)
- [MDN — KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- [Nielsen Norman Group — Keyboard Accessibility](https://www.nngroup.com/articles/keyboard-accessibility/)

---

JSON: `/api/concept/patterns/keyboard-shortcuts.json` · Site: /en/patterns/keyboard-shortcuts
