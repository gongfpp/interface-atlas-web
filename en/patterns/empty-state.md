# Empty State / 空状态

> Patterns · `id: empty-state`

When a list or page has no data, don't leave a void — fill it with an illustration, one sentence of explanation and a clear next action. It solves the "blank screen" problem where users can't tell what happened or what to do next, turning dead space into a starting point: onboarding for first use, a way out for fruitless searches.

**Aliases:** Empty State · 空状态页面 · 空白页占位 · 无数据占位 · 空数据提示 · 零数据状态 · 暂无内容

**Category:** Feedback / Content

## When to use

- First use before any data exists
- Searches or filters with zero matches
- Content cleared by an action that needs a recovery path

## When not to use

- A momentary load — use a skeleton instead
- Missing data caused by errors — use a distinct error state
- Editing canvases where users need blank freedom

## Variants

- **First use** (首次使用) — Illustration plus a primary CTA to create the first item
- **No results** (无搜索结果) — Explains the miss and offers a "clear filters" way out
- **Minimal** (极简) — A single line of copy for secondary areas

## Implementation

**CSS:** `flex centering` `svg stroke` `border-dashed` `min-height`

Keep the empty container at a min-height close to the populated layout to avoid jumps; draw the illustration as a simple stroked SVG (stroke: currentColor) that follows the theme; copy should explain why it's empty and point to one action — a single primary CTA, with secondary options demoted to links. Never reuse the empty state for failures; design a separate error state.

## Agent task prompt

```text
Implement Empty State in the current project.

Inspect the existing illustration assets and button components first; reuse the existing stroked illustration style and CTA styles.
Usage: first-use and no-results empty states for a project list.
Requirements:
- Standard structure: illustration + explanation copy + a single primary CTA
- No-results state offers a "clear filters" way out
- Empty layout height close to the populated one, no jump on switch
- Distinct from the error state — never reuse the empty state for failures
- Dark mode support
- No unnecessary dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create an empty-state page with an illustration, a "no projects yet" line and a primary "New project" button guiding users to their first item.

**Design:** Design an empty-state screen. Requirements: a centered stroked illustration, copy that explains why it's empty and points to one action; keep a single primary CTA and demote secondary options to links; match the empty layout's height to the populated one to avoid jumps; a no-results variant offers "clear filters"; light/dark themes.

**Implementation:** Implement Empty State in React + Tailwind. Toggle populated / empty with useState; the empty layout centers an inline stroked SVG (currentColor, theme-aware), a title, explanation and primary button in a flex column; set a fixed min-height matching the list; the "clear filters" button resets the filter state. Respect prefers-reduced-motion (skip the fade-in).

## Related

- [skeleton-loading](/patterns/skeleton-loading) — Similar
- [onboarding-tour](/patterns/onboarding-tour) — Similar
- [button](/patterns/button) — Used with
- [search-filtering](/patterns/search-filtering) — Similar
- [card](/patterns/card) — Used with

## Sources

- [Apple HIG — Empty States](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design — Understates / empty states](https://m3.material.io/)

---

JSON: `/api/concept/patterns/empty-state.json` · Site: /en/patterns/empty-state
