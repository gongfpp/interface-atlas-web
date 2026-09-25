# Checkout Page / 结账页

> Pages · `id: checkout`

The last mile of e-commerce conversion: shipping info, delivery method, payment and the order summary are arranged into one short forward-only flow — a stepper marks progress, forms are prefilled and auto-corrected, and the summary keeps totals always visible. Ask only what is necessary per step, and surface hesitation points (shipping cost, total) before they become objections.

**Aliases:** 结账页 · 下单页 · 付款页面 · 收银台 · 提交订单页 · 支付页面 · 买的东西确认页

**Category:** Page / Commerce

## When to use

- Full purchase flow from cart to payment
- Collecting shipping, delivery and payment info in steps
- Totals and discounts must be visible throughout

## When not to use

- Single digital-item purchase — one screen is better
- Browsing and product discovery surfaces
- Subscription upgrades — a pricing-page modal is lighter

## Variants

- **One-page Checkout** (单页结账) — Everything on one screen, shortest path
- **Multi-step Checkout** (多步结账) — Stepper splits the long form to reduce pressure
- **Accordion Checkout** (手风琴式) — Completed sections collapse — one page with steps
- **Express-first** (快捷支付优先) — Express-pay buttons on top, form secondary

## Page structure

1. **Steps** — Cart to info to payment to done, marking current progress.
2. **Address & payment form** — Address and card grouped, minimized fields with autofill.
3. **Payment methods** — Card, wallet or installments side by side, defaulting to the recommended one.
4. **Order summary** — Items, shipping, tax and total, visible throughout checkout.
5. **Place order** — The single irreversible action, disabled with feedback while pending.

## Implementation

**CSS:** `flex` `grid` `position: sticky` `accent-color: var(--color-accent)`

Multi-step flow uses controlled step state + a stepper (clickable to go back); each step validates locally before advancing. The summary is sticky right on desktop and a collapsed "Total ¥xx" bar on mobile. Inputs get autocomplete (name / postal-code / cc-number), input masks and inline validation. Disable the button while submitting to prevent duplicates; redirect to a confirmation page on success.

## Agent task prompt

```text
Implement the checkout page in the current project.

Inspect the cart data model, payment API and form components first; stay consistent.
Requirements:
- Stepper + step forms (back-navigable) with per-step validation
- Sticky order summary with full totals breakdown
- Duplicate-submit guard; redirect to confirmation on success
- Collapsed summary on mobile
- Consistent light/dark; no new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a checkout page with a shipping form, payment options and an order summary.

**Design:** Build a three-step checkout: stepper on top (Shipping → Payment → Review); left column holds the current step's form (shipping: name/address/phone with inline validation; payment: card number mask and payment method radios); right column a sticky order summary (two line items + shipping + discount + total); "Place order" button with loading state. Collapsed summary on mobile.

**Implementation:** React + Tailwind checkout: controlled step + per-step field validation; card-number input mask (4-digit groups); totals as a pure function; sticky summary; duplicate-submit guard; controlled payment radios; consistent light/dark. No new dependencies.

## Related

- [input](/pages/input) — Contains
- [form-validation](/pages/form-validation) — Uses pattern
- [progress-bar](/pages/progress-bar) — Contains
- [toast](/pages/toast) — Contains
- [button](/pages/button) — Contains

## Sources

- [Baymard Institute — Checkout Usability](https://baymard.com/lists/checkout-flow-usability)
- [Nielsen Norman Group — Checkout](https://www.nngroup.com/articles/checkout-flow/)

---

JSON: `/api/concept/pages/checkout.json` · Site: /en/pages/checkout
