# 看板 / Kanban Board

> 交互模式 · `id: kanban-board`

按状态分列的任务面板—— 通常"待办 / 进行中 / 已完成"三列， 卡片随状态推进在列间移动。 列的位置即流程阶段， 卡片的所在即任务状态， 一眼看清全局进展与瓶颈列。

**别名:** 看板 · 任务看板 · kanban · 拖拽看板 · 任务面板

**分类:** Layout / Workflow

## 适用场景

- 流程稳定、状态有限的任务管理（开发、招聘、内容生产）
- 团队需要一眼看出瓶颈（哪列堆积）
- 个人项目按阶段推进的轻量管理

## 不适用场景

- 状态维度超过 4～5 列（认知负担陡增）
- 任务间有复杂依赖与层级（用甘特或树状）
- 纯时间维度的排程（日历更合适）

## 常见形式

- **经典三列** (Classic three-column) — 待办/进行中/已完成，最通用
- **WIP 限制** (WIP limit) — 列头标注并发上限，超限高亮警示
- **泳道** (Swimlanes) — 列内按负责人或优先级横向分层

## 实现要点

**CSS:** `flex/grid columns` `drag-and-drop or button moves` `data-status per column` `optimistic move`

结构为横向 flex 的列容器 + 纵向卡片列表；移动卡片本质是状态字段的变更（乐观更新，先移动后同步）。 拖拽排序用原生 DnD 或指针事件， 简单场景用左右移动按钮即可。 列头显示计数；注意空列的 drop 目标高度兜底， 键盘用户需要按钮替代拖拽。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现一个任务看板。

先检查现有状态管理与卡片组件，复用既有令牌。
要求：
- 三列（待办/进行中/已完成），列头带计数
- 卡片可在列间移动（按钮或拖拽），乐观更新即时生效
- 键盘可操作（按钮替代拖拽），空列可放置
- 支持 Dark Mode
- 不新增不必要的依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个三列看板（待办/进行中/已完成），卡片可在列间移动。

**Design:** 三列等宽看板，列头含状态名与计数；卡片含标题与标签，可通过按钮在相邻列间移动，移动即时生效；空列保持可放置高度。

**Implementation:** React：tasks 数组按 status 分组渲染三列；移动按钮更新对应 task.status（乐观更新，无需请求等待）。列容器 min-h 兜底空列。如需拖拽排序，用原生 dragstart/dragover/drop 记录目标列与位置。

## 相关概念

- [drag-and-drop-sorting](/patterns/drag-and-drop-sorting) — 相似概念
- [optimistic-ui](/patterns/optimistic-ui) — 相似概念
- [dashboard](/patterns/dashboard) — 搭配使用
- [master-detail](/patterns/master-detail) — 相似概念

## 可搭配的风格

`minimalism` `bento-grid`

## Sources

- [Apple HIG — Drag and drop](https://developer.apple.com/design/human-interface-guidelines/drag-and-drop)
- [Material Design — Cards](https://m3.material.io/components/cards/overview)

---

JSON: `/api/concept/patterns/kanban-board.json` · 站点: /patterns/kanban-board
