# 视图过渡 / View Transition

> 动效 · `id: view-transition`

用浏览器原生 View Transitions API 在页面状态切换时做平滑过渡：旧视图淡出、新视图淡入，关键元素可共享形变。它把状态跳变藏进连续的空间叙事，让"换了一屏"读起来像"移了一步"，而不是硬切。

**别名:** 视图过渡 · 页面过渡动画 · 切换动画 · 换页过渡 · view transition · view transitions api

**分类:** Motion / Navigation

## 适用场景

- 同文档内状态或路由切换需要连续感（列表↔详情）
- 存在应保持视觉连续的关键元素（标题、图片、按钮）
- 目标浏览器已支持 View Transitions API

## 不适用场景

- 每次切换都播长动画，高频导航会被拖慢
- 旧新视图结构差异过大，形变会扭曲内容
- 需要兼容无 API 环境且不愿做回退分支

## 常见形式

- **交叉淡入** (Cross-fade) — 旧淡出新淡入，最稳妥的默认
- **滑动** (Slide) — 沿导航方向推入推出，前进后退语义清晰
- **共享轴** (Shared-axis) — 共同元素原地形变，其余沿轴移动

## Platform API

- `document.startViewTransition()`
- `view-transition-name`

## 实现要点

**CSS:** `@keyframes` `opacity` `transform: translate` `view-transition-name`

原生路径用 document.startViewTransition(() => updateDOM())，为需形变的元素指定 view-transition-name。无 API 时用 CSS animation 兜底：旧视图 fade/slide 出、新视图入， 时长一律 calc(<时长> * var(--demo-speed, 1))。尊重 prefers-reduced-motion，退化为瞬时切换。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现视图过渡。

先检查现有组件体系和 Design Token，优先复用当前组件。
保持现有项目视觉风格。不要新增不必要依赖。
要求：
- 状态或路由切换有连续过渡，关键元素保持视觉连续
- 无 View Transitions API 时有 CSS 兜底
- 所有动画时长写 calc(<时长> * var(--demo-speed, 1))
- 尊重 prefers-reduced-motion
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 给列表与详情之间的切换添加视图过渡动画。

**Design:** 列表卡片点开时，标题与图片保持视觉连续地形变为详情页对应元素，其余内容交叉淡入，约 300ms；返回时反向播放。

**Implementation:** 优先用 document.startViewTransition + view-transition-name；无 API 时用 @keyframes 兜底， 旧新视图绝对定位叠放做交叉淡入或滑动。所有时长写 calc(<时长> * var(--demo-speed, 1))。 尊重 prefers-reduced-motion。

## 相关概念

- [page-transition](/motion/page-transition) — 替代方案
- [shared-element-transition](/motion/shared-element-transition) — 相似概念
- [morphing-icon](/motion/morphing-icon) — 搭配使用

## Sources

- [MDN — View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- [W3C — CSS View Transitions Module Level 1](https://www.w3.org/TR/css-view-transitions-1/)
- [MDN — view-transition-name](https://developer.mozilla.org/en-US/docs/Web/CSS/view-transition-name)

---

JSON: `/api/concept/motion/view-transition.json` · 站点: /motion/view-transition
