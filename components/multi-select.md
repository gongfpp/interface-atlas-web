# 多选框组 / Multi-select

> 组件 · `id: multi-select`

允许从一组选项中挑选多个值，并以标签形式回显已选集合的选择控件。与单选下拉不同，展开面板在选择后保持打开，已选项可逐个移除；适合标签、权限、筛选条件等需要累积多个值的表单场景。选项很多时应配合搜索。

**别名:** 多选 · 多选下拉 · 可多选的选择框 · 多选框 · multi select

**分类:** Form / Input

## 名词辨析

「多选」口语上也可能指 checkbox 复选框本身；本词条专指带列表与标签回显的组合选择控件。

## 适用场景

- 需要一次提交多个值，如标签、权限、筛选条件
- 已选项需要随时可见并可单独删除
- 选项集合固定，且可能较多、需要搜索或分组

## 不适用场景

- 只能选一个值，用 select 或 combobox 更准确
- 选项少于 5 个且无需回显，平铺 checkbox 更快
- 值由用户自由创造而非从列表挑选，用 tag-input

## 常见形式

- **标签回显** (Chip echo) — 已选项以可删除标签排布在控制区内，最常见形态
- **复选列表** (Checkbox list) — 选项平铺为复选框组，所见即所得
- **双列表** (Dual listbox) — 左右两个列表加转移按钮，适合大量已选项的管理

## Platform API

- `role="listbox"`
- `aria-multiselectable`
- `aria-selected`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| ARIA APG | [Listbox (multi-select)](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) |
| shadcn/ui | [Combobox (multiple)](https://ui.shadcn.com/docs/components/combobox) |
| React Select | [isMulti](https://react-select.com/advanced) |

## 实现要点

**CSS:** `flex-wrap` `scroll`

控制区用 flex-wrap 排布标签，高度随已选项增长；列表绝对定位在下方，max-height + overflow-y-auto 控制高度。选择不关闭面板，Escape 收起，点击外部关闭。键盘在选项间移动并用 aria-selected 标注，标签的删除按钮需可聚焦。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现一个 Multi-select 多选控件。
先检查现有组件体系和 Design Token，优先复用当前组件。
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion，支持键盘操作。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个多选框组组件，可从列表挑选多个值，已选项以标签回显并可单独删除。

**Design:** 设计多选框组。要求：控制区内已选项以标签回显，标签带删除按钮；展开列表中已选项有勾选态；空状态与无结果均有说明文案；选择后面板保持打开；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现多选框组：value 为字符串数组；列表 role="listbox" 且 aria-multiselectable="true"，选项 role="option" + aria-selected；点击选项切换成员而不关闭面板；标签删除按钮与选项均可用键盘访问；支持清空全部。

## 相关概念

- [select](/components/select) — 替代方案
- [combobox](/components/combobox) — 替代方案
- [tag-input](/components/tag-input) — 相似概念

## 容易混淆

- [select](/components/select) — select 是互斥单选，多选框组累积多个值并以标签回显
- [combobox](/components/combobox) — combobox 强调输入检索并提交单值，多选框组强调集合管理

## Sources

- [ARIA APG Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- [Material Design — Chips](https://m3.material.io/components/chips/overview)
- [MDN — ARIA listbox role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)

---

JSON: `/api/concept/components/multi-select.json` · 站点: /components/multi-select
