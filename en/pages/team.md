# Team Page / 团队页

> Pages · `id: team`

A page that introduces an organization through a grid of person cards: avatar, name, role and a one-line responsibility form the smallest unit, grouped by team or function, often with an open-roles link and a values narrative. It replaces the abstract we with specific, recognizable people to build trust.

**Aliases:** 团队页 · 团队成员页 · 团队介绍页 · 关于我们团队 · 我们是谁页面 · 公司团队页 · 成员介绍页 · 团队墙

**Category:** Page / Marketing

## When to use

- A company or product needs to show its core members
- Hiring and trust-building need real faces
- The organization groups naturally by team or function

## When not to use

- Only one founder to show — use an about page
- Member details are sensitive or change often
- Detailed resumes and portfolios — use profile pages

## Variants

- **Photo Grid** (照片网格) — Even avatar grid with bios on hover
- **Roster** (名册式) — Compact list grouped by department
- **Featured** (焦点式) — Large portrait plus a longer bio for key members

## Page structure

1. **Header** — One line of mission or scale sets the tone.
2. **Member grid** — Even-width cards with a consistent avatar crop.
3. **Team groups** — Sections by function or department, each with a short heading.
4. **Member card** — Avatar, name, role and one line, linking to a profile.
5. **Careers CTA** — A closing link to open roles captures interest.

## Implementation

**CSS:** `grid` `flex` `aspect-ratio: 1` `grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))` `object-fit: cover`

Lay out the member grid with repeat(auto-fit, minmax(140px, 1fr)); crop avatars to aspect-ratio: 1 with object-fit: cover and real alt text. Cards may lift on hover but must disable under reduced-motion. Department filters stay keyboard reachable, and each card is a focusable link rather than a decorative div.

## Agent task prompt

```text
Implement the team page in the current project.

Inspect existing member data, avatar assets and card components first; reuse them.
Requirements:
- Responsive member grid grouped by department
- Square avatar crops with real alt text
- Focusable cards linking to profiles
- Keyboard-reachable department filters; respect prefers-reduced-motion
- Careers CTA at the end; consistent light/dark; no new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a team page showing members with avatar cards, names and roles.

**Design:** Build a company team page: a mission and headcount line on top; member card grids grouped by department, each card with a square avatar, name, role and one-line responsibility; a subtle hover lift; a Join us careers button at the end. Two to four responsive columns, consistent light/dark.

**Implementation:** Implement with React + Tailwind: data from a CMS or JSON; grid via auto-fit and minmax; square avatars with real alt text; cards as focusable links; keyboard-reachable department filters; hover motion respects prefers-reduced-motion; no new dependencies.

## Related

- [card](/pages/card) — Contains
- [avatar](/pages/avatar) — Contains
- [badge](/pages/badge) — Contains
- [profile](/pages/profile) — Similar
- [hover-lift](/pages/hover-lift) — Used with

## Sources

- [Material Design 3 — Cards](https://m3.material.io/components/cards/overview)
- [Apple Human Interface Guidelines — Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- [Nielsen Norman Group — Trustworthy Design](https://www.nngroup.com/articles/trustworthy-design/)

---

JSON: `/api/concept/pages/team.json` · Site: /en/pages/team
