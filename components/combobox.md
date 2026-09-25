# 可搜索选择框 / Combobox

> 组件 · `id: combobox`

把文本输入和候选选项组合在一起的选择组件。用户可以输入关键词缩小范围，再通过鼠标或键盘确定一个值。输入文本、当前高亮项和最终选中值是不同状态；当没有匹配项时，应解释结果并允许清空重选。它适合选项较多、用户又可能记得部分名称的场景。

**别名:** 可以搜索的下拉框 · 输入筛选选项 · 自动补全选择 · autocomplete

**分类:** Form

## 适用场景

- 从较多城市、成员或风格中选择已知选项。
- 需要在输入中快速筛选并保留明确选中值。

## 不适用场景

- 只有两三个选项，使用 radio 更直接。
- 允许任意输入且没有候选数据，使用普通输入框。

## 常见形式

- **可输入筛选** (Editable) — 键入关键词过滤候选项。
- **只选不输** (Select only) — 选项固定，通过菜单选择。

## 实现要点

**CSS:** `position: relative` `overflow-y: auto` `:focus-visible`

焦点留在输入框，用 aria-activedescendant 指向当前选项。配合 aria-expanded、aria-controls、listbox 和 option 表达结构。支持方向键、Enter、Escape，输入变化时重置高亮索引。

## 交给 Agent 的任务 Prompt

```text
先检查当前项目的组件与样式体系，复用已有能力实现可搜索选择框。
要求：
- 焦点留在输入框，用 aria-activedescendant 指向当前选项。配合 aria-expanded、aria-controls、listbox 和 option 表达结构。支持方向键、Enter、Escape，输入变化时重置高亮索引。
- 键盘高亮必须指向仍存在的候选项。
- 清空后恢复全部选项，Esc 只关闭列表。
- 窄屏可用，深浅色一致，尊重 reduced-motion。
- 不新增依赖。
运行项目现有检查，并列出修改文件及验证结果。
```

### 其余层级 Prompt

**Basic:** 创建可搜索选择框组件。从较多城市、成员或风格中选择已知选项。

**Design:** 设计可搜索选择框，以清楚的层级、可见的状态和明确的反馈为优先。键入关键词过滤候选项。选项固定，通过菜单选择。键盘高亮必须指向仍存在的候选项。清空后恢复全部选项，Esc 只关闭列表。

**Implementation:** 焦点留在输入框，用 aria-activedescendant 指向当前选项。配合 aria-expanded、aria-controls、listbox 和 option 表达结构。支持方向键、Enter、Escape，输入变化时重置高亮索引。

## 相关概念

- [input](/components/input) — 相似概念
- [select](/components/select) — 相似概念
- [command-palette](/components/command-palette) — 相似概念

## Sources

- [W3C WAI — Accessible interaction patterns](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

---

JSON: `/api/concept/components/combobox.json` · 站点: /components/combobox
