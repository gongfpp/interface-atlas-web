# Landing Page / 落地页

> Pages · `id: landing-page`

A marketing page organized vertically around one conversion goal: nav and hero explain "what is this and why it's good", mid-sections use features and social proof (logos, testimonials, numbers) to dissolve objections, and a strong call-to-action closes. Sections follow the persuasion order — each screen answers the visitor's next question.

**Aliases:** 落地页 · 卖东西的落地页 · 产品主页 · 官网首页 · 营销首页 · 产品介绍页 · 转化页

**Category:** Page / Marketing

## When to use

- Promoting one product or campaign, chasing signups or sales
- Visitors from ads or links must grasp value fast
- First conversion must happen without logging in

## When not to use

- Everyday surfaces for logged-in users
- Complex long-lived content sites — use documentation instead
- Database-like pages that need frequent lookup

## Variants

- **Classic Hero** (经典 Hero) — Big headline + visual + one CTA, the general default
- **Feature Grid** (功能矩阵) — Card matrix of features right after the hero
- **Long-scroll Story** (长滚动叙事) — One point per screen, scroll-driven persuasion
- **Waitlist** (候补列表) — Hero + email capture only, for pre-launch

## Page structure

1. **Navbar** — Logo, anchor nav and primary CTA, often transparent over the hero.
2. **Hero** — A value proposition plus primary CTA; the first screen must say what and for whom.
3. **Features** — Three to six benefits with visuals, backing the value proposition.
4. **Social proof** — Customer logos, testimonials or key numbers.
5. **Closing CTA** — A final conversion push that repeats the primary CTA.
6. **Footer** — Sitemap, legal and social links closing the page.

## Implementation

**CSS:** `flex` `grid` `scroll-behavior: smooth` `scroll-snap-type: y mandatory`

Sections stacked vertically: hero fills or nearly fills the viewport, features adapt as a card grid, social proof is a logo row plus testimonial cards. One accent CTA color, repeated before the footer. The long-scroll variant can use scroll-snap; entry animations respect prefers-reduced-motion.

## Agent task prompt

```text
Implement the product landing page in the current project.

Inspect design tokens, brand colors and existing marketing components first; stay consistent.
Requirements:
- Semantic sections with anchor navigation
- Hero with email capture (validation + success state)
- Feature cards, social proof, repeated CTA
- Responsive, consistent light/dark; animations respect prefers-reduced-motion
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a product landing page with a hero, feature sections, testimonials and a call-to-action.

**Design:** Build a SaaS landing page: sticky nav (logo + anchor links + login/signup); hero with headline, subcopy, email input and primary button; a logo row; three-column feature cards; two to three testimonials with avatars; a strong CTA banner before the footer. Responsive and theme-consistent.

**Implementation:** React + Tailwind landing page: semantic sections with anchor nav; email form with basic validation and success state; cards fade in via IntersectionObserver (respecting prefers-reduced-motion); lazy-load images; CTA ready for analytics. No new dependencies.

## Related

- [navbar](/pages/navbar) — Contains
- [card](/pages/card) — Contains
- [scroll-reveal](/pages/scroll-reveal) — Used with
- [text-reveal](/pages/text-reveal) — Used with
- [hover-lift](/pages/hover-lift) — Used with

## Sources

- [Nielsen Norman Group — Landing Pages](https://www.nngroup.com/articles/landing-pages/)
- [MDN — Scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations)

---

JSON: `/api/concept/pages/landing-page.json` · Site: /en/pages/landing-page
