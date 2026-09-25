# Editorial / 杂志编辑风

> Styles · `id: editorial`

A visual language that lays out the page like a magazine spread: serif display headings, drop caps, hairline column rules, issue numbering and generous margins, with imagery woven into a page-turning rhythm. Black, white and grey grounds, serif-and-sans pairing — the layout tells the story, not ornament.

**Aliases:** 杂志编辑风 · 杂志风 · 编辑排版风 · 报刊风格 · 首字下沉那种排版 · 衬线大标题风 · Magazine Layout · Editorial Design

**Category:** Style / Visual Language

## When to use

- Content products — long-form, digital magazines, portfolios, brand journals
- Brands that want cultural gravitas and respect for the written word
- Narrative pages with a clear image-text hierarchy

## When not to use

- Task-oriented tools where efficiency beats reading experience
- Dashboards and lists meant for rapid scanning
- Teams without typographic skill — bad serif work exposes itself

## Variants

- **Broadsheet** (大报风) — Newspaper columns, dense setting, B&W photography, hairline rules
- **Glossy Magazine** (光面杂志) — Big imagery, display type, generous whitespace — fashion monthly
- **Digital Editorial** (数字编辑风) — Web-adapted — serif display with modern body typography

## Design spec

- **typography:** Italic serif headlines with serif body
- **color:** Warm paper #FBF9F4, ink text, brown accents
- **border:** Hairline rules instead of card boxes
- **shadow:** Soft shadow on photo cards only
- **spacing:** Multi-column layout, airy leading

## Implementation

**CSS:** `font-family: Georgia` `font-variant-numeric: oldstyle-nums` `column-count` `border-top: 1px solid` `text-indent`

Type carries it: high-contrast serif display (Playfair/Georgia), serif or humanist sans body at 60–75 characters per line; drop caps float over 3–4 lines; separate with 1px hairlines and whitespace plus small-caps eyebrows at 0.15em tracking; oldstyle numerals for numbering. Prefer black-and-white or duotone imagery; dark mode uses warm black to keep the paper feel.

## Agent task prompt

```text
Implement an Editorial long-form reading section in the current project.

Inspect the existing font stacks and typography variables first; bring in serifs through the current font system.
Requirements:
- Serif display + eyebrow + body hierarchy, 60–75 character measure
- Drop caps and section numerals in pure CSS
- Separate with hairlines and whitespace only — no heavy shadows or gradients
- Mobile type scale keeps rhythm; headings wrap gracefully
- Dark mode with warm black for the paper feel
- No new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** "Design an interface in Editorial style: serif display headings, drop caps, hairline rules and issue numbering — lay out content like a magazine spread."

**Design:** "Editorial spec: paper white #FAF8F4 ground, near-black #1A1816 text; high-contrast serif headings 36px+, small-caps eyebrows with wide tracking; serif body 17px/1.75 at 60–75 characters; 3-line drop caps; 1px hairlines with Roman or oldstyle numerals; B&W or duotone imagery. Dark mode: warm black #17150F with cream text."

**Implementation:** "Implement editorial layout in CSS: .article { font-family: Georgia, serif; font-size: 17px; line-height: 1.75; max-width: 65ch; } drop cap: .article > p:first-of-type::first-letter { float: left; font-size: 3.4em; line-height: 0.85; padding-right: 8px; } eyebrow: .eyebrow { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; } hairlines at 1px solid #D8D2C6."

## Related

- [swiss-style](/styles/swiss-style) — Similar
- [minimalism](/styles/minimalism) — Similar
- [documentation](/styles/documentation) — Used with
- [card](/styles/card) — Affects
- [navbar](/styles/navbar) — Affects

## Sources

- [Butterick's Practical Typography](https://practicaltypography.com/)
- [Wikipedia — Editorial design](https://en.wikipedia.org/wiki/Editorial_design)

---

JSON: `/api/concept/styles/editorial.json` · Site: /en/styles/editorial
