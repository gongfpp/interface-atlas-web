# Signup Page / 注册页

> Pages · `id: signup`

The conversion page turning strangers into accounts: the form keeps only the fields needed to start (email + password) and defers everything else into the product, supported by third-party signup, a password strength hint and terms consent. It shares a layout skeleton with the login page, but every design decision answers "is signing up worth it and painless?"

**Aliases:** 注册页面 · 注册账号 · 创建账号页面 · 新用户注册 · 立即注册页 · 开户页 · 注册表单

**Category:** Page / Auth

## When to use

- Conversion entry where new accounts are created
- The product promises instant start after signup
- A guided multi-step onboarding follows

## When not to use

- Existing users signing in — never route them here by mistake
- Invite-only or SSO-provisioned accounts — no self signup
- Products preferring anonymous trials before asking for an account

## Variants

- **Centered Card** (居中卡片) — Same centered card as login — lowest cognitive cost
- **Split Value Prop** (分屏价值) — Left panel sells the value, right holds the form
- **Social-first** (社交优先) — OAuth buttons first, one-click provisioning
- **Guided Steps** (多步引导) — Steps collect info, onboarding while signing up

## Page structure

1. **Brand & value** — States what signing up unlocks, lowering the barrier.
2. **Signup form** — Only email and password; everything else deferred into the product.
3. **OAuth** — One-tap signup, visually ranked against the form button.
4. **Terms** — The terms checkbox gates the submit button.
5. **Login link** — A “Have an account? Log in” link sharing the login layout.

## Implementation

**CSS:** `flex` `grid` `min-height: 100vh` `place-items: center`

Share the login page layout skeleton, swapping copy and fields. Inline-validate fields (email format, password strength meter) with autocomplete=new-password; disable submit until terms are checked. Keep OAuth and form submit visually ranked; on submit, move into guided profile completion.

## Compare dimensions (`auth-pages`)

- **User state:** New users without an account
- **Core goal:** Lower the barrier and convert
- **Safety requirement:** High — verification and anti-abuse

## Agent task prompt

```text
Implement the signup page in the current project.

Inspect the auth API, signup flow and form components first; stay consistent.
Requirements:
- Minimal fields (email + password) with inline validation and strength hint
- Third-party signup and a login link
- Terms checkbox gates the submit button
- Consistent light/dark; keyboard accessible
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a signup page with an email/password form, third-party signup and a login link.

**Design:** Build a centered-card signup page: brand logo, "Create your account" headline, email and password fields (three-segment strength meter), terms checkbox, primary "Sign up free" button, two OAuth buttons below a divider, "Already have an account? Log in" at the bottom. Inline errors; button disabled until terms are checked.

**Implementation:** React + Tailwind signup page: controlled form with inline validation; strength meter computed from length and character classes into three segments; autocomplete=new-password; terms checkbox drives the disabled state; errors linked via aria-describedby; consistent light/dark. No new dependencies.

## Related

- [input](/pages/input) — Contains
- [button](/pages/button) — Contains
- [form-validation](/pages/form-validation) — Uses pattern
- [login](/pages/login) — Alternative

## Sources

- [Nielsen Norman Group — Login & Registration Forms](https://www.nngroup.com/articles/login-registration-forms/)
- [Baymard Institute — Signup Usability](https://baymard.com/blog)

---

JSON: `/api/concept/pages/signup.json` · Site: /en/pages/signup
