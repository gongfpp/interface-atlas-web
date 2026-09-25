# 色彩选择器 / Color Picker

> 组件 · `id: color-picker`

用于选定颜色值的控件，形式包括色板网格、渐变取色区加色相滑杆，或直接调用系统取色器。输出十六进制、RGB 或 OKLCH 等颜色值，常与文本输入、透明度滑杆组合；设计工具与主题配置中最常见。

**别名:** 取色器 · 选色器 · 颜色选择 · 挑颜色的控件 · color picker

**分类:** Form / Input

## 名词辨析

「取色」有时指吸管工具从屏幕拾取颜色；本词条专指供用户选定颜色值的表单控件，吸管只是其中一个来源。

## 适用场景

- 用户需要指定品牌色、主题色或标注色
- 预设色板足够覆盖需求
- 需要精确微调色相、饱和度与透明度

## 不适用场景

- 只在几个固定色中选择，用 segmented-control 或 radio
- 颜色是结果展示而非输入，用 badge 或色块展示
- 亮度或数值调节，用 slider 更直接

## 常见形式

- **色板网格** (Swatch grid) — 预设色块平铺，点击即选，决策最快
- **HSV 取色区** (HSV area) — 渐变面加色相与透明滑杆，可自由取色
- **原生控件** (Native) — input[type=color] 调用系统取色器，零维护

## Platform API

- `input[type="color"]`
- `color-mix()`
- `oklch()`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| HTML | [input[type="color"]](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) |
| react-colorful | [HexColorPicker](https://github.com/omgovich/react-colorful) |
| Radix Primitives | [Slider](https://www.radix-ui.com/primitives/docs/components/slider) |

## 实现要点

**CSS:** `linear-gradient` `accent-color` `color-mix()`

取色区用两层 linear-gradient（白到透明、透明到黑）叠在纯色背景上模拟 HSV 面；滑杆用原生 range 配渐变轨道。颜色值输出建议同时提供十六进制与 OKLCH 文本框，切换时保持同一颜色。预览块与文字对比不足时给出提示。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现色彩选择器（Color Picker）组件。
先检查现有表单控件与 Design Token，优先复用滑杆、输入框与色板样式。
用途：品牌色、主题色与标注色的选定。
要求：
- 提供色板与取色区两种取色方式
- 颜色值可键入且与预览同步
- 输出合法颜色值（hex / OKLCH）
- 尊重 prefers-reduced-motion，支持键盘操作
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个色彩选择器，可从色板或取色区选定颜色，并输出十六进制值。

**Design:** 设计色彩选择器。要求：取色区与滑杆分区清楚；当前色大块预览并显示色值；色板提供常用预设；可直接键入色值并即时预览；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现色彩选择器：内部统一存为 HSLA，向外输出 hex 与 OKLCH；取色区用叠加 linear-gradient 与指针事件换算饱和度/明度；色相与透明度用 range input，accent-color 跟随当前色；文本框受控并容错解析。

## 相关概念

- [input](/components/input) — 相似概念
- [slider](/components/slider) — 搭配使用
- [switch](/components/switch) — 搭配使用

## 容易混淆

- [slider](/components/slider) — slider 调节单一数值维度，color-picker 在颜色空间中定位一点
- [input](/components/input) — input 接受任意文本，color-picker 保证输出合法颜色值

## Sources

- [MDN — input type color](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)
- [CSS Color Module Level 5 — color-mix()](https://www.w3.org/TR/css-color-5/#color-mix)
- [Material Design — Color](https://m3.material.io/styles/color/overview)

---

JSON: `/api/concept/components/color-picker.json` · 站点: /components/color-picker
