# Cookie Consent Banner / Cookie 同意条

> Patterns · `id: cookie-consent`

A banner or overlay that asks consent before setting non-essential cookies — a compliance gate, not a system alert. Offer accept, reject or granular choices and remember the decision; tracking cookies must not fire before an answer. Docked at the bottom or centered on first visit, never covering the primary task.

**Aliases:** Cookie 同意条 · Cookie 提示条 · cookie 小横幅 · 隐私同意条 · 追踪同意弹条 · cookie banner · cookie consent · consent banner

**Category:** Feedback / Compliance

## Name disambiguation

Easily confused with Alert. An Alert is a system message for status and errors; a cookie consent banner is a legal gate that must be answered before non-essential cookies are set — a dismiss-only "Got it" does not count as consent.

## When to use

- The site sets non-essential cookies — analytics, ads, personalization
- Audiences under GDPR / ePrivacy-style consent rules
- Consent must be recorded and revocable

## When not to use

- Strictly necessary cookies only — do not interrupt
- Reusing it as a generic announcement bar — wrong semantics and legal weight
- Making reject harder to find than accept — dark patterns backfire

## Variants

- **Minimal notice** (最简告知) — One line plus Accept / Reject — most restrained
- **Granular choices** (颗粒度选择) — Per-category toggles (necessary / analytics / marketing); necessary stays locked
- **Wall-style** (墙式) — No continue without consent — controversial, use sparingly

## Implementation

**CSS:** `position` `transition` `aria-live` `form`

Do not load non-essential scripts before consent; persist the choice (cookie or localStorage) and allow withdrawal from settings. Dock the banner with position: fixed and switch to a full-width card on mobile; keep Reject as discoverable as Accept. Scale enter transitions by var(--demo-speed, 1) and respect prefers-reduced-motion.

## Agent task prompt

```text
Implement a cookie consent banner in the current project.

Inspect the existing component system and design tokens first; reuse existing components.
Keep the project's visual style. Add no unnecessary dependencies.
Requirements:
- No non-essential scripts before consent
- Accept, Reject and granular preferences; Reject as discoverable as Accept
- Persist the choice and allow withdrawal from settings
- Respect prefers-reduced-motion
Run existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a cookie consent banner that asks consent before any tracking cookies are set.

**Design:** Create a cookie consent banner. Requirements: a bottom banner explaining purpose with Accept all / Reject / Manage preferences; a preferences panel with locked Necessary plus Analytics and Marketing toggles; Reject as discoverable as Accept; light and dark themes.

**Implementation:** Build the cookie consent banner in React with controlled toggles: manage visibility and per-category switches in state; on confirm write localStorage and hide the banner; a settings entry reopens it. Express semantics with role="dialog" or a labeled region and move focus into the panel. Scale animation durations by var(--demo-speed, 1) and respect prefers-reduced-motion.

## Related

- [alert](/patterns/alert) — Alternative
- [toast](/patterns/toast) — Similar
- [form-validation](/patterns/form-validation) — Used with

## Sources

- [W3C — Privacy Principles](https://www.w3.org/TR/privacy-principles/)
- [MDN — HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [Nielsen Norman Group — Cookie Consent](https://www.nngroup.com/articles/cookie-consent/)

---

JSON: `/api/concept/patterns/cookie-consent.json` · Site: /en/patterns/cookie-consent
