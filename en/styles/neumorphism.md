# Neumorphism / 新拟态

> Styles · `id: neumorphism`

A soft relief style that uses paired light and dark shadows on similarly colored surfaces. Controls appear pressed into or raised from a shared material. It works best with a small number of elements. Shadows alone cannot communicate interactivity, selection or disabled states; retain labels, visible focus and sufficient contrast.

**Aliases:** 软浮雕风格 · 凹凸按钮 · 柔和双阴影 · soft UI

**Category:** Style / Visual Language

## When to use

- Music controls, lightweight utilities and product demonstrations.
- Sparse interfaces that benefit from a soft material feel.

## When not to use

- Dense tables and complex interfaces requiring strong boundaries.
- Never make shadow direction the only state signal.

## Variants

- **Raised** (凸起表面) — Paired outer shadows suggest raised controls.
- **Inset** (凹陷表面) — Inset shadows suggest pressed controls or tracks.

## Design spec

- **typography:** Clear sans-serif type; avoid overly light weights.
- **color:** Light blue-grey surfaces, dark text and blue accents.
- **border:** Medium to large radii with a visible focus outline.
- **shadow:** Paired outer shadows for elevation; inset shadows for pressing.
- **spacing:** Space controls so shadows do not collide.

## Implementation

**CSS:** `box-shadow` `inset` `border-radius` `:focus-visible`

Derive shadows from the shared surface; use positive and negative offsets for raised controls and inset for pressed states. Reinforce focus and selection with labels or icons. Avoid large animated shadows and support reduced motion.

## Agent task prompt

```text
Inspect existing layouts, typography and theme tokens, then build an interactive Neumorphism brand scene.
Clear sans-serif type; avoid overly light weights. Light blue-grey surfaces, dark text and blue accents. Medium to large radii with a visible focus outline. Paired outer shadows for elevation; inset shadows for pressing. Space controls so shadows do not collide.
Derive shadows from the shared surface; use positive and negative offsets for raised controls and inset for pressed states. Reinforce focus and selection with labels or icons. Avoid large animated shadows and support reduced motion.
Make controls give clear feedback, support narrow screens, focus and reduced motion, and add no dependencies. Run checks and list modified files.
```

### Other prompt layers

**Basic:** Design a brand page in Neumorphism. A soft relief style that uses paired light and dark shadows on similarly colored surfaces. Controls appear pressed into or raised from a shared material. It works best with a small number of elements. Shadows alone cannot communicate interactivity, selection or disabled states; retain labels, visible focus and sufficient contrast.

**Design:** Clear sans-serif type; avoid overly light weights. Light blue-grey surfaces, dark text and blue accents. Medium to large radii with a visible focus outline. Paired outer shadows for elevation; inset shadows for pressing. Space controls so shadows do not collide.

**Implementation:** Derive shadows from the shared surface; use positive and negative offsets for raised controls and inset for pressed states. Reinforce focus and selection with labels or icons. Avoid large animated shadows and support reduced motion.

## Related

- [skeuomorphism](/styles/skeuomorphism) — Similar
- [claymorphism](/styles/claymorphism) — Similar
- [minimalism](/styles/minimalism) — Similar
- [button](/styles/button) — Affects

## Sources

- [MDN — box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

---

JSON: `/api/concept/styles/neumorphism.json` · Site: /en/styles/neumorphism
