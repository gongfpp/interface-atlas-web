# 卡片 / Card

> 组件 · `id: card`

用圆角边框或底色围出一块自包含内容的矩形容器，一块卡片聚合一组相关信息： 封面图、标题、摘要与操作。是内容流、仪表盘与电商列表的通用显示单元。

**别名:** 卡片 · 卡片容器 · 信息卡 · 内容卡片 · 卡片式布局 · 商品卡片 · 一块一块的内容板

**分类:** Layout / Display

## 适用场景

- 封面图 + 标题 + 摘要的流式内容展示
- 仪表盘中并列的多块摘要指标
- 可点击跳转的聚合入口（商品、文章、项目）

## 不适用场景

- 需要逐行精确对齐比较（改用 table）
- 密度极高的数据展示（改用 table）
- 纯装饰性包裹会稀释信息，宁可用留白分隔

## 常见形式

- **基础** (Basic) — 边框或浅底 + 内容，最通用
- **带封面** (Media) — 顶部图片 + 内容区
- **可点击** (Actionable) — 整卡可点，hover 抬升或边框强调

## Platform API

- `<article>`

## 实现要点

**CSS:** `border-radius` `box-shadow` `border` `aspect-ratio`

卡片 = 容器（圆角、边框或阴影）+ 内边距 + 可选分区（媒体区、内容区、操作区）。 整卡可点时用 a 或 button 包裹，hover 给边框变色或轻微上浮反馈； 图片区固定宽高比（aspect-ratio）防止加载后布局跳动。

## 横向对比维度 (`primary-display`)

- **信息密度:** 低，一块卡一个主题
- **可扫描性:** 中，视觉引导好但占空间
- **适合内容:** 封面类内容、指标摘要

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现卡片（Card）组件。

先检查现有组件体系与 Design Token，优先复用现有的表面色、圆角与阴影变量。
用途：内容流与仪表盘摘要。
要求：
- 容器 + 可选媒体区 + 标题/描述 + 操作区
- 支持整卡可点（注意语义与嵌套交互）
- hover 反馈克制，尊重 prefers-reduced-motion
- 深浅色主题一致，不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个卡片（Card）组件：圆角边框容器，包含封面图、标题、描述和操作按钮。

**Design:** 创建 Card 组件。要求：圆角 + 细边框（或浅底），内边距一致；可选媒体区固定 16:9； 标题加粗、描述两行截断；hover 时边框变强调色或轻微上浮（120ms）；支持整卡可点与底部操作区两种形态。

**Implementation:** 用 React + Tailwind 实现 Card：article/容器 rounded-xl border bg-raised； 媒体区 aspect-video overflow-hidden；描述 line-clamp-2；整卡可点时外层 a/button + transition hover:border-accent hover:shadow，注意嵌套可点元素的语义冲突； 支持 as prop 定制元素；时长乘 var(--demo-speed, 1)。

## 相关概念

- [table](/components/table) — 替代方案
- [bento-grid](/components/bento-grid) — 搭配使用
- [hover-lift](/components/hover-lift) — 搭配使用
- [badge](/components/badge) — 相似概念

## Sources

- [Material Design — Cards](https://m3.material.io/components/cards/overview)
- [Ant Design — Card](https://ant.design/components/card)

---

JSON: `/api/concept/components/card.json` · 站点: /components/card
