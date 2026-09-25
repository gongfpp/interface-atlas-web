# About Page / 关于页

> Pages · `id: about`

A brand page explaining who you are: a mission statement sets the tone, then story and milestones build trust, and the end points to contact or careers.

**Aliases:** 关于页 · 关于我们 · 公司介绍页 · 团队介绍页 · 我们是谁 · 品牌故事页 · 关于我们页面

**Category:** Page / Brand

## When to use

- Visitors want to know the team and background before deciding
- The brand needs to communicate mission and values
- Hiring, funding or partnerships need a credible introduction

## When not to use

- Users only care about features and price — use a landing or pricing page
- Team or company details are not settled yet
- The page must carry complex task flows

## Variants

- **Brand Story** (品牌故事) — A founder-led narrative where emotion and imagery lead
- **Team Grid** (团队展示) — Avatar grid with roles and short bios, putting people first
- **Timeline** (历程时间线) — A timeline strings milestones and key numbers together

## Page structure

1. **Header** — Site nav and primary CTA, consistent with the rest of the site.
2. **Mission** — One oversized statement beside a brand image answers why you exist.
3. **Story** — The origin story or timeline builds credibility with concrete events and years.
4. **Team** — A grid of avatars, names and roles, with one line each for small teams.
5. **Values** — Three or four principles, each with one line of explanation, not slogans.
6. **CTA** — Points to contact, careers or the product, giving readers a next step.

## Implementation

**CSS:** `flex` `grid` `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))` `gap` `object-fit: cover`

Stack sections vertically; lay the team and values out with an auto-fit grid; keep avatars square and object-fit: cover so they never stretch. Fade sections in as they enter, respecting prefers-reduced-motion, and keep text-on-image contrast at WCAG AA.

## Agent task prompt

```text
Implement the about page in the current project.

Inspect the existing layout shell, card and avatar components first; reuse them.
Requirements:
- Mission + story/timeline + team + values + CTA
- Team and values on an adaptive grid; avatars never distort
- Timeline marked up as an ordered list
- Images carry alt text; text meets AA contrast
- Respect prefers-reduced-motion; no new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create an about page with a mission statement, team section and values.

**Design:** Design a brand about page: a large mission headline with a brand image; a timeline of milestones; a four-column team grid with name and role cards; a three-column values row with short lines; a closing CTA banner to contact and careers. Theme-consistent with subtle fade-ins.

**Implementation:** React + Tailwind about page: semantic sections; team and values on an auto-fit grid; avatars with a fixed ratio and object-fit: cover; the timeline as an ordered list; entry animation via IntersectionObserver respecting prefers-reduced-motion; no new dependencies.

## Related

- [avatar](/pages/avatar) — Contains
- [timeline](/pages/timeline) — Contains
- [card](/pages/card) — Contains
- [scroll-reveal](/pages/scroll-reveal) — Used with
- [contact](/pages/contact) — Similar

## Sources

- [Nielsen Norman Group — Articles](https://www.nngroup.com/articles/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

---

JSON: `/api/concept/pages/about.json` · Site: /en/pages/about
