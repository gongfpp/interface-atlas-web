# Accordion / 手风琴

> Components · `id: accordion`

A vertical list of collapsible sections: clicking a header expands its content and clicking again collapses it, either exclusively (one open at a time) or independently. Packs grouped content into limited space for on-demand expansion.

**Aliases:** 手风琴 · 折叠面板 · 折叠菜单 · 展开收起 · 可折叠区块 · FAQ 折叠列表 · 点标题展开的那种列表

**Category:** Disclosure / Layout

## When to use

- FAQ and help-centre question groups
- Long settings forms with advanced sections collapsed
- Progressive disclosure of long content on mobile

## When not to use

- Users must compare sections side by side
- Essential content should be visible by default
- Print or SEO needs full text — handle the expanded state

## Variants

- **Single** (单开) — One open at a time, the common default
- **Multiple** (多开) — Sections expand independently
- **Bordered** (分隔卡) — Per-item borders or dividers for stronger grouping

## Platform API

- `<details>`
- `<summary>`

## In code

| Framework | Name |
| --- | --- |
| ARIA APG | [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) |
| shadcn/ui | [Accordion](https://ui.shadcn.com/docs/components/accordion) |
| MUI | [Accordion](https://mui.com/material-ui/react-accordion/) |
| AntD | [Collapse](https://ant.design/components/collapse) |

## Implementation

**CSS:** `grid-template-rows` `transition` `overflow: hidden` `transform: rotate`

Expand animation: transition grid-template-rows 0fr→1fr (or measure scrollHeight into max-height); rotate the chevron 180° in sync. Headers are buttons triggered by Enter/Space; link panels with aria-expanded + aria-controls. Keep the exclusive logic in controlled state; drop the height animation under prefers-reduced-motion.

## Agent task prompt

```text
Implement an Accordion component in the current project.

Inspect the existing component system and design tokens first; reuse existing
surface and radius variables.
Usage: FAQs and grouped settings.
Requirements:
- Single-open (exclusive) and multiple-open modes
- Height expand animation, respecting prefers-reduced-motion
- Keyboard accessible: button headers + aria-expanded/aria-controls
- Consistent light/dark themes, no new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create an Accordion component: collapsible sections with click-to-toggle headers, supporting single-open and multiple-open modes.

**Design:** Create an Accordion. Requirements: header rows with the title on the left and a chevron on the right (rotating 180° when open); smooth height transition (~200ms); divider or card looks; optional accent tint on the open header; consistent light/dark themes.

**Implementation:** React + Tailwind Accordion: items + openIds controlled state, single-open maps to setOpenId(id); panels animate height via grid grid-rows-[0fr]/[1fr] + transition-[grid-template-rows] (duration scaled by var(--demo-speed, 1)) with an inner overflow-hidden; chevron transitions -rotate-90/rotate-0; headers are buttons with aria-expanded + aria-controls; respect prefers-reduced-motion.

## Related

- [accordion-expand](/components/accordion-expand) — Used with
- [progressive-disclosure](/components/progressive-disclosure) — Used with
- [tabs](/components/tabs) — Similar
- [dropdown](/components/dropdown) — Similar

## Sources

- [WAI-ARIA Authoring Practices — Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [MDN — details element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)

---

JSON: `/api/concept/components/accordion.json` · Site: /en/components/accordion
