# 404 Page / 404 页面

> Pages · `id: error-404`

A fallback screen for missing addresses. It explains the situation plainly and offers home, search or recommended links for a next step.

**Aliases:** 404 页面 · 找不到页面 · 页面不存在 · 页面打不开 · 链接点进去空的 · 迷路页 · 死链页

**Category:** Page / Error

## When to use

- A requested path is missing or retired
- A user types or follows a broken link
- Deleted content must still catch old traffic

## When not to use

- Backend failures — use a server error page instead
- Authentication or permission gaps — route to login instead
- Old links that can redirect precisely — just forward them

## Variants

- **Minimal** (极简提示) — Just the code, one line of copy and a way back
- **With Search** (带搜索) — A search box and popular links so users can find their own target
- **Illustrated** (插图引导) — An illustration and recommendations soften the dead end

## Page structure

1. **Code and heading** — A 404 with a plain-language heading so users know nothing crashed.
2. **Message** — One sentence explaining the missing address, free of jargon or blame.
3. **Illustration** — A light illustration or icon that softens the failure without dominating.
4. **Actions** — A primary home button and secondary back or support links.
5. **Recommendations** — A search box or popular links that point to a next step, not a dead end.

## Implementation

**CSS:** `flex` `grid` `min-height: 100vh` `text-align: center` `max-width: 48ch`

Center the page with min-height 100vh plus flex, and cap the copy at 48ch for readability. Use a large font-serif status code as the visual anchor, with search and links inside the same max-width container. Return a real 404 status code rather than a 200 wrapper so search engines do not index empty pages.

## Agent task prompt

```text
Implement the 404 page in the current project.

Inspect existing routes, error boundaries and design tokens first; reuse them.
Requirements:
- Centered layout: code, message, illustration, primary and secondary actions
- Search box filters recommended links
- Server returns a real 404 status code
- Consistent light/dark; animations respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a 404 page with a status code, a short message and a home button.

**Design:** Design a 404 page: centered layout with a large 404 code, one line of copy, an illustration or icon, a primary home button and a secondary back link. Add a search box and three popular links, keep light and dark consistent, and design mobile first.

**Implementation:** React plus Tailwind 404 page: a controlled search box that filters recommendations as you type, a primary button that routes home, a real 404 response from the server, respect for prefers-reduced-motion, and no new dependencies.

## Related

- [error-500](/pages/error-500) — Similar
- [button](/pages/button) — Contains
- [navbar](/pages/navbar) — Contains
- [empty-state](/pages/empty-state) — Uses pattern

## Sources

- [MDN — HTTP 404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)
- [Nielsen Norman Group — Error-Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines/)

---

JSON: `/api/concept/pages/error-404.json` · Site: /en/pages/error-404
