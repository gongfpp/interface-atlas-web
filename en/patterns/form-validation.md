# Form Validation / 表单校验

> Patterns · `id: form-validation`

Checks input validity during typing or at submit and surfaces errors right next to the offending field. The goal is to tell users, with minimal interruption and maximum locality, what went wrong and how to fix it — instead of bouncing them back with a page of errors after submit.

**Aliases:** 表单校验 · 输入报错 · 实时校验 · 表单验证 · 输入错误提示 · 红框报错

**Category:** Forms / Feedback

## When to use

- Signup, login and checkout flows where correctness gates progress
- Fields with clear format rules (email, phone, password)
- Long forms where problems must surface before submit

## When not to use

- Aggressively flagging mid-typing, before input is plausibly complete
- Preference-style fields with no right or wrong answer
- Vague messages like "invalid input" that users cannot act on

## Variants

- **On blur** (失焦校验) — Validate on leaving the field, least intrusive
- **Live** (实时校验) — Validate as you type, fastest but watch the timing
- **On submit** (提交校验) — Check all at submit and jump to the first error

## Implementation

**CSS:** `:focus` `aria-invalid` `transition-colors` `[role=alert]`

Mark invalid fields with aria-invalid and a red outline; attach error text via role="alert" or aria-live="polite". Suggested timing: validate live after first blur, re-check everything on submit and focus the first invalid field. Messages must state the cause and the fix, never just "invalid". A green check confirms valid input in real time.

## Compare dimensions (`form-feedback`)

- **Interruption:** Low — inline errors, typing flow preserved
- **Persistence:** High — error persists beside the field until fixed
- **Error pinpointing:** Pinpoints the exact field and reason

## Agent task prompt

```text
Implement form validation in the current project.

Inspect existing form components and error styles first; stay consistent.
Usage: the email field of a signup form.
Requirements:
- Validate live after first blur; re-check on submit and focus the first invalid field
- Inline error below the field stating cause and fix
- Accessible markup with aria-invalid and role="alert"
- No form library or new dependencies
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a form validation demo that validates email format live and shows inline error or success states.

**Design:** Create a form validation demo. Requirements: an email field validated live after first blur; red outline plus a message below explaining cause and fix on error, a green check on success; submit disabled until valid or a success confirmation on submit; error text meets contrast.

**Implementation:** Implement validation with a controlled React component: regex check for email, states idle/invalid/valid; enable live validation after first blur and re-check on submit, focusing the invalid field. Error text uses role="alert", the field gets aria-invalid. No form library.

## Related

- [input](/patterns/input) — Used with
- [toast](/patterns/toast) — Alternative
- [alert](/patterns/alert) — Alternative
- [inline-editing](/patterns/inline-editing) — Similar
- [empty-state](/patterns/empty-state) — Similar

## Applicable styles

`minimalism`

## Sources

- [Material Design — Text fields: Error](https://m3.material.io/components/text-fields/guidelines)
- [W3C WAI — Forms Tutorial: Error messages](https://www.w3.org/WAI/tutorials/forms/error-messages/)

---

JSON: `/api/concept/patterns/form-validation.json` · Site: /en/patterns/form-validation
