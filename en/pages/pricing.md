# Pricing Page / 定价页

> Pages · `id: pricing`

A commercial page that makes the offer legible: it opens with a headline and billing-period toggle, the body is a row of tier cards (price, feature list, action button) with the recommended tier visually emphasized, and a comparison table plus FAQ resolve remaining doubts. The order is fixed — pick a period, pick a tier, remove hesitation.

**Aliases:** 价格方案页面 · 定价页 · 套餐价格页 · 收费方案 · 花多少钱的页面 · 订阅方案页 · 价格表

**Category:** Page / Marketing

## When to use

- Subscription products or tiered offers
- Visitors must compare plans before buying
- Guiding upgrades from free to paid tiers

## When not to use

- One fixed price — fold it into the landing page
- Fully custom quoting — a contact-sales page fits better
- Logged-in billing management — that belongs to settings

## Variants

- **Simple Tiers** (简单分层) — Three or four tier cards side by side, the classic
- **Billing Toggle** (月年切换) — Monthly/annual toggle with a discount hint
- **Feature Comparison** (功能对比) — Tier cards plus a full feature matrix
- **Freemium** (免费增值) — Free tier forever, paid tiers carry the pitch

## Page structure

1. **Header** — The page proposition and positioning before any numbers.
2. **Billing toggle** — Monthly/annual toggle with the annual discount surfaced.
3. **Tier cards** — Two to four tiers, one visually recommended, each listing key differences.
4. **Feature comparison** — Item-by-item feature comparison, with secondary rows collapsible.
5. **FAQ** — Addresses billing, refund and upgrade concerns.

## Implementation

**CSS:** `flex` `grid` `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))` `transform: scale(1.05)`

Lay tier cards in an equal-height grid; emphasize the recommended tier with an accent border, slight scale or a badge. The billing toggle is controlled state that switches prices with a number transition. The comparison table scrolls horizontally on desktop and collapses into an accordion on mobile; FAQ uses native details or an accordion.

## Agent task prompt

```text
Implement the pricing page in the current project.

Inspect brand colors, existing card/accordion components and routes first; stay consistent.
Requirements:
- Monthly/annual toggle drives prices and discount badge
- Visual emphasis on the recommended tier (border + badge)
- Feature comparison table (horizontal scroll on mobile)
- FAQ accordion
- Consistent light/dark; responsive
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a pricing page with three tier cards, a monthly/annual toggle and a feature comparison table.

**Design:** Build a SaaS pricing page: headline + monthly/annual segmented toggle ("Save 20%" on annual); three equal-height tier cards (Free / Pro / Enterprise), Pro highlighted with an accent border, "Most popular" badge and slight scale; each card shows price, checklisted features and a primary button; below, a comparison table and a four-item FAQ accordion. Responsive — cards stack on mobile.

**Implementation:** React + Tailwind pricing page: billing period as controlled state driving price rendering (with a number transition); data-driven tier cards ({name, price, features, highlight}); comparison table with overflow scroll; controlled FAQ accordion; inline SVG checkmarks. Consistent light/dark; no new dependencies.

## Related

- [card](/pages/card) — Contains
- [badge](/pages/badge) — Contains
- [switch](/pages/switch) — Contains
- [accordion](/pages/accordion) — Contains
- [table](/pages/table) — Contains

## Sources

- [Nielsen Norman Group — Pricing Page Design](https://www.nngroup.com/articles/pricing-pages/)
- [Baymard Institute — Pricing & Plans](https://baymard.com/blog)

---

JSON: `/api/concept/pages/pricing.json` · Site: /en/pages/pricing
