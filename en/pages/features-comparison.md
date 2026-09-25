# Feature Comparison Page / 功能对比页

> Pages · `id: features-comparison`

A page that aligns several options feature by feature in one side-by-side matrix: the first column holds the comparison dimensions, each option takes a column, and users can show differences only, sort by dimension and spot a recommended pick. It serves the which-one decision by turning marketing copy into checkable evidence.

**Aliases:** 功能对比页 · 选型对比表 · 功能对照表 · 插件对比页 · 套餐对比 · 买哪个版本对比 · 参数对比表 · 对比矩阵

**Category:** Page / Marketing

## When to use

- Users must choose among two or more options
- Features, prices and limits align row by row
- The goal is to surface differences, not repeat marketing

## When not to use

- A single option — a landing or pricing page fits better
- Options differ so much they cannot be aligned row by row
- Long explanations are needed instead of per-cell marks

## Variants

- **Side-by-side Table** (并列表格) — Classic grid with a pinned first column of dimensions
- **Differences Only** (只看差异) — Hides identical rows to leave only real differences
- **Card Comparison** (卡片对比) — Options stacked as cards, friendlier on mobile

## Page structure

1. **Header** — One line states what is compared and for whom.
2. **Plan headers** — One column per option with name, price and a recommended badge; click to focus.
3. **Dimension column** — Pinned leftmost labels for features, price and limits, optionally grouped.
4. **Comparison cells** — Marks, dashes or numbers express support with one consistent convention.
5. **Difference highlight** — Flags where options differ, with a differences-only toggle.
6. **Decision CTA** — Each option ends with try, buy or contact entry points.

## Implementation

**CSS:** `grid` `flex` `position: sticky` `overflow-x: auto` `border-collapse: collapse`

Use real table semantics for accessibility; pin the first column and header row with position: sticky and let a wrapper handle overflow-x: auto. Mark differences with background plus an icon or label, never color alone. Degrade to card comparison on mobile; sorting and differences-only are driven by component state without restructuring the document.

## Agent task prompt

```text
Implement the feature comparison page in the current project.

Inspect existing table components, pricing data and design tokens first; reuse them.
Requirements:
- Semantic table with sticky first column and header; scrollable overflow
- Option headers with price and recommended badge, click to focus
- Differences-only toggle and sorting driven by state
- Differences highlighted without relying on color alone
- Degrade to card comparison on mobile; consistent light/dark
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a feature comparison page that shows two or more options with features and pricing side by side.

**Design:** Build a SaaS feature comparison: a header with a short intro; a table with a pinned dimension column and three option headers holding price and a recommended badge; a differences-only toggle and per-dimension sort; differing cells highlighted with background plus an icon; one CTA per option. Degrades to card comparison on mobile, consistent light/dark.

**Implementation:** Implement with React + Tailwind: real table semantics with scope attributes; sticky first column and header; an overflow container for horizontal scroll; a pure function decides differences and drives highlighting and the differences-only toggle; controlled sorting; no new dependencies.

## Related

- [table](/pages/table) — Contains
- [segmented-control](/pages/segmented-control) — Contains
- [badge](/pages/badge) — Contains
- [progressive-disclosure](/pages/progressive-disclosure) — Uses pattern
- [pricing](/pages/pricing) — Similar

## Sources

- [Nielsen Norman Group — Comparison Tables](https://www.nngroup.com/articles/comparison-tables/)
- [W3C WAI — Tables Tutorial](https://www.w3.org/WAI/tutorials/tables/)
- [MDN — The Table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

---

JSON: `/api/concept/pages/features-comparison.json` · Site: /en/pages/features-comparison
