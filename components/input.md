# 输入框 / Input

> 组件 · `id: input`

用一条带边框的水平输入区收集单行文本，是表单的基本单元。 占位符提示期望格式，聚焦时高亮边框引导视线，校验失败时切换错误色 并附提示文案；可内嵌前后缀图标与清除按钮，受控管理输入值。

**别名:** 输入框 · 文本输入框 · 文本框 · 输入栏 · 表单输入框 · 单行输入框

**分类:** Form / Input

## 适用场景

- 收集用户名、邮箱、标题等单行短文本
- 表单校验需要即时反馈错误与格式提示
- 搜索等需要前后缀图标或清除按钮的场景

## 不适用场景

- 长段落、简介等多行内容，改用 textarea
- 选项固定且少于 5 个，用 radio 或 select 更高效
- 需要复杂格式编辑（富文本、日期），用专用组件

## 常见形式

- **描边** (Outline) — 边框包裹，最通用
- **填充** (Filled) — 浅灰底无边框，Material 常用
- **带前后缀** (With addons) — 内嵌图标与清除按钮

## Platform API

- `<input>`
- `type`
- `role="textbox"`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| HTML | [<input>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) |
| shadcn/ui | [Input](https://ui.shadcn.com/docs/components/input) |
| MUI | [TextField](https://mui.com/material-ui/react-text-field/) |
| AntD | [Input](https://ant.design/components/input) |

## 实现要点

**CSS:** `border` `outline` `box-shadow: ring` `transition`

基础样式是 border + rounded + px，focus 时叠加 accent 色描边（box-shadow 实现， 不改动布局）；错误态切换 border 与提示文字颜色。清除按钮用绝对定位内嵌右侧。 高度控制在 36～44px，placeholder 用低对比灰。始终配 label 或 aria-label。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现输入框组件。

先检查现有表单组件与 Design Token，保持风格一致。
要求：
- 受控输入，支持 label、placeholder、prefix/suffix
- 聚焦描边与错误态（错误文案由外部校验逻辑传入）
- 非空时显示清除按钮
- 深浅色主题一致，无障碍标注齐全
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个输入框组件，支持标签、占位符、清除按钮和错误提示。

**Design:** 创建输入框组件。要求：外置左对齐 label，聚焦时 accent 描边，输入非空时右侧出现 清除按钮，校验失败切红并显示错误文案；提供描边与填充两种样式，深浅色一致。

**Implementation:** 用 React + Tailwind 实现 Input：受控 value；focus 态用 focus:border-accent + focus-visible ring；错误态由 error prop 驱动；清除按钮 absolute 定位并留出右侧 padding；支持 prefix / suffix 插槽与 maxLength。label 用 htmlFor 关联。

## 相关概念

- [textarea](/components/textarea) — 相似概念
- [select](/components/select) — 相似概念
- [form-validation](/components/form-validation) — 搭配使用
- [search-filtering](/components/search-filtering) — 搭配使用

## 可搭配的风格

`minimalism` `swiss-style`

## Sources

- [Material Design — Text fields](https://m3.material.io/components/text-fields/overview)
- [Apple HIG — Text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields)

---

JSON: `/api/concept/components/input.json` · 站点: /components/input
