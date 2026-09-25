# 下拉选择 / Select

> 组件 · `id: select`

用收起的单行控件承载一组互斥选项，点击展开面板后选择其一，选中值常驻显示在触发器上。 比 radio 更省空间，适合选项多于 5 个的场景；面板支持滚动、分组或搜索，选择即关闭。

**别名:** 下拉选择 · 下拉框 · 选择器 · 下拉列表 · 下拉选项框 · select 下拉

**分类:** Form / Input

## 适用场景

- 选项数量多于 5 个且互斥单选
- 表单空间有限，需要收起选项列表
- 选项可分组或较长（国家、时区、分类）

## 不适用场景

- 选项少于 5 个，直接平铺 radio 更快
- 选项很多且需要键盘快速检索，用可搜索的下拉或命令面板
- 允许多选时需明确多选语义，避免误用单选下拉

## 常见形式

- **原生** (Native) — 系统控件，移动端体验最好
- **自定义面板** (Custom panel) — 可完全定制样式与分组
- **多选** (Multiple) — 以标签（chip）呈现已选集合

## Platform API

- `<select>`
- `role="listbox"`
- `role="option"`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| HTML | [<select>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) |
| shadcn/ui | [Select](https://ui.shadcn.com/docs/components/select) |
| MUI | [Select](https://mui.com/material-ui/react-select/) |
| AntD | [Select](https://ant.design/components/select) |

## 实现要点

**CSS:** `position: absolute` `max-height: overflow` `z-index: 10` `transition`

触发器样式与输入框一致，右侧 chevron 随展开旋转；面板绝对定位于触发器下方， max-height + overflow-y-auto 控制高度。键盘用 aria-expanded / role="listbox" / role="option" 与 aria-selected 标注，Escape 关闭、点击外部关闭。 多选时点击不关闭，已选项以 chip 展示。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现下拉选择组件。

先检查现有表单组件与弹出层实现，保持风格与层级（z-index）一致。
要求：
- 受控单选，触发器显示当前值 + 旋转 chevron
- 展开面板：滚动、当前项高亮、点击外部与 Escape 关闭
- 无障碍：aria-expanded、role=listbox/option、键盘上下选择
- 深浅色主题一致
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个下拉选择组件，点击展开选项面板，选中值显示在触发器上。

**Design:** 创建下拉选择组件。要求：触发器与输入框风格一致（边框 + 右侧旋转 chevron）， 展开面板带阴影、当前项高亮、支持滚动；选中后面板关闭并更新触发器文案； 支持选项分组；深浅色一致。

**Implementation:** 用 React + Tailwind 实现 Select：受控 value 与 open 状态；面板绝对定位 + max-h-60 overflow-auto；选项 role="option" + aria-selected；监听 document 点击 与 Escape 关闭；键盘上下键移动高亮项。多选模式选项点击不关闭，value 为数组， 已选渲染为可删除 chip。

## 相关概念

- [dropdown](/components/dropdown) — 相似概念
- [menu](/components/menu) — 相似概念
- [radio](/components/radio) — 相似概念
- [form-validation](/components/form-validation) — 搭配使用
- [command-palette](/components/command-palette) — 相似概念

## 可搭配的风格

`minimalism` `swiss-style`

## Sources

- [W3C APG — Select-Only Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [Material Design — Menus](https://m3.material.io/components/menus/overview)

---

JSON: `/api/concept/components/select.json` · 站点: /components/select
