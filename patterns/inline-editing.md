# 行内编辑 / Inline Editing

> 交互模式 · `id: inline-editing`

页面上的文本本身即可编辑：单击把文本原位变成输入框，Enter 或失焦确认，Esc 取消， 改完所见即所得。它解决的是"小改动也要跳转完整编辑页"的问题—— 把修改成本降到一次点击，特别适合单字段的快速修订场景。

**别名:** Inline Editing · 行内编辑 · 就地编辑 · 点击变输入框 · 原地编辑 · 即点即改 · 单击编辑

**分类:** Interaction / Forms

## 适用场景

- 文档标题、昵称等单字段的快速修改
- 看板卡片、表格单元格的轻量修订
- 低风险、易恢复的文本内容

## 不适用场景

- 字段有复杂校验或多字段联动
- 误触成本高的区域（缺乏明确编辑入口时）
- 需要草稿、版本等编辑上下文的场景

## 常见形式

- **点击编辑** (Click to edit) — 静态文本与输入框原位切换
- **悬停提示** (Hover affordance) — 悬停出现虚线下划线或铅笔图标提示可编辑
- **确认与取消** (Commit and cancel) — Enter / 失焦确认，Esc 取消并还原

## 实现要点

**CSS:** `contenteditable` `focus outline` `border-accent` `aria-live`

双态切换实现：非编辑态渲染 button 或带 role="button" 的文本，编辑态渲染 input/textarea 并自动聚焦、全选。Enter（多行时 Shift+Enter 换行）或失焦提交，Esc 还原； 空值回退为原文。悬停用虚线下划线提示可编辑，切换可加轻微高度过渡。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现行内编辑（Inline Editing）。

先检查现有输入组件与表单校验体系，优先复用现有的输入框样式与提交逻辑。
用途：个人资料页昵称与简介的快速修改。
要求：
- 点击文本原位切换为输入框，自动聚焦并全选
- Enter 或失焦确认，Esc 取消还原，空值回退
- 悬停有可编辑提示（虚线下划线或铅笔图标）
- 多行字段支持 Shift+Enter 换行
- 尊重 prefers-reduced-motion
- 不新增不必要的依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个行内编辑（Inline Editing）组件：点击文本原位变成输入框， Enter 确认、Esc 取消，常用于标题和昵称修改。

**Design:** 设计一组行内编辑字段。要求：悬停出现虚线下划线与铅笔图标提示可编辑； 编辑态输入框尺寸与文本接近、边框用强调色；提供确认与取消小按钮； 多行字段支持 Shift+Enter 换行；支持深浅色主题。

**Implementation:** 用 React + Tailwind 实现 Inline Editing。每个字段维护 value / editing / draft 三个状态； 点击文本进入编辑态并 autoFocus + select；onKeyDown 处理 Enter 提交、Esc 还原， onBlur 提交；空 draft 回退原值。多行用 textarea。编辑态输入框用 border-accent outline-none，静态态用 hover 虚线下划线。

## 相关概念

- [input](/patterns/input) — 搭配使用
- [textarea](/patterns/textarea) — 搭配使用
- [form-validation](/patterns/form-validation) — 相似概念
- [optimistic-ui](/patterns/optimistic-ui) — 相似概念
- [button](/patterns/button) — 搭配使用

## Sources

- [NN/g — In-Page Editing](https://www.nngroup.com/articles/)
- [MDN — contenteditable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable)

---

JSON: `/api/concept/patterns/inline-editing.json` · 站点: /patterns/inline-editing
