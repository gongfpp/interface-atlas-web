# Contact Page / 联系页

> Pages · `id: contact`

A page that collects messages: a short form asks only what is needed and confirms success, with email, phone and address alongside plus a brief FAQ.

**Aliases:** 联系页 · 联系我们 · 联系表单页 · 客服联系页 · 留言页 · 找我们页面 · 商务合作页

**Category:** Page / Support

## When to use

- Visitors need to ask, give feedback or partner
- You need a trackable inbox for incoming messages
- Common questions can be self-served with an FAQ first

## When not to use

- Logged-in users already have in-app messaging
- You need live chat — a support widget fits better
- The form balloons into a qualification questionnaire

## Variants

- **Form-first** (表单为主) — A centered form with contact details as supporting info
- **Split Layout** (左右分栏) — Info and form side by side, packing in more detail
- **Support Hub** (支持中心式) — Channel choices and FAQ first, the form revealed after

## Page structure

1. **Header** — Site nav and search so visitors can leave the task at any time.
2. **Intro** — One line on what you can help with and typical reply time, setting expectations.
3. **Contact form** — Name, email, subject and message — minimum required fields with inline errors.
4. **Contact methods** — Email, phone, address and social links, ordered by priority.
5. **Map** — A map and directions when there is a physical location, otherwise omit.
6. **FAQ** — Three to five collapsible Q&As that deflect self-serve questions.

## Implementation

**CSS:** `flex` `grid` `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))` `min-height: 44px` `gap: 1rem`

Stack fields vertically and bind every control to a label; keep touch targets at least 44px and tie inline errors to fields with aria-describedby. The split variant collapses to one column via grid; after submit, show a focusable success message and preserve the input to avoid losing it.

## Agent task prompt

```text
Implement the contact page in the current project.

Inspect existing form controls and validation first; reuse them.
Requirements:
- Intro + contact form + contact methods + FAQ
- Every field has a label; errors linked with aria-describedby
- Touch targets ≥44px; the form is keyboard-completable
- Clear success feedback that preserves input
- Respect prefers-reduced-motion; no new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a contact page with a contact form, contact details and a small FAQ.

**Design:** Design a contact page: an intro stating reply time; a left-hand form (name, email, subject select, message, submit) with focus states and inline errors; three contact rows with icons on the right; a collapsible FAQ below. On mobile the order is intro, form, methods, FAQ. Theme-consistent.

**Implementation:** React + Tailwind contact page: controlled form with basic validation (required, email format) and errors linked via aria-describedby; touch targets ≥44px; on success switch to a success state keeping the data; FAQ as details or a controlled accordion; respect prefers-reduced-motion; no new dependencies.

## Related

- [input](/pages/input) — Contains
- [textarea](/pages/textarea) — Contains
- [button](/pages/button) — Contains
- [form-validation](/pages/form-validation) — Uses pattern
- [about](/pages/about) — Similar

## Sources

- [W3C WAI — Forms Tutorial](https://www.w3.org/WAI/tutorials/forms/)
- [web.dev — Learn Forms: Validation](https://web.dev/learn/forms/validation)

---

JSON: `/api/concept/pages/contact.json` · Site: /en/pages/contact
