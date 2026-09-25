# 弹簧动画 / Spring Animation

> 动效 · `id: spring-animation`

用弹簧物理（刚度、阻尼）驱动的运动：可冲过终点再回落稳定，也可临界阻尼稳稳停住。比固定缓动更有质量感与连续性，适合拖拽落位、开关拨动与强调出现。过冲幅度需克制，避免失控感。

**别名:** 弹簧动画 · 弹簧效果 · 弹一下 · 物理动画 · 回弹落位 · spring animation · spring physics · springy motion

**分类:** Motion / Physics

## 适用场景

- 拖拽松手、开关拨动等需要"落位感"的时刻
- 界面要表达质量、惯性与连续物理
- 强调出现或共享元素归位

## 不适用场景

- 高频微操作每次弹跳，很快变吵
- 严肃流程（支付、医疗）需要克制而非活泼
- 只需一次性淡入淡出，弹簧是多余复杂度

## 常见形式

- **过冲弹簧** (Overshoot spring) — 冲过终点再回落，最有弹性
- **临界阻尼** (Critically damped) — 最快稳定且不过冲，最稳重
- **弹跳** (Bouncy) — 多次衰减振荡，俏皮但易过量

## Platform API

- `linear()`
- `cubic-bezier()`
- `offset-path`

## 实现要点

**CSS:** `cubic-bezier()` `linear()` `@keyframes` `transform: translate`

CSS 近似弹簧用带回弹的 cubic-bezier(0.34, 1.56, 0.64, 1) 或 keyframes 显式写振荡序列； 精确弹簧可用 linear() 采样或 JS 按 stiffness/damping 积分后写 transform。所有时长写 calc(<时长> * var(--demo-speed, 1))。过冲幅度 ≤ 元素尺寸 10%，transform-origin 居中。 尊重 prefers-reduced-motion，直接落到终态。

## 交给 Agent 的任务 Prompt

```text
在当前项目中为落位与强调时刻实现弹簧动画。

先检查现有组件体系和 Design Token，优先复用当前组件。
保持现有项目视觉风格。不要新增不必要依赖。
要求：
- 用弹簧式缓动或振荡关键帧表达过冲与稳定
- 过冲幅度克制，所有时长写 calc(<时长> * var(--demo-speed, 1))
- 只用于低频关键时刻，不挂在高频控件上
- 尊重 prefers-reduced-motion
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 给元素落位添加弹簧动画：运动到位时冲过再回落。

**Design:** 点击触发后方块以约 450ms 弹到目标位，过冲约 8% 再回落稳定；临界阻尼变体不过冲，弹跳变体振荡两三次后停住。

**Implementation:** CSS 用 cubic-bezier(0.34, 1.56, 0.64, 1) 或 @keyframes 振荡序列；时长一律 calc(<时长> * var(--demo-speed, 1))。transform-origin 居中，过冲 ≤ 10%。 尊重 prefers-reduced-motion。

## 相关概念

- [elastic-bounce](/motion/elastic-bounce) — 替代方案
- [press-feedback](/motion/press-feedback) — 搭配使用
- [hover-lift](/motion/hover-lift) — 搭配使用

## Sources

- [MDN — cubic-bezier()](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/cubic-bezier)
- [MDN — linear()](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/linear)
- [Material Design — Motion — Emphasized easing](https://m3.material.io/styles/motion/easing-and-duration)

---

JSON: `/api/concept/motion/spring-animation.json` · 站点: /motion/spring-animation
