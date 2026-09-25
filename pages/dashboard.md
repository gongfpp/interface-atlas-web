# 仪表盘 / Dashboard

> 页面 · `id: dashboard`

把关键数据与操作入口聚在一屏内的后台首页，用区域化网格组织：顶栏与侧栏负责导航， 中部依次铺指标卡、图表区和主表格，让用户打开就能看到系统当前状态并直接下钻。 它是后台产品信息架构的核心页面，密度与分区方式决定了整站的阅读节奏。

**别名:** 后台管理首页 · 仪表盘 · 后台首页 · 数据看板 · 管理面板首页 · 数据大盘 · admin 后台

**分类:** Page / Admin

## 适用场景

- 需要一屏总览业务关键指标的后台系统
- 用户进入后先看状态、再下钻到详情
- 多种数据形态（数字、图表、表格）需要同屏

## 不适用场景

- 面向公众的营销页（用落地页更合适）
- 只有单一操作、无数据可看的工具页
- 移动端主流程（指标应降级为列表或卡片流）

## 常见形式

- **侧栏仪表盘** (Sidebar Dashboard) — 左侧栏 + 内容区，最经典的 SaaS 后台布局
- **顶部导航仪表盘** (Top Navigation Dashboard) — 顶栏承担导航，内容区横向更宽
- **高密度仪表盘** (Dense Dashboard) — 更多指标与更密的表格，面向专业运营
- **卡片仪表盘** (Card Dashboard) — 内容全部卡片化的便当格布局
- **分析型仪表盘** (Analytical Dashboard) — 图表为主体，表格与筛选为辅

## 页面结构

1. **顶栏** — 品牌、全局搜索、通知与账户菜单，固定不随内容滚动。
2. **侧栏** — 一级导航分组，可折叠；移动端收为抽屉。
3. **指标卡** — 3–5 个核心指标，数值 + 环比趋势，最上排。
4. **图表区** — 一个主图 + 一个辅图，共享同一时间范围选择。
5. **主表格** — 可排序、分页、行内操作；列密度可切换。
6. **筛选区** — 时间范围与维度筛选，作用于整页数据。

## 实现要点

**CSS:** `grid` `flex` `gap` `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`

布局骨架用 flex：顶栏 + 下方（侧栏 + 内容区）；内容区内部用 CSS Grid 划分指标、图表、表格三个层级。 指标卡建议 repeat(auto-fit, minmax(180px, 1fr)) 自适应；图表区保持固定高度避免跳动。 数据未到时用骨架屏占位；筛选区吸附在表格上方或侧栏顶部。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现后台仪表盘首页。

先检查现有路由、布局壳与图表/表格组件，优先复用。
要求：
- 布局：侧栏 + 顶栏 + 12 列内容网格
- 指标卡、图表、表格均为独立组件，支持加载骨架
- 时间范围筛选驱动图表与表格刷新
- 深浅色主题一致，尊重 prefers-reduced-motion
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个后台仪表盘页面，包含指标卡、图表区和主表格。

**Design:** 创建 SaaS 后台仪表盘：左侧固定侧栏导航，顶栏含面包屑与时间范围筛选；内容区 12 列网格，上排 4 张指标卡（数值 + 同比箭头），中部主图表 + 次图表，下方数据表格带分页。深浅色主题一致，数据加载用骨架屏。

**Implementation:** 用 React + Tailwind 实现 Dashboard：外层 flex（aside + main），main 内用 grid grid-cols-12 gap-4 布局。 指标卡、图表、表格拆成独立组件并支持骨架态；时间范围用受控状态传给图表； 表格分页受控；尊重 prefers-reduced-motion；不新增依赖。

## 相关概念

- [sidebar](/pages/sidebar) — 包含组件
- [card](/pages/card) — 包含组件
- [table](/pages/table) — 包含组件
- [filter-panel](/pages/filter-panel) — 包含组件
- [skeleton-loading](/pages/skeleton-loading) — 使用模式

## Sources

- [Nielsen Norman Group — Dashboards](https://www.nngroup.com/articles/dashboards/)
- [Atlassian Design System — Dashboards](https://atlassian.design/)

---

JSON: `/api/concept/pages/dashboard.json` · 站点: /pages/dashboard
