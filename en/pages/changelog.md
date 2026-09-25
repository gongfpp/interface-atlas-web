# Changelog / 更新日志页

> Pages · `id: changelog`

A reverse-chronological record of every product change: each entry opens with a date and version, groups items into added, changed and fixed, and flags breaking changes with migration notes and links. It gives users and teams one shared source of truth for what an update changes for them.

**Aliases:** 更新日志 · 更新日志页 · 版本更新记录 · 更新记录页 · 发版说明 · 版本历史页 · 新版本改了啥 · 更新公告页

**Category:** Page / Documentation

## When to use

- The product ships many public versions over time
- Users need to know what changed in their version
- Behavior or API changes need migration notes

## When not to use

- A single release, or the product is effectively frozen
- Internal task streams — use the project tracker
- A commit-by-commit developer view — use release pages

## Variants

- **Timeline** (时间线式) — Vertical timeline anchored by date and version
- **Grouped** (分组折叠) — Collapsible per version, newest expanded by default
- **Feed** (订阅流) — Compact list with RSS or email subscribe

## Page structure

1. **Header & subscribe** — States the release cadence and offers RSS or email subscribe.
2. **Latest release** — Pins the current version and highlights the most important change.
3. **Version entries** — One block per version, newest first, with anchor links.
4. **Change groups** — Added, changed and fixed kept separate, one line each.
5. **Migration note** — Breaking changes called out with the replacement path.

## Implementation

**CSS:** `grid` `flex` `counter-reset: version` `border-left: 2px solid var(--color-line)` `position: sticky`

Use an ordered list or article semantics; mark dates with time elements carrying datetime. Distinguish categories by label, not color alone. Draw the timeline with a left border and dot pseudo-elements; use native details or a controlled accordion. Keep subscribe visible but restrained; filtering is state-driven and preserves document order.

## Agent task prompt

```text
Implement the changelog page in the current project.

Inspect the existing docs layout, version data source and design tokens; stay consistent.
Requirements:
- Reverse-chronological versions with time[datetime] dates
- Added/changed/fixed groups with breaking changes called out
- Type filtering and per-version collapse driven by state
- RSS or email subscribe entry
- Consistent light/dark; no new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a changelog page listing versions and their key changes newest first.

**Design:** Build a product changelog: a header with a cadence note and subscribe button; a reverse- chronological list where each entry has a date, version badge and added, changed and fixed groups; breaking changes called out with migration notes; a category filter on top. A narrow single column on desktop, consistent light/dark.

**Implementation:** Implement with React + Tailwind: content from Markdown or JSON; dates as time[datetime]; category filtering and collapsing state-driven; breaking changes marked with an accent plus a text label; deep links to a version; no new dependencies.

## Related

- [timeline](/pages/timeline) — Contains
- [accordion](/pages/accordion) — Contains
- [badge](/pages/badge) — Contains
- [search-filtering](/pages/search-filtering) — Uses pattern
- [documentation](/pages/documentation) — Similar

## Sources

- [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
- [Semantic Versioning](https://semver.org/)

---

JSON: `/api/concept/pages/changelog.json` · Site: /en/pages/changelog
