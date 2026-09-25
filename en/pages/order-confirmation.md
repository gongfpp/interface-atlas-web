# Order Confirmation / 订单确认页

> Pages · `id: order-confirmation`

The closing screen after a successful purchase: a clear success state, order number and delivery estimate give certainty first, then item details, totals and next actions such as invoice, tracking or continue shopping. It collects nothing new — it exists to make paid-and-on-its-way unmistakable.

**Aliases:** 订单确认页 · 下单成功页 · 付款成功页 · 订单提交成功 · 支付成功页面 · 谢谢购买页 · 订单完成页 · 购买成功页

**Category:** Page / Commerce

## When to use

- Shown immediately after a successful payment or order
- The order number and delivery estimate must be stated
- Users should be guided to tracking, invoice or more shopping

## When not to use

- Payment failed or pending review — use a status or error page
- Only a saved draft, not a real placed order
- More user input is still required

## Variants

- **Receipt** (收据式) — Full line items and totals, like a digital receipt
- **Celebratory** (庆祝式) — Success motion with a short summary, for consumer brands
- **Tracking-first** (物流优先) — Delivery timeline and tracking entry come first

## Page structure

1. **Success banner** — Icon plus one confirmation line so success reads instantly.
2. **Order summary** — Order number, timestamp and ETA, copyable in one click.
3. **Item list** — Each item with thumbnail, variant, quantity and unit price.
4. **Delivery timeline** — Progress through placed, paid, shipped and delivered.
5. **Next actions** — View order, download invoice, continue shopping — ranked clearly.

## Implementation

**CSS:** `flex` `grid` `counter-reset: step` `position: relative` `@media print`

Announce the result with role="status" on the banner; give the order number a copy button with copied feedback. List or table line items with right-aligned tabular numerals for totals. Build the delivery timeline from an ordered list with pseudo-element connectors; celebratory motion must respect prefers-reduced-motion and scale with --demo-speed.

## Agent task prompt

```text
Implement the order confirmation page in the current project.

Inspect the order data model, payment callback and existing card/timeline components; stay consistent.
Requirements:
- Announce success with role="status"
- Copyable order number with copied feedback
- Full item details and totals with tabular right-aligned numbers
- Delivery timeline as an ordered list
- Celebratory motion respects prefers-reduced-motion
- Consistent light/dark and print styles; no new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create an order confirmation page showing success, the order number, item details and totals.

**Design:** Build a commerce order confirmation: a success banner on top (icon, payment-complete label, copyable order number); a summary card with time and ETA plus an item list; totals (subtotal, shipping, discount, total) in a right column or below; a delivery timeline and View order, Download invoice and Continue shopping buttons. Single column on mobile, consistent light/dark.

**Implementation:** Implement with React + Tailwind: read data from route params or the order API; copy the order number via the Clipboard API with feedback; pure-function totals with tabular-nums; an ordered-list delivery timeline; celebratory motion that can be disabled and respects reduced-motion; print styles; no new dependencies.

## Related

- [timeline](/pages/timeline) — Contains
- [card](/pages/card) — Contains
- [button](/pages/button) — Contains
- [confetti](/pages/confetti) — Used with
- [checkout](/pages/checkout) — Similar

## Sources

- [Nielsen Norman Group — Progress Indicators](https://www.nngroup.com/articles/progress-indicators/)
- [W3C WAI — Forms Tutorial](https://www.w3.org/WAI/tutorials/forms/)
- [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)

---

JSON: `/api/concept/pages/order-confirmation.json` · Site: /en/pages/order-confirmation
