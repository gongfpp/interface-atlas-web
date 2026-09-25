# 滑块 / Slider

> 组件 · `id: slider`

用轨道上可拖动的手柄在连续区间内取值，拖动时数值与已填充轨道实时跟随。 适合调音量、亮度、价格区间等量级选择，比输入框更直观； 可带刻度标记、步进与双端区间形态。

**别名:** 滑块 · 滑动条 · 拖动条 · 调节杆 · 滑杆 · range 滑块

**分类:** Form / Input

## 适用场景

- 在连续区间内选量级（音量、透明度、预算）
- 精确数值不重要，相对大小即可
- 双端选择价格区间等范围场景

## 不适用场景

- 需要精确输入，用带验证的数字输入框
- 离散选项少于 5 个，用 radio 或分段控件
- 触控目标过小且无键盘替代，导致拖动困难

## 常见形式

- **单值** (Single) — 一个手柄取一个值
- **带刻度** (With marks) — 轨道下方标注刻度点
- **双端区间** (Range) — 两个手柄夹出区间

## Platform API

- `<input type="range">`
- `role="slider"`

## 实现要点

**CSS:** `appearance` `::-webkit-slider-thumb` `linear-gradient` `transition`

自定义外观时隐藏原生 appearance，轨道用 linear-gradient 两段色实现已填充比例 （左 accent 右灰），thumb 用伪元素覆盖并放大触控区。双端区间叠放两个 input[type=range]，pointer-events 只留给 thumb。键盘左右箭头步进， aria-valuenow 同步数值。所有过渡时长乘 --demo-speed。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现滑块组件。

先检查现有表单组件与 accent 色变量，保持一致。
要求：
- 受控 value，拖动实时更新数值与填充轨道
- 支持单值与双端区间两种形态
- 键盘箭头可步进，aria-valuenow 同步
- 深浅色主题一致
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个滑块组件，拖动手柄在区间内取值并实时显示数值。

**Design:** 创建滑块组件。要求：已填充轨道用 accent 色跟随手柄，右侧或上方显示当前数值； 提供单值、带刻度、双端区间三种形态；手柄有 hover 放大与拖动反馈； 深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Slider：受控 value；单值基于 input[type=range]，轨道 background: linear-gradient(to right, accent pct%, grey pct%) 动态计算； 双端叠两个 range 输入并做 min/max 联动防交叉；::-webkit-slider-thumb 自定义 外观；aria-valuenow 与数值文本同步；键盘步进保留原生行为。

## 相关概念

- [progress-bar](/components/progress-bar) — 相似概念
- [input](/components/input) — 相似概念
- [number-counter](/components/number-counter) — 搭配使用
- [form-validation](/components/form-validation) — 搭配使用

## 可搭配的风格

`minimalism` `swiss-style`

## Sources

- [W3C APG — Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/)
- [Material Design — Slider](https://m3.material.io/components/sliders/overview)

---

JSON: `/api/concept/components/slider.json` · 站点: /components/slider
