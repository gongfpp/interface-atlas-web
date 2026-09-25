# 滚动显现 / Scroll Reveal

> 动效 · `id: scroll-reveal`

元素滚动进入视口时才播放淡入、上浮或滑入动画，之前保持隐藏或占位。 把"一次性呈现全部内容"变成"随阅读节奏逐段揭示"，让长页面的信息 更有秩序感。通常由 IntersectionObserver 触发，只播一次。

**别名:** 滚动显现 · 滚动淡入 · 进入视口动画 · 滑到那里才出现 · 滚动出现 · scroll into view animation

**分类:** Motion / Scroll

## 适用场景

- 长落地页的分区内容逐段呈现
- 文章、案例展示等线性阅读内容
- 需要引导视线自上而下移动

## 不适用场景

- 用户要找的东西被藏进动画（迟到即伤害）
- 表单、价格等决策关键信息
- 整页元素全部滚动显现（等待感堆积）

## 常见形式

- **淡入上浮** (Fade up) — opacity 0→1 + translateY(24px→0)，最常用
- **侧向滑入** (Slide in) — 从左右滑入，适合图文交错布局
- **缩放浮现** (Scale in) — 从 0.92 放大到 1，卡片与图片适用

## 实现要点

**CSS:** `IntersectionObserver` `opacity` `transform: translateY` `transition`

IntersectionObserver 观察目标元素，进入视口（threshold 0.15～0.25）时 加 .revealed 类触发 transition：opacity 0→1、translateY(24px)→0， 600ms ease-out，只触发一次后 unobserve。动画时长乘以一个可调速度变量。 初始隐藏状态会导致无 JS 时不显示，务必提供 no-js 回退； 尊重 prefers-reduced-motion（直接显示）。

## 交给 Agent 的任务 Prompt

```text
为项目落地页的分区内容添加滚动显现动画。

先检查是否已有 reveal/observer 工具，复用而非新写。
要求：
- 进入视口淡入上浮 24px，600ms，只播一次
- 同屏元素 80ms 错峰
- 无 JS 或 SSR 首屏内容不被隐藏
- 尊重 prefers-reduced-motion
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给页面的各个区块添加滚动显现：进入视口时淡入上浮。

**Design:** 区块进入视口下沿 80% 高度时淡入并上浮 24px，600ms ease-out，只播一次； 同屏多个元素按 80ms 间隔错峰出现。

**Implementation:** IntersectionObserver（rootMargin: '0px 0px -15% 0px'）进入即加 .revealed 并 unobserve；CSS：.reveal{opacity:0;transform:translateY(24px)} .revealed{opacity:1;transform:none;transition:all .6s ease-out}。 无 JS 回退：<noscript> 或默认显示。尊重 prefers-reduced-motion。

## 相关概念

- [lazy-loading](/motion/lazy-loading) — 搭配使用
- [infinite-scroll](/motion/infinite-scroll) — 搭配使用
- [text-reveal](/motion/text-reveal) — 相似概念
- [stagger-reveal](/motion/stagger-reveal) — 相似概念

## Sources

- [MDN — Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)

---

JSON: `/api/concept/motion/scroll-reveal.json` · 站点: /motion/scroll-reveal
