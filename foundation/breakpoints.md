# 响应式断点 / Breakpoints

> 基础 · `id: breakpoints`

断点是布局发生切换的视口宽度临界值：窄于此用一套排版，宽于此换另一套。断点应由内容决定——把窗口慢慢拉宽，哪里开始拥挤、哪里变难看，那里就是断点，而不是照搬 iPhone、iPad 的型号宽度。移动优先用 min-width 从小到大叠加，断点越少越容易维护。

**别名:** 响应式断点 · 媒体查询断点 · 断点 · 手机和电脑的分界 · 什么时候换布局 · 大屏小屏切换点 · breakpoint · media query breakpoint

**分类:** Responsive / Layout / Foundation

## 适用场景

- 同一页面在手机和桌面需要不同列数或导航形态
- 需要在某个宽度切换侧栏、字号或间距密度
- 从移动端基线出发、逐级增强的响应式布局

## 不适用场景

- 只有一种固定宽度、无需适配的嵌入式控件
- 用设备型号（iPhone 15、iPad Pro）当断点名
- 断点堆到十来个，样式互相打架、难以维护

## 常见形式

- **移动优先** (Mobile-first) — 先写窄屏基线，再用 min-width 逐级叠加
- **内容驱动** (Content-driven) — 把窗口拉宽，哪里挤了哪里就是断点
- **断点令牌** (Breakpoint tokens) — 断点值集中成变量或配置，避免散落魔法数

## Platform API

- `@media`
- `min-width`
- `container-type`
- `clamp()`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| CSS | [@media (min-width: 48rem)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) — 移动优先的最小宽度媒体查询 |
| Tailwind CSS | [sm: / md: / lg:](https://tailwindcss.com/docs/responsive-design) — 前缀即 min-width 断点 |
| CSS Container Queries | [@container (min-width: 30rem)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) — 按组件容器宽度而非视口切换 |

## 实现要点

**CSS:** `@media (min-width: 48rem)` `min-width: 0` `grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr))` `container-type: inline-size` `padding-inline: clamp(1rem, 4vw, 2.5rem)`

先写窄屏样式作为基线，再用 @media (min-width: ...) 逐级覆盖，避免 desktop-first 的 max-width 降级写法。断点值用 em/rem（48rem＝768px）而不是 px，用户放大字号时仍按内容切换；断点集中定义成 CSS 变量或 Tailwind screens，组件内不散写魔法数。能靠 flex-wrap、grid auto-fit、clamp() 自适应的地方就别加断点。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现响应式断点。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 移动优先，只用 min-width 媒体查询
- 断点值集中定义（CSS 变量或 Tailwind screens），组件内不写魔法数
- 断点数量控制在 3～5 个，优先用自适应布局替代断点
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 建立一套响应式断点：按内容需要定义切换宽度，让布局从小屏到大屏平滑变化。

**Design:** 断点规范：移动优先，只用 min-width；断点值用 rem（48rem＝768px、64rem＝1024px）并集中定义；每档写清布局怎么变（列数、导航、间距）；断点数量控制在 3～5 个；优先用 flex-wrap、grid auto-fit、clamp() 做自适应，只有真正需要换结构时才新增断点。

**Implementation:** 用 min-width 媒体查询从窄到宽覆盖：.grid { display: grid; grid-template-columns: 1fr; } @media (min-width: 48rem) { .grid { grid-template-columns: repeat(2, 1fr); } }。断点值写成 CSS 变量或 Tailwind screens；组件级切换用 container-type: inline-size 配合 @container。避免 max-width 降级写法，也不要逐元素写死断点。

## 相关概念

- [type-scale](/foundation/type-scale) — 相似概念
- [touch-target](/foundation/touch-target) — 相似概念
- [navbar](/foundation/navbar) — 搭配使用
- [sidebar](/foundation/sidebar) — 搭配使用

## Sources

- [MDN — Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [web.dev — Learn Responsive Design](https://web.dev/learn/design/)
- [W3C — Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/)

---

JSON: `/api/concept/foundation/breakpoints.json` · 站点: /foundation/breakpoints
