# 页面切换过渡 / Page Transition

> 动效 · `id: page-transition`

页面之间切换时，旧页面滑出或淡出、新页面滑入或淡入，让路由跳转 从"硬切"变成一段 200～400ms 的连续运动。方向应与信息层级一致： 进入下级页面向左推入，返回时向右退出，帮助用户建立空间心智模型。

**别名:** 页面转场 · 切换动画 · 页面跳转动画 · 转场效果 · 路由过渡 · page switch animation

**分类:** Motion / Navigation

## 适用场景

- SPA 路由切换、分步向导、tab 式页面流
- 需要表达页面间父子层级关系
- 原生 App 风格的 Web 产品调性

## 不适用场景

- 每次 300ms 以上的长过渡（拖慢浏览节奏）
- 用户频繁快速切换（动画跟不上点击）
- 传统多页站点整页刷新（没有过渡载体）

## 常见形式

- **推入** (Push) — 新页从右推入、旧页左移，表达层级
- **淡入淡出** (Cross-fade) — 两页交叉淡化，中性无方向
- **共享轴** (Shared axis) — Material 规范，进入与退出配对同轴运动

## 实现要点

**CSS:** `transform: translateX` `opacity` `transition`

最简做法：路由容器在切换时给旧页 class "exit"（translateX(-30%) + opacity:0）、 新页 "enter"（从 translateX(30%) 到 0），时长 250～300ms ease-out。 现代方案用 View Transitions API：document.startViewTransition 包裹路由更新， 一行代码获得交叉淡入淡出并可用 CSS 定制方向。注意尊重 prefers-reduced-motion。

## 交给 Agent 的任务 Prompt

```text
为当前 SPA 的路由切换添加页面过渡。

先确认路由方案与页面容器结构。
要求：
- 前进/返回方向相反的滑入淡出，280ms ease-out
- 快速连续切换时不叠加错乱动画
- 首次加载不播放过渡
- 尊重 prefers-reduced-motion
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给站点路由切换添加过渡动画：新页面淡入，旧页面淡出。

**Design:** 页面切换采用共享轴过渡：前进时新页从右侧 30% 处滑入、旧页左移淡出， 返回时方向相反；时长 280ms ease-out，动画期间禁止重复触发。

**Implementation:** React Router 场景：切换时对路由容器施加 key 触发的 CSS 动画类 （slide-in-left/right 250ms ease-out both）。或用 document.startViewTransition(() => flushSync(update))，配合 ::view-transition-old/new 自定义方向。尊重 prefers-reduced-motion （退化为 120ms 交叉淡化或直接切换）。

## 相关概念

- [drawer-slide](/motion/drawer-slide) — 相似概念
- [modal](/motion/modal) — 应用于
- [tabs](/motion/tabs) — 应用于
- [toast-slide-in](/motion/toast-slide-in) — 相似概念

## Sources

- [MDN — View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)

---

JSON: `/api/concept/motion/page-transition.json` · 站点: /motion/page-transition
