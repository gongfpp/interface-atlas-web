# Command Palette / 命令面板

> Components · `id: command-palette`

A floating search panel summoned with ⌘K / Ctrl+K: type to filter commands, pages or content, navigate with arrow keys, execute with Enter. Popularized by macOS Spotlight; now standard in power-user products.

**Aliases:** 命令搜索框 · 快捷搜索框 · 快速操作面板 · spotlight 搜索 · ctrl+k 搜索 · Mac 那种快捷搜索框 · cmd+k

**Category:** Navigation / Search

## When to use

- Products with many features and deep hierarchies — admin panels, dev tools, note apps
- Power users performing frequent actions
- When you want flat navigation — reach anything in one stroke

## When not to use

- Mass-market shallow apps — users don't know the shortcut culture
- Mobile-primary contexts — use a bottom search instead
- Very few commands (< 10) — a plain menu suffices

## Variants

- **Command-only** (纯命令) — Commands only — VS Code style
- **Universal** (万能搜索) — Commands, pages, content and recents
- **AI-enhanced** (AI 增强) — Natural language queries with suggested actions

## Platform API

- `<dialog>`
- `role="combobox"`

## Implementation

**CSS:** `position: fixed` `backdrop-filter: blur` `box-shadow` `transform-origin`

A controlled overlay: fixed centered + blurred backdrop; filter with useMemo into grouped lists; keep focus locked in the input; manage activeIndex for keyboard nav. The cmdk library is a solid React reference. Use role="dialog" and a focus trap.

## Compare dimensions (`navigation-overlay`)

- **Interruption:** Medium — covers screen but closes fast
- **Content capacity:** Medium — virtualizable list
- **Trigger cost:** Low — one shortcut

## Agent task prompt

```text
Implement a Command Palette in the current project.

Inspect existing dialog primitives and design tokens first; reuse them.
Requirements:
- Global ⌘K / Ctrl+K toggle, Esc to close
- Filter-as-you-type, grouped results (commands / pages)
- Full keyboard nav + aria attributes (dialog, listbox, option)
- Subtle entrance animation, respects prefers-reduced-motion
- Custom command registration (a useCommands-like API)
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** "Create a command palette: summon with ⌘K", type to filter commands, arrow keys to navigate, Enter to run.

**Design:** Create a command palette: centered overlay with translucent blurred backdrop; top input; grouped results below (commands / pages / recents); highlighted selection; key hints on the right; subtle scale + fade entrance. Visual reference: macOS Spotlight / Linear.

**Implementation:** "Implement a controlled palette in React: global ⌘K/Ctrl+K listener; role="dialog" + focus trap; useMemo filtering + grouping; activeIndex keyboard nav (↑↓ Enter); close on backdrop click. Model the API on cmdk but implement yourself", no new deps.

## Related

- [search](/components/search) — Used with
- [dropdown](/components/dropdown) — Alternative
- [sidebar](/components/sidebar) — Similar
- [menu](/components/menu) — Similar

## Applicable styles

`minimalism`

## Sources

- [macOS Human Interface Guidelines — Spotlight](https://developer.apple.com/design/human-interface-guidelines/)
- [cmdk — Command menu for React](https://cmdk.paco.me/)

---

JSON: `/api/concept/components/command-palette.json` · Site: /en/components/command-palette
