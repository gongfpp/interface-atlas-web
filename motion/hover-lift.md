# 悬浮上浮 / Hover Lift

> 动效 · `id: hover-lift`

鼠标悬停时卡片或按钮轻轻上浮（translateY -2～6px）并加深投影， 像被无形的手托起。最常见的"这个可以点"的桌面端暗示， 成本极低但立刻让页面有层次和呼吸感。

**别名:** 卡片悬浮 · hover 浮起 · 鼠标放上去浮起来 · 上浮效果 · 悬停抬升 · 卡片浮起来

**分类:** Feedback / Hover

## 适用场景

- 卡片网格、商品卡、文章卡等可点击块
- 桌面端为主的交互（hover 是桌面专属语言）
- 平面层级需要区分可交互与静态元素

## 不适用场景

- 触屏设备（没有 hover，会粘滞），改用按压反馈
- 页面上所有元素都上浮（通胀，暗示失效）
- 大幅位移（> 8px 会显得跳动）

## 常见形式

- **上浮 + 投影** (Lift + shadow) — 经典组合，-4px + 阴影加深
- **上浮 + 微放大** (Lift + scale) — 叠加 scale(1.02)，电商感更强
- **上浮 + 边框着色** (Lift + border) — 投影换成强调色边框，扁平风格适用

## 实现要点

**CSS:** `transform: translateY` `box-shadow` `transition` `:hover`

transition: transform 200ms ease, box-shadow 200ms；hover 时 translateY(-4px) + 更大更淡的 box-shadow（如 0 12px 24px rgba(0,0,0,.12)）。注意上浮方向始终向上， 阴影随之上移。与 press-feedback 组合时：hover 上浮、active 缩回，层次分明。

## 横向对比维度 (`hover-feedback`)

- **强度:** 中
- **适合元素:** 卡片 / 中等尺寸块
- **移动端友好:** 差，无 hover

## 交给 Agent 的任务 Prompt

```text
为当前项目的卡片列表添加 hover 上浮反馈。

先检查现有卡片组件，保持圆角与阴影令牌一致。
要求：
- hover 上移 4px + 阴影加深，200ms 过渡
- 仅在支持 hover 的设备启用（@media hover:hover）
- 尊重 prefers-reduced-motion
- 不影响布局（transform 实现）
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给卡片添加 hover 上浮效果：鼠标悬停时轻微上移并加深阴影。

**Design:** 卡片 hover 时上移 4px，阴影从 subtle 变为 0 12px 24px rgba(0,0,0,.12)，200ms ease 过渡；上浮方向与阴影一致；不动布局。

**Implementation:** "纯 CSS：transition: transform .2s ease", box-shadow .2s ease；hover:-translate-y-1 hover:shadow-lg。触屏设备禁用（@media (hover:hover)）。尊重 prefers-reduced-motion（降级为仅阴影变化）。

## 相关概念

- [press-feedback](/motion/press-feedback) — 相似概念
- [hover-glow](/motion/hover-glow) — 替代方案
- [card](/motion/card) — 应用于
- [magnetic-button](/motion/magnetic-button) — 相似概念

## 可搭配的风格

`minimalism` `bento-grid` `neobrutalism`

## Sources

- [Material Design — Elevation](https://m3.material.io/styles/elevation/overview)

---

JSON: `/api/concept/motion/hover-lift.json` · 站点: /motion/hover-lift
