# 滚动驱动动画 / Scroll-driven Animation

> 动效 · `id: scroll-driven-animation`

动画进度绑定滚动位置而非时间：滚到哪、动到哪，可来回擦洗。能做滚动进度条、随滚动展开的叙事与视差层。与滚动显现不同，它不是触发后播完，而是由滚动位置精确擦洗进度。

**别名:** 滚动驱动动画 · 滚动动画 · 随滚动动 · 滑到哪动到哪 · scroll animation · scroll-driven · scroll-linked animation

**分类:** Motion / Scroll

## 适用场景

- 叙事随滚动展开，进度要与阅读位置同步
- 需要滚动进度指示或阅读深度反馈
- 视差层、粘性章节等空间层次表达

## 不适用场景

- 用户一滚到底找信息，动画反而拖慢到达
- 滚动容器嵌套复杂，进度归属不清
- 只需一次性入场，用滚动显现更简单

## 常见形式

- **滚动联动** (Scroll-linked) — 进度直接映射滚动位置，可逆向擦洗
- **滚动触发** (Scroll-triggered) — 越过阈值后按时间播完，不再随滚动
- **视差层** (Parallax layers) — 多层不同速率移动，制造纵深

## Platform API

- `animation-timeline: scroll()`
- `scroll()`
- `Intersection Observer`

## 实现要点

**CSS:** `animation-timeline: scroll()` `animation-range` `transform: translateY` `progress`

首选 CSS：animation-timeline: scroll() + animation-range 把关键帧绑到滚动进度；不支持时用 JS 滚动监听写 CSS 变量（如 --scroll），再由 calc 驱动 transform/opacity。触发式部分的定时 动画仍需 calc(<时长> * var(--demo-speed, 1))。滚动监听要 passive + rAF 节流。 尊重 prefers-reduced-motion，直接落到终态。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现滚动驱动动画。

先检查现有组件体系和 Design Token，优先复用当前组件。
保持现有项目视觉风格。不要新增不必要依赖。
要求：
- 动画进度绑定滚动位置，可反向擦洗
- 优先使用 animation-timeline: scroll()，并提供 JS 兜底
- 定时动画时长写 calc(<时长> * var(--demo-speed, 1))
- 尊重 prefers-reduced-motion
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 给长页面添加滚动驱动动画：进度条随滚动增长，章节随滚动展开。

**Design:** 顶部细进度条随滚动位置从 0% 到 100%；章节卡片在滚动擦洗下上移并淡入，可反向回退；视差背景层以约 0.5 倍速移动。

**Implementation:** 优先 animation-timeline: scroll()；回退用 passive scroll 监听 + rAF 把进度写入 CSS 变量。 受驱动元素用 calc(var(--scroll) * …) 做 transform/opacity。触发式定时动画时长乘 var(--demo-speed, 1)。尊重 prefers-reduced-motion。

## 相关概念

- [scroll-reveal](/motion/scroll-reveal) — 替代方案
- [parallax](/motion/parallax) — 替代方案
- [text-reveal](/motion/text-reveal) — 搭配使用

## Sources

- [MDN — CSS scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
- [MDN — animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)
- [MDN — Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)

---

JSON: `/api/concept/motion/scroll-driven-animation.json` · 站点: /motion/scroll-driven-animation
