# 多行输入框 / Textarea

> 组件 · `id: textarea`

用一块可多行增长的输入区收集长文本，如简介、备注、留言与反馈。 支持手动或自动增高，常配字数统计与提交按钮；超出上限时计数变红提醒， 内容换行显示而非溢出截断。

**别名:** 多行输入框 · 文本域 · 大输入框 · 留言框 · 备注框 · 富文本输入区

**分类:** Form / Input

## 适用场景

- 收集简介、备注、留言等多段落长文本
- 用户需要换行组织内容结构
- 字数有限制，需要实时统计反馈

## 不适用场景

- 单行短字段（姓名、邮箱），用 input 更紧凑
- 需要加粗、标题等格式，用富文本编辑器
- 结构化输入（键值对、标签），用专用控件

## 常见形式

- **固定高** (Fixed) — 固定行数内滚动，布局稳定
- **自动增高** (Autosize) — 随内容增长，适合聊天与评论框
- **带字数** (With counter) — 右下角实时字数，超限变红

## Platform API

- `<textarea>`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| HTML | [<textarea>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) |
| shadcn/ui | [Textarea](https://ui.shadcn.com/docs/components/textarea) |
| MUI | [TextField multiline](https://mui.com/material-ui/react-text-field/) |
| AntD | [Input.TextArea](https://ant.design/components/input) |

## 实现要点

**CSS:** `resize` `field-sizing: content` `max-height: overflow` `counter: length`

基础样式与 input 一致但多行：min-h 固定起点，resize-y 允许拖拽增高； 自动增高用 field-sizing: content（或 JS 监听 input 设置 scrollHeight）。 字数统计用 value.length 对比 maxLength，超限切换红色并阻止继续提交。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现多行输入框组件。

先检查现有表单组件与 Design Token，保持风格一致。
要求：
- 受控多行输入，支持自动增高与手动拖拽
- 实时字数统计，超限变红并禁用提交
- 聚焦描边与无障碍标注（label 关联）
- 深浅色主题一致
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个多行输入框组件，支持标签、字数统计和提交按钮。

**Design:** 创建多行输入框组件。要求：min-h 四行起点、可拖拽纵向增高；右下角实时字数统计 （超过上限变红）；下方提交按钮在为空或超限时禁用；聚焦 accent 描边；深浅色一致。

**Implementation:** 用 React + Tailwind 实现 Textarea：受控 value + maxLength；自动增高监听 onInput 将 height 置为 auto 再取 scrollHeight（或用 field-sizing: content）；计数 value.length / maxLength，接近上限预警色、超限红；提交按钮 disabled 条件为 空或超限；resize-y + max-h 防止无限增高。

## 相关概念

- [input](/components/input) — 相似概念
- [form-validation](/components/form-validation) — 搭配使用
- [inline-editing](/components/inline-editing) — 搭配使用
- [toast](/components/toast) — 相似概念

## 可搭配的风格

`minimalism` `editorial`

## Sources

- [MDN — textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
- [Apple HIG — Text views](https://developer.apple.com/design/human-interface-guidelines/text-fields)

---

JSON: `/api/concept/components/textarea.json` · 站点: /components/textarea
