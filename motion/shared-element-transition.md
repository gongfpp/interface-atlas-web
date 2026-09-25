# 共享元素转场 / Shared Element Transition

> 动效 · `id: shared-element-transition`

列表里的缩略图或卡片在打开详情时"飞"成详情页主图—— 同一个元素跨两个视图连续运动， 而不是各自出现。 元素身份在转场中保持连续， 是最强的上下文延续。

**别名:** 共享元素转场 · 元素飞入详情 · 卡片放大成页面 · 无缝转场 · hero 动画

**分类:** Motion / Transition

## 适用场景

- 列表 → 详情（图片、卡片、商品）
- 需要强调"还是那件东西"的选中场景
- 媒体浏览、相册、文件预览

## 不适用场景

- 两视图布局差异过大（飞行轨迹扭曲难看）
- 低端设备上的大图跨页动画（掉帧破坏错觉）
- 转场时间超过 400ms（用户开始等）

## 常见形式

- **容器变换** (Container transform) — 卡片整体放大为详情容器，Material 3 标准
- **主图飞行** (Hero image) — 只有图片飞行，其余内容淡入
- **退化淡切** (Fallback) — 不支持时退化为淡入淡出

## 实现要点

**CSS:** `FLIP technique` `view-transition-name` `getBoundingClientRect` `transform-only`

FLIP 技术——先记录元素起始 getBoundingClientRect，视图切换后再测终点， 反向 transform 摆回起点， 再过渡到 0。 Web 现代法可用 View Transitions API（document.startViewTransition + view-transition-name）。 时长 250～400ms； 尊重 prefers-reduced-motion 退化为直接切换。

## 交给 Agent 的任务 Prompt

```text
为项目列表到详情添加共享元素转场。

先检查路由/视图切换方式与现有转场实现，选择 FLIP 或 View Transitions。
要求：
- 元素连续运动，250～400ms，只动 transform/opacity
- 关闭时原路返回；不支持时退化为淡切
- 不破坏滚动位置与焦点管理
- 尊重 prefers-reduced-motion
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给图片列表添加共享元素转场：点缩略图飞入放大为详情主图。

**Design:** 点击卡片后，卡片连续放大为详情容器（350ms），其余详情内容随后淡入；关闭时反向缩回原位；转场期间背景列表淡化。

**Implementation:** FLIP：点击时记录卡片 rect → 渲染详情层 → useLayoutEffect 测详情 rect → 计算 dx/dy/scale 反向 transform → 强制 reflow → 过渡到 none（350ms）。关闭反向。或用 View Transitions API 给元素加 view-transition-name。reduced-motion 直接切换。

## 相关概念

- [page-transition](/motion/page-transition) — 相似概念
- [modal](/motion/modal) — 应用于
- [card](/motion/card) — 应用于
- [master-detail](/motion/master-detail) — 搭配使用

## Sources

- [Material Design — Container transform](https://m3.material.io/styles/motion/transitions/transition-patterns)

---

JSON: `/api/concept/motion/shared-element-transition.json` · 站点: /motion/shared-element-transition
