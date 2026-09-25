# 弹性回跳 / Elastic Bounce

> 动效 · `id: elastic-bounce`

元素到位后不是稳稳停住，而是带一两次越过后回弹的振荡， 像有弹性地"Q 一下"。 给界面注入物理感和俏皮感， 常用于成功状态、奖励时刻或品牌化入场。

**别名:** 弹性回跳 · 果冻效果 · 回弹动画 · 弹簧动效 · Q弹效果

**分类:** Motion / Personality

## 适用场景

- 成功、奖励、升级等正向关键时刻
- 品牌调性活泼，需要记忆点
- 拖拽松手后的回弹落位

## 不适用场景

- 高频操作按钮（每次都弹，很快变烦）
- 严肃场景（支付、医疗、法律）
- 弹跳幅度过大（超过元素尺寸 10% 显得失控）

## 常见形式

- **过冲回落** (Overshoot) — cubic-bezier(0.34, 1.56, 0.64, 1) 一次过冲，最简
- **果冻抖动** (Jelly) — keyframes 缩放 1→1.2→0.9→1 连续振荡
- **拖拽回弹** (Spring drag) — 松手后带回弹归位，物理感最强

## 实现要点

**CSS:** `cubic-bezier(0.34, 1.56, 0.64, 1)` `@keyframes overshoot` `transform-origin: center`

最简法用带 y>1 的 cubic-bezier(0.34, 1.56, 0.64, 1)（ease-out-back）让过渡末段越过终点再回来； 多次振荡用 keyframes 显式写缩放序列。 transform-origin 保持居中， 幅度控制在元素尺寸 10% 以内； 尊重 prefers-reduced-motion 直接落到终态。

## 交给 Agent 的任务 Prompt

```text
为项目成功/奖励时刻添加弹性回跳动效。

先检查现有动效令牌与缓动变量，避免私加曲线。
要求：
- 过冲幅度 ≤ 元素尺寸 10%，总时长 ≤ 600ms
- 只用于低频正向时刻，不挂在常规按钮上
- transform-origin 居中，不影响布局
- 尊重 prefers-reduced-motion
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给成功状态添加弹性回跳动画：图标出现时 Q 弹一下。

**Design:** 成功徽章出现时缩放从 0.6 弹到 1，带一次过冲回落，450ms；幅度不超过尺寸 10%；只在成功时刻触发。

**Implementation:** transition/animation 用 cubic-bezier(0.34, 1.56, 0.64, 1)；果冻版写 keyframes scale 1→1.08→0.96→1， 总时长 400～600ms。注意与 opacity 组合时过冲只作用于 scale。reduced-motion 直接显示终态。

## 相关概念

- [press-feedback](/motion/press-feedback) — 相似概念
- [magnetic-button](/motion/magnetic-button) — 相似概念
- [confetti](/motion/confetti) — 相似概念
- [card](/motion/card) — 应用于

## Sources

- [MDN — easing functions](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)

---

JSON: `/api/concept/motion/elastic-bounce.json` · 站点: /motion/elastic-bounce
