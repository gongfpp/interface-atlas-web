# 无限滚动 / Infinite Scroll

> 交互模式 · `id: infinite-scroll`

用"滚动到底自动追加下一页"取代传统分页：用户持续下滑，新内容不断出现， 底部以加载指示或哨兵元素衔接。它解决的是浏览节奏被打断的问题—— 用户不必寻找"下一页"按钮，注意力始终停留在内容流上，长列表被拆成一次次无感的追加。

**别名:** Infinite Scroll · 无限加载 · 滚动到底自动加载 · 下滑加载更多 · 滚动加载 · 自动翻页

**分类:** Navigation / Data Display

## 适用场景

- 信息流、时间线等按时间追加的内容
- 浏览型任务，用户不追求精确定位
- 内容体量大、单页翻页成本高

## 不适用场景

- 用户需要跳页、定位或回找特定条目
- 页脚内容重要，会被无限推远而难以触达
- 需要明确"共 N 条"的总量边界感

## 常见形式

- **滚动哨兵** (Sentinel) — 底部哨兵元素进入视口即触发加载
- **兜底按钮** (Fallback button) — 自动加载失败或停顿时提供"加载更多"按钮
- **到底提示** (End notice) — 数据耗尽时展示"没有更多了"收尾

## 实现要点

**CSS:** `overflow-y-auto` `IntersectionObserver` `min-height` `scroll event`

优先用 IntersectionObserver 观察底部哨兵，也可监听 scroll 接近触底时提前请求。 加载中显示指示并加锁防止重复触发；插入内容时保留滚动位置、占位高度尽量一致， 避免布局跳动。提供"加载更多"兜底按钮与"没有更多了"结束态。

## 横向对比维度 (`scroll-loading`)

- **触发方式:** 滚动到底自动触发，无需操作
- **数据控制:** 系统决定加载节奏，用户被动接收
- **适用内容:** 信息流、时间线等浏览型长列表

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现无限滚动（Infinite Scroll）。

先检查现有列表组件与请求层，优先复用现有的加载指示与空态。
用途：信息流页面自动加载下一页。
要求：
- 滚动到底自动触发加载，接近底部提前请求
- 加载中加锁防重复触发，显示轻量加载指示
- 失败时提供"加载更多"兜底按钮，耗尽时显示到底提示
- 保留滚动位置，插入内容避免布局跳动
- 尊重 prefers-reduced-motion
- 不新增不必要的依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个无限滚动（Infinite Scroll）列表，滚动到底自动加载下一页，加载中显示指示，数据耗尽提示"没有更多了"。

**Design:** 设计一个无限滚动信息流。要求：滚动到底自动追加下一页；底部加载指示轻量不打断； 加载失败出现"加载更多"兜底按钮；数据耗尽显示"已经到底了"结束态；支持深浅色主题。

**Implementation:** 用 React + Tailwind 实现 Infinite Scroll。容器固定高度 + overflow-y-auto， onScroll 计算触底距离或用 IntersectionObserver 观察哨兵元素；加载中置 busy 锁， 模拟请求用 setTimeout，完成后追加数据并更新页码；到底后渲染结束态。 尊重 prefers-reduced-motion，加载指示不做大幅动画。

## 相关概念

- [pagination](/patterns/pagination) — 替代方案
- [pull-to-refresh](/patterns/pull-to-refresh) — 替代方案
- [skeleton-loading](/patterns/skeleton-loading) — 相似概念
- [lazy-loading](/patterns/lazy-loading) — 相似概念
- [search-filtering](/patterns/search-filtering) — 相似概念

## Sources

- [MDN — Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [NN/g — Infinite Scrolling Tips](https://www.nngroup.com/articles/infinite-scrolling-tips/)

---

JSON: `/api/concept/patterns/infinite-scroll.json` · 站点: /patterns/infinite-scroll
