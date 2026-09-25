# 标签输入 / Tag Input

> 组件 · `id: tag-input`

在文本框里回车或输入分隔符，就把当前内容固化成一枚可删除的标签（chip），标签在框内横向排列， 输入光标始终停在末尾。兼顾「自由输入」与「逐项管理」，常用于收件人、话题标签、文件名与 过滤条件。Backspace 删最后一枚，点 × 删指定项。

**别名:** 标签输入 · 标签框 · 打标签的输入框 · chips 输入 · token input · tag box

**分类:** Form / Input

## 适用场景

- 多值输入且每项可单独删除（收件人、标签、过滤词）
- 选项集合开放，允许用户创造新值
- 需要在输入过程中一眼看清「已经选了什么」

## 不适用场景

- 选项固定且数量少（用 select 或 radio）
- 只需要一个短文本（用普通 input）
- 需要对选项排序或分组（用 multi-select 或 transfer）

## 常见形式

- **自由输入** (Free-form tags) — 回车即成标签，不校验词表
- **自动补全** (Autocomplete tokens) — 边输入边从候选中补全，仍可自创新值
- **文件名标签** (File-name chips) — 展示已选文件名，仅可移除不可编辑

## Platform API

- `<input>`
- `role="listbox"`
- `aria-live`
- `keydown`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| MUI | [Autocomplete (multiple)](https://mui.com/material-ui/react-autocomplete/) |
| React Select | [Multi value](https://react-select.com/advanced#multi-value) |
| AntD | [Select mode="tags"](https://ant.design/components/select) |

## 实现要点

**CSS:** `flex` `flex-wrap` `gap` `border-radius: 9999px`

容器是一块「看起来像输入框」的 flex-wrap 区，标签用圆角胶囊排在前面，真实 input 撑开 剩余宽度。回车 / 逗号 / 失焦时提交去重后的值；Backspace 在输入为空时删除最后一枚。 删除按钮用 button 而非纯图标 span，移除后 aria-live 播报「已移除 xx」。自动补全变体 在容器下方绝对定位候选列表，键控上下键移动高亮。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现一个 Tag Input 标签输入组件。
先检查现有组件体系和 Design Token，优先复用输入框与徽标样式。
支持自由输入、自动补全与文件名三种形态。
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion，支持键盘操作。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个标签输入（Tag Input）组件：文本框内回车生成可删除的标签，Backspace 删除最后一枚。

**Design:** 创建标签输入：容器呈输入框外观（圆角、边框），内部标签为浅底胶囊带 × 移除钮， 光标处保持可输入；聚焦时边框主色；已输入过多时容器内换行增高；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Tag Input：tags: string[] 受控；input keydown 处理 Enter、 逗号、Backspace；去重并 trim 后提交；每枚标签为 button 移除；aria-live="polite" 播报增删；自动补全变体用过滤后的候选 + 上下键高亮；空值与重复值不产生标签。 无新增依赖。

## 相关概念

- [input](/components/input) — 相似概念
- [combobox](/components/combobox) — 相似概念
- [badge](/components/badge) — 搭配使用
- [multi-select](/components/multi-select) — 搭配使用

## Sources

- [Material Design — Chips](https://m3.material.io/components/chips/overview)
- [ARIA APG — Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [MDN — The Input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

---

JSON: `/api/concept/components/tag-input.json` · 站点: /components/tag-input
