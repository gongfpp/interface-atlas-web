# 下拉刷新 / Pull to Refresh

> 交互模式 · `id: pull-to-refresh`

在列表顶部按住并向下拖动，出现随拖动距离变化的加载指示，超过阈值后松手即重新拉取最新数据。 它解决的是"内容可能已经过期"的问题——用户主动、可预期地请求更新， 而不是被动等待自动轮询，刷新的时机和结果都由自己掌控。

**别名:** Pull to Refresh · 下拉刷新 · 下拉更新 · 拉动刷新 · 手势刷新 · 下拉加载最新

**分类:** Navigation / Mobile

## 适用场景

- 移动端时间线、消息、动态列表
- 内容有时效性但无需自动轮询
- 用户已被 iOS / Android 教育过该手势

## 不适用场景

- 桌面鼠标环境，下拉手势不自然
- 顶部有重要吸顶操作，下拉容易误触
- 数据高频变化，应改用自动同步或推送

## 常见形式

- **指示器跟随** (Tracked spinner) — 指示器位置与角度映射下拉距离，过阈值翻转
- **文字提示** (Text hint) — 「下拉刷新 / 松手刷新」两段状态文案
- **骨架接管** (Skeleton handoff) — 松手后以骨架屏过渡到刷新后的内容

## 实现要点

**CSS:** `touch-action` `overscroll-behavior` `transform` `transition`

在 scrollTop 为 0 时接管下拉手势：监听 touchmove（需 passive: false 才能 preventDefault）， 拖动距离乘阻尼系数映射为指示器位移；超过阈值后松手进入刷新态并锁住， 完成后回弹复位。桌面用 pointer 事件模拟鼠标拖拽。容器加 overscroll-behavior: contain 防止外层页面跟着滚动。

## 横向对比维度 (`scroll-loading`)

- **触发方式:** 用户主动下拉手势触发
- **数据控制:** 用户主动请求最新数据
- **适用内容:** 动态、消息等需要手动更新的内容

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现下拉刷新（Pull to Refresh）。

先检查现有列表与加载指示组件，优先复用现有的旋转指示样式。
用途：移动端动态列表手动刷新。
要求：
- 仅在列表位于顶部时接管下拉手势，不干扰正常滚动
- 指示器随距离位移旋转，过阈值翻转提示，松手触发刷新
- 刷新中锁住避免重复触发，完成后回弹并更新内容
- 触摸与鼠标拖拽均可触发，尊重 prefers-reduced-motion
- 不新增不必要的依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个下拉刷新（Pull to Refresh）列表：在顶部向下拖动出现指示器， 超过阈值松手触发刷新，完成后内容更新并回弹。

**Design:** 设计一个下拉刷新信息流。要求：指示器随下拉距离位移与旋转，过阈值状态翻转提示"松手刷新"； 刷新中指示器停在阈值处持续动画；完成后新内容淡入、指示器回弹；支持深浅色主题。

**Implementation:** 用 React + Tailwind 实现 Pull to Refresh。容器 ref 上绑定原生 touch 事件 （passive: false）与鼠标 pointer 事件；scrollTop <= 0 且向下拖时计算 (clientY - startY) * 0.45 作为 pull 值并 preventDefault；松手时 pull >= 阈值 则进入 refreshing 态，setTimeout 模拟请求后更新数据并复位。 容器加 overscroll-contain 与 select-none。

## 相关概念

- [infinite-scroll](/patterns/infinite-scroll) — 替代方案
- [pagination](/patterns/pagination) — 替代方案
- [loading-spinner](/patterns/loading-spinner) — 搭配使用
- [skeleton-loading](/patterns/skeleton-loading) — 相似概念
- [toast](/patterns/toast) — 搭配使用

## Sources

- [Apple HIG — Pull to Refresh](https://developer.apple.com/design/human-interface-guidelines/pull-to-refresh)
- [Material Design — Swipe to Refresh](https://m3.material.io/components/pull-to-refresh/overview)

---

JSON: `/api/concept/patterns/pull-to-refresh.json` · 站点: /patterns/pull-to-refresh
