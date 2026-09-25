# 分段控制器 / Segmented Control

> 组件 · `id: segmented-control`

将少量互斥选项并排放在同一个容器中的选择控件。选中状态通过底色、文字和边界同时表达，切换后立即更新当前视图或设置。它适合时间范围、显示方式等轻量选择；选项应简短、稳定且始终可见。与标签页不同，它通常修改同一内容的呈现方式，而不是进入另一组内容。

**别名:** 分段选择 · 几个按钮连在一起 · 周月年切换 · segmented buttons

**分类:** Selection

## 名词辨析

Segmented Control（分段控制器）是紧凑的互斥选择条，常用于模式/筛选；Tabs 切换内容面板；Radio 是表单内互斥选择。

## 适用场景

- 在统计图中选择周、月、年。
- 在同一内容中切换显示密度或排序方式。

## 不适用场景

- 选项过多或名称较长时使用选择框。
- 允许同时选中多个值时使用复选框。

## 常见形式

- **填充分段** (Filled) — 共享底板，选中项抬高，适合工具界面。
- **描边分段** (Outlined) — 外边框包裹，选中项用强调色表达。

## 实现要点

**CSS:** `display: flex` `:checked` `:focus-visible`

互斥值优先使用原生同名 radio，保留方向键操作。整段共用一个可访问名称；不要只靠颜色表示选中状态。每个选项至少提供 40px 的点击高度，结果随选择同步更新。

## 交给 Agent 的任务 Prompt

```text
先检查当前项目的组件与样式体系，复用已有能力实现分段控制器。
要求：
- 互斥值优先使用原生同名 radio，保留方向键操作。整段共用一个可访问名称；不要只靠颜色表示选中状态。每个选项至少提供 40px 的点击高度，结果随选择同步更新。
- 选中项和展示结果应始终一致。
- 一组只能选中一项，方向键可以连续切换。
- 窄屏可用，深浅色一致，尊重 reduced-motion。
- 不新增依赖。
运行项目现有检查，并列出修改文件及验证结果。
```

### 其余层级 Prompt

**Basic:** 创建分段控制器组件。在统计图中选择周、月、年。

**Design:** 设计分段控制器，以清楚的层级、可见的状态和明确的反馈为优先。共享底板，选中项抬高，适合工具界面。外边框包裹，选中项用强调色表达。选中项和展示结果应始终一致。一组只能选中一项，方向键可以连续切换。

**Implementation:** 互斥值优先使用原生同名 radio，保留方向键操作。整段共用一个可访问名称；不要只靠颜色表示选中状态。每个选项至少提供 40px 的点击高度，结果随选择同步更新。

## 相关概念

- [radio](/components/radio) — 相似概念
- [tabs](/components/tabs) — 相似概念
- [switch](/components/switch) — 相似概念

## 容易混淆

- [tabs](/components/tabs) — Tabs 对应内容面板，Segmented Control 对应状态/模式。
- [radio](/components/radio) — Radio 属表单字段，Segmented Control 属视图切换。
- [switch](/components/switch) — Switch 是开/关二态，Segmented Control 是多选一。

## Sources

- [W3C WAI — Accessible interaction patterns](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)

---

JSON: `/api/concept/components/segmented-control.json` · 站点: /components/segmented-control
