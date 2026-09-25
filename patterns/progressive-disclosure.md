# 渐进式披露 / Progressive Disclosure

> 交互模式 · `id: progressive-disclosure`

把信息分层呈现：先给最常用、最必要的部分，把次要细节藏到"展开""下一步""显示更多"后面， 用户主动索取时才展示。它解决的是一次性塞给用户太多内容的问题—— 降低初始认知负担，让界面入门简单，同时保留深度供高级用户按需取用。

**别名:** Progressive Disclosure · 渐进式披露 · 逐步展开 · 分步显示 · 折叠收起详情 · 点开看更多 · 显示高级选项

**分类:** Content / Interaction

## 适用场景

- 设置页中低频的高级选项
- 表单中选填或仅在特定条件下需要的字段
- 长内容的摘要与全文分层

## 不适用场景

- 高频功能被折叠后难以被发现
- 用户需要横向对比全部选项
- 关键路径操作，隐藏会直接阻断任务

## 常见形式

- **折叠展开** (Collapsible section) — 折叠面板承载次要信息，箭头指示状态
- **摘要 + 显示更多** (Excerpt + show more) — 先给节选，点击展开完整列表或全文
- **分步呈现** (Stepwise reveal) — 向导式逐屏揭示，一步只做一件事

## 实现要点

**CSS:** `max-height transition` `grid-template-rows` `aria-expanded` `rotate`

触发器绑定 aria-expanded 与 aria-controls，展开区用 max-height 或 grid-template-rows: 0fr/1fr 过渡高度；默认收起时次级内容不渲染或 hidden， 避免隐藏字段参与校验。箭头图标随状态旋转，动画尊重 prefers-reduced-motion。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现渐进式披露（Progressive Disclosure）。

先检查现有折叠组件与表单体系，优先复用现有的展开动画与箭头图标。
用途：发布表单的高级选项区域。
要求：
- 默认只显示必要字段，高级选项默认收起
- 触发器带 aria-expanded / aria-controls，箭头随状态旋转
- 展开高度平滑过渡，收起时其余布局不跳动
- 收起的字段不参与校验
- 尊重 prefers-reduced-motion
- 不新增不必要的依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个渐进式披露（Progressive Disclosure）表单：默认只显示标题和正文， 点击「高级选项」展开标签与可见范围设置。

**Design:** 设计一个渐进式披露的发布表单。要求：主表单只保留必要字段；"高级选项"触发器带旋转箭头 与 aria-expanded；展开区高度平滑过渡，字段分组清晰；收起后表单其余布局不跳动；支持深浅色主题。

**Implementation:** 用 React + Tailwind 实现 Progressive Disclosure。useState 管理 open； 触发按钮设置 aria-expanded 并旋转箭头图标；展开区用 grid-template-rows: 0fr / 1fr 加 transition 实现高度动画； 收起时次级字段设置 hidden 以跳过表单校验。尊重 prefers-reduced-motion （关闭高度过渡）。

## 相关概念

- [accordion](/patterns/accordion) — 搭配使用
- [form-validation](/patterns/form-validation) — 相似概念
- [onboarding-tour](/patterns/onboarding-tour) — 相似概念
- [drawer](/patterns/drawer) — 搭配使用
- [tooltip](/patterns/tooltip) — 搭配使用

## Sources

- [NN/g — Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)
- [Apple HIG — Expanding Content](https://developer.apple.com/design/human-interface-guidelines/)

---

JSON: `/api/concept/patterns/progressive-disclosure.json` · 站点: /patterns/progressive-disclosure
