# Color Picker / 色彩选择器

> Components · `id: color-picker`

A control for choosing a colour, taking the form of a swatch grid, a gradient canvas with hue sliders, or the OS picker. It outputs hex, RGB or OKLCH values and often pairs with a text field and an opacity slider. Most at home in design tools and theme settings.

**Aliases:** 取色器 · 选色器 · 颜色选择 · 挑颜色的控件 · color picker

**Category:** Form / Input

## Name disambiguation

Picking colour sometimes means an eyedropper sampling the screen; this entry covers the form control that outputs a colour value, with the eyedropper as just one source.

## When to use

- People must specify a brand, theme or annotation colour
- A preset palette already covers the need
- Hue, saturation and opacity need precise tuning

## When not to use

- Only a few fixed colours are allowed — segmented control or radios
- Colour is output to display, not input — use a badge or swatch
- Adjusting brightness or a numeric level — a slider is more direct

## Variants

- **Swatch grid** (色板网格) — Preset swatches laid out flat — the fastest decision
- **HSV area** (HSV 取色区) — Gradient canvas plus hue and alpha sliders for freeform picking
- **Native** (原生控件) — input[type=color] defers to the OS picker with zero maintenance

## Platform API

- `input[type="color"]`
- `color-mix()`
- `oklch()`

## In code

| Framework | Name |
| --- | --- |
| HTML | [input[type="color"]](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) |
| react-colorful | [HexColorPicker](https://github.com/omgovich/react-colorful) |
| Radix Primitives | [Slider](https://www.radix-ui.com/primitives/docs/components/slider) |

## Implementation

**CSS:** `linear-gradient` `accent-color` `color-mix()`

Build the canvas from two linear-gradient layers (white-to-transparent over transparent-to-black) on a solid hue field to fake HSV; style native range inputs with gradient tracks. Offer both hex and OKLCH text fields that stay on the same colour when switching. Warn when the preview swatch and its label lack contrast.

## Agent task prompt

```text
Implement a Color Picker component in the current project.
Inspect existing form controls and design tokens first and reuse slider, input and swatch styles.
Usage: choosing brand, theme and annotation colours.
Requirements:
- Offer both swatch and canvas ways to pick
- Typed colour values stay in sync with the preview
- Emit valid colour values (hex / OKLCH)
- Respect prefers-reduced-motion and support keyboard operation
- No new dependencies
Run the existing project checks when done and list the modified files.
```

### Other prompt layers

**Basic:** Create a color picker that chooses a colour from swatches or a canvas and outputs a hex value.

**Design:** Design a color picker. Requirements: separate the canvas from the sliders clearly; show a large current-colour preview with its value; offer common presets as swatches; accept typed values with live preview; consistent light and dark themes.

**Implementation:** React + Tailwind color picker: hold state as HSLA internally and emit hex plus OKLCH; overlay linear-gradients on the canvas and map pointer events to saturation and lightness; drive hue and alpha with range inputs whose accent-color follows the current colour; keep the text field controlled and parse leniently.

## Related

- [input](/components/input) — Similar
- [slider](/components/slider) — Used with
- [switch](/components/switch) — Used with

## Confusable

- [slider](/components/slider) — Slider tunes one numeric axis; color-picker locates a point in colour space
- [input](/components/input) — Input accepts any text; color-picker guarantees a valid colour value

## Sources

- [MDN — input type color](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)
- [CSS Color Module Level 5 — color-mix()](https://www.w3.org/TR/css-color-5/#color-mix)
- [Material Design — Color](https://m3.material.io/styles/color/overview)

---

JSON: `/api/concept/components/color-picker.json` · Site: /en/components/color-picker
