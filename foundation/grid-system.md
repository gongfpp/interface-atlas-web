# 栅格系统 / Grid System

> 基础 · `id: grid-system`

用列、槽间距与外边距把页面切成可复用的骨架。12 列最通用，因为它能被 2、3、4、6 整除，任意区块都能对齐到列线。 固定栅格稳但脆，repeat(auto-fit, minmax(240px, 1fr)) 让列数随可用宽度自动增减；容器查询进一步让组件按自身容器而非视口回流。

**别名:** 栅格 · 栅格系统 · 网格 · 12 列 · 分几栏 · 布局网格 · grid system · 12-column grid

**分类:** Layout / Foundation

## 适用场景

- 页面多个区块需要对齐到同一套列线
- 卡片墙要随可用宽度自动增减列数
- 同一组件在侧栏与主区都要自适应，不能只看视口

## 不适用场景

- 只有单块内容的极简页面，栅格只添嵌套
- 用栅格硬凑本就不需要对齐的自由排版
- 嵌套栅格超过三层，间距层层叠加失控

## 常见形式

- **固定 12 栏** (Fixed 12-column) — repeat(12, minmax(0, 1fr))，区块按列数跨格，稳但断点写死
- **自动适应** (Auto-fit) — repeat(auto-fit, minmax(240px, 1fr))，列数交给浏览器，内容决定宽度
- **容器查询** (Container query) — 组件包 container-type: inline-size，按自身宽度而非视口回流

## Platform API

- `grid-template-columns`
- `repeat()`
- `minmax()`
- `gap`
- `@container`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| CSS | [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) |
| CSS | [@container](https://developer.mozilla.org/en-US/docs/Web/CSS/@container) |
| Tailwind CSS | [grid-cols-12 / @container](https://tailwindcss.com/docs/grid-template-columns) |

## 实现要点

**CSS:** `grid-template-columns: repeat(12, minmax(0, 1fr))` `gap: var(--grid-gutter)` `repeat(auto-fit, minmax(240px, 1fr))` `container-type: inline-size` `@container (min-width: 40rem)`

外层定容器最大宽与左右外边距（--grid-margin），列与列之间用 gap 而非 margin，避免末列多余间距。固定栅格写 repeat(12, minmax(0, 1fr))，minmax 的 0 防止内容撑破列。自适应列表写 repeat(auto-fit, minmax(240px, 1fr))， 列数交给浏览器。组件级响应式用 container-type: inline-size 配 @container，别一律迁就视口断点。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现栅格系统。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 桌面 12 列 / 平板 8 列 / 手机 4 列，槽间距用 gap 令牌
- 卡片墙用 auto-fit + minmax 自适应列数
- 组件级响应式用 container-type 与 @container
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行现有项目检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 建立栅格系统：定义列数、槽间距与外边距，让区块对齐到同一套列线。

**Design:** 栅格规范：桌面 12 列、平板 8 列、手机 4 列；槽间距 16 与 24 两档；左右外边距随容器封顶；列表用 auto-fit + minmax 自适应，组件级布局用容器查询；禁止用 margin 模拟列间距，嵌套栅格不超过三层。

**Implementation:** 用 CSS 变量落地：--grid-gutter 与 --grid-margin；外层容器 max-width 居中。栅格写 display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: var(--grid-gutter)。自适应列表写 repeat(auto-fit, minmax(240px, 1fr))。组件包 container-type: inline-size 并配 @container 规则。

## 相关概念

- [dashboard](/foundation/dashboard) — 搭配使用
- [landing-page](/foundation/landing-page) — 搭配使用
- [card](/foundation/card) — 搭配使用
- [bento-grid](/foundation/bento-grid) — 搭配使用

## Sources

- [MDN — CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [web.dev — Learn CSS Grid](https://web.dev/learn/css/grid)
- [MDN — Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- [W3C — CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)

---

JSON: `/api/concept/foundation/grid-system.json` · 站点: /foundation/grid-system
