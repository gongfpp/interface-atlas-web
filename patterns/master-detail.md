# 主从视图 / Master Detail

> 交互模式 · `id: master-detail`

左侧一列摘要条目，右侧展示选中项的完整详情，点击左侧条目右侧即时联动更新。 它解决的是"在列表页与详情页之间来回跳转"的问题——总览与细读同屏共存， 用户切换条目不丢方向感，浏览和比对多个条目的成本大幅降低。

**别名:** Master Detail · 主从视图 · 主从布局 · 列表详情联动 · 左右分栏 · 双栏视图 · 左边列表右边详情

**分类:** Layout / Navigation

## 适用场景

- 邮件、文件管理器等条目密集的工具界面
- 需要在多个条目间快速切换或比对
- 宽屏空间充足，可容纳两栏

## 不适用场景

- 屏幕过窄，需退化为列表 + 详情两级页面
- 详情内容很重，与列表同屏会互相挤压
- 条目间没有浏览关系，用户只看单个对象

## 常见形式

- **双栏同屏** (Two-pane) — 宽屏经典左右布局，点选即联动
- **窄屏堆叠** (Stacked) — 窄屏先列表后详情，可返回列表
- **常驻选中** (Persistent selection) — 列表保持选中高亮，滚动位置不丢失

## 实现要点

**CSS:** `flex` `overflow-y-auto` `aria-selected` `min-width`

外层 flex，主列表固定或弹性宽度、独立 overflow-y-auto，详情面板占剩余空间； 列表项用 role="listbox"/option 或按钮加 aria-selected 表达选中态。 窄屏用容器查询或断点切换为堆叠布局：列表在上，选中后详情推入或覆盖， 提供明确的返回操作。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现主从视图（Master Detail）。

先检查现有列表、侧栏与详情组件，优先复用现有的选中态样式。
用途：项目列表 + 项目详情的同屏联动界面。
要求：
- 左侧摘要列表，右侧详情面板，点选即时联动
- 选中态清晰（高亮 + 强调条），列表滚动位置不丢失
- 两栏独立滚动，窄屏退化为堆叠布局并提供返回
- 支持 Dark Mode
- 不新增不必要的依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个主从视图（Master Detail）布局：左侧项目列表，右侧显示选中项目的详情， 点击左侧条目右侧即时联动。

**Design:** 设计一个主从视图界面。要求：左列摘要条目（名称 + 状态），选中项高亮并带左侧强调条； 右侧详情含标题、状态徽章、负责人与进度条；列表与详情各自独立滚动； 提供窄屏堆叠变体；支持深浅色主题。

**Implementation:** 用 React + Tailwind 实现 Master Detail。useState 记录选中 id； 外层 flex + 固定高度，左列 w-40 overflow-y-auto，列表按钮用 aria-selected 与 bg-accent-soft 高亮；右侧 flex-1 渲染详情（标题、徽章、进度条）。 变体模式渲染双栏与堆叠两个小样。尊重 prefers-reduced-motion。

## 相关概念

- [sidebar](/patterns/sidebar) — 搭配使用
- [table](/patterns/table) — 搭配使用
- [card](/patterns/card) — 搭配使用
- [drawer](/patterns/drawer) — 搭配使用
- [tabs](/patterns/tabs) — 搭配使用

## Sources

- [Apple HIG — Split Views](https://developer.apple.com/design/human-interface-guidelines/split-views)
- [Material Design — Lists](https://m3.material.io/components/lists/overview)

---

JSON: `/api/concept/patterns/master-detail.json` · 站点: /patterns/master-detail
