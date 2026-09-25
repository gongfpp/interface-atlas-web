# 点击涟漪 / Ripple

> 动效 · `id: ripple`

点击位置向外扩散一圈半透明圆形波纹后消散，把"点中了哪里"可视化。 Material Design 的标志性按压反馈， 让无生命的点击立刻获得物理感——像石头落进水面。

**别名:** 水波纹 · 点击涟漪 · 波纹扩散 · material 点击效果 · 涟漪动画

**分类:** Motion / Feedback

## 适用场景

- 按钮、列表项、卡片等大面积可点击元素
- 触屏为主的界面（按压即触发，不依赖 hover）
- 密集列表中需要明确"点在了哪里"

## 不适用场景

- 极小图标按钮（波纹大于按钮，显得溢出）
- 高频连续点击的工具栏（波纹糊成一片）
- 已有强按压反馈（scale/阴影）的组件，叠加冗余

## 常见形式

- **居中波纹** (Centered) — 从元素中心扩散，纯 CSS 可实现，最简
- **触点波纹** (Pointer) — 从真实点击坐标扩散，Material 标准
- **有界/无界** (Bounded vs unbounded) — 波纹是否被圆角裁剪（按钮有界、页面无界）

## 实现要点

**CSS:** `position: relative + overflow hidden` `transform: scale(0 → 1)` `opacity fade` `pointer-events: none`

点击时在按点插入一个圆形 span，从 scale(0) 放大到覆盖元素并渐隐，300～500ms 后移除； 父元素 position:relative + overflow:hidden。 触点版需要监听 offsetX/Y，纯 CSS 只能做居中版。 尊重 prefers-reduced-motion 退化为简单背景加深。

## 交给 Agent 的任务 Prompt

```text
为项目按钮与列表项添加点击涟漪反馈。

先检查现有按钮组件与按压反馈，避免双重反馈冲突。
要求：
- 从真实触点扩散，波纹被圆角裁剪
- 400ms 内完成，动画节点及时清理防内存泄漏
- 不影响布局（transform + opacity）
- 尊重 prefers-reduced-motion
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给按钮添加点击涟漪效果：按下时从点击位置扩散水波纹。

**Design:** 按钮按下时从触点扩散半透明圆形波纹，400ms 内放大并渐隐，波纹被圆角裁剪；不改变按钮尺寸与布局。

**Implementation:** 监听 pointerdown 取 offsetX/Y，向按钮插入 span（定位到触点，直径取对角线），触发 scale 0→1 + opacity 渐隐动画，animationend 移除。按钮加 overflow:hidden 与 position:relative。reduced-motion 降级为背景加深。

## 相关概念

- [press-feedback](/motion/press-feedback) — 相似概念
- [button](/motion/button) — 应用于
- [magnetic-button](/motion/magnetic-button) — 相似概念
- [hover-lift](/motion/hover-lift) — 相似概念

## Sources

- [Material Design — States](https://m3.material.io/foundations/interaction/states/state-layers)

---

JSON: `/api/concept/motion/ripple.json` · 站点: /motion/ripple
