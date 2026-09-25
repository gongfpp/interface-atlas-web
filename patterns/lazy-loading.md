# 懒加载 / Lazy Loading

> 交互模式 · `id: lazy-loading`

用"推迟加载"的方式处理暂不在视口内的资源：图片、列表分块、组件等在接近或进入可视区域时才真正请求和渲染。 首屏只承担可见部分的开销，配合占位骨架避免突然撑开布局，让长页面既快又稳。

**别名:** 懒加载 · 按需加载 · 延迟加载 · 滚动到才加载 · 图片懒加载 · 进入视口加载

**分类:** Performance / Loading

## 适用场景

- 页面含大量图片或长列表，首屏之外的资源较多
- 首屏加载速度是关键指标，需要削减初始请求
- 部分内容用户大概率不会滚动看到

## 不适用场景

- 资源就在首屏内，懒加载反而引入延迟
- 打印、SEO 或无 JS 环境必须能拿到全部内容
- 资源极小且数量有限，切分收益低于复杂度成本

## 常见形式

- **原生懒加载** (Native) — img loading="lazy" 一行搞定，交给浏览器
- **视口侦测** (IntersectionObserver) — 进入视口再挂载并淡入，可控性更强
- **占位渐进** (Placeholder) — 模糊缩略图或纯色块先行，加载后替换

## 实现要点

**CSS:** `loading: lazy` `IntersectionObserver` `opacity` `transform`

图片优先用原生 loading="lazy"；需要自定义时机或动画时用 IntersectionObserver 监听占位元素， 命中后设置真实 src 或挂载组件，配 opacity/translate 过渡淡入。占位需预留宽高（aspect-ratio）避免布局跳动。 尊重 prefers-reduced-motion，淡入退化为直接显示。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现图片懒加载（Lazy Loading）。

先检查项目内已有的图片组件与加载态，优先复用。
用途：文章列表与长页面的配图。
要求：
- 优先原生 loading="lazy"，需要动画时用 IntersectionObserver
- 占位与真实图片同宽高，避免布局跳动
- 加载完成后淡入，尊重 prefers-reduced-motion
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个懒加载（Lazy Loading）演示，图片在滚动进入视口时才加载并淡入显示。

**Design:** 创建懒加载演示。要求：可滚动画布内若干卡片，未进入视口时显示灰色占位块，进入后加载并淡入；占位与真实内容同尺寸，避免布局跳动；提供"模拟进入视口"按钮方便演示。

**Implementation:** 用 React + IntersectionObserver 实现懒加载。列表项初始渲染占位 div（固定宽高），ref 进入视口 （rootMargin 提前量）后置 loaded 并渲染真实内容，配 CSS 过渡淡入。组件卸载时 disconnect observer。 尊重 prefers-reduced-motion。

## 相关概念

- [infinite-scroll](/patterns/infinite-scroll) — 相似概念
- [skeleton-loading](/patterns/skeleton-loading) — 相似概念
- [progressive-disclosure](/patterns/progressive-disclosure) — 相似概念
- [empty-state](/patterns/empty-state) — 相似概念
- [pagination](/patterns/pagination) — 搭配使用

## 可搭配的风格

`bento-grid` `minimalism`

## Sources

- [MDN — Lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Lazy_loading)
- [MDN — Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

JSON: `/api/concept/patterns/lazy-loading.json` · 站点: /patterns/lazy-loading
