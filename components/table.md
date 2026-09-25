# 表格 / Table

> 组件 · `id: table`

用行与列精确对齐数据的二维表格：一行一条记录、一列一个字段，适合逐列比较、排序与大容量数据浏览。 行可悬停高亮、点击选中，列头通常带排序控制。

**别名:** 表格 · 数据表格 · 数据列表 · 二维表 · 可排序表格 · 后台数据列表 · 订单列表那种表

**分类:** Display / Data

## 适用场景

- 字段多、需要逐列比较的数据
- 后台管理列表（订单、用户、日志）
- 需要排序、筛选、批量操作的密集数据

## 不适用场景

- 移动端窄屏放不下列（转为卡片列表）
- 内容以浏览为主、比较为辅（用 card 流）
- 每条记录字段很少且强调视觉（用卡片或列表）

## 常见形式

- **带边框** (Bordered) — 单元格描线，最传统
- **斑马纹** (Striped) — 隔行底色，长表格更易读
- **固定表头** (Sticky header) — 滚动时表头常驻

## Platform API

- `<table>`
- `<thead>`
- `<tbody>`

## 实现要点

**CSS:** `border-collapse` `text-align` `overflow-x: auto` `position: sticky`

容器 overflow-x-auto 处理窄屏；数字列右对齐、文本列左对齐；斑马纹用 odd 行底色。 排序：th 内放按钮并标记 aria-sort，二次点击反向。固定表头用 sticky top-0 配表头底色。 行密度用 py 控制紧凑（约 8px）或舒适（约 16px）。

## 横向对比维度 (`primary-display`)

- **信息密度:** 高，行列紧凑
- **可扫描性:** 高，同列对齐易比较
- **适合内容:** 结构化记录、财务与日志

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现数据表格（Table）组件。

先检查现有组件体系与 Design Token，优先复用现有的表面色与文本层级变量。
用途：后台订单/成员列表。
要求：
- 列头点击排序（aria-sort），支持升序/降序切换
- 数字列右对齐，文本列左对齐
- 行悬停高亮，支持斑马纹变体
- 窄屏 overflow-x 处理，深浅色主题一致
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个表格（Table）组件：展示订单列表，包含列头排序、行悬停高亮与状态列。

**Design:** 创建数据表格。要求：细线分隔行（或斑马纹），表头小写灰字加粗、可点击排序（带方向指示）； 数字列右对齐且用等宽数字；行悬停浅色高亮；状态列用彩色圆点 + 文字；行高紧凑舒适两档。

**Implementation:** 用 React + Tailwind 实现 Table：数据数组 + sortKey/sortDir 受控，useMemo 排序； thead th 内 button 触发排序并设 aria-sort="ascending/descending"； 数字列 className text-right tabular-nums；容器 overflow-x-auto； 斑马纹 odd:bg-code-bg；行选中用 state + aria-selected； 排序动画时长乘 var(--demo-speed, 1)。

## 相关概念

- [card](/components/card) — 替代方案
- [pagination](/components/pagination) — 相似概念
- [filter-panel](/components/filter-panel) — 相似概念
- [master-detail](/components/master-detail) — 搭配使用

## Sources

- [W3C WAI Tables Tutorial](https://www.w3.org/WAI/tutorials/tables/)
- [Apple HIG — Tables (macOS)](https://developer.apple.com/design/human-interface-guidelines/tables)

---

JSON: `/api/concept/components/table.json` · 站点: /components/table
