# 工具提示 / Tooltip

> 组件 · `id: tooltip`

悬停在元素上短暂出现的小型文字气泡，用来解释图标按钮、缩写或被截断的文本。 纯提示、不可交互，移开即消失；通常延迟约 300ms 出现以避免扫过时闪烁。

**别名:** 提示气泡 · 悬浮提示 · 气泡提示 · 悬停提示 · 小黑框提示 · title 提示 · 鼠标放上去显示的小提示

**分类:** Overlay / Feedback

## 名词辨析

Tooltip 是悬停/聚焦时的简短说明；Popover 可交互；Label 是常驻表单标签。Tooltip 不应承载交互或关键信息。

## 适用场景

- 纯图标按钮需要文字说明
- 文本被截断，需要展示完整内容
- 补充不关键的专业术语或快捷键

## 不适用场景

- 信息必须长期可读（改用可见文字或帮助 popover）
- 触屏设备没有 hover（禁用或换 long-press）
- 气泡内含链接、按钮等交互元素（改用 popover）

## 常见形式

- **深色气泡** (Dark) — 白字深底，桌面端最常见默认
- **浅色卡片** (Light) — 带边框与阴影，可承载稍多信息
- **富提示** (Rich) — 含标题、快捷键或图标，仍不可交互

## Platform API

- `role="tooltip"`
- `aria-describedby`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| ARIA APG | [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) |
| shadcn/ui | [Tooltip](https://ui.shadcn.com/docs/components/tooltip) |
| MUI | [Tooltip](https://mui.com/material-ui/react-tooltip/) |
| AntD | [Tooltip](https://ant.design/components/tooltip) |

## 实现要点

**CSS:** `position: absolute` `pointer-events: none` `z-index` `transition`

触发元素 relative，气泡 absolute 按方向偏移；延迟 300~500ms 出现、移开立即消失。 气泡加 pointer-events: none 防止移向气泡时闪烁；同时支持 focus 显示以保证键盘可访问 （aria-describedby）。触屏端提供替代方案或干脆不显示。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现工具提示（Tooltip）组件。

先检查现有组件体系与 Design Token，优先复用现有的表面色与圆角变量。
用途：图标按钮的文字说明。
要求：
- 悬停延迟约 300ms 显示，移开立即消失
- 气泡 pointer-events: none，支持四方向放置
- focus 时同样显示，触发元素加 aria-describedby
- 动画尊重 prefers-reduced-motion
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个工具提示（Tooltip）组件：悬停在按钮上时在上方显示文字气泡，移开消失。

**Design:** 创建 Tooltip 组件。要求：深色小气泡（圆角、小字号）出现在触发元素上方居中，带向下小箭头； 悬停延迟约 300ms 出现、淡入淡出各 150ms；气泡不可选中、不阻挡鼠标；支持四方向放置。

**Implementation:** 用 React + Tailwind 实现 Tooltip：触发元素 relative，气泡 absolute 定位在反方向； onMouseEnter 用 setTimeout 延迟显示（存 timer 便于清理），onMouseLeave 立即隐藏； 气泡 pointer-events-none + aria-hidden，触发元素加 aria-describedby； 出现动画 opacity + 轻微位移，时长乘 var(--demo-speed, 1)； focus 时同样显示；尊重 prefers-reduced-motion。

## 相关概念

- [popover](/components/popover) — 相似概念
- [modal](/components/modal) — 相似概念
- [toast](/components/toast) — 相似概念
- [button](/components/button) — 相似概念

## 容易混淆

- [popover](/components/popover) — Popover 点击出现、可交互；Tooltip 悬停出现、只读。
- [toast](/components/toast) — Toast 是系统反馈、自动消失；Tooltip 解释控件、跟随指针。

## Sources

- [WAI-ARIA Authoring Practices — Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
- [Apple HIG — Tooltips](https://developer.apple.com/design/human-interface-guidelines/tooltips)

---

JSON: `/api/concept/components/tooltip.json` · 站点: /components/tooltip
