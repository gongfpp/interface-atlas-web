# 减弱动效 / Reduced Motion

> 无障碍 · `id: reduced-motion`

尊重系统「减弱动态效果」偏好，把大幅位移、缩放、视差动画降级为淡入甚至直接呈现。前庭敏感的用户会被大幅动效诱发眩晕恶心，这不是审美偏好而是健康风险；WCAG 2.3.3 要求非必要动画可被关闭。

**别名:** 减弱动效 · 减弱动态效果 · 减少动画 · 动效降级 · 关掉动画 · reduced motion

**分类:** Accessibility / Motion

## 名词辨析

prefers-reduced-motion 是操作系统里的健康偏好，不是应用内的「关闭动画」开关——前者由用户在系统设置里声明，后者只是产品自己的设置项。

## 适用场景

- 落地页、转场、视差等大幅位移或缩放动画
- 自动播放的装饰动效（跑马灯、弹性弹跳、数字滚动）
- 用 JS 驱动的动画库补上 CSS 之外的降级分支

## 不适用场景

- 把按下态、加载态这些功能反馈也一刀切砍光
- 用减弱动效代替真正的无障碍修复（比如补焦点环）
- 只降级 CSS 动画，JS 弹跳/视差仍强制播放

## 常见形式

- **仅淡入** (Fade only) — 去掉位移与缩放，只留 opacity 过渡，最常用降级
- **完全取消** (No animation) — animation: none / transition: none，状态瞬间到位
- **静态替代** (Static replace) — 用静态图或即时结果替换整段动效叙事

## Platform API

- `prefers-reduced-motion`
- `matchMedia`
- `animation: none`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| WCAG | [2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions) |
| CSS | [@media (prefers-reduced-motion)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) |

## 实现要点

**CSS:** `@media (prefers-reduced-motion: reduce)` `animation: none` `matchMedia` `transition-duration`

CSS 侧统一门控：@media (prefers-reduced-motion: reduce) { *, ::before, ::after { animation-duration: .01ms !important; transition-duration: .01ms !important; } }，再按需为状态反馈保留 opacity 通道。JS 动画用 matchMedia("(prefers-reduced-motion: reduce)").matches 读取并在 change 事件时重配；滚动驱动与视差必须同步禁用。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现减弱动效支持。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 全局尊重 prefers-reduced-motion，位移/缩放类动画降级为淡入或取消
- JS 驱动动画用 matchMedia 读取并响应 change
- 功能性反馈（按下、加载）保留
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 让网站尊重系统的「减弱动态效果」设置，开启时动画自动降级。

**Design:** 系统开启减弱动效时，入场动画去掉位移与缩放只留 200ms 淡入，转场改为即时或交叉淡化，跑马灯与视差完全停用；按下与加载反馈保留。

**Implementation:** @media (prefers-reduced-motion: reduce) 全局压缩 animation/transition 时长；JS 用 matchMedia 读取并监听 change；滚动监听、视差、数字滚动在 reduce 分支直接呈现终值。产品内设置项也映射到同一降级函数。

## 相关概念

- [scroll-reveal](/a11y/scroll-reveal) — 搭配使用
- [hover-lift](/a11y/hover-lift) — 搭配使用
- [focus-ring](/a11y/focus-ring) — 搭配使用

## 容易混淆

- [page-transition](/a11y/page-transition) — page-transition 是转场动效本身，reduced-motion 是决定它要不要减弱的系统策略——一个造动效，一个裁动效。

## Sources

- [WCAG 2.1 Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)
- [MDN — prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

---

JSON: `/api/concept/a11y/reduced-motion.json` · 站点: /a11y/reduced-motion
