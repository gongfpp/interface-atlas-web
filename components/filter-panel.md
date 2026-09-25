# 筛选面板 / Filter Panel

> 组件 · `id: filter-panel`

集中承载筛选条件的面板，常驻列表侧边或以抽屉、浮层唤起：复选组、单选、滑杆组合出当前查询。 与列表实时联动刷新结果数，并支持已选条件回显与一键清除。

**别名:** 筛选面板 · 过滤器 · 筛选器 · 过滤面板 · 条件筛选 · 侧边筛选 · 左边勾选条件的那种面板

**分类:** Data / Navigation

## 适用场景

- 电商、检索结果等多维度数据浏览
- 后台列表需要组合条件定位记录
- 需要展示各选项的结果数（facet count）

## 不适用场景

- 维度极少（1~2 个，用下拉或搜索框即可）
- 筛选计算很慢（需要防抖与加载态）
- 移动端直接堆砌（收进底部抽屉承载）

## 常见形式

- **侧边常驻** (Sidebar) — 桌面列表页左侧常驻
- **抽屉唤起** (Drawer) — 移动端以底部抽屉承载
- **条件胶囊** (Chips) — 已选条件以可删除胶囊回显在列表上方

## Platform API

- `<fieldset>`
- `<form>`

## 实现要点

**CSS:** `flex` `grid` `overflow-y: auto` `position: sticky`

左筛选 + 右结果的双栏布局（lg 以下收进抽屉）。多选状态用 Set<string> 管理， 过滤结果用 useMemo 派生；面板顶部常驻结果数与「清除全部」；已选条件回显为可删胶囊。 选项旁标注 facet 数量帮助用户预估结果规模；重筛选时防抖并给列表 loading 态。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现筛选面板（Filter Panel）。

先检查现有组件体系、路由参数与数据源，保持状态同步方式一致。
用途：检索结果页与后台列表。
要求：
- 分组复选 + facet 数量 + 实时过滤
- 结果数与「清除全部」常驻，已选条件胶囊回显
- 无结果时给出空态与清除入口
- URL 参数或状态可恢复，深浅色主题一致
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个筛选面板（Filter Panel）：左侧分组复选条件，右侧商品列表，勾选后列表实时过滤并显示结果数。

**Design:** 创建筛选面板。要求：分组标题 + 复选项（右侧带 facet 数量灰字）；面板顶部显示「共 N 个结果」 与「清除全部」按钮；已选条件以可删除胶囊回显在列表上方；选中项强调色标识； 移动端收进底部抽屉；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 FilterPanel：selected: Set<string> 受控， filtered = useMemo(() => items.filter(...), [selected])；每组渲染 checkbox + facet 数量； 结果区显示 filtered.length 与空态（empty-state）；清除全部 selected.clear()； 胶囊回显 selected 项，点 × 移除；容器 lg:grid-cols-[200px_1fr]，小屏改抽屉； 防抖在数据源异步时处理。

## 相关概念

- [search-filtering](/components/search-filtering) — 搭配使用
- [checkbox](/components/checkbox) — 相似概念
- [drawer](/components/drawer) — 相似概念
- [search](/components/search) — 搭配使用

## Sources

- [Nielsen Norman Group — Faceted Navigation](https://www.nngroup.com/articles/faceted-navigation/)
- [MDN — :checked pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked)

---

JSON: `/api/concept/components/filter-panel.json` · 站点: /components/filter-panel
