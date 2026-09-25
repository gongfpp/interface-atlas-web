# Paywall / 付费墙

> Patterns · `id: paywall`

Blocks content or features once a threshold is reached, requiring payment or subscription to continue. It can hard-cut, meter by count, or tease with previews and an upgrade nudge. It joins value demonstration to the pay decision — show what is gained first, then ask for payment.

**Aliases:** 付费墙 · 收费墙 · 会员墙 · 订阅墙 · 看一半要钱 · paywall · upgrade wall · subscription gate

**Category:** Commerce / Content

## When to use

- Content or features carry clear paid value and the free slice demos well
- Subscription products nudging an upgrade at a natural peak
- Meterable usage — articles, calls, seats — suits a counted limit

## When not to use

- Too little free content to judge value before being blocked
- One-time-purchase tools gated behind a subscription — wrong expectation
- Docs, legal terms and other content that must stay open

## Variants

- **Hard wall** (硬性截断) — Cut off at the line — nothing beyond without paying
- **Metered limit** (计量限制) — A free quota of articles/uses, with a usage hint before the cut
- **Upgrade teaser** (升级提示) — Blurred preview plus an upgrade button — a soft nudge

## Implementation

**CSS:** `mask-image` `backdrop-filter` `gradient` `position`

Render the first paragraphs normally, then fade the cut with a gradient mask or mask-image and overlay the CTA. Track the meter in localStorage or on the server and warn near the limit. The server must still block unpaid requests — the front-end mask is only the experience layer. Scale enter transitions by var(--demo-speed, 1) and respect prefers-reduced-motion.

## Agent task prompt

```text
Implement a paywall in the current project.

Inspect the existing component system and design tokens first; reuse existing components.
Keep the project's visual style. Add no unnecessary dependencies.
Requirements:
- Free preview enough to taste the value; the gate states what is gained
- A single primary upgrade CTA with discoverable price and terms
- The server still blocks unpaid requests; the front-end mask is experience only
- Respect prefers-reduced-motion
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a paywall demo: reading stops mid-article and prompts a subscription to continue.

**Design:** Create a paywall demo. Requirements: the first two paragraphs readable, a gradient blur from the third; an upgrade headline, price and subscribe button on the gate; a monthly free-quota meter at the top; light and dark themes.

**Implementation:** Build the paywall in React with a CSS mask/gradient: slice the body to previewCount paragraphs; overlay an absolutely positioned gradient gate with the CTA; simulate the meter with useState. Do not break keyboard reading order and offer a "Learn more" link. Scale animation durations by var(--demo-speed, 1) and respect prefers-reduced-motion.

## Related

- [progressive-disclosure](/patterns/progressive-disclosure) — Used with
- [pricing](/patterns/pricing) — Used with
- [signup](/patterns/signup) — Used with
- [empty-state](/patterns/empty-state) — Similar

## Sources

- [Apple HIG — In-App Purchase](https://developer.apple.com/design/human-interface-guidelines/in-app-purchase)
- [Nielsen Norman Group — Paywalls](https://www.nngroup.com/articles/paywalls/)
- [Material Design — Buttons](https://m3.material.io/components/buttons/overview)

---

JSON: `/api/concept/patterns/paywall.json` · Site: /en/patterns/paywall
