# Blog Post / 博客文章页

> Pages · `id: blog-post`

A page for one article: header with title, author and date, a body at a comfortable measure, a table of contents, and an author card with related posts below.

**Aliases:** 博客文章页 · 文章详情页 · 单篇文章页 · 正文页 · 博客正文 · 文章内容页 · 读文章的页面

**Category:** Page / Content

## When to use

- Presenting one standalone article with a title and author
- The body is long and needs a table of contents or progress cue
- You want to guide readers on to related posts or subscribe

## When not to use

- The content is a short note or card summary
- Multiple items must be compared — a list page fits better
- The post is mainly an interactive tool, not prose

## Variants

- **Standard** (标准文章) — Single-column body with header metadata, the general default
- **Long-form with TOC** (长文带目录) — A persistent sidebar TOC that highlights the current section
- **Tutorial** (教程步骤) — Numbered steps with code blocks and callouts

## Page structure

1. **Header** — Site nav and search, kept reachable so readers can leave or look things up.
2. **Article head** — Title, author, date, reading time and topic tags decide whether reading continues.
3. **Table of contents** — Essential for long posts; lists sections with anchor jumps and collapses on narrow screens.
4. **Body** — Keeps a 45–75 character measure and comfortable leading; code, quotes and images get their own styles.
5. **Author card** — Avatar, bio and social links give the piece a source and trust.
6. **Related posts** — Three to five recommendations at the end extend the session instead of ending it.

## Implementation

**CSS:** `max-width: 65ch` `line-height: 1.7` `position: sticky` `scroll-margin-top: 5rem` `text-wrap: pretty`

Cap the body at a 45–75ch measure with generous line-height; keep the TOC sticky in a side column and reserve the sticky header height with scroll-margin-top on anchors. Pace headings, code and quotes with spacing variables; a reading-progress bar can use scroll-driven animation and must respect prefers-reduced-motion.

## Agent task prompt

```text
Implement the blog post page in the current project.

Inspect existing typography styles, Markdown rendering and TOC components first; reuse them.
Requirements:
- Article head metadata + body + TOC + author card + related posts
- Body at a 45–75ch measure with clear heading levels
- TOC anchors jump and highlight the current section
- Code blocks scroll horizontally; images carry alt text
- Respect prefers-reduced-motion; no new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a blog post page with title metadata, body, a table of contents and related posts.

**Design:** Design a blog post: a slim top bar with back and share; a centered article head with title, author avatar, date and reading time; a single 65ch body column with clear heading levels and tinted code blocks; a sticky right TOC highlighting the current section; an author card plus three related cards at the end. Theme-consistent.

**Implementation:** React + Tailwind article page: 65ch max-width and 1.7 line-height; build TOC anchors from headings and highlight via IntersectionObserver; allow horizontal scroll in code blocks; a share button copies the link; a scroll-driven progress bar; respect prefers-reduced-motion; no new dependencies.

## Related

- [avatar](/pages/avatar) — Contains
- [breadcrumb](/pages/breadcrumb) — Contains
- [progressive-disclosure](/pages/progressive-disclosure) — Uses pattern
- [scroll-reveal](/pages/scroll-reveal) — Used with
- [blog-index](/pages/blog-index) — Similar

## Sources

- [Nielsen Norman Group — How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/)
- [Nielsen Norman Group — Typography Terms](https://www.nngroup.com/articles/typography-terms-ux/)

---

JSON: `/api/concept/pages/blog-post.json` · Site: /en/pages/blog-post
