# 按压反馈 / Press Feedback

> 动效 · `id: press-feedback`

用户按下按钮、卡片等可点击元素时，元素轻微缩小（通常 0.95～0.98）， 松开后弹回。一个几十毫秒的细节，让界面"手感"立刻从网页变成实体按键。

**别名:** 点击反馈 · 按钮缩一下 · 按下缩放 · 按压缩小 · tap feedback · active scale

**分类:** Feedback / Interaction

## 适用场景

- 所有可点击元素：按钮、卡片、图标按钮
- 移动端与触屏界面（按压是最主要操作）
- 需要"实体感"的产品调性

## 不适用场景

- 大面积区域点击（整卡缩放会带动文字晃动）
- 列表行内小操作，避免整行抖动
- 已有其他强反馈（如下压阴影 + 填充动画）叠加过度

## 常见形式

- **缩放** (Scale) — 最常用，scale(0.96)
- **缩放 + 阴影收紧** (Scale + shadow) — 同时收小阴影，模拟"按下去"
- **变暗** (Darken) — 不缩放，降低亮度，适合桌面

## 实现要点

**CSS:** `transform: scale` `transition` `:active`

用 :active 伪类配合 transition: transform 80ms；缩放原点默认中心。 松开的回弹可稍微放缓 transition（150ms）模拟弹簧。纯 CSS 即可实现，无需 JS。 移动端注意 :active 需要 touchstart 监听或 -webkit-tap-highlight 处理才能稳定触发。

## 横向对比维度 (`click-feedback`)

- **强度:** 中，克制
- **移动端友好:** 好，按压即触发
- **适合元素:** 按钮 / 小卡片

## 交给 Agent 的任务 Prompt

```text
在当前项目中为所有可点击元素统一添加按压反馈。

先检查是否已有全局按钮样式或交互规范，保持一致。
要求：
- 按下 scale(0.96) + 阴影收紧，80ms 缩下 150ms 回弹
- 覆盖 Button 组件与可点击卡片
- 触屏设备可靠触发
- 尊重 prefers-reduced-motion
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给按钮添加按压反馈：按下时轻微缩小，松开弹回。

**Design:** 按钮按下时缩放到 0.96 并轻微收紧阴影，80ms 缩下、150ms 回弹，手感接近实体按键；触屏设备同样生效。

**Implementation:** 用 CSS 实现：active:scale-[0.96] + transition-transform duration-75（下压）与恢复 150ms；阴影用 active:shadow-sm。确保触屏上 :active 生效（添加 touchstart 监听或 ontouchstart 属性 hack）。尊重 prefers-reduced-motion。

## 相关概念

- [hover-lift](/motion/hover-lift) — 相似概念
- [magnetic-button](/motion/magnetic-button) — 相似概念
- [ripple](/motion/ripple) — 相似概念
- [button](/motion/button) — 替代方案

## 可搭配的风格

`minimalism` `neobrutalism` `claymorphism`

## Sources

- [Material Design — States](https://m3.material.io/foundations/interaction/states/state-layers)

---

JSON: `/api/concept/motion/press-feedback.json` · 站点: /motion/press-feedback
