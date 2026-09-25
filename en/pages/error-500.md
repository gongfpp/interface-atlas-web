# Server Error Page / 服务错误页

> Pages · `id: error-500`

A screen for backend failures. It states that the problem is server-side, offers retry or support, and preserves input to keep trust.

**Aliases:** 500 页面 · 服务器错误 · 服务出错页 · 系统错误页 · 服务崩了 · 服务器开小差 · 页面出错了

**Category:** Page / Error

## When to use

- Server errors, database or dependency outages
- Request timeouts or gateway errors
- The failure must be explained without exposing internals

## When not to use

- Missing addresses — use a 404 page instead
- Permission gaps — prompt for access or login
- Transient blips that auto-retry can absorb

## Variants

- **Minimal** (极简错误) — A brief server-error note with a single retry button
- **With Retry** (带重试与倒计时) — Auto-retry with a countdown and attempt count
- **Status and Support** (状态与支持) — A status summary and support entry for critical flows

## Page structure

1. **Code and heading** — A 500 with a neutral heading stating the fault is server-side, not user error.
2. **Error message** — Say what is recovering and whether action is needed, without stacks or internal IDs.
3. **Retry** — A primary retry button, optionally with a countdown and attempt count.
4. **Status detail** — Expandable scope and last-updated info, collapsed by default.
5. **Support** — A status page or support link for when retries do not help.

## Implementation

**CSS:** `flex` `grid` `min-height: 100vh` `text-align: center` `max-width: 48ch`

Reuse the 404 centered skeleton: min-height 100vh plus flex, copy capped at 48ch. Disable the retry button and show a pending state after click, announcing result changes via aria-live. Return a 5xx status code, log a request ID for support, and never render stack traces on the page.

## Agent task prompt

```text
Implement the server error page in the current project.

Inspect existing error boundaries, request layer and design tokens first; reuse them.
Requirements:
- Centered layout: code, message, retry, detail, support
- Preserve what the user has typed
- Announce retry state via aria-live and block double clicks
- Return a real 5xx and log a request ID
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a server error page with a status code, an error message and a retry button.

**Design:** Design a 500 server error page: centered layout with a large 500, neutral copy, a primary retry button, expandable status detail, and status and support links below. Keep light and dark consistent, with clear pending feedback during retry.

**Implementation:** React plus Tailwind server error page: a controlled retry button that blocks double clicks, result changes announced via aria-live, preserved form input, a real 5xx response, respect for prefers-reduced-motion, and no new dependencies.

## Related

- [error-404](/pages/error-404) — Similar
- [button](/pages/button) — Contains
- [alert](/pages/alert) — Contains
- [empty-state](/pages/empty-state) — Uses pattern

## Sources

- [MDN — HTTP 500 Internal Server Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500)
- [Nielsen Norman Group — Error-Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines/)

---

JSON: `/api/concept/pages/error-500.json` · Site: /en/pages/error-500
