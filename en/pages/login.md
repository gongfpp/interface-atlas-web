# Login Page / 登录页

> Pages · `id: login`

The gateway page that gets existing users in with minimal friction: an identity form (email/password) and one primary button, supported by third-party login, password recovery and a signup link. Deliberately minimal — every removed field raises conversion, and all decoration yields to the single goal of getting in fast.

**Aliases:** 登录页面 · 登陆页 · 登录界面 · 登录表单 · 登录框 · 输密码进系统的页面 · 账号登录页

**Category:** Page / Auth

## When to use

- Entry point of any product with an account system
- Returning users need to resume a session quickly
- SSO or third-party identity providers are involved

## When not to use

- First-time account creation — a signup page fits better
- Throwaway tools that need no identity
- Lightweight inline auth — a modal is lighter

## Variants

- **Centered Card** (居中卡片) — One centered card, the universal default
- **Split Screen** (分屏品牌) — Brand panel left, form right — common in SaaS
- **Multi-step** (多步登录) — Email first, password next — enables passwordless
- **Social-first** (社交优先) — OAuth buttons first, form secondary

## Page structure

1. **Brand panel** — Logo or brand art; takes one side in split layouts, hidden on mobile.
2. **Login form** — Email or username plus password, minimal fields, a single primary button.
3. **OAuth** — OAuth buttons below a divider, visually ranked below the primary action.
4. **Recovery links** — Forgot password and remember-me as de-emphasized secondary actions.
5. **Signup link** — A “No account? Sign up” link at the bottom to close the loop.

## Implementation

**CSS:** `flex` `grid` `min-height: 100vh` `place-items: center`

Centered card via min-h-screen grid place-items-center; split variant uses grid-cols-2 at md, hiding the brand panel on mobile. Fields set autocomplete (username / current-password); password gets a visibility toggle; errors are inline and linked with aria-describedby; disable the submit button while pending.

## Compare dimensions (`auth-pages`)

- **User state:** Returning users with an account
- **Core goal:** Fast re-entry into the product
- **Safety requirement:** Medium — session and brute-force protection

## Agent task prompt

```text
Implement the login page in the current project.

Inspect the auth API, route guards and form components first; stay consistent.
Requirements:
- Email + password form with autocomplete and inline errors
- Third-party login buttons and a signup link
- Prevent duplicate submission while pending
- Consistent light/dark; keyboard accessible
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a login page with an email/password form, third-party login and a signup link.

**Design:** Create a centered-card login page: brand logo, email and password fields (visibility toggle), remember-me switch, forgot-password link, primary "Sign in" button, two OAuth buttons below a divider, and "No account? Sign up" at the bottom. Inline errors; button shows loading while pending.

**Implementation:** React + Tailwind login page: controlled form with front-end validation (email format, non-empty password), full autocomplete attributes, password visibility toggle, disabled button while pending, errors linked via aria-describedby, consistent light/dark. No new dependencies.

## Related

- [input](/pages/input) — Contains
- [button](/pages/button) — Contains
- [form-validation](/pages/form-validation) — Uses pattern
- [signup](/pages/signup) — Alternative

## Sources

- [Nielsen Norman Group — Login & Registration Forms](https://www.nngroup.com/articles/login-registration-forms/)
- [MDN — Web authentication](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API)

---

JSON: `/api/concept/pages/login.json` · Site: /en/pages/login
